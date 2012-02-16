/*  Kanni IME Transliteration Javascrit Library
 *  Copyright (c) 2012 http://tamilnanbargal.com
 *
 *  Kanni GIT repository: https://github.com/vinoth3v/Kanni
 *  Kanni Demo : http://tamilnanbargal.com/tamil-typing
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Further to the terms mentioned you should leave this copyright notice
 * intact, stating me as the original author.
*/


(function () {
	

	if ( !window.Kanni ) {
		/**
		 * @name Kanni
		 * @namespace This is the API entry point.
		 * 
		 */
		window.Kanni = {
			'language' : 'en',		// default language
			'languages' : {},				// languages
			'switchkey' : 120, 			// F9
			'_previousLanguage_' : 'en', // previous typing method
			'showtios' : true,
		};
		
	}

	/**
	 * @name initialize
	 * 
	 * This is NOT a constrctor function.
	 * 
	 */
	Kanni.init = function(attachLangSwitch, swtchkey) {
		
		if (typeof attachLangSwitch == 'undefined') {
			attachLangSwitch = true;
		}
		
		if (typeof attachLangSwitch !== 'undefined') {
			this.switchKey(swtchkey);
		}
		
		if (attachLangSwitch) {
			Kanni.attachLanguageSwitcher();
			
			var select = document.getElementById('kanni-lang-switch');
			
			if (!select) {
				return true;
			}
			
			Kanni.method(select.value);
			
			this._attachEvent(document, 'keyup', function(e) {
				e = e || event;
				var key = e.which || e.keyCode;
				
				if ( key != Kanni.switchkey ) {
					return true;
				}
				
				Kanni.toggle();
				
				return false;
				
			});
			
			var nodes = this._getElementsByClass('kanni-enabled');
			for(var idx in nodes) {
				var node = nodes[idx];
				this._attachEvent(node, 'keypress', this.keyPressHandler);
				this._attachEvent(node, 'focus', this.showLanguageSwitcher);
				this._attachEvent(node, 'blur', this.hideLanguageSwitcher);
			}
		}
		
	}
	
	/**
	 * @name process
	 * 
	 * @return array Returns the array that contains left, prev, new and 
	 * right values which can be used to build the new string.
	 */ 
	Kanni.process = function (char, currstr, offset, lang) {
		
		// left_prev_(offset)new_right
		
		var leftstr = '';
		var prevstr = '';
		var rightstr = '';
		var newstr = '';
		var replacecount = 0;
		var maxprevchar = 4;
		
		if ('maxchar' in this.languages[lang]) {
			maxprevchar = this.languages[lang].maxchar;
		}
		
		if (offset <= 0) {
			leftstr = '';
			rightstr = currstr;
		} else {
			leftstr = currstr.substring(0, offset);
			rightstr = currstr.substring(offset);
		}
		
		if (leftstr.length > 0) {
			// split the string at particular position to ignore eng, spl keys.
			for(var i = leftstr.length-1; i>=0; i--) {
				var charat = leftstr.charAt(i);
				var charcodeat = leftstr.charCodeAt(i); 
				if (charcodeat <= 127) { //ignore all eng and spl chars
					break;
				}
				replacecount++;
				if ( replacecount >= maxprevchar) {
					break;
				}
			}
		}
		
		if (replacecount >= leftstr.length) {
			prevstr = leftstr;
			leftstr = '';
		} else {
			var replaceidx = leftstr.length - replacecount;
			if (replaceidx <= 0) {
				replaceidx = 0;
			}
			prevstr = leftstr.substring(replaceidx); // this is first line.
			leftstr = leftstr.substring(0, replaceidx);
		}
		
		newstr = this.map(char, prevstr, lang);
		
		return { 'left' : leftstr, 'prev' : prevstr, 'new' : newstr, 'right' : rightstr };
		
	}
	
	/**
	 * @name map 
	 * @return string The transliterated string for the language.
	 */
	Kanni.map = function (newchar, prevchar, lang) {
		
		var new_string = prevchar + newchar;
		
		if (lang in Kanni['languages']) {
			
			var charmap = Kanni['languages'][lang]['charmap'];
			
			for(var char in charmap) {
				//rexp = new RegExp(char, 'g');
				//new_string = new_string.replace(rexp, charmap[char]);
				new_string = new_string.replace(char, charmap[char]);
			}
		
		}
		
		return new_string;
		
	};

	/**
	 * Key press handler.
	 * 
	 */ 
	Kanni.keyPressHandler = function (event) {
		var target = event.target || event.srcElement;
		var doc = target.ownerDocument;
		
		return Kanni.KeyPressProcessor(event, target, doc);
		
	}
	
	/**
	 * Actual keypress processor.
	 * 
	 */ 
	Kanni.KeyPressProcessor = function (event, target, doc) {
		
		var key = event.keyCode || event.which;
		var offset = 0;
		
		if ( key == Kanni.switchkey ) {
			//Kanni.toggle();
			return false;
		}
		
		if (Kanni.language == 'en' ) {
			return true;
		}
		
		if (!Kanni.keyValidator(event, Kanni.language)) {
			return true;
		}
		
		var char = String.fromCharCode(key);
		
		var node = target;
		
		if ((node.nodeName.toLowerCase() == "input" && node.type.toLowerCase() == "text") || node.nodeName.toLowerCase() == "textarea") {
			
			var currstr = node.value;
			
			if ('selectionStart' in node) {
				offset = node.selectionStart;
			}else {
				range = document.selection.createRange();

				if (range && range.parentElement() == node) {
					var len = node.value.length;
					var value = node.value.replace(/\r\n/g, "\n");

					// Create a working TextRange that lives only in the input
					var r = node.createTextRange();
					r = r.duplicate();
					r.moveToBookmark(range.getBookmark());

					var endRange = node.createTextRange();
					endRange.collapse(false);

					if (r.compareEndPoints("StartToEnd", endRange) > -1) {
						start = end = len;
					} else {
						start = -r.moveStart("character", -len);
						start += value.slice(0, start).split("\n").length - 1;

						if (r.compareEndPoints("EndToEnd", endRange) > -1) {
							end = len;
						} else {
							end = -r.moveEnd("character", -len);
							end += value.slice(0, end).split("\n").length - 1;
						}
					}
				}
				
				offset = start;
				
			}
			
			var result = Kanni.process(char, currstr, offset, Kanni.language);
			var newstr = result['left'] + result['new'] + result['right'];
			
			node.value = newstr;
			
			var value = result['left'] + result['new'];
			value = value.replace(/\r\n/g, "1");
			offset = value.length;
			
			if ('selectionStart' in node) {
				node.selectionStart = offset;	
				node.selectionEnd = offset;
			} else if ('setSelectionRange' in node) {
				field.setSelectionRange(offset, offset);
			} else if ('createTextRange' in node) {
				var r = node.createTextRange();
				r.move('character', offset);
				//r.moveStart('character',  0);
				r.moveEnd('character',  0);
				r.collapse(false);
				r.select();
			}
			
		} else {
		
			if (doc.getSelection) {
				selection = doc.getSelection();
				range = selection.getRangeAt(0);
			} else if (doc.selection && doc.selection.createRange) {
				selection = doc.selection;
				range = doc.selection.createRange();
			}
			
			if ('startContainer' in range) {
				offset = range.startOffset;
				node = range.startContainer;
			} else { // it is for fu..nny IE
				
				var rng = range.duplicate();
				rng2 = range.duplicate();
				rng2.moveToElementText(rng.parentElement());
				rng2.setEndPoint('EndToStart', rng);
				offset = rng2.text.length;
				
				var rangeCopy = range.duplicate(); //Create a copy
				var rangeObj = range.duplicate();

				rangeCopy.collapse(true);
				rangeCopy.moveEnd('character', 1);
				
				var parentElement = rangeCopy.parentElement();
				rangeObj.moveToElementText(parentElement);
				rangeObj.setEndPoint('EndToEnd', rangeCopy);
				var text = rangeObj.text;
				
				var container = null;
				
				if (parentElement.childNodes.length > 0) {
					
					for(i = 0; i < parentElement.childNodes.length; i++) {
						tnode = parentElement.childNodes[i];
						if (tnode.nodeType == 3) {//Text node
							var find = tnode.nodeValue;
							var pos = text.indexOf(find);
							if(pos == 0 && text != find) {
								text = text.substring(find.length);
							} else {
								container = tnode;
								break;
							}
						}
					}
				}
				
				node = container;
				
				if (!node) {
					node = parentElement;
				}
			}
			
			offsetplus = 0;
			if (node.nodeType == 3) { //Text node
				nodevalue = node.nodeValue;
				oldprevstr  = '';
				oldnextstr  = '';
				
				if (node.parentNode) {
					pnode = node.parentNode;
					
					currhtml = pnode.innerHTML;
					if (currhtml.length > 4) {
						//alert('--' + currhtml + '--');
						find = currhtml.substring(currhtml.length-4);
						if (find == '<BR>') {
							oldprevstr = nodevalue;
							nodevalue = '\r\n';
							offsetplus += 2;
						}
						find = currhtml.substring(0, 4);
						if (find == '<BR>') {
							oldnextstr = nodevalue;
							nodevalue = '\r\n';
							//offsetplus += 2;
						}
					}
				}
				
				result = Kanni.process(char, nodevalue, offset, Kanni.language);
				
				newstr = result['left'] + result['new'] + result['right'] ;
				//alert('--' + result['left'] + '--' + result['new'] + '--' + result['right'] + '--' );
				if (oldprevstr.length){
					pnode.innerText = oldprevstr + newstr;
				} else if (oldnextstr.length){
					pnode.innerText = newstr + oldnextstr;
				} else {
					node.nodeValue = newstr;
				}
				
			} else {
				
				result = Kanni.process(char, '', offset, Kanni.language);
				
				newstr = result['left'] + result['new'] + result['right'];
				
				var newnode = doc.createTextNode(newstr);
				
				if (node.childNodes.length > 0 && node.childNodes[offset] ) {
					//nn = node.childNodes[offset].nextSibling;
					node.insertBefore(newnode, node.childNodes[offset]);
				} else if (node.nodeName == 'HR') {
					p = node.parentNode;
					p.insertBefore(newnode, node);
				} else {
					node.appendChild(newnode);
				}
				
				node = newnode;
			}
			
			var value = result['left'] + result['new'];
			value = value.replace(/\r\n/g, "1");
			offset = value.length + offsetplus;
			
			if ('setStart' in range) {
				range.setStart(node, offset);
				range.setEnd(node, offset);
				selection.removeAllRanges();
				selection.addRange(range);
			} else {
				range.move('character', offset);
				range.moveStart('character',  0);
				range.collapse(true);
				range.select();
			}
		}
		
		if (event.preventDefault) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			event.returnValue = false;
			event.cancelBubble = true;
		}
		
		if (this.tips()) {
			this.showTips(result['new']);
		}
		
		return false;
  }
  
  /*
   * @name CKEditorKeyPressHandler
   * 
   * this function can be used to process the event from CKEditor. testted with CKEditor 3.6.2
   * 
   */ 
	Kanni.CKEditorKeyPressHandler = function (event, editor) {
		if ( editor.mode != 'wysiwyg' ) {
			return true;
		}
		
		// old ckeditor event
		ckevent = event;
		
		var docevent = event.data.$;
		var doc = editor.document.$;
		
		return Kanni.KeyPressProcessor(docevent, doc, doc);
		
	}
	
	/*
	 * @name keyValidator
	 * @return bool returns true if key pressed is valid, false otherwise.
	 * 
	 */ 
	Kanni.keyValidator = function (event, lang) {
		
		// ignore shortcuts.
		
		if ( event.altKey || event.ctrlKey || event.metaKey ) {
			return false;
		}
		
		var key = event.which || event.keyCode;
		
		if (('charCode' in event) && !event.charCode) {
			return false;
		}
		
		if ((key < 32) || (key >= 127)) {
			return false;
		}
		
		var char = String.fromCharCode(key);
		
		rexp = new RegExp(/[\x00-\x1F\x80-\xFF]/);
		if (rexp.test(char)) {
			return false;
		}
		
		if (lang) {
			
			if (!lang in Kanni.languages) {
				return false;
			}
			
			if (!this._charExistsInMap(char, lang)) {
				return false;
			}
			
		}
		
		return true;
	}
	
	Kanni._charExistsInMap = function(char, lang) {
		lang_map = Kanni.languages[lang].charmap;
			
		for(c in lang_map) {
			if (c == char || lang_map[c] == char) {
				return true;
			}
			if (lang_map[c].toString().length > 1) {
				for(c1 in lang_map[c].toString()) {
					if (c1 == char) {
						return true;
					}
				}
			}
			if (c.length > 1) {
				for(c1 in c) {
					if (c1 == char) {
						return true;
					}
				}
			}
		}
		
		return false;
	}
	
	Kanni.showTips = function(str) {
		
		if (this.language == 'en') {
			return;
		}
		if (! this.languages[this.language].mergeprevchar) {
			return;
		}
		
		//atoz = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		var atoz = 'aAeEiIoOuU';
		var prev = '';
		var newstr = '';
		var c;
		
		for(var idx=0; idx < atoz.length; idx++) {
			c = atoz.substr(idx, 1);
			result = this.process(c, str, str.length, this.language);
			newstr = newstr + '&nbsp;&nbsp;' + result['prev'] + ' + ' + c + ' = <b>' + result['new'] + '</b>';
		}
		
		var tipsdiv = document.getElementById('kanni-lang-tips-block');
		tipsdiv.innerHTML = newstr;
		
		this.showTipsDiv();
	}

	Kanni.switchKey = function(swtchkey) {
		if (swtchkey) {
			this.swtchkey = swtchkey;
		}
		
		return this.swtchkey;
	}
	
	/**
	 * Set or return the current typing method.
	 */ 
	Kanni.method = function (current_method) {
		
		if (current_method) {
			// set the previous method so we can restore.
			this._previousLanguage_ = this.language;
		
			this.language = current_method;
			select = document.getElementById('kanni-lang-switch');
			if (select) {
				select.value = this.language;
			}
			
			var expires = new Date();
			expires.setTime(expires.getTime() + 1000*3600*24*30);
			this._set_cookie('kanni_user_lang', this.language, expires, '/');
		
		}
		
		return this.language;
	};
	
	/**
	 * Set or return the current typing method.
	 * toggle between english and the current language.
	 */ 
	Kanni.tips = function (show) {
		
		if (typeof show != 'undefined') {
		
			this.showtips = show;
			showtips = document.getElementById('kanni-lang-tips');
			showtips.checked = show;
			
			if (this.showtips) {
				value = 1;
			} else {
				value = 0;
			}
			
			var expires = new Date();
			expires.setTime(expires.getTime() + 1000*3600*24*30);
			this._set_cookie('kanni_user_tips', value, expires, '/');
			
		}
		
		return this.showtips;
	};
	
	/**
	 *  Toggle the typing method
	 * 
	 */
	Kanni.toggle = function () {
		
		if(this.language != 'en') {
			this.method('en');
		} else {
			this.method(this._previousLanguage_);
		}
		
	};
	
	/**
	 * attachs the language switch control to the document.
	 * 
	 */ 
	Kanni.attachLanguageSwitcher = function (div){
		
		var options = '<option value="en">English</option>';
		
		for (lang in this.languages) {
			langconfig = this.languages[lang];
			options += '<option value="' + lang + '">' + langconfig['language'] + ' - ' + langconfig['method'] + '</option>';
		}
		
		var tips = this._get_cookie('kanni_user_tips');
		
		if (tips == '1') {
			tips = 'checked';
		} else {
			tips = '';
		}
		
		var check = '<label for="kanni-lang-tips">Show tips</label><input type="checkbox" ' + tips + ' id="kanni-lang-tips" />';
		
		var content = '<label for="kanni-lang-switch">Type method</label>'
				+ '<select id="kanni-lang-switch">' 
				+ options 
				+ '</select>'
				+ '<div>' + check + '</div>';
		
		var node = document.createElement('div');
		
		node.setAttribute('class', 'kanni-lang-switch-block');
		node.setAttribute('id', 'kanni-lang-switch-block');
		
		node.innerHTML = content;
		
		if (div) {
			div = document.getElementById(div);
		} else {
			div = document.body;
		}
		
		div.appendChild(node);
		
		Kanni._setStyleAttribute(node, 'display', 'none'); // to hide
		Kanni._setStyleAttribute(node, 'z-index', '99');
		Kanni._setStyleAttribute(node, 'position', 'fixed');
		Kanni._setStyleAttribute(node, 'width', '150px');
		Kanni._setStyleAttribute(node, 'bottom', '0px');
		Kanni._setStyleAttribute(node, 'left', '10px');
		Kanni._setStyleAttribute(node, 'background-color', '#EDF5FA');
		Kanni._setStyleAttribute(node, 'border', 'solid 1px #336699');
		
		var select = document.getElementById('kanni-lang-switch');
		
		var m = this._get_cookie('kanni_user_lang');
		if (m) {
			this.method(m);
		}
		
		Kanni._attachEvent(select, 'change', function() {
			Kanni.method(select.value);
		});
		
		showtips = document.getElementById('kanni-lang-tips');
		Kanni._attachEvent(showtips, 'click', function() {
			Kanni.tips(showtips.checked);
		});
		
		
		// tips block
		var node = document.createElement('div');
		node.setAttribute('class', 'kanni-lang-tips-block');
		node.setAttribute('id', 'kanni-lang-tips-block');
		div.appendChild(node);
		
		Kanni._setStyleAttribute(node, 'display', 'none'); // to hide
		Kanni._setStyleAttribute(node, 'z-index', '99');
		Kanni._setStyleAttribute(node, 'position', 'fixed');
		Kanni._setStyleAttribute(node, 'left', '165px');
		Kanni._setStyleAttribute(node, 'bottom', '0px');
		Kanni._setStyleAttribute(node, 'background-color', '#EDF5FA');
		Kanni._setStyleAttribute(node, 'border', 'solid 1px #336699');
		
		Kanni._attachEvent(document, 'mousemove', function() {
			Kanni.hideTipsDiv();
		});
		
		// visual keyboard
		var node = document.createElement('div');
		node.setAttribute('class', 'kanni-lang-keyboard-block');
		node.setAttribute('id', 'kanni-lang-keyboard-block');
		div.appendChild(node);
		
		//Kanni._setStyleAttribute(node, 'display', 'none'); // to hide
		Kanni._setStyleAttribute(node, 'z-index', '99');
		Kanni._setStyleAttribute(node, 'position', 'fixed');
		Kanni._setStyleAttribute(node, 'left', '165px');
		Kanni._setStyleAttribute(node, 'bottom', '0px');
		Kanni._setStyleAttribute(node, 'background-color', '#EDF5FA');
		Kanni._setStyleAttribute(node, 'border', 'solid 1px #336699');
		
		var ctrl;
		var digits=new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
		var d3d2 = '0B';
		var nn = '';
		
		d3=d3d2.charAt(0);
    d2=d3d2.charAt(1);
    
    for (var v1=0; v1 < 16; v1++) {
			var d1 = digits[v1];
			ctrl=(d3==0 && d2==0 && d1<=1);
			for (var v0=0; v0 < 16; v0++) {
				var d0 = digits[v0];
				if (!ctrl) {
					nn += '&nbsp;&nbsp; ' + eval(' "\\u'+d3+d2+d1+d0 + '" ');
				} else {
					//eval("theform.c"+d1+d0+".value=\"[]\"");
				}
			}
    }
    keyboard = document.getElementById('kanni-lang-keyboard-block');
		keyboard.innerHTML = nn;
	};
	
	Kanni.showLanguageSwitcher = function () {
		if ('_langswitchtimer_' in this) {
			clearTimeout(this._langswitchtimer_);
		}
		var div = document.getElementById("kanni-lang-switch-block");
		if (typeof jQuery != 'undefined') {
			jQuery(div).show('normal');
			return;
		}
		Kanni._setStyleAttribute(div, 'display', 'block');
	};
	
	Kanni.hideLanguageSwitcher = function (){
		this._langswitchtimer_ = setTimeout('Kanni._hideLanguageSwitcher();', 5000);
	};

	/**
	 *  Helper Functions
	 * 
	 */
	Kanni._hideLanguageSwitcher = function (){
		if ('_langswitchtimer_' in this) {
			clearTimeout(this._langswitchtimer_);
		}
		var div = document.getElementById("kanni-lang-switch-block");
		if (typeof jQuery != 'undefined') {
			jQuery(div).hide('normal');
			return;
		}
		Kanni._setStyleAttribute(div, 'display', 'none');
	};
	
	Kanni.showTipsDiv = function () {
		
		var div = document.getElementById("kanni-lang-tips-block");
		if (typeof jQuery != 'undefined') {
			jQuery(div).show('normal');
			return;
		}
		Kanni._setStyleAttribute(div, 'display', 'block');
	};
	
	Kanni.hideTipsDiv = function (){
		
		var div = document.getElementById("kanni-lang-tips-block");
		if (typeof jQuery != 'undefined') {
			jQuery(div).hide('normal');
			return;
		}
		Kanni._setStyleAttribute(div, 'display', 'none');
	};
	
	Kanni._get_cookie = function (name) {

		var dc = document.cookie;
		var prefix = name + "=";
		var begin = dc.indexOf("; " + prefix);

		if (begin == -1) {
				begin = dc.indexOf(prefix);

				if (begin != 0) {
					return null;
				}
		} else {
			begin += 2;
		}

		var end = document.cookie.indexOf(";", begin);

		if (end == -1) {
			end = dc.length;
		}

		return unescape(dc.substring(begin + prefix.length, end));

	};

	Kanni._set_cookie = function (name, value, expires, path, domain, secure) {

		var curCookie = name + "=" + escape(value) +
				((expires) ? "; expires=" + expires.toGMTString() : "") +
				((path) ? "; path=" + escape(path) : "") +
				((domain) ? "; domain=" + domain : "") +
				((secure) ? "; secure" : "");

		document.cookie = curCookie;

	};
	
	Kanni._getElementsByClass = function(className) {
		
		var hasClassName = new RegExp("(?:^|\\s)" + className + "(?:$|\\s)");
		var allElements = document.getElementsByTagName("*");
		var results = [];

		var element;
		for (var i = 0; (element = allElements[i]) != null; i++) {
			var elementClass = element.className;
			if (elementClass && elementClass.indexOf(className) != -1 && hasClassName.test(elementClass))
				results.push(element);
		}

		return results;
	};
	
	Kanni._attachEvent = function(node, event, func) {
		
		// if jQuery exists
		if (typeof jQuery != 'undefined') {
			jQuery(node).bind(event, func);
			return;
		}
		
		if (document.addEventListener) {
			node.addEventListener(event, func);
		} else {
			node.attachEvent('on' + event,  func);
		}
	};
	
	Kanni._setStyleAttribute = function(node, name, value){
		
		// if jQuery exists
		if (typeof jQuery != 'undefined') {
			jQuery(node).css(name, value);
			return;
		}
		
		var style = node.getAttribute('style');
		if (style) {
			style += ';' + name + ':' + value;
		} else {
			style = name + ':' + value;
		}
		
		if (node.setAttribute) {
			node.setAttribute('style', style);
		}
		
		if (node.style && name in node.style) {
			node.style[name] = style;
		}
		
	};

	Kanni._attachEvent(window, 'load', function(){ 
		Kanni.init();
	});
	

})();


