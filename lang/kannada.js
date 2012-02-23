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

Kanni['languages']['kannada'] = {
  'name' : "Kannada",      // language Name
  'charfrom' : '0C80',
  'charto' : '0CFF',
  'chnbin' : "\u0CCD",
  'ugar' : "\u0CC1",
  'uugar' : "\u0CC2",
  'methods' : {}             // character map
};

Kanni['languages']['kannada']['methods']['ka_tw'] = {
  'method' : 'typewriter',   // typing method
  'maxchar' : '4',           // maximum char combination
  'mergeprevchar' : false,  // merge with previous char?
  'charmap' : {}             // character map
};

Kanni['languages']['ka_en'] = {
  'method' : 'phonetic',
  'maxchar' : '4',
  'mergeprevchar' : true,
  'charmap' : {}
};



var ka_en = new Array();
var ka_tw = new Array();
//Typewritter
ka_tw['\\~'] = "\u0C92";
ka_tw['\\`'] = "\u0CCA";
ka_tw['\\#'] = "\u0CCD\u0CB0";
ka_tw['\\$'] = "\u0CB0\u0CCD";
ka_tw['\\%'] = "\u0C9C\u0CCD\u0C9E";
ka_tw['\\^'] = "\u0CA4\u0CCD\u0CB0";
ka_tw['\\&'] = "\u0C95\u0CCD\u0CB7";
ka_tw['\\*'] = "\u0CB6\u0CCD\u0CB0";
ka_tw['_'] = "\u0C83";
ka_tw['\\+'] = "\u0C8B";
ka_tw['\\='] = "\u0CD3";
ka_tw['q'] = "\u0CCC";
ka_tw['w'] = "\u0CC8";
ka_tw['e'] = "\u0CBE";
ka_tw['r'] = "\u0CC0";
ka_tw['t'] = "\u0CC2";
ka_tw['y'] = "\u0CAC";
ka_tw['u'] = "\u0CB9";
ka_tw['i'] = "\u0C97";
ka_tw['o'] = "\u0CA6";
ka_tw['p'] = "\u0C9C";
ka_tw['\\['] = "\u0CA1";

ka_tw['Q'] = "\u0C94";
ka_tw['W'] = "\u0C90";
ka_tw['E'] = "\u0C86";
ka_tw['R'] = "\u0C88";
ka_tw['T'] = "\u0C8A";
ka_tw['Y'] = "\u0CAD";
ka_tw['U'] = "\u0C99";
ka_tw['I'] = "\u0C98";
ka_tw['O'] = "\u0CA7";
ka_tw['P'] = "\u0C9D";
ka_tw['\\{'] = "\u0CA2";
ka_tw['\\}'] = "\u0C9E";

ka_tw['a'] = "\u0CCB";
ka_tw['s'] = "\u0CC7";
ka_tw['d'] = "\u0CCD";
ka_tw['f'] = "\u0CBF";
ka_tw['g'] = "\u0CC1";
ka_tw['h'] = "\u0CAA";
ka_tw['j'] = "\u0CB0";
ka_tw['k'] = "\u0C95";
ka_tw['l'] = "\u0CA4";
ka_tw[';'] = "\u0C9A";
ka_tw['\\\''] = "\u0C9F";

ka_tw['A'] = "\u0C93";
ka_tw['S'] = "\u0C8F";
ka_tw['D'] = "\u0C85";
ka_tw['F'] = "\u0C87";
ka_tw['G'] = "\u0C89";
ka_tw['H'] = "\u0CAB";
ka_tw['J'] = "\u0CB1";
ka_tw['K'] = "\u0C96";
ka_tw['L'] = "\u0CA5";
ka_tw[':'] = "\u0C9B";
ka_tw['"'] = "\u0CA0";

ka_tw['z'] = "\u0CC6";
ka_tw['x'] = "\u0C82";
ka_tw['c'] = "\u0CAE";
ka_tw['v'] = "\u0CA8";
ka_tw['b'] = "\u0CB5";
ka_tw['n'] = "\u0CB2";
ka_tw['m'] = "\u0CB8";
ka_tw['/'] = "\u0CAF";
ka_tw['Z'] = "\u0C8E";
ka_tw['X'] = "";
ka_tw['C'] = "\u0CA3";
ka_tw['V'] = "";
ka_tw['B'] = "";
ka_tw['N'] = "\u0CB3";
ka_tw['M'] = "\u0CB6";
ka_tw['<'] = "\u0CB7";
ka_tw['>'] = "\u007C";
//Phonetic
ka_en['B'] = "b";
ka_en['C'] = "c";
ka_en['F'] = "ph";
ka_en['f'] = "ph";
ka_en['G'] = "g";
ka_en['J'] = "j";
ka_en['K'] = "k";
ka_en['M'] = "m";
ka_en['P'] = "p";
ka_en['Q'] = "q";
ka_en['V'] = "v";
ka_en['W'] = "v";
ka_en['w'] = "v";
ka_en['X'] = "x";
ka_en['Y'] = "y";
ka_en['Z'] = "j";
ka_en['z'] = "j";
//Cons
ka_en['k'] = "\u0C95\u0CCD";
ka_en['c'] = "\u0C9A\u0CCD";
ka_en['T'] = "\u0C9F\u0CCD";
ka_en['D'] = "\u0CA1\u0CCD";
ka_en['N'] = "\u0CA3\u0CCD";
ka_en['t'] = "\u0CA4\u0CCD";
ka_en['d'] = "\u0CA6\u0CCD";
ka_en['n'] = "\u0CA8\u0CCD";
ka_en['p'] = "\u0CAA\u0CCD";
ka_en['b'] = "\u0CAC\u0CCD";


