/*  Kanni IME Transliteration Javascript Library
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
			'language' 				: 'en',		// default language
			'method' 					: '',			// default typing method
			'_planguage' 			: 'en', 	// previous language
			'_pmethod' 				: '', 		// previous typing method
			'languages' 			: {},			// languages
			'switchkey' 			: 120, 		// F9
			'_activeelement' 	: null,		// active input element
			'showtips' 				: true,		// tips flag
			'ignoreevents' 		: false, 	// rarely, ignore events to speedup.
			'attachlangswitch': true,		// 
			'attachkeyevents' : true,		// 
			'attachclasses'		: '*'			// *, kanni-enabled
		};
		
	};

	/**
	 * @name initialize
	 * 
	 * This is NOT a constructor function.
	 * 
	 */
	Kanni.init = function() {
		
		window.KanniConfig = window.KanniConfig || {};
		
		for(conf in KanniConfig) {
			Kanni[conf] = KanniConfig[conf];
		}
		
		this.switchKey(this.switchkey);
		
		if (this.attachlangswitch) {
			
			this.attachLanguageSwitcher();
			
			var select = document.getElementById('kanni-lang-switch');
			
			if (select) {
				Kanni.langMethod(select.value);
			}
			
			this._attachEvent(document, 'keyup', function(e) {
				e = e || event;
				var key = e.which || e.keyCode;
				
				if ( key != Kanni.switchkey ) {
					return true;
				}
				
				Kanni.toggle();
				
				return false;
				
			});
			
		}
		
		if (this.attachkeyevents) {
			
			if (this.attachclasses == '*') {
			
				var inputs = document.getElementsByTagName('input');
				for(var k=0;k<inputs.length;k++) {
					var input = inputs[k];
					
					if(input.type !=  'text') {
						continue;
					}
					this._attachEvent(input, 'keypress', this.keyPressHandler);
					this._attachEvent(input, 'focus', this.showLanguageSwitcher);
					this._attachEvent(input, 'blur', this.hideLanguageSwitcher);
				}
				
				var inputs = document.getElementsByTagName('textarea');
				for(var k=0;k<inputs.length;k++) {
					var textarea = inputs[k]
					this._attachEvent(textarea, 'keypress', this.keyPressHandler);
					this._attachEvent(textarea, 'focus', this.showLanguageSwitcher);
					this._attachEvent(textarea, 'blur', this.hideLanguageSwitcher);
				}
				
			} else {
				
				var nodes = this._getElementsByClass(this.attachclasses);
				for(var idx in nodes) {
					var node = nodes[idx];
					this._attachEvent(node, 'keypress', this.keyPressHandler);
					this._attachEvent(node, 'focus', this.showLanguageSwitcher);
					this._attachEvent(node, 'blur', this.hideLanguageSwitcher);
				}
				
			}
			
			var nodes = this._getElementsByClass('kanni-enabled');
			for(var idx in nodes) {
				var node = nodes[idx];
				this._attachEvent(node, 'keypress', this.keyPressHandler);
				this._attachEvent(node, 'focus', this.showLanguageSwitcher);
				this._attachEvent(node, 'blur', this.hideLanguageSwitcher);
			}
			
		}
		
	};
	
	/**
	 * @name digest
	 * 
	 * @return array Returns the array that contains left, prev, new and 
	 * right values which can be used to build the new string.
	 */ 
	Kanni.digest = function (char, currstr, offset, lang) {
		
		if (!lang) {
			lang = {
				'language' : this.language, 
				'method' : this.method
			};
		}
		
		config = Kanni.langConfig(lang);
		if (!config) {
			return false;
		}
		
		// left_prev_(offset)new_right
		
		var leftstr = '';
		var prevstr = '';
		var rightstr = '';
		var newstr = '';
		var replacecount = 0;
		var maxprevchar = 4;
		
		if ('maxchar' in config.method) {
			maxprevchar = config.method.maxchar;
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
		
	};
	
	/**
	 * @name map 
	 * @return string The transliterated string for the language.
	 */
	Kanni.map = function (newchar, prevchar, lang) {
		
		var new_string = prevchar + newchar;
		
		var config = Kanni.langConfig(lang);
		
		if (config) {
			
			var charmap = config.method.charmap;
			
			for(var char in charmap) {
				rexp = new RegExp(char, 'g');
				new_string = new_string.replace(rexp, charmap[char]);
				//new_string = new_string.replace(char, charmap[char]);
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
		
	};
	
	/**
	 * Actual keypress processor.
	 * 
	 */ 
	Kanni.KeyPressProcessor = function (event, target, doc) {
		
		var key = event.keyCode || event.which;
		var offset = 0;
		
		if ( key == Kanni.switchkey ) {
			return false;
		}
		
		if (Kanni.language == 'en' ) {
			return true;
		}
		var lang = {'language' : this.language, 'method' : this.method};
		if (!Kanni.keyValidator(event, lang)) {
			return true;
		}
		
		var char = String.fromCharCode(key);
		
		result = this.process(char, target, doc, lang);
		
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
	};
	
	Kanni.process = function(char, node, doc, lang, merge) {
		
		if (typeof merge == 'undefined') {
			merge = true;
		}
		
		if ((node.nodeName.toLowerCase() == "input" && node.type.toLowerCase() == "text") || node.nodeName.toLowerCase() == "textarea") {
			
			var currstr = node.value;
			
			if ('selectionStart' in node) {
				offset = node.selectionStart;
			} else {
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
			
			var result = Kanni.digest(char, currstr, offset);
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
						if (tnode.nodeType == 3) {		//Text node
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
				
				result = Kanni.digest(char, nodevalue, offset);
				
				newstr = result['left'] + result['new'] + result['right'] ;
				//alert('--' + result['left'] + '--' + result['new'] + '--' + result['right'] + '--' );
				if (oldprevstr.length) {
					pnode.innerText = oldprevstr + newstr;
				} else if (oldnextstr.length) {
					pnode.innerText = newstr + oldnextstr;
				} else {
					node.nodeValue = newstr;
				}
				
			} else {
				
				result = Kanni.digest(char, '', offset);
				
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
		
		return result;
	
  };
  
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
		
    Kanni._activeelement = doc;
    
		return Kanni.KeyPressProcessor(docevent, doc, doc);
		
	};
	
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
			
			if (!this.charExistsInMap(char, lang)) {
				return false;
			}
			
		}
		
		return true;
	};
	
	Kanni.langConfig = function(lang) {
		
		if (!lang) {
			lang = {
				'language' : this.language, 
				'method' : this.method
			};
		}
		
		if (!(lang.language in this.languages)) {
			return false;
		}
		
		var langconfig = this.languages[lang.language];
		
		var methods = langconfig['methods'];
		if (!(lang.method in methods)) {
			return false;
		}
		var methodconfig = methods[lang.method];
		return {
			'language' : langconfig,
			'method' : methodconfig
		};
		
	};
	
	Kanni.charExistsInMap = function(char, lang) {
		
		config = this.langConfig(lang);
		if (!config) {
			return false;
		}
		
		var lang_map = config.method.charmap;
		
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
	};
	
	Kanni.insertChar = function(char) {
		
		var node = this.activeElement();
		
		if (!node) {
			return;
		}
		
		var lang = {'language' : this.language, 'method' : this.method};
		
		var doc = node.ownerDocument;
		if (!node.ownerDocument) {
			doc = node;
		}
		
		this.process(char, node, doc, lang, false);
		
		this.ignoreevents = true;
		node.focus();
		this.ignoreevents = false;
		
		return false;
		
	};
	
	Kanni.showTips = function(str) {
		
		if (this.language == 'en') {
			return;
		}
		if (! this.languages[this.language]['methods'][this.method].mergeprevchar) {
			return;
		}
		
		//atoz = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		var atoz = 'aAeEiIoOuU';
		var prev = '';
		var newstr = '';
		var c;
		
		for(var idx=0; idx < atoz.length; idx++) {
			c = atoz.substr(idx, 1);
			result = this.digest(c, str, str.length);
			newstr = newstr + '&nbsp;&nbsp;' + result['prev'] + ' + ' + c + ' = <b>' + result['new'] + '</b>';
		}
		
		var tipsdiv = document.getElementById('kanni-lang-tips-block');
		tipsdiv.innerHTML = newstr;
		
		this.showTipsDiv();
	};

	Kanni.switchKey = function(key) {
		if (key) {
			this.switchkey = key;
		}
		
		return this.switchkey;
	};
	
	/**
	 * Set or return the current typing method.
	 */ 
	Kanni.langMethod = function (new_method) {
		
		if (new_method) {
			if (typeof new_method == 'string') {
				
				new_method = new_method.split('|');
				
				new_method = {
					'language' : new_method[0], 
					'method' : new_method[1]
				};
			} else if (typeof new_method == 'object') {
				//
			} else { // not a valid parameter
				return false;
			}
			
			// set the previous method so we can restore.
			this._planguage = this.language;
			this._pmethod = this.method;
			
			this.language = new_method.language;
			this.method = new_method.method;
			
			select = document.getElementById('kanni-lang-switch');
			if (select) {
				select.value = this.language + '|' + this.method;
			}
			
			this.initKeyboard();
			
			var expires = new Date();
			expires.setTime(expires.getTime() + 1000*3600*24*30);
			this._set_cookie('kanni_user_lang', this.language + '|' + this.method, expires, '/');
		
		}
		
		return {
			'language' : this.language, 
			'method' : this.method
		};
	};
	
	/**
	 * set or returns the active element.
	 * 
	 */ 
	Kanni.activeElement = function(node) {
		
		if (typeof node != 'undefined') {
			this._activeelement = node;
		}
		
		return this._activeelement;
	};
	
	/**
	 * set or returns the tips flag.
	 * 
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
	 *  Toggle the language and typing method
	 * 
	 */
	Kanni.toggle = function () {
		
		if(this.language != 'en') {
			this.langMethod('en|en');
		} else {
			this.langMethod({'language' : this._planguage, 'method' : this._pmethod});
		}
		
	};
	
	
	/**
	 * attachs the language switch control to the document.
	 * 
	 */ 
	Kanni.attachLanguageSwitcher = function (div) {
		var css = '#kanni-lang-switch-block {padding:5px;text-align:left;z-index:99;line-height:1em;position:fixed;width:150px;bottom:0px;left:10px;background:#EDF5FA;border:solid 1px #336699;display:none;}';
		css = css + '#kanni-lang-switch-block select {width:140px}';
		css = css + '#kanni-lang-tips-block{display:none;z-index:99;position:fixed;left:170px;bottom:0px;background-color:#EDF5FA;border:solid 1px #336699}';
		css = css + '#kanni-lang-keyboard-block{display:none;z-index:99;position:fixed;left:165px;bottom:0px;background-color:#EDF5FA;border:solid 1px #336699}';
		
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			styleElement.appendChild(document.createTextNode(css));
		}
		document.getElementsByTagName("head")[0].appendChild(styleElement);


		var options = '<option value="en|en">English</option>';
		
		for (var lang in this.languages) {
			var langconfig = this.languages[lang];
			for (var method in langconfig.methods) {
				methodconfig = langconfig.methods[method];
				options += '<option value="' + lang + '|' + method + '">' + langconfig['name'] + ' - ' + methodconfig['method'] + '</option>';
			}
		}
		
		var tips = this._get_cookie('kanni_user_tips');
		
		if (tips == '1') {
			tips = 'checked';
		} else {
			tips = '';
		}
		
		var check = '<input type="checkbox" ' + tips + ' id="kanni-lang-tips" /> tips | ';
		var kb = '<a href="#" onclick="Kanni.showKeyboard(); return false;">Keyboard</a>'
		var content = '<label for="kanni-lang-switch">Type method</label>'
				+ '<select id="kanni-lang-switch">' 
				+ options 
				+ '</select>'
				+ '<div>' + check + kb + '</div>';
		
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
		
		var select = document.getElementById('kanni-lang-switch');
		
		var m = this._get_cookie('kanni_user_lang');
		if (m) {
			this.langMethod(m);
		}
		
		Kanni._attachEvent(select, 'change', function() {
			Kanni.langMethod(select.value);
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
		
		Kanni._attachEvent(document, 'mousemove', function() {
			Kanni.hideTipsDiv();
		});
		
		// visual keyboard
		var node = document.createElement('div');
		node.setAttribute('class', 'kanni-lang-keyboard-block');
		node.setAttribute('id', 'kanni-lang-keyboard-block');
		div.appendChild(node);
		
		return;
	};
	
	Kanni.initKeyboard = function(lang) {
		
		var keyboard = document.getElementById('kanni-lang-keyboard-block');
		if (!keyboard) {
			return;
		}
		
		if (!lang) {
			lang = {
				'language' : this.language, 
				'method' : this.method
			};
		}
		
		for(var idx = 0; idx< keyboard.childNodes.length; idx++) {
			this._setStyleAttribute(keyboard.childNodes[idx], 'display', 'none');
		}
		
		kb = document.getElementById('kanni-kb-' + this.language)
		if (kb) {
			
			this._setStyleAttribute(kb, 'display', 'block');
			
		} else {
			config = this.langConfig(lang);
			if (!config) {
				return;
			}
			
			var charkeyfrom  = eval('"\\u'+ config.language.charfrom + '"').charCodeAt(0);
			var charkeyto  = eval('"\\u'+ config.language.charto + '"').charCodeAt(0);
			var buttons = '<a href="#" onclick="Kanni.hideKeyboard();"> X </a>';
			for (var ucharkey=charkeyfrom; ucharkey <= charkeyto; ucharkey++) {
				var char = String.fromCharCode(ucharkey);
				
				buttons += '<input type="button" class="' + ucharkey + '" value="' + char + '" onclick="Kanni.insertChar(this.value);"/>';
				
			}
			
			var node = document.createElement('div');
			node.setAttribute('class', 'kanni-kb-' + this.language);
			node.setAttribute('id', 'kanni-kb-' + this.language);
			
			keyboard.appendChild(node);
			node.innerHTML = buttons;
			
		}
		
	};
	
	Kanni.showKeyboard = function () {
		var keyboard = document.getElementById('kanni-lang-keyboard-block');
		Kanni._setStyleAttribute(keyboard, 'display', 'block');
	};
	
	Kanni.hideKeyboard = function () {
		var keyboard = document.getElementById('kanni-lang-keyboard-block');
		Kanni._setStyleAttribute(keyboard, 'display', 'none');
	};
	
	Kanni.showLanguageSwitcher = function (event) {
		
		if (Kanni.ignoreevents ) {
			return;
		}
		
		Kanni.activeElement(event.target || event.srcElement);
		
		if ('_langswitchtimer_' in Kanni) {
			clearTimeout(Kanni._langswitchtimer_);
		}
		var div = document.getElementById("kanni-lang-switch-block");
		if (typeof jQuery != 'undefined') {
			jQuery(div).show('normal');
			return;
		}
		Kanni._setStyleAttribute(div, 'display', 'block');
	};
	
	Kanni.hideLanguageSwitcher = function () {
		if (Kanni.ignoreevents ) {
			return;
		}
		//Kanni.activeElement(null);
		Kanni._langswitchtimer_ = setTimeout('Kanni._hideLanguageSwitcher();', 5000);
	};

	/**
	 *  Helper Functions
	 * 
	 */
	Kanni._hideLanguageSwitcher = function () {
		if ('_langswitchtimer_' in Kanni) {
			clearTimeout(Kanni._langswitchtimer_);
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
	
	Kanni.hideTipsDiv = function () {
		
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
		/*if (typeof jQuery != 'undefined') {
			jQuery(node).bind(event, func);
			return;
		}*/
		if (document.addEventListener) {
			node.addEventListener(event, func);
		} else {
			node.attachEvent('on' + event,  func);
		}
	};
	
	Kanni._setStyleAttribute = function(node, name, value) {
		
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

	Kanni._attachEvent(window, 'load', function() { 
		Kanni.init();
	});
	

})();


