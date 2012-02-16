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

Kanni['languages']['gu_tw'] = {
  'language' : "Gujarati",      // language Name
  'chnbin' : "\u0ACD",
  'ugar' : "\u0AC1",
  'uugar' : "\u0AC2",
  'method' : 'typewriter',   // typing method
  'maxchar' : '4',           // maximum char combination
  'mergeprevchar' : false,  // merge with previous char?
  'charmap' : {}             // character mao
};

Kanni['languages']['gu_en'] = {
  'language' : "Gujarati",
  'chnbin' : "\u0ACD",
  'method' : 'phonetic',
  'maxchar' : '4',
  'mergeprevchar' : true,
  'charmap' : {}
};


var gu_tw = new Array();
var gu_en = new Array();
//Typewritter
gu_tw['\\!'] = "\u0A8D";
gu_tw['\\@'] = "\u0AC5";
gu_tw['\\#'] = "\u0ACD\u0AB0";
gu_tw['\\$'] = "\u0AB0\u0ACD";
gu_tw['\\%'] = "\u0A9C\u0ACD\u0A9E";
gu_tw['\\^'] = "\u0AA4\u0ACD\u0AB0";
gu_tw['\\&'] = "\u0A95\u0ACD\u0AB7";
gu_tw['\\*'] = "\u0AB6\u0ACD\u0AB0";
gu_tw['_'] = "\u0A83";
gu_tw['\\+'] = "\u0A8B";
gu_tw['\\='] = "\u0AC3";
gu_tw['q'] = "\u0ACC";
gu_tw['w'] = "\u0AC8";
gu_tw['e'] = "\u0ABE";
gu_tw['r'] = "\u0AC0";
gu_tw['t'] = "\u0AC2";
gu_tw['y'] = "\u0AAC";
gu_tw['u'] = "\u0AB9";
gu_tw['i'] = "\u0A97";
gu_tw['o'] = "\u0AA6";
gu_tw['p'] = "\u0A9C";
gu_tw['\\['] = "\u0AA1";
gu_tw['\\]'] = "\u0ABC";
gu_tw['Q'] = "\u0A94";
gu_tw['W'] = "\u0A90";
gu_tw['E'] = "\u0A86";
gu_tw['R'] = "\u0A88";
gu_tw['T'] = "\u0A8A";
gu_tw['Y'] = "\u0AAD";
gu_tw['U'] = "\u0A99";
gu_tw['I'] = "\u0A98";
gu_tw['O'] = "\u0AA7";
gu_tw['P'] = "\u0A9D";
gu_tw['\\{'] = "\u0AA2";
gu_tw['\\}'] = "\u0A9E";

gu_tw['a'] = "\u0ACB";
gu_tw['s'] = "\u0AC7";
gu_tw['d'] = "\u0ACD";
gu_tw['f'] = "\u0ABF";
gu_tw['g'] = "\u0AC1";
gu_tw['h'] = "\u0AAA";
gu_tw['j'] = "\u0AB0";
gu_tw['k'] = "\u0A95";
gu_tw['l'] = "\u0AA4";
gu_tw[';'] = "\u0A9A";
gu_tw['\\\''] = "\u0A9F";
gu_tw['\\\\'] = "\u0AC9";
gu_tw['A'] = "\u0A93";
gu_tw['S'] = "\u0A8F";
gu_tw['D'] = "\u0A85";
gu_tw['F'] = "\u0A87";
gu_tw['G'] = "\u0A89";
gu_tw['H'] = "\u0AAB";
//gu_tw['J'] = "\u0AB1";
gu_tw['K'] = "\u0A96";
gu_tw['L'] = "\u0AA5";
gu_tw[':'] = "\u0A9B";
gu_tw['"'] = "\u0AA0";
gu_tw['\\|'] = "\u0A91";

gu_tw['z'] = "";
gu_tw['x'] = "\u0A82";
gu_tw['c'] = "\u0AAE";
gu_tw['v'] = "\u0AA8";
gu_tw['b'] = "\u0AB5";
gu_tw['n'] = "\u0AB2";
gu_tw['m'] = "\u0AB8";
gu_tw['/'] = "\u0AAF";
gu_tw['Z'] = "";
gu_tw['X'] = "\u0A81";
gu_tw['C'] = "\u0AA3";
gu_tw['V'] = "";
gu_tw['B'] = "";
gu_tw['N'] = "\u0AB3";
gu_tw['M'] = "\u0AB6";
gu_tw['<'] = "\u0AB7";
gu_tw['>'] = "\u0AE4";
gu_tw['\\?'] = "\u0ADF";

//Phonetic
gu_en['B'] = "b";
gu_en['C'] = "c";
gu_en['F'] = "ph";
gu_en['f'] = "ph";
gu_en['G'] = "g";
gu_en['J'] = "j";
gu_en['K'] = "k";
gu_en['M'] = "m";
gu_en['P'] = "p";
gu_en['Q'] = "q";
gu_en['V'] = "v";
gu_en['W'] = "v";
gu_en['w'] = "v";
gu_en['X'] = "x";
gu_en['Y'] = "y";
gu_en['Z'] = "j";
gu_en['z'] = "j";
//Cons
gu_en['k'] = "\u0A95\u0ACD";
gu_en['c'] = "\u0A9A\u0ACD";
gu_en['T'] = "\u0A9F\u0ACD";
gu_en['D'] = "\u0AA1\u0ACD";
gu_en['N'] = "\u0AA3\u0ACD";
gu_en['t'] = "\u0AA4\u0ACD";
gu_en['d'] = "\u0AA6\u0ACD";

