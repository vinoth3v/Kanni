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
  'methods' : {
    'ma_tw' : {
      'method' : 'typewriter',   // typing method
      'maxchar' : '4',           // maximum char combination
      'mergeprevchar' : false,  // merge with previous char?
      'charmap' : {             // character map
        '\\!' : '',
        '\\@' : '',
        '\\#' : '\u0D4D\u0D30',
        '\\$' : '',
        '\\%' : '',
        '\\^' : '',
        '\\&' : '\u0D15\u0D4D\u0D37',
        '\\*' : '',
        '_' : '\u0D03',
        '\\+' : '\u0D0B',
        '\\=' : '\u0D43',
        'q' : '\u0D4C',
        'w' : '\u0D48',
        'e' : '\u0D3E',
        'r' : '\u0D40',
        't' : '\u0D42',
        'y' : '\u0D2C',
        'u' : '\u0D39',
        'i' : '\u0D17',
        'o' : '\u0D26',
        'p' : '\u0D1C',
        '\\[' : '\u0D21',
        '\\]' : '\u0D3C',
        'Q' : '\u0D14',
        'W' : '\u0D10',
        'E' : '\u0D06',
        'R' : '\u0D08',
        'T' : '\u0D0A',
        'Y' : '\u0D2D',
        'U' : '\u0D19',
        'I' : '\u0D18',
        'O' : '\u0D27',
        'P' : '\u0D1D',
        '\\{' : '\u0D22',
        '\\}' : '\u0D1E',

        'a' : '\u0D4B',
        's' : '\u0D47',
        'd' : '\u0D4D',
        'f' : '\u0D3F',
        'g' : '\u0D41',
        'h' : '\u0D2A',
        'j' : '\u0D30',
        'k' : '\u0D15',
        'l' : '\u0D24',
        ';' : '\u0D1A',
        '\\\'' : '\u0D1F',
        '\\\\' : '\u0D49',
        'A' : '\u0D13',
        'S' : '\u0D0F',
        'D' : '\u0D05',
        'F' : '\u0D07',
        'G' : '\u0D09',
        'H' : '\u0D2B',
        'J' : '\u0D31',
        'K' : '\u0D16',
        'L' : '\u0D25',
        ':' : '\u0D1B',
        '\\"' : '\u0D20',
        '\\|' : '\u0D11',

        'z' : '\u0D46',
        'x' : '\u0D02',
        'c' : '\u0D2E',
        'v' : '\u0D28',
        'b' : '\u0D35',
        'n' : '\u0D32',
        'm' : '\u0D38',
        '/' : '\u0D2F',
        'Z' : '\u0D0E',
        'X' : '',
        'C' : '\u0D23',
        'V' : '',
        'B' : '\u0D34',
        'N' : '\u0D33',
        'M' : '\u0D36',
        '<' : '\u0D37',
        '>' : '',
        '\\?' : ''
      }
    },
    'ma_en' : {
      'method' : 'phonetic',
      'maxchar' : '4',
      'mergeprevchar' : true,
      'charmap' : {
        'B' : 'b',
        'C' : 'c',
        'F' : 'ph',
        'f' : 'ph',
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
        'Z' : 'z',
        //Cons
        'k' : '\u0D15\u0D4D',
        'c' : '\u0D1A\u0D4D',
        'T' : '\u0D1F\u0D4D',
        'D' : '\u0D21\u0D4D',
        'N' : '\u0D23\u0D4D',
        't' : '\u0D24\u0D4D',
        'd' : '\u0D26\u0D4D',
        'n' : '\u0D28\u0D4D',
        'p' : '\u0D2A\u0D4D',
        'b' : '\u0D2C\u0D4D',

        'y' : '\u0D2F\u0D4D',
        'R' : '\u0D31\u0D4D',
        'L' : '\u0D33\u0D4D',
        'v' : '\u0D35\u0D4D',
        'z' : '\u0D34\u0D4D',
        's' : '\u0D38\u0D4D',
        'S' : '\u0D36\u0D4D',
        'H' : '\u0D39\u0D4D',
        'x' : '\u0D15\u0D4D\u0D36\u0D4D',

        '\u200Dm' : '\u0D02',
        ':h' : '\u0D03',
        'm' : '\u0D2E\u0D4D',

        '\u0D15\u0D4Dh' : '\u0D16\u0D4D',
        '\u0D17\u0D4Dh' : '\u0D18\u0D4D',
        '\u0D28\u0D4Dg' : '\u0D19\u0D4D',
        '\u0D1A\u0D4Dh' : '\u0D1B\u0D4D',
        '\u0D1C\u0D4Dh' : '\u0D1D\u0D4D',
        '\u0D28\u0D4Dj' : '\u0D1E\u0D4D',
        '\u0D1F\u0D4Dh' : '\u0D20\u0D4D',
        '\u0D21\u0D4Dh' : '\u0D22\u0D4D',
        '\u0D24\u0D4Dh' : '\u0D25\u0D4D',
        '\u0D26\u0D4Dh' : '\u0D27\u0D4D',
        '\u0D2A\u0D4Dh' : '\u0D2B\u0D4D',
        '\u0D2C\u0D4Dh' : '\u0D2D\u0D4D',
        '\u0D38\u0D4Dh' : '\u0D37\u0D4D',
        '\u0D31\u0D4Dr' : '\u0D0B',
        '\u0D33\u0D4Dl' : '\u0D0C',
        '\u0D4D\u0D0B' : '\u0D43',
        'r' : '\u0D30\u0D4D',
        'l' : '\u0D32\u0D4D',

        'h' : '\u0D39\u0D4D',
        'g' : '\u0D17\u0D4D',
        'j' : '\u0D1C\u0D4D',
        //VowSml
        '\u0D4Da' : '\u200C',
        '\u0D4Di' : '\u0D3F',
        '\u0D4Du' : '\u0D41',
        '\u0D0Bu' : '\u0D43',
        '\u0D4De' : '\u0D46',
        '\u0D4Do' : '\u0D4A',
        '\u200Ci' : '\u0D48',
        '\u200Cu' : '\u0D4C',
        '\u200C-' : '\u200D',
        '\u200C:' : ':',
        '-' : '\u200D',
        //VowBig
        '\u200Ca' : '\u0D3E',
        '\u0D3Fi' : '\u0D40',
        '\u0D41u' : '\u0D42',
        '\u0D46e' : '\u0D47',
        '\u0D4Ao' : '\u0D4B',
        '\u0D4DA' : '\u0D3E',
        '\u0D4DI' : '\u0D40',
        '\u0D4DU' : '\u0D42',
        '\u0D4DE' : '\u0D47',
        '\u0D4DO' : '\u0D4B',
        //Vows
        '\u0D05i' : '\u0D10',
        '\u0D05u' : '\u0D14',
        '\u0D05a' : '\u0D06',
        '\u0D07i' : '\u0D08',
        '\u0D09u' : '\u0D0A',
        '\u0D0Ee' : '\u0D0F',
        '\u0D12o' : '\u0D13',
        '\u0D13m' : '\u0D50',

        'a' : '\u0D05',
        'A' : '\u0D06',
        'i' : '\u0D07',
        'I' : '\u0D08',
        'u' : '\u0D09',
        'U' : '\u0D0A',
        'e' : '\u0D0E',
        'E' : '\u0D0F',
        'o' : '\u0D12',
        'O' : '\u0D13',
        'q' : '\u0D15\u0D4D',
        //Nums
        '\u200D1' : '\u0D67',
        '\u200D2' : '\u0D68',
        '\u200D3' : '\u0D69',
        '\u200D4' : '\u0D6A',
        '\u200D5' : '\u0D6B',
        '\u200D6' : '\u0D6C',
        '\u200D7' : '\u0D6D',
        '\u200D8' : '\u0D6E',
        '\u200D9' : '\u0D6F',
        '\u200D0' : '\u0D66',
        '(.+)\u200C(.+)' : '$1$2'
      }
    }
  }
};

