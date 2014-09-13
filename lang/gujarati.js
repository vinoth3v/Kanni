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

Kanni['languages']['gujarati'] = {
  'name' : "Gujarati",      // language Name
  'charfrom' : '0A80',
  'charto' : '0AFF',
  'chnbin' : "\u0ACD",
  'ugar' : "\u0AC1",
  'uugar' : "\u0AC2",
  'methods' : {
    'gu_tw' : {
      'method' : 'typewriter',   // typing method
      'maxchar' : '4',           // maximum char combination
      'mergeprevchar' : false,  // merge with previous char?
      'charmap' : {
        '\\!' : '\u0A8D',
        '\\@' : '\u0AC5',
        '\\#' : '\u0ACD\u0AB0',
        '\\$' : '\u0AB0\u0ACD',
        '\\%' : '\u0A9C\u0ACD\u0A9E',
        '\\^' : '\u0AA4\u0ACD\u0AB0',
        '\\&' : '\u0A95\u0ACD\u0AB7',
        '\\*' : '\u0AB6\u0ACD\u0AB0',
        '_' : '\u0A83',
        '\\+' : '\u0A8B',
        '\\=' : '\u0AC3',
        'q' : '\u0ACC',
        'w' : '\u0AC8',
        'e' : '\u0ABE',
        'r' : '\u0AC0',
        't' : '\u0AC2',
        'y' : '\u0AAC',
        'u' : '\u0AB9',
        'i' : '\u0A97',
        'o' : '\u0AA6',
        'p' : '\u0A9C',
        '\\[' : '\u0AA1',
        '\\]' : '\u0ABC',
        'Q' : '\u0A94',
        'W' : '\u0A90',
        'E' : '\u0A86',
        'R' : '\u0A88',
        'T' : '\u0A8A',
        'Y' : '\u0AAD',
        'U' : '\u0A99',
        'I' : '\u0A98',
        'O' : '\u0AA7',
        'P' : '\u0A9D',
        '\\{' : '\u0AA2',
        '\\}' : '\u0A9E',

        'a' : '\u0ACB',
        's' : '\u0AC7',
        'd' : '\u0ACD',
        'f' : '\u0ABF',
        'g' : '\u0AC1',
        'h' : '\u0AAA',
        'j' : '\u0AB0',
        'k' : '\u0A95',
        'l' : '\u0AA4',
        ';' : '\u0A9A',
        '\\\'' : '\u0A9F',
        '\\\\' : '\u0AC9',
        'A' : '\u0A93',
        'S' : '\u0A8F',
        'D' : '\u0A85',
        'F' : '\u0A87',
        'G' : '\u0A89',
        'H' : '\u0AAB',
        //'J' : '\u0AB1',
        'K' : '\u0A96',
        'L' : '\u0AA5',
        ':' : '\u0A9B',
        '"' : '\u0AA0',
        '\\|' : '\u0A91',

        'z' : '',
        'x' : '\u0A82',
        'c' : '\u0AAE',
        'v' : '\u0AA8',
        'b' : '\u0AB5',
        'n' : '\u0AB2',
        'm' : '\u0AB8',
        '/' : '\u0AAF',
        'Z' : '',
        'X' : '\u0A81',
        'C' : '\u0AA3',
        'V' : '',
        'B' : '',
        'N' : '\u0AB3',
        'M' : '\u0AB6',
        '<' : '\u0AB7',
        '>' : '\u0AE4',
        '\\?' : '\u0ADF'
      }
    },
    'gu_en' : {
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
        'Z' : 'j',
        'z' : 'j',
        //Cons
        'k' : '\u0A95\u0ACD',
        'c' : '\u0A9A\u0ACD',
        'T' : '\u0A9F\u0ACD',
        'D' : '\u0AA1\u0ACD',
        'N' : '\u0AA3\u0ACD',
        't' : '\u0AA4\u0ACD',
        'd' : '\u0AA6\u0ACD',

        'p' : '\u0AAA\u0ACD',
        'b' : '\u0AAC\u0ACD',
        'y' : '\u0AAF\u0ACD',
        'R' : '\u0A8B',
        'L' : '\u0AB3\u0ACD',
        'v' : '\u0AB5\u0ACD',
        's' : '\u0AB8\u0ACD',
        'S' : '\u0AB7\u0ACD',
        'H' : '\u0AB9\u0ACD',
        'x' : '\u0A95\u0ACD\u0AB6\u0ACD',

        '\u200Dn' : '\u0A81',
        '\u200Dm' : '\u0A82',
        ':h' : '\u0A83',
        'm' : '\u0AAE\u0ACD',
        'n' : '\u0AA8\u0ACD',

        '\u0A95\u0ACDh' : '\u0A96\u0ACD',
        '\u0A97\u0ACDh' : '\u0A98\u0ACD',
        '\u0AA8\u0ACDg' : '\u0A99\u0ACD',
        '\u0A9A\u0ACDh' : '\u0A9B\u0ACD',
        '\u0A9C\u0ACDh' : '\u0A9D\u0ACD',
        '\u0AA8\u0ACDj' : '\u0A9E\u0ACD',
        '\u0A9F\u0ACDh' : '\u0AA0\u0ACD',
        '\u0AA1\u0ACDh' : '\u0AA2\u0ACD',
        '\u0AA4\u0ACDh' : '\u0AA5\u0ACD',
        '\u0AA6\u0ACDh' : '\u0AA7\u0ACD',
        '\u0AAA\u0ACDh' : '\u0AAB\u0ACD',
        '\u0AAC\u0ACDh' : '\u0AAD\u0ACD',
        '\u0AB8\u0ACDh' : '\u0AB6\u0ACD',
        '\u0ACD\u0A8B' : '\u0AC3',
        '\u0A93\u0AAE\u0ACD' : '\u0AD0',

        '\u0AB3\u0ACDl' : '\u0A8C',
        'r' : '\u0AB0\u0ACD',
        'l' : '\u0AB2\u0ACD',

        'h' : '\u0AB9\u0ACD',
        'g' : '\u0A97\u0ACD',
        'j' : '\u0A9C\u0ACD',
        //VowSml
        '\u0ACDa' : '\u200C',
        '\u0ACDi' : '\u0ABF',
        '\u0ACDu' : '\u0AC1',
        '\u0ACDe' : '\u0AC5',
        '\u0ACDo' : '\u0AC9',
        '\u200Ci' : '\u0AC8',
        '\u200Cu' : '\u0ACC',
        '\u200C-' : '\u200D',
        '\u200C:' : ':',
        '-' : '\u200D',
        //VowBig
        '\u200Ca' : '\u0ABE',
        '\u0ABFi' : '\u0AC0',
        '\u0AC1u' : '\u0AC2',
        '\u0AC5e' : '\u0AC7',
        '\u0AC9o' : '\u0ACB',
        '\u0ACDA' : '\u0ABE',
        '\u0ACDI' : '\u0AC0',
        '\u0ACDU' : '\u0AC2',
        '\u0ACDE' : '\u0AC7',
        '\u0ACDO' : '\u0ACB',
        //Vows
        '\u0A85i' : '\u0A90',
        '\u0A85u' : '\u0A94',
        '\u0A85a' : '\u0A86',
        '\u0A87i' : '\u0A88',
        '\u0A89u' : '\u0A8A',
        '\u0A8De' : '\u0A8F',
        '\u0A91o' : '\u0A93',
        '\u0A93m' : '\u0AD0',
        'a' : '\u0A85',
        'A' : '\u0A86',
        'i' : '\u0A87',
        'I' : '\u0A88',
        'u' : '\u0A89',
        'U' : '\u0A8A',
        'e' : '\u0A8D',
        'E' : '\u0A8F',
        'o' : '\u0A91',
        'O' : '\u0A93',
        'q' : '\u0A95\u0ACD',
        //Nums
        '\u200D1' : '\u0AE7',
        '\u200D2' : '\u0AE8',
        '\u200D3' : '\u0AE9',
        '\u200D4' : '\u0AEA',
        '\u200D5' : '\u0AEB',
        '\u200D6' : '\u0AEC',
        '\u200D7' : '\u0AED',
        '\u200D8' : '\u0AEE',
        '\u200D9' : '\u0AEF',
        '\u200D0' : '\u0AE6',
        '(.+)\u200C(.+)' : '$1$2'
      }
    }
  }
};


