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
Kanni['languages']['ta_tw'] = {
  'language' : "Tamil",      // language Name
  'chnbin' : "\u0BCD",
  'ugar' : "\u0BC1",
  'uugar' : "\u0BC2",
  'method' : 'typewriter',   // typing method
  'maxchar' : '4',           // maximum char combination
  'mergeprevchar' : false,  // merge with previous char?
  'charmap' : {}             // character mao
};

Kanni['languages']['ta_en'] = {
  'language' : "Tamil",
  'chnbin' : "\u0BCD",
  'method' : 'phonetic',
  'maxchar' : '4',
  'mergeprevchar' : true,
  'charmap' : {}
};

Kanni['languages']['ta_99'] = {
  'language' : "Tamil",
  'chnbin' : "\u0BCD",
  'method' : 'ta 99',
  'maxchar' : '4',
  'mergeprevchar' : true,
  'charmap' : {}
};


var ta_tw = new Array();
var ta_99 = new Array();
var ta_en = new Array();

// typewriter keys
ta_tw['\\!'] = "\u0BB8";
ta_tw['\\$'] = "\u0B9C";
ta_tw['\\%'] = "\u0BC1";
ta_tw['\\^'] = "\u0BC2";
ta_tw['\\&'] = "\u0BB7";
ta_tw['_'] = "\u0BB8\u0BCD\u0BB0\u0BC0";
ta_tw['q'] = "\u0BA3\u0BC1";
ta_tw['w'] = "\u0BB1";
ta_tw['e'] = "\u0BA8";
ta_tw['r'] = "\u0B9A";
ta_tw['t'] = "\u0BB5";
ta_tw['y'] = "\u0BB2";
ta_tw['u'] = "\u0BB0";
ta_tw['i'] = "\u0BC8";
ta_tw['o'] = "\u0B9F\u0BBF";
ta_tw['p'] = "\u0BBF";
ta_tw['\\['] = "\u0BC1";
ta_tw['\\]'] = "\u0B94";
ta_tw["\\\\"] = "\u0B95\u0BCD\u0BB7";
ta_tw['Q'] = "\u0B9E\u0BC1";
ta_tw['W'] = "\u0BB1\u0BC1";
ta_tw['E'] = "\u0BA8\u0BC1";
ta_tw['R'] = "\u0B9A\u0BC1";
ta_tw['T'] = "\u0B95\u0BC2";
ta_tw['Y'] = "\u0BB2\u0BC1";
ta_tw['U'] = "\u0BB0\u0BC1";
ta_tw['I'] = "\u0B90";
ta_tw['O'] = "\u0B9F\u0BC0";
ta_tw['P'] = "\u0BC0";
ta_tw['\\{'] = "\u0BC2";
ta_tw['\\}'] = "\u0BC2";

ta_tw['a'] = "\u0BAF";
ta_tw['s'] = "\u0BB3";
ta_tw['d'] = "\u0BA9";
ta_tw['f'] = "\u0B95";
ta_tw['g'] = "\u0BAA";
ta_tw['h'] = "\u0BBE";
ta_tw['j'] = "\u0BA4";
ta_tw['k'] = "\u0BAE";
ta_tw['l'] = "\u0B9F";
ta_tw['\\;'] = "\u0BCD";
ta_tw['\\\''] = "\u0B99";
ta_tw['A'] = "\u0BB1\u0BBE";
ta_tw['S'] = "\u0BB3\u0BC1";
ta_tw['D'] = "\u0BA9\u0BC1";
ta_tw['F'] = "\u0B95\u0BC1";
ta_tw['G'] = "\u0BB4\u0BC1";
ta_tw['H'] = "\u0BB4";
ta_tw['J'] = "\u0BA4\u0BC1";
ta_tw['K'] = "\u0BAE\u0BC1";
ta_tw['L'] = "\u0B9F\u0BC1";
ta_tw['\\:'] = "\u00B0";
ta_tw['\\"'] = "\u0B9E";

