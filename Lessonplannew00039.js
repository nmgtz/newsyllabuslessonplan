function convertToSwahiliTime(hour24, minutes) {
    let swahiliHour, session;
    if (hour24 >= 6 && hour24 < 18) {
        swahiliHour = hour24 - 6;
        if (swahiliHour === 0) swahiliHour = 12;
        session = hour24 < 12 ? "ASUB" : hour24 < 15 ? "MCHAN" : "ALASIRI";
    } else {
        swahiliHour = hour24 >= 18 ? hour24 - 18 : hour24 + 6;
        if (swahiliHour === 0) swahiliHour = 12;
        session = (hour24 >= 17 && hour24 < 19) ? "JIONI" : "USIKU";
    }
    return {
        hour: swahiliHour,
        formattedHour: swahiliHour.toString().padStart(2, "0"),
        minutes,
        formattedMinutes: minutes.toString().padStart(2, "0"),
        session
    };
}


const verbConjugations = {
    english: {
        "sing":         { gerund:"singing",        past:"sang",          noun:"singing"         },
        "draw":         { gerund:"drawing",         past:"drew",          noun:"drawing"         },
        "color":        { gerund:"coloring",        past:"colored",       noun:"coloring"        },
        "count":        { gerund:"counting",        past:"counted",       noun:"counting"        },
        "play":         { gerund:"playing",         past:"played",        noun:"play"            },
        "recite":       { gerund:"reciting",        past:"recited",       noun:"recitation"      },
        "name":         { gerund:"naming",          past:"named",         noun:"naming"          },
        "identify":     { gerund:"identifying",     past:"identified",    noun:"identification"  },
        "match":        { gerund:"matching",        past:"matched",       noun:"matching"        },
        "sort":         { gerund:"sorting",         past:"sorted",        noun:"sorting"         },
        "discuss":      { gerund:"discussing",      past:"discussed",     noun:"discussion"      },
        "explain":      { gerund:"explaining",      past:"explained",     noun:"explanation"     },
        "describe":     { gerund:"describing",      past:"described",     noun:"description"     },
        "demonstrate":  { gerund:"demonstrating",   past:"demonstrated",  noun:"demonstration"   },
        "analyse":      { gerund:"analysing",       past:"analysed",      noun:"analysis"        },
        "analyze":      { gerund:"analyzing",       past:"analyzed",      noun:"analysis"        },
        "calculate":    { gerund:"calculating",     past:"calculated",    noun:"calculation"     },
        "compute":      { gerund:"computing",       past:"computed",      noun:"computation"     },
        "find":         { gerund:"finding",         past:"found",         noun:"finding"         },
        "solve":        { gerund:"solving",         past:"solved",        noun:"solution"        },
        "evaluate":     { gerund:"evaluating",      past:"evaluated",     noun:"evaluation"      },
        "state":        { gerund:"stating",         past:"stated",        noun:"statement"       },
        "give":         { gerund:"giving",          past:"gave",          noun:"giving"          },
        "practice":     { gerund:"practicing",      past:"practiced",     noun:"practice"        },
        "organise":     { gerund:"organising",      past:"organised",     noun:"organisation"    },
        "organize":     { gerund:"organizing",      past:"organized",     noun:"organization"    },
        "apply":        { gerund:"applying",        past:"applied",       noun:"application"     },
        "write":        { gerund:"writing",         past:"wrote",         noun:"writing"         },
        "read":         { gerund:"reading",         past:"read",          noun:"reading"         },
        "compare":      { gerund:"comparing",       past:"compared",      noun:"comparison"      },
        "contrast":     { gerund:"contrasting",     past:"contrasted",    noun:"contrast"        },
        "examine":      { gerund:"examining",       past:"examined",      noun:"examination"     },
        "investigate":  { gerund:"investigating",   past:"investigated",  noun:"investigation"   },
        "explore":      { gerund:"exploring",       past:"explored",      noun:"exploration"     },
        "interpret":    { gerund:"interpreting",    past:"interpreted",   noun:"interpretation"  },
        "justify":      { gerund:"justifying",      past:"justified",     noun:"justification"   },
        "prove":        { gerund:"proving",         past:"proved",        noun:"proof"           },
        "verify":       { gerund:"verifying",       past:"verified",      noun:"verification"    },
        "construct":    { gerund:"constructing",    past:"constructed",   noun:"construction"    },
        "create":       { gerund:"creating",        past:"created",       noun:"creation"        },
        "design":       { gerund:"designing",       past:"designed",      noun:"design"          },
        "develop":      { gerund:"developing",      past:"developed",     noun:"development"     },
        "formulate":    { gerund:"formulating",     past:"formulated",    noun:"formulation"     },
        "synthesize":   { gerund:"synthesizing",    past:"synthesized",   noun:"synthesis"       },
        "plan":         { gerund:"planning",        past:"planned",       noun:"plan"            },
        "propose":      { gerund:"proposing",       past:"proposed",      noun:"proposal"        },
        "summarize":    { gerund:"summarizing",     past:"summarized",    noun:"summary"         },
        "outline":      { gerund:"outlining",       past:"outlined",      noun:"outline"         },
        "review":       { gerund:"reviewing",       past:"reviewed",      noun:"review"          },
        "classify":     { gerund:"classifying",     past:"classified",    noun:"classification"  },
        "categorize":   { gerund:"categorizing",    past:"categorized",   noun:"categorization"  },
        "distinguish":  { gerund:"distinguishing",  past:"distinguished", noun:"distinction"     },
        "measure":      { gerund:"measuring",       past:"measured",      noun:"measurement"     },
        "estimate":     { gerund:"estimating",      past:"estimated",     noun:"estimation"      },
        "predict":      { gerund:"predicting",      past:"predicted",     noun:"prediction"      },
        "infer":        { gerund:"inferring",       past:"inferred",      noun:"inference"       },
        "deduce":       { gerund:"deducing",        past:"deduced",       noun:"deduction"       },
        "conclude":     { gerund:"concluding",      past:"concluded",     noun:"conclusion"      },
        "relate":       { gerund:"relating",        past:"related",       noun:"relation"        },
        "connect":      { gerund:"connecting",      past:"connected",     noun:"connection"      },
        "perform":      { gerund:"performing",      past:"performed",     noun:"performance"     },
        "execute":      { gerund:"executing",       past:"executed",      noun:"execution"       },
        "implement":    { gerund:"implementing",    past:"implemented",   noun:"implementation"  },
        "conduct":      { gerund:"conducting",      past:"conducted",     noun:"conduct"         },
        "determine":    { gerund:"determining",     past:"determined",    noun:"determination"   },
        "establish":    { gerund:"establishing",    past:"established",   noun:"establishment"   },
        "recognize":    { gerund:"recognizing",     past:"recognized",    noun:"recognition"     },
        "recall":       { gerund:"recalling",       past:"recalled",      noun:"recall"          },
        "list":         { gerund:"listing",         past:"listed",        noun:"list"            },
        "label":        { gerund:"labeling",        past:"labeled",       noun:"label"           },
        "select":       { gerund:"selecting",       past:"selected",      noun:"selection"       },
        "choose":       { gerund:"choosing",        past:"chose",         noun:"choice"          },
        "differentiate":{ gerund:"differentiating", past:"differentiated",noun:"differentiation" },
        "modify":       { gerund:"modifying",       past:"modified",      noun:"modification"    },
        "adapt":        { gerund:"adapting",        past:"adapted",       noun:"adaptation"      },
        "simplify":     { gerund:"simplifying",     past:"simplified",    noun:"simplification"  },
        "convert":      { gerund:"converting",      past:"converted",     noun:"conversion"      },
        "transform":    { gerund:"transforming",    past:"transformed",   noun:"transformation"  },
        "translate":    { gerund:"translating",     past:"translated",    noun:"translation"     },
        "express":      { gerund:"expressing",      past:"expressed",     noun:"expression"      },
        "present":      { gerund:"presenting",      past:"presented",     noun:"presentation"    },
        "report":       { gerund:"reporting",       past:"reported",      noun:"report"          },
        "argue":        { gerund:"arguing",         past:"argued",        noun:"argument"        },
        "defend":       { gerund:"defending",       past:"defended",      noun:"defense"         },
        "critique":     { gerund:"critiquing",      past:"critiqued",     noun:"critique"        },
        "assess":       { gerund:"assessing",       past:"assessed",      noun:"assessment"      },
        "judge":        { gerund:"judging",         past:"judged",        noun:"judgment"        },
        "rate":         { gerund:"rating",          past:"rated",         noun:"rating"          },
        "rank":         { gerund:"ranking",         past:"ranked",        noun:"ranking"         },
        "prioritize":   { gerund:"prioritizing",    past:"prioritized",   noun:"prioritization"  },
        "sequence":     { gerund:"sequencing",      past:"sequenced",     noun:"sequence"        },
        "arrange":      { gerund:"arranging",       past:"arranged",      noun:"arrangement"     },
        "order":        { gerund:"ordering",        past:"ordered",       noun:"order"           },
        "sketch":       { gerund:"sketching",       past:"sketched",      noun:"sketch"          },
        "paint":        { gerund:"painting",        past:"painted",       noun:"painting"        },
        "illustrate":   { gerund:"illustrating",    past:"illustrated",   noun:"illustration"    }
    },
    swahili: {
        "kuandika":              { present:"kuandika",              continuous:"anaandika",              past:"aliandika",              noun:"uandishi"        },
        "kueleza":               { present:"kueleza",               continuous:"anaeleza",               past:"alieleza",               noun:"uelezaji"        },
        "kujibu":                { present:"kujibu",                continuous:"anajibu",                past:"alijibu",                noun:"majibu"          },
        "kufupisha":             { present:"kufupisha",             continuous:"anafupisha",             past:"alifupisha",             noun:"ufupisho"        },
        "kubaini":               { present:"kubaini",               continuous:"anabaini",               past:"alibaini",               noun:"ubainisho"       },
        "kuhakiki":              { present:"kuhakiki",              continuous:"anahakiki",              past:"alihakiki",              noun:"uhakiki"         },
        "kuunda":                { present:"kuunda",                continuous:"anaunda",                past:"aliunda",                noun:"uundaji"         },
        "kutunga":               { present:"kutunga",               continuous:"anatunga",               past:"alitunga",               noun:"utungaji"        },
        "kupambanua":            { present:"kupambanua",            continuous:"anapambanua",            past:"alipambanua",            noun:"upambanuo"       },
        "kufafanua":             { present:"kufafanua",             continuous:"anafafanua",             past:"alifafanua",             noun:"ufafanuzi"       },
        "kuonesha":              { present:"kuonesha",              continuous:"anaonesha",              past:"alionesha",              noun:"uonyesho"        },
        "kuainisha":             { present:"kuainisha",             continuous:"anaainisha",             past:"aliainisha",             noun:"uainisho"        },
        "kusoma":                { present:"kusoma",                continuous:"anasoma",                past:"alisoma",                noun:"usomaji"         },
        "kusimulia":             { present:"kusimulia",             continuous:"anasimulia",             past:"alisimulia",             noun:"usimuliaji"      },
        "kujadili":              { present:"kujadili",              continuous:"anajadili",              past:"alijadili",              noun:"majadiliano"     },
        "kutatua":               { present:"kutatua",               continuous:"anatatua",               past:"alitatua",               noun:"utatuzi"         },
        "kutafuta":              { present:"kutafuta",              continuous:"anatafuta",              past:"alitafuta",              noun:"utafutaji"       },
        "kupata":                { present:"kupata",                continuous:"anapata",                past:"alipata",                noun:"upatikanaji"     },
        "kutathmini":            { present:"kutathmini",            continuous:"anatathmini",            past:"alitathmini",            noun:"tathmini"        },
        "kutaja":                { present:"kutaja",                continuous:"anataja",                past:"alitaja",                noun:"utajaji"         },
        "kutoa":                 { present:"kutoa",                 continuous:"anatoa",                 past:"alitoa",                 noun:"utoaji"          },
        "kufanya mazoezi":       { present:"kufanya mazoezi",       continuous:"anafanya mazoezi",       past:"alifanya mazoezi",       noun:"mazoezi"         },
        "kuandaa":               { present:"kuandaa",               continuous:"anaandaa",               past:"aliandaa",               noun:"uandaaji"        },
        "kutumia":               { present:"kutumia",               continuous:"anatumia",               past:"alitumia",               noun:"matumizi"        },
        "kulinganisha":          { present:"kulinganisha",          continuous:"analinganisha",          past:"alilinganisha",          noun:"ulinganisho"     },
        "kutofautisha":          { present:"kutofautisha",          continuous:"anatofautisha",          past:"alitofautisha",          noun:"utofauti"        },
        "kuchunguza":            { present:"kuchunguza",            continuous:"anachunguza",            past:"alichunguza",            noun:"uchunguzi"       },
        "kuchambua":             { present:"kuchambua",             continuous:"anachambua",             past:"alichambua",             noun:"uchambuzi"       },
        "kugundua":              { present:"kugundua",              continuous:"anagundua",              past:"aligundua",              noun:"ugunduzi"        },
        "kutafsiri":             { present:"kutafsiri",             continuous:"anatafsiri",             past:"alitafsiri",             noun:"tafsiri"         },
        "kuhalalisha":           { present:"kuhalalisha",           continuous:"anahalalisha",           past:"alihalalisha",           noun:"uhalalishaji"    },
        "kuthibitisha":          { present:"kuthibitisha",          continuous:"anathibitisha",          past:"alithibitisha",          noun:"uthibitisho"     },
        "kujenga":               { present:"kujenga",               continuous:"anajenga",               past:"alijenga",               noun:"ujenzi"          },
        "kubuni":                { present:"kubuni",                continuous:"anabuni",                past:"alibuni",                noun:"ubuni"           },
        "kutengeneza":           { present:"kutengeneza",           continuous:"anatengeneza",           past:"alitengeneza",           noun:"utengenezaji"    },
        "kupanga":               { present:"kupanga",               continuous:"anapanga",               past:"alipanga",               noun:"upangaji"        },
        "kupendekeza":           { present:"kupendekeza",           continuous:"anapendekeza",           past:"alipendekeza",           noun:"mapendekezo"     },
        "kumuhtasari":           { present:"kumuhtasari",           continuous:"anamuhtasari",           past:"alimuhtasari",           noun:"muhtasari"       },
        "kukagua":               { present:"kukagua",               continuous:"anakagua",               past:"alikagua",               noun:"ukaguzi"         },
        "kuweka":                { present:"kuweka",                continuous:"anaweka",                past:"aliweka",                noun:"uwekaji"         },
        "kupima":                { present:"kupima",                continuous:"anapima",                past:"alipima",                noun:"upimaji"         },
        "kukadiria":             { present:"kukadiria",             continuous:"anakadiria",             past:"alikadiria",             noun:"ukadirio"        },
        "kutabiri":              { present:"kutabiri",              continuous:"anatabiri",              past:"alitabiri",              noun:"utabiri"         },
        "kuhitimisha":           { present:"kuhitimisha",           continuous:"anahitimisha",           past:"alihitimisha",           noun:"uhitimisho"      },
        "kuhusianisha":          { present:"kuhusianisha",          continuous:"anahusianisha",          past:"alihusianisha",          noun:"uhusiano"        },
        "kuunganisha":           { present:"kuunganisha",           continuous:"anaunganisha",           past:"aliunganisha",           noun:"muunganisho"     },
        "kutekeleza":            { present:"kutekeleza",            continuous:"anatekeleza",            past:"alitekeleza",            noun:"utekelezaji"     },
        "kufanya":               { present:"kufanya",               continuous:"anafanya",               past:"alifanya",               noun:"ufanyaji"        },
        "kuamua":                { present:"kuamua",                continuous:"anaamua",                past:"aliamua",                noun:"uamuzi"          },
        "kukumbuka":             { present:"kukumbuka",             continuous:"anakumbuka",             past:"alikumbuka",             noun:"ukumbusho"       },
        "kuorodhesha":           { present:"kuorodhesha",           continuous:"anaorodhesha",           past:"aliorodhesha",           noun:"orodha"          },
        "kuweka alama":          { present:"kuweka alama",          continuous:"anaweka alama",          past:"aliweka alama",          noun:"alama"           },
        "kuchagua":              { present:"kuchagua",              continuous:"anachagua",              past:"alichagua",              noun:"uchaguzi"        },
        "kurekebisha":           { present:"kurekebisha",           continuous:"anarekebisha",           past:"alirekebisha",           noun:"marekebisho"     },
        "kubadilisha":           { present:"kubadilisha",           continuous:"anabadilisha",           past:"alibadilisha",           noun:"mabadiliko"      },
        "kurahisisha":           { present:"kurahisisha",           continuous:"anarahisisha",           past:"alirahisisha",           noun:"urahisishaji"    },
        "kugeuza":               { present:"kugeuza",               continuous:"anageuza",               past:"aligeuza",               noun:"mageuko"         },
        "kuelezea":              { present:"kuelezea",              continuous:"anaelezea",              past:"alielezea",              noun:"maelezo"         },
        "kuwasilisha":           { present:"kuwasilisha",           continuous:"anawasilisha",           past:"aliwasilisha",           noun:"uwasilishaji"    },
        "kuripoti":              { present:"kuripoti",              continuous:"anaripoti",              past:"aliripoti",              noun:"ripoti"          },
        "kubishana":             { present:"kubishana",             continuous:"anabishana",             past:"alibishana",             noun:"mabishano"       },
        "kutetea":               { present:"kutetea",               continuous:"anatetea",               past:"alitetea",               noun:"utetezi"         },
        "kukosoa":               { present:"kukosoa",               continuous:"anakosoa",               past:"alikosoa",               noun:"ukosefu"         },
        "kuhukumu":              { present:"kuhukumu",              continuous:"anahukumu",              past:"alihukumu",              noun:"hukumu"          },
        "kupanga kwa utaratibu": { present:"kupanga kwa utaratibu", continuous:"anapanga kwa utaratibu", past:"alipanga kwa utaratibu", noun:"utaratibu"       },
        "kupaka":                { present:"kupaka",                continuous:"anapaka",                past:"alipaka",                noun:"upakaji"         }
    }
};

function getVerbForm(verb, form, language) {
    if (!verb) return verb;
    const conj = verbConjugations[language];
    return (conj && conj[verb.toLowerCase()] && conj[verb.toLowerCase()][form])
        ? conj[verb.toLowerCase()][form]
        : verb;
}


