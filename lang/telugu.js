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

Kanni['languages']['telugu'] = {
  'name' : "Telugu",      // language Name
  'charfrom' : '0C00',
  'charto' : '0C7F',
  'chnbin' : "\u0C4D",
  'ugar' : "\u0C41",
  'uugar' : "\u0C42",
  'methods' : {
    'te_tw' : {
      'method' : 'typewriter',   // typing method
      'maxchar' : '4',           // maximum char combination
      'mergeprevchar' : false,  // merge with previous char?
      'charmap' : {             // character map
        '\\~' : '\u0C12',
        '\\`' : '\u0C4A',
        '\\#' : '\u0C4D\u0C30',
        '\\%' : '\u0C1C\u0C4D\u0C1E',
        '\\^' : '\u0C24\u0C4D\u0C30',
        '\\&' : '\u0C15\u0C4D\u0C37',
        '\\*' : '\u0C36\u0C4D\u0C30',
        '_' : '\u0C03',
        '\\+' : '\u0C0B',
        '\\=' : '\u0C43',
        'q' : '\u0C4C',
        'w' : '\u0C48',
        'e' : '\u0C3E',
        'r' : '\u0C40',
        't' : '\u0C42',
        'y' : '\u0C2C',
        'u' : '\u0C39',
        'i' : '\u0C17',
        'o' : '\u0C26',
        'p' : '\u0C1C',
        '\\[' : '\u0C21',
        'Q' : '\u0C14',
        'W' : '\u0C10',
        'E' : '\u0C06',
        'R' : '\u0C08',
        'T' : '\u0C0A',
        'Y' : '\u0C2D',
        'U' : '\u0C19',
        'I' : '\u0C18',
        'O' : '\u0C27',
        'P' : '\u0C1D',
        '\\{' : '\u0C22',
        '\\}' : '\u0C1E',
        'a' : '\u0C4B',
        's' : '\u0C47',
        'd' : '\u0C4D',
        'f' : '\u0C3F',
        'g' : '\u0C41',
        'h' : '\u0C2A',
        'j' : '\u0C30',
        'k' : '\u0C15',
        'l' : '\u0C24',
        '\\;' : '\u0C1A',
        '\\\'' : '\u0C1F',
        'A' : '\u0C13',
        'S' : '\u0C0F',
        'D' : '\u0C05',
        'F' : '\u0C07',
        'G' : '\u0C09',
        'H' : '\u0C2B',
        'J' : '\u0C31',
        'K' : '\u0C16',
        'L' : '\u0C25',
        '\\:' : '\u0C1B',
        '"' : '\u0C20',
        'z' : '\u0C46',
        'x' : '\u0C02',
        'c' : '\u0C2E',
        'v' : '\u0C28',
        'b' : '\u0C35',
        'n' : '\u0C32',
        'm' : '\u0C38',
        '/' : '\u0C2F',
        'Z' : '\u0C0E',
        'X' : '\u0C01',
        'C' : '\u0C23',
        'V' : '',
        'B' : '',
        'N' : '\u0C33',
        'M' : '\u0C36',
        '<' : '\u0C37'
      }
    },
    'te_en' : {
      'method' : 'phonetic',   // typing method
      'maxchar' : '4',           // maximum char combination
      'mergeprevchar' : true,  // merge with previous char?
      'charmap' : {             // character map
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
        'Z' : 'j',
        'k' : '\u0C15\u0C4D',     //Cons
        'c' : '\u0C1A\u0C4D',
        'T' : '\u0C1F\u0C4D',
        'D' : '\u0C21\u0C4D',
        'N' : '\u0C23\u0C4D',
        't' : '\u0C24\u0C4D',
        'd' : '\u0C26\u0C4D',
        'p' : '\u0C2A\u0C4D',
        'b' : '\u0C2C\u0C4D',
        'y' : '\u0C2F\u0C4D',
        'R' : '\u0C31\u0C4D',
        'L' : '\u0C33\u0C4D',
        'v' : '\u0C35\u0C4D',
        's' : '\u0C38\u0C4D',
        'S' : '\u0C36\u0C4D',
        'H' : '\u0C39\u0C4D',
        'x' : '\u0C15\u0C4D\u0C36\u0C4D',
        '\u200Dn' : '\u0C01',
        '\u200Dm' : '\u0C02',
        'm' : '\u0C2E\u0C4D',
        'n' : '\u0C28\u0C4D',
        ':h' : '\u0C03',
        '\u0C15\u0C4Dh' : '\u0C16\u0C4D',
        '\u0C28\u0C4Dg' : '\u0C19\u0C4D',
        '\u0C1A\u0C4Dh' : '\u0C1B\u0C4D',
        '\u0C28\u0C4Dj' : '\u0C1E\u0C4D',
        '\u0C1F\u0C4Dh' : '\u0C20\u0C4D',
        '\u0C21\u0C4Dh' : '\u0C22\u0C4D',
        '\u0C24\u0C4Dh' : '\u0C25\u0C4D',
        '\u0C26\u0C4Dh' : '\u0C27\u0C4D',
        '\u0C2A\u0C4Dh' : '\u0C2B\u0C4D',
        '\u0C2C\u0C4Dh' : '\u0C2D\u0C4D',
        '\u0C38\u0C4Dh' : '\u0C37\u0C4D',
        '\u0C31\u0C4Dr' : '\u0C0B',
        '\u0C33\u0C4Dl' : '\u0C0C',
        '\u0C4D\u0C0B' : '\u0C43',
        'j' : '\u0C1C\u0C4D',
        '\u0C1C\u0C4Dh' : '\u0C1D\u0C4D',
        'g' : '\u0C17\u0C4D',
        '\u0C17\u0C4Dh' : '\u0C18\u0C4D',
        'r' : '\u0C30\u0C4D',
        'l' : '\u0C32\u0C4D',
        'h' : '\u0C39\u0C4D',
        '\u0C4Da' : '\u200C',     //VowSmall
        '\u0C4Di' : '\u0C3F',
        '\u0C4Du' : '\u0C41',
        '\u0C0Bu' : '\u0C43',
        '\u0C4De' : '\u0C46',
        '\u0C4Do' : '\u0C4A',
        '\u200Ci' : '\u0C48',
        '\u200Cu' : '\u0C4C',
        '\u200C-' : '\u200D',
        '\u200C:' : ':',
        '-' : '\u200D',
        '\u200Ca' : '\u0C3E',     //VowBig
        '\u0C3Fi' : '\u0C40',
        '\u0C41u' : '\u0C42',
        '\u0C43u' : '\u0C44',
        '\u0C46e' : '\u0C47',
        '\u0C4Ao' : '\u0C4B',
        '\u0C4DA' : '\u0C3E',
        '\u0C4DI' : '\u0C40',
        '\u0C4DU' : '\u0C42',
        '\u0C0BU' : '\u0C44',
        '\u0C4DE' : '\u0C47',
        '\u0C4DO' : '\u0C4B',
        '\u0C05i' : '\u0C10',       //Vows
        '\u0C05u' : '\u0C14',
        'ai' : '\u0C10',
        'au' : '\u0C14',
        '\u0C05a' : '\u0C06',
        '\u0C07i' : '\u0C08',
        '\u0C09u' : '\u0C0A',
        '\u0C0Ee' : '\u0C0F',
        '\u0C12o' : '\u0C13',
        'a' : '\u0C05',
        'A' : '\u0C06',
        'i' : '\u0C07',
        'I' : '\u0C08',
        'u' : '\u0C09',
        'U' : '\u0C0A',
        'e' : '\u0C0E',
        'E' : '\u0C0F',
        'o' : '\u0C12',
        'O' : '\u0C13',
        'q' : '\u0C15\u0C4D',
        '\u200D1' : '\u0C67',     //Nums
        '\u200D2' : '\u0C68',
        '\u200D3' : '\u0C69',
        '\u200D4' : '\u0C6A',
        '\u200D5' : '\u0C6B',
        '\u200D6' : '\u0C6C',
        '\u200D7' : '\u0C6D',
        '\u200D8' : '\u0C6E',
        '\u200D9' : '\u0C6F',
        '\u200D0' : '\u0C66',
        '(.+)\u200C(.+)' : '$1$2'
      }
    }
  }
};

