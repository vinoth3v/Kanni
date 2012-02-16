/*  Kanni IME Transliteration Javascript Library
 *  Copyright (c) 2012 http://tamilnanbargal.com
 *  
 *  Some part of the language mappings are copied from Gopi's Unicode Converter(http://www.higopi.com)
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
**/

Kanni['languages']['hi_tw'] = {
  'language' : "Hindi",      // language Name
  'chnbin' : "\u094D",
  'ugar' : "\u0941",
  'uugar' : "\u0942",
  'method' : 'typewriter',   // typing method
  'maxchar' : '4',           // maximum char combination
  'mergeprevchar' : false,  // merge with previous char?
  'charmap' : {}             // character mao
};

Kanni['languages']['hi_en'] = {
  'language' : "Hindi",
  'chnbin' : "\u0D4D",
  'method' : 'phonetic',
  'maxchar' : '4',
  'mergeprevchar' : true,
  'charmap' : {}
};

Kanni['languages']['hi_tw_re'] = {
  'language' : "Hindi",
  'chnbin' : "\u094D",
  'method' : 'Remington',
  'maxchar' : '4',
  'mergeprevchar' : true,
  'charmap' : {}
};


var hi_en = new Array();
var hi_tw = new Array();
var hi_tw_re = new Array();

hi_tw['\\!'] = "\u090D";
hi_tw['\\@'] = "\u0945";
hi_tw['\\#'] = "\u094D\u0930";
hi_tw['\\$'] = "\u0930\u094D";
hi_tw['\\%'] = "\u091C\u094D\u091E";
hi_tw['\\^'] = "\u0924\u094D\u0930";
hi_tw['\\&'] = "\u0915\u094D\u0937";
hi_tw['\\*'] = "\u0936\u094D\u0930";
hi_tw['_'] = "\u0903";
hi_tw['\\+'] = "\u090B";
hi_tw['\\='] = "\u0943";
hi_tw['q'] = "\u094C";
hi_tw['w'] = "\u0948";
hi_tw['e'] = "\u093E";
hi_tw['r'] = "\u0940";
hi_tw['t'] = "\u0942";
hi_tw['y'] = "\u092C";
hi_tw['u'] = "\u0939";
hi_tw['i'] = "\u0917";
hi_tw['o'] = "\u0926";
hi_tw['p'] = "\u091C";
hi_tw['\\['] = "\u0921";
hi_tw['\\]'] = "\u093C";
hi_tw['Q'] = "\u0914";
hi_tw['W'] = "\u0910";
hi_tw['E'] = "\u0906";
hi_tw['R'] = "\u0908";
hi_tw['T'] = "\u090A";
hi_tw['Y'] = "\u092D";
hi_tw['U'] = "\u0919";
hi_tw['I'] = "\u0918";
hi_tw['O'] = "\u0927";
hi_tw['P'] = "\u091D";
hi_tw['\\{'] = "\u0922";
hi_tw['\\}'] = "\u091E";

hi_tw['a'] = "\u094B";
hi_tw['s'] = "\u0947";
hi_tw['d'] = "\u094D";
hi_tw['f'] = "\u093F";
hi_tw['g'] = "\u0941";
hi_tw['h'] = "\u092A";
hi_tw['j'] = "\u0930";
hi_tw['k'] = "\u0915";
hi_tw['l'] = "\u0924";
hi_tw[';'] = "\u091A";
hi_tw['\\\''] = "\u091F";
hi_tw['\\\\'] = "\u0949";
hi_tw['A'] = "\u0913";
hi_tw['S'] = "\u090F";
hi_tw['D'] = "\u0905";
hi_tw['F'] = "\u0907";
hi_tw['G'] = "\u0909";
hi_tw['H'] = "\u092B";
hi_tw['J'] = "\u0931";
hi_tw['K'] = "\u0916";
hi_tw['L'] = "\u0925";
hi_tw[':'] = "\u091B";
hi_tw['"'] = "\u0920";
hi_tw['\\|'] = "\u0911";