gu_en['p'] = "\u0AAA\u0ACD";
gu_en['b'] = "\u0AAC\u0ACD";
gu_en['y'] = "\u0AAF\u0ACD";
gu_en['R'] = "\u0A8B";
gu_en['L'] = "\u0AB3\u0ACD";
gu_en['v'] = "\u0AB5\u0ACD";
gu_en['s'] = "\u0AB8\u0ACD";
gu_en['S'] = "\u0AB7\u0ACD";
gu_en['H'] = "\u0AB9\u0ACD";
gu_en['x'] = "\u0A95\u0ACD\u0AB6\u0ACD";

gu_en['\u200Dn'] = "\u0A81";
gu_en['\u200Dm'] = "\u0A82";
gu_en[':h'] = "\u0A83";
gu_en['m'] = "\u0AAE\u0ACD";
gu_en['n'] = "\u0AA8\u0ACD";

gu_en['\u0A95\u0ACDh'] = "\u0A96\u0ACD";
gu_en['\u0A97\u0ACDh'] = "\u0A98\u0ACD";
gu_en['\u0AA8\u0ACDg'] = "\u0A99\u0ACD";
gu_en['\u0A9A\u0ACDh'] = "\u0A9B\u0ACD";
gu_en['\u0A9C\u0ACDh'] = "\u0A9D\u0ACD";
gu_en['\u0AA8\u0ACDj'] = "\u0A9E\u0ACD";
gu_en['\u0A9F\u0ACDh'] = "\u0AA0\u0ACD";
gu_en['\u0AA1\u0ACDh'] = "\u0AA2\u0ACD";
gu_en['\u0AA4\u0ACDh'] = "\u0AA5\u0ACD";
gu_en['\u0AA6\u0ACDh'] = "\u0AA7\u0ACD";
gu_en['\u0AAA\u0ACDh'] = "\u0AAB\u0ACD";
gu_en['\u0AAC\u0ACDh'] = "\u0AAD\u0ACD";
gu_en['\u0AB8\u0ACDh'] = "\u0AB6\u0ACD";
gu_en['\u0ACD\u0A8B'] = "\u0AC3";
gu_en['\u0A93\u0AAE\u0ACD'] = "\u0AD0";

gu_en['\u0AB3\u0ACDl'] = "\u0A8C";
gu_en['r'] = "\u0AB0\u0ACD";
gu_en['l'] = "\u0AB2\u0ACD";

gu_en['h'] = "\u0AB9\u0ACD";
gu_en['g'] = "\u0A97\u0ACD";
gu_en['j'] = "\u0A9C\u0ACD";
//VowSml
gu_en['\u0ACDa'] = "\u200C";
gu_en['\u0ACDi'] = "\u0ABF";
gu_en['\u0ACDu'] = "\u0AC1";
gu_en['\u0ACDe'] = "\u0AC5";
gu_en['\u0ACDo'] = "\u0AC9";
gu_en['\u200Ci'] = "\u0AC8";
gu_en['\u200Cu'] = "\u0ACC";
gu_en['\u200C-'] = "\u200D";
gu_en['\u200C:'] = ":";
gu_en['-'] = "\u200D";
//VowBig
gu_en['\u200Ca'] = "\u0ABE";
gu_en['\u0ABFi'] = "\u0AC0";
gu_en['\u0AC1u'] = "\u0AC2";
gu_en['\u0AC5e'] = "\u0AC7";
gu_en['\u0AC9o'] = "\u0ACB";
gu_en['\u0ACDA'] = "\u0ABE";
gu_en['\u0ACDI'] = "\u0AC0";
gu_en['\u0ACDU'] = "\u0AC2";
gu_en['\u0ACDE'] = "\u0AC7";
gu_en['\u0ACDO'] = "\u0ACB";
//Vows
gu_en['\u0A85i'] = "\u0A90";
gu_en['\u0A85u'] = "\u0A94";
gu_en['\u0A85a'] = "\u0A86";
gu_en['\u0A87i'] = "\u0A88";
gu_en['\u0A89u'] = "\u0A8A";
gu_en['\u0A8De'] = "\u0A8F";
gu_en['\u0A91o'] = "\u0A93";
gu_en['\u0A93m'] = "\u0AD0";

gu_en['a'] = "\u0A85";
gu_en['A'] = "\u0A86";
gu_en['i'] = "\u0A87";
gu_en['I'] = "\u0A88";
gu_en['u'] = "\u0A89";
gu_en['U'] = "\u0A8A";
gu_en['e'] = "\u0A8D";
gu_en['E'] = "\u0A8F";
gu_en['o'] = "\u0A91";
gu_en['O'] = "\u0A93";
gu_en['q'] = "\u0A95\u0ACD";

//Nums
gu_en['\u200D1'] = "\u0AE7";
gu_en['\u200D2'] = "\u0AE8";
gu_en['\u200D3'] = "\u0AE9";
gu_en['\u200D4'] = "\u0AEA";
gu_en['\u200D5'] = "\u0AEB";
gu_en['\u200D6'] = "\u0AEC";
gu_en['\u200D7'] = "\u0AED";
gu_en['\u200D8'] = "\u0AEE";
gu_en['\u200D9'] = "\u0AEF";
gu_en['\u200D0'] = "\u0AE6";
gu_en['(.+)\u200C(.+)'] = "$1$2";


Kanni['languages']['gu_tw']['charmap'] = gu_tw;
Kanni['languages']['gu_en']['charmap'] = gu_en;

