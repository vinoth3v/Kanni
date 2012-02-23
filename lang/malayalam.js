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

Kanni['languages']['malayalam'] = {
  'name' : "Malayalam",      // language Name
  'charfrom' : '0D00',
  'charto' : '0D7F',
  'chnbin' : "\u0D4D",
  'ugar' : "\u0D41",
  'uugar' : "\u0D42",
  'methods' : {}             // character map
};

Kanni['languages']['malayalam']['methods']['ma_tw'] = {
  'method' : 'typewriter',   // typing method
  'maxchar' : '4',           // maximum char combination
  'mergeprevchar' : false,  // merge with previous char?
  'charmap' : {}             // character map
};

Kanni['languages']['malayalam']['methods']['ma_en'] = {
  'method' : 'phonetic',
  'maxchar' : '4',
  'mergeprevchar' : true,
  'charmap' : {}
};


var ma_en = new Array();
var ma_tw = new Array();

//Typewritter
ma_tw['\\!'] = "";
ma_tw['\\@'] = "";
ma_tw['\\#'] = "\u0D4D\u0D30";
ma_tw['\\$'] = "";
ma_tw['\\%'] = "";
ma_tw['\\^'] = "";
ma_tw['\\&'] = "\u0D15\u0D4D\u0D37";
ma_tw['\\*'] = "";
ma_tw['_'] = "\u0D03";
ma_tw['\\+'] = "\u0D0B";
ma_tw['\\='] = "\u0D43";
ma_tw['q'] = "\u0D4C";
ma_tw['w'] = "\u0D48";
ma_tw['e'] = "\u0D3E";
ma_tw['r'] = "\u0D40";
ma_tw['t'] = "\u0D42";
ma_tw['y'] = "\u0D2C";
ma_tw['u'] = "\u0D39";
ma_tw['i'] = "\u0D17";
ma_tw['o'] = "\u0D26";
ma_tw['p'] = "\u0D1C";
ma_tw['\\['] = "\u0D21";
ma_tw['\\]'] = "\u0D3C";
ma_tw['Q'] = "\u0D14";
ma_tw['W'] = "\u0D10";
ma_tw['E'] = "\u0D06";
ma_tw['R'] = "\u0D08";
ma_tw['T'] = "\u0D0A";
ma_tw['Y'] = "\u0D2D";
ma_tw['U'] = "\u0D19";
ma_tw['I'] = "\u0D18";
ma_tw['O'] = "\u0D27";
ma_tw['P'] = "\u0D1D";
ma_tw['\\{'] = "\u0D22";
ma_tw['\\}'] = "\u0D1E";

ma_tw['a'] = "\u0D4B";
ma_tw['s'] = "\u0D47";
ma_tw['d'] = "\u0D4D";
ma_tw['f'] = "\u0D3F";
ma_tw['g'] = "\u0D41";
ma_tw['h'] = "\u0D2A";
ma_tw['j'] = "\u0D30";
ma_tw['k'] = "\u0D15";
ma_tw['l'] = "\u0D24";
ma_tw[';'] = "\u0D1A";
ma_tw['\\\''] = "\u0D1F";
ma_tw['\\\\'] = "\u0D49";
ma_tw['A'] = "\u0D13";
ma_tw['S'] = "\u0D0F";
ma_tw['D'] = "\u0D05";
ma_tw['F'] = "\u0D07";
ma_tw['G'] = "\u0D09";
ma_tw['H'] = "\u0D2B";
ma_tw['J'] = "\u0D31";
ma_tw['K'] = "\u0D16";
ma_tw['L'] = "\u0D25";
ma_tw[':'] = "\u0D1B";
ma_tw['\\"'] = "\u0D20";
ma_tw['\\|'] = "\u0D11";

ma_tw['z'] = "\u0D46";
ma_tw['x'] = "\u0D02";
ma_tw['c'] = "\u0D2E";
ma_tw['v'] = "\u0D28";
ma_tw['b'] = "\u0D35";
ma_tw['n'] = "\u0D32";
ma_tw['m'] = "\u0D38";
ma_tw['/'] = "\u0D2F";
ma_tw['Z'] = "\u0D0E";
ma_tw['X'] = "";
ma_tw['C'] = "\u0D23";
ma_tw['V'] = "";
ma_tw['B'] = "\u0D34";
ma_tw['N'] = "\u0D33";
ma_tw['M'] = "\u0D36";
ma_tw['<'] = "\u0D37";
ma_tw['>'] = "";
ma_tw['\\?'] = "";
//Phonetic
ma_en['B'] = "b";
ma_en['C'] = "c";
ma_en['F'] = "ph";
ma_en['f'] = "ph";
ma_en['G'] = "g";
ma_en['J'] = "j";
ma_en['K'] = "k";
ma_en['M'] = "m";
ma_en['P'] = "p";
ma_en['Q'] = "q";
ma_en['V'] = "v";
ma_en['W'] = "v";
ma_en['w'] = "v";
ma_en['X'] = "x";
ma_en['Y'] = "y";
ma_en['Z'] = "z";
//Cons
ma_en['k'] = "\u0D15\u0D4D";
ma_en['c'] = "\u0D1A\u0D4D";
ma_en['T'] = "\u0D1F\u0D4D";
ma_en['D'] = "\u0D21\u0D4D";
ma_en['N'] = "\u0D23\u0D4D";
ma_en['t'] = "\u0D24\u0D4D";
ma_en['d'] = "\u0D26\u0D4D";
ma_en['n'] = "\u0D28\u0D4D";
ma_en['p'] = "\u0D2A\u0D4D";
ma_en['b'] = "\u0D2C\u0D4D";