hi_tw['z'] = "";
hi_tw['x'] = "\u0902";
hi_tw['c'] = "\u092E";
hi_tw['v'] = "\u0928";
hi_tw['b'] = "\u0935";
hi_tw['n'] = "\u0932";
hi_tw['m'] = "\u0938";
hi_tw['/'] = "\u092F";
hi_tw['Z'] = "";
hi_tw['X'] = "\u0901";
hi_tw['C'] = "\u0923";
hi_tw['V'] = "";
hi_tw['B'] = "";
hi_tw['N'] = "\u0933";
hi_tw['M'] = "\u0936";
hi_tw['<'] = "\u0937";
hi_tw['>'] = "\u0964";
hi_tw['\\?'] = "\u095F";

//Phonetic
hi_en['B'] = "b";
hi_en['C'] = "c";
hi_en['F'] = "ph";
hi_en['f'] = "ph";
hi_en['G'] = "g";
hi_en['J'] = "j";
hi_en['K'] = "k";
hi_en['M'] = "m";
hi_en['P'] = "p";
hi_en['Q'] = "q";
hi_en['V'] = "v";
hi_en['W'] = "v";
hi_en['w'] = "v";
hi_en['X'] = "x";
hi_en['Y'] = "y";
hi_en['Z'] = "z";
//Cons
hi_en['k'] = "\u0915\u094D";
hi_en['c'] = "\u091A\u094D";
hi_en['T'] = "\u091F\u094D";
hi_en['D'] = "\u0921\u094D";
hi_en['N'] = "\u0923\u094D";
hi_en['t'] = "\u0924\u094D";
hi_en['d'] = "\u0926\u094D";
hi_en['p'] = "\u092A\u094D";
hi_en['b'] = "\u092C\u094D";


hi_en['y'] = "\u092F\u094D";
hi_en['R'] = "\u0931\u094D";
hi_en['L'] = "\u0933\u094D";
hi_en['v'] = "\u0935\u094D";
hi_en['s'] = "\u0938\u094D";
hi_en['S'] = "\u0937\u094D";
hi_en['H'] = "\u0939\u094D";
hi_en['x'] = "\u0915\u094D\u0936\u094D";

hi_en['\u200Dn'] = "\u0901";
hi_en['\u200Dm'] = "\u0902";
hi_en['m'] = "\u092E\u094D";
hi_en['n'] = "\u0928\u094D";
hi_en[':h'] = "\u0903";

hi_en['\u0928\u094D\\.'] = "\u0929\u094D";
hi_en['\u0930\u094D\\.'] = "\u0931\u094D";
hi_en['q'] = "\u0958\u094D";
hi_en['\u0915\u094D\\.'] = "\u0958\u094D";
hi_en['\u0916\u094D\\.'] = "\u0959\u094D";
hi_en['\u0917\u094D\\.'] = "\u095A\u094D";
hi_en['z'] = "\u095B\u094D";
hi_en['\u0921\u094D\\.'] = "\u095C\u094D";
hi_en['\u0922\u094D\\.'] = "\u095D\u094D";
hi_en['\u092B\u094D\\.'] = "\u095E\u094D";
hi_en['\u092F\u094D\\.'] = "\u095F\u094D";

