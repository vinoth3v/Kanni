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

Kanni['languages']['bengali'] = {
  'name' : "Bengali",      // language Name
  'charfrom' : '0980',
  'charto' : '09FF',
  'chnbin' : "\u09CD",
  'ugar' : "\u09C1",
  'uugar' : "\u09C2",
  'methods' : {
    'be_tw' : {
      'method' : 'typewriter',   // typing method
      'maxchar' : '4',           // maximum char combination
      'mergeprevchar' : false,  // merge with previous char?
      'charmap' : {
        '\\!' : '\u098D',
        '\\@' : '\u09C5',
        '\\#' : '\u09CD\u09B0',
        '\\$' : '\u09B0\u09CD',
        '\\%' : '\u099C\u09CD\u099E',
        '\\^' : '\u09A4\u09CD\u09B0',
        '\\&' : '\u0995\u09CD\u09B7',
        '\\*' : '\u09B6\u09CD\u09B0',
        '_' : '\u0983',
        '\\+' : '\u098B',
        '\\=' : '\u09C3',
        'q' : '\u09CC',
        'w' : '\u09C8',
        'e' : '\u09BE',
        'r' : '\u09C0',
        't' : '\u09C2',
        'y' : '\u09AC',
        'u' : '\u09B9',
        'i' : '\u0997',
        'o' : '\u09A6',
        'p' : '\u099C',
        '\\[' : '\u09A1',
        '\\]' : '\u09BC',
        'Q' : '\u0994',
        'W' : '\u0990',
        'E' : '\u0986',
        'R' : '\u0988',
        'T' : '\u098A',
        'Y' : '\u09AD',
        'U' : '\u0999',
        'I' : '\u0998',
        'O' : '\u09A7',
        'P' : '\u099D',
        '\\{' : '\u09A2',
        '\\}' : '\u099E',
        'a' : '\u09CB',
        's' : '\u09C7',
        'd' : '\u09CD',
        'f' : '\u09BF',
        'g' : '\u09C1',
        'h' : '\u09AA',
        'j' : '\u09B0',
        'k' : '\u0995',
        'l' : '\u09A4',
        ',' : '\u099A',
        '\\\'' : '\u099F',
        '\\\\' : '\u09C9',
        'A' : '\u0993',
        'S' : '\u098F',
        'D' : '\u0985',
        'F' : '\u0987',
        'G' : '\u0989',
        'H' : '\u09AB',
        'J' : '\u09DC',
        'K' : '\u0996',
        'L' : '\u09A5',
        ':' : '\u099B',
        '"' : '\u09A0',
        '\\|' : '\u0991',
        'z' : '',
        'x' : '\u0982',
        'c' : '\u09AE',
        'v' : '\u09A8',
        'b' : '\u09B5',
        'n' : '\u09B2',
        'm' : '\u09B8',
        '/' : '\u09AF',
        'Z' : '',
        'X' : '\u0981',
        'C' : '\u09A3',
        'V' : '',
        'B' : '',
        'N' : '\u09B3',
        'M' : '\u09B6',
        '<' : '\u09B7',
        '>' : '\u09E4',
        '\\?' : '\u09DF',
        //Phonetic
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
        'W' : 'b',
        'v' : 'b',
        'X' : 'x',
        'Y' : 'y',
        'Z' : 'j',
        'z' : 'j'
      }
    },
    'be_en' : {
      'method' : 'phonetic',
      'maxchar' : '4',
      'mergeprevchar' : true,
      'charmap' : {
        //Cons
        'k' : '\u0995\u09CD',
        'c' : '\u099A\u09CD',
        'T' : '\u099F\u09CD',
        'D' : '\u09A1\u09CD',
        'N' : '\u09A3\u09CD',
        't' : '\u09A4\u09CD',
        'd' : '\u09A6\u09CD',
        'p' : '\u09AA\u09CD',
        'b' : '\u09AC\u09CD',

        'y' : '\u09AF\u09CD',
        'R' : '\u09DC\u09CD',
        'L' : '\u09E1\u09CD',
        'v' : '\u09B5\u09CD',
        's' : '\u09B8\u09CD',
        'S' : '\u09B7\u09CD',
        'H' : '\u09B9\u09CD',
        'x' : '\u0995\u09CD\u09B6\u09CD',
        '\u200Dn' : '\u0981',
        '\u200Dm' : '\u0982',
        ':h' : '\u0983',
        'm' : '\u09AE\u09CD',
        'n' : '\u09A8\u09CD',
        '\u0995\u09CDh' : '\u0996\u09CD',
        '\u0997\u09CDh' : '\u0998\u09CD',
        '\u09A8\u09CDg' : '\u0999\u09CD',
        '\u099A\u09CDh' : '\u099B\u09CD',
        '\u099C\u09CDh' : '\u099D\u09CD',
        '\u09A8\u09CDj' : '\u099E\u09CD',
        '\u099F\u09CDh' : '\u09A0\u09CD',
        '\u09A1\u09CDh' : '\u09A2\u09CD',
        '\u09A4\u09CDh' : '\u09A5\u09CD',
        '\u09A6\u09CDh' : '\u09A7\u09CD',
        '\u09AA\u09CDh' : '\u09AB\u09CD',
        '\u09AC\u09CDh' : '\u09AD\u09CD',
        '\u09B8\u09CDh' : '\u09B6\u09CD',
        '\u09DC\u09CDr' : '\u098B',
        '\u09E1\u09CDl' : '\u098C',
        '\u09CD\u098B' : '\u09C3',
        'r' : '\u09B0\u09CD',
        'l' : '\u09B2\u09CD',
        'h' : '\u09B9\u09CD',
        'g' : '\u0997\u09CD',
        'j' : '\u099C\u09CD',
        //VowSml
        '\u09CDa' : '\u200C',
        '\u09CDi' : '\u09BF',
        '\u09CDu' : '\u09C1',
        '\u09CDe' : '\u09C6',
        '\u09CDo' : '\u09CA',
        '\u200Ci' : '\u09C8',
        '\u200Cu' : '\u09CC',
        '\u200C-' : '\u200D',
        '\u200C:' : ':',
        '-' : '\u200D',
        //VowBig
        '\u200Ca' : '\u09BE',
        '\u09BFi' : '\u09C0',
        '\u09C1u' : '\u09C2',
        '\u09C6e' : '\u09C7',
        '\u09CAo' : '\u09CB',
        '\u09CDA' : '\u09BE',
        '\u09CDI' : '\u09C0',
        '\u09CDU' : '\u09C2',
        '\u09CDE' : '\u09C7',
        '\u09CDO' : '\u09CB',
        //Vows
        '\u0985i' : '\u0990',
        '\u0985u' : '\u0994',
        '\u0985a' : '\u0986',
        '\u0987i' : '\u0988',
        '\u0989u' : '\u098A',
        '\u098Ee' : '\u098F',
        '\u0992o' : '\u0993',
        '\u0993m' : '\u09D0',
        'a' : '\u0985',
        'A' : '\u0986',
        'i' : '\u0987',
        'I' : '\u0988',
        'u' : '\u0989',
        'U' : '\u098A',
        'e' : '\u098E',
        'E' : '\u098F',
        'o' : '\u0992',
        'O' : '\u0993',
        'q' : '\u0995\u09CD',
        //Nums
        '\u200D1' : '\u09E7',
        '\u200D2' : '\u09E8',
        '\u200D3' : '\u09E9',
        '\u200D4' : '\u09EA',
        '\u200D5' : '\u09EB',
        '\u200D6' : '\u09EC',
        '\u200D7' : '\u09ED',
        '\u200D8' : '\u09EE',
        '\u200D9' : '\u09EF',
        '\u200D0' : '\u09E6',
        '(.+)\u200C(.+)' : '$1$2'
      }
    },
    'be_unijoy' : {
      'method' : 'unijoy',
      'maxchar' : '4',
      'mergeprevchar' : true,
      'charmap' : {
        'j' : '\u0995', // ko
        'd' : '\u09BF', // hrossho i kar
        '\u200c\u09BF' : '\u0987', // hrossho i
        'D' : '\u09C0', // dirgho i kar
        '\u200c\u09C0' : '\u0988', // dirgho i
        'c' : '\u09C7', // e kar
        '\u200c\u09C7' : '\u098F', // E
        '\u200c\u09C1' : '\u0989', // hrossho u
        's' : '\u09C1', // hrossho u kar
        'S' : '\u09C2', // dirgho u kar
        '\u200c\u09C2' : '\u098A', // dirgho u
        'v' : '\u09B0', // ro
        'a' : '\u098B', // wri
        'f' : '\u09BE', // a kar
        '\u200c\u09BE' : '\u0986', //shore a
        'F' : '\u0985', // shore ao
        'n' : '\u09B8', // dontyo so
        't' : '\u099f', // to
        'J' : '\u0996', // Kho
        'b' : '\u09A8', // dontyo no
        'B' : '\u09A3', // murdhonyo no
        'k' : '\u09A4', // tto
        'K' : '\u09A5', // ttho
        'e' : '\u09A1', // ddo
        'E' : '\u09A2', // ddho
        'h' : '\u09AC', // bo
        'H' : '\u09AD', // bho
        'p' : '\u09DC', // doye bindu ro
        'P' : '\u09DD', // dhoye bindu ro
        'o' : '\u0997', // go
        'O' : '\u0998', // gho
        'i' : '\u09B9', // ho
        'I' : '\u099E', // yo
        'u' : '\u099C', // borgio jo
        'U' : '\u099D', // jho
        'y' : '\u099A', //  cho
        'Y' : '\u099B', // cho
        'T' : '\u09A0', // tho
        'r' : '\u09AA', // po
        'R' : '\u09AB', // fo
        'l' : '\u09A6', // do
        'L' : '\u09A7', // dho
        'w' : '\u09AF', // ontoshyo zo
        'W' : '\u09DF', // ontostho yo
        'q' : '\u0999', // Uma
        'Q' : '\u0982', // uniswor
        'V' : '\u09B2', // lo
        'm' : '\u09AE', // mo
        'M' : '\u09B6', // talobyo sho
        'N' : '\u09B7', // mordhonyo sho
        '\u200c\u09CB' : '\u0993',//'\u09CB', // o
        'X' : '\u09CC', // ou kar
        '\u200c\u09CC' : '\u0994', // OU
        '\u200c\u09C8' : '\u0990', // Oi
        '\\\\' : '\u09CE', // tto
        '\\|' : '\u0983', // bisworgo
        'G' : '\u0964', // dari
        'g' : '\u200c', //'\u09CD' + '\u200c', // hosonto
        '\\&' : '\u0981', // chondrobindu
        'Z' : '\u09CD\u09AF', // jo fola
        '\u200c\u09AC' : '\u09CD\u09AC', // bo fola
        '\u200c\u09C3' : '\u098B', // wri kar
        'a' : '\u09C3', // wri
        '\u09AA\u09CD\u09AF' : '\u09AA\u200c\u09CD\u09AF',
        'z' :  '\u09CD\u09B0',
        'x' : '\u09CB',
        'C' : '\u09C8', //Oi Kar
        '(.+)\u200C(.+)' : '$1$2'
      }
    }
  }
};