ta_tw['z'] = "\u0BA3";
ta_tw['x'] = "\u0B92";
ta_tw['c'] = "\u0B89";
ta_tw['v'] = "\u0B8E";
ta_tw['b'] = "\u0BC6";
ta_tw['n'] = "\u0BC7";
ta_tw['m'] = "\u0B85";
ta_tw[','] = "\u0B87";
ta_tw['Z'] = "\u0BB9";
ta_tw['X'] = "\u0B93";
ta_tw['C'] = "\u0B8A";
ta_tw['V'] = "\u0B8F";
ta_tw['B'] = "\u0B83";
ta_tw['N'] = "\u0B9A\u0BC2";
ta_tw['M'] = "\u0B86";
ta_tw['\\<'] = "\u0B88";

ta_tw['\\|'] = "!";
ta_tw['\\`'] = "&";
ta_tw['\\.'] = ",";
ta_tw['/'] = ".";
ta_tw['\\#'] = "%";
ta_tw['\\~'] = ";";
ta_tw['-'] = "/";
ta_tw['\\@'] = "\"";
ta_tw['\\>'] = "-";
ta_tw['\u0BC1\u0BC2'] = "\u0BC2";




//Phonetic

ta_en['f'] = "qp";
ta_en['B'] = "b";
ta_en['C'] = "c";
ta_en['D'] = "d";
ta_en['F'] = "qp";
ta_en['G'] = "g";
ta_en['H'] = "h";
ta_en['J'] = "j";
ta_en['K'] = "k";
ta_en['M'] = "m";
ta_en['P'] = "p";
ta_en['Q'] = "q";
ta_en['T'] = "t";
ta_en['V'] = "v";
ta_en['W'] = "w";
ta_en['X'] = "x";
ta_en['Y'] = "y";
ta_en['Z'] = "z";

