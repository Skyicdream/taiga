!function(e,n){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?n(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],n):n(e.moment)}(this,function(e){"use strict";function n(e){return e>1&&e<5&&1!==~~(e/10)}function r(e,r,t,s){var d=e+" ";switch(t){case"s":return r||s?"pár sekund":"pár sekundami";case"ss":return r||s?d+(n(e)?"sekundy":"sekund"):d+"sekundami";case"m":return r?"minuta":s?"minutu":"minutou";case"mm":return r||s?d+(n(e)?"minuty":"minut"):d+"minutami";case"h":return r?"hodina":s?"hodinu":"hodinou";case"hh":return r||s?d+(n(e)?"hodiny":"hodin"):d+"hodinami";case"d":return r||s?"den":"dnem";case"dd":return r||s?d+(n(e)?"dny":"dní"):d+"dny";case"M":return r||s?"měsíc":"měsícem";case"MM":return r||s?d+(n(e)?"měsíce":"měsíců"):d+"měsíci";case"y":return r||s?"rok":"rokem";case"yy":return r||s?d+(n(e)?"roky":"let"):d+"lety"}}var t="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),s="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),d=[/^led/i,/^úno/i,/^bře/i,/^dub/i,/^kvě/i,/^(čvn|červen$|června)/i,/^(čvc|červenec|července)/i,/^srp/i,/^zář/i,/^říj/i,/^lis/i,/^pro/i],i=/^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,o=e.defineLocale("cs",{months:t,monthsShort:s,monthsRegex:i,monthsShortRegex:i,monthsStrictRegex:/^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,monthsShortStrictRegex:/^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,monthsParse:d,longMonthsParse:d,shortMonthsParse:d,weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:r,ss:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return o});