hi_en['\u0915\u094Dh'] = "\u0916\u094D";
hi_en['\u0917\u094Dh'] = "\u0918\u094D";
hi_en['\u0928\u094Dg'] = "\u0919\u094D";
hi_en['\u091A\u094Dh'] = "\u091B\u094D";
hi_en['\u091C\u094Dh'] = "\u091D\u094D";
hi_en['\u0928\u094Dj'] = "\u091E\u094D";
hi_en['\u091F\u094Dh'] = "\u0920\u094D";
hi_en['\u0921\u094Dh'] = "\u0922\u094D";
hi_en['\u0924\u094Dh'] = "\u0925\u094D";
hi_en['\u0926\u094Dh'] = "\u0927\u094D";
hi_en['\u092A\u094Dh'] = "\u092B\u094D";
hi_en['\u092C\u094Dh'] = "\u092D\u094D";
hi_en['\u0938\u094Dh'] = "\u0936\u094D";
hi_en['\u0931\u094Dr'] = "\u090B";
hi_en['\u0933\u094Dl'] = "\u090C";
hi_en['\u094D\u090B'] = "\u0943";
hi_en['\u0913\u092E\u094D'] = "\u0950";
hi_en['r'] = "\u0930\u094D";
hi_en['l'] = "\u0932\u094D";
hi_en['h'] = "\u0939\u094D";
hi_en['g'] = "\u0917\u094D";
hi_en['j'] = "\u091C\u094D";
//VowSml
hi_en['\u094Da'] = "\u200C";
hi_en['\u094Di'] = "\u093F";
hi_en['\u094Du'] = "\u0941";
hi_en['\u094De'] = "\u0946";
hi_en['\u094Do'] = "\u094A";
hi_en['\u200Ci'] = "\u0948";
hi_en['\u200Cu'] = "\u094C";
hi_en['\u200C-'] = "\u200D";
hi_en['\u200C:'] = ":";
hi_en['-'] = "\u200D";
//VowBig
hi_en['\u200Ca'] = "\u093E";
hi_en['\u093Fi'] = "\u0940";
hi_en['\u0941u'] = "\u0942";
hi_en['\u0946e'] = "\u0947";
hi_en['\u094Ao'] = "\u094B";
hi_en['\u094DA'] = "\u093E";
hi_en['\u094DI'] = "\u0940";
hi_en['\u094DU'] = "\u0942";
hi_en['\u094DE'] = "\u0947";
hi_en['\u094DO'] = "\u094B";
//Vows
hi_en['\u0905i'] = "\u0910";
hi_en['\u0905u'] = "\u0914";
hi_en['\u0905a'] = "\u0906";
hi_en['\u0907i'] = "\u0908";
hi_en['\u0909u'] = "\u090A";
hi_en['\u090Ee'] = "\u090F";
hi_en['\u0912o'] = "\u0913";
hi_en['\u0913m'] = "\u0950";

hi_en['a'] = "\u0905";
hi_en['A'] = "\u0906";
hi_en['i'] = "\u0907";
hi_en['I'] = "\u0908";
hi_en['u'] = "\u0909";
hi_en['U'] = "\u090A";
hi_en['e'] = "\u090E";
hi_en['E'] = "\u090F";
hi_en['o'] = "\u0912";
hi_en['O'] = "\u0913";
//Nums
hi_en['\u200D1'] = "\u0967";
hi_en['\u200D2'] = "\u0968";
hi_en['\u200D3'] = "\u0969";
hi_en['\u200D4'] = "\u096A";
hi_en['\u200D5'] = "\u096B";
hi_en['\u200D6'] = "\u096C";
hi_en['\u200D7'] = "\u096D";
hi_en['\u200D8'] = "\u096E";
hi_en['\u200D9'] = "\u096F";
hi_en['\u200D0'] = "\u0966";
hi_en['(.+)\u200C(.+)'] = "$1$2";


// Remington typewirter support

//Nums
hi_tw_re['\u200D1'] = "\u0967";
hi_tw_re['\u200D2'] = "\u0968";
hi_tw_re['\u200D3'] = "\u0969";
hi_tw_re['\u200D4'] = "\u096A";
hi_tw_re['\u200D5'] = "\u096B";
hi_tw_re['\u200D6'] = "\u096C";
hi_tw_re['\u200D7'] = "\u096D";
hi_tw_re['\u200D8'] = "\u096E";
hi_tw_re['\u200D9'] = "\u096F";
hi_tw_re['\u200D0'] = "\u0966";

hi_tw_re['\~'] = "\u0943";
hi_tw_re['\\!'] = "\u090D";
hi_tw_re['\\@'] = "\u0945";
hi_tw_re['\\#'] = "\u0930\u0941";
hi_tw_re['\\$'] = "\u002B";
hi_tw_re['\\%'] = "\u0903";
hi_tw_re['\\^'] = "\u0027";
hi_tw_re['\\&'] = "\u005F";
hi_tw_re['\\*'] = "\u0936\u094D\u0930";
hi_tw_re['_'] = "\u090B";
hi_tw_re['\\+'] = "\u093C";
hi_tw_re['\\='] = "\u0924\u094D\u0930";