//Cons
ta_en['\u0BA8\u0BCDg'] = "\u0B99\u0BCD";
ta_en['\u0BA9\u0BCDg'] = "\u0B99\u0BCD";
ta_en['\u0BA8\u0BCDj'] = "\u0B9E\u0BCD";
ta_en['\u0BA9\u0BCDj'] = "\u0B9E\u0BCD";
ta_en['\u0B9F\u0BCDh'] = "\u0BA4\u0BCD";
ta_en['\u0B9A\u0BCDh'] = "\u0BB7\u0BCD";
ta_en['\u0BA9\u0BCD\u0BA4\u0BCD'] = "\u0BA8\u0BCD\u0BA4\u0BCD";
ta_en['ng'] = "\u0B99\u0BCD";
ta_en['nj'] = "\u0B9E\u0BCD";
ta_en['th'] = "\u0BA4\u0BCD";
ta_en['sh'] = "\u0BB7\u0BCD";
ta_en['k'] = "\u0B95\u0BCD";
ta_en['g'] = "\u0B95\u0BCD";
ta_en['c'] = "\u0B9A\u0BCD";
ta_en['s'] = "\u0B9A\u0BCD";
ta_en['t'] = "\u0B9F\u0BCD";
ta_en['d'] = "\u0B9F\u0BCD";
ta_en['N'] = "\u0BA3\u0BCD";
ta_en[' n'] = " \u0BA8\u0BCD";
ta_en['^n'] = "\u0BA8\u0BCD";
ta_en['\nn'] = "\n\u0BA8\u0BCD";
ta_en['w'] = "\u0BA8\u0BCD";
ta_en['p'] = "\u0BAA\u0BCD";
ta_en['b'] = "\u0BAA\u0BCD";
ta_en['m'] = "\u0BAE\u0BCD";
ta_en['y'] = "\u0BAF\u0BCD";
ta_en['r'] = "\u0BB0\u0BCD";
ta_en['l'] = "\u0BB2\u0BCD";
ta_en['v'] = "\u0BB5\u0BCD";
ta_en['R'] = "\u0BB1\u0BCD";
ta_en['L'] = "\u0BB3\u0BCD";
ta_en['z'] = "\u0BB4\u0BCD";
ta_en['n'] = "\u0BA9\u0BCD";
ta_en['S'] = "\u0BB8\u0BCD";
ta_en['h'] = "\u0BB9\u0BCD";
ta_en['j'] = "\u0B9C\u0BCD";
ta_en['x'] = "\u0B95\u0BCD\u0BB7\u0BCD";
//adjVows Small
ta_en['\u0BCDa'] = "\u200C";
ta_en['\u0BCDi'] = "\u0BBF";
ta_en['\u0BCDu'] = "\u0BC1";
ta_en['\u0BCDe'] = "\u0BC6";
ta_en['\u0BCDo'] = "\u0BCA";
ta_en['\u200Ci'] = "\u0BC8";
ta_en['\u200Cu'] = "\u0BCC";
//adjVows Big
ta_en['\u200Ca'] = "\u0BBE";
ta_en['\u0BBFi'] = "\u0BC0";
ta_en['\u0BC1u'] = "\u0BC2";
ta_en['\u0BC6e'] = "\u0BC7";
ta_en['\u0BCAo'] = "\u0BCB";
ta_en['\u0BCDA'] = "\u0BBE";
ta_en['\u0BCDI'] = "\u0BC0";
ta_en['\u0BCDU'] = "\u0BC2";
ta_en['\u0BCDE'] = "\u0BC7";
ta_en['\u0BCDO'] = "\u0BCB";
//Vows
ta_en['-'] = "\u200D";
ta_en['\u0B85i'] = "\u0B90";
ta_en['\u0B85u'] = "\u0B94";
ta_en['ai'] = "\u0B90";
ta_en['au'] = "\u0B94";
ta_en['\u0B85a'] = "\u0B86";
ta_en['\u0B87i'] = "\u0B88";
ta_en['\u0B89u'] = "\u0B8A";
ta_en['\u0B8Ee'] = "\u0B8F";
ta_en['\u0B92o'] = "\u0B93";
ta_en['a'] = "\u0B85";
ta_en['A'] = "\u0B86";
ta_en['i'] = "\u0B87";
ta_en['I'] = "\u0B88";
ta_en['u'] = "\u0B89";
ta_en['U'] = "\u0B8A";
ta_en['e'] = "\u0B8E";
ta_en['E'] = "\u0B8F";
ta_en['o'] = "\u0B92";
ta_en['O'] = "\u0B93";
ta_en['q'] = "\u0B83";
//Nums
ta_en['\u0BF10'] = "\u0BF2";
ta_en['\u0BF00'] = "\u0BF1";
ta_en['\u0BE70'] = "\u0BF0";
ta_en['\u200D1'] = "\u0BE7";
ta_en['\u200D2'] = "\u0BE8";
ta_en['\u200D3'] = "\u0BE9";
ta_en['\u200D4'] = "\u0BEA";
ta_en['\u200D5'] = "\u0BEB";
ta_en['\u200D6'] = "\u0BEC";
ta_en['\u200D7'] = "\u0BED";
ta_en['\u200D8'] = "\u0BEE";
ta_en['\u200D9'] = "\u0BEF";
ta_en['\u200D0'] = "0";
ta_en['(.+)\u200C(.+)'] = "$1$2";


// ta_enmil 99 keys

//caret symbol for special purposes
ta_99['\\^']="\u200C";

// mellina vallina rule
ta_99["\u0B99\u200Ch"]="\u0B99\u0BCD\u0B95\u200C";
ta_99["\u0B9E\u200C\\["]="\u0B9E\u0BCD\u0B9A\u200C";
ta_99["\u0BA3\u200Co"]="\u0BA3\u0BCD\u0B9F\u200C";
ta_99["\u0BA8\u200Cl"]="\u0BA8\u0BCD\u0BA4\u200C";
ta_99["\u0BAE\u200Cj"]="\u0BAE\u0BCD\u0BAA\u200C";
ta_99["\u0BA9\u200Cu"]="\u0BA9\u0BCD\u0BB1\u200C";

