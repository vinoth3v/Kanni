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

Kanni['languages']['oriya'] = {
  'name' : "Oriya",      // language Name
  'charfrom' : '0B00',
  'charto' : '0B7F',
  'chnbin' : "\u0B4D",
  'ugar' : "\u0B41",
  'uugar' : "\u0B42",
  'methods' : {             // typing methods
    'or_tw' : {
      'method' : 'typewriter',   // typing method
      'maxchar' : '4',           // maximum char combination
      'mergeprevchar' : false,  // merge with previous char?
      'charmap' : {             // character map
        '\\!' : '',
        '\\@' : '',
        '\\#' : '\u0B4D\u0B30',
        '\\$' : '\u0B30\u0B4D',
        '\\%' : '\u0B1C\u0B4D\u0B1E',
        '\\^' : '\u0B24\u0B4D\u0B30',
        '\\&' : '\u0B15\u0B4D\u0B37',
        '\\*' : '\u0B36\u0B4D\u0B30',
        '_' : '\u0B03',
        '\\+' : '\u0B0B',
        '\\=' : '\u0B43',
        'q' : '\u0B4C',
        'w' : '\u0B48',
        'e' : '\u0B3E',
        'r' : '\u0B40',
        't' : '\u0B42',
        'y' : '\u0B2C',
        'u' : '\u0B39',
        'i' : '\u0B17',
        'o' : '\u0B26',
        'p' : '\u0B1C',
        '\\[' : '\u0B21',
        '\\]' : '\u0B3C',
        'Q' : '\u0B14',
        'W' : '\u0B10',
        'E' : '\u0B06',
        'R' : '\u0B08',
        'T' : '\u0B0A',
        'Y' : '\u0B2D',
        'U' : '\u0B19',
        'I' : '\u0B18',
        'O' : '\u0B27',
        'P' : '\u0B1D',
        '\\{' : '\u0B22',
        '\\}' : '\u0B1E',
        'a' : '\u0B4B',
        's' : '\u0B47',
        'd' : '\u0B4D',
        'f' : '\u0B3F',
        'g' : '\u0B41',
        'h' : '\u0B2A',
        'j' : '\u0B30',
        'k' : '\u0B15',
        'l' : '\u0B24',
        ';' : '\u0B1A',
        '\\\'' : '\u0B1F',
        '\\\\' : '\u0B49',
        'A' : '\u0B13',
        'S' : '\u0B0F',
        'D' : '\u0B05',
        'F' : '\u0B07',
        'G' : '\u0B09',
        'H' : '\u0B2B',
        'J' : '\u0B5C',
        'K' : '\u0B16',
        'L' : '\u0B25',
        ':' : '\u0B1B',
        '"' : '\u0B20',
        '\\|' : '\u0B11',
        'z' : '',
        'x' : '\u0B02',
        'c' : '\u0B2E',
        'v' : '\u0B28',
        'b' : '\u0B35',
        'n' : '\u0B32',
        'm' : '\u0B38',
        '/' : '\u0B2F',
        'Z' : '',
        'X' : '\u0B01',
        'C' : '\u0B23',
        'V' : '',
        'B' : '',
        'N' : '\u0B33',
        'M' : '\u0B36',
        '<' : '\u0B37',
        '>' : '\u0B64',
        '\\?' : '\u0B5F'
      }
    },
    'or_en' : {
      'method' : 'phonetic',   // typing method
      'maxchar' : '4',           // maximum char combination
      'mergeprevchar' : true,  // merge with previous char?
      'charmap' : {             // character map
        'B' : 'b',
        'e' : 'E',
        'o' : 'O',
        'C' : 'c',
        'F' : 'ph',
        'f' : 'ph',
        'G' : 'g',
        'J' : 'j',
        'K' : 'k',
        'M' : 'm',
        'P' : 'p',
        'Q' : 'q',
        'V' : 'b',
        'W' : 'b',
        'w' : 'b',
        'v' : 'b',
        'X' : 'x',
        'Y' : 'y',
        'Z' : 'j',
        'z' : 'j',
        'k' : '\u0B15\u0B4D', //Cons
        'c' : '\u0B1A\u0B4D',
        'T' : '\u0B1F\u0B4D',
        'D' : '\u0B21\u0B4D',
        'N' : '\u0B23\u0B4D',
        't' : '\u0B24\u0B4D',
        'd' : '\u0B26\u0B4D',
        'p' : '\u0B2A\u0B4D',
        'b' : '\u0B2C\u0B4D',
        'y' : '\u0B2F\u0B4D',
        'R' : '\u0B5C\u0B4D',
        'L' : '\u0B33\u0B4D',
        's' : '\u0B38\u0B4D',
        'S' : '\u0B37\u0B4D',
        'H' : '\u0B39\u0B4D',
        'x' : '\u0B15\u0B4D\u0B36\u0B4D',
        '\u200Dn' : '\u0B01',
        '\u200Dm' : '\u0B02',
        ':h' : '\u0B03',
        'm' : '\u0B2E\u0B4D',
        'n' : '\u0B28\u0B4D',
        '\u0B15\u0B4Dh' : '\u0B16\u0B4D',
        '\u0B17\u0B4Dh' : '\u0B18\u0B4D',
        '\u0B28\u0B4Dg' : '\u0B19\u0B4D',
        '\u0B1A\u0B4Dh' : '\u0B1B\u0B4D',
        '\u0B1C\u0B4Dh' : '\u0B1D\u0B4D',
        '\u0B28\u0B4Dj' : '\u0B1E\u0B4D',
        '\u0B1F\u0B4Dh' : '\u0B20\u0B4D',
        '\u0B21\u0B4Dh' : '\u0B22\u0B4D',
        '\u0B24\u0B4Dh' : '\u0B25\u0B4D',
        '\u0B26\u0B4Dh' : '\u0B27\u0B4D',
        '\u0B2A\u0B4Dh' : '\u0B2B\u0B4D',
        '\u0B2C\u0B4Dh' : '\u0B2D\u0B4D',
        '\u0B38\u0B4Dh' : '\u0B36\u0B4D',
        '\u0B5C\u0B4Dr' : '\u0B0B',
        '\u0B33\u0B4Dl' : '\u0B0C',
        '\u0B4D\u0B0B' : '\u0B43',
        'r' : '\u0B30\u0B4D',
        'l' : '\u0B32\u0B4D',
        'h' : '\u0B39\u0B4D',
        'g' : '\u0B17\u0B4D',
        'j' : '\u0B1C\u0B4D',
        '\u0B4Da' : '\u200C', //VowSml
        '\u0B4Di' : '\u0B3F',
        '\u0B4Du' : '\u0B41',
        '\u0B4De' : '\u0B46',
        '\u0B4Do' : '\u0B4A',
        '\u200Ci' : '\u0B48',
        '\u200Cu' : '\u0B4C',
        '\u200C-' : '\u200D',
        '\u200C:' : ':',
        '-' : '\u200D',
        '\u200Ca' : '\u0B3E', //VowBig
        '\u0B3Fi' : '\u0B40',
        '\u0B41u' : '\u0B42',
        '\u0B46e' : '\u0B47',
        '\u0B4Ao' : '\u0B4B',
        '\u0B4DA' : '\u0B3E',
        '\u0B4DI' : '\u0B40',
        '\u0B4DU' : '\u0B42',
        '\u0B4DE' : '\u0B47',
        '\u0B4DO' : '\u0B4B',
        '\u0B05i' : '\u0B10', //Vows
        '\u0B05u' : '\u0B14',
        '\u0B05a' : '\u0B06',
        '\u0B07i' : '\u0B08',
        '\u0B09u' : '\u0B0A',
        '\u0B0Ee' : '\u0B0F',
        '\u0B12o' : '\u0B13',
        '\u0B13m' : '\u0B50',
        'a' : '\u0B05',
        'A' : '\u0B06',
        'i' : '\u0B07',
        'I' : '\u0B08',
        'u' : '\u0B09',
        'U' : '\u0B0A',
        'e' : '\u0B0E',
        'E' : '\u0B0F',
        'o' : '\u0B12',
        'O' : '\u0B13',
        'q' : '\u0B15\u0B4D',
        '\u200D1' : '\u0B67', //Nums
        '\u200D2' : '\u0B68',
        '\u200D3' : '\u0B69',
        '\u200D4' : '\u0B6A',
        '\u200D5' : '\u0B6B',
        '\u200D6' : '\u0B6C',
        '\u200D7' : '\u0B6D',
        '\u200D8' : '\u0B6E',
        '\u200D9' : '\u0B6F',
        '\u200D0' : '\u0B66',
        '(.+)\u200C(.+)' : '$1$2'
      }
    }
  }
};



//Typewritter

// Phonetic

