/*  Kanni IME Transliteration Javascrit Library
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


// assign the tw char map
Kanni['languages']['te_tw'] = {
  'language' : "Telugu",      // language Name
  'chnbin' : "\u0C4D",
  'ugar' : "\u0C41",
  'uugar' : "\u0C42",
  'method' : 'typewriter',   // typing method
  'maxchar' : '4',           // maximum char combination
  'mergeprevchar' : false,  // merge with previous char?
  'charmap' : {}             // character mao
};

// assign the tw char map
Kanni['languages']['te_en'] = {
  'language' : "Telugu",      // language Name
  'chnbin' : "\u0C4D",
  'ugar' : "\u0C41",
  'uugar' : "\u0C42",
  'method' : 'phonetic',   // typing method
  'maxchar' : '4',           // maximum char combination
  'mergeprevchar' : true,  // merge with previous char?
  'charmap' : {}             // character mao
};



var te_en = new Array();
var te_tw = new Array();


// Typewriter
te_tw['\\~'] = "\u0C12";
te_tw['\\`'] = "\u0C4A";
te_tw['\\#'] = "\u0C4D\u0C30";
te_tw['\\%'] = "\u0C1C\u0C4D\u0C1E";
te_tw['\\^'] = "\u0C24\u0C4D\u0C30";
te_tw['\\&'] = "\u0C15\u0C4D\u0C37";
te_tw['\\*'] = "\u0C36\u0C4D\u0C30";
te_tw['_'] = "\u0C03";
te_tw['\\+'] = "\u0C0B";
te_tw['\\='] = "\u0C43";
te_tw['q'] = "\u0C4C";
te_tw['w'] = "\u0C48";
te_tw['e'] = "\u0C3E";
te_tw['r'] = "\u0C40";
te_tw['t'] = "\u0C42";
te_tw['y'] = "\u0C2C";
te_tw['u'] = "\u0C39";
te_tw['i'] = "\u0C17";
te_tw['o'] = "\u0C26";
te_tw['p'] = "\u0C1C";
te_tw['\\['] = "\u0C21";

te_tw['Q'] = "\u0C14";
te_tw['W'] = "\u0C10";
te_tw['E'] = "\u0C06";
te_tw['R'] = "\u0C08";
te_tw['T'] = "\u0C0A";
te_tw['Y'] = "\u0C2D";
te_tw['U'] = "\u0C19";
te_tw['I'] = "\u0C18";
te_tw['O'] = "\u0C27";
te_tw['P'] = "\u0C1D";
te_tw['\\{'] = "\u0C22";
te_tw['\\}'] = "\u0C1E";

te_tw['a'] = "\u0C4B";
te_tw['s'] = "\u0C47";
te_tw['d'] = "\u0C4D";
te_tw['f'] = "\u0C3F";
te_tw['g'] = "\u0C41";
te_tw['h'] = "\u0C2A";
te_tw['j'] = "\u0C30";
te_tw['k'] = "\u0C15";
te_tw['l'] = "\u0C24";
te_tw['\\;'] = "\u0C1A";
te_tw['\\\''] = "\u0C1F";

te_tw['A'] = "\u0C13";
te_tw['S'] = "\u0C0F";
te_tw['D'] = "\u0C05";
te_tw['F'] = "\u0C07";
te_tw['G'] = "\u0C09";
te_tw['H'] = "\u0C2B";
te_tw['J'] = "\u0C31";
te_tw['K'] = "\u0C16";
te_tw['L'] = "\u0C25";
te_tw['\\:'] = "\u0C1B";
te_tw['"'] = "\u0C20";

te_tw['z'] = "\u0C46";
te_tw['x'] = "\u0C02";
te_tw['c'] = "\u0C2E";
te_tw['v'] = "\u0C28";
te_tw['b'] = "\u0C35";
te_tw['n'] = "\u0C32";
te_tw['m'] = "\u0C38";
te_tw['/'] = "\u0C2F";
te_tw['Z'] = "\u0C0E";
te_tw['X'] = "\u0C01";
te_tw['C'] = "\u0C23";
te_tw['V'] = "";
te_tw['B'] = "";
te_tw['N'] = "\u0C33";
te_tw['M'] = "\u0C36";
te_tw['<'] = "\u0C37";

//Phonetic
te_en['B'] = "b";
te_en['C'] = "c";
te_en['F'] = "ph";
te_en['f'] = "ph";
te_en['G'] = "g";
te_en['J'] = "j";
te_en['K'] = "k";
te_en['M'] = "m";
te_en['P'] = "p";
te_en['Q'] = "q";
te_en['V'] = "v";
te_en['W'] = "v";
te_en['w'] = "v";
te_en['X'] = "x";
te_en['Y'] = "y";
te_en['Z'] = "j";
//Cons
te_en['k'] = "\u0C15\u0C4D";
te_en['c'] = "\u0C1A\u0C4D";
te_en['T'] = "\u0C1F\u0C4D";
te_en['D'] = "\u0C21\u0C4D";
te_en['N'] = "\u0C23\u0C4D";
te_en['t'] = "\u0C24\u0C4D";
te_en['d'] = "\u0C26\u0C4D";
te_en['p'] = "\u0C2A\u0C4D";
te_en['b'] = "\u0C2C\u0C4D";

te_en['y'] = "\u0C2F\u0C4D";
te_en['R'] = "\u0C31\u0C4D";
te_en['L'] = "\u0C33\u0C4D";
te_en['v'] = "\u0C35\u0C4D";
te_en['s'] = "\u0C38\u0C4D";
te_en['S'] = "\u0C36\u0C4D";
te_en['H'] = "\u0C39\u0C4D";
te_en['x'] = "\u0C15\u0C4D\u0C36\u0C4D";

te_en['\u200Dn'] = "\u0C01";
te_en['\u200Dm'] = "\u0C02";
te_en['m'] = "\u0C2E\u0C4D";
te_en['n'] = "\u0C28\u0C4D";
te_en[':h'] = "\u0C03";

te_en['\u0C15\u0C4Dh'] = "\u0C16\u0C4D";
te_en['\u0C28\u0C4Dg'] = "\u0C19\u0C4D";
te_en['\u0C1A\u0C4Dh'] = "\u0C1B\u0C4D";
te_en['\u0C28\u0C4Dj'] = "\u0C1E\u0C4D";
te_en['\u0C1F\u0C4Dh'] = "\u0C20\u0C4D";
te_en['\u0C21\u0C4Dh'] = "\u0C22\u0C4D";
te_en['\u0C24\u0C4Dh'] = "\u0C25\u0C4D";
te_en['\u0C26\u0C4Dh'] = "\u0C27\u0C4D";
te_en['\u0C2A\u0C4Dh'] = "\u0C2B\u0C4D";
te_en['\u0C2C\u0C4Dh'] = "\u0C2D\u0C4D";
te_en['\u0C38\u0C4Dh'] = "\u0C37\u0C4D";
te_en['\u0C31\u0C4Dr'] = "\u0C0B";
te_en['\u0C33\u0C4Dl'] = "\u0C0C";
te_en['\u0C4D\u0C0B'] = "\u0C43";

te_en['j'] = "\u0C1C\u0C4D";
te_en['\u0C1C\u0C4Dh'] = "\u0C1D\u0C4D";
te_en['g'] = "\u0C17\u0C4D";
te_en['\u0C17\u0C4Dh'] = "\u0C18\u0C4D";
te_en['r'] = "\u0C30\u0C4D";
te_en['l'] = "\u0C32\u0C4D";
te_en['h'] = "\u0C39\u0C4D";
//VowSmall
te_en['\u0C4Da'] = "\u200C";
te_en['\u0C4Di'] = "\u0C3F";
te_en['\u0C4Du'] = "\u0C41";
te_en['\u0C0Bu'] = "\u0C43";
te_en['\u0C4De'] = "\u0C46";
te_en['\u0C4Do'] = "\u0C4A";
te_en['\u200Ci'] = "\u0C48";
te_en['\u200Cu'] = "\u0C4C";
te_en['\u200C-'] = "\u200D";
te_en['\u200C:'] = ":";
te_en['-'] = "\u200D";
//VowBig
te_en['\u200Ca'] = "\u0C3E";
te_en['\u0C3Fi'] = "\u0C40";
te_en['\u0C41u'] = "\u0C42";
te_en['\u0C43u'] = "\u0C44";
te_en['\u0C46e'] = "\u0C47";
te_en['\u0C4Ao'] = "\u0C4B";
te_en['\u0C4DA'] = "\u0C3E";
te_en['\u0C4DI'] = "\u0C40";
te_en['\u0C4DU'] = "\u0C42";
te_en['\u0C0BU'] = "\u0C44";
te_en['\u0C4DE'] = "\u0C47";
te_en['\u0C4DO'] = "\u0C4B";
//Vows
te_en['\u0C05i'] = "\u0C10";
te_en['\u0C05u'] = "\u0C14";
te_en['ai'] = "\u0C10";
te_en['au'] = "\u0C14";
te_en['\u0C05a'] = "\u0C06";
te_en['\u0C07i'] = "\u0C08";
te_en['\u0C09u'] = "\u0C0A";
te_en['\u0C0Ee'] = "\u0C0F";
te_en['\u0C12o'] = "\u0C13";

te_en['a'] = "\u0C05";
te_en['A'] = "\u0C06";
te_en['i'] = "\u0C07";
te_en['I'] = "\u0C08";
te_en['u'] = "\u0C09";
te_en['U'] = "\u0C0A";
te_en['e'] = "\u0C0E";
te_en['E'] = "\u0C0F";
te_en['o'] = "\u0C12";
te_en['O'] = "\u0C13";
te_en['q'] = "\u0C15\u0C4D";
//Nums
te_en['\u200D1'] = "\u0C67";
te_en['\u200D2'] = "\u0C68";
te_en['\u200D3'] = "\u0C69";
te_en['\u200D4'] = "\u0C6A";
te_en['\u200D5'] = "\u0C6B";
te_en['\u200D6'] = "\u0C6C";
te_en['\u200D7'] = "\u0C6D";
te_en['\u200D8'] = "\u0C6E";
te_en['\u200D9'] = "\u0C6F";
te_en['\u200D0'] = "\u0C66";
te_en['(.+)\u200C(.+)'] = "$1$2";


Kanni['languages']['te_tw']['charmap'] = te_tw;
Kanni['languages']['te_en']['charmap'] = te_en;

