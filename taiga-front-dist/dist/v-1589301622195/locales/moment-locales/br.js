!function(e,n){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?n(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],n):n(e.moment)}(this,function(e){"use strict";function n(e,n,r){var a={mm:"munutenn",MM:"miz",dd:"devezh"};return e+" "+t(a[r],e)}function r(e){switch(a(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}function a(e){return e>9?a(e%10):e}function t(e,n){return 2===n?u(e):e}function u(e){var n={m:"v",b:"v",d:"z"};return void 0===n[e.charAt(0)]?e:n[e.charAt(0)]+e.substring(1)}var d=e.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY HH:mm",LLLL:"dddd, D [a viz] MMMM YYYY HH:mm"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",ss:"%d eilenn",m:"ur vunutenn",mm:n,h:"un eur",hh:"%d eur",d:"un devezh",dd:n,M:"ur miz",MM:n,y:"ur bloaz",yy:r},dayOfMonthOrdinalParse:/\d{1,2}(añ|vet)/,ordinal:function(e){var n=1===e?"añ":"vet";return e+n},week:{dow:1,doy:4}});return d});