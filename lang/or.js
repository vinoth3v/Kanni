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

Kanni['languages']['or_tw'] = {
  'language' : "Oriya",      // language Name
  'chnbin' : "\u0B4D",
  'ugar' : "\u0B41",
  'uugar' : "\u0B42",
  'method' : 'typewriter',   // typing method
  'maxchar' : '4',           // maximum char combination
  'mergeprevchar' : false,  // merge with previous char?
  'charmap' : {}             // character mao
};

Kanni['languages']['or_en'] = {
  'language' : "Oriya",      // language Name
  'chnbin' : "\u0B4D",
  'ugar' : "\u0B41",
  'uugar' : "\u0B42",
  'method' : 'phonetic',   // typing method
  'maxchar' : '4',           // maximum char combination
  'mergeprevchar' : true,  // merge with previous char?
  'charmap' : {}             // character mao
};


var or_en = new Array();
var or_tw = new Array();


//Typewritter
or_tw['\\!'] = "";
or_tw['\\@'] = "";
or_tw['\\#'] = "\u0B4D\u0B30";
or_tw['\\$'] = "\u0B30\u0B4D";
or_tw['\\%'] = "\u0B1C\u0B4D\u0B1E";
or_tw['\\^'] = "\u0B24\u0B4D\u0B30";
or_tw['\\&'] = "\u0B15\u0B4D\u0B37";
or_tw['\\*'] = "\u0B36\u0B4D\u0B30";
or_tw['_'] = "\u0B03";
or_tw['\\+'] = "\u0B0B";
or_tw['\\='] = "\u0B43";
or_tw['q'] = "\u0B4C";
or_tw['w'] = "\u0B48";
or_tw['e'] = "\u0B3E";
or_tw['r'] = "\u0B40";
or_tw['t'] = "\u0B42";
or_tw['y'] = "\u0B2C";
or_tw['u'] = "\u0B39";
or_tw['i'] = "\u0B17";
or_tw['o'] = "\u0B26";
or_tw['p'] = "\u0B1C";
or_tw['\\['] = "\u0B21";
or_tw['\\]'] = "\u0B3C";
or_tw['Q'] = "\u0B14";
or_tw['W'] = "\u0B10";
or_tw['E'] = "\u0B06";
or_tw['R'] = "\u0B08";
or_tw['T'] = "\u0B0A";
or_tw['Y'] = "\u0B2D";
or_tw['U'] = "\u0B19";
or_tw['I'] = "\u0B18";
or_tw['O'] = "\u0B27";
or_tw['P'] = "\u0B1D";
or_tw['\\{'] = "\u0B22";
or_tw['\\}'] = "\u0B1E";

or_tw['a'] = "\u0B4B";
or_tw['s'] = "\u0B47";
or_tw['d'] = "\u0B4D";
or_tw['f'] = "\u0B3F";
or_tw['g'] = "\u0B41";
or_tw['h'] = "\u0B2A";
or_tw['j'] = "\u0B30";
or_tw['k'] = "\u0B15";
or_tw['l'] = "\u0B24";
or_tw[';'] = "\u0B1A";
or_tw['\\\''] = "\u0B1F";
or_tw['\\\\'] = "\u0B49";
or_tw['A'] = "\u0B13";
or_tw['S'] = "\u0B0F";
or_tw['D'] = "\u0B05";
or_tw['F'] = "\u0B07";
or_tw['G'] = "\u0B09";
or_tw['H'] = "\u0B2B";
or_tw['J'] = "\u0B5C";
or_tw['K'] = "\u0B16";
or_tw['L'] = "\u0B25";
or_tw[':'] = "\u0B1B";
or_tw['"'] = "\u0B20";
or_tw['\\|'] = "\u0B11";

or_tw['z'] = "";
or_tw['x'] = "\u0B02";
or_tw['c'] = "\u0B2E";
or_tw['v'] = "\u0B28";
or_tw['b'] = "\u0B35";
or_tw['n'] = "\u0B32";
or_tw['m'] = "\u0B38";
or_tw['/'] = "\u0B2F";
or_tw['Z'] = "";
or_tw['X'] = "\u0B01";
or_tw['C'] = "\u0B23";
or_tw['V'] = "";
or_tw['B'] = "";
or_tw['N'] = "\u0B33";
or_tw['M'] = "\u0B36";
or_tw['<'] = "\u0B37";
or_tw['>'] = "\u0B64";
or_tw['\\?'] = "\u0B5F";
// Phonetic
or_en['B'] = "b";
or_en['e'] = "E";
or_en['o'] = "O";
or_en['C'] = "c";
or_en['F'] = "ph";
or_en['f'] = "ph";
or_en['G'] = "g";
or_en['J'] = "j";
or_en['K'] = "k";
or_en['M'] = "m";
or_en['P'] = "p";
or_en['Q'] = "q";
or_en['V'] = "b";
or_en['W'] = "b";
or_en['w'] = "b";
or_en['v'] = "b";
or_en['X'] = "x";
or_en['Y'] = "y";
or_en['Z'] = "j";
or_en['z'] = "j";
//Cons
or_en['k'] = "\u0B15\u0B4D";
or_en['c'] = "\u0B1A\u0B4D";
or_en['T'] = "\u0B1F\u0B4D";
or_en['D'] = "\u0B21\u0B4D";
or_en['N'] = "\u0B23\u0B4D";
or_en['t'] = "\u0B24\u0B4D";
or_en['d'] = "\u0B26\u0B4D";
or_en['p'] = "\u0B2A\u0B4D";
or_en['b'] = "\u0B2C\u0B4D";