//auto pulli rule for same letter repeat
ta_99["\u0BB3\u200Cy"]="\u0BB3\u0BCD\u0BB3\u200D";
ta_99["\u0BB3\u0BCD{2}"]="\u0BB3\u0BCD\u0BB3\u200C";
ta_99["\u0BB1\u200Cu"]="\u0BB1\u0BCD\u0BB1\u200D";
ta_99["\u0BB1\u0BCD{2}"]="\u0BB1\u0BCD\u0BB1\u200C";
ta_99["\u0BA9\u200Ci"]="\u0BA9\u0BCD\u0BA9\u200D";
ta_99["\u0BA9\u0BCD{2}"]="\u0BA9\u0BCD\u0BA9\u200C";
ta_99["\u0B9F\u200Co"]="\u0B9F\u0BCD\u0B9F\u200D";
ta_99["\u0B9F\u0BCD{2}"]="\u0B9F\u0BCD\u0B9F\u200C";
ta_99["\u0BA3\u200Cp"]="\u0BA3\u0BCD\u0BA3\u200D";
ta_99["\u0BA3\u0BCD{2}"]="\u0BA3\u0BCD\u0BA3\u200C";
ta_99["\u0B9A\u200C\\["]="\u0B9A\u0BCD\u0B9A\u200D";
ta_99["\u0B9A\u0BCD{2}"]="\u0B9A\u0BCD\u0B9A\u200C";
ta_99["\u0B9E\u200C\\]"]="\u0B9E\u0BCD\u0B9E\u200D";
ta_99["\u0B9E\u0BCD{2}"]="\u0B9E\u0BCD\u0B9E\u200C";

ta_99["\u0B95\u200Ch"]="\u0B95\u0BCD\u0B95\u200D";
ta_99["\u0B95\u0BCD{2}"]="\u0B95\u0BCD\u0B95\u200C";
ta_99["\u0BAA\u200Cj"]="\u0BAA\u0BCD\u0BAA\u200D";
ta_99["\u0BAA\u0BCD{2}"]="\u0BAA\u0BCD\u0BAA\u200C";
ta_99["\u0BAE\u200Ck"]="\u0BAE\u0BCD\u0BAE\u200D";
ta_99["\u0BAE\u0BCD{2}"]="\u0BAE\u0BCD\u0BAE\u200C";
ta_99["\u0BA4\u200Cl"]="\u0BA4\u0BCD\u0BA4\u200D";
ta_99["\u0BA4\u0BCD{2}"]="\u0BA4\u0BCD\u0BA4\u200C";
ta_99["\u0BA8\u200C;"]="\u0BA8\u0BCD\u0BA8\u200D";
ta_99["\u0BA8\u0BCD{2}"]="\u0BA8\u0BCD\u0BA8\u200C";
ta_99["\u0BAF\u200C\'"]="\u0BAF\u0BCD\u0BAF\u200D";
ta_99["\u0BAF\u0BCD{2}"]="\u0BAF\u0BCD\u0BAF\u200C";

ta_99["\u0BB5\u200Cv"]="\u0BB5\u0BCD\u0BB5\u200D";
ta_99["\u0BB5\u0BCD{2}"]="\u0BB5\u0BCD\u0BB5\u200C";
ta_99["\u0B99\u200Cb"]="\u0B99\u0BCD\u0B99\u200D";
ta_99["\u0B99\u0BCD{2}"]="\u0B99\u0BCD\u0B99\u200C";
ta_99["\u0BB2\u200Cn"]="\u0BB2\u0BCD\u0BB2\u200D";
ta_99["\u0BB2\u0BCD{2}"]="\u0BB2\u0BCD\u0BB2\u200C";
ta_99["\u0BB0\u200Cm"]="\u0BB0\u0BCD\u0BB0\u200D";
ta_99["\u0BB0\u0BCD{2}"]="\u0BB0\u0BCD\u0BB0\u200C";
ta_99["\u0BB4\u200C/"]="\u0BB4\u0BCD\u0BB4\u200D";
ta_99["\u0BB4\u0BCD{2}"]="\u0BB4\u0BCD\u0BB4\u200C";

//auto pulli rule  for vada mozhi ezuthu
ta_99["\u0BB8\u200CQ"]="\u0BB8\u0BCD\u0BB8\u200D";
ta_99["\u0BB8\u0BCD{2}"]="\u0BB8\u0BCD\u0BB8\u200C";
ta_99["\u0BB7\u200CW"]="\u0BB7\u0BCD\u0BB7\u200D";
ta_99["\u0BB7\u0BCD{2}"]="\u0BB7\u0BCD\u0BB7\u200C";
ta_99["\u0B9C\u200CE"]="\u0B9C\u0BCD\u0B9C\u200D";
ta_99["\u0B9C\u0BCD{2}"]="\u0B9C\u0BCD\u0B9C\u200C";
ta_99["\u0BB9\u200CR"]="\u0BB9\u0BCD\u0BB9\u200D";
ta_99["\u0BB9\u0BCD{2}"]="\u0BB9\u0BCD\u0BB9\u200C";