ma_en['y'] = "\u0D2F\u0D4D";
ma_en['R'] = "\u0D31\u0D4D";
ma_en['L'] = "\u0D33\u0D4D";
ma_en['v'] = "\u0D35\u0D4D";
ma_en['z'] = "\u0D34\u0D4D";
ma_en['s'] = "\u0D38\u0D4D";
ma_en['S'] = "\u0D36\u0D4D";
ma_en['H'] = "\u0D39\u0D4D";
ma_en['x'] = "\u0D15\u0D4D\u0D36\u0D4D";

ma_en['\u200Dm'] = "\u0D02";
ma_en[':h'] = "\u0D03";
ma_en['m'] = "\u0D2E\u0D4D";

ma_en['\u0D15\u0D4Dh'] = "\u0D16\u0D4D";
ma_en['\u0D17\u0D4Dh'] = "\u0D18\u0D4D";
ma_en['\u0D28\u0D4Dg'] = "\u0D19\u0D4D";
ma_en['\u0D1A\u0D4Dh'] = "\u0D1B\u0D4D";
ma_en['\u0D1C\u0D4Dh'] = "\u0D1D\u0D4D";
ma_en['\u0D28\u0D4Dj'] = "\u0D1E\u0D4D";
ma_en['\u0D1F\u0D4Dh'] = "\u0D20\u0D4D";
ma_en['\u0D21\u0D4Dh'] = "\u0D22\u0D4D";
ma_en['\u0D24\u0D4Dh'] = "\u0D25\u0D4D";
ma_en['\u0D26\u0D4Dh'] = "\u0D27\u0D4D";
ma_en['\u0D2A\u0D4Dh'] = "\u0D2B\u0D4D";
ma_en['\u0D2C\u0D4Dh'] = "\u0D2D\u0D4D";
ma_en['\u0D38\u0D4Dh'] = "\u0D37\u0D4D";
ma_en['\u0D31\u0D4Dr'] = "\u0D0B";
ma_en['\u0D33\u0D4Dl'] = "\u0D0C";
ma_en['\u0D4D\u0D0B'] = "\u0D43";
ma_en['r'] = "\u0D30\u0D4D";
ma_en['l'] = "\u0D32\u0D4D";

ma_en['h'] = "\u0D39\u0D4D";
ma_en['g'] = "\u0D17\u0D4D";
ma_en['j'] = "\u0D1C\u0D4D";
//VowSml
ma_en['\u0D4Da'] = "\u200C";
ma_en['\u0D4Di'] = "\u0D3F";
ma_en['\u0D4Du'] = "\u0D41";
ma_en['\u0D0Bu'] = "\u0D43";
ma_en['\u0D4De'] = "\u0D46";
ma_en['\u0D4Do'] = "\u0D4A";
ma_en['\u200Ci'] = "\u0D48";
ma_en['\u200Cu'] = "\u0D4C";
ma_en['\u200C-'] = "\u200D";
ma_en['\u200C:'] = ":";
ma_en['-'] = "\u200D";
//VowBig
ma_en['\u200Ca'] = "\u0D3E";
ma_en['\u0D3Fi'] = "\u0D40";
ma_en['\u0D41u'] = "\u0D42";
ma_en['\u0D46e'] = "\u0D47";
ma_en['\u0D4Ao'] = "\u0D4B";
ma_en['\u0D4DA'] = "\u0D3E";
ma_en['\u0D4DI'] = "\u0D40";
ma_en['\u0D4DU'] = "\u0D42";
ma_en['\u0D4DE'] = "\u0D47";
ma_en['\u0D4DO'] = "\u0D4B";
//Vows
ma_en['\u0D05i'] = "\u0D10";
ma_en['\u0D05u'] = "\u0D14";
ma_en['\u0D05a'] = "\u0D06";
ma_en['\u0D07i'] = "\u0D08";
ma_en['\u0D09u'] = "\u0D0A";
ma_en['\u0D0Ee'] = "\u0D0F";
ma_en['\u0D12o'] = "\u0D13";
ma_en['\u0D13m'] = "\u0D50";

ma_en['a'] = "\u0D05";
ma_en['A'] = "\u0D06";
ma_en['i'] = "\u0D07";
ma_en['I'] = "\u0D08";
ma_en['u'] = "\u0D09";
ma_en['U'] = "\u0D0A";
ma_en['e'] = "\u0D0E";
ma_en['E'] = "\u0D0F";
ma_en['o'] = "\u0D12";
ma_en['O'] = "\u0D13";
ma_en['q'] = "\u0D15\u0D4D";
//Nums
ma_en['\u200D1'] = "\u0D67";
ma_en['\u200D2'] = "\u0D68";
ma_en['\u200D3'] = "\u0D69";
ma_en['\u200D4'] = "\u0D6A";
ma_en['\u200D5'] = "\u0D6B";
ma_en['\u200D6'] = "\u0D6C";
ma_en['\u200D7'] = "\u0D6D";
ma_en['\u200D8'] = "\u0D6E";
ma_en['\u200D9'] = "\u0D6F";
ma_en['\u200D0'] = "\u0D66";
ma_en['(.+)\u200C(.+)'] = "$1$2";


Kanni['languages']['malayalam']['methods']['ma_tw']['charmap'] = ma_tw;
Kanni['languages']['malayalam']['methods']['ma_en']['charmap'] = ma_en;