or_en['y'] = "\u0B2F\u0B4D";
or_en['R'] = "\u0B5C\u0B4D";
or_en['L'] = "\u0B33\u0B4D";

or_en['s'] = "\u0B38\u0B4D";
or_en['S'] = "\u0B37\u0B4D";
or_en['H'] = "\u0B39\u0B4D";
or_en['x'] = "\u0B15\u0B4D\u0B36\u0B4D";

or_en['\u200Dn'] = "\u0B01";
or_en['\u200Dm'] = "\u0B02";
or_en[':h'] = "\u0B03";
or_en['m'] = "\u0B2E\u0B4D";
or_en['n'] = "\u0B28\u0B4D";

or_en['\u0B15\u0B4Dh'] = "\u0B16\u0B4D";
or_en['\u0B17\u0B4Dh'] = "\u0B18\u0B4D";
or_en['\u0B28\u0B4Dg'] = "\u0B19\u0B4D";
or_en['\u0B1A\u0B4Dh'] = "\u0B1B\u0B4D";
or_en['\u0B1C\u0B4Dh'] = "\u0B1D\u0B4D";
or_en['\u0B28\u0B4Dj'] = "\u0B1E\u0B4D";
or_en['\u0B1F\u0B4Dh'] = "\u0B20\u0B4D";
or_en['\u0B21\u0B4Dh'] = "\u0B22\u0B4D";
or_en['\u0B24\u0B4Dh'] = "\u0B25\u0B4D";
or_en['\u0B26\u0B4Dh'] = "\u0B27\u0B4D";
or_en['\u0B2A\u0B4Dh'] = "\u0B2B\u0B4D";
or_en['\u0B2C\u0B4Dh'] = "\u0B2D\u0B4D";
or_en['\u0B38\u0B4Dh'] = "\u0B36\u0B4D";
or_en['\u0B5C\u0B4Dr'] = "\u0B0B";
or_en['\u0B33\u0B4Dl'] = "\u0B0C";
or_en['\u0B4D\u0B0B'] = "\u0B43";
or_en['r'] = "\u0B30\u0B4D";
or_en['l'] = "\u0B32\u0B4D";

or_en['h'] = "\u0B39\u0B4D";
or_en['g'] = "\u0B17\u0B4D";
or_en['j'] = "\u0B1C\u0B4D";
//VowSml
or_en['\u0B4Da'] = "\u200C";
or_en['\u0B4Di'] = "\u0B3F";
or_en['\u0B4Du'] = "\u0B41";
or_en['\u0B4De'] = "\u0B46";
or_en['\u0B4Do'] = "\u0B4A";
or_en['\u200Ci'] = "\u0B48";
or_en['\u200Cu'] = "\u0B4C";
or_en['\u200C-'] = "\u200D";
or_en['\u200C:'] = ":";
or_en['-'] = "\u200D";
//VowBig
or_en['\u200Ca'] = "\u0B3E";
or_en['\u0B3Fi'] = "\u0B40";
or_en['\u0B41u'] = "\u0B42";
or_en['\u0B46e'] = "\u0B47";
or_en['\u0B4Ao'] = "\u0B4B";
or_en['\u0B4DA'] = "\u0B3E";
or_en['\u0B4DI'] = "\u0B40";
or_en['\u0B4DU'] = "\u0B42";
or_en['\u0B4DE'] = "\u0B47";
or_en['\u0B4DO'] = "\u0B4B";
//Vows
or_en['\u0B05i'] = "\u0B10";
or_en['\u0B05u'] = "\u0B14";
or_en['\u0B05a'] = "\u0B06";
or_en['\u0B07i'] = "\u0B08";
or_en['\u0B09u'] = "\u0B0A";
or_en['\u0B0Ee'] = "\u0B0F";
or_en['\u0B12o'] = "\u0B13";
or_en['\u0B13m'] = "\u0B50";

or_en['a'] = "\u0B05";
or_en['A'] = "\u0B06";
or_en['i'] = "\u0B07";
or_en['I'] = "\u0B08";
or_en['u'] = "\u0B09";
or_en['U'] = "\u0B0A";
or_en['e'] = "\u0B0E";
or_en['E'] = "\u0B0F";
or_en['o'] = "\u0B12";
or_en['O'] = "\u0B13";
or_en['q'] = "\u0B15\u0B4D";
//Nums
or_en['\u200D1'] = "\u0B67";
or_en['\u200D2'] = "\u0B68";
or_en['\u200D3'] = "\u0B69";
or_en['\u200D4'] = "\u0B6A";
or_en['\u200D5'] = "\u0B6B";
or_en['\u200D6'] = "\u0B6C";
or_en['\u200D7'] = "\u0B6D";
or_en['\u200D8'] = "\u0B6E";
or_en['\u200D9'] = "\u0B6F";
or_en['\u200D0'] = "\u0B66";
or_en['(.+)\u200C(.+)'] = "$1$2";


Kanni['languages']['or_tw']['charmap'] = or_tw;
Kanni['languages']['or_en']['charmap'] = or_en;