hi_tw_re['q'] = "\u0941";
hi_tw_re['w'] = "\u0942";
hi_tw_re['e'] = "\u092E";
hi_tw_re['r'] = "\u0924";
hi_tw_re['t'] = "\u091C";
hi_tw_re['y'] = "\u0932";
hi_tw_re['u'] = "\u0928";
hi_tw_re['i'] = "\u092A";
hi_tw_re['o'] = "\u0935";
hi_tw_re['p'] = "\u091A";
hi_tw_re['\\['] = "\u0916\u094D";
hi_tw_re['\\]'] = "\u002C";
hi_tw_re['Q'] = "\u092B";
hi_tw_re['W'] = "\u0945";
hi_tw_re['E'] = "\u092E\u094D";
hi_tw_re['R'] = "\u0908";
hi_tw_re['T'] = "\u091C\u094D";
hi_tw_re['Y'] = "\u0932\u094D";
hi_tw_re['U'] = "\u0928\u094D";
hi_tw_re['I'] = "\u092A\u094D";
hi_tw_re['O'] = "\u0935\u094D";
hi_tw_re['P'] = "\u091A\u094D";
hi_tw_re['\\{'] = "\u0915\u094D\u0937";
hi_tw_re['\\}'] = "\u0926\u094D\u0930";
hi_tw_re['\\('] = "\u003B";
hi_tw_re['\\)'] = "\u0926\u094D\u0927";


hi_tw_re['a'] = "\u0902";
hi_tw_re['s'] = "\u0947";
hi_tw_re['d'] = "\u0915";
hi_tw_re['f'] = "\u093F";
hi_tw_re['g'] = "\u0939";
hi_tw_re['h'] = "\u0940";
hi_tw_re['j'] = "\u0930";
hi_tw_re['k'] = "\u093E";
hi_tw_re['l'] = "\u0938";
hi_tw_re[';'] = "\u092F";
hi_tw_re['\\\''] = "\u0936\u094D";
//hi_tw_re['\\\\'] = "\u0936\u094D";
hi_tw_re['A'] = "\u0964";
hi_tw_re['S'] = "\u0948";
hi_tw_re['D'] = "\u0915\u094D";
hi_tw_re['F'] = "\u0925\u094D";
hi_tw_re['G'] = "\u0933";
hi_tw_re['H'] = "\u092D\u094D";
hi_tw_re['J'] = "\u0936\u094D\u0930";
hi_tw_re['K'] = "\u091C\u094D\u091E";
hi_tw_re['L'] = "\u0938094D";
hi_tw_re[':'] = "\u09300941";
hi_tw_re['"'] = "\u0937094D";
hi_tw_re['\\|'] = "\u0926\u094D\u092F";

hi_tw_re['z'] = "";
hi_tw_re['x'] = "\u0917";
hi_tw_re['c'] = "\u092C";
hi_tw_re['v'] = "\u0905";
hi_tw_re['b'] = "\u0907";
hi_tw_re['n'] = "\u0926";
hi_tw_re['m'] = "\u0909";
hi_tw_re['/'] = "\u0927\u094D";
hi_tw_re['Z'] = "\u0930\u094D";
hi_tw_re['X'] = "\u0917\u094D";
hi_tw_re['C'] = "\u092C\u094D";
hi_tw_re['V'] = "\u091F";
hi_tw_re['B'] = "\u0920";
hi_tw_re['N'] = "\u091B";
hi_tw_re['M'] = "\u0921";
hi_tw_re['<'] = "\u0922";
hi_tw_re['>'] = "\u091D";
hi_tw_re['\\?'] = "\u0918\u094D";
hi_tw_re['\\,'] = "\u090F";
hi_tw_re['\\.'] = "\u0923\u094D";


Kanni['languages']['hi_tw']['charmap'] = hi_tw;
Kanni['languages']['hi_tw_re']['charmap'] = hi_tw_re;
Kanni['languages']['hi_en']['charmap'] = hi_en;

