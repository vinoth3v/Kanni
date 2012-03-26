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

Kanni['languages']['punjabi'] = {
  'name' : "Punjabi",      // language Name
  'charfrom' : '0A00',
  'charto' : '0A7F',
  'chnbin' : "\u0A4D",
  'ugar' : "\u0A41",
  'uugar' : "\u0A42",
  'methods' : {
    'pu_tw' : {
      'method' : 'typewriter',   // typing method
      'maxchar' : '4',           // maximum char combination
      'mergeprevchar' : false,  // merge with previous char?
      'charmap' : {             // character map
        '\\!' : '\u0A0D',
        '\\@' : '\u0A45',
        '\\#' : '\u0A4D\u0A30',
        '\\$' : '\u0A30\u0A4D',
        '\\%' : '\u0A1C\u0A4D\u0A1E',
        '\\^' : '\u0A24\u0A4D\u0A30',
        '\\&' : '\u0A15\u0A4D\u0A38',
        '\\*' : '\u0A36\u0A4D\u0A30',
        '_' : '\u0A03',
        '\\+' : '\u0A0B',
        '\\=' : '\u0A43',
        'q' : '\u0A4C',
        'w' : '\u0A48',
        'e' : '\u0A3E',
        'r' : '\u0A40',
        't' : '\u0A42',
        'y' : '\u0A2C',
        'u' : '\u0A39',
        'i' : '\u0A17',
        'o' : '\u0A26',
        'p' : '\u0A1C',
        '\\[' : '\u0A21',
        '\\]' : '\u0A3C',
        'Q' : '\u0A14',
        'W' : '\u0A10',
        'E' : '\u0A06',
        'R' : '\u0A08',
        'T' : '\u0A0A',
        'Y' : '\u0A2D',
        'U' : '\u0A19',
        'I' : '\u0A18',
        'O' : '\u0A27',
        'P' : '\u0A1D',
        '\\{' : '\u0A22',
        '\\}' : '\u0A1E',
        'a' : '\u0A4B',
        's' : '\u0A47',
        'd' : '\u0A4D',
        'f' : '\u0A3F',
        'g' : '\u0A41',
        'h' : '\u0A2A',
        'j' : '\u0A30',
        'k' : '\u0A15',
        'l' : '\u0A24',
        '\\;' : '\u0A1A',
        '\\\'' : '\u0A1F',
        '\\\\' : '\u0A49',
        'A' : '\u0A13',
        'S' : '\u0A0F',
        'D' : '\u0A05',
        'F' : '\u0A07',
        'G' : '\u0A09',
        'H' : '\u0A2B',
        'J' : '\u0A5C',
        'K' : '\u0A16',
        'L' : '\u0A25',
        '\\:' : '\u0A1B',
        '"' : '\u0A20',
        '\\|' : '\u0A11',
        'z' : '',
        'x' : '\u0A02',
        'c' : '\u0A2E',
        'v' : '\u0A28',
        'b' : '\u0A35',
        'n' : '\u0A32',
        'm' : '\u0A38',
        '/' : '\u0A2F',
        'Z' : '',
        'X' : '\u0A01',
        'C' : '\u0A23',
        'V' : '',
        'B' : '',
        'N' : '\u0A33',
        'M' : '\u0A36',
        '<' : '\u0A38',
        '>' : '\u0A64',
        '\\?' : '\u0A5F'
      }
    },
    'pu_en' : {
      'method' : 'phonetic',   // typing method
      'maxchar' : '4',           // maximum char combination
      'mergeprevchar' : true,  // merge with previous char?
      'charmap' : {             // character map
        'B' : 'b',
        'C' : 'c',
        'F' :  'ph',
        'f' :  'ph',
        'G' : 'g',
        'J' : 'j',
        'K' : 'k',
        'M' : 'm',
        'P' : 'p',
        'Q' : 'q',
        'V' : 'v',
        'W' : 'v',
        'w' : 'v',
        'X' : 'x',
        'Y' : 'y',
        'Z' : 'j',
        'z' : 'j',
        'e' : 'E',
        'o' : 'O',
        'k' : '\u0A15\u0A4D', //Cons
        'c' : '\u0A1A\u0A4D',
        'T' : '\u0A1F\u0A4D',
        'D' : '\u0A21\u0A4D',
        'N' : '\u0A23\u0A4D',
        't' : '\u0A24\u0A4D',
        'd' : '\u0A26\u0A4D',
        'n' : '\u0A28\u0A4D',
        'p' : '\u0A2A\u0A4D',
        'b' : '\u0A2C\u0A4D',
        'y' : '\u0A2F\u0A4D',
        'R' : '\u0A5C\u0A4D',
        'L' : '\u0A33\u0A4D',
        'v' : '\u0A35\u0A4D',
        's' : '\u0A38\u0A4D',
        'S' : '\u0A38\u0A4D',
        'H' : '\u0A39\u0A4D',
        'x' : '\u0A15\u0A4D\u0A36\u0A4D',
        '\u0A15\u0A4Dh' : '\u0A16\u0A4D',
        '\u0A17\u0A4Dh' : '\u0A18\u0A4D',
        '\u0A28\u0A4Dg' : '\u0A19\u0A4D',
        '\u0A1A\u0A4Dh' : '\u0A1B\u0A4D',
        '\u0A1C\u0A4Dh' : '\u0A1D\u0A4D',
        '\u0A28\u0A4Dj' : '\u0A1E\u0A4D',
        '\u0A1F\u0A4Dh' : '\u0A20\u0A4D',
        '\u0A21\u0A4Dh' : '\u0A22\u0A4D',
        '\u0A24\u0A4Dh' : '\u0A25\u0A4D',
        '\u0A26\u0A4Dh' : '\u0A27\u0A4D',
        '\u0A2A\u0A4Dh' : '\u0A2B\u0A4D',
        '\u0A2C\u0A4Dh' : '\u0A2D\u0A4D',
        '\u0A38\u0A4Dh' : '\u0A36\u0A4D',
        '\u200Dm' : '\u0A02',
        'r' : '\u0A30\u0A4D',
        'l' : '\u0A32\u0A4D',
        'h' : '\u0A39\u0A4D',
        'g' : '\u0A17\u0A4D',
        'j' : '\u0A1C\u0A4D',
        'm' : '\u0A2E\u0A4D',
        '\u0A4Da' : '\u200C', //VowSml
        '\u0A4Di' : '\u0A3F',
        '\u0A4Du' : '\u0A41',
        '\u0A4De' : '\u0A46',
        '\u0A4Do' : '\u0A4A',
        '\u200Ci' : '\u0A48',
        '\u200Cu' : '\u0A4C',
        '\u200C-' : '\u200D',
        '\u200C:' : ':',
        '-' : '\u200D',
        '\u200Ca' : '\u0A3E', //VowBig
        '\u0A3Fi' : '\u0A40',
        '\u0A41u' : '\u0A42',
        '\u0A46e' : '\u0A47',
        '\u0A4Ao' : '\u0A4B',
        '\u0A4DA' : '\u0A3E',
        '\u0A4DI' : '\u0A40',
        '\u0A4DU' : '\u0A42',
        '\u0A4DE' : '\u0A47',
        '\u0A4DO' : '\u0A4B',
        '\u0A05i' : '\u0A10', //Vows
        '\u0A05u' : '\u0A14',
        '\u0A05a' : '\u0A06',
        '\u0A07i' : '\u0A08',
        '\u0A09u' : '\u0A0A',
        '\u0A0Fe' : '\u0A0F',
        '\u0A13o' : '\u0A13',
        '\u0A13m' : '\u0A50',
        ':h' : '\u0A03',
        'a' : '\u0A05',
        'A' : '\u0A06',
        'i' : '\u0A07',
        'I' : '\u0A08',
        'u' : '\u0A09',
        'U' : '\u0A0A',
        'E' : '\u0A0F',
        'O' : '\u0A13',
        'q' : '\u0A15\u0A4D',
        '\u200D1' : '\u0A67', //Nums
        '\u200D2' : '\u0A68',
        '\u200D3' : '\u0A69',
        '\u200D4' : '\u0A6A',
        '\u200D5' : '\u0A6B',
        '\u200D6' : '\u0A6C',
        '\u200D7' : '\u0A6D',
        '\u200D8' : '\u0A6E',
        '\u200D9' : '\u0A6F',
        '\u200D0' : '\u0A66',
        '(.+)\u200C(.+)' : '$1$2'
      }
    }
  }
};


