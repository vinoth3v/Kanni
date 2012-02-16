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


Kanni['languages']['pu_tw'] = {
  'language' : "Punjabi",      // language Name
  'chnbin' : "\u0A4D",
  'ugar' : "\u0A41",
  'uugar' : "\u0A42",
  'method' : 'typewriter',   // typing method
  'maxchar' : '4',           // maximum char combination
  'mergeprevchar' : false,  // merge with previous char?
  'charmap' : {}             // character mao
};

Kanni['languages']['pu_en'] = {
  'language' : "Punjabi",      // language Name
  'chnbin' : "\u0A4D",
  'ugar' : "\u0A41",
  'uugar' : "\u0A42",
  'method' : 'phonetic',   // typing method
  'maxchar' : '4',           // maximum char combination
  'mergeprevchar' : true,  // merge with previous char?
  'charmap' : {}             // character mao
};


var pu_en = new Array();
var pu_tw = new Array();


//Typewritter
pu_tw['\\!'] = "\u0A0D";
pu_tw['\\@'] = "\u0A45";
pu_tw['\\#'] = "\u0A4D\u0A30";
pu_tw['\\$'] = "\u0A30\u0A4D";
pu_tw['\\%'] = "\u0A1C\u0A4D\u0A1E";
pu_tw['\\^'] = "\u0A24\u0A4D\u0A30";
pu_tw['\\&'] = "\u0A15\u0A4D\u0A38";
pu_tw['\\*'] = "\u0A36\u0A4D\u0A30";
pu_tw['_'] = "\u0A03";
pu_tw['\\+'] = "\u0A0B";
pu_tw['\\='] = "\u0A43";
pu_tw['q'] = "\u0A4C";
pu_tw['w'] = "\u0A48";
pu_tw['e'] = "\u0A3E";
pu_tw['r'] = "\u0A40";
pu_tw['t'] = "\u0A42";
pu_tw['y'] = "\u0A2C";
pu_tw['u'] = "\u0A39";
pu_tw['i'] = "\u0A17";
pu_tw['o'] = "\u0A26";
pu_tw['p'] = "\u0A1C";
pu_tw['\\['] = "\u0A21";
pu_tw['\\]'] = "\u0A3C";
pu_tw['Q'] = "\u0A14";
pu_tw['W'] = "\u0A10";
pu_tw['E'] = "\u0A06";
pu_tw['R'] = "\u0A08";
pu_tw['T'] = "\u0A0A";
pu_tw['Y'] = "\u0A2D";
pu_tw['U'] = "\u0A19";
pu_tw['I'] = "\u0A18";
pu_tw['O'] = "\u0A27";
pu_tw['P'] = "\u0A1D";
pu_tw['\\{'] = "\u0A22";
pu_tw['\\}'] = "\u0A1E";

pu_tw['a'] = "\u0A4B";
pu_tw['s'] = "\u0A47";
pu_tw['d'] = "\u0A4D";
pu_tw['f'] = "\u0A3F";
pu_tw['g'] = "\u0A41";
pu_tw['h'] = "\u0A2A";
pu_tw['j'] = "\u0A30";
pu_tw['k'] = "\u0A15";
pu_tw['l'] = "\u0A24";
pu_tw['\\;'] = "\u0A1A";
pu_tw['\\\''] = "\u0A1F";
pu_tw['\\\\'] = "\u0A49";
pu_tw['A'] = "\u0A13";
pu_tw['S'] = "\u0A0F";
pu_tw['D'] = "\u0A05";
pu_tw['F'] = "\u0A07";
pu_tw['G'] = "\u0A09";
pu_tw['H'] = "\u0A2B";
pu_tw['J'] = "\u0A5C";
pu_tw['K'] = "\u0A16";
pu_tw['L'] = "\u0A25";
pu_tw['\\:'] = "\u0A1B";
pu_tw['"'] = "\u0A20";
pu_tw['\\|'] = "\u0A11";

pu_tw['z'] = "";
pu_tw['x'] = "\u0A02";
pu_tw['c'] = "\u0A2E";
pu_tw['v'] = "\u0A28";
pu_tw['b'] = "\u0A35";
pu_tw['n'] = "\u0A32";
pu_tw['m'] = "\u0A38";
pu_tw['/'] = "\u0A2F";
pu_tw['Z'] = "";
pu_tw['X'] = "\u0A01";
pu_tw['C'] = "\u0A23";
pu_tw['V'] = "";
pu_tw['B'] = "";
pu_tw['N'] = "\u0A33";
pu_tw['M'] = "\u0A36";
pu_tw['<'] = "\u0A38";
pu_tw['>'] = "\u0A64";
pu_tw['\\?'] = "\u0A5F";

//Phonetic
pu_en['B'] = "b";
pu_en['C'] = "c";
pu_en['F'] =  "ph";
pu_en['f'] =  "ph";
pu_en['G'] = "g";
pu_en['J'] = "j";
pu_en['K'] = "k";
pu_en['M'] = "m";
pu_en['P'] = "p";
pu_en['Q'] = "q";
pu_en['V'] = "v";
pu_en['W'] = "v";
pu_en['w'] = "v";
pu_en['X'] = "x";
pu_en['Y'] = "y";
pu_en['Z'] = "j";
pu_en['z'] = "j";
pu_en['e'] = "E";
pu_en['o'] = "O";
//Cons
pu_en['k'] = "\u0A15\u0A4D";
pu_en['c'] = "\u0A1A\u0A4D";
pu_en['T'] = "\u0A1F\u0A4D";
pu_en['D'] = "\u0A21\u0A4D";
pu_en['N'] = "\u0A23\u0A4D";
pu_en['t'] = "\u0A24\u0A4D";
pu_en['d'] = "\u0A26\u0A4D";
pu_en['n'] = "\u0A28\u0A4D";
pu_en['p'] = "\u0A2A\u0A4D";
pu_en['b'] = "\u0A2C\u0A4D";