ka_en['y'] = "\u0CAF\u0CCD";
ka_en['R'] = "\u0CB1\u0CCD";
ka_en['L'] = "\u0CB3\u0CCD";
ka_en['v'] = "\u0CB5\u0CCD";
ka_en['s'] = "\u0CB8\u0CCD";
ka_en['S'] = "\u0CB6\u0CCD";
ka_en['H'] = "\u0CB9\u0CCD";
ka_en['x'] = "\u0C95\u0CCD\u0CB6\u0CCD";

ka_en['\u200Dm'] = "\u0C82";
ka_en[':h'] = "\u0C83";
ka_en['m'] = "\u0CAE\u0CCD";

ka_en['\u0C95\u0CCDh'] = "\u0C96\u0CCD";
ka_en['\u0C97\u0CCDh'] = "\u0C98\u0CCD";
ka_en['\u0CA8\u0CCDg'] = "\u0C99\u0CCD";
ka_en['\u0C9A\u0CCDh'] = "\u0C9B\u0CCD";
ka_en['\u0C9C\u0CCDh'] = "\u0C9D\u0CCD";
ka_en['\u0CA8\u0CCDj'] = "\u0C9E\u0CCD";
ka_en['\u0C9F\u0CCDh'] = "\u0CA0\u0CCD";
ka_en['\u0CA1\u0CCDh'] = "\u0CA2\u0CCD";
ka_en['\u0CA4\u0CCDh'] = "\u0CA5\u0CCD";
ka_en['\u0CA6\u0CCDh'] = "\u0CA7\u0CCD";
ka_en['\u0CAA\u0CCDh'] = "\u0CAB\u0CCD";
ka_en['\u0CAC\u0CCDh'] = "\u0CAD\u0CCD";
ka_en['\u0CB8\u0CCDh'] = "\u0CB7\u0CCD";
ka_en['\u0CB1\u0CCDr'] = "\u0C8B";
ka_en['\u0CB3\u0CCDl'] = "\u0C8C";

ka_en['\u0CCD\u0C8B'] = "\u0CC3";
ka_en['h'] = "\u0CB9\u0CCD";
ka_en['j'] = "\u0C9C\u0CCD";
ka_en['g'] = "\u0C97\u0CCD";
ka_en['r'] = "\u0CB0\u0CCD";
ka_en['l'] = "\u0CB2\u0CCD";
//VowSml
ka_en['\u0CCDa'] = "\u200C";
ka_en['\u0CCDi'] = "\u0CBF";
ka_en['\u0CCDu'] = "\u0CC1";
ka_en['\u0C8Bu'] = "\u0CC3";
ka_en['\u0CCDe'] = "\u0CC6";
ka_en['\u0CCDo'] = "\u0CCA";
ka_en['\u200Ci'] = "\u0CC8";
ka_en['\u200Cu'] = "\u0CCC";
ka_en['\u200C-'] = "\u200D";
ka_en['\u200C:'] = ":";
ka_en['-'] = "\u200D";
//VowBig
ka_en['\u200Ca'] = "\u0CBE";
ka_en['\u0CBFi'] = "\u0CC0";
ka_en['\u0CC1u'] = "\u0CC2";
ka_en['\u0CC3u'] = "\u0CC4";
ka_en['\u0CC6e'] = "\u0CC7";
ka_en['\u0CCAo'] = "\u0CCB";
ka_en['\u0CCDA'] = "\u0CBE";
ka_en['\u0CCDI'] = "\u0CC0";
ka_en['\u0CCDU'] = "\u0CC2";
ka_en['\u0C8BU'] = "\u0CC4";
ka_en['\u0CCDE'] = "\u0CC7";
ka_en['\u0CCDO'] = "\u0CCB";
//Vows
ka_en['\u0C85i'] = "\u0C90";
ka_en['\u0C85u'] = "\u0C94";
ka_en['\u0C85a'] = "\u0C86";
ka_en['\u0C87i'] = "\u0C88";
ka_en['\u0C89u'] = "\u0C8A";
ka_en['\u0C8Ee'] = "\u0C8F";
ka_en['\u0C92o'] = "\u0C93";

ka_en['a'] = "\u0C85";
ka_en['A'] = "\u0C86";
ka_en['i'] = "\u0C87";
ka_en['I'] = "\u0C88";
ka_en['u'] = "\u0C89";
ka_en['U'] = "\u0C8A";
ka_en['e'] = "\u0C8E";
ka_en['E'] = "\u0C8F";
ka_en['o'] = "\u0C92";
ka_en['O'] = "\u0C93";
ka_en['q'] = "\u0C95\u0CCD";
//Nums(txt);
ka_en['\u200D1'] = "\u0CE7";
ka_en['\u200D2'] = "\u0CE8";
ka_en['\u200D3'] = "\u0CE9";
ka_en['\u200D4'] = "\u0CEA";
ka_en['\u200D5'] = "\u0CEB";
ka_en['\u200D6'] = "\u0CEC";
ka_en['\u200D7'] = "\u0CED";
ka_en['\u200D8'] = "\u0CEE";
ka_en['\u200D9'] = "\u0CEF";
ka_en['\u200D0'] = "\u0CE6";
ka_en['(.+)\u200C(.+)'] = "$1$2";



Kanni['languages']['kannada']['methods']['ka_tw']['charmap'] = ka_tw;
Kanni['languages']['kannada']['methods']['ka_en']['charmap'] = ka_en;