/* Wording is random, unless a preview froze it: same seed + same inputs = same lesson plan text. */
var __axpRng = Math.random;
function axpSeedWording() {
    var seed = window.AXP_WORDING && window.AXP_WORDING.seed;
    if (!seed) { __axpRng = Math.random; return; }
    var a = seed;
    __axpRng = function () {
        a |= 0; a = a + 0x6D2B79F5 | 0;
        var t = Math.imul(a ^ a >>> 15, 1 | a);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
function pick(arr) { return arr[Math.floor(__axpRng() * arr.length)]; }

function capitalizeFirst(str) {
    if (!str) return str;
    str = str.trim();
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function sentenceCase(str) {
    if (!str) return str;
    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    str = str.replace(/([.!?]\s+)([a-z])/g, (m, p, l) => p + l.toUpperCase());
    return capitalizeProperNouns(str);
}

function capitalizeProperNouns(str) {
    if (!str) return str;
    const properNouns = ['Allah','Allaah','Mungu','Tanzania','Africa','Afrika'];
    properNouns.forEach(word => {
        str = str.replace(new RegExp('\\b' + word + '\\b', 'gi'), word);
    });
    return str;
}


function parseActivity(specificLesson) {
    const s = specificLesson.toLowerCase().trim();

    const patterns = [
        { re: /\b(meaning\s+and\s+importance)\b/,         type: 'meaning_importance' },
        { re: /\b(advantages?\s+and\s+disadvantages?)\b/, type: 'adv_disadv'         },
        { re: /\b(merits?\s+and\s+demerits?)\b/,          type: 'adv_disadv'         },
        { re: /\bmeaning\b/,                               type: 'meaning'            },
        { re: /\bimportance\b/,                            type: 'importance'         },
        { re: /\bsignificance\b/,                          type: 'importance'         },
        { re: /\beffects?\b/,                              type: 'effects'            },
        { re: /\bimpacts?\b/,                              type: 'effects'            },
        { re: /\bcauses?\b/,                               type: 'causes'             },
        { re: /\breasons?\b/,                              type: 'causes'             },
        { re: /\badvantages?\b/,                           type: 'advantages'         },
        { re: /\bbenefits?\b/,                             type: 'advantages'         },
        { re: /\bdisadvantages?\b/,                        type: 'disadvantages'      },
        { re: /\bdemerits?\b/,                             type: 'disadvantages'      },
        { re: /\btypes?\b/,                                type: 'types'              },
        { re: /\bkinds?\b/,                                type: 'types'              },
        { re: /\bclassification\b/,                        type: 'types'              },
        { re: /\bcharacteristics?\b/,                      type: 'characteristics'    },
        { re: /\bfeatures?\b/,                             type: 'characteristics'    },
        { re: /\bproperties\b/,                            type: 'characteristics'    },
        { re: /\bsteps?\b/,                                type: 'steps'              },
        { re: /\bprocess\b/,                               type: 'steps'              },
        { re: /\bprocedure\b/,                             type: 'steps'              },
        { re: /\bexamples?\b/,                             type: 'examples'           },
        { re: /\bdefinition\b/,                            type: 'definition'         },
        { re: /\buses?\b/,                                 type: 'uses'               },
        { re: /\bfunctions?\b/,                            type: 'functions'          },
        { re: /\bcomponents?\b/,                           type: 'components'         },
        { re: /\bparts?\b/,                                type: 'components'         },
        { re: /\bstructure\b/,                             type: 'components'         },
        { re: /\bsolutions?\b/,                            type: 'solutions'          },
        { re: /\bmeasures?\b/,                             type: 'solutions'          },
        { re: /\bprevention\b/,                            type: 'solutions'          },
    ];

    const swPatterns = [
        { re: /\bmaana\s+na\s+umuhimu\b/, type: 'meaning_importance' },
        { re: /\bfaida\s+na\s+hasara\b/,  type: 'adv_disadv'         },
        { re: /\bmaana\b/,                type: 'meaning'            },
        { re: /\bumuhimu\b/,              type: 'importance'         },
        { re: /\bathara\b/,               type: 'effects'            },
        { re: /\bsababu\b/,               type: 'causes'             },
        { re: /\bfaida\b/,               type: 'advantages'         },
        { re: /\bhasara\b/,              type: 'disadvantages'      },
        { re: /\baina\b/,                type: 'types'              },
        { re: /\bsifa\b/,               type: 'characteristics'    },
        { re: /\bhatua\b/,              type: 'steps'              },
        { re: /\bmifano\b/,             type: 'examples'           },
        { re: /\btafsiri\b/,            type: 'definition'         },
        { re: /\bmatumizi\b/,           type: 'uses'               },
        { re: /\bkazi\b/,               type: 'functions'          },
        { re: /\bsehemu\b/,             type: 'components'         },
        { re: /\bsuluhu\b/,             type: 'solutions'          },
        { re: /\bkuzuia\b/,             type: 'solutions'          },
    ];

    let found = null;
    for (const p of [...patterns, ...swPatterns]) {
        if (p.re.test(s)) { found = p; break; }
    }

    let coreSubject = specificLesson;
    if (found) {
        const swFound = swPatterns.indexOf(found) !== -1;
        const ofMatch = swFound
            ? specificLesson.match(/\b(?:ya|wa|za|la|cha|vya|kwa)\s+(.+)$/i)      // "umuhimu wa biolojia" -> "biolojia"
            : (specificLesson.match(/\bof\s+(.+)$/i) ||
               specificLesson.match(/\bya\s+(.+)$/i) ||
               specificLesson.match(/\bkwa\s+(.+)$/i));
        if (ofMatch) coreSubject = ofMatch[1].trim();
    }

    return {
        conceptType: found ? found.type : 'generic',
        coreSubject,
        hasConcept: !!found,
        original: specificLesson
    };
}


const TLM_MAP = {
    picture:   { key:'picture',   labelEn:'pictures',            labelSw:'picha',                 verbEn:'display',    verbSw:'kuonyesha',   pluralEn:'pictures',           pluralSw:'picha'               },
    photo:     { key:'photo',     labelEn:'photographs',         labelSw:'picha za uhalisia',     verbEn:'show',       verbSw:'kuonyesha',   pluralEn:'photographs',        pluralSw:'picha za uhalisia'   },
    card:      { key:'card',      labelEn:'cards',               labelSw:'kadi',                  verbEn:'distribute', verbSw:'kusambaza',   pluralEn:'cards',              pluralSw:'kadi'                },
    flashcard: { key:'card',      labelEn:'flash cards',         labelSw:'kadi za haraka',        verbEn:'show',       verbSw:'kuonyesha',   pluralEn:'flash cards',        pluralSw:'kadi za haraka'      },
    video:     { key:'video',     labelEn:'a video clip',        labelSw:'video fupi',            verbEn:'play',       verbSw:'kuonyesha',   pluralEn:'video clips',        pluralSw:'video'               },
    clip:      { key:'video',     labelEn:'a video clip',        labelSw:'video fupi',            verbEn:'play',       verbSw:'kuonyesha',   pluralEn:'video clips',        pluralSw:'video'               },
    chart:     { key:'chart',     labelEn:'a chart',             labelSw:'chati',                 verbEn:'display',    verbSw:'kuwasilisha', pluralEn:'charts',             pluralSw:'chati'               },
    graph:     { key:'chart',     labelEn:'a graph',             labelSw:'grafu',                 verbEn:'display',    verbSw:'kuonyesha',   pluralEn:'graphs',             pluralSw:'grafu'               },
    diagram:   { key:'diagram',   labelEn:'a diagram',           labelSw:'mchoro',                verbEn:'present',    verbSw:'kuwasilisha', pluralEn:'diagrams',           pluralSw:'michoro'             },
    poster:    { key:'poster',    labelEn:'a poster',            labelSw:'bango',                 verbEn:'display',    verbSw:'kuonyesha',   pluralEn:'posters',            pluralSw:'mabango'             },
    object:    { key:'object',    labelEn:'real objects',        labelSw:'vitu halisi',           verbEn:'show',       verbSw:'kuonyesha',   pluralEn:'real objects',       pluralSw:'vitu halisi'         },
    specimen:  { key:'object',    labelEn:'specimens',           labelSw:'sampuli',               verbEn:'display',    verbSw:'kuonyesha',   pluralEn:'specimens',          pluralSw:'sampuli'             },
    model:     { key:'model',     labelEn:'a model',             labelSw:'mfano halisi',          verbEn:'present',    verbSw:'kuwasilisha', pluralEn:'models',             pluralSw:'mifano halisi'       },
    textbook:  { key:'textbook',  labelEn:'textbooks',           labelSw:'vitabu vya kiada',      verbEn:'use',        verbSw:'kutumia',     pluralEn:'textbooks',          pluralSw:'vitabu vya kiada'    },
    worksheet: { key:'worksheet', labelEn:'worksheets',          labelSw:'karatasi za kazi',      verbEn:'distribute', verbSw:'kusambaza',   pluralEn:'worksheets',         pluralSw:'karatasi za kazi'    },
    audio:     { key:'audio',     labelEn:'an audio recording',  labelSw:'rekodi ya sauti',       verbEn:'play',       verbSw:'kuonyesha',   pluralEn:'audio recordings',   pluralSw:'rekodi za sauti'     },
    map:       { key:'map',       labelEn:'a map',               labelSw:'ramani',                verbEn:'display',    verbSw:'kuonyesha',   pluralEn:'maps',               pluralSw:'ramani'              },
    globe:     { key:'globe',     labelEn:'a globe',             labelSw:'globa',                 verbEn:'use',        verbSw:'kutumia',     pluralEn:'globes',             pluralSw:'globa'               },
    default:   { key:'default',   labelEn:'teaching materials',  labelSw:'vifaa vya kufundishia', verbEn:'use',        verbSw:'kutumia',     pluralEn:'teaching materials', pluralSw:'vifaa vya kufundishia'}
};

/**
 * Returns contextual verb phrases that connect the TLM to the specific objective.
 * e.g. for video + importance → "demonstrating", for picture + types → "showing"
 */
function getContextualConnector(tlmKey, conceptType, isSwahili) {
    // English connectors: [tlmKey][conceptType] → connector phrase
    const enConnectors = {
        video: {
            meaning:            ['explaining the meaning of', 'illustrating the concept of', 'describing'],
            importance:         ['demonstrating the importance of', 'highlighting the significance of', 'showing the value of'],
            meaning_importance: ['explaining the meaning and importance of', 'illustrating the concept and significance of'],
            effects:            ['showing the effects of', 'demonstrating the impact of', 'illustrating the consequences of'],
            causes:             ['illustrating the causes of', 'showing the reasons behind', 'demonstrating what leads to'],
            advantages:         ['highlighting the advantages of', 'demonstrating the benefits of', 'showing the merits of'],
            disadvantages:      ['showing the disadvantages of', 'illustrating the drawbacks of', 'demonstrating the challenges of'],
            adv_disadv:         ['comparing the advantages and disadvantages of', 'showing both sides of'],
            types:              ['showing the types of', 'illustrating the different kinds of', 'classifying'],
            characteristics:    ['showing the characteristics of', 'demonstrating the features of', 'illustrating properties of'],
            steps:              ['demonstrating the steps of', 'showing the process of', 'illustrating the procedure for'],
            examples:           ['giving examples of', 'illustrating', 'showing real-life cases of'],
            definition:         ['defining', 'explaining the concept of', 'illustrating the meaning of'],
            uses:               ['showing the uses of', 'demonstrating applications of', 'illustrating how to use'],
            functions:          ['showing the functions of', 'demonstrating how works', 'illustrating the role of'],
            components:         ['showing the components of', 'illustrating the parts of', 'demonstrating the structure of'],
            solutions:          ['showing solutions to', 'demonstrating how to address', 'illustrating ways to solve'],
            generic:            ['related to', 'about', 'focusing on'],
        },
        picture: {
            meaning:            ['showing', 'depicting', 'illustrating'],
            importance:         ['showing the importance of', 'depicting the significance of', 'illustrating the value of'],
            meaning_importance: ['showing the meaning and importance of', 'depicting'],
            effects:            ['showing the effects of', 'depicting the impact of', 'illustrating'],
            causes:             ['showing the causes of', 'depicting factors leading to'],
            advantages:         ['showing the advantages of', 'depicting the benefits of'],
            disadvantages:      ['showing the disadvantages of', 'depicting the drawbacks of'],
            adv_disadv:         ['showing both sides of', 'depicting advantages and disadvantages of'],
            types:              ['showing the types of', 'depicting different kinds of'],
            characteristics:    ['showing the characteristics of', 'depicting features of'],
            steps:              ['showing the steps of', 'depicting the process of'],
            examples:           ['showing examples of', 'depicting'],
            definition:         ['illustrating', 'showing'],
            uses:               ['showing the uses of', 'depicting applications of'],
            functions:          ['showing the functions of', 'depicting the role of'],
            components:         ['showing the components of', 'depicting the parts of'],
            solutions:          ['showing solutions to', 'depicting ways to address'],
            generic:            ['related to', 'showing', 'depicting'],
        },
        chart: {
            meaning:            ['summarising', 'presenting information on'],
            importance:         ['highlighting the importance of', 'summarising the significance of'],
            meaning_importance: ['summarising the meaning and importance of'],
            effects:            ['summarising the effects of', 'presenting data on the impact of'],
            causes:             ['summarising the causes of', 'presenting the reasons for'],
            advantages:         ['listing the advantages of', 'summarising the benefits of'],
            disadvantages:      ['listing the disadvantages of', 'summarising the drawbacks of'],
            adv_disadv:         ['comparing advantages and disadvantages of', 'summarising both sides of'],
            types:              ['classifying the types of', 'categorising', 'listing the types of'],
            characteristics:    ['listing the characteristics of', 'summarising the features of'],
            steps:              ['outlining the steps of', 'presenting the process of'],
            examples:           ['listing examples of', 'presenting cases of'],
            definition:         ['presenting the definition of', 'summarising'],
            uses:               ['listing the uses of', 'summarising applications of'],
            functions:          ['listing the functions of', 'outlining the roles of'],
            components:         ['listing the components of', 'outlining the parts of'],
            solutions:          ['listing solutions to', 'summarising ways to address'],
            generic:            ['about', 'related to', 'summarising'],
        },
        diagram: {
            meaning:            ['illustrating', 'depicting the concept of'],
            importance:         ['illustrating the importance of', 'depicting the significance of'],
            meaning_importance: ['illustrating the meaning and importance of'],
            effects:            ['illustrating the effects of', 'depicting the impact of'],
            causes:             ['illustrating the causes of', 'depicting factors behind'],
            advantages:         ['illustrating the advantages of', 'depicting benefits of'],
            disadvantages:      ['illustrating the disadvantages of', 'depicting drawbacks of'],
            adv_disadv:         ['illustrating the advantages and disadvantages of'],
            types:              ['illustrating the types of', 'depicting the classification of'],
            characteristics:    ['illustrating the characteristics of', 'depicting features of'],
            steps:              ['illustrating the steps of', 'depicting the procedure for'],
            examples:           ['illustrating examples of', 'depicting'],
            definition:         ['illustrating the concept of', 'depicting'],
            uses:               ['illustrating the uses of', 'depicting applications of'],
            functions:          ['illustrating the functions of', 'depicting roles of'],
            components:         ['illustrating the components of', 'depicting the structure of'],
            solutions:          ['illustrating solutions to', 'depicting approaches to'],
            generic:            ['illustrating', 'depicting', 'showing'],
        },
        card: {
            meaning:            ['describing', 'explaining'],
            importance:         ['stating the importance of', 'describing the significance of'],
            meaning_importance: ['explaining the meaning and importance of'],
            effects:            ['describing the effects of', 'stating impacts of'],
            causes:             ['describing the causes of', 'listing reasons for'],
            advantages:         ['listing the advantages of', 'describing benefits of'],
            disadvantages:      ['listing the disadvantages of', 'describing drawbacks of'],
            adv_disadv:         ['comparing advantages and disadvantages of'],
            types:              ['categorising the types of', 'listing types of'],
            characteristics:    ['listing the characteristics of', 'describing features of'],
            steps:              ['listing the steps of', 'describing the procedure for'],
            examples:           ['giving examples of', 'listing examples of'],
            definition:         ['defining', 'explaining'],
            uses:               ['listing uses of', 'describing applications of'],
            functions:          ['describing the functions of', 'listing roles of'],
            components:         ['listing the components of', 'describing the parts of'],
            solutions:          ['listing solutions to', 'describing ways to address'],
            generic:            ['about', 'related to'],
        },
        model: {
            meaning:            ['representing', 'demonstrating the concept of'],
            importance:         ['demonstrating the importance of', 'representing the significance of'],
            meaning_importance: ['demonstrating the meaning and importance of'],
            effects:            ['demonstrating the effects of', 'representing the impact of'],
            causes:             ['demonstrating what causes', 'representing factors behind'],
            advantages:         ['demonstrating the advantages of', 'representing benefits of'],
            disadvantages:      ['demonstrating the disadvantages of', 'representing drawbacks of'],
            adv_disadv:         ['demonstrating both the advantages and disadvantages of'],
            types:              ['demonstrating the types of', 'representing different forms of'],
            characteristics:    ['demonstrating the characteristics of', 'representing features of'],
            steps:              ['demonstrating the steps of', 'representing the process of'],
            examples:           ['demonstrating examples of', 'representing'],
            definition:         ['representing the concept of', 'demonstrating'],
            uses:               ['demonstrating the uses of', 'representing applications of'],
            functions:          ['demonstrating the functions of', 'representing roles of'],
            components:         ['demonstrating the components of', 'representing the structure of'],
            solutions:          ['demonstrating solutions to', 'representing approaches to'],
            generic:            ['representing', 'demonstrating', 'showing'],
        },
        audio: {
            meaning:            ['explaining the meaning of', 'describing'],
            importance:         ['explaining the importance of', 'discussing the significance of'],
            meaning_importance: ['explaining the meaning and importance of'],
            effects:            ['describing the effects of', 'explaining the impact of'],
            causes:             ['explaining the causes of', 'describing what leads to'],
            advantages:         ['discussing the advantages of', 'explaining benefits of'],
            disadvantages:      ['discussing the disadvantages of', 'explaining drawbacks of'],
            adv_disadv:         ['discussing the advantages and disadvantages of'],
            types:              ['describing the types of', 'explaining categories of'],
            characteristics:    ['describing the characteristics of', 'explaining features of'],
            steps:              ['explaining the steps of', 'describing the process of'],
            examples:           ['providing examples of', 'discussing instances of'],
            definition:         ['defining', 'explaining'],
            uses:               ['explaining the uses of', 'describing applications of'],
            functions:          ['explaining the functions of', 'describing roles of'],
            components:         ['describing the components of', 'explaining the parts of'],
            solutions:          ['discussing solutions to', 'explaining ways to address'],
            generic:            ['about', 'discussing', 'explaining'],
        },
        map: {
            meaning:            ['showing the location of', 'depicting'],
            importance:         ['showing the importance of', 'depicting the significance of'],
            meaning_importance: ['illustrating the meaning and importance of'],
            effects:            ['showing the effects of', 'depicting the distribution of'],
            causes:             ['showing factors related to', 'depicting areas affected by'],
            advantages:         ['showing the advantages of', 'depicting benefits related to'],
            disadvantages:      ['showing challenges related to', 'depicting areas affected by'],
            adv_disadv:         ['showing aspects of'],
            types:              ['showing the types of', 'depicting distribution of'],
            characteristics:    ['showing characteristics of', 'depicting features of'],
            steps:              ['showing the process related to', 'depicting stages of'],
            examples:           ['showing examples of', 'depicting cases of'],
            definition:         ['showing', 'depicting'],
            uses:               ['showing the uses of', 'depicting applications of'],
            functions:          ['showing the role of', 'depicting functions of'],
            components:         ['showing the components of', 'depicting parts of'],
            solutions:          ['showing solutions to', 'depicting approaches to'],
            generic:            ['showing', 'depicting', 'related to'],
        },
        object: {
            meaning:            ['representing', 'demonstrating'],
            importance:         ['demonstrating the importance of', 'representing the significance of'],
            meaning_importance: ['demonstrating the meaning and importance of'],
            effects:            ['demonstrating the effects of', 'representing the impact of'],
            causes:             ['demonstrating what causes', 'representing factors behind'],
            advantages:         ['demonstrating the advantages of', 'showing benefits of'],
            disadvantages:      ['demonstrating the disadvantages of', 'showing drawbacks of'],
            adv_disadv:         ['demonstrating aspects of'],
            types:              ['representing the types of', 'showing examples of types of'],
            characteristics:    ['demonstrating the characteristics of', 'showing features of'],
            steps:              ['demonstrating the process of', 'showing steps related to'],
            examples:           ['serving as examples of', 'demonstrating'],
            definition:         ['demonstrating the concept of', 'representing'],
            uses:               ['demonstrating the uses of', 'showing applications of'],
            functions:          ['demonstrating the functions of', 'showing roles of'],
            components:         ['showing the components of', 'demonstrating parts of'],
            solutions:          ['demonstrating solutions to', 'showing approaches to'],
            generic:            ['related to', 'representing', 'demonstrating'],
        },
        poster: {
            meaning:            ['depicting the meaning of', 'illustrating'],
            importance:         ['highlighting the importance of', 'depicting the significance of'],
            meaning_importance: ['highlighting the meaning and importance of'],
            effects:            ['highlighting the effects of', 'depicting the impact of'],
            causes:             ['highlighting the causes of', 'depicting factors behind'],
            advantages:         ['highlighting the advantages of', 'depicting benefits of'],
            disadvantages:      ['highlighting the challenges of', 'depicting drawbacks of'],
            adv_disadv:         ['highlighting the advantages and disadvantages of'],
            types:              ['depicting the types of', 'classifying'],
            characteristics:    ['highlighting the characteristics of', 'depicting features of'],
            steps:              ['outlining the steps of', 'depicting the process of'],
            examples:           ['showing examples of', 'depicting'],
            definition:         ['defining', 'illustrating the concept of'],
            uses:               ['highlighting the uses of', 'depicting applications of'],
            functions:          ['highlighting the functions of', 'depicting roles of'],
            components:         ['depicting the components of', 'highlighting the parts of'],
            solutions:          ['highlighting solutions to', 'depicting approaches to'],
            generic:            ['about', 'related to', 'depicting'],
        },
        textbook: {
            meaning:            ['explaining', 'covering the meaning of'],
            importance:         ['explaining the importance of', 'covering the significance of'],
            meaning_importance: ['explaining the meaning and importance of'],
            effects:            ['covering the effects of', 'explaining the impact of'],
            causes:             ['explaining the causes of', 'covering the reasons for'],
            advantages:         ['covering the advantages of', 'explaining the benefits of'],
            disadvantages:      ['covering the disadvantages of', 'explaining the drawbacks of'],
            adv_disadv:         ['covering the advantages and disadvantages of'],
            types:              ['covering the types of', 'explaining categories of'],
            characteristics:    ['covering the characteristics of', 'explaining features of'],
            steps:              ['covering the steps of', 'explaining the process of'],
            examples:           ['providing examples of', 'covering'],
            definition:         ['defining', 'explaining'],
            uses:               ['covering the uses of', 'explaining applications of'],
            functions:          ['explaining the functions of', 'covering roles of'],
            components:         ['covering the components of', 'explaining the parts of'],
            solutions:          ['covering solutions to', 'explaining ways to address'],
            generic:            ['covering', 'about', 'related to'],
        },
        worksheet: {
            meaning:            ['about the meaning of', 'focused on'],
            importance:         ['about the importance of', 'focused on the significance of'],
            meaning_importance: ['about the meaning and importance of'],
            effects:            ['about the effects of', 'focused on the impact of'],
            causes:             ['about the causes of', 'focused on the reasons for'],
            advantages:         ['about the advantages of', 'focused on the benefits of'],
            disadvantages:      ['about the disadvantages of', 'focused on the drawbacks of'],
            adv_disadv:         ['comparing the advantages and disadvantages of'],
            types:              ['about the types of', 'focused on classifying'],
            characteristics:    ['about the characteristics of', 'focused on features of'],
            steps:              ['about the steps of', 'focused on the process of'],
            examples:           ['with examples of', 'about'],
            definition:         ['about the definition of', 'focused on'],
            uses:               ['about the uses of', 'focused on applications of'],
            functions:          ['about the functions of', 'focused on roles of'],
            components:         ['about the components of', 'focused on parts of'],
            solutions:          ['about solutions to', 'focused on ways to address'],
            generic:            ['about', 'focused on', 'related to'],
        },
        default: {
            generic:            ['related to', 'about', 'on the topic of'],
        }
    };

    // Swahili connectors
    const swConnectors = {
        video: {
            meaning:            ['inayoeleza maana ya', 'inayoonyesha dhana ya', 'inayofafanua'],
            importance:         ['inayoonyesha umuhimu wa', 'inayobainisha umuhimu wa', 'inayoonyesha thamani ya'],
            meaning_importance: ['inayoeleza maana na umuhimu wa', 'inayobainisha maana na umuhimu wa'],
            effects:            ['inayoonyesha athara za', 'inayoonyesha matokeo ya', 'inayoonyesha athari za'],
            causes:             ['inayoonyesha sababu za', 'inayobainisha visababishi vya'],
            advantages:         ['inayoonyesha faida za', 'inayobainisha manufaa ya'],
            disadvantages:      ['inayoonyesha hasara za', 'inayobainisha vikwazo vya'],
            adv_disadv:         ['inayolinganisha faida na hasara za', 'inayoonyesha pande mbili za'],
            types:              ['inayoonyesha aina za', 'inayobainisha aina mbalimbali za'],
            characteristics:    ['inayoonyesha sifa za', 'inayobainisha vipengele vya'],
            steps:              ['inayoonyesha hatua za', 'inayoeleza mchakato wa'],
            examples:           ['inayotoa mifano ya', 'inayoonyesha mifano ya'],
            definition:         ['inayofafanua', 'inayoeleza dhana ya'],
            uses:               ['inayoonyesha matumizi ya', 'inayobainisha jinsi ya kutumia'],
            functions:          ['inayoonyesha kazi za', 'inayobainisha majukumu ya'],
            components:         ['inayoonyesha sehemu za', 'inayobainisha muundo wa'],
            solutions:          ['inayoonyesha suluhu za', 'inayobainisha jinsi ya kutatua'],
            generic:            ['kuhusu', 'inayohusiana na', 'inayohusu'],
        },
        picture: {
            meaning:            ['zinazoonyesha maana ya', 'zinazoonyesha dhana ya'],
            importance:         ['zinazoonyesha umuhimu wa', 'zinazobainisha thamani ya'],
            meaning_importance: ['zinazoonyesha maana na umuhimu wa'],
            effects:            ['zinazoonyesha athara za', 'zinazobainisha athari za'],
            causes:             ['zinazoonyesha sababu za', 'zinazobainisha visababishi vya'],
            advantages:         ['zinazoonyesha faida za', 'zinazobainisha manufaa ya'],
            disadvantages:      ['zinazoonyesha hasara za', 'zinazobainisha vikwazo vya'],
            adv_disadv:         ['zinazolinganisha faida na hasara za'],
            types:              ['zinazoonyesha aina za', 'zinazobainisha aina mbalimbali za'],
            characteristics:    ['zinazoonyesha sifa za', 'zinazobainisha vipengele vya'],
            steps:              ['zinazoonyesha hatua za', 'zinazobainisha mchakato wa'],
            examples:           ['zinazoonyesha mifano ya', 'zinazowakilisha'],
            definition:         ['zinazoonyesha dhana ya', 'zinazofafanua'],
            uses:               ['zinazoonyesha matumizi ya', 'zinazobainisha jinsi ya kutumia'],
            functions:          ['zinazoonyesha kazi za', 'zinazobainisha majukumu ya'],
            components:         ['zinazoonyesha sehemu za', 'zinazobainisha muundo wa'],
            solutions:          ['zinazoonyesha suluhu za', 'zinazobainisha njia za kutatua'],
            generic:            ['kuhusu', 'zinazohusiana na', 'zinazoonyesha'],
        },
        chart: {
            meaning:            ['inayoonyesha maana ya', 'inayofupisha dhana ya'],
            importance:         ['inayobainisha umuhimu wa', 'inayoonyesha umuhimu wa'],
            meaning_importance: ['inayofupisha maana na umuhimu wa'],
            effects:            ['inayoonyesha athara za', 'inayobainisha athari za'],
            causes:             ['inayoonyesha sababu za', 'inayobainisha visababishi vya'],
            advantages:         ['inayoorodhesha faida za', 'inayobainisha manufaa ya'],
            disadvantages:      ['inayoorodhesha hasara za', 'inayobainisha vikwazo vya'],
            adv_disadv:         ['inayolinganisha faida na hasara za'],
            types:              ['inayoainisha aina za', 'inayoorodhesha aina za'],
            characteristics:    ['inayoorodhesha sifa za', 'inayobainisha vipengele vya'],
            steps:              ['inayoorodhesha hatua za', 'inayobainisha mchakato wa'],
            examples:           ['inayotoa mifano ya', 'inayoorodhesha mifano ya'],
            definition:         ['inayoonyesha ufafanuzi wa', 'inayofupisha maana ya'],
            uses:               ['inayoorodhesha matumizi ya', 'inayobainisha jinsi ya kutumia'],
            functions:          ['inayoorodhesha kazi za', 'inayobainisha majukumu ya'],
            components:         ['inayoorodhesha sehemu za', 'inayobainisha muundo wa'],
            solutions:          ['inayoorodhesha suluhu za', 'inayobainisha njia za kutatua'],
            generic:            ['kuhusu', 'inayohusiana na'],
        },
        diagram: {
            meaning:            ['unaoonyesha maana ya', 'unaofafanua dhana ya'],
            importance:         ['unaoonyesha umuhimu wa', 'unaobainisha umuhimu wa'],
            meaning_importance: ['unaoonyesha maana na umuhimu wa'],
            effects:            ['unaoonyesha athara za', 'unaobainisha athari za'],
            causes:             ['unaoonyesha sababu za', 'unaobainisha visababishi vya'],
            advantages:         ['unaoonyesha faida za', 'unaobainisha manufaa ya'],
            disadvantages:      ['unaoonyesha hasara za', 'unaobainisha vikwazo vya'],
            adv_disadv:         ['unaolinganisha faida na hasara za'],
            types:              ['unaoonyesha aina za', 'unaoainisha'],
            characteristics:    ['unaoonyesha sifa za', 'unaobainisha vipengele vya'],
            steps:              ['unaoonyesha hatua za', 'unaobainisha mchakato wa'],
            examples:           ['unaoonyesha mifano ya', 'unaowakilisha'],
            definition:         ['unaofafanua', 'unaoonyesha dhana ya'],
            uses:               ['unaoonyesha matumizi ya', 'unaobainisha jinsi ya kutumia'],
            functions:          ['unaoonyesha kazi za', 'unaobainisha majukumu ya'],
            components:         ['unaoonyesha sehemu za', 'unaobainisha muundo wa'],
            solutions:          ['unaoonyesha suluhu za', 'unaobainisha njia za kutatua'],
            generic:            ['kuhusu', 'unaohusiana na'],
        },
        default: {
            generic: ['kuhusu', 'zinazohusiana na', 'inayohusiana na'],
        }
    };

    const connMap = isSwahili ? swConnectors : enConnectors;
    const tlmConnectors = connMap[tlmKey] || connMap['picture'] || connMap['default'];
    const conceptConnectors = tlmConnectors[conceptType] || tlmConnectors['generic'] || ['related to'];
    return pick(conceptConnectors);
}

/**
 * Builds a fully contextual TLM label string for use inside lesson phrases.
 *
 * English example: "a video demonstrating the importance of biology"
 * Swahili example: "video inayoonyesha umuhimu wa baiolojia"
 */
function buildContextualLabel(tlmDescriptor, conceptType, specificLesson, isSwahili) {
    const connector = getContextualConnector(tlmDescriptor.key, conceptType, isSwahili);
    if (isSwahili) {
        const base = tlmDescriptor.labelSw;
        return `${base} ${connector} ${specificLesson}`;
    } else {
        const base = tlmDescriptor.labelEn;
        return `${base} ${connector} ${specificLesson}`;
    }
}

function parseTLM(tlmString) {
    if (!tlmString || tlmString.trim() === '') return [TLM_MAP.default];
    const lower = tlmString.toLowerCase();
    const found = [];
    const priority = ['video','clip','flashcard','card','picture','photo','diagram','chart','graph','poster','model','specimen','object','worksheet','textbook','audio','map','globe'];
    for (const key of priority) {
        if (lower.includes(key)) {
            const descriptor = TLM_MAP[key];
            if (!found.some(f => f.key === descriptor.key)) found.push(descriptor);
        }
    }
    return found.length > 0 ? found : [TLM_MAP.default];
}

/* The first teaching resource the teacher selected, exactly as it appears in the
   T&L Resources field (same text the lesson plan preview uses). */
function getFirstSelectedTLM(tlmString) {
    const raw = (tlmString || '').trim();
    if (!raw) return '';
    let first = '';
    try {
        if (typeof window !== 'undefined' && window.AXP_TLM && typeof window.AXP_TLM.first === 'function') {
            first = (window.AXP_TLM.first() || '').trim();
        }
    } catch (e) { first = ''; }
    // Only trust it when it really is the start of what is written in the document
    if (!first || raw.toLowerCase().indexOf(first.toLowerCase()) !== 0) {
        first = raw.split(',')[0].trim();
    }
    return first;
}

function lowerFirstTLM(s) {
    return (s && s.length > 1 && s.charAt(1) === s.charAt(1).toLowerCase())
        ? s.charAt(0).toLowerCase() + s.slice(1) : s;
}

function getStimulusFromTLM(tlmString, conceptType, specificLesson, isSwahili) {
    const options = parseTLM(tlmString);
    const chosen  = pick(options);
    const exact   = getFirstSelectedTLM(tlmString);

    // Use the exact resource the teacher selected (same wording as the preview)
    if (exact) {
        return {
            label:          lowerFirstTLM(exact),
            baseLabel:      isSwahili ? 'vifaa' : 'resource',
            verb:           isSwahili ? chosen.verbSw  : chosen.verbEn,
            plural:         isSwahili ? chosen.pluralSw : chosen.pluralEn,
            key:            chosen.key,
            raw:            chosen
        };
    }

    const contextualLabel = buildContextualLabel(chosen, conceptType, specificLesson, isSwahili);
    return {
        label:          contextualLabel,          // full contextual phrase e.g. "a video demonstrating importance of biology"
        baseLabel:      isSwahili ? chosen.labelSw : chosen.labelEn,  // plain label e.g. "a video clip"
        verb:           isSwahili ? chosen.verbSw  : chosen.verbEn,
        plural:         isSwahili ? chosen.pluralSw : chosen.pluralEn,
        key:            chosen.key,
        raw:            chosen
    };
}

function buildEnglishQuestions(activity, stimulus) {
    const { conceptType, coreSubject, original } = activity;
    // Use baseLabel for sub-questions so we don't get overly long nested phrases
    const stimLabel = stimulus.baseLabel;
    const q = {
        meaning_importance: [
            `(a) What do you see in the ${stimLabel}?\n(b) What does "${coreSubject}" mean to you?\n(c) Why do you think ${coreSubject} is important in everyday life?`,
            `(a) Describe what the ${stimLabel} shows.\n(b) How would you define ${coreSubject} in your own words?\n(c) What is the importance of ${coreSubject} to people around you?`,
            `(a) What can you observe from the ${stimLabel}?\n(b) How would you explain the meaning of ${coreSubject}?\n(c) List two reasons why ${coreSubject} is important.`,
        ],
        meaning: [
            `(a) What does the ${stimLabel} tell you?\n(b) In your own words, what is ${coreSubject}?\n(c) Where do we encounter ${coreSubject} in daily life?`,
            `(a) Describe what you observe from the ${stimLabel}.\n(b) How would you define ${coreSubject}?\n(c) Give one example of ${coreSubject} from real life.`,
            `(a) What information does the ${stimLabel} give you?\n(b) How would you explain ${coreSubject} to a friend?\n(c) Can you think of a time you experienced ${coreSubject}?`,
        ],
        importance: [
            `(a) What does the ${stimLabel} show about ${coreSubject}?\n(b) How does ${coreSubject} affect our daily lives?\n(c) Why is ${coreSubject} important?`,
            `(a) What do you notice from the ${stimLabel}?\n(b) List two ways ${coreSubject} is useful.\n(c) What would happen if ${coreSubject} did not exist?`,
            `(a) What message does the ${stimLabel} send about ${coreSubject}?\n(b) Who benefits from ${coreSubject} and how?\n(c) Why should we care about ${coreSubject}?`,
        ],
        effects: [
            `(a) What do you observe in the ${stimLabel}?\n(b) What effects does ${coreSubject} have on people or the environment?\n(c) Are these effects positive, negative, or both?`,
            `(a) Describe the situation shown in the ${stimLabel}.\n(b) What are the short-term effects of ${coreSubject}?\n(c) What long-term effects can you predict?`,
            `(a) What change or situation is shown in the ${stimLabel}?\n(b) How does ${coreSubject} affect people in your community?\n(c) Which effect do you consider most serious?`,
        ],
        causes: [
            `(a) What does the ${stimLabel} show?\n(b) What do you think causes ${coreSubject}?\n(c) Which cause do you consider most serious and why?`,
            `(a) Describe what you see in the ${stimLabel}.\n(b) What factors lead to ${coreSubject}?\n(c) How can we prevent ${coreSubject}?`,
            `(a) What problem or situation is shown in the ${stimLabel}?\n(b) What are the main reasons behind ${coreSubject}?\n(c) Which cause could most easily be eliminated?`,
        ],
        advantages: [
            `(a) What is shown in the ${stimLabel}?\n(b) What are the advantages of ${coreSubject}?\n(c) How have these advantages benefited society?`,
            `(a) Observe and describe the ${stimLabel}.\n(b) List three benefits of ${coreSubject}.\n(c) Who benefits most from ${coreSubject}?`,
            `(a) What positive things does the ${stimLabel} show?\n(b) How does ${coreSubject} help individuals or communities?\n(c) Which advantage of ${coreSubject} do you value most?`,
        ],
        disadvantages: [
            `(a) What do you see in the ${stimLabel}?\n(b) What are the disadvantages of ${coreSubject}?\n(c) How can we minimise these disadvantages?`,
            `(a) Describe the situation in the ${stimLabel}.\n(b) List the negative aspects of ${coreSubject}.\n(c) Suggest ways to address these challenges.`,
            `(a) What challenge or problem does the ${stimLabel} show?\n(b) How does ${coreSubject} negatively affect people?\n(c) What solutions would you propose?`,
        ],
        adv_disadv: [
            `(a) What does the ${stimLabel} illustrate?\n(b) What are the advantages of ${coreSubject}?\n(c) What are the disadvantages of ${coreSubject}?`,
            `(a) Describe what you observe from the ${stimLabel}.\n(b) Compare the benefits and drawbacks of ${coreSubject}.\n(c) Overall, is ${coreSubject} more beneficial or harmful?`,
            `(a) What situation is shown in the ${stimLabel}?\n(b) List one advantage and one disadvantage of ${coreSubject}.\n(c) In your opinion, do the benefits of ${coreSubject} outweigh its drawbacks?`,
        ],
        types: [
            `(a) What does the ${stimLabel} show?\n(b) How many types of ${coreSubject} can you identify?\n(c) How are these types different from each other?`,
            `(a) Observe the ${stimLabel} carefully.\n(b) Classify what you see into types of ${coreSubject}.\n(c) Which type is most common in your environment?`,
            `(a) What variety does the ${stimLabel} show?\n(b) Name the types of ${coreSubject} you can identify.\n(c) What makes each type unique?`,
        ],
        characteristics: [
            `(a) What features do you notice in the ${stimLabel}?\n(b) List three characteristics of ${coreSubject}.\n(c) How do these characteristics make ${coreSubject} unique?`,
            `(a) Describe what you observe from the ${stimLabel}.\n(b) What are the main characteristics of ${coreSubject}?\n(c) Which characteristic do you consider most important?`,
            `(a) What can you tell about ${coreSubject} from the ${stimLabel}?\n(b) How would you describe the key features of ${coreSubject}?\n(c) How do these features differ from related concepts?`,
        ],
        steps: [
            `(a) What does the ${stimLabel} show?\n(b) Describe the steps you can identify.\n(c) Why is the order of steps in ${coreSubject} important?`,
            `(a) Observe the ${stimLabel} and describe the process.\n(b) Which step seems most critical?\n(c) What happens if a step is skipped?`,
            `(a) How many stages can you see in the ${stimLabel}?\n(b) Describe what happens at each stage of ${coreSubject}.\n(c) What must come first and why?`,
        ],
        examples: [
            `(a) What does the ${stimLabel} show?\n(b) Give two examples of ${coreSubject} from your community.\n(c) How do these examples relate to real life?`,
            `(a) Describe what you see in the ${stimLabel}.\n(b) Can you identify more examples of ${coreSubject}?\n(c) Which example is most relevant to your daily life?`,
            `(a) What does the ${stimLabel} remind you of?\n(b) Name two examples of ${coreSubject} you have seen before.\n(c) Why is it useful to know these examples?`,
        ],
        definition: [
            `(a) What does the ${stimLabel} illustrate?\n(b) How would you define ${coreSubject} in your own words?\n(c) Why is it important to know the definition of ${coreSubject}?`,
            `(a) Observe and describe the ${stimLabel}.\n(b) What key words help define ${coreSubject}?\n(c) Give an example to support your definition.`,
            `(a) What concept does the ${stimLabel} represent?\n(b) How would you explain ${coreSubject} to someone who has never heard of it?\n(c) Is your definition similar to what you see in the ${stimLabel}?`,
        ],
        uses: [
            `(a) What do you see in the ${stimLabel}?\n(b) What are the uses of ${coreSubject}?\n(c) Which use of ${coreSubject} is most important in everyday life?`,
            `(a) Describe the ${stimLabel}.\n(b) List three uses of ${coreSubject}.\n(c) How would life be different without ${coreSubject}?`,
            `(a) What activity or object does the ${stimLabel} show?\n(b) How many different uses of ${coreSubject} can you think of?\n(c) Which use do you consider most valuable?`,
        ],
        functions: [
            `(a) What does the ${stimLabel} show?\n(b) What are the main functions of ${coreSubject}?\n(c) What happens when ${coreSubject} fails to perform its functions?`,
            `(a) Describe what you observe from the ${stimLabel}.\n(b) List the functions of ${coreSubject}.\n(c) Which function is most critical?`,
            `(a) What role does the ${stimLabel} suggest ${coreSubject} plays?\n(b) How does ${coreSubject} contribute to the system it belongs to?\n(c) What would be affected if ${coreSubject} stopped functioning?`,
        ],
        components: [
            `(a) What parts can you identify in the ${stimLabel}?\n(b) What are the components of ${coreSubject}?\n(c) How do the components work together?`,
            `(a) Describe the structure shown in the ${stimLabel}.\n(b) Name the main components of ${coreSubject}.\n(c) What is the role of each component?`,
            `(a) How many parts does the ${stimLabel} show?\n(b) What is each component of ${coreSubject} responsible for?\n(c) Could ${coreSubject} work if one component was missing?`,
        ],
        solutions: [
            `(a) What problem does the ${stimLabel} show?\n(b) What solutions can address ${coreSubject}?\n(c) Which solution is most practical in your community?`,
            `(a) Describe the challenge shown in the ${stimLabel}.\n(b) How can we prevent or solve ${coreSubject}?\n(c) Who is responsible for implementing these solutions?`,
            `(a) What difficulty does the ${stimLabel} depict?\n(b) What steps would you take to solve ${coreSubject}?\n(c) Which solution would work best in your school or home?`,
        ],
        generic: [
            `(a) What do you observe from the ${stimLabel}?\n(b) How does this relate to ${original}?\n(c) Why is ${original} important in everyday life?`,
            `(a) Describe what the ${stimLabel} shows.\n(b) How is this connected to ${original}?\n(c) What questions does this raise for you?`,
            `(a) What stands out to you in the ${stimLabel}?\n(b) How would you connect what you see to ${original}?\n(c) Share one thing you already know about ${original}.`,
        ],
    };
    return pick(q[conceptType] || q.generic);
}

function buildEnglishGroupTasks(verb, activity) {
    const { conceptType, coreSubject, original } = activity;
    const V = capitalizeFirst(verb);
    const tasks = {
        meaning_importance: [
            `(a) Define ${coreSubject} in their own words. (b) Identify and list the importance of ${coreSubject} in daily life.`,
            `(a) State the meaning of ${coreSubject}. (b) Discuss why ${coreSubject} is important and share findings with the class.`,
            `(a) Write a group definition of ${coreSubject}. (b) List at least three points on the importance of ${coreSubject}.`,
        ],
        meaning: [
            `(a) Define ${coreSubject} using examples. (b) Explain where ${coreSubject} is encountered in everyday life.`,
            `(a) State the meaning of ${coreSubject} in their own words. (b) Share examples with the class.`,
            `(a) Agree on a group definition of ${coreSubject}. (b) Identify one real-life example that fits the definition.`,
        ],
        importance: [
            `(a) List the importance of ${coreSubject}. (b) Discuss how ${coreSubject} affects the community.`,
            `(a) Identify at least three reasons why ${coreSubject} is important. (b) Present their findings to the class.`,
            `(a) Rank the importance of ${coreSubject} from most to least significant. (b) Explain their ranking to the class.`,
        ],
        effects: [
            `(a) Identify the positive and negative effects of ${coreSubject}. (b) Discuss how these effects impact daily life.`,
            `(a) List the short-term effects of ${coreSubject}. (b) List the long-term effects and share with the class.`,
            `(a) Classify the effects of ${coreSubject} into positive and negative. (b) Decide which effect is most serious and justify their choice.`,
        ],
        causes: [
            `(a) Identify the main causes of ${coreSubject}. (b) Rank the causes from most to least serious.`,
            `(a) List the causes of ${coreSubject}. (b) Discuss which cause is most preventable.`,
            `(a) Brainstorm all possible causes of ${coreSubject}. (b) Identify the root cause and explain why.`,
        ],
        advantages: [
            `(a) List the advantages of ${coreSubject}. (b) Discuss how these advantages benefit individuals and society.`,
            `(a) Identify and explain the benefits of ${coreSubject}. (b) Share examples of these advantages.`,
            `(a) Rank the advantages of ${coreSubject} in order of importance. (b) Give a real-life example for each advantage.`,
        ],
        disadvantages: [
            `(a) List the disadvantages of ${coreSubject}. (b) Suggest ways to reduce or overcome these disadvantages.`,
            `(a) Identify the drawbacks of ${coreSubject}. (b) Discuss possible solutions to these problems.`,
            `(a) Rank the disadvantages of ${coreSubject} from most to least harmful. (b) Propose one practical solution for the most harmful disadvantage.`,
        ],
        adv_disadv: [
            `(a) List the advantages of ${coreSubject}. (b) List the disadvantages of ${coreSubject} and suggest ways to address them.`,
            `(a) Compare the advantages and disadvantages of ${coreSubject}. (b) Decide as a group whether the benefits outweigh the drawbacks.`,
            `(a) Create a table of advantages and disadvantages of ${coreSubject}. (b) Draw a conclusion about whether ${coreSubject} is overall beneficial.`,
        ],
        types: [
            `(a) Identify and name the types of ${coreSubject}. (b) Describe the characteristics of each type.`,
            `(a) Classify ${coreSubject} into its different types. (b) Give an example of each type.`,
            `(a) Create a classification chart of the types of ${coreSubject}. (b) Explain the key differences between each type.`,
        ],
        characteristics: [
            `(a) List the characteristics of ${coreSubject}. (b) Explain how each characteristic can be observed or measured.`,
            `(a) Identify the main features of ${coreSubject}. (b) Compare these characteristics with related concepts.`,
            `(a) Rank the characteristics of ${coreSubject} by how easily they can be observed. (b) Describe one characteristic in detail.`,
        ],
        steps: [
            `(a) List the steps involved in ${coreSubject} in the correct order. (b) Explain what happens at each step.`,
            `(a) Arrange the steps of ${coreSubject} in sequence. (b) Identify which step is most critical.`,
            `(a) Sequence the steps of ${coreSubject} on paper. (b) Explain what would go wrong if the first step were skipped.`,
        ],
        examples: [
            `(a) Give at least three examples of ${coreSubject}. (b) Explain how each example relates to real life.`,
            `(a) Identify examples of ${coreSubject} in the local environment. (b) Present and discuss each example.`,
            `(a) List five examples of ${coreSubject} found in everyday life. (b) Choose the best example and explain why it best represents ${coreSubject}.`,
        ],
        definition: [
            `(a) Write a definition of ${coreSubject} in their own words. (b) Support their definition with at least one example.`,
            `(a) Define ${coreSubject} as a group. (b) Compare their definition with what is in the textbook.`,
            `(a) Agree on a clear, simple definition of ${coreSubject}. (b) Write a sentence using ${coreSubject} correctly.`,
        ],
        uses: [
            `(a) List the uses of ${coreSubject}. (b) Rank the uses from most to least important.`,
            `(a) Identify uses of ${coreSubject} in everyday life. (b) Share examples with the class.`,
            `(a) Find at least four uses of ${coreSubject}. (b) Explain which use is most beneficial and why.`,
        ],
        functions: [
            `(a) Identify the main functions of ${coreSubject}. (b) Explain the consequence if each function is not performed.`,
            `(a) List and describe the functions of ${coreSubject}. (b) Relate these functions to real-life situations.`,
            `(a) Assign each function of ${coreSubject} a level of importance. (b) Justify their ranking to the class.`,
        ],
        components: [
            `(a) Name the components of ${coreSubject}. (b) Explain the role of each component.`,
            `(a) Identify the parts of ${coreSubject}. (b) Draw or describe how the components are arranged.`,
            `(a) Match each component of ${coreSubject} to its function. (b) Explain what would happen if one component were removed.`,
        ],
        solutions: [
            `(a) Propose solutions to ${coreSubject}. (b) Evaluate which solution is most effective in their community.`,
            `(a) List possible solutions to the problem of ${coreSubject}. (b) Select the best solution and justify their choice.`,
            `(a) Brainstorm at least three solutions to ${coreSubject}. (b) Create an action plan for the most feasible solution.`,
        ],
        generic: [
            `(a) ${V} ${original} in their own words. (b) Identify the relevance of ${original} in daily life.`,
            `(a) Discuss the key ideas about ${original}. (b) ${V} their findings with examples.`,
            `(a) Summarise the main points about ${original}. (b) Present their findings to the rest of the class.`,
        ],
    };
    return pick(tasks[conceptType] || tasks.generic);
}

function buildSwahiliQuestions(activity, stimulus) {
    const { conceptType, coreSubject, original } = activity;
    const stimLabel = stimulus.baseLabel;
    const q = {
        meaning_importance: [
            `(a) Unaona nini katika ${stimLabel}?\n(b) Maana ya ${coreSubject} ni nini?\n(c) Kwa nini ${coreSubject} ni muhimu katika maisha ya kila siku?`,
            `(a) Eleza unachokiona katika ${stimLabel}.\n(b) Unaweza kueleza maana ya ${coreSubject} kwa maneno yako?\n(c) Taja umuhimu mmoja wa ${coreSubject}.`,
            `(a) Unapata habari gani kutoka ${stimLabel}?\n(b) Unaweza kueleza ${coreSubject} ni nini?\n(c) Orodhesha sababu mbili za kwa nini ${coreSubject} ni muhimu.`,
        ],
        meaning: [
            `(a) ${stimLabel} inaonyesha nini?\n(b) Kwa maneno yako, ${coreSubject} maana yake ni nini?\n(c) Wapi tunakutana na ${coreSubject} maishani?`,
            `(a) Eleza unachokiona katika ${stimLabel}.\n(b) Toa mfano wa ${coreSubject}.\n(c) Unafikiri ${coreSubject} ni muhimu vipi?`,
            `(a) ${stimLabel} inakujulisha nini?\n(b) Unaweza kueleza ${coreSubject} kwa rafiki yako?\n(c) Je, umewahi kukutana na ${coreSubject} katika maisha yako?`,
        ],
        importance: [
            `(a) ${stimLabel} inaonyesha nini kuhusu ${coreSubject}?\n(b) ${coreSubject} inaathiri vipi maisha yetu?\n(c) Kwa nini ${coreSubject} ni muhimu?`,
            `(a) Eleza unachokiona katika ${stimLabel}.\n(b) Taja njia mbili ambazo ${coreSubject} ni muhimu.\n(c) Nini kingetokea bila ${coreSubject}?`,
            `(a) Ujumbe gani unaupata kutoka ${stimLabel}?\n(b) Ni nani anayenufaika na ${coreSubject} na jinsi gani?\n(c) Kwa nini tunapaswa kujali ${coreSubject}?`,
        ],
        effects: [
            `(a) Unaona nini katika ${stimLabel}?\n(b) Ni athara gani za ${coreSubject} kwa watu au mazingira?\n(c) Athara hizi ni nzuri, mbaya, au zote mbili?`,
            `(a) Eleza hali inayoonekana katika ${stimLabel}.\n(b) Athara za muda mfupi za ${coreSubject} ni zipi?\n(c) Athara za muda mrefu unazoweza kutabiri ni zipi?`,
            `(a) Mabadiliko gani yanaonekana katika ${stimLabel}?\n(b) ${coreSubject} inaathiri vipi watu katika jamii yako?\n(c) Ni athara gani unayoona kuwa mbaya zaidi?`,
        ],
        causes: [
            `(a) ${stimLabel} inaonyesha nini?\n(b) Unafikiri nini husababisha ${coreSubject}?\n(c) Sababu ipi unayoona kuwa mbaya zaidi?`,
            `(a) Eleza unachokiona katika ${stimLabel}.\n(b) Ni mambo gani yanayosababisha ${coreSubject}?\n(c) Tunawezaje kuzuia ${coreSubject}?`,
            `(a) Tatizo gani linaonekana katika ${stimLabel}?\n(b) Ni sababu zipi kuu za ${coreSubject}?\n(c) Ni sababu gani inayoweza kuepukwa kwa urahisi zaidi?`,
        ],
        advantages: [
            `(a) ${stimLabel} inaonyesha nini?\n(b) Faida za ${coreSubject} ni zipi?\n(c) Faida hizi zinanufaisha jamii vipi?`,
            `(a) Eleza unachokiona katika ${stimLabel}.\n(b) Orodhesha faida tatu za ${coreSubject}.\n(c) Ni nani anayenufaika zaidi na ${coreSubject}?`,
            `(a) Mambo mazuri gani yanaonyeshwa katika ${stimLabel}?\n(b) ${coreSubject} inasaidia vipi watu au jamii?\n(c) Ni faida gani ya ${coreSubject} unayoipenda zaidi?`,
        ],
        disadvantages: [
            `(a) Unaona nini katika ${stimLabel}?\n(b) Hasara za ${coreSubject} ni zipi?\n(c) Tunawezaje kupunguza hasara hizi?`,
            `(a) Eleza hali inayoonekana katika ${stimLabel}.\n(b) Orodhesha hasara za ${coreSubject}.\n(c) Pendekeza jinsi ya kushughulikia changamoto hizi.`,
            `(a) Tatizo gani linaonyeshwa katika ${stimLabel}?\n(b) ${coreSubject} inaathiri vibaya vipi watu?\n(c) Ni suluhu gani unazopendekeza?`,
        ],
        adv_disadv: [
            `(a) ${stimLabel} inaonyesha nini?\n(b) Faida za ${coreSubject} ni zipi?\n(c) Hasara za ${coreSubject} ni zipi?`,
            `(a) Eleza unachokiona katika ${stimLabel}.\n(b) Linganisha faida na hasara za ${coreSubject}.\n(c) Kwa ujumla, ${coreSubject} ina manufaa au madhara zaidi?`,
            `(a) Hali gani inaonyeshwa katika ${stimLabel}?\n(b) Taja faida moja na hasara moja ya ${coreSubject}.\n(c) Kwa maoni yako, faida za ${coreSubject} zinazidi hasara zake?`,
        ],
        types: [
            `(a) ${stimLabel} inaonyesha nini?\n(b) Aina ngapi za ${coreSubject} unaweza kutambua?\n(c) Aina hizi zinatofautiana vipi?`,
            `(a) Chunguza ${stimLabel} kwa makini.\n(b) Ainisha unachokiona katika aina za ${coreSubject}.\n(c) Ni aina gani inayopatikana zaidi katika mazingira yako?`,
            `(a) Utofauti gani unaonekana katika ${stimLabel}?\n(b) Taja aina za ${coreSubject} unazoweza kutambua.\n(c) Ni nini kinachofanya kila aina kuwa ya kipekee?`,
        ],
        characteristics: [
            `(a) Ni sifa gani unazoziona katika ${stimLabel}?\n(b) Taja sifa tatu za ${coreSubject}.\n(c) Sifa hizi zinafanya ${coreSubject} kuwa ya kipekee vipi?`,
            `(a) Eleza unachokiona katika ${stimLabel}.\n(b) Sifa kuu za ${coreSubject} ni zipi?\n(c) Ni sifa gani unayoona kuwa muhimu zaidi?`,
            `(a) Unaweza kujua nini kuhusu ${coreSubject} kutoka ${stimLabel}?\n(b) Unaweza kueleza vipengele vikuu vya ${coreSubject}?\n(c) Sifa hizi zinatofautiana vipi na dhana zinazohusiana?`,
        ],
        steps: [
            `(a) ${stimLabel} inaonyesha nini?\n(b) Eleza hatua unazoziona.\n(c) Kwa nini mpangilio wa hatua katika ${coreSubject} ni muhimu?`,
            `(a) Chunguza ${stimLabel} na eleza mchakato.\n(b) Hatua ipi inaonekana kuwa muhimu zaidi?\n(c) Nini kinatokea ikiwa hatua moja inarukwa?`,
            `(a) Hatua ngapi zinaonekana katika ${stimLabel}?\n(b) Eleza kinachotokea katika kila hatua ya ${coreSubject}.\n(c) Ni nini lazima kifanyike kwanza na kwa nini?`,
        ],
        examples: [
            `(a) ${stimLabel} inaonyesha nini?\n(b) Toa mifano miwili ya ${coreSubject} kutoka katika jamii yako.\n(c) Mifano hii inahusiana vipi na maisha?`,
            `(a) Eleza unachokiona katika ${stimLabel}.\n(b) Unaweza kutaja mifano mingine ya ${coreSubject}?\n(c) Mfano upi una umuhimu zaidi katika maisha yako ya kila siku?`,
            `(a) ${stimLabel} inakukumbusha nini?\n(b) Taja mifano miwili ya ${coreSubject} uliyoiona kabla.\n(c) Kwa nini ni muhimu kujua mifano hii?`,
        ],
        definition: [
            `(a) ${stimLabel} inaonyesha nini?\n(b) Unaweza kueleza ${coreSubject} kwa maneno yako?\n(c) Kwa nini ni muhimu kujua maana ya ${coreSubject}?`,
            `(a) Chunguza na eleza ${stimLabel}.\n(b) Ni maneno gani yanayosaidia kufafanua ${coreSubject}?\n(c) Toa mfano kuunga mkono ufafanuzi wako.`,
            `(a) Dhana gani inawakilishwa na ${stimLabel}?\n(b) Ungeweza kueleza ${coreSubject} kwa mtu asiyeijua?\n(c) Je, ufafanuzi wako unafanana na unachokiona katika ${stimLabel}?`,
        ],
        uses: [
            `(a) Unaona nini katika ${stimLabel}?\n(b) Matumizi ya ${coreSubject} ni yapi?\n(c) Ni matumizi gani ya ${coreSubject} yanayohusika zaidi na maisha ya kila siku?`,
            `(a) Eleza ${stimLabel}.\n(b) Orodhesha matumizi matatu ya ${coreSubject}.\n(c) Maisha yangebadilika vipi bila ${coreSubject}?`,
            `(a) Shughuli au kitu gani kinaonyeshwa katika ${stimLabel}?\n(b) Unaweza kufikiria matumizi mangapi ya ${coreSubject}?\n(c) Ni matumizi gani unayoona kuwa na thamani zaidi?`,
        ],
        functions: [
            `(a) ${stimLabel} inaonyesha nini?\n(b) Kazi kuu za ${coreSubject} ni zipi?\n(c) Nini kinatokea ikiwa ${coreSubject} haikufanya kazi zake?`,
            `(a) Eleza unachokiona katika ${stimLabel}.\n(b) Orodhesha kazi za ${coreSubject}.\n(c) Ni kazi gani inayohusika zaidi?`,
            `(a) Jukumu gani la ${coreSubject} linajitokeza katika ${stimLabel}?\n(b) ${coreSubject} inachangia vipi katika mfumo wake?\n(c) Nini kingeathirika ikiwa ${coreSubject} ilisimama kufanya kazi?`,
        ],
        components: [
            `(a) Ni sehemu gani unazoweza kutambua katika ${stimLabel}?\n(b) Sehemu za ${coreSubject} ni zipi?\n(c) Sehemu hizi zinafanya kazi pamoja vipi?`,
            `(a) Eleza muundo unaoonekana katika ${stimLabel}.\n(b) Taja sehemu kuu za ${coreSubject}.\n(c) Ni jukumu gani la kila sehemu?`,
            `(a) ${stimLabel} inaonyesha sehemu ngapi?\n(b) Kila sehemu ya ${coreSubject} inawajibika kwa nini?\n(c) ${coreSubject} ingeweza kufanya kazi ikiwa sehemu moja iliondolewa?`,
        ],
        solutions: [
            `(a) ${stimLabel} inaonyesha tatizo gani?\n(b) Ni suluhu gani zinazoweza kushughulikia ${coreSubject}?\n(c) Ni suluhu gani inayofaa zaidi katika jamii yako?`,
            `(a) Eleza changamoto inayoonekana katika ${stimLabel}.\n(b) Tunawezaje kuzuia au kutatua ${coreSubject}?\n(c) Ni nani anayehusika kutekeleza suluhu hizi?`,
            `(a) Ugumu gani unaonyeshwa katika ${stimLabel}?\n(b) Ni hatua gani ungezichukua kutatua ${coreSubject}?\n(c) Ni suluhu gani ingefanya kazi vizuri zaidi shuleni au nyumbani kwako?`,
        ],
        generic: [
            `(a) Unaona nini katika ${stimLabel}?\n(b) Hii inahusiana vipi na ${original}?\n(c) Kwa nini ${original} ni muhimu katika maisha ya kila siku?`,
            `(a) Eleza unachokiona katika ${stimLabel}.\n(b) Hii inakusaidia vipi kuelewa ${original}?\n(c) Ni maswali gani yanayokuja akilini mwako?`,
            `(a) Ni nini kinachokuvutia zaidi katika ${stimLabel}?\n(b) Unaweza kuunganisha unachokiona na ${original}?\n(c) Shiriki kitu kimoja unachokijua tayari kuhusu ${original}.`,
        ],
    };
    return pick(q[conceptType] || q.generic);
}

function buildSwahiliGroupTasks(verb, activity) {
    const { conceptType, coreSubject, original } = activity;
    const verbBase = verb.startsWith('ku') ? verb : 'ku' + verb;
    const V = capitalizeFirst(verbBase);
    const tasks = {
        meaning_importance: [
            `(a) Kueleza maana ya ${coreSubject} kwa maneno yao wenyewe. (b) Kutaja na kujadili umuhimu wa ${coreSubject} katika maisha ya kila siku.`,
            `(a) Kusema maana ya ${coreSubject}. (b) Kujadili kwa nini ${coreSubject} ni muhimu na kuwasilisha matokeo yao.`,
            `(a) Kuandika ufafanuzi wa kikundi wa ${coreSubject}. (b) Kuorodhesha mambo matatu kuhusu umuhimu wa ${coreSubject}.`,
        ],
        meaning: [
            `(a) Kueleza maana ya ${coreSubject} kwa mfano. (b) Kuonyesha wapi ${coreSubject} inatokea katika maisha ya kila siku.`,
            `(a) Kusema maana ya ${coreSubject} kwa maneno yao wenyewe. (b) Kushirikiana na darasa mifano yao.`,
            `(a) Kukubaliana na ufafanuzi wa kikundi wa ${coreSubject}. (b) Kutaja mfano mmoja wa kweli unaofaa na ufafanuzi.`,
        ],
        importance: [
            `(a) Kuorodhesha umuhimu wa ${coreSubject}. (b) Kujadili jinsi ${coreSubject} inavyoathiri jamii.`,
            `(a) Kutaja sababu tatu za kwa nini ${coreSubject} ni muhimu. (b) Kuwasilisha matokeo yao kwa darasa.`,
            `(a) Kupanga umuhimu wa ${coreSubject} kutoka muhimu zaidi hadi kidogo. (b) Kueleza upangaji wao kwa darasa.`,
        ],
        effects: [
            `(a) Kutambua athara nzuri na mbaya za ${coreSubject}. (b) Kujadili jinsi athara hizi zinavyoathiri maisha ya kila siku.`,
            `(a) Kuorodhesha athara za muda mfupi za ${coreSubject}. (b) Kuorodhesha athara za muda mrefu na kushiriki na darasa.`,
            `(a) Kuainisha athara za ${coreSubject} kuwa nzuri na mbaya. (b) Kuamua ni athara gani mbaya zaidi na kueleza sababu.`,
        ],
        causes: [
            `(a) Kutambua sababu kuu za ${coreSubject}. (b) Kupanga sababu kutoka mbaya zaidi hadi kidogo.`,
            `(a) Kuorodhesha sababu za ${coreSubject}. (b) Kujadili ni sababu ipi inayoweza kuzuiwa zaidi.`,
            `(a) Kufikiria sababu zote zinazowezekana za ${coreSubject}. (b) Kutambua sababu kuu na kueleza kwa nini.`,
        ],
        advantages: [
            `(a) Kuorodhesha faida za ${coreSubject}. (b) Kujadili jinsi faida hizi zinavyonufaisha watu na jamii.`,
            `(a) Kutambua na kueleza faida za ${coreSubject}. (b) Kushirikiana mifano ya faida hizi.`,
            `(a) Kupanga faida za ${coreSubject} kwa umuhimu. (b) Kutoa mfano wa kweli kwa kila faida.`,
        ],
        disadvantages: [
            `(a) Kuorodhesha hasara za ${coreSubject}. (b) Kupendekeza njia za kupunguza au kushinda hasara hizi.`,
            `(a) Kutambua mapungufu ya ${coreSubject}. (b) Kujadili suluhu zinazowezekana.`,
            `(a) Kupanga hasara za ${coreSubject} kutoka mbaya zaidi hadi kidogo. (b) Kupendekeza suluhu moja ya vitendo kwa hasara mbaya zaidi.`,
        ],
        adv_disadv: [
            `(a) Kuorodhesha faida za ${coreSubject}. (b) Kuorodhesha hasara za ${coreSubject} na kupendekeza njia za kushughulikia.`,
            `(a) Kulinganisha faida na hasara za ${coreSubject}. (b) Kuamua kwa kikundi kama faida ni zaidi ya hasara.`,
            `(a) Kuunda jedwali la faida na hasara za ${coreSubject}. (b) Kutoa hitimisho kama ${coreSubject} ina manufaa kwa ujumla.`,
        ],
        types: [
            `(a) Kutambua na kutaja aina za ${coreSubject}. (b) Kueleza sifa za kila aina.`,
            `(a) Kuainisha ${coreSubject} katika aina zake tofauti. (b) Kutoa mfano wa kila aina.`,
            `(a) Kuunda jedwali la uainishaji la aina za ${coreSubject}. (b) Kueleza tofauti kuu kati ya kila aina.`,
        ],
        characteristics: [
            `(a) Kuorodhesha sifa za ${coreSubject}. (b) Kueleza jinsi kila sifa inavyoweza kuonekana au kupimwa.`,
            `(a) Kutambua vipengele vikuu vya ${coreSubject}. (b) Kulinganisha sifa hizi na dhana zinazohusiana.`,
            `(a) Kupanga sifa za ${coreSubject} kwa jinsi zinavyoonekana kwa urahisi. (b) Kueleza sifa moja kwa kina.`,
        ],
        steps: [
            `(a) Kuorodhesha hatua zinazohusika katika ${coreSubject} kwa mpangilio sahihi. (b) Kueleza kinachotokea katika kila hatua.`,
            `(a) Kupanga hatua za ${coreSubject} kwa mfululizo. (b) Kutambua hatua ipi ni muhimu zaidi.`,
            `(a) Kupanga hatua za ${coreSubject} kwenye karatasi. (b) Kueleza nini kingetokea ikiwa hatua ya kwanza ikiachwa.`,
        ],
        examples: [
            `(a) Kutoa mifano angalau mitatu ya ${coreSubject}. (b) Kueleza jinsi kila mfano unavyohusiana na maisha halisi.`,
            `(a) Kutambua mifano ya ${coreSubject} katika mazingira ya karibu. (b) Kuwasilisha na kujadili kila mfano.`,
            `(a) Kuorodhesha mifano mitano ya ${coreSubject} inayopatikana katika maisha ya kila siku. (b) Kuchagua mfano bora na kueleza kwa nini unawakilisha vizuri ${coreSubject}.`,
        ],
        definition: [
            `(a) Kuandika ufafanuzi wa ${coreSubject} kwa maneno yao wenyewe. (b) Kuunga mkono ufafanuzi wao kwa mfano mmoja.`,
            `(a) Kufafanua ${coreSubject} kama kikundi. (b) Kulinganisha ufafanuzi wao na ule ulioandikwa kwenye kitabu.`,
            `(a) Kukubaliana na ufafanuzi rahisi na wazi wa ${coreSubject}. (b) Kuandika sentensi moja ikitumia ${coreSubject} kwa usahihi.`,
        ],
        uses: [
            `(a) Kuorodhesha matumizi ya ${coreSubject}. (b) Kupanga matumizi kutoka muhimu zaidi hadi kidogo.`,
            `(a) Kutambua matumizi ya ${coreSubject} katika maisha ya kila siku. (b) Kushirikiana mifano na darasa.`,
            `(a) Kutafuta matumizi angalau manne ya ${coreSubject}. (b) Kueleza matumizi yanayofaa zaidi na kwa nini.`,
        ],
        functions: [
            `(a) Kutambua kazi kuu za ${coreSubject}. (b) Kueleza matokeo ikiwa kazi moja haikufanywa.`,
            `(a) Kuorodhesha na kueleza kazi za ${coreSubject}. (b) Kuhusisha kazi hizi na hali halisi.`,
            `(a) Kupanga kazi za ${coreSubject} kwa umuhimu. (b) Kueleza upangaji wao kwa darasa.`,
        ],
        components: [
            `(a) Kutaja sehemu za ${coreSubject}. (b) Kueleza jukumu la kila sehemu.`,
            `(a) Kutambua sehemu za ${coreSubject}. (b) Kuchora au kueleza jinsi sehemu zinavyopangwa.`,
            `(a) Kuoanisha kila sehemu ya ${coreSubject} na kazi yake. (b) Kueleza nini kingetokea ikiwa sehemu moja iliondolewa.`,
        ],
        solutions: [
            `(a) Kupendekeza suluhu za ${coreSubject}. (b) Kutathmini ni suluhu gani inayofaa zaidi katika jamii yao.`,
            `(a) Kuorodhesha suluhu zinazowezekana kwa tatizo la ${coreSubject}. (b) Kuchagua suluhu bora na kueleza sababu.`,
            `(a) Kufikiria suluhu angalau tatu za ${coreSubject}. (b) Kuunda mpango wa utekelezaji wa suluhu inayowezekana zaidi.`,
        ],
        generic: [
            `(a) ${V} ${original} kwa maneno yao wenyewe. (b) Kutambua umuhimu wa ${original} katika maisha ya kila siku.`,
            `(a) Kujadili dhana kuu za ${original}. (b) Kushirikiana matokeo na mifano.`,
            `(a) Kufupisha mambo makuu kuhusu ${original}. (b) Kuwasilisha matokeo yao kwa darasa.`,
        ],
    };
    return pick(tasks[conceptType] || tasks.generic);
}


function buildEnglishAssessment(conceptType, coreSubject, original, stage) {
    const byStage = {
        development: {
            meaning_importance:  [`Meaning and importance of ${coreSubject} have been explained by the student`, `Each student has stated the meaning and at least two points of importance of ${coreSubject}`, `The student has demonstrated understanding of the meaning and importance of ${coreSubject}`],
            meaning:             [`Meaning of ${coreSubject} has been explained by the student in their own words`, `The student has defined ${coreSubject}`, `A definition of ${coreSubject} has been given by the student`],
            importance:          [`Importance of ${coreSubject} has been listed and explained by the student`, `Each student has identified the importance of ${coreSubject}`, `At least two points on the importance of ${coreSubject} have been stated`],
            effects:             [`Both positive and negative effects of ${coreSubject} have been identified by the student`, `The student has stated the effects of ${coreSubject}`, `The student has differentiated between positive and negative effects of ${coreSubject}`],
            causes:              [`Main causes of ${coreSubject} have been listed and ranked by the student`, `Each student has identified the causes of ${coreSubject}`, `The student has stated the factors that cause ${coreSubject}`],
            advantages:          [`Benefits of ${coreSubject} have been identified and explained by the student`, `The student has listed the advantages of ${coreSubject}`, `The student has described the advantages of ${coreSubject}`],
            disadvantages:       [`Solutions to the drawbacks of ${coreSubject} have been proposed by the student`, `Each student has identified the disadvantages of ${coreSubject}`, `The student has stated the disadvantages of ${coreSubject}`],
            adv_disadv:          [`Benefits and drawbacks of ${coreSubject} have been evaluated by the student`, `The student has compared the advantages and disadvantages of ${coreSubject}`, `Both advantages and disadvantages of ${coreSubject} have been identified`],
            types:               [`Each type of ${coreSubject} has been classified with examples by the student`, `The student has identified and named the types of ${coreSubject}`, `Types of ${coreSubject} have been described by the student`],
            characteristics:     [`Features of ${coreSubject} have been identified by the student`, `Each student has listed the characteristics of ${coreSubject}`, `The student has described the characteristics of ${coreSubject}`],
            steps:               [`Each step involved in ${coreSubject} has been described by the student`, `The student has sequenced the steps of ${coreSubject}`, `Main steps of ${coreSubject} have been identified by the student`],
            examples:            [`An appropriate example of ${coreSubject} from real life has been provided by the student`, `Each student has identified a relevant example of ${coreSubject}`, `The student has given an example of ${coreSubject}`],
            definition:          [`A definition of ${coreSubject} has been written by the student`, `The student has defined ${coreSubject} in their own words`, `A clear definition of ${coreSubject} has been provided by the student`],
            uses:                [`Uses of ${coreSubject} have been listed and explained by the student`, `Each student has identified the uses of ${coreSubject}`, `At least two uses of ${coreSubject} have been stated by the student`],
            functions:           [`What each function of ${coreSubject} does has been explained by the student`, `The student has listed the functions of ${coreSubject}`, `Functions of ${coreSubject} have been stated by the student`],
            components:          [`The role of each component of ${coreSubject} has been identified by the student`, `Each student has named the components of ${coreSubject}`, `Components of ${coreSubject} have been identified by the student`],
            solutions:           [`The most practical solution to ${coreSubject} has been evaluated and selected by the student`, `The student has proposed a solution to ${coreSubject}`, `Solutions to ${coreSubject} have been identified by the student`],
            generic:             [`Key concepts of ${original} have been explained by the student`, `The student has demonstrated understanding of ${original}`, `Each student has responded to questions about ${original}`],
        },
        design: {
            meaning_importance:  [`Meaning and importance of ${coreSubject} have been stated by the student in the group`, `The student has explained the meaning and importance of ${coreSubject}`, `Each student has identified the meaning and importance of ${coreSubject}`],
            meaning:             [`Meaning of ${coreSubject} has been explained by the student in the group`, `The student has defined ${coreSubject}`, `The student has stated the meaning of ${coreSubject}`],
            importance:          [`Importance of ${coreSubject} has been stated by the student in the group`, `Each student has identified the importance of ${coreSubject}`, `The student has explained why ${coreSubject} is important`],
            effects:             [`Effects of ${coreSubject} have been identified and explained by the student in the group`, `The student has stated the effects of ${coreSubject}`, `The student has differentiated the effects of ${coreSubject}`],
            causes:              [`Causes of ${coreSubject} have been identified by the student in the group`, `Each student has listed the causes of ${coreSubject}`, `The student has explained what causes ${coreSubject}`],
            advantages:          [`Advantages of ${coreSubject} have been listed by the student in the group`, `The student has identified the benefits of ${coreSubject}`, `The student has explained the advantages of ${coreSubject}`],
            disadvantages:       [`Disadvantages of ${coreSubject} have been identified by the student in the group`, `The student has stated the drawbacks of ${coreSubject}`, `The student has described the disadvantages of ${coreSubject}`],
            adv_disadv:          [`Advantages and disadvantages of ${coreSubject} have been compared by the student in the group`, `The student has evaluated both sides of ${coreSubject}`, `Each student has listed the advantages and disadvantages of ${coreSubject}`],
            types:               [`Types of ${coreSubject} have been identified and described by the student in the group`, `The student has named and classified the types of ${coreSubject}`, `The student has differentiated the types of ${coreSubject}`],
            characteristics:     [`Characteristics of ${coreSubject} have been listed and explained by the student in the group`, `Each student has identified the characteristics of ${coreSubject}`, `The student has described the features of ${coreSubject}`],
            steps:               [`Steps of ${coreSubject} have been arranged in order by the student in the group`, `The student has sequenced the steps involved in ${coreSubject}`, `The student has identified the steps of ${coreSubject}`],
            examples:            [`A relevant example of ${coreSubject} has been identified by the student in the group`, `The student has given an example of ${coreSubject}`, `A real-life example of ${coreSubject} has been provided by the student`],
            definition:          [`${capitalizeFirst(coreSubject)} has been defined by the student in the group`, `The student has written a definition of ${coreSubject}`, `The student has stated the definition of ${coreSubject}`],
            uses:                [`Uses of ${coreSubject} have been identified by the student in the group`, `The student has listed the uses of ${coreSubject}`, `The student has stated uses of ${coreSubject}`],
            functions:           [`Functions of ${coreSubject} have been listed and described by the student in the group`, `Each student has identified the functions of ${coreSubject}`, `The student has explained the functions of ${coreSubject}`],
            components:          [`Components of ${coreSubject} have been named and described by the student in the group`, `The student has identified the components of ${coreSubject}`, `The student has stated the components of ${coreSubject}`],
            solutions:           [`A solution to ${coreSubject} has been proposed by the student in the group`, `The student has identified a solution to ${coreSubject}`, `The student has suggested a way to address ${coreSubject}`],
            generic:             [`Understanding of ${original} has been demonstrated by the student in the group`, `Each student has responded to the group task about ${original}`, `The assigned task on ${original} has been completed by the student`],
        },
        realization: {
            meaning_importance:  [`Meaning and importance of ${coreSubject} have been stated individually by the student`, `The student has explained the meaning and importance of ${coreSubject} independently`, `Each student has identified the meaning and importance of ${coreSubject} on their own`],
            meaning:             [`${capitalizeFirst(coreSubject)} has been defined independently by the student`, `The student has stated the meaning of ${coreSubject} on their own`, `Each student has defined ${coreSubject} individually`],
            importance:          [`Importance of ${coreSubject} has been stated independently by the student`, `The student has identified the importance of ${coreSubject} on their own`, `Each student has explained the importance of ${coreSubject} individually`],
            effects:             [`Effects of ${coreSubject} have been stated independently by the student`, `The student has identified the effects of ${coreSubject} on their own`, `Each student has described the effects of ${coreSubject} individually`],
            causes:              [`Causes of ${coreSubject} have been stated independently by the student`, `The student has identified the causes of ${coreSubject} on their own`, `Each student has stated causes of ${coreSubject} individually`],
            advantages:          [`Advantages of ${coreSubject} have been stated independently by the student`, `The student has identified the advantages of ${coreSubject} on their own`, `Each student has listed advantages of ${coreSubject} individually`],
            disadvantages:       [`Disadvantages of ${coreSubject} have been stated independently by the student`, `The student has identified the disadvantages of ${coreSubject} on their own`, `Each student has described disadvantages of ${coreSubject} individually`],
            adv_disadv:          [`Advantages and disadvantages of ${coreSubject} have been compared independently by the student`, `The student has identified both advantages and disadvantages of ${coreSubject} on their own`, `Each student has stated the advantages and disadvantages of ${coreSubject} individually`],
            types:               [`Types of ${coreSubject} have been identified and named independently by the student`, `The student has named the types of ${coreSubject} on their own`, `Each student has classified ${coreSubject} into its types individually`],
            characteristics:     [`Characteristics of ${coreSubject} have been listed independently by the student`, `The student has stated the characteristics of ${coreSubject} on their own`, `Each student has identified the characteristics of ${coreSubject} individually`],
            steps:               [`Steps of ${coreSubject} have been listed independently by the student`, `The student has sequenced the steps of ${coreSubject} on their own`, `Each student has stated the steps of ${coreSubject} individually`],
            examples:            [`An example of ${coreSubject} has been given independently by the student`, `The student has provided an example of ${coreSubject} on their own`, `Each student has given a real-life example of ${coreSubject} individually`],
            definition:          [`${capitalizeFirst(coreSubject)} has been defined independently by the student`, `The student has stated a definition of ${coreSubject} on their own`, `Each student has defined ${coreSubject} individually`],
            uses:                [`Uses of ${coreSubject} have been stated independently by the student`, `The student has identified uses of ${coreSubject} on their own`, `Each student has listed uses of ${coreSubject} individually`],
            functions:           [`A function of ${coreSubject} has been stated independently by the student`, `The student has identified a function of ${coreSubject} on their own`, `Each student has explained a function of ${coreSubject} individually`],
            components:          [`A component of ${coreSubject} has been identified independently by the student`, `The student has named a component of ${coreSubject} on their own`, `Each student has identified components of ${coreSubject} individually`],
            solutions:           [`A solution to ${coreSubject} has been proposed independently by the student`, `The student has suggested a solution to ${coreSubject} on their own`, `Each student has proposed a way to address ${coreSubject} individually`],
            generic:             [`Understanding of ${original} has been demonstrated independently by the student`, `The student has responded to the individual task about ${original}`, `Each student has shown understanding of ${original} on their own`],
        }
    };

    const stageData = byStage[stage] || byStage.development;
    const options = stageData[conceptType] || stageData.generic;
    return pick(options);
}

function buildSwahiliAssessment(conceptType, coreSubject, original, stage) {
    const byStage = {
        development: {
            meaning_importance:  [`Mwanafunzi ameeleza maana na umuhimu wa ${coreSubject}`, `Kila mwanafunzi amesema maana na mambo mawili ya umuhimu wa ${coreSubject}`, `Mwanafunzi mmoja mmoja ameonyesha uelewa wa maana na umuhimu wa ${coreSubject}`],
            meaning:             [`Mwanafunzi amefafanua maana ya ${coreSubject} kwa maneno yake`, `Kila mwanafunzi amefafanua ${coreSubject}`, `Ufafanuzi wa ${coreSubject} umetolewa na mwanafunzi`],
            importance:          [`Mwanafunzi ameorodhesha na kueleza mambo mawili ya umuhimu wa ${coreSubject}`, `Kila mwanafunzi amebainisha umuhimu wa ${coreSubject}`, `Umuhimu wa ${coreSubject} umetajwa na mwanafunzi`],
            effects:             [`Mwanafunzi amebainisha athara nzuri na mbaya za ${coreSubject}`, `Kila mwanafunzi ametaja athara za ${coreSubject}`, `Mwanafunzi mmoja mmoja ametofautisha athara nzuri na mbaya za ${coreSubject}`],
            causes:              [`Mwanafunzi ameorodhesha na kupanga sababu kuu za ${coreSubject}`, `Kila mwanafunzi amebainisha sababu za ${coreSubject}`, `Mambo yanayosababisha ${coreSubject} yametajwa na mwanafunzi`],
            advantages:          [`Mwanafunzi ametambua na kueleza faida za ${coreSubject}`, `Kila mwanafunzi ameorodhesha faida za ${coreSubject}`, `Faida za ${coreSubject} zimeelezwa na mwanafunzi`],
            disadvantages:       [`Mwanafunzi amependekeza suluhu za changamoto za ${coreSubject}`, `Kila mwanafunzi amebainisha hasara za ${coreSubject}`, `Hasara za ${coreSubject} zimetajwa na mwanafunzi`],
            adv_disadv:          [`Mwanafunzi ametathmini faida na hasara za ${coreSubject}`, `Kila mwanafunzi amelinganisha faida na hasara za ${coreSubject}`, `Faida na hasara za ${coreSubject} zimebainishwa na mwanafunzi`],
            types:               [`Mwanafunzi ameainisha na kutoa mfano wa kila aina ya ${coreSubject}`, `Kila mwanafunzi ametambua aina za ${coreSubject}`, `Aina za ${coreSubject} zimeelezwa na mwanafunzi`],
            characteristics:     [`Mwanafunzi ametambua sifa za ${coreSubject}`, `Kila mwanafunzi ameorodhesha sifa za ${coreSubject}`, `Sifa za ${coreSubject} zimeelezwa na mwanafunzi`],
            steps:               [`Mwanafunzi ameeleza kila hatua ya ${coreSubject}`, `Kila mwanafunzi amepanga hatua za ${coreSubject}`, `Hatua kuu za ${coreSubject} zimebainishwa na mwanafunzi`],
            examples:            [`Mwanafunzi ametoa mfano unaofaa wa ${coreSubject} kutoka maishani`, `Kila mwanafunzi ametambua mfano wa ${coreSubject}`, `Mfano wa ${coreSubject} umetolewa na mwanafunzi`],
            definition:          [`Mwanafunzi ameandika ufafanuzi wa ${coreSubject}`, `Kila mwanafunzi amefafanua ${coreSubject} kwa maneno yake`, `Ufafanuzi wa ${coreSubject} umetolewa na mwanafunzi`],
            uses:                [`Mwanafunzi ameorodhesha na kueleza matumizi ya ${coreSubject}`, `Kila mwanafunzi amebainisha matumizi ya ${coreSubject}`, `Matumizi mawili ya ${coreSubject} yametajwa na mwanafunzi`],
            functions:           [`Mwanafunzi ameeleza kazi ya kila sehemu ya ${coreSubject}`, `Kila mwanafunzi ameorodhesha kazi za ${coreSubject}`, `Kazi za ${coreSubject} zimetajwa na mwanafunzi`],
            components:          [`Mwanafunzi ametambua jukumu la kila sehemu ya ${coreSubject}`, `Kila mwanafunzi ametaja sehemu za ${coreSubject}`, `Sehemu za ${coreSubject} zimebainishwa na mwanafunzi`],
            solutions:           [`Mwanafunzi amelinganisha na kuchagua suluhu bora ya ${coreSubject}`, `Kila mwanafunzi amependekeza suluhu ya ${coreSubject}`, `Suluhu za ${coreSubject} zimebainishwa na mwanafunzi`],
            generic:             [`Dhana kuu za ${original} zimeelezwa na mwanafunzi`, `Mwanafunzi mmoja mmoja ameonyesha uelewa wa ${original}`, `Kila mwanafunzi amejibu maswali kuhusu ${original}`],
        },
        design: {
            meaning_importance:  [`Mwanafunzi katika kikundi ametaja maana na umuhimu wa ${coreSubject}`, `Kila mwanafunzi ameeleza maana na umuhimu wa ${coreSubject}`, `Maana na umuhimu wa ${coreSubject} vimebainishwa na mwanafunzi`],
            meaning:             [`Mwanafunzi katika kikundi ameeleza maana ya ${coreSubject}`, `Kila mwanafunzi amefafanua ${coreSubject}`, `Maana ya ${coreSubject} imesemwa na mwanafunzi`],
            importance:          [`Mwanafunzi katika kikundi ametaja umuhimu wa ${coreSubject}`, `Kila mwanafunzi amebainisha umuhimu wa ${coreSubject}`, `Kwa nini ${coreSubject} ni muhimu kumeelezwa na mwanafunzi`],
            effects:             [`Mwanafunzi katika kikundi amebainisha na kueleza athara za ${coreSubject}`, `Kila mwanafunzi ametaja athara za ${coreSubject}`, `Athara za ${coreSubject} zimetofautishwa na mwanafunzi`],
            causes:              [`Mwanafunzi katika kikundi amebainisha sababu za ${coreSubject}`, `Kila mwanafunzi ameorodhesha sababu za ${coreSubject}`, `Kinachosababisha ${coreSubject} kimeelezwa na mwanafunzi`],
            advantages:          [`Mwanafunzi katika kikundi ameorodhesha faida za ${coreSubject}`, `Kila mwanafunzi amebainisha faida za ${coreSubject}`, `Faida za ${coreSubject} zimeelezwa na mwanafunzi`],
            disadvantages:       [`Mwanafunzi katika kikundi amebainisha hasara za ${coreSubject}`, `Kila mwanafunzi ametaja hasara za ${coreSubject}`, `Hasara za ${coreSubject} zimeelezwa na mwanafunzi`],
            adv_disadv:          [`Mwanafunzi katika kikundi amelinganisha faida na hasara za ${coreSubject}`, `Kila mwanafunzi ametathmini pande mbili za ${coreSubject}`, `Faida na hasara za ${coreSubject} zimeorodheshwa na mwanafunzi`],
            types:               [`Mwanafunzi katika kikundi amebainisha na kueleza aina za ${coreSubject}`, `Kila mwanafunzi ametaja na kuainisha aina za ${coreSubject}`, `Aina za ${coreSubject} zimetofautishwa na mwanafunzi`],
            characteristics:     [`Mwanafunzi katika kikundi ameorodhesha na kueleza sifa za ${coreSubject}`, `Kila mwanafunzi amebainisha sifa za ${coreSubject}`, `Vipengele vya ${coreSubject} vimeelezwa na mwanafunzi`],
            steps:               [`Mwanafunzi katika kikundi amepanga hatua za ${coreSubject} kwa mpangilio`, `Kila mwanafunzi amepanga hatua zinazohusika na ${coreSubject}`, `Hatua za ${coreSubject} zimebainishwa na mwanafunzi`],
            examples:            [`Mwanafunzi katika kikundi ametambua mfano wa ${coreSubject}`, `Kila mwanafunzi ametoa mfano wa ${coreSubject}`, `Mfano wa kweli wa ${coreSubject} umetolewa na mwanafunzi`],
            definition:          [`Mwanafunzi katika kikundi amefafanua ${coreSubject} kwa maneno yake`, `Kila mwanafunzi ameandika ufafanuzi wa ${coreSubject}`, `Ufafanuzi wa ${coreSubject} umetajwa na mwanafunzi`],
            uses:                [`Mwanafunzi katika kikundi amebainisha matumizi ya ${coreSubject}`, `Kila mwanafunzi ameorodhesha matumizi ya ${coreSubject}`, `Matumizi ya ${coreSubject} yametajwa na mwanafunzi`],
            functions:           [`Mwanafunzi katika kikundi ameorodhesha na kueleza kazi za ${coreSubject}`, `Kila mwanafunzi amebainisha kazi za ${coreSubject}`, `Kazi za ${coreSubject} zimeelezwa na mwanafunzi`],
            components:          [`Mwanafunzi katika kikundi ametaja na kueleza sehemu za ${coreSubject}`, `Kila mwanafunzi amebainisha sehemu za ${coreSubject}`, `Sehemu za ${coreSubject} zimetajwa na mwanafunzi`],
            solutions:           [`Mwanafunzi katika kikundi amependekeza suluhu za ${coreSubject}`, `Kila mwanafunzi amebainisha suluhu za ${coreSubject}`, `Njia za kushughulikia ${coreSubject} zimependekezwa na mwanafunzi`],
            generic:             [`Uelewa wa ${original} umeonyeshwa na mwanafunzi katika kikundi`, `Kila mwanafunzi amejibu kazi ya kikundi kuhusu ${original}`, `Kazi iliyopewa kuhusu ${original} imekamilishwa na mwanafunzi`],
        },
        realization: {
            meaning_importance:  [`Mwanafunzi amesema maana na umuhimu wa ${coreSubject} peke yake`, `Kila mwanafunzi amefafanua maana na umuhimu wa ${coreSubject} bila msaada`, `Mwanafunzi mmoja mmoja amebainisha maana na umuhimu wa ${coreSubject} kwa kujitegemea`],
            meaning:             [`${capitalizeFirst(coreSubject)} imefafanuliwa na mwanafunzi peke yake`, `Kila mwanafunzi amesema maana ya ${coreSubject} kwa kujitegemea`, `Mwanafunzi mmoja mmoja amefafanua ${coreSubject} bila msaada`],
            importance:          [`Mwanafunzi ametaja umuhimu wa ${coreSubject} peke yake`, `Kila mwanafunzi amebainisha umuhimu wa ${coreSubject} kwa kujitegemea`, `Mwanafunzi mmoja mmoja ameeleza umuhimu wa ${coreSubject} bila msaada`],
            effects:             [`Mwanafunzi ametaja athara za ${coreSubject} peke yake`, `Kila mwanafunzi amebainisha athara za ${coreSubject} kwa kujitegemea`, `Mwanafunzi mmoja mmoja ameeleza athara za ${coreSubject} bila msaada`],
            causes:              [`Mwanafunzi ametaja sababu za ${coreSubject} peke yake`, `Kila mwanafunzi amebainisha sababu za ${coreSubject} kwa kujitegemea`, `Mwanafunzi mmoja mmoja ametaja sababu za ${coreSubject} bila msaada`],
            advantages:          [`Mwanafunzi ametaja faida za ${coreSubject} peke yake`, `Kila mwanafunzi ameorodhesha faida za ${coreSubject} kwa kujitegemea`, `Mwanafunzi mmoja mmoja amebainisha faida za ${coreSubject} bila msaada`],
            disadvantages:       [`Mwanafunzi ametaja hasara za ${coreSubject} peke yake`, `Kila mwanafunzi amebainisha hasara za ${coreSubject} kwa kujitegemea`, `Mwanafunzi mmoja mmoja ameeleza hasara za ${coreSubject} bila msaada`],
            adv_disadv:          [`Mwanafunzi amelinganisha faida na hasara za ${coreSubject} peke yake`, `Kila mwanafunzi amebainisha faida na hasara za ${coreSubject} kwa kujitegemea`, `Mwanafunzi mmoja mmoja ametaja faida na hasara za ${coreSubject} bila msaada`],
            types:               [`Mwanafunzi ametambua na kutaja aina za ${coreSubject} peke yake`, `Kila mwanafunzi ametaja aina za ${coreSubject} kwa kujitegemea`, `${capitalizeFirst(coreSubject)} imeainishwa katika aina zake na mwanafunzi bila msaada`],
            characteristics:     [`Mwanafunzi ameorodhesha sifa za ${coreSubject} peke yake`, `Kila mwanafunzi ametaja sifa za ${coreSubject} kwa kujitegemea`, `Mwanafunzi mmoja mmoja amebainisha sifa za ${coreSubject} bila msaada`],
            steps:               [`Mwanafunzi ameorodhesha hatua za ${coreSubject} peke yake`, `Kila mwanafunzi amepanga hatua za ${coreSubject} kwa kujitegemea`, `Mwanafunzi mmoja mmoja ametaja hatua za ${coreSubject} bila msaada`],
            examples:            [`Mwanafunzi ametoa mfano wa ${coreSubject} peke yake`, `Kila mwanafunzi ametoa mfano wa ${coreSubject} kwa kujitegemea`, `Mfano wa kweli wa ${coreSubject} umetolewa na mwanafunzi bila msaada`],
            definition:          [`${capitalizeFirst(coreSubject)} imefafanuliwa na mwanafunzi peke yake`, `Kila mwanafunzi ametaja ufafanuzi wa ${coreSubject} kwa kujitegemea`, `Mwanafunzi mmoja mmoja amefafanua ${coreSubject} bila msaada`],
            uses:                [`Mwanafunzi ametaja matumizi ya ${coreSubject} peke yake`, `Kila mwanafunzi amebainisha matumizi ya ${coreSubject} kwa kujitegemea`, `Mwanafunzi mmoja mmoja ameorodhesha matumizi ya ${coreSubject} bila msaada`],
            functions:           [`Mwanafunzi ametaja kazi ya ${coreSubject} peke yake`, `Kila mwanafunzi amebainisha kazi ya ${coreSubject} kwa kujitegemea`, `Mwanafunzi mmoja mmoja ameeleza kazi ya ${coreSubject} bila msaada`],
            components:          [`Mwanafunzi ametambua sehemu ya ${coreSubject} peke yake`, `Kila mwanafunzi ametaja sehemu ya ${coreSubject} kwa kujitegemea`, `Mwanafunzi mmoja mmoja amebainisha sehemu za ${coreSubject} bila msaada`],
            solutions:           [`Mwanafunzi amependekeza suluhu ya ${coreSubject} peke yake`, `Kila mwanafunzi ametoa suluhu ya ${coreSubject} kwa kujitegemea`, `Mwanafunzi mmoja mmoja amependekeza njia za kushughulikia ${coreSubject} bila msaada`],
            generic:             [`Uelewa wa ${original} umeonyeshwa na mwanafunzi peke yake`, `Kila mwanafunzi amejibu kazi binafsi kuhusu ${original}`, `Mwanafunzi mmoja mmoja ameonyesha uelewa wa ${original} kwa kujitegemea`],
        }
    };

    const stageData = byStage[stage] || byStage.development;
    const options = stageData[conceptType] || stageData.generic;
    return pick(options);
}

function buildEnglishRealization(verb, verbIng, activity, stimulus) {
    const { conceptType, coreSubject, original } = activity;
    const items = stimulus.key === 'card'    ? ['card', 'task card', 'activity card']
                : stimulus.key === 'video'   ? ['question strip', 'response card', 'activity card']
                : stimulus.key === 'diagram' ? ['diagram card', 'labelled diagram', 'activity card']
                : stimulus.key === 'chart'   ? ['chart card', 'data card', 'activity card']
                : stimulus.key === 'poster'  ? ['response card', 'activity card', 'question slip']
                : ['picture card', 'activity card', 'picture'];
    const item = pick(items);

    const teacherActions = {
        meaning_importance:  `Ask each student to select a ${item} and state the meaning and importance of ${coreSubject} individually`,
        meaning:             `Ask each student to pick a ${item} and define ${coreSubject} in their own words`,
        importance:          `Ask each student to choose a ${item} and list at least two points on the importance of ${coreSubject}`,
        effects:             `Ask each student to take a ${item} and state the effects of ${coreSubject}`,
        causes:              `Ask each student to select a ${item} and identify the causes of ${coreSubject}`,
        advantages:          `Ask each student to pick a ${item} and state the advantages of ${coreSubject}`,
        disadvantages:       `Ask each student to choose a ${item} and state the disadvantages of ${coreSubject}`,
        adv_disadv:          `Ask each student to take a ${item} and compare the advantages and disadvantages of ${coreSubject}`,
        types:               `Ask each student to select a ${item} and identify the type of ${coreSubject} it represents`,
        characteristics:     `Ask each student to pick a ${item} and list three characteristics of ${coreSubject}`,
        steps:               `Ask each student to choose a ${item} and arrange or describe the steps of ${coreSubject} in order`,
        examples:            `Ask each student to take a ${item} and give a real-life example of ${coreSubject}`,
        definition:          `Ask each student to select a ${item} and write or state a definition of ${coreSubject}`,
        uses:                `Ask each student to pick a ${item} and state at least two uses of ${coreSubject}`,
        functions:           `Ask each student to choose a ${item} and explain one function of ${coreSubject}`,
        components:          `Ask each student to take a ${item} and name and describe a component of ${coreSubject}`,
        solutions:           `Ask each student to select a ${item} and propose a practical solution to ${coreSubject}`,
        generic:             `Ask each student to select a ${item} and ${verb} ${original} independently`,
    };

    const studentActions = {
        meaning_importance:  `Select a ${item} and independently state the meaning and importance of ${coreSubject}`,
        meaning:             `Pick a ${item} and define ${coreSubject} in their own words`,
        importance:          `Choose a ${item} and list the importance of ${coreSubject} independently`,
        effects:             `Take a ${item} and state the effects of ${coreSubject} independently`,
        causes:              `Select a ${item} and identify the causes of ${coreSubject} on their own`,
        advantages:          `Pick a ${item} and state the advantages of ${coreSubject} independently`,
        disadvantages:       `Choose a ${item} and state the disadvantages of ${coreSubject} on their own`,
        adv_disadv:          `Take a ${item} and compare the advantages and disadvantages of ${coreSubject} independently`,
        types:               `Select a ${item} and identify which type of ${coreSubject} it shows`,
        characteristics:     `Pick a ${item} and list characteristics of ${coreSubject} on their own`,
        steps:               `Choose a ${item} and arrange or describe the steps of ${coreSubject} independently`,
        examples:            `Take a ${item} and give a real-life example of ${coreSubject} on their own`,
        definition:          `Select a ${item} and state a definition of ${coreSubject} independently`,
        uses:                `Pick a ${item} and state uses of ${coreSubject} on their own`,
        functions:           `Choose a ${item} and explain a function of ${coreSubject} independently`,
        components:          `Take a ${item} and name a component of ${coreSubject} on their own`,
        solutions:           `Select a ${item} and propose a solution to ${coreSubject} independently`,
        generic:             `Select a ${item} and ${verbIng} ${original} on their own`,
    };

    const teacher    = teacherActions[conceptType] || teacherActions.generic;
    const student    = studentActions[conceptType] || studentActions.generic;
    const assessment = buildEnglishAssessment(conceptType, coreSubject, original, 'realization');
    return { teacher, student, assessment };
}

function buildSwahiliRealization(verb, activity, stimulus) {
    const { conceptType, coreSubject, original } = activity;
    const verbBase = verb.startsWith('ku') ? verb : 'ku' + verb;
    const items = stimulus.key === 'card'    ? ['kadi', 'kadi ya kazi', 'kadi ya shughuli']
                : stimulus.key === 'video'   ? ['karatasi ya swali', 'kadi ya majibu', 'kadi ya shughuli']
                : stimulus.key === 'diagram' ? ['kadi ya mchoro', 'mchoro ulioandikwa', 'kadi ya shughuli']
                : stimulus.key === 'chart'   ? ['kadi ya chati', 'kadi ya data', 'kadi ya shughuli']
                : stimulus.key === 'poster'  ? ['kadi ya majibu', 'kadi ya shughuli', 'karatasi ya swali']
                : ['kadi ya picha', 'kadi ya shughuli', 'picha'];
    const item = pick(items);

    const teacherActions = {
        meaning_importance:  `Kuuliza kila mwanafunzi kuchagua ${item} na kusema maana na umuhimu wa ${coreSubject} peke yake`,
        meaning:             `Kuuliza kila mwanafunzi kuchukua ${item} na kueleza maana ya ${coreSubject} kwa maneno yake mwenyewe`,
        importance:          `Kuuliza kila mwanafunzi kuchagua ${item} na kutaja mambo mawili kuhusu umuhimu wa ${coreSubject} peke yake`,
        effects:             `Kuuliza kila mwanafunzi kuchukua ${item} na kutaja athara za ${coreSubject} kwa kujitegemea`,
        causes:              `Kuuliza kila mwanafunzi kuchagua ${item} na kutambua sababu za ${coreSubject} peke yake`,
        advantages:          `Kuuliza kila mwanafunzi kuchukua ${item} na kutaja faida za ${coreSubject} kwa kujitegemea`,
        disadvantages:       `Kuuliza kila mwanafunzi kuchagua ${item} na kutaja hasara za ${coreSubject} peke yake`,
        adv_disadv:          `Kuuliza kila mwanafunzi kuchukua ${item} na kulinganisha faida na hasara za ${coreSubject} kwa kujitegemea`,
        types:               `Kuuliza kila mwanafunzi kuchagua ${item} na kutambua ni aina gani ya ${coreSubject} inayowakilishwa peke yake`,
        characteristics:     `Kuuliza kila mwanafunzi kuchukua ${item} na kutaja sifa tatu za ${coreSubject} kwa kujitegemea`,
        steps:               `Kuuliza kila mwanafunzi kuchagua ${item} na kupanga au kueleza hatua za ${coreSubject} kwa mpangilio peke yake`,
        examples:            `Kuuliza kila mwanafunzi kuchukua ${item} na kutoa mfano wa kweli wa ${coreSubject} kwa kujitegemea`,
        definition:          `Kuuliza kila mwanafunzi kuchagua ${item} na kuandika au kusema ufafanuzi wa ${coreSubject} peke yake`,
        uses:                `Kuuliza kila mwanafunzi kuchukua ${item} na kutaja matumizi mawili ya ${coreSubject} kwa kujitegemea`,
        functions:           `Kuuliza kila mwanafunzi kuchagua ${item} na kueleza kazi moja ya ${coreSubject} peke yake`,
        components:          `Kuuliza kila mwanafunzi kuchukua ${item} na kutaja na kueleza sehemu moja ya ${coreSubject} kwa kujitegemea`,
        solutions:           `Kuuliza kila mwanafunzi kuchagua ${item} na kupendekeza suluhu ya vitendo ya ${coreSubject} peke yake`,
        generic:             `Kuuliza kila mwanafunzi kuchagua ${item} na ${verbBase} ${original} kwa kujitegemea`,
    };

    const studentActions = {
        meaning_importance:  `Kuchagua ${item} na kusema kwa kujitegemea maana na umuhimu wa ${coreSubject}`,
        meaning:             `Kuchukua ${item} na kueleza maana ya ${coreSubject} kwa maneno yake mwenyewe peke yake`,
        importance:          `Kuchagua ${item} na kutaja umuhimu wa ${coreSubject} kwa kujitegemea`,
        effects:             `Kuchukua ${item} na kutaja athara za ${coreSubject} peke yake`,
        causes:              `Kuchagua ${item} na kutambua sababu za ${coreSubject} kwa kujitegemea`,
        advantages:          `Kuchukua ${item} na kutaja faida za ${coreSubject} peke yake`,
        disadvantages:       `Kuchagua ${item} na kutaja hasara za ${coreSubject} kwa kujitegemea`,
        adv_disadv:          `Kuchukua ${item} na kulinganisha faida na hasara za ${coreSubject} peke yake`,
        types:               `Kuchagua ${item} na kutambua aina ya ${coreSubject} inayoonyeshwa kwa kujitegemea`,
        characteristics:     `Kuchukua ${item} na kutaja sifa za ${coreSubject} peke yake`,
        steps:               `Kuchagua ${item} na kupanga au kueleza hatua za ${coreSubject} kwa kujitegemea`,
        examples:            `Kuchukua ${item} na kutoa mfano wa kweli wa ${coreSubject} peke yake`,
        definition:          `Kuchagua ${item} na kusema ufafanuzi wa ${coreSubject} kwa kujitegemea`,
        uses:                `Kuchukua ${item} na kutaja matumizi ya ${coreSubject} peke yake`,
        functions:           `Kuchagua ${item} na kueleza kazi ya ${coreSubject} kwa kujitegemea`,
        components:          `Kuchukua ${item} na kutaja sehemu ya ${coreSubject} peke yake`,
        solutions:           `Kuchagua ${item} na kupendekeza suluhu ya ${coreSubject} kwa kujitegemea`,
        generic:             `Kuchagua ${item} na ${verbBase} ${original} peke yake`,
    };

    const teacher    = teacherActions[conceptType] || teacherActions.generic;
    const student    = studentActions[conceptType] || studentActions.generic;
    const assessment = buildSwahiliAssessment(conceptType, coreSubject, original, 'realization');
    return { teacher, student, assessment };
}


function generateEnglishPhrases(verb, specificLesson, isContinue, tlmString, previousLesson) {
    const verbIng  = getVerbForm(verb, 'gerund',  'english') || (verb + 'ing');
    const verbBase = verb.toLowerCase();

    const activity  = parseActivity(specificLesson);
    // Pass conceptType and specificLesson so stimulus gets a contextual label
    const stimulus  = getStimulusFromTLM(tlmString, activity.conceptType, specificLesson, false);
    const questions = buildEnglishQuestions(activity, stimulus);
    const groupTask = buildEnglishGroupTasks(verbBase, activity);

    // ── Separate context for the intro when continuing, so the intro
    //    talks about what was covered previously — not today's new topic ──
    let introActivity = activity;
    let introStimulus  = stimulus;
    if (isContinue) {
        const prevText = (previousLesson && previousLesson.trim() !== '')
            ? previousLesson.trim()
            : 'the previous lesson';
        introActivity = parseActivity(prevText);
        introStimulus = getStimulusFromTLM(tlmString, introActivity.conceptType, prevText, false);
    }

    const phrases = {};

   
    if (isContinue) {
        const introTeacher = [
            `${capitalizeFirst(introStimulus.verb)} ${introStimulus.label} from the previous lesson and ask students questions to check their understanding of ${introActivity.original}`,
            `Show resources related to ${introActivity.original} used in the previous lesson and pose review questions to the class`,
            `Present ${introStimulus.label} from the last lesson and facilitate a brief recall discussion on ${introActivity.original}`,
            `Display ${introStimulus.label} from the previous period and ask guiding questions to consolidate students' understanding of ${introActivity.original}`,
            `Use ${introStimulus.label} from the previous lesson to prompt students to recall what they learned about ${introActivity.original}`,
        ];
        const introStudent = [
            `Observe the ${introStimulus.baseLabel} and respond to questions about ${introActivity.original} from the previous lesson`,
            `Examine the resources and answer review questions on ${introActivity.original}`,
            `Participate in a recall discussion about ${introActivity.original} based on the previous lesson`,
            `Engage with the materials and answer questions based on prior knowledge of ${introActivity.original}`,
            `Review the ${introStimulus.baseLabel} and share what they remember about ${introActivity.original}`,
        ];
        phrases.intro1 = pick(introTeacher);
        phrases.intro2 = pick(introStudent);
        phrases.intro3 = pick([
            `Review questions about ${introActivity.original} from the previous lesson are correctly answered`,
            `Each student correctly answers recall questions about ${introActivity.original}`,
            `Prior knowledge of ${introActivity.original} is accurately recalled`,
        ]);
    } else {
        const introTeacher = [
            `${capitalizeFirst(stimulus.verb)} ${stimulus.label} and ask students questions about what they observe`,
            `${capitalizeFirst(stimulus.verb)} ${stimulus.label} to stimulate prior knowledge and ask students what they already know`,
            `${capitalizeFirst(stimulus.verb)} ${stimulus.label} and invite students to share their observations and existing knowledge`,
            `Use ${stimulus.label} to prompt students' curiosity and pose introductory questions`,
            `${capitalizeFirst(stimulus.verb)} ${stimulus.label} and guide students with questions to activate prior knowledge`,
        ];
        const introStudent = [
            `Observe the ${stimulus.baseLabel} and respond to introductory questions about ${activity.original}`,
            `Examine the ${stimulus.baseLabel} and share what they already know about ${activity.original}`,
            `Study the ${stimulus.baseLabel} and answer questions to connect their prior knowledge to ${activity.original}`,
            `Look at the ${stimulus.baseLabel} and participate in introductory discussion about ${activity.original}`,
            `Engage with the ${stimulus.baseLabel} and respond to the teacher's questions about ${activity.original}`,
        ];
        phrases.intro1 = pick(introTeacher);
        phrases.intro2 = pick(introStudent);
        phrases.intro3 = pick([
            `Introductory questions about ${activity.original} are answered correctly`,
            `Each student's prior knowledge of ${activity.original} is activated`,
            `Students correctly respond to introductory questions related to ${activity.original}`,
        ]);
    }

    // ── COMPETENCE DEVELOPMENT ──
    const devTeacher = [
        `${capitalizeFirst(stimulus.verb)} ${stimulus.label} and use the following guiding questions to develop understanding:\n${questions}`,
        `Use ${stimulus.label} to introduce and explain ${activity.original}, guiding students with the following questions:\n${questions}`,
        `${capitalizeFirst(stimulus.verb)} ${stimulus.label} and facilitate a guided discussion using the following questions:\n${questions}`,
        `${capitalizeFirst(stimulus.verb)} ${stimulus.label} and help students build understanding through these questions:\n${questions}`,
        `Guide students using ${stimulus.label} and the following questions to explore ${activity.original}:\n${questions}`,
    ];
    const devStudent = [
        `Study the ${stimulus.baseLabel} and answer the guiding questions about ${activity.original}`,
        `Observe the ${stimulus.baseLabel} and respond to questions on ${activity.original}`,
        `Engage with the ${stimulus.baseLabel} and provide answers to the teacher's questions about ${activity.original}`,
        `Examine the ${stimulus.baseLabel} and participate in the guided discussion about ${activity.original}`,
        `Use the ${stimulus.baseLabel} to help answer the questions and build understanding of ${activity.original}`,
    ];
    phrases.new1 = pick(devTeacher);
    phrases.new2 = pick(devStudent);
    phrases.new3 = buildEnglishAssessment(activity.conceptType, activity.coreSubject, activity.original, 'development');

    // ── DESIGN (GROUP WORK) ──
    const designTeacher = [
        `Organise students in groups and give the following instructions: ${groupTask}. Use probing questions to guide each group`,
        `Divide students into small groups and assign the following tasks: ${groupTask}`,
        `Instruct students to work in groups on the following tasks: ${groupTask}. Move around to provide support and guidance`,
        `Arrange students into groups and guide them with the following tasks: ${groupTask}`,
        `Put students into groups and facilitate group work using the tasks: ${groupTask}`,
    ];
    const designStudent = [
        `Work in groups on the assigned tasks and share their findings with the class`,
        `Collaborate in groups to complete the tasks and present their results to the class`,
        `Discuss in groups and work on the given instructions, then report back to the class`,
        `Complete the group tasks and summarise findings for the class`,
        `Work cooperatively on the assigned tasks and share conclusions with the rest of the class`,
    ];
    phrases.rein1 = pick(designTeacher);
    phrases.rein2 = pick(designStudent);
    phrases.rein3 = buildEnglishAssessment(activity.conceptType, activity.coreSubject, activity.original, 'design');

    // ── REALIZATION (INDIVIDUAL) ──
    const ra = buildEnglishRealization(verbBase, verbIng, activity, stimulus);
    phrases.reflect1 = ra.teacher;
    phrases.reflect2 = ra.student;
    phrases.reflect3 = ra.assessment;

    return axpAdaptPhrases(phrases, false, { activity: activity, stimulus: stimulus, isContinue: isContinue, previousLesson: previousLesson });
}


function generateSwahiliPhrases(verb, specificLesson, isContinue, tlmString, previousLesson) {
    const verbBase = verb.startsWith('ku') ? verb : 'ku' + verb;

    const activity  = parseActivity(specificLesson);
    const stimulus  = getStimulusFromTLM(tlmString, activity.conceptType, specificLesson, true);
    const questions = buildSwahiliQuestions(activity, stimulus);
    const groupTask = buildSwahiliGroupTasks(verbBase, activity);

    // ── Separate context for the intro when continuing ──
    let introActivity = activity;
    let introStimulus  = stimulus;
    if (isContinue) {
        const prevText = (previousLesson && previousLesson.trim() !== '')
            ? previousLesson.trim()
            : 'somo lililopita';
        introActivity = parseActivity(prevText);
        introStimulus = getStimulusFromTLM(tlmString, introActivity.conceptType, prevText, true);
    }

    const phrases = {};

    // ── INTRODUCTION ──
    if (isContinue) {
        const introTeacher = [
            `${capitalizeFirst(introStimulus.verb)} ${introStimulus.label} kutoka somo lililopita na kuuliza maswali ya ukaguzi wa uelewa wa ${introActivity.original}`,
            `Kuwasilisha vifaa vinavyohusiana na ${introActivity.original} vilivyotumika somo la awali na kuwauliza wanafunzi maswali ya marudio`,
            `Kutumia ${introStimulus.label} kutoka kipindi kilichopita na kuwauliza wanafunzi maswali ya kukagua uelewa wa ${introActivity.original}`,
            `Kuonyesha ${introStimulus.label} kutoka somo lililotangulia na kufanya majadiliano ya marudio ya ${introActivity.original}`,
            `Kutumia ${introStimulus.label} kutoka somo lililopita kuwakumbusha wanafunzi walichojifunza kuhusu ${introActivity.original}`,
        ];
        const introStudent = [
            `Kujibu maswali ya marudio kuhusu ${introActivity.original} kwa kutazama ${introStimulus.baseLabel} za somo lililopita`,
            `Kuchunguza vifaa na kujibu maswali ya marudio kuhusu ${introActivity.original}`,
            `Kushiriki katika majadiliano ya ukumbusho kuhusu ${introActivity.original} kutokana na somo lililotangulia`,
            `Kujishughulisha na nyenzo na kujibu maswali kwa kutumia maarifa yao ya awali ya ${introActivity.original}`,
            `Kupitia ${introStimulus.baseLabel} na kushiriki wanachokikumbuka kuhusu ${introActivity.original}`,
        ];
        phrases.intro1 = pick(introTeacher);
        phrases.intro2 = pick(introStudent);
        phrases.intro3 = pick([
            `Maswali ya marudio kuhusu ${introActivity.original} yamejibiwa kwa usahihi`,
            `Kila mwanafunzi anajibu kwa usahihi maswali ya marudio ya ${introActivity.original}`,
            `Maarifa ya awali ya ${introActivity.original} yamerejeshwa kwa usahihi`,
        ]);
    } else {
        const introTeacher = [
            `${capitalizeFirst(stimulus.verb)} ${stimulus.label} na kuuliza maswali kuhusu wanachokiona`,
            `${capitalizeFirst(stimulus.verb)} ${stimulus.label} kuchochea maarifa ya awali ya wanafunzi kuhusu ${activity.original}`,
            `${capitalizeFirst(stimulus.verb)} ${stimulus.label} na kuwaalika wanafunzi kushiriki kwa kueleza wanachokijua`,
            `Kutumia ${stimulus.label} kuwasha udadisi wa wanafunzi na kuuliza maswali ya utangulizi`,
            `${capitalizeFirst(stimulus.verb)} ${stimulus.label} na kuwaongoza wanafunzi kwa maswali ya kuamsha maarifa ya awali`,
        ];
        const introStudent = [
            `Kuangalia ${stimulus.baseLabel} na kujibu maswali ya utangulizi kuhusu ${activity.original}`,
            `Kuchunguza ${stimulus.baseLabel} na kushiriki kile wanachokijua kuhusu ${activity.original}`,
            `Kutazama ${stimulus.baseLabel} na kujibu maswali ya kuunganisha maarifa ya awali na ${activity.original}`,
            `Kujishughulisha na ${stimulus.baseLabel} na kushiriki katika majadiliano ya utangulizi ya ${activity.original}`,
            `Kuchunguza ${stimulus.baseLabel} na kujibu maswali ya mwalimu kuhusu ${activity.original}`,
        ];
        phrases.intro1 = pick(introTeacher);
        phrases.intro2 = pick(introStudent);
        phrases.intro3 = pick([
            `Maswali ya utangulizi kuhusu ${activity.original} yamejibiwa kwa usahihi`,
            `Maarifa ya awali ya kila mwanafunzi kuhusu ${activity.original} yamewashwa`,
            `Wanafunzi wanajibu kwa usahihi maswali ya utangulizi ya ${activity.original}`,
        ]);
    }

    // ── COMPETENCE DEVELOPMENT ──
    const devTeacher = [
        `${capitalizeFirst(stimulus.verb)} ${stimulus.label} na kutumia maswali ya mwongozo yafuatayo kukuza uelewa:\n${questions}`,
        `Kutumia ${stimulus.label} kuanzisha na kueleza ${activity.original}, ukiwaongoza wanafunzi kwa maswali haya:\n${questions}`,
        `${capitalizeFirst(stimulus.verb)} ${stimulus.label} na kuwezesha majadiliano ya mwongozo kwa kutumia maswali haya:\n${questions}`,
        `${capitalizeFirst(stimulus.verb)} ${stimulus.label} na kuwasaidia wanafunzi kujenga uelewa kupitia maswali haya:\n${questions}`,
        `Kuwaongoza wanafunzi kwa kutumia ${stimulus.label} na maswali yafuatayo kuchunguza ${activity.original}:\n${questions}`,
    ];
    const devStudent = [
        `Kusoma ${stimulus.baseLabel} na kujibu maswali ya mwongozo kuhusu ${activity.original}`,
        `Kuangalia ${stimulus.baseLabel} na kujibu maswali ya ${activity.original}`,
        `Kujishughulisha na ${stimulus.baseLabel} na kutoa majibu ya maswali ya mwalimu kuhusu ${activity.original}`,
        `Kuchunguza ${stimulus.baseLabel} na kushiriki katika majadiliano ya mwongozo kuhusu ${activity.original}`,
        `Kutumia ${stimulus.baseLabel} kusaidia kujibu maswali na kujenga uelewa wa ${activity.original}`,
    ];
    phrases.new1 = pick(devTeacher);
    phrases.new2 = pick(devStudent);
    phrases.new3 = buildSwahiliAssessment(activity.conceptType, activity.coreSubject, activity.original, 'development');

    // ── DESIGN (GROUP WORK) ──
    const designTeacher = [
        `Kupanga wanafunzi katika vikundi na kutoa maelekezo yafuatayo: ${groupTask}. Tumia maswali ya uchunguzi kuwaongoza`,
        `Kuwagawanya wanafunzi katika vikundi vidogo na kuwapa kazi hizi: ${groupTask}`,
        `Kuwataka wanafunzi wafanye kazi katika vikundi kwa kazi hizi: ${groupTask}. Tembea kati yao kutoa mwongozo na msaada`,
        `Kupanga wanafunzi katika vikundi na kuwaongoza kwa kazi hizi: ${groupTask}`,
        `Kuweka wanafunzi katika vikundi na kuwezesha kazi ya kikundi kwa kutumia kazi hizi: ${groupTask}`,
    ];
    const designStudent = [
        `Kufanya kazi katika vikundi kuhusu kazi zilizopewa na kushirikiana matokeo yao na darasa`,
        `Kushirikiana katika vikundi kukamilisha kazi na kuwasilisha matokeo yao kwa darasa`,
        `Kujadili na kufanya kazi ya kikundi kulingana na maelekezo, kisha kuripoti kwa darasa`,
        `Kukamilisha kazi za kikundi na kufupisha matokeo kwa ajili ya darasa`,
        `Kufanya kazi kwa ushirikiano kuhusu kazi zilizopewa na kushiriki hitimisho na darasa lote`,
    ];
    phrases.rein1 = pick(designTeacher);
    phrases.rein2 = pick(designStudent);
    phrases.rein3 = buildSwahiliAssessment(activity.conceptType, activity.coreSubject, activity.original, 'design');

    // ── REALIZATION ──
    const ra = buildSwahiliRealization(verbBase, activity, stimulus);
    phrases.reflect1 = ra.teacher;
    phrases.reflect2 = ra.student;
    phrases.reflect3 = ra.assessment;

    return axpAdaptPhrases(phrases, true, { activity: activity, stimulus: stimulus, isContinue: isContinue, previousLesson: previousLesson });
}


var userSelectedYear = null;

function applyUserYear(formattedRef, newYear) {
    if (!newYear || newYear === '') return formattedRef;
    return formattedRef.replace(/\((\d{4})\)/, '(' + newYear + ')');
}

function formatReference(ref, subject) {
    if (!ref || ref.trim() === '') return '';
    const originalRef = ref.trim();
    ref = originalRef;
    const allowedSubjects = [
        "kiswahili","elimu ya dini ya kiislam","fasihi ya kiswahili",
        "historia ya tanzania na maadili","stadi za awali za lugha",
        "kuhesabu,sayansi na tehama","stadi za awali za maisha",
        "afya na mazingira","kusoma","sanaa bunifu na michezo",
        "naipenda nchi yangu tanzania","kuandika","kuhesabu",
        "utamaduni, sanaa na michezo","sanaa na michezo",
        "jiografia na mazingira","hisabati","sayansi","maarifa ya jamii","stadi za kazi","uraia na maadili"
    ];
    const isSwahili = subject && allowedSubjects.includes(subject.toLowerCase());
    ref = isSwahili
        ? ref.replace(/\bTIE\b/gi,'Taasisi ya Elimu Tanzania').replace(/\bTET\b/gi,'Taasisi ya Elimu Tanzania')
        : ref.replace(/\bTIE\b/gi,'Tanzania Institute of Education').replace(/\bTET\b/gi,'Tanzania Institute of Education');

    ref = ref.replace(/([A-Z][a-z\s]+(?:,\s*[A-Z][a-z\s]+)?)\s*:\s*(?=[A-Z])/g, '');
    var periodIndex = ref.indexOf('.');
    if (periodIndex === -1) return ref.trim();
    var authorPart = ref.substring(0, periodIndex).trim();
    var restPart   = ref.substring(periodIndex + 1).trim();
    var yearMatch  = restPart.match(/^\((\d{4})\)\.?\s*/);
    var yearPart   = '';
    var afterYear  = restPart;
    if (yearMatch) {
        yearPart  = '(' + yearMatch[1] + ')';
        afterYear = restPart.substring(yearMatch[0].length).trim().replace(/^[,.\s]+/, '').trim();
    }
    const publishersToRemove = [
        'Taasisi ya Elimu Tanzania','taasisi ya elimu tanzania','TAASISI YA ELIMU TANZANIA',
        'Tanzania Institute of Education','tanzania institute of education','TANZANIA INSTITUTE OF EDUCATION'
    ];
    publishersToRemove.forEach(pub => {
        [new RegExp(',\\s*' + pub.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '\\.?$','gi'),
         new RegExp('\\.\\s*' + pub.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '\\.?$','gi')
        ].forEach(p => { afterYear = afterYear.replace(p,''); });
    });
    var titlePart = afterYear.trim();
    while (titlePart.endsWith('.') || titlePart.endsWith(',')) titlePart = titlePart.slice(0,-1).trim();
    titlePart = sentenceCaseWithProperNouns(titlePart, originalRef, subject);
    var educationLevel = getEducationLevel(originalRef, subject);
    var formatted = authorPart + '.';
    if (yearPart)  formatted += ' ' + yearPart + '.';
    if (titlePart) {
        var finalTitle = titlePart;
        if (educationLevel) finalTitle = insertEducationLevel(titlePart, educationLevel, subject);
        formatted += ' <i>' + finalTitle + '</i>.';
    }
    formatted += ' ' + authorPart + '.';
    return formatted;
}

function getEducationLevel(ref, subject) {
    const allowedSubjects = ["kiswahili","elimu ya dini ya kiislam","fasihi ya kiswahili","historia ya tanzania na maadili","stadi za awali za lugha","kuhesabu,sayansi na tehama","stadi za awali za maisha","afya na mazingira","kusoma","sanaa bunifu na michezo","naipenda nchi yangu tanzania","kuandika","kuhesabu","utamaduni, sanaa na michezo","sanaa na michezo","jiografia na mazingira","hisabati","sayansi","maarifa ya jamii","stadi za kazi","uraia na maadili"];
    const isSwahili = subject && allowedSubjects.includes(subject.toLowerCase());
    const rl = ref.toLowerCase();
    const primarySw  = ['darasa la awali','darasa la kwanza','darasa la pili','darasa la tatu','darasa la nne','darasa la tano','darasa la sita','darasa la saba'];
    const primaryEn  = ['standard i','standard ii','standard iii','standard iv','standard v','standard vi','standard vii','standard 1','standard 2','standard 3','standard 4','standard 5','standard 6','standard 7','pre-primary','pre primary','class i','class ii','class iii'];
    const secSw      = ['kidato cha kwanza','kidato cha pili','kidato cha tatu','kidato cha nne'];
    const secEn      = ['form one','form two','form three','form four','form 1','form 2','form 3','form 4','form i','form ii','form iii','form iv'];
    const advSw      = ['kidato cha tano','kidato cha sita'];
    const advEn      = ['form five','form six','form 5','form 6','form v','form vi','advanced level','a-level'];
    if (advSw.some(p=>rl.includes(p))||advEn.some(p=>rl.includes(p))) return isSwahili?'kwa shule za sekondari':'for advanced secondary schools';
    if (secSw.some(p=>rl.includes(p))||secEn.some(p=>rl.includes(p))) return isSwahili?'kwa shule za sekondari':'for secondary schools';
    if (primarySw.some(p=>rl.includes(p))||primaryEn.some(p=>rl.includes(p))) return isSwahili?'kwa shule za msingi':'for primary schools';
    return '';
}

function insertEducationLevel(title, educationLevel, subject) {
    const allowedSubjects = ["kiswahili","elimu ya dini ya kiislam","fasihi ya kiswahili","historia ya tanzania na maadili","stadi za awali za lugha","kuhesabu,sayansi na tehama","stadi za awali za maisha","afya na mazingira","kusoma","sanaa bunifu na michezo","naipenda nchi yangu tanzania","kuandika","kuhesabu","utamaduni, sanaa na michezo","sanaa na michezo","jiografia na mazingira","hisabati","sayansi","maarifa ya jamii","stadi za kazi","uraia na maadili"];
    const isSwahili = subject && allowedSubjects.includes(subject.toLowerCase());
    const tl = title.toLowerCase();
    const phrases = ['kwa shule za msingi','kwa shule za sekondari','kwa shule za sekondari ya juu','for primary schools','for secondary schools','for advanced secondary schools'];
    if (phrases.some(p=>tl.includes(p))) return title;
    if (isSwahili) {
        const pat = /(kitabu cha mwanafunzi)\s+(darasa la|kidato cha)/i;
        if (pat.test(title)) return title.replace(pat,`$1 ${educationLevel}, $2`);
    } else {
        const pat = /(pupil'?s book|student'?s book)\s+(standard|form)/i;
        if (pat.test(title)) return title.replace(pat,`$1 ${educationLevel}, $2`);
    }
    return title.replace(/(darasa la|kidato cha|standard |form )/i,`${educationLevel}, $1`);
}

function sentenceCaseWithProperNouns(str, originalRef, subject) {
    if (!str) return str;
    const detectedProperNouns = new Set();
    if (originalRef) {
        const hasLower = /[a-z]/.test(originalRef);
        const hasUpper = /[A-Z]/.test(originalRef);
        const notAllCaps = !/^[^a-z]*$/.test(originalRef.replace(/[^a-zA-Z]/g,''));
        if (hasLower && hasUpper && notAllCaps) {
            const words = originalRef.match(/\b[A-Z][a-z]+\b/g);
            if (words) words.forEach(w => {
                if (new RegExp('(?<![.!?:]\\s)\\b' + w + '\\b').test(originalRef)) detectedProperNouns.add(w);
            });
        }
    }
    const intelligentNouns = buildIntelligentNounList(str, subject);
    const properNouns = new Set([...detectedProperNouns, ...intelligentNouns]);
    str = str.toLowerCase().charAt(0).toUpperCase() + str.toLowerCase().slice(1);
    str = str.replace(/([.!?]\s+)([a-z])/g,(m,p,l)=>p+l.toUpperCase());
    str = str.replace(/\s*:\s*/g,': ').replace(/:\s*([a-z])/g,(m,l)=>': '+l.toUpperCase());
    properNouns.forEach(w => { str = str.replace(new RegExp('\\b'+w.toLowerCase()+'\\b','gi'),w); });
    return str;
}

function buildIntelligentNounList(str, subject) {
    const nouns = new Set();
    ['Tanzania','Afrika','Africa','Zanzibar','Pemba','Allah','Allaah','Mungu','Yesu','Kristo','English','Swahili','Kiswahili'].forEach(w => {
        if (new RegExp('\\b'+w+'\\b','i').test(str)) nouns.add(w);
    });
    const allowedSubjects = ["kiswahili","elimu ya dini ya kiislam","fasihi ya kiswahili","historia ya tanzania na maadili","stadi za awali za lugha","kuhesabu,sayansi na tehama","stadi za awali za maisha","afya na mazingira","kusoma","sanaa bunifu na michezo","naipenda nchi yangu tanzania","kuandika","kuhesabu","utamaduni, sanaa na michezo","sanaa na michezo","jiografia na mazingira","hisabati","sayansi","maarifa ya jamii","stadi za kazi","uraia na maadili"];
    const isSwahili = subject && allowedSubjects.includes(subject.toLowerCase());
    const kws = isSwahili
        ? ['Kiislamu','Kiislam','Uislamu','Islam','Kikristo','Ukristo','Kiyahudi','Uyahudi']
        : ['Mathematics','Math','Physics','Chemistry','Biology','Geography','History','Civics','English','Literature','Science','Economics','Commerce','Accounting','Islamic','Christian','Religious'];
    kws.forEach(w => { if (new RegExp('\\b'+w+'\\b','i').test(str)) nouns.add(w); });
    return nouns;
}


function applyTiming(period, lessonTime, introCont, newKnow, reinCont, refleCont, isSwahili) {
    function formatTime(startHour, startMinutes, durationMinutes) {
        var acaTime    = parseInt(startMinutes) + durationMinutes;
        var endMinutes = acaTime % 60;
        var endHour    = parseInt(startHour) + Math.floor(acaTime / 60);
        if (isSwahili) {
            var ss = convertToSwahiliTime(parseInt(startHour), parseInt(startMinutes));
            var se = convertToSwahiliTime(endHour, endMinutes);
            return ss.formattedHour + " : " + ss.formattedMinutes + " " + ss.session + " - " + se.formattedHour + " : " + se.formattedMinutes + " " + se.session;
        } else {
            var fsh = parseInt(startHour).toString().padStart(2,'0');
            var feh = endHour.toString().padStart(2,'0');
            var fsm = parseInt(startMinutes).toString().padStart(2,'0');
            var fem = endMinutes.toString().padStart(2,'0');
            return fsh+" : "+fsm+(parseInt(startHour)>=12?" P.M":" A.M")+" - "+feh+" : "+fem+(endHour>=12?" P.M":" A.M");
        }
    }
    var startHour    = document.getElementById("hourCodes").value;
    var startMinutes = document.getElementById("minCodes").value;
    if (period === "custom_duration") {
        var cm = parseInt(document.getElementById("customMinutes")&&document.getElementById("customMinutes").value)||0;
        if (cm>0) {
            lessonTime.innerText = formatTime(startHour,startMinutes,cm);
            var intro=Math.ceil(cm*0.125),dev=Math.ceil(cm*0.50),des=Math.ceil(cm*0.1875),real=cm-intro-dev-des;
            introCont.innerText=intro; newKnow.innerText=dev; reinCont.innerText=des; refleCont.innerText=real;
        }
    } else if (period === "custom_distribution") {
        var intro   = parseInt((document.getElementById("introMinutes")||{}).value)||0;
        var dev     = parseInt((document.getElementById("developmentMinutes")||{}).value)||0;
        var des     = parseInt((document.getElementById("designMinutes")||{}).value)||0;
        var real    = parseInt((document.getElementById("realizationMinutes")||{}).value)||0;
        var distType = (document.getElementById("distributionType")||{}).value;
        var total   = distType==='single'?40:distType==='double'?80:parseInt((document.getElementById("customTotalMinutes")||{}).value)||0;
        lessonTime.innerText=formatTime(startHour,startMinutes,total);
        introCont.innerText=intro; newKnow.innerText=dev; reinCont.innerText=des; refleCont.innerText=real;
    } else if (period === "2") {
        lessonTime.innerText=formatTime(startHour,startMinutes,80);
        introCont.innerText="10"; newKnow.innerText="40"; reinCont.innerText="15"; refleCont.innerText="15";
    } else if (period === "1") {
        lessonTime.innerText=formatTime(startHour,startMinutes,40);
        introCont.innerText="5"; newKnow.innerText="15"; reinCont.innerText="10"; refleCont.innerText="10";
    } else {
        lessonTime.innerText=" ";
    }
}


function updateContent() {
    axpSeedWording();
    window.AXP_LEVEL = axpLevelOf((document.getElementById('classes') || {}).value);
    const isBaseline = document.getElementById('subject').value === 'Baseline';
    function getValue(fieldId) {
        if (isBaseline) {
            const t = document.querySelector(`input[type="text"][name="${fieldId}"]`);
            if (t && t.style.display !== 'none') return t.value;
        }
        return document.getElementById(fieldId).value;
    }

    const topicLesson   = getValue('topicLesson');
    const compLesson    = getValue('compLesson');
    const mainlesson    = getValue('mainlesson');
    const refLesson     = getValue('refLesson');
    const wrdImp1       = getValue('wrdImp1');
    const wrdImp2       = getValue('wrdImp2');

    var period         = document.getElementById("period").value;
    var subject        = document.getElementById("subject").value;
    var school         = document.getElementById("school").value;
    var name           = document.getElementById("teacherName").value;
    var subClasses     = document.getElementById("classes").value;
    var subStreams     = document.getElementById("streams").value;
    var subDate        = document.getElementById("date").value;
    var specificLesson = document.getElementById("specificLesson").value;
    var previousLessonEl = document.getElementById("previousLesson");
    var previousLesson   = previousLessonEl ? previousLessonEl.value : "";
    var tlmaterials    = document.getElementById("tlmaterials").value;
    var studentsOption = document.getElementById("studentsOption").value;
    var femaleReg      = studentsOption === "set" ? document.getElementById("femaleReg").value : "";
    var maleReg        = studentsOption === "set" ? document.getElementById("maleReg").value : "";
    var femalePres     = studentsOption === "set" ? document.getElementById("femalePres").value : "";
    var malePres       = studentsOption === "set" ? document.getElementById("malePres").value : "";
    var remarkOption   = document.getElementById("remarkOption").value;
    var customRemark   = document.getElementById("customRemark").value;

    var schoolNm      = document.getElementById("schoolNm");
    var teacherName   = document.getElementById("lessonTch");
    var lessonSubject = document.getElementById("lessonSbjt");
    var lessonTime    = document.getElementById("lessonTm");
    var studentClass  = document.getElementById("lessonClss");
    var streams       = document.getElementById("lessonStrm");
    var lessonDate    = document.getElementById("lessonDt");
    var sylbsCmp      = document.getElementById("sylbsCmp");
    var sylbsMnObj    = document.getElementById("sylbsMnObj");
    var sylbsSbtp     = document.getElementById("sylbsSbtp");
    var sylbsSpobj    = document.getElementById("sylbsSpobj");
    var sylbsMts      = document.getElementById("sylbsMts");
    var sylbsRfrs     = document.getElementById("sylbsRfrs");
    var flReg         = document.getElementById("flReg");
    var mlReg         = document.getElementById("mlReg");
    var flPr          = document.getElementById("flPr");
    var mlPr          = document.getElementById("mlPr");
    var stRegt        = document.getElementById("stRegt");
    var stPrt         = document.getElementById("stPrt");
    var introCont     = document.getElementById("introCont");
    var newKnow       = document.getElementById("newKnow");
    var reinCont      = document.getElementById("reinCont");
    var refleCont     = document.getElementById("refleCont");
    var intro1        = document.getElementById("intro1");
    var intro2        = document.getElementById("intro2");
    var intro3        = document.getElementById("intro3");
    var new1          = document.getElementById("new1");
    var new2          = document.getElementById("new2");
    var new3          = document.getElementById("new3");
    var rein1         = document.getElementById("rein1");
    var rein2         = document.getElementById("rein2");
    var rein3         = document.getElementById("rein3");
    var reflect1      = document.getElementById("reflect1");
    var reflect2      = document.getElementById("reflect2");
    var reflect3      = document.getElementById("reflect3");
    var remarkComm    = document.getElementById("remarkComm");

    schoolNm.innerText      = school;
    teacherName.innerText   = name;
    lessonSubject.innerText = subject;
    studentClass.innerText  = subClasses;
    if (subStreams !== "none") streams.innerText = subStreams;
    const dateOption = document.getElementById('dateOption').value;
    lessonDate.innerText = dateOption === 'notset' ? '' : subDate;
    sylbsMts.innerText   = tlmaterials;
    flReg.innerText  = femaleReg  || "";
    mlReg.innerText  = maleReg    || "";
    flPr.innerText   = femalePres || "";
    mlPr.innerText   = malePres   || "";
    stRegt.innerText = (femaleReg && maleReg)   ? (parseInt(femaleReg)+parseInt(maleReg)).toString()   : "";
    stPrt.innerText  = (femalePres && malePres) ? (parseInt(femalePres)+parseInt(malePres)).toString() : "";

    var formattedRef = formatReference(refLesson, subject);
    if (window.userSelectedReferenceYear) formattedRef = applyUserYear(formattedRef, window.userSelectedReferenceYear);
    sylbsRfrs.innerHTML = formattedRef;

    const allowedSubjects = window.AXP_SW_SUBJECTS || [];
    const isSwahiliSubject = allowedSubjects.includes(subject.toLowerCase());
    const isContinue = wrdImp1 === "Endelea" || wrdImp1.toLowerCase() === "continue";

    if (isSwahiliSubject) {
        const labelMap = {
            "ShuleJina":"Shule","muda-dakika":"Muda (Dak)","andalio":"Andalio la somo",
            "somo":"somo","darasa":"Darasa","ujuzi":"Umahiri Mkuu","lengoKuu":"Umahiri Mahususi",
            "madaNdogo":"Shughuli Kuu","jinaMwalimu":"jina La Mwalimu","lengoMahususi":"Shughuli Mahususi",
            "tarehe":"tarehe","kichwa-habari":"Mchakato wa ufundishaji na Ujifunzaji",
            "nukuu":"Zana za kufundishia","rejea":"Rejea","idadi":"Idadi",
            "fika":"Walio hudhuria","sajiliwa":"Walio andikishwa",
            "wasichana":"Wasichana","wavulana":"Wavulana","jumla":"Jumla",
            "wasichana1":"Wasichana","wavulana1":"Wavulana","jumla1":"Jumla",
            "hatua":"Hatua","mwalimu":"Shughuli za Ufundishaji",
            "mwanafunzi":"Shughuli za ujifunzaji","angalia":"Vigezo vya upimaji",
            "mwanzo":"Utangulizi","mpya":"Kuendeleza ujenzi wa umahiri",
            "kuimarisha":"Kubuni","tafakari":"Tathmini","maoni":"Maoni :","muda":"Muda"
        };
        Object.entries(labelMap).forEach(([id,txt]) => { const el=document.getElementById(id); if(el) el.innerText=txt; });

        const classesMap = {
            "pre-primary":"Darasa la Awali","standard i":"Darasa la Kwanza",
            "standard ii":"Darasa la Pili","standard iii":"Darasa la Tatu",
            "standard iv":"Darasa la Nne","standard v":"Darasa la Tano",
            "standard vi":"Darasa la Sita","standard vii":"Darasa la Saba",
            "form one":"Kidato cha Kwanza","form two":"Kidato cha Pili",
            "form three":"Kidato cha Tatu","form four":"Kidato cha Nne",
            "form five":"Kidato cha Tano","form six":"Kidato cha Sita"
        };
        studentClass.innerText = classesMap[subClasses.toLowerCase()] || "Darasa Halijulikana";

        sylbsMnObj.innerText = sentenceCase(topicLesson);
        sylbsCmp.innerText   = sentenceCase(compLesson);
        sylbsSbtp.innerText  = sentenceCase(mainlesson);
        sylbsSpobj.innerText = sentenceCase(wrdImp2 + " " + specificLesson);

        if (remarkOption === "blank") {
            remarkComm.innerText = "";
        } else if (remarkOption === "custom" && customRemark.trim() !== "") {
            remarkComm.innerText = sentenceCase(customRemark);
        } else {
            const swahiliRemarks = [
                `Wanafunzi waliweza ${wrdImp2} ${specificLesson} kutokana na matumizi ya mbinu shirikishi za kufundisha na kujifunza, pamoja na shughuli na zana mbalimbali. Hata hivyo, baadhi ya wanafunzi walishindwa ${wrdImp2} ${specificLesson}. Kwa hivyo, nitafafanua zaidi katika kipindi kijacho.`,
                `Kwa kutumia mbinu shirikishi na zana mbalimbali, wanafunzi waliweza ${wrdImp2} ${specificLesson}. Hata hivyo, wachache walikuwa na changamoto. Nitaendelea kufafanua katika somo lijalo.`,
                `Wanafunzi wengi waliweza ${wrdImp2} ${specificLesson} kwa ufanisi. Wachache walihitaji msaada zaidi. Nitazingatia hilo katika kipindi kijacho.`,
            ];
            remarkComm.innerText = sentenceCase(axpAudience(pick(swahiliRemarks), true));
        }

        var phrases = generateSwahiliPhrases(wrdImp2, specificLesson, isContinue, tlmaterials, previousLesson);
        intro1.innerText   = sentenceCase(phrases.intro1);
        intro2.innerText   = sentenceCase(phrases.intro2);
        intro3.innerText   = sentenceCase(phrases.intro3);
        new1.innerHTML     = sentenceCase(phrases.new1).replace(/\n/g, '<br>');
        new2.innerText     = sentenceCase(phrases.new2);
        new3.innerText     = sentenceCase(phrases.new3);
        rein1.innerText    = sentenceCase(phrases.rein1);
        rein2.innerText    = sentenceCase(phrases.rein2);
        rein3.innerText    = sentenceCase(phrases.rein3);
        reflect1.innerText = sentenceCase(phrases.reflect1);
        reflect2.innerText = sentenceCase(phrases.reflect2);
        reflect3.innerText = sentenceCase(phrases.reflect3);

        applyTiming(period, lessonTime, introCont, newKnow, reinCont, refleCont, true);

    } else {
        sylbsMnObj.innerText = sentenceCase(topicLesson);
        sylbsCmp.innerText   = sentenceCase(compLesson);
        sylbsSbtp.innerText  = sentenceCase(mainlesson);
        sylbsSpobj.innerText = sentenceCase(wrdImp2 + " " + specificLesson);

        if (remarkOption === "blank") {
            remarkComm.innerText = "";
        } else if (remarkOption === "custom" && customRemark.trim() !== "") {
            remarkComm.innerText = sentenceCase(customRemark);
        } else {
            const englishRemarks = [
                `The students were able to ${wrdImp2} ${specificLesson} due to the use of interactive teaching and learning methods, activities and resources. However, some students failed to ${wrdImp2} ${specificLesson}. Therefore, I will clarify it next period.`,
                `Through the use of interactive methods and varied resources, most students were able to ${wrdImp2} ${specificLesson}. A few students still need further guidance, which I will address in the next lesson.`,
                `Using participatory methods and appropriate resources, students demonstrated the ability to ${wrdImp2} ${specificLesson}. A few students require additional support, which will be provided in the following lesson.`,
            ];
            remarkComm.innerText = sentenceCase(axpAudience(pick(englishRemarks), false));
        }

        var phrases = generateEnglishPhrases(wrdImp2, specificLesson, isContinue, tlmaterials, previousLesson);
        intro1.innerText   = sentenceCase(phrases.intro1);
        intro2.innerText   = sentenceCase(phrases.intro2);
        intro3.innerText   = sentenceCase(phrases.intro3);
        // new1 uses innerHTML to render (a)(b)(c) questions on separate lines
        new1.innerHTML     = sentenceCase(phrases.new1).replace(/\n/g, '<br>');
        new2.innerText     = sentenceCase(phrases.new2);
        new3.innerText     = sentenceCase(phrases.new3);
        rein1.innerText    = sentenceCase(phrases.rein1);
        rein2.innerText    = sentenceCase(phrases.rein2);
        rein3.innerText    = sentenceCase(phrases.rein3);
        reflect1.innerText = sentenceCase(phrases.reflect1);
        reflect2.innerText = sentenceCase(phrases.reflect2);
        reflect3.innerText = sentenceCase(phrases.reflect3);

        applyTiming(period, lessonTime, introCont, newKnow, reinCont, refleCont, false);
    }
}


/* ═══════════════════════════════════════════════════════════════════════════
   LEVEL / CLASS ADAPTATION (English + Kiswahili)
   Class → band:  pre = Pre-Primary · l1 = Std I–II · l2 = Std III–IV · up = Std V–VII
                  o = Form 1–4 · a = Form 5–6 (A-level)
   • pre / l1 / l2 : short, concrete, play- and activity-based lessons with simple
                     questions (children/pupils talk, point, draw, and from Std III write)
   • up            : normal lesson, wording for "pupils"
   • o             : normal lesson (unchanged)
   • a             : normal lesson + evidence, justification and critical evaluation
   ═══════════════════════════════════════════════════════════════════════════ */
function axpLevelOf(c) {
    c = String(c || '').toLowerCase().trim();
    if (!c) return '';
    if (/\bpre\b|pre-|awali/.test(c)) return 'pre';
    var num = { i:1, ii:2, iii:3, iv:4, v:5, vi:6, vii:7, kwanza:1, pili:2, tatu:3, nne:4, tano:5, sita:6, saba:7, one:1, two:2, three:3, four:4, five:5, six:6 };
    var st = c.match(/(?:standard|darasa la)\s+(iii|ii|iv|vii|vi|v|i|kwanza|pili|tatu|nne|tano|sita|saba)\b/);
    if (st) { var n = num[st[1]]; return n <= 2 ? 'l1' : n <= 4 ? 'l2' : 'up'; }
    var fm = c.match(/(?:form|kidato cha)\s+(one|two|three|four|five|six|kwanza|pili|tatu|nne|tano|sita)\b/);
    if (fm) return num[fm[1]] >= 5 ? 'a' : 'o';
    return '';
}
function axpLvl() { return window.AXP_LEVEL || ''; }

/* "students" → children / pupils (and Swahili "wanafunzi" → "watoto" for pre-primary) */
function axpAudience(text, isSw, lvl) {
    if (!text) return text;
    lvl = lvl || axpLvl();
    if (isSw) {
        if (lvl !== 'pre') return text;
        return text.replace(/\bmwanafunzi\b/g, 'mtoto').replace(/\bMwanafunzi\b/g, 'Mtoto')
                   .replace(/\bwanafunzi\b/g, 'watoto').replace(/\bWanafunzi\b/g, 'Watoto');
    }
    var one, many;
    if (lvl === 'pre') { one = 'child'; many = 'children'; }
    else if (lvl === 'l1' || lvl === 'l2' || lvl === 'up') { one = 'pupil'; many = 'pupils'; }
    else return text;
    var C = function (w) { return w.charAt(0).toUpperCase() + w.slice(1); };
    return text.replace(/\bstudents\b/g, many).replace(/\bStudents\b/g, C(many))
               .replace(/\bstudent\b/g, one).replace(/\bStudent\b/g, C(one));
}

/* Short, concrete templates for pre-primary and Std I–IV. Written with "students"/"wanafunzi"; axpAudience then
   turns them into children/pupils (watoto). */
function axpSimplePhrases(isSw, lvl, ctx) {
    var A = ctx.activity.original, C = ctx.activity.coreSubject;
    var R = ctx.stimulus.label, B = ctx.stimulus.baseLabel;
    var prev = (ctx.previousLesson || '').trim();
    var pre = lvl === 'pre', writes = lvl === 'l2', two = lvl === 'pre' || lvl === 'l1';
    var P = {};
    if (!isSw) {
        if (ctx.isContinue) {
            P.intro1 = pick([`Review the previous lesson${prev ? ' on ' + prev : ''} with the students by asking simple questions and showing ${R}`,
                             `Use ${R} to remind the students of the previous lesson${prev ? ' on ' + prev : ''} and ask simple questions`]);
            P.intro2 = pick([`Remember the previous lesson and answer the teacher's simple questions`,
                             `Look at the ${B}, recall what was learnt and answer the questions`]);
            P.intro3 = pick([`The students recall what was learnt in the previous lesson`, `Simple questions on the previous lesson are answered by the students`]);
        } else {
            P.intro1 = pick(pre
                ? [`Greet the students and use ${R} to attract their attention and ask simple questions`,
                   `Start with a short song, then show ${R} and ask the students what they see`,
                   `Use ${R} to start a short talk and ask the students simple questions about ${A}`]
                : [`Use ${R} to arouse the students' curiosity and ask simple introductory questions`,
                   `Show ${R} and ask the students what they already know about ${A}`,
                   `Use ${R} to start a short discussion with the students about ${A}`]);
            P.intro2 = pick(pre
                ? [`Look at the ${B}, listen and answer the teacher's simple questions by speaking or pointing`,
                   `Sing along, look at the ${B} and tell what they see`]
                : [`Look at the ${B} and answer the teacher's simple questions about ${A}`,
                   `Tell what they already know about ${A}`]);
            P.intro3 = pick([`Simple questions about ${A} are answered by the students`, `Each student has answered at least one simple question about ${A}`]);
        }
        var q = pre ? `(a) What do you see?\n(b) What do you know about ${C}?\n(c) Where have you seen it before?`
              : two ? `(a) What do you see in the ${B}?\n(b) What do you know about ${C}?`
              :       `(a) What do you see in the ${B}?\n(b) What do you know about ${C}?\n(c) Why is it important to learn about ${C}?`;
        P.new1 = pick([`Show ${R} and guide the students with the following simple questions:\n${q}`,
                       `Show ${R} and talk with the students using these questions:\n${q}`]);
        P.new2 = pre ? pick([`Look at the ${B}, listen to the teacher and answer the questions`, `Look carefully, listen and answer the questions`])
                     : pick([`Study the ${B} and answer the questions about ${A}`, `Look at the ${B}, listen and answer the questions`]);
        P.new3 = pick([`The students have answered the simple questions about ${A}`, `Each student has said something about ${A}`]);
        var tasks = pre ? pick([`(a) Draw or colour something about ${C}. (b) Tell a friend about the drawing.`,
                                `(a) Sort and match the pictures about ${C}. (b) Show the pictures to the class.`])
                  : writes ? `(a) Talk about ${C} in their own words. (b) Write two sentences about ${C}.`
                  :          `(a) Talk about ${C} in their own words. (b) Draw one thing about ${C}.`;
        P.rein1 = (pre ? `Put the students in pairs or small groups and give these simple tasks: `
                       : `Organise the students in small groups and give these simple tasks: `) + tasks;
        P.rein2 = pre ? `Work together in pairs, share ideas and show their work to the class`
                      : `Work in small groups to complete the tasks and show their work to the class`;
        P.rein3 = `The students have worked together and shown their work on ${A}`;
        P.reflect1 = pre ? `Ask each student to pick a picture card and tell or show something about ${A}`
                   : writes ? `Ask each student to pick a card and write one sentence about ${A}`
                   :          `Ask each student to pick a card and say one thing about ${A}`;
        P.reflect2 = pre ? `Pick a picture card and tell or show something about ${A} on their own`
                   : writes ? `Pick a card and write one sentence about ${A} on their own`
                   :          `Pick a card and say one thing about ${A} on their own`;
        P.reflect3 = `Each student has shown understanding of ${A} on their own`;
    } else {
        if (ctx.isContinue) {
            P.intro1 = pick([`Kukumbusha somo lililopita${prev ? ' kuhusu ' + prev : ''} kwa kuuliza maswali rahisi na kuonyesha ${R}`,
                             `Kutumia ${R} kuwakumbusha wanafunzi somo lililopita${prev ? ' kuhusu ' + prev : ''} na kuuliza maswali rahisi`]);
            P.intro2 = pick([`Kukumbuka somo lililopita na kujibu maswali rahisi ya mwalimu`, `Kuangalia ${B}, kukumbuka walichojifunza na kujibu maswali`]);
            P.intro3 = pick([`Wanafunzi wamekumbuka walichojifunza katika somo lililopita`, `Maswali rahisi ya somo lililopita yamejibiwa na wanafunzi`]);
        } else {
            P.intro1 = pick(pre
                ? [`Kuwasalimia wanafunzi na kutumia ${R} kuvuta umakini wao na kuuliza maswali rahisi`,
                   `Kuanza kwa wimbo mfupi, kisha kuonyesha ${R} na kuwauliza wanafunzi wanachoona`,
                   `Kutumia ${R} kuanzisha mazungumzo mafupi na wanafunzi kuhusu ${A}`]
                : [`Kutumia ${R} kuamsha udadisi wa wanafunzi na kuuliza maswali rahisi ya utangulizi`,
                   `Kuonyesha ${R} na kuwauliza wanafunzi wanachojua kuhusu ${A}`,
                   `Kutumia ${R} kuanzisha majadiliano mafupi na wanafunzi kuhusu ${A}`]);
            P.intro2 = pick(pre
                ? [`Kuangalia ${B}, kusikiliza na kujibu maswali rahisi ya mwalimu kwa kusema au kuonyesha`,
                   `Kuimba pamoja, kuangalia ${B} na kusema wanachoona`]
                : [`Kuangalia ${B} na kujibu maswali rahisi ya mwalimu kuhusu ${A}`, `Kusema wanachojua kuhusu ${A}`]);
            P.intro3 = pick([`Maswali rahisi kuhusu ${A} yamejibiwa na wanafunzi`, `Kila mwanafunzi amejibu angalau swali moja rahisi kuhusu ${A}`]);
        }
        var qs = pre ? `(a) Unaona nini?\n(b) Unajua nini kuhusu ${C}?\n(c) Umewahi kuona wapi?`
               : two ? `(a) Unaona nini kwenye ${B}?\n(b) Unajua nini kuhusu ${C}?`
               :       `(a) Unaona nini kwenye ${B}?\n(b) Unajua nini kuhusu ${C}?\n(c) Kwa nini ni muhimu kujifunza kuhusu ${C}?`;
        P.new1 = pick([`Kuonyesha ${R} na kuwaongoza wanafunzi kwa maswali rahisi yafuatayo:\n${qs}`,
                       `Kuonyesha ${R} na kuzungumza na wanafunzi kwa kutumia maswali haya:\n${qs}`]);
        P.new2 = pre ? pick([`Kuangalia ${B}, kusikiliza mwalimu na kujibu maswali`, `Kuangalia kwa makini, kusikiliza na kujibu maswali`])
                     : pick([`Kuchunguza ${B} na kujibu maswali kuhusu ${A}`, `Kuangalia ${B}, kusikiliza na kujibu maswali`]);
        P.new3 = pick([`Wanafunzi wamejibu maswali rahisi kuhusu ${A}`, `Kila mwanafunzi ametaja jambo kuhusu ${A}`]);
        var tk = pre ? pick([`(a) Kuchora au kupaka rangi kitu kinachohusu ${C}. (b) Kumwambia rafiki kuhusu mchoro wake.`,
                             `(a) Kupanga na kulinganisha picha zinazohusu ${C}. (b) Kuonyesha picha hizo kwa darasa.`])
                : writes ? `(a) Kuzungumzia ${C} kwa maneno yao wenyewe. (b) Kuandika sentensi mbili kuhusu ${C}.`
                :          `(a) Kuzungumzia ${C} kwa maneno yao wenyewe. (b) Kuchora kitu kimoja kuhusu ${C}.`;
        P.rein1 = (pre ? `Kuwapanga wanafunzi wawili wawili au katika vikundi vidogo na kuwapa kazi hizi rahisi: `
                       : `Kuwapanga wanafunzi katika vikundi vidogo na kuwapa kazi hizi rahisi: `) + tk;
        P.rein2 = pre ? `Kufanya kazi pamoja wawili wawili, kubadilishana mawazo na kuonyesha kazi yao darasani`
                      : `Kufanya kazi pamoja katika vikundi vidogo na kuonyesha kazi yao darasani`;
        P.rein3 = `Wanafunzi wamefanya kazi pamoja na kuonyesha kazi yao kuhusu ${A}`;
        P.reflect1 = pre ? `Kumwomba kila mwanafunzi achague kadi ya picha na aeleze au aonyeshe kitu kuhusu ${A}`
                   : writes ? `Kumwomba kila mwanafunzi achague kadi na aandike sentensi moja kuhusu ${A}`
                   :          `Kumwomba kila mwanafunzi achague kadi na aseme jambo moja kuhusu ${A}`;
        P.reflect2 = pre ? `Kuchagua kadi ya picha na kueleza au kuonyesha kitu kuhusu ${A} mwenyewe`
                   : writes ? `Kuchagua kadi na kuandika sentensi moja kuhusu ${A} mwenyewe`
                   :          `Kuchagua kadi na kusema jambo moja kuhusu ${A} mwenyewe`;
        P.reflect3 = `Kila mwanafunzi ameonyesha uelewa wa ${A} kwa kujitegemea`;
    }
    return P;
}

/* Applied at the end of generateEnglishPhrases / generateSwahiliPhrases */
function axpAdaptPhrases(ph, isSw, ctx) {
    var lvl = axpLvl();
    Object.keys(ph).forEach(function (k) { ph[k] = String(ph[k]).replace(/\.{2}(?!\.)/g, '.'); });
    if (!isSw) Object.keys(ph).forEach(function (k) { ph[k] = String(ph[k]).replace(/\ba (activity)\b/gi, 'an $1'); });
    if (!lvl || lvl === 'o') return ph;
    if (lvl === 'pre' || lvl === 'l1' || lvl === 'l2') {
        ph = axpSimplePhrases(isSw, lvl, ctx);
    } else if (lvl === 'a') {
        if (!isSw) {
            ph.new1 += '\n(d) Justify your answer using evidence or examples.';
            ph.rein1 = ph.rein1.replace(/[.\s]+$/, '') + '. Require each group to critically evaluate its findings and defend its conclusions with evidence';
            ph.rein2 += ', justifying their conclusions with evidence';
            ph.reflect1 += ' and justify the answer with evidence';
            ph.reflect2 += ' and justify the answer with evidence';
        } else {
            ph.new1 += '\n(d) Toa hoja zako kwa kutumia ushahidi au mifano.';
            ph.rein1 = ph.rein1.replace(/[.\s]+$/, '') + '. Kila kikundi kichambue kwa kina matokeo yake na kutetea hitimisho kwa ushahidi';
            ph.rein2 += ' na kutetea hitimisho lao kwa ushahidi';
            ph.reflect1 += ' na kutoa hoja kwa ushahidi';
            ph.reflect2 += ' na kutoa hoja kwa ushahidi';
        }
    }
    Object.keys(ph).forEach(function (k) { ph[k] = axpAudience(ph[k], isSw, lvl); });
    return ph;
}

/* ═══════════════════════════════════════════════════════════════════════════
   T&L RESOURCES — one source of truth for the form widget, the chatbot, the
   lesson plan preview and the lesson generator above.
   • Languages: English + Kiswahili (a subject decides which). To add a language,
     add it to LANGS, add its two columns to the table and one entry to FMT.
   • Levels: p = pre-primary, s = primary, o = O-level, a = A-level. Resources
     that suit the chosen class are listed first; every resource stays selectable.
   • Table columns: key | icon | phrase group | levels | Swahili concord |
     name per language (en|sw) | wording heads per language (en|sw), ";"-separated.
     In Swahili heads "Head~zi" overrides the concord for that head.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var LANGS = ['en', 'sw'];
  var RAW = `pictures|bi-image|v|psoa|zi|Pictures|Picha|Pictures;Colourful pictures;Illustrative pictures|Picha;Picha za rangi
photographs|bi-camera|v|psoa|zi|Photographs|Picha za Kukumbuka|Photographs;Real-life photographs|Picha za kumbukumbu;Picha halisi
flash cards|bi-card-text|v|ps|zi|Flash Cards|Kadi za Kumbusho|Flash cards;Prepared flash cards|Kadi za kumbusho;Kadi za kujifunzia
cards|bi-layers|v|pso|zi|Cards|Kadi|Cards;Labelled cards|Kadi;Kadi zenye maelezo
charts|bi-bar-chart-line|v|soa|zi|Charts|Chati|Charts;Wall charts;Illustrative charts|Chati;Chati za ukutani
graphs|bi-graph-up|v|soa|zi|Graphs|Grafu|Graphs;Prepared graphs|Grafu;Grafu zilizoandaliwa
diagrams|bi-diagram-3|v|soa|i|Diagrams|Michoro|Diagrams;Labelled diagrams;Illustrative diagrams|Michoro;Michoro iliyoandaliwa
posters|bi-easel|v|psoa|li|Posters|Bango|Posters;Illustrated posters|Bango;Bango lenye picha
video clip|bi-play-circle|av|psoa|ki|Video Clip|Kipande cha Video|Video clips;Short video clips;Educational videos|Kipande cha video;Video fupi~i
audio recording|bi-mic|av|psoa|i|Audio Recording|Rekodi ya Sauti|Audio recordings;Recorded audio clips|Rekodi ya sauti;Rekodi za sauti~zi
real objects|bi-box-seam|o|psoa|vi|Real Objects|Vitu Halisi|Real objects;Real objects from the surroundings|Vitu halisi;Vitu halisi vya mazingira
specimens|bi-eyedropper|o|soa|zi|Specimens|Sampuli|Specimens;Fresh specimens|Sampuli;Sampuli halisi
model|bi-boxes|o|psoa|u|Model|Mfano wa Kitu|Models;Three-dimensional models|Mfano wa kitu;Mifano halisi~i
textbooks|bi-book|r|soa|vi|Textbooks|Vitabu vya Kiada|Textbooks;Approved textbooks|Vitabu vya kiada;Vitabu vya kiada vilivyoidhinishwa
worksheets|bi-file-earmark-text|r|psoa|zi|Worksheets|Karatasi za Kazi|Worksheets;Prepared worksheets|Karatasi za kazi;Karatasi za mazoezi
map|bi-map|v|soa|i|Map|Ramani|Maps;Wall maps|Ramani;Ramani ya ukutani
globe|bi-globe2|v|soa|i|Globe|Dunia ya Mviringo|Globe;Classroom globe|Dunia ya mviringo;Globu
chalkboard|bi-easel2|t|psoa|u|Chalkboard|Ubao|Chalkboard;Chalkboard illustrations|Ubao;Ubao wa kuandikia
projector|bi-projector|t|soa|i|Projector|Projekta|Projector slides;Projected slides|Projekta;Slaidi za projekta~zi
computer|bi-pc-display|t|soa|i|Computer|Kompyuta|Computer presentation;Computer-based simulations|Kompyuta;Mawasilisho ya kompyuta~ya
newspaper|bi-newspaper|r|soa|li|Newspaper|Gazeti|Newspaper articles;Newspaper cuttings|Gazeti;Makala za gazeti~zi
laboratory equipment|bi-beaker|o|oa|vi|Lab Equipment|Vifaa vya Maabara|Laboratory equipment;Laboratory apparatus|Vifaa vya maabara;Zana za maabara~zi
measuring tools|bi-rulers|o|soa|vi|Measuring Tools|Vifaa vya Kupimia|Measuring tools;Measuring instruments|Vifaa vya kupimia;Zana za kupimia~zi
number line|bi-calculator|v|ps|u|Number Line|Mstari wa Nambari|Number line;Large number line|Mstari wa nambari;Mistari ya nambari~i
counters|bi-123|o|ps|vi|Counters|Vifaa vya Kuhesabia|Counters;Counting objects|Vifaa vya kuhesabia;Vitu vya kuhesabia
abacus|bi-grid-3x3-gap|o|ps|i|Abacus|Abakasi|Abacus;Classroom abacus|Abakasi;Abakasi ya darasani
alphabet cards|bi-fonts|v|ps|zi|Alphabet Cards|Kadi za Herufi|Alphabet cards;Letter cards|Kadi za herufi;Kadi za silabi
story books|bi-journal-bookmark|r|ps|vi|Story Books|Vitabu vya Hadithi|Story books;Illustrated story books|Vitabu vya hadithi;Vitabu vya hadithi vyenye picha
puppets|bi-emoji-smile|o|ps|vi|Puppets|Vikaragosi|Puppets;Hand puppets|Vikaragosi;Vikaragosi vya mikono
geometrical set|bi-triangle|t|soa|i|Geometrical Set|Seti ya Jiometri|Geometrical set;Geometry instruments|Seti ya jiometri;Vifaa vya jiometri
calculator|bi-calculator-fill|t|oa|ki|Calculator|Kikokotoo|Calculators;Scientific calculators|Vikokotoo;Vikokotoo vya kisayansi
microscope|bi-search|o|oa|i|Microscope|Hadubini|Microscopes;Light microscopes|Hadubini;Hadubini ya shule
periodic table|bi-table|v|oa|li|Periodic Table|Jedwali la Vipengele|Periodic table;Wall periodic table|Jedwali la vipengele;Jedwali la vipengele la ukutani
reference books|bi-journals|r|oa|vi|Reference Books|Vitabu vya Rejea|Reference books;Supplementary reference books|Vitabu vya rejea;Vitabu vya ziada vya rejea`;
  var GP = {
    v: ['showing', 'illustrating', 'depicting', 'displaying', 'highlighting', 'representing'],
    av: ['demonstrating', 'explaining', 'presenting', 'illustrating', 'introducing', 'highlighting'],
    o: ['related to', 'for demonstrating', 'illustrating', 'linked to', 'for exploring', 'for illustrating'],
    r: ['with content on', 'covering', 'presenting content on', 'containing information on', 'with notes on', 'with exercises on'],
    t: ['for presenting', 'for displaying', 'for illustrating', 'for showing', 'for explaining', 'for demonstrating']
  };
  var SWV = ['onyesha', 'elezea', 'husu', 'fafanua', 'angazia', '=kuhusu'];
  var CONC = { zi: 'zinazo', vi: 'vinavyo', i: 'inayo', u: 'unao', li: 'linalo', ki: 'kinacho', ya: 'yanayo' };
  var FMT = {
    en: function (r, h, v, a) { return h + ' ' + GP[r.g][v % GP[r.g].length] + ' ' + a; },
    sw: function (r, h, v, a) {
      var x = h.split('~'), w = SWV[v % SWV.length];
      return x[0] + ' ' + (w.charAt(0) === '=' ? w.slice(1) : CONC[x[1] || r.c] + w) + ' ' + a;
    }
  };

  /* ── language + level helpers (shared with the rest of the page) ── */
  var SW_SUBJECTS = ['kiswahili', 'elimu ya dini ya kiislam', 'fasihi ya kiswahili', 'historia ya tanzania na maadili',
    'stadi za awali za lugha', 'kuhesabu,sayansi na tehama', 'stadi za awali za maisha', 'afya na mazingira', 'kusoma',
    'sanaa bunifu na michezo', 'naipenda nchi yangu tanzania', 'kuandika', 'kuhesabu', 'utamaduni, sanaa na michezo',
    'sanaa na michezo', 'jiografia na mazingira', 'hisabati', 'sayansi', 'maarifa ya jamii', 'stadi za kazi', 'uraia na maadili'];
  window.AXP_SW_SUBJECTS = SW_SUBJECTS;
  window.axpIsSw = function (subject) {
    var s = String(subject || '').trim().toLowerCase();
    return SW_SUBJECTS.indexOf(s) > -1 || (typeof window.isSwahiliSubject === 'function' && !!window.isSwahiliSubject(subject));
  };
  function level(c) { return { pre: 'p', l1: 's', l2: 's', up: 's', o: 'o', a: 'a' }[axpLevelOf(c)] || ''; }

  /* ── data ── */
  var rows = {}, order = [], alias = {};
  function add(line) {
    var f = line.split('|'), n = {}, h = {}, i;
    for (i = 0; i < LANGS.length; i++) { n[LANGS[i]] = f[5 + i]; h[LANGS[i]] = f[5 + LANGS.length + i].split(';'); alias[f[5 + i].toLowerCase()] = f[0]; }
    rows[f[0]] = { k: f[0], ic: f[1], g: f[2], lv: f[3], c: f[4], n: n, h: h };
    order.push(f[0]); alias[f[0]] = f[0];
  }
  RAW.split('\n').forEach(add);

  /* ── state + wording ── */
  var sel = new Set(), picks = {}, grid, sI, sC, cW, ph, mI, mB, hid;
  function $(i) { return document.getElementById(i); }
  function lang() { var s = $('subject'); return s && window.axpIsSw(s.value) ? 'sw' : 'en'; }
  function lvl() { var e = $('classes'); return level(e && e.value); }
  function fit(k) { var r = rows[k], l = lvl(); return !l || !r || r.lv.indexOf(l) > -1; }
  function act() { var e = $('specificLesson'); return e ? e.value.trim().replace(/[\s.;,]+$/, '') : ''; }
  function rnd(n) { return Math.floor(Math.random() * n); }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function lab(k, lg) { var r = rows[k]; return r ? (r.n[lg || lang()] || r.n.en) : k; }
  function say(k, lg) {
    var r = rows[k]; if (!r) return cap(k);
    lg = lg || lang();
    var a = act(); if (!a) return lab(k, lg);
    var p = picks[k] || (picks[k] = { h: rnd(6), v: rnd(6) }), hs = r.h[lg] || r.h.en;
    return (FMT[lg] || FMT.en)(r, hs[p.h % hs.length], p.v, a);
  }
  function sync() {
    hid.value = Array.from(sel).map(function (k) { return say(k); }).join(', ');
    hid.dispatchEvent(new Event('input', { bubbles: true }));
    hid.dispatchEvent(new Event('change', { bubbles: true }));
  }
  function drop(k) { sel.delete(k); delete picks[k]; }

  /* ── widget ── */
  function renderGrid(f) {
    f = (f || '').toLowerCase().trim(); grid.innerHTML = '';
    var items = order.filter(function (k) { return !f || lab(k).toLowerCase().indexOf(f) > -1 || k.indexOf(f) > -1; })
      .map(function (k, i) { return [k, i]; })
      .sort(function (a, b) { return (fit(b[0]) - fit(a[0])) || (a[1] - b[1]); })
      .map(function (x) { return x[0]; });
    if (!items.length) {
      grid.innerHTML = '<div class="tlm-no-results"><i class="bi bi-search" style="display:block;font-size:1.3rem;margin-bottom:6px;"></i>' +
        (lang() === 'sw' ? 'Hakuna. Tumia sehemu ya Custom hapa chini.' : 'No match. Use Custom input below.') + '</div>';
      return;
    }
    items.forEach(function (k) {
      var on = sel.has(k), it = document.createElement('label');
      it.className = 'tlm-item' + (on ? ' checked' : ''); it.setAttribute('data-value', k);
      if (!fit(k)) { it.style.opacity = '.55'; it.title = lang() === 'sw' ? 'Inafaa zaidi viwango vingine' : 'Better suited to other levels'; }
      it.innerHTML = '<input type="checkbox"' + (on ? ' checked' : '') + '><span class="tlm-check-box"><i class="bi bi-check-lg tlm-check-icon"></i></span><i class="bi ' + rows[k].ic + ' tlm-item-icon"></i><span></span>';
      it.lastChild.textContent = lab(k);
      it.addEventListener('click', function (e) {
        e.preventDefault();
        if (sel.has(k)) { drop(k); it.classList.remove('checked'); } else { sel.add(k); it.classList.add('checked'); }
        sync(); renderChips();
      });
      grid.appendChild(it);
    });
  }
  function renderChips() {
    cW.querySelectorAll('.tlm-chip').forEach(function (c) { c.remove(); });
    if (!sel.size) { ph.style.display = ''; return; }
    ph.style.display = 'none';
    sel.forEach(function (k) {
      var c = document.createElement('span'); c.className = 'tlm-chip';
      c.appendChild(document.createTextNode(lab(k)));
      var b = document.createElement('button'); b.type = 'button'; b.className = 'tlm-chip-remove'; b.title = 'Remove';
      b.innerHTML = '<i class="bi bi-x-lg"></i>';
      b.addEventListener('click', function () {
        drop(k);
        var gi = grid.querySelector('[data-value="' + k + '"]'); if (gi) gi.classList.remove('checked');
        sync(); renderChips();
      });
      c.appendChild(b); cW.appendChild(c);
    });
  }
  function addList(csv) {
    String(csv || '').split(',').forEach(function (p) {
      var v = p.trim().toLowerCase(); if (!v) return;
      sel.add(alias[v] || v);
    });
  }
  function addManual() { var raw = mI.value.trim(); if (!raw) return; addList(raw); mI.value = ''; sync(); renderChips(); renderGrid(sI.value); }
  function refresh() { renderGrid(sI ? sI.value : ''); renderChips(); sync(); }
  function fromList(csv) { sel.clear(); picks = {}; addList(csv); refresh(); }

  function init() {
    grid = $('tlmGrid'); sI = $('tlmSearch'); sC = $('tlmSearchClear'); cW = $('tlmChips');
    ph = $('tlmPlaceholder'); mI = $('tlmManualInput'); mB = $('tlmManualAdd'); hid = $('tlmaterials');
    if (!grid || !hid) return;
    renderGrid(''); renderChips();
    sI.addEventListener('input', function () { var q = this.value.trim(); sC.style.display = q ? 'flex' : 'none'; renderGrid(q); });
    sC.addEventListener('click', function () { sI.value = ''; sC.style.display = 'none'; renderGrid(''); sI.focus(); });
    mB.addEventListener('click', addManual);
    mI.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); addManual(); } });
    function h(e) {
      var id = e.target && e.target.id;
      if (id === 'specificLesson') sync();
      else if (id === 'subject' && e.type === 'change') refresh();
      else if (id === 'classes' && e.type === 'change') renderGrid(sI.value);
    }
    document.addEventListener('input', h, true); document.addEventListener('change', h, true);
  }

  /* A preview freezes the wording (see axpSeedWording); editing the form releases it. */
  function unfreeze(e) { if (e.isTrusted && window.AXP_WORDING) window.AXP_WORDING.seed = null; }
  document.addEventListener('input', unfreeze, true); document.addEventListener('change', unfreeze, true);

  window.AXP_TLM = {
    fromList: fromList, refresh: refresh, add: add, say: say, level: level, lang: lang,
    first: function () { var k = Array.from(sel)[0]; return k ? say(k) : ''; },
    options: function (lg) {
      return order.map(function (k) {
        var r = rows[k], n = r.n[lg] || r.n.en;
        return { value: n, label: lg === 'sw' ? n + ' (' + r.n.en + ')' : n };
      });
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else setTimeout(init, 0);
})();