pu_en['y'] = "\u0A2F\u0A4D";
pu_en['R'] = "\u0A5C\u0A4D";
pu_en['L'] = "\u0A33\u0A4D";
pu_en['v'] = "\u0A35\u0A4D";
pu_en['s'] = "\u0A38\u0A4D";
pu_en['S'] = "\u0A38\u0A4D";
pu_en['H'] = "\u0A39\u0A4D";
pu_en['x'] = "\u0A15\u0A4D\u0A36\u0A4D";

pu_en['\u0A15\u0A4Dh'] = "\u0A16\u0A4D";
pu_en['\u0A17\u0A4Dh'] = "\u0A18\u0A4D";
pu_en['\u0A28\u0A4Dg'] = "\u0A19\u0A4D";
pu_en['\u0A1A\u0A4Dh'] = "\u0A1B\u0A4D";
pu_en['\u0A1C\u0A4Dh'] = "\u0A1D\u0A4D";
pu_en['\u0A28\u0A4Dj'] = "\u0A1E\u0A4D";
pu_en['\u0A1F\u0A4Dh'] = "\u0A20\u0A4D";
pu_en['\u0A21\u0A4Dh'] = "\u0A22\u0A4D";
pu_en['\u0A24\u0A4Dh'] = "\u0A25\u0A4D";
pu_en['\u0A26\u0A4Dh'] = "\u0A27\u0A4D";
pu_en['\u0A2A\u0A4Dh'] = "\u0A2B\u0A4D";
pu_en['\u0A2C\u0A4Dh'] = "\u0A2D\u0A4D";
pu_en['\u0A38\u0A4Dh'] = "\u0A36\u0A4D";
pu_en['\u200Dm'] = "\u0A02";

pu_en['r'] = "\u0A30\u0A4D";
pu_en['l'] = "\u0A32\u0A4D";

pu_en['h'] = "\u0A39\u0A4D";
pu_en['g'] = "\u0A17\u0A4D";
pu_en['j'] = "\u0A1C\u0A4D";
pu_en['m'] = "\u0A2E\u0A4D";
//VowSml
pu_en['\u0A4Da'] = "\u200C";
pu_en['\u0A4Di'] = "\u0A3F";
pu_en['\u0A4Du'] = "\u0A41";
pu_en['\u0A4De'] = "\u0A46";
pu_en['\u0A4Do'] = "\u0A4A";
pu_en['\u200Ci'] = "\u0A48";
pu_en['\u200Cu'] = "\u0A4C";
pu_en['\u200C-'] = "\u200D";
pu_en['\u200C:'] = ":";
pu_en['-'] = "\u200D";
//VowBig
pu_en['\u200Ca'] = "\u0A3E";
pu_en['\u0A3Fi'] = "\u0A40";
pu_en['\u0A41u'] = "\u0A42";
pu_en['\u0A46e'] = "\u0A47";
pu_en['\u0A4Ao'] = "\u0A4B";
pu_en['\u0A4DA'] = "\u0A3E";
pu_en['\u0A4DI'] = "\u0A40";
pu_en['\u0A4DU'] = "\u0A42";
pu_en['\u0A4DE'] = "\u0A47";
pu_en['\u0A4DO'] = "\u0A4B";
//Vows
pu_en['\u0A05i'] = "\u0A10";
pu_en['\u0A05u'] = "\u0A14";
pu_en['\u0A05a'] = "\u0A06";
pu_en['\u0A07i'] = "\u0A08";
pu_en['\u0A09u'] = "\u0A0A";
pu_en['\u0A0Fe'] = "\u0A0F";
pu_en['\u0A13o'] = "\u0A13";
pu_en['\u0A13m'] = "\u0A50";
pu_en[':h'] = "\u0A03";

pu_en['a'] = "\u0A05";
pu_en['A'] = "\u0A06";
pu_en['i'] = "\u0A07";
pu_en['I'] = "\u0A08";
pu_en['u'] = "\u0A09";
pu_en['U'] = "\u0A0A";
pu_en['E'] = "\u0A0F";
pu_en['O'] = "\u0A13";
pu_en['q'] = "\u0A15\u0A4D";
//Nums
pu_en['\u200D1'] = "\u0A67";
pu_en['\u200D2'] = "\u0A68";
pu_en['\u200D3'] = "\u0A69";
pu_en['\u200D4'] = "\u0A6A";
pu_en['\u200D5'] = "\u0A6B";
pu_en['\u200D6'] = "\u0A6C";
pu_en['\u200D7'] = "\u0A6D";
pu_en['\u200D8'] = "\u0A6E";
pu_en['\u200D9'] = "\u0A6F";
pu_en['\u200D0'] = "\u0A66";
pu_en['(.+)\u200C(.+)'] = "$1$2";



Kanni['languages']['pu_en']['charmap'] = pu_en;
Kanni['languages']['pu_tw']['charmap'] = pu_tw;