//otru
ta_99["[\u200D|\u200C]q"]="\u0BBE";
ta_99["[\u200D|\u200C]w"]="\u0BC0";
ta_99["[\u200D|\u200C]e"]="\u0BC2";
ta_99["[\u200D|\u200C]r"]="\u0BC8";
ta_99["[\u200D|\u200C]t"]="\u0BC7";
ta_99["\u0BCDa"]="\u200C";
ta_99["[\u200D|\u200C]a"]= "";
ta_99["[\u200D|\u200C]s"]="\u0BBF"
ta_99["[\u200D|\u200C]d"]="\u0BC1"
ta_99["[\u200D|\u200C]f"]="\u0BCD";
ta_99["[\u200D|\u200C]g"]="\u0BC6";
ta_99["[\u200D|\u200C]z"]="\u0BCC";
ta_99["[\u200D|\u200C]x"]="\u0BCB";
ta_99["[\u200D|\u200C]c"]="\u0BCA";

// copyright & spl symbols
ta_99["\u200Cc"]="\u00A9";
ta_99["\u200C\\."]="\u2022";

// uyir
ta_99["q"]="\u0B86";
ta_99["w"]="\u0B88";
ta_99["e"]="\u0B8A";
ta_99["r"]="\u0B90";
ta_99["t"]="\u0B8F";

ta_99["a"]="\u0B85";
ta_99["s"]="\u0B87";
ta_99["d"]="\u0B89";
ta_99["f"]="\u0B83";
ta_99["F"]="\u0B83";
ta_99["g"]="\u0B8E";

ta_99["z"]="\u0B94";
ta_99["x"]="\u0B93";
ta_99["c"]="\u0B92";

// vada mozhi ezuthu
ta_99["Q"]="\u0BB8\u200C";
ta_99["W"]="\u0BB7\u200C";
ta_99["E"]="\u0B9C\u200C";
ta_99["R"]="\u0BB9\u200C";
ta_99["T"]="\u0B95\u0BCD\u0BB7\u200C";
ta_99["Y"]="\u0BB8\u0BCD\u0BB0\u0BC0";
ta_99["O"]="[";
ta_99["P"]="]";

//mei
ta_99["y"]="\u0BB3\u200C";
ta_99["u"]="\u0BB1\u200C";
ta_99["i"]="\u0BA9\u200C";
ta_99["p"]="\u0BA3\u200C";
ta_99["o"]="\u0B9F\u200C";
ta_99["\\["]="\u0B9A\u200C";
ta_99["\\]"]="\u0B9E\u200C";

ta_99["g"]="\u0B8E";
ta_99["h"]="\u0B95\u200C";
ta_99["j"]="\u0BAA\u200C";
ta_99["k"]="\u0BAE\u200C";
ta_99["l"]="\u0BA4\u200C";
ta_99[";"]="\u0BA8\u200C";
ta_99["\'"]="\u0BAF\u200C";

ta_99["v"]="\u0BB5\u200C";
ta_99["b"]="\u0B99\u200C";
ta_99["n"]="\u0BB2\u200C";
ta_99["m"]="\u0BB0\u200C";
ta_99["/"]="\u0BB4\u200C";


// spl symbols
ta_99["M"]="/";
ta_99["A"]="\u0BF9";
ta_99["S"]="\u0BFA";
ta_99["D"]="\u0BF8";
ta_99["K"]="\"";
ta_99["L"]=":";
ta_99["\\:"]=";";
ta_99["\""]="\'";
ta_99["Z"]="\u0BF3";
ta_99["X"]="\u0BF4";
ta_99["C"]="\u0BF5";
ta_99["V"]="\u0BF6";
ta_99["B"]="\u0BF7";

ta_99['(.+)\u200C(.+)'] = "$1$2";


// assign char maps
Kanni['languages']['ta_tw']['charmap'] = ta_tw;
Kanni['languages']['ta_en']['charmap'] = ta_en;
Kanni['languages']['ta_99']['charmap'] = ta_99;
