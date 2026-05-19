/**
 * lessonPlanPhrases.js  — Advanced Lesson Plan Phrase Generator
 * =============================================================
 * Improvements over previous version:
 *  1. Stimulus is derived from the user-selected TLM (teaching/learning materials).
 *  2. Smart activity parsing: detects embedded concepts in specificLesson
 *     (meaning, importance, effects, disadvantages, types, etc.) and avoids
 *     redundant or conflicting phrasing.
 *  3. Verb-phrase fusion: verb + specificLesson is assembled intelligently so
 *     we never get nonsense like "identify the importance of importance of…".
 *  4. Phrase templates are parameterised by detected concept type so every
 *     stage (intro → development → design → realization) stays coherent.
 *  5. Works for BOTH English and Swahili subjects.
 *  6. convertToSwahiliTime, verbConjugations, getVerbForm, pick,
 *     capitalizeFirst, sentenceCase, formatReference, applyTiming and all
 *     other helpers remain compatible — only the phrase-generation functions
 *     have been replaced/extended.
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1. SWAHILI TIME CONVERSION  (unchanged)
// ─────────────────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// 2. VERB CONJUGATIONS  (unchanged — excerpt; keep your full object here)
// ─────────────────────────────────────────────────────────────────────────────
const verbConjugations = {
    english: {
        "sing":         { gerund:"singing",        past:"sang",         noun:"singing"         },
        "draw":         { gerund:"drawing",         past:"drew",         noun:"drawing"         },
        "color":        { gerund:"coloring",        past:"colored",      noun:"coloring"        },
        "count":        { gerund:"counting",        past:"counted",      noun:"counting"        },
        "play":         { gerund:"playing",         past:"played",       noun:"play"            },
        "recite":       { gerund:"reciting",        past:"recited",      noun:"recitation"      },
        "name":         { gerund:"naming",          past:"named",        noun:"naming"          },
        "identify":     { gerund:"identifying",     past:"identified",   noun:"identification"  },
        "match":        { gerund:"matching",        past:"matched",      noun:"matching"        },
        "sort":         { gerund:"sorting",         past:"sorted",       noun:"sorting"         },
        "discuss":      { gerund:"discussing",      past:"discussed",    noun:"discussion"      },
        "explain":      { gerund:"explaining",      past:"explained",    noun:"explanation"     },
        "describe":     { gerund:"describing",      past:"described",    noun:"description"     },
        "demonstrate":  { gerund:"demonstrating",   past:"demonstrated", noun:"demonstration"   },
        "analyse":      { gerund:"analysing",       past:"analysed",     noun:"analysis"        },
        "analyze":      { gerund:"analyzing",       past:"analyzed",     noun:"analysis"        },
        "calculate":    { gerund:"calculating",     past:"calculated",   noun:"calculation"     },
        "compute":      { gerund:"computing",       past:"computed",     noun:"computation"     },
        "find":         { gerund:"finding",         past:"found",        noun:"finding"         },
        "solve":        { gerund:"solving",         past:"solved",       noun:"solution"        },
        "evaluate":     { gerund:"evaluating",      past:"evaluated",    noun:"evaluation"      },
        "state":        { gerund:"stating",         past:"stated",       noun:"statement"       },
        "give":         { gerund:"giving",          past:"gave",         noun:"giving"          },
        "practice":     { gerund:"practicing",      past:"practiced",    noun:"practice"        },
        "organise":     { gerund:"organising",      past:"organised",    noun:"organisation"    },
        "organize":     { gerund:"organizing",      past:"organized",    noun:"organization"    },
        "apply":        { gerund:"applying",        past:"applied",      noun:"application"     },
        "write":        { gerund:"writing",         past:"wrote",        noun:"writing"         },
        "read":         { gerund:"reading",         past:"read",         noun:"reading"         },
        "compare":      { gerund:"comparing",       past:"compared",     noun:"comparison"      },
        "contrast":     { gerund:"contrasting",     past:"contrasted",   noun:"contrast"        },
        "examine":      { gerund:"examining",       past:"examined",     noun:"examination"     },
        "investigate":  { gerund:"investigating",   past:"investigated", noun:"investigation"   },
        "explore":      { gerund:"exploring",       past:"explored",     noun:"exploration"     },
        "interpret":    { gerund:"interpreting",    past:"interpreted",  noun:"interpretation"  },
        "justify":      { gerund:"justifying",      past:"justified",    noun:"justification"   },
        "prove":        { gerund:"proving",         past:"proved",       noun:"proof"           },
        "verify":       { gerund:"verifying",       past:"verified",     noun:"verification"    },
        "construct":    { gerund:"constructing",    past:"constructed",  noun:"construction"    },
        "create":       { gerund:"creating",        past:"created",      noun:"creation"        },
        "design":       { gerund:"designing",       past:"designed",     noun:"design"          },
        "develop":      { gerund:"developing",      past:"developed",    noun:"development"     },
        "formulate":    { gerund:"formulating",     past:"formulated",   noun:"formulation"     },
        "synthesize":   { gerund:"synthesizing",    past:"synthesized",  noun:"synthesis"       },
        "plan":         { gerund:"planning",        past:"planned",      noun:"plan"            },
        "propose":      { gerund:"proposing",       past:"proposed",     noun:"proposal"        },
        "summarize":    { gerund:"summarizing",     past:"summarized",   noun:"summary"         },
        "outline":      { gerund:"outlining",       past:"outlined",     noun:"outline"         },
        "review":       { gerund:"reviewing",       past:"reviewed",     noun:"review"          },
        "classify":     { gerund:"classifying",     past:"classified",   noun:"classification"  },
        "categorize":   { gerund:"categorizing",    past:"categorized",  noun:"categorization"  },
        "distinguish":  { gerund:"distinguishing",  past:"distinguished",noun:"distinction"     },
        "measure":      { gerund:"measuring",       past:"measured",     noun:"measurement"     },
        "estimate":     { gerund:"estimating",      past:"estimated",    noun:"estimation"      },
        "predict":      { gerund:"predicting",      past:"predicted",    noun:"prediction"      },
        "infer":        { gerund:"inferring",       past:"inferred",     noun:"inference"       },
        "deduce":       { gerund:"deducing",        past:"deduced",      noun:"deduction"       },
        "conclude":     { gerund:"concluding",      past:"concluded",    noun:"conclusion"      },
        "relate":       { gerund:"relating",        past:"related",      noun:"relation"        },
        "connect":      { gerund:"connecting",      past:"connected",    noun:"connection"      },
        "perform":      { gerund:"performing",      past:"performed",    noun:"performance"     },
        "execute":      { gerund:"executing",       past:"executed",     noun:"execution"       },
        "implement":    { gerund:"implementing",    past:"implemented",  noun:"implementation"  },
        "conduct":      { gerund:"conducting",      past:"conducted",    noun:"conduct"         },
        "determine":    { gerund:"determining",     past:"determined",   noun:"determination"   },
        "establish":    { gerund:"establishing",    past:"established",  noun:"establishment"   },
        "recognize":    { gerund:"recognizing",     past:"recognized",   noun:"recognition"     },
        "recall":       { gerund:"recalling",       past:"recalled",     noun:"recall"          },
        "list":         { gerund:"listing",         past:"listed",       noun:"list"            },
        "label":        { gerund:"labeling",        past:"labeled",      noun:"label"           },
        "select":       { gerund:"selecting",       past:"selected",     noun:"selection"       },
        "choose":       { gerund:"choosing",        past:"chose",        noun:"choice"          },
        "differentiate":{ gerund:"differentiating", past:"differentiated",noun:"differentiation"},
        "modify":       { gerund:"modifying",       past:"modified",     noun:"modification"    },
        "adapt":        { gerund:"adapting",        past:"adapted",      noun:"adaptation"      },
        "simplify":     { gerund:"simplifying",     past:"simplified",   noun:"simplification"  },
        "convert":      { gerund:"converting",      past:"converted",    noun:"conversion"      },
        "transform":    { gerund:"transforming",    past:"transformed",  noun:"transformation"  },
        "translate":    { gerund:"translating",     past:"translated",   noun:"translation"     },
        "express":      { gerund:"expressing",      past:"expressed",    noun:"expression"      },
        "present":      { gerund:"presenting",      past:"presented",    noun:"presentation"    },
        "report":       { gerund:"reporting",       past:"reported",     noun:"report"          },
        "argue":        { gerund:"arguing",         past:"argued",       noun:"argument"        },
        "defend":       { gerund:"defending",       past:"defended",     noun:"defense"         },
        "critique":     { gerund:"critiquing",      past:"critiqued",    noun:"critique"        },
        "assess":       { gerund:"assessing",       past:"assessed",     noun:"assessment"      },
        "judge":        { gerund:"judging",         past:"judged",       noun:"judgment"        },
        "rate":         { gerund:"rating",          past:"rated",        noun:"rating"          },
        "rank":         { gerund:"ranking",         past:"ranked",       noun:"ranking"         },
        "prioritize":   { gerund:"prioritizing",    past:"prioritized",  noun:"prioritization"  },
        "sequence":     { gerund:"sequencing",      past:"sequenced",    noun:"sequence"        },
        "arrange":      { gerund:"arranging",       past:"arranged",     noun:"arrangement"     },
        "order":        { gerund:"ordering",        past:"ordered",      noun:"order"           },
        "sketch":       { gerund:"sketching",       past:"sketched",     noun:"sketch"          },
        "paint":        { gerund:"painting",        past:"painted",      noun:"painting"        },
        "illustrate":   { gerund:"illustrating",    past:"illustrated",  noun:"illustration"    }
    },
    swahili: {
        "kuandika":             { present:"kuandika",             continuous:"anaandika",             past:"aliandika",             noun:"uandishi"        },
        "kueleza":              { present:"kueleza",              continuous:"anaeleza",              past:"alieleza",              noun:"uelezaji"        },
        "kujibu":               { present:"kujibu",               continuous:"anajibu",               past:"alijibu",               noun:"majibu"          },
        "kufupisha":            { present:"kufupisha",            continuous:"anafupisha",            past:"alifupisha",            noun:"ufupisho"        },
        "kubaini":              { present:"kubaini",              continuous:"anabaini",              past:"alibaini",              noun:"ubainisho"       },
        "kuhakiki":             { present:"kuhakiki",             continuous:"anahakiki",             past:"alihakiki",             noun:"uhakiki"         },
        "kuunda":               { present:"kuunda",               continuous:"anaunda",               past:"aliunda",               noun:"uundaji"         },
        "kutunga":              { present:"kutunga",              continuous:"anatunga",              past:"alitunga",              noun:"utungaji"        },
        "kupambanua":           { present:"kupambanua",           continuous:"anapambanua",           past:"alipambanua",           noun:"upambanuo"       },
        "kufafanua":            { present:"kufafanua",            continuous:"anafafanua",            past:"alifafanua",            noun:"ufafanuzi"       },
        "kuonesha":             { present:"kuonesha",             continuous:"anaonesha",             past:"alionesha",             noun:"uonyesho"        },
        "kuainisha":            { present:"kuainisha",            continuous:"anaainisha",            past:"aliainisha",            noun:"uainisho"        },
        "kusoma":               { present:"kusoma",               continuous:"anasoma",               past:"alisoma",               noun:"usomaji"         },
        "kusimulia":            { present:"kusimulia",            continuous:"anasimulia",            past:"alisimulia",            noun:"usimuliaji"      },
        "kujadili":             { present:"kujadili",             continuous:"anajadili",             past:"alijadili",             noun:"majadiliano"     },
        "kutatua":              { present:"kutatua",              continuous:"anatatua",              past:"alitatua",              noun:"utatuzi"         },
        "kutafuta":             { present:"kutafuta",             continuous:"anatafuta",             past:"alitafuta",             noun:"utafutaji"       },
        "kupata":               { present:"kupata",               continuous:"anapata",               past:"alipata",               noun:"upatikanaji"     },
        "kutathmini":           { present:"kutathmini",           continuous:"anatathmini",           past:"alitathmini",           noun:"tathmini"        },
        "kutaja":               { present:"kutaja",               continuous:"anataja",               past:"alitaja",               noun:"utajaji"         },
        "kutoa":                { present:"kutoa",                continuous:"anatoa",                past:"alitoa",                noun:"utoaji"          },
        "kufanya mazoezi":      { present:"kufanya mazoezi",      continuous:"anafanya mazoezi",      past:"alifanya mazoezi",      noun:"mazoezi"         },
        "kuandaa":              { present:"kuandaa",              continuous:"anaandaa",              past:"aliandaa",              noun:"uandaaji"        },
        "kutumia":              { present:"kutumia",              continuous:"anatumia",              past:"alitumia",              noun:"matumizi"        },
        "kulinganisha":         { present:"kulinganisha",         continuous:"analinganisha",         past:"alilinganisha",         noun:"ulinganisho"     },
        "kutofautisha":         { present:"kutofautisha",         continuous:"anatofautisha",         past:"alitofautisha",         noun:"utofauti"        },
        "kuchunguza":           { present:"kuchunguza",           continuous:"anachunguza",           past:"alichunguza",           noun:"uchunguzi"       },
        "kuchambua":            { present:"kuchambua",            continuous:"anachambua",            past:"alichambua",            noun:"uchambuzi"       },
        "kugundua":             { present:"kugundua",             continuous:"anagundua",             past:"aligundua",             noun:"ugunduzi"        },
        "kutafsiri":            { present:"kutafsiri",            continuous:"anatafsiri",            past:"alitafsiri",            noun:"tafsiri"         },
        "kuhalalisha":          { present:"kuhalalisha",          continuous:"anahalalisha",          past:"alihalalisha",          noun:"uhalalishaji"    },
        "kuthibitisha":         { present:"kuthibitisha",         continuous:"anathibitisha",         past:"alithibitisha",         noun:"uthibitisho"     },
        "kujenga":              { present:"kujenga",              continuous:"anajenga",              past:"alijenga",              noun:"ujenzi"          },
        "kubuni":               { present:"kubuni",               continuous:"anabuni",               past:"alibuni",               noun:"ubuni"           },
        "kutengeneza":          { present:"kutengeneza",          continuous:"anatengeneza",          past:"alitengeneza",          noun:"utengenezaji"    },
        "kupanga":              { present:"kupanga",              continuous:"anapanga",              past:"alipanga",              noun:"upangaji"        },
        "kupendekeza":          { present:"kupendekeza",          continuous:"anapendekeza",          past:"alipendekeza",          noun:"mapendekezo"     },
        "kumuhtasari":          { present:"kumuhtasari",          continuous:"anamuhtasari",          past:"alimuhtasari",          noun:"muhtasari"       },
        "kukagua":              { present:"kukagua",              continuous:"anakagua",              past:"alikagua",              noun:"ukaguzi"         },
        "kuweka":               { present:"kuweka",               continuous:"anaweka",               past:"aliweka",               noun:"uwekaji"         },
        "kupima":               { present:"kupima",               continuous:"anapima",               past:"alipima",               noun:"upimaji"         },
        "kukadiria":            { present:"kukadiria",            continuous:"anakadiria",            past:"alikadiria",            noun:"ukadirio"        },
        "kutabiri":             { present:"kutabiri",             continuous:"anatabiri",             past:"alitabiri",             noun:"utabiri"         },
        "kuhitimisha":          { present:"kuhitimisha",          continuous:"anahitimisha",          past:"alihitimisha",          noun:"uhitimisho"      },
        "kuhusianisha":         { present:"kuhusianisha",         continuous:"anahusianisha",         past:"alihusianisha",         noun:"uhusiano"        },
        "kuunganisha":          { present:"kuunganisha",          continuous:"anaunganisha",          past:"aliunganisha",          noun:"muunganisho"     },
        "kutekeleza":           { present:"kutekeleza",           continuous:"anatekeleza",           past:"alitekeleza",           noun:"utekelezaji"     },
        "kufanya":              { present:"kufanya",              continuous:"anafanya",              past:"alifanya",              noun:"ufanyaji"        },
        "kuamua":               { present:"kuamua",               continuous:"anaamua",               past:"aliamua",               noun:"uamuzi"          },
        "kukumbuka":            { present:"kukumbuka",            continuous:"anakumbuka",            past:"alikumbuka",            noun:"ukumbusho"       },
        "kuorodhesha":          { present:"kuorodhesha",          continuous:"anaorodhesha",          past:"aliorodhesha",          noun:"orodha"          },
        "kuweka alama":         { present:"kuweka alama",         continuous:"anaweka alama",         past:"aliweka alama",         noun:"alama"           },
        "kuchagua":             { present:"kuchagua",             continuous:"anachagua",             past:"alichagua",             noun:"uchaguzi"        },
        "kurekebisha":          { present:"kurekebisha",          continuous:"anarekebisha",          past:"alirekebisha",          noun:"marekebisho"     },
        "kubadilisha":          { present:"kubadilisha",          continuous:"anabadilisha",          past:"alibadilisha",          noun:"mabadiliko"      },
        "kurahisisha":          { present:"kurahisisha",          continuous:"anarahisisha",          past:"alirahisisha",          noun:"urahisishaji"    },
        "kugeuza":              { present:"kugeuza",              continuous:"anageuza",              past:"aligeuza",              noun:"mageuko"         },
        "kuelezea":             { present:"kuelezea",             continuous:"anaelezea",             past:"alielezea",             noun:"maelezo"         },
        "kuwasilisha":          { present:"kuwasilisha",          continuous:"anawasilisha",          past:"aliwasilisha",          noun:"uwasilishaji"    },
        "kuripoti":             { present:"kuripoti",             continuous:"anaripoti",             past:"aliripoti",             noun:"ripoti"          },
        "kubishana":            { present:"kubishana",            continuous:"anabishana",            past:"alibishana",            noun:"mabishano"       },
        "kutetea":              { present:"kutetea",              continuous:"anatetea",              past:"alitetea",              noun:"utetezi"         },
        "kukosoa":              { present:"kukosoa",              continuous:"anakosoa",              past:"alikosoa",              noun:"ukosefu"         },
        "kuhukumu":             { present:"kuhukumu",             continuous:"anahukumu",             past:"alihukumu",             noun:"hukumu"          },
        "kupanga kwa utaratibu":{ present:"kupanga kwa utaratibu",continuous:"anapanga kwa utaratibu",past:"alipanga kwa utaratibu",noun:"utaratibu"      },
        "kupaka":               { present:"kupaka",               continuous:"anapaka",               past:"alipaka",               noun:"upakaji"         }
    }
};

function getVerbForm(verb, form, language) {
    if (!verb) return verb;
    const conj = verbConjugations[language];
    return (conj && conj[verb.toLowerCase()] && conj[verb.toLowerCase()][form])
        ? conj[verb.toLowerCase()][form]
        : verb;
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. UTILITY FUNCTIONS  (unchanged)
// ─────────────────────────────────────────────────────────────────────────────
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

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

// ─────────────────────────────────────────────────────────────────────────────
// 4. SMART ACTIVITY PARSER
//    Detects what conceptual TYPE the specificLesson is so phrases can be
//    tailored and never redundant.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns a descriptor object for the specificLesson string.
 *
 *  conceptType  — one of:
 *    'meaning'        e.g. "meaning of corruption"
 *    'importance'     e.g. "importance of biology"
 *    'meaning_importance' e.g. "meaning and importance of X"
 *    'effects'        e.g. "effects of pollution"
 *    'causes'         e.g. "causes of drought"
 *    'advantages'     e.g. "advantages of teamwork"
 *    'disadvantages'  e.g. "disadvantages of plastic use"
 *    'adv_disadv'     e.g. "advantages and disadvantages of X"
 *    'types'          e.g. "types of soil"
 *    'characteristics' e.g. "characteristics of mammals"
 *    'steps'          e.g. "steps of photosynthesis"
 *    'examples'       e.g. "examples of pollution"
 *    'definition'     e.g. "definition of democracy"
 *    'uses'           e.g. "uses of water"
 *    'functions'      e.g. "functions of the liver"
 *    'components'     e.g. "components of blood"
 *    'generic'        — no recognisable pattern
 *
 *  coreSubject — the noun after the concept keyword, or the whole phrase if generic
 *  hasConcept  — boolean: true if a concept keyword was found
 */
function parseActivity(specificLesson) {
    const s = specificLesson.toLowerCase().trim();

    const patterns = [
        // Order matters: more specific patterns first
        { re: /\b(meaning\s+and\s+importance)\b/,              type: 'meaning_importance' },
        { re: /\b(advantages?\s+and\s+disadvantages?)\b/,      type: 'adv_disadv'         },
        { re: /\b(merits?\s+and\s+demerits?)\b/,               type: 'adv_disadv'         },
        { re: /\bmeaning\b/,                                    type: 'meaning'            },
        { re: /\bimportance\b/,                                 type: 'importance'         },
        { re: /\bsignificance\b/,                               type: 'importance'         },
        { re: /\beffects?\b/,                                   type: 'effects'            },
        { re: /\bimpacts?\b/,                                   type: 'effects'            },
        { re: /\bcauses?\b/,                                    type: 'causes'             },
        { re: /\breasons?\b/,                                   type: 'causes'             },
        { re: /\badvantages?\b/,                                type: 'advantages'         },
        { re: /\bbenefits?\b/,                                  type: 'advantages'         },
        { re: /\bdisadvantages?\b/,                             type: 'disadvantages'      },
        { re: /\bdemerits?\b/,                                  type: 'disadvantages'      },
        { re: /\btypes?\b/,                                     type: 'types'              },
        { re: /\bkinds?\b/,                                     type: 'types'              },
        { re: /\bclassification\b/,                             type: 'types'              },
        { re: /\bcharacteristics?\b/,                           type: 'characteristics'    },
        { re: /\bfeatures?\b/,                                  type: 'characteristics'    },
        { re: /\bproperties\b/,                                 type: 'characteristics'    },
        { re: /\bsteps?\b/,                                     type: 'steps'              },
        { re: /\bprocess\b/,                                    type: 'steps'              },
        { re: /\bprocedure\b/,                                  type: 'steps'              },
        { re: /\bexamples?\b/,                                  type: 'examples'           },
        { re: /\bdefinition\b/,                                 type: 'definition'         },
        { re: /\buses?\b/,                                      type: 'uses'               },
        { re: /\bfunctions?\b/,                                 type: 'functions'          },
        { re: /\bcomponents?\b/,                                type: 'components'         },
        { re: /\bparts?\b/,                                     type: 'components'         },
        { re: /\bstructure\b/,                                  type: 'components'         },
        { re: /\bsolutions?\b/,                                 type: 'solutions'          },
        { re: /\bmeasures?\b/,                                  type: 'solutions'          },
        { re: /\bprevention\b/,                                 type: 'solutions'          },
    ];

    // Swahili concept patterns
    const swPatterns = [
        { re: /\bmaana\s+na\s+umuhimu\b/,    type: 'meaning_importance' },
        { re: /\bfaida\s+na\s+hasara\b/,     type: 'adv_disadv'         },
        { re: /\bmaana\b/,                   type: 'meaning'            },
        { re: /\bumuhimu\b/,                 type: 'importance'         },
        { re: /\bathara\b/,                  type: 'effects'            },
        { re: /\bsababu\b/,                  type: 'causes'             },
        { re: /\bfaida\b/,                   type: 'advantages'         },
        { re: /\bhasara\b/,                  type: 'disadvantages'      },
        { re: /\baina\b/,                    type: 'types'              },
        { re: /\bsifa\b/,                    type: 'characteristics'    },
        { re: /\bhatua\b/,                   type: 'steps'              },
        { re: /\bmifano\b/,                  type: 'examples'           },
        { re: /\btafsiri\b/,                 type: 'definition'         },
        { re: /\bmatumizi\b/,                type: 'uses'               },
        { re: /\bkazi\b/,                    type: 'functions'          },
        { re: /\bsehemu\b/,                  type: 'components'         },
        { re: /\bsuluhu\b/,                  type: 'solutions'          },
        { re: /\bkuzuia\b/,                  type: 'solutions'          },
    ];

    let found = null;
    for (const p of [...patterns, ...swPatterns]) {
        if (p.re.test(s)) { found = p; break; }
    }

    // Try to extract the core subject (what comes after "of" / "ya" / "kwa")
    let coreSubject = specificLesson;
    if (found) {
        const ofMatch = specificLesson.match(/\bof\s+(.+)$/i) ||
                        specificLesson.match(/\bya\s+(.+)$/i) ||
                        specificLesson.match(/\bkwa\s+(.+)$/i);
        if (ofMatch) coreSubject = ofMatch[1].trim();
    }

    return {
        conceptType: found ? found.type : 'generic',
        coreSubject,
        hasConcept: !!found,
        original: specificLesson
    };
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. TLM → STIMULUS MAPPER
//    Converts the user's free-text TLM field into a usable stimulus object.
//    The frontend should let users pick from a list (checkboxes / multi-select);
//    this function accepts the resulting string (comma-separated or single item).
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Normalises user TLM input and returns an array of stimulus descriptors.
 * Each descriptor: { key, labelEn, labelSw, verbEn, verbSw, pluralEn, pluralSw }
 */
const TLM_MAP = {
    // Pictures / images
    picture:   { key:'picture',   labelEn:'pictures',          labelSw:'picha',            verbEn:'displaying',   verbSw:'kuonyesha',   pluralEn:'pictures',          pluralSw:'picha'              },
    photo:     { key:'photo',     labelEn:'photographs',       labelSw:'picha',            verbEn:'showing',      verbSw:'kuonyesha',   pluralEn:'photographs',       pluralSw:'picha'              },
    // Cards
    card:      { key:'card',      labelEn:'cards',             labelSw:'kadi',             verbEn:'distributing', verbSw:'kusambaza',   pluralEn:'cards',             pluralSw:'kadi'               },
    flashcard: { key:'card',      labelEn:'flash cards',       labelSw:'kadi za haraka',   verbEn:'showing',      verbSw:'kuonyesha',   pluralEn:'flash cards',       pluralSw:'kadi za haraka'     },
    // Video
    video:     { key:'video',     labelEn:'a video clip',      labelSw:'video fupi',       verbEn:'playing',      verbSw:'kuonyesha',   pluralEn:'video clips',       pluralSw:'video'              },
    clip:      { key:'video',     labelEn:'a video clip',      labelSw:'video fupi',       verbEn:'playing',      verbSw:'kuonyesha',   pluralEn:'video clips',       pluralSw:'video'              },
    // Charts
    chart:     { key:'chart',     labelEn:'charts',            labelSw:'chati',            verbEn:'displaying',   verbSw:'kuwasilisha', pluralEn:'charts',            pluralSw:'chati'              },
    graph:     { key:'chart',     labelEn:'graphs',            labelSw:'grafu',            verbEn:'displaying',   verbSw:'kuonyesha',   pluralEn:'graphs',            pluralSw:'grafu'              },
    // Diagrams
    diagram:   { key:'diagram',   labelEn:'diagrams',          labelSw:'michoro',          verbEn:'presenting',   verbSw:'kuwasilisha', pluralEn:'diagrams',          pluralSw:'michoro'            },
    poster:    { key:'poster',    labelEn:'posters',           labelSw:'mabango',          verbEn:'displaying',   verbSw:'kuonyesha',   pluralEn:'posters',           pluralSw:'mabango'            },
    // Real objects
    object:    { key:'object',    labelEn:'real objects',      labelSw:'vitu halisi',      verbEn:'showing',      verbSw:'kuonyesha',   pluralEn:'real objects',      pluralSw:'vitu halisi'        },
    specimen:  { key:'object',    labelEn:'specimens',         labelSw:'sampuli',          verbEn:'displaying',   verbSw:'kuonyesha',   pluralEn:'specimens',         pluralSw:'sampuli'            },
    model:     { key:'model',     labelEn:'a model',           labelSw:'mfano halisi',     verbEn:'presenting',   verbSw:'kuwasilisha', pluralEn:'models',            pluralSw:'mifano halisi'      },
    // Text resources
    textbook:  { key:'textbook',  labelEn:'textbooks',         labelSw:'vitabu vya kiada', verbEn:'using',        verbSw:'kutumia',     pluralEn:'textbooks',         pluralSw:'vitabu vya kiada'   },
    worksheet: { key:'worksheet', labelEn:'worksheets',        labelSw:'karatasi za kazi', verbEn:'distributing', verbSw:'kusambaza',   pluralEn:'worksheets',        pluralSw:'karatasi za kazi'   },
    // Audio
    audio:     { key:'audio',     labelEn:'an audio recording', labelSw:'rekodi ya sauti', verbEn:'playing',      verbSw:'kuonyesha',   pluralEn:'audio recordings',  pluralSw:'rekodi za sauti'    },
    // Map / globe
    map:       { key:'map',       labelEn:'maps',              labelSw:'ramani',           verbEn:'displaying',   verbSw:'kuonyesha',   pluralEn:'maps',              pluralSw:'ramani'             },
    globe:     { key:'globe',     labelEn:'a globe',           labelSw:'globa',            verbEn:'using',        verbSw:'kutumia',     pluralEn:'globes',            pluralSw:'globa'              },
    // Generic fallback
    default:   { key:'default',   labelEn:'teaching materials',labelSw:'vifaa vya kufundishia', verbEn:'using', verbSw:'kutumia',     pluralEn:'teaching materials',labelSw:'vifaa vya kufundishia'}
};

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

/**
 * Picks one stimulus from the parsed TLM list and returns ready-to-use strings.
 * @param {string} tlmString  — value of the TLM input
 * @param {boolean} isSwahili
 */
function getStimulusFromTLM(tlmString, isSwahili) {
    const options = parseTLM(tlmString);
    const chosen  = pick(options);
    return {
        label:   isSwahili ? chosen.labelSw   : chosen.labelEn,
        verb:    isSwahili ? chosen.verbSw     : chosen.verbEn,
        plural:  isSwahili ? chosen.pluralSw   : chosen.pluralEn,
        key:     chosen.key,
        raw:     chosen
    };
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. CONCEPT-AWARE QUESTION GENERATORS
//    Build intro questions and group tasks that fit the specificLesson concept.
// ─────────────────────────────────────────────────────────────────────────────

function buildEnglishQuestions(activity, stimLabel) {
    const { conceptType, coreSubject, original } = activity;
    const q = {
        meaning_importance: [
            `(a) What do you see in the ${stimLabel}? (b) What does "${coreSubject}" mean to you? (c) Why do you think ${coreSubject} is important in everyday life?`,
            `(a) Describe what the ${stimLabel} shows. (b) How would you define ${coreSubject}? (c) What is the importance of ${coreSubject}?`,
        ],
        meaning: [
            `(a) What does the ${stimLabel} tell you? (b) In your own words, what is ${coreSubject}? (c) Where do we encounter ${coreSubject} in daily life?`,
            `(a) Describe what you observe. (b) How would you define ${coreSubject}? (c) Give one example of ${coreSubject} from real life.`,
        ],
        importance: [
            `(a) What does the ${stimLabel} show about ${coreSubject}? (b) How does ${coreSubject} affect our daily lives? (c) Why is ${coreSubject} important?`,
            `(a) What do you notice from the ${stimLabel}? (b) List two ways ${coreSubject} is useful. (c) What would happen if ${coreSubject} did not exist?`,
        ],
        effects: [
            `(a) What do you observe in the ${stimLabel}? (b) What effects does ${coreSubject} have on people/environment? (c) Are these effects positive, negative, or both?`,
            `(a) Describe the situation shown in the ${stimLabel}. (b) What are the short-term effects of ${coreSubject}? (c) What are the long-term effects?`,
        ],
        causes: [
            `(a) What does the ${stimLabel} show? (b) What do you think causes ${coreSubject}? (c) Which cause do you consider most serious and why?`,
            `(a) Describe what you see. (b) What factors lead to ${coreSubject}? (c) How can we prevent ${coreSubject}?`,
        ],
        advantages: [
            `(a) What is shown in the ${stimLabel}? (b) What are the advantages of ${coreSubject}? (c) How have these advantages benefited society?`,
            `(a) Observe and describe the ${stimLabel}. (b) List three benefits of ${coreSubject}. (c) Who benefits most from ${coreSubject}?`,
        ],
        disadvantages: [
            `(a) What do you see in the ${stimLabel}? (b) What are the disadvantages of ${coreSubject}? (c) How can we minimise these disadvantages?`,
            `(a) Describe the situation in the ${stimLabel}. (b) List the negative aspects of ${coreSubject}. (c) Suggest ways to address these challenges.`,
        ],
        adv_disadv: [
            `(a) What does the ${stimLabel} illustrate? (b) What are the advantages of ${coreSubject}? (c) What are the disadvantages of ${coreSubject}?`,
            `(a) Describe what you observe. (b) Compare the benefits and drawbacks of ${coreSubject}. (c) Overall, is ${coreSubject} more beneficial or harmful?`,
        ],
        types: [
            `(a) What does the ${stimLabel} show? (b) How many types of ${coreSubject} can you identify? (c) How are these types different from each other?`,
            `(a) Observe the ${stimLabel} carefully. (b) Classify what you see into types of ${coreSubject}. (c) Which type is most common in your environment?`,
        ],
        characteristics: [
            `(a) What features do you notice in the ${stimLabel}? (b) List three characteristics of ${coreSubject}. (c) How do these characteristics make ${coreSubject} unique?`,
            `(a) Describe what you observe. (b) What are the main characteristics of ${coreSubject}? (c) Which characteristic do you consider most important?`,
        ],
        steps: [
            `(a) What does the ${stimLabel} show? (b) Describe the steps you can identify. (c) Why is the order of steps in ${coreSubject} important?`,
            `(a) Observe the ${stimLabel} and describe the process. (b) Which step seems most critical? (c) What happens if a step is skipped?`,
        ],
        examples: [
            `(a) What does the ${stimLabel} show? (b) Give two examples of ${coreSubject} from your community. (c) How do these examples relate to real life?`,
            `(a) Describe what you see. (b) Can you identify more examples of ${coreSubject}? (c) Which example is most relevant to your daily life?`,
        ],
        definition: [
            `(a) What does the ${stimLabel} illustrate? (b) How would you define ${coreSubject} in your own words? (c) Why is it important to know the definition of ${coreSubject}?`,
            `(a) Observe and describe the ${stimLabel}. (b) What key words help define ${coreSubject}? (c) Give an example to support your definition.`,
        ],
        uses: [
            `(a) What do you see in the ${stimLabel}? (b) What are the uses of ${coreSubject}? (c) Which use of ${coreSubject} is most important in everyday life?`,
            `(a) Describe the ${stimLabel}. (b) List three uses of ${coreSubject}. (c) How would life be different without ${coreSubject}?`,
        ],
        functions: [
            `(a) What does the ${stimLabel} show? (b) What are the main functions of ${coreSubject}? (c) What happens when ${coreSubject} fails to perform its functions?`,
            `(a) Describe what you observe. (b) List the functions of ${coreSubject}. (c) Which function is most critical?`,
        ],
        components: [
            `(a) What parts can you identify in the ${stimLabel}? (b) What are the components of ${coreSubject}? (c) How do the components work together?`,
            `(a) Describe the structure shown in the ${stimLabel}. (b) Name the main components of ${coreSubject}. (c) What is the role of each component?`,
        ],
        solutions: [
            `(a) What problem does the ${stimLabel} show? (b) What solutions can address ${coreSubject}? (c) Which solution is most practical in your community?`,
            `(a) Describe the challenge shown. (b) How can we prevent or solve ${coreSubject}? (c) Who is responsible for implementing these solutions?`,
        ],
        generic: [
            `(a) What do you observe from the ${stimLabel}? (b) How does this relate to ${original}? (c) Why is ${original} important in everyday life?`,
            `(a) Describe what the ${stimLabel} shows. (b) How is this connected to ${original}? (c) What questions does this raise for you?`,
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
            `(a) State the meaning of ${coreSubject}. (b) Discuss why ${coreSubject} is important.`,
        ],
        meaning: [
            `(a) Define ${coreSubject} using examples. (b) Explain where ${coreSubject} is encountered in everyday life.`,
            `(a) State the meaning of ${coreSubject}. (b) Share examples with the class.`,
        ],
        importance: [
            `(a) List the importance of ${coreSubject}. (b) Discuss how ${coreSubject} affects the community.`,
            `(a) Identify at least three reasons why ${coreSubject} is important. (b) Present their findings to the class.`,
        ],
        effects: [
            `(a) Identify the positive and negative effects of ${coreSubject}. (b) Discuss how these effects impact daily life.`,
            `(a) List the short-term effects of ${coreSubject}. (b) List the long-term effects of ${coreSubject}.`,
        ],
        causes: [
            `(a) Identify the main causes of ${coreSubject}. (b) Rank the causes from most to least serious.`,
            `(a) List the causes of ${coreSubject}. (b) Discuss which cause is most preventable.`,
        ],
        advantages: [
            `(a) List the advantages of ${coreSubject}. (b) Discuss how these advantages benefit individuals and society.`,
            `(a) Identify and explain the benefits of ${coreSubject}. (b) Share examples of these advantages.`,
        ],
        disadvantages: [
            `(a) List the disadvantages of ${coreSubject}. (b) Suggest ways to reduce or overcome these disadvantages.`,
            `(a) Identify the drawbacks of ${coreSubject}. (b) Discuss possible solutions to these problems.`,
        ],
        adv_disadv: [
            `(a) List the advantages of ${coreSubject}. (b) List the disadvantages of ${coreSubject} and suggest ways to address them.`,
            `(a) Compare the advantages and disadvantages of ${coreSubject}. (b) Decide as a group whether the benefits outweigh the drawbacks.`,
        ],
        types: [
            `(a) Identify and name the types of ${coreSubject}. (b) Describe the characteristics of each type.`,
            `(a) Classify ${coreSubject} into its different types. (b) Give an example of each type.`,
        ],
        characteristics: [
            `(a) List the characteristics of ${coreSubject}. (b) Explain how each characteristic can be observed or measured.`,
            `(a) Identify the main features of ${coreSubject}. (b) Compare these characteristics with related concepts.`,
        ],
        steps: [
            `(a) List the steps involved in ${coreSubject} in the correct order. (b) Explain what happens at each step.`,
            `(a) Arrange the steps of ${coreSubject} in sequence. (b) Identify which step is most critical.`,
        ],
        examples: [
            `(a) Give at least three examples of ${coreSubject}. (b) Explain how each example relates to real life.`,
            `(a) Identify examples of ${coreSubject} in the local environment. (b) Present and discuss each example.`,
        ],
        definition: [
            `(a) Write a definition of ${coreSubject} in their own words. (b) Support their definition with at least one example.`,
            `(a) Define ${coreSubject} as a group. (b) Compare their definition with what is in the textbook.`,
        ],
        uses: [
            `(a) List the uses of ${coreSubject}. (b) Rank the uses from most to least important.`,
            `(a) Identify uses of ${coreSubject} in everyday life. (b) Share examples with the class.`,
        ],
        functions: [
            `(a) Identify the main functions of ${coreSubject}. (b) Explain the consequence if each function is not performed.`,
            `(a) List and describe the functions of ${coreSubject}. (b) Relate these functions to real-life situations.`,
        ],
        components: [
            `(a) Name the components of ${coreSubject}. (b) Explain the role of each component.`,
            `(a) Identify the parts of ${coreSubject}. (b) Draw or describe how the components are arranged.`,
        ],
        solutions: [
            `(a) Propose solutions to ${coreSubject}. (b) Evaluate which solution is most effective in their community.`,
            `(a) List possible solutions to the problem of ${coreSubject}. (b) Select the best solution and justify their choice.`,
        ],
        generic: [
            `(a) ${V} ${original} in their own words. (b) Identify the relevance of ${original} in daily life.`,
            `(a) Discuss the key ideas about ${original}. (b) ${V} their findings with examples.`,
        ],
    };
    return pick(tasks[conceptType] || tasks.generic);
}

// Swahili equivalents
function buildSwahiliQuestions(activity, stimLabel) {
    const { conceptType, coreSubject, original } = activity;
    const q = {
        meaning_importance: [
            `(a) Unaona nini katika ${stimLabel}? (b) Maana ya ${coreSubject} ni nini? (c) Kwa nini ${coreSubject} ni muhimu katika maisha ya kila siku?`,
            `(a) Eleza unachokiona. (b) Unaweza kueleza maana ya ${coreSubject}? (c) Taja umuhimu mmoja wa ${coreSubject}.`,
        ],
        meaning: [
            `(a) ${stimLabel} inaonyesha nini? (b) Kwa maneno yako, ${coreSubject} maana yake ni nini? (c) Wapi tunakutana na ${coreSubject} maishani?`,
            `(a) Eleza unachokiona. (b) Toa mfano wa ${coreSubject}. (c) Unafikiri ${coreSubject} ni muhimu vipi?`,
        ],
        importance: [
            `(a) ${stimLabel} inaonyesha nini kuhusu ${coreSubject}? (b) ${coreSubject} inaathiri vipi maisha yetu? (c) Kwa nini ${coreSubject} ni muhimu?`,
            `(a) Eleza unachokiona. (b) Taja njia mbili ambazo ${coreSubject} ni muhimu. (c) Nini kingetokea bila ${coreSubject}?`,
        ],
        effects: [
            `(a) Unaona nini katika ${stimLabel}? (b) Ni athara gani za ${coreSubject} kwa watu/mazingira? (c) Athara hizi ni nzuri, mbaya, au zote mbili?`,
            `(a) Eleza hali inayoonekana. (b) Athara za muda mfupi za ${coreSubject} ni zipi? (c) Athara za muda mrefu ni zipi?`,
        ],
        causes: [
            `(a) ${stimLabel} inaonyesha nini? (b) Unafikiri nini husababisha ${coreSubject}? (c) Sababu ipi unayoona kuwa mbaya zaidi?`,
            `(a) Eleza unachokiona. (b) Ni mambo gani yanayosababisha ${coreSubject}? (c) Tunawezaje kuzuia ${coreSubject}?`,
        ],
        advantages: [
            `(a) ${stimLabel} inaonyesha nini? (b) Faida za ${coreSubject} ni zipi? (c) Faida hizi zinanufaisha jamii vipi?`,
            `(a) Eleza unachokiona. (b) Orodhesha faida tatu za ${coreSubject}. (c) Ni nani anayenufaika zaidi na ${coreSubject}?`,
        ],
        disadvantages: [
            `(a) Unaona nini katika ${stimLabel}? (b) Hasara za ${coreSubject} ni zipi? (c) Tunawezaje kupunguza hasara hizi?`,
            `(a) Eleza hali inayoonekana. (b) Orodhesha hasara za ${coreSubject}. (c) Pendekeza jinsi ya kushughulikia changamoto hizi.`,
        ],
        adv_disadv: [
            `(a) ${stimLabel} inaonyesha nini? (b) Faida za ${coreSubject} ni zipi? (c) Hasara za ${coreSubject} ni zipi?`,
            `(a) Eleza unachokiona. (b) Linganisha faida na hasara za ${coreSubject}. (c) Kwa ujumla, ${coreSubject} ina manufaa au madhara zaidi?`,
        ],
        types: [
            `(a) ${stimLabel} inaonyesha nini? (b) Aina ngapi za ${coreSubject} unaweza kutambua? (c) Aina hizi zinatofautiana vipi?`,
            `(a) Chunguza ${stimLabel} kwa makini. (b) Ainisha unachokiona katika aina za ${coreSubject}. (c) Ni aina gani inayopatikana zaidi katika mazingira yako?`,
        ],
        characteristics: [
            `(a) Ni sifa gani unazoziona katika ${stimLabel}? (b) Taja sifa tatu za ${coreSubject}. (c) Sifa hizi zinafanya ${coreSubject} kuwa ya kipekee vipi?`,
            `(a) Eleza unachokiona. (b) Sifa kuu za ${coreSubject} ni zipi? (c) Ni sifa gani unayoona kuwa muhimu zaidi?`,
        ],
        steps: [
            `(a) ${stimLabel} inaonyesha nini? (b) Eleza hatua unazoziona. (c) Kwa nini mpangilio wa hatua katika ${coreSubject} ni muhimu?`,
            `(a) Chunguza ${stimLabel} na eleza mchakato. (b) Hatua ipi inaonekana kuwa muhimu zaidi? (c) Nini kinatokea ikiwa hatua moja inarukwa?`,
        ],
        examples: [
            `(a) ${stimLabel} inaonyesha nini? (b) Toa mifano miwili ya ${coreSubject} kutoka katika jamii yako. (c) Mifano hii inahusiana vipi na maisha?`,
            `(a) Eleza unachokiona. (b) Unaweza kutaja mifano mingine ya ${coreSubject}? (c) Mfano upi una umuhimu zaidi katika maisha yako ya kila siku?`,
        ],
        definition: [
            `(a) ${stimLabel} inaonyesha nini? (b) Unaweza kueleza ${coreSubject} kwa maneno yako? (c) Kwa nini ni muhimu kujua maana ya ${coreSubject}?`,
            `(a) Chunguza na eleza ${stimLabel}. (b) Ni maneno gani yanayosaidia kufafanua ${coreSubject}? (c) Toa mfano kuunga mkono ufafanuzi wako.`,
        ],
        uses: [
            `(a) Unaona nini katika ${stimLabel}? (b) Matumizi ya ${coreSubject} ni yapi? (c) Ni matumizi gani ya ${coreSubject} yanayohusika zaidi na maisha ya kila siku?`,
            `(a) Eleza ${stimLabel}. (b) Orodhesha matumizi matatu ya ${coreSubject}. (c) Maisha yangebadilika vipi bila ${coreSubject}?`,
        ],
        functions: [
            `(a) ${stimLabel} inaonyesha nini? (b) Kazi kuu za ${coreSubject} ni zipi? (c) Nini kinatokea ikiwa ${coreSubject} haikufanya kazi zake?`,
            `(a) Eleza unachokiona. (b) Orodhesha kazi za ${coreSubject}. (c) Ni kazi gani inayohusika zaidi?`,
        ],
        components: [
            `(a) Ni sehemu gani unazoweza kutambua katika ${stimLabel}? (b) Sehemu za ${coreSubject} ni zipi? (c) Sehemu hizi zinafanya kazi pamoja vipi?`,
            `(a) Eleza muundo unaoonekana katika ${stimLabel}. (b) Taja sehemu kuu za ${coreSubject}. (c) Ni jukumu gani la kila sehemu?`,
        ],
        solutions: [
            `(a) ${stimLabel} inaonyesha tatizo gani? (b) Ni suluhu gani zinazoweza kushughulikia ${coreSubject}? (c) Ni suluhu gani inayofaa zaidi katika jamii yako?`,
            `(a) Eleza changamoto inayoonekana. (b) Tunawezaje kuzuia au kutatua ${coreSubject}? (c) Ni nani anayehusika kutekeleza suluhu hizi?`,
        ],
        generic: [
            `(a) Unaona nini katika ${stimLabel}? (b) Hii inahusiana vipi na ${original}? (c) Kwa nini ${original} ni muhimu katika maisha ya kila siku?`,
            `(a) Eleza unachokiona. (b) Hii inakusaidia vipi kuelewa ${original}? (c) Ni maswali gani yanayokuja akilini mwako?`,
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
            `(a) Kusema maana ya ${coreSubject}. (b) Kujadili kwa nini ${coreSubject} ni muhimu.`,
        ],
        meaning: [
            `(a) Kueleza maana ya ${coreSubject} kwa mfano. (b) Kuonyesha wapi ${coreSubject} inatokea katika maisha ya kila siku.`,
            `(a) Kusema maana ya ${coreSubject}. (b) Kushirikiana na darasa mifano yao.`,
        ],
        importance: [
            `(a) Kuorodhesha umuhimu wa ${coreSubject}. (b) Kujadili jinsi ${coreSubject} inavyoathiri jamii.`,
            `(a) Kutaja sababu tatu za kwa nini ${coreSubject} ni muhimu. (b) Kuwasilisha matokeo yao kwa darasa.`,
        ],
        effects: [
            `(a) Kutambua athara nzuri na mbaya za ${coreSubject}. (b) Kujadili jinsi athara hizi zinavyoathiri maisha ya kila siku.`,
            `(a) Kuorodhesha athara za muda mfupi za ${coreSubject}. (b) Kuorodhesha athara za muda mrefu za ${coreSubject}.`,
        ],
        causes: [
            `(a) Kutambua sababu kuu za ${coreSubject}. (b) Kupanga sababu kutoka mbaya zaidi hadi kidogo.`,
            `(a) Kuorodhesha sababu za ${coreSubject}. (b) Kujadili ni sababu ipi inayoweza kuzuiwa zaidi.`,
        ],
        advantages: [
            `(a) Kuorodhesha faida za ${coreSubject}. (b) Kujadili jinsi faida hizi zinavyonufaisha watu na jamii.`,
            `(a) Kutambua na kueleza faida za ${coreSubject}. (b) Kushirikiana mifano ya faida hizi.`,
        ],
        disadvantages: [
            `(a) Kuorodhesha hasara za ${coreSubject}. (b) Kupendekeza njia za kupunguza au kushinda hasara hizi.`,
            `(a) Kutambua mapungufu ya ${coreSubject}. (b) Kujadili suluhu zinazowezekana.`,
        ],
        adv_disadv: [
            `(a) Kuorodhesha faida za ${coreSubject}. (b) Kuorodhesha hasara za ${coreSubject} na kupendekeza njia za kushughulikia.`,
            `(a) Kulinganisha faida na hasara za ${coreSubject}. (b) Kuamua kwa vikundi kama faida ni zaidi ya hasara.`,
        ],
        types: [
            `(a) Kutambua na kutaja aina za ${coreSubject}. (b) Kueleza sifa za kila aina.`,
            `(a) Kuainisha ${coreSubject} katika aina zake tofauti. (b) Kutoa mfano wa kila aina.`,
        ],
        characteristics: [
            `(a) Kuorodhesha sifa za ${coreSubject}. (b) Kueleza jinsi kila sifa inavyoweza kuonekana au kupimwa.`,
            `(a) Kutambua vipengele vikuu vya ${coreSubject}. (b) Kulinganisha sifa hizi na dhana zinazohusiana.`,
        ],
        steps: [
            `(a) Kuorodhesha hatua zinazohusika katika ${coreSubject} kwa mpangilio sahihi. (b) Kueleza kinachotokea katika kila hatua.`,
            `(a) Kupanga hatua za ${coreSubject} kwa mfululizo. (b) Kutambua hatua ipi ni muhimu zaidi.`,
        ],
        examples: [
            `(a) Kutoa mifano angalau mitatu ya ${coreSubject}. (b) Kueleza jinsi kila mfano unavyohusiana na maisha halisi.`,
            `(a) Kutambua mifano ya ${coreSubject} katika mazingira ya karibu. (b) Kuwasilisha na kujadili kila mfano.`,
        ],
        definition: [
            `(a) Kuandika ufafanuzi wa ${coreSubject} kwa maneno yao wenyewe. (b) Kuunga mkono ufafanuzi wao kwa mfano mmoja.`,
            `(a) Kufafanua ${coreSubject} kama kikundi. (b) Kulinganisha ufafanuzi wao na ule ulioandikwa kwenye kitabu.`,
        ],
        uses: [
            `(a) Kuorodhesha matumizi ya ${coreSubject}. (b) Kupanga matumizi kutoka muhimu zaidi hadi kidogo.`,
            `(a) Kutambua matumizi ya ${coreSubject} katika maisha ya kila siku. (b) Kushirikiana mifano na darasa.`,
        ],
        functions: [
            `(a) Kutambua kazi kuu za ${coreSubject}. (b) Kueleza matokeo ikiwa kazi moja haikufanywa.`,
            `(a) Kuorodhesha na kueleza kazi za ${coreSubject}. (b) Kuhusisha kazi hizi na hali halisi.`,
        ],
        components: [
            `(a) Kutaja sehemu za ${coreSubject}. (b) Kueleza jukumu la kila sehemu.`,
            `(a) Kutambua sehemu za ${coreSubject}. (b) Kuchora au kueleza jinsi sehemu zinavyopangwa.`,
        ],
        solutions: [
            `(a) Kupendekeza suluhu za ${coreSubject}. (b) Kutathmini ni suluhu gani inayofaa zaidi katika jamii yao.`,
            `(a) Kuorodhesha suluhu zinazowezekana kwa tatizo la ${coreSubject}. (b) Kuchagua suluhu bora na kueleza sababu.`,
        ],
        generic: [
            `(a) ${V} ${original} kwa maneno yao wenyewe. (b) Kutambua umuhimu wa ${original} katika maisha ya kila siku.`,
            `(a) Kujadili dhana kuu za ${original}. (b) Kushirikiana matokeo na mifano.`,
        ],
    };
    return pick(tasks[conceptType] || tasks.generic);
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. ASSESSMENT BUILDERS — concept-aware, no verb redundancy
// ─────────────────────────────────────────────────────────────────────────────

function buildEnglishAssessment(conceptType, coreSubject, original, stage) {
    const assessed = {
        meaning_importance:  [`The meaning and importance of ${coreSubject} are correctly stated`, `Students accurately define and list the importance of ${coreSubject}`],
        meaning:             [`The meaning of ${coreSubject} is correctly explained`, `Students accurately define ${coreSubject} in their own words`],
        importance:          [`The importance of ${coreSubject} is correctly identified`, `Students list and explain the importance of ${coreSubject}`],
        effects:             [`The effects of ${coreSubject} are correctly identified and explained`, `Students accurately state the positive and negative effects of ${coreSubject}`],
        causes:              [`The causes of ${coreSubject} are correctly identified`, `Students list and rank the causes of ${coreSubject}`],
        advantages:          [`The advantages of ${coreSubject} are correctly stated`, `Students identify and explain the benefits of ${coreSubject}`],
        disadvantages:       [`The disadvantages of ${coreSubject} are correctly identified`, `Students propose solutions to the drawbacks of ${coreSubject}`],
        adv_disadv:          [`The advantages and disadvantages of ${coreSubject} are correctly compared`, `Students evaluate the benefits and drawbacks of ${coreSubject}`],
        types:               [`The types of ${coreSubject} are correctly identified and described`, `Students classify and give examples of each type of ${coreSubject}`],
        characteristics:     [`The characteristics of ${coreSubject} are correctly listed and explained`, `Students identify the features of ${coreSubject} accurately`],
        steps:               [`The steps of ${coreSubject} are arranged in the correct order`, `Students correctly describe each step involved in ${coreSubject}`],
        examples:            [`Relevant examples of ${coreSubject} are correctly identified`, `Students provide appropriate examples of ${coreSubject} from real life`],
        definition:          [`${capitalizeFirst(coreSubject)} is correctly defined in students' own words`, `Students write an accurate definition of ${coreSubject}`],
        uses:                [`The uses of ${coreSubject} are correctly identified`, `Students list and rank the uses of ${coreSubject}`],
        functions:           [`The functions of ${coreSubject} are correctly stated`, `Students explain what each function of ${coreSubject} does`],
        components:          [`The components of ${coreSubject} are correctly named and described`, `Students identify the role of each component of ${coreSubject}`],
        solutions:           [`Appropriate solutions to ${coreSubject} are proposed`, `Students evaluate and select the most practical solution to ${coreSubject}`],
        generic:             [`Students demonstrate understanding of ${original}`, `Key concepts of ${original} are correctly explained`],
    };
    return pick(assessed[conceptType] || assessed.generic);
}

function buildSwahiliAssessment(conceptType, coreSubject, original, stage) {
    const assessed = {
        meaning_importance:  [`Maana na umuhimu wa ${coreSubject} vimesemwa kwa usahihi`, `Wanafunzi wanabainisha maana na umuhimu wa ${coreSubject} ipasavyo`],
        meaning:             [`Maana ya ${coreSubject} imefafanuliwa kwa usahihi`, `Wanafunzi wanaweza kueleza maana ya ${coreSubject} kwa maneno yao`],
        importance:          [`Umuhimu wa ${coreSubject} umetajwa kwa usahihi`, `Wanafunzi wanaorodhesha umuhimu wa ${coreSubject} ipasavyo`],
        effects:             [`Athara za ${coreSubject} zimebainishwa na kuelezwa kwa usahihi`, `Wanafunzi wanataja athara nzuri na mbaya za ${coreSubject}`],
        causes:              [`Sababu za ${coreSubject} zimebainishwa kwa usahihi`, `Wanafunzi wanaorodhesha na kupanga sababu za ${coreSubject}`],
        advantages:          [`Faida za ${coreSubject} zimetajwa kwa usahihi`, `Wanafunzi wanatambua na kueleza faida za ${coreSubject}`],
        disadvantages:       [`Hasara za ${coreSubject} zimebainishwa kwa usahihi`, `Wanafunzi wanapendekeza suluhu za changamoto za ${coreSubject}`],
        adv_disadv:          [`Faida na hasara za ${coreSubject} zimelinganishwa kwa usahihi`, `Wanafunzi wanatathmini faida na hasara za ${coreSubject}`],
        types:               [`Aina za ${coreSubject} zimebainishwa na kuelezwa kwa usahihi`, `Wanafunzi wanaainisha na kutoa mifano ya kila aina ya ${coreSubject}`],
        characteristics:     [`Sifa za ${coreSubject} zimeorodheshwa na kuelezwa kwa usahihi`, `Wanafunzi wanatambua sifa za ${coreSubject} ipasavyo`],
        steps:               [`Hatua za ${coreSubject} zimepangwa kwa mpangilio sahihi`, `Wanafunzi wanaeleza kwa usahihi kila hatua ya ${coreSubject}`],
        examples:            [`Mifano sahihi ya ${coreSubject} imetajwa`, `Wanafunzi wanatoa mifano inayofaa ya ${coreSubject} kutoka maishani`],
        definition:          [`${capitalizeFirst(coreSubject)} imefafanuliwa kwa usahihi kwa maneno ya wanafunzi`, `Wanafunzi wanaandika ufafanuzi sahihi wa ${coreSubject}`],
        uses:                [`Matumizi ya ${coreSubject} yamebainishwa kwa usahihi`, `Wanafunzi wanaorodhesha na kupanga matumizi ya ${coreSubject}`],
        functions:           [`Kazi za ${coreSubject} zimetajwa kwa usahihi`, `Wanafunzi wanaeleza kazi ya kila sehemu ya ${coreSubject}`],
        components:          [`Sehemu za ${coreSubject} zimetajwa na kuelezwa kwa usahihi`, `Wanafunzi wanatambua jukumu la kila sehemu ya ${coreSubject}`],
        solutions:           [`Suluhu zinazofaa za ${coreSubject} zimependekezwa`, `Wanafunzi wanalinganisha na kuchagua suluhu bora ya ${coreSubject}`],
        generic:             [`Wanafunzi wanaonyesha uelewa wa ${original}`, `Dhana kuu za ${original} zimefafanuliwa kwa usahihi`],
    };
    return pick(assessed[conceptType] || assessed.generic);
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. REALIZATION (INDIVIDUAL) ACTIVITY BUILDER
// ─────────────────────────────────────────────────────────────────────────────

function buildEnglishRealization(verb, verbIng, activity, stimulus) {
    const { conceptType, coreSubject, original } = activity;
    const items = stimulus.key === 'card'    ? ['card', 'card', 'task card']
                : stimulus.key === 'video'   ? ['question strip', 'card', 'picture']
                : stimulus.key === 'diagram' ? ['diagram', 'diagram card', 'picture']
                : ['picture', 'card', 'item'];
    const item = pick(items);

    const teacherActions = {
        meaning_importance:  `Ask each student to select a ${item} and state the meaning and importance of ${coreSubject}`,
        meaning:             `Ask each student to pick a ${item} and define ${coreSubject}`,
        importance:          `Ask each student to choose a ${item} and list at least two points on the importance of ${coreSubject}`,
        effects:             `Ask each student to take a ${item} and state the effects of ${coreSubject}`,
        causes:              `Ask each student to select a ${item} and identify the causes of ${coreSubject}`,
        advantages:          `Ask each student to pick a ${item} and state the advantages of ${coreSubject}`,
        disadvantages:       `Ask each student to choose a ${item} and state the disadvantages of ${coreSubject}`,
        adv_disadv:          `Ask each student to take a ${item} and compare the advantages and disadvantages of ${coreSubject}`,
        types:               `Ask each student to select a ${item} and identify the type of ${coreSubject} it represents`,
        characteristics:     `Ask each student to pick a ${item} and list three characteristics of ${coreSubject}`,
        steps:               `Ask each student to choose a ${item} and arrange or describe the steps of ${coreSubject}`,
        examples:            `Ask each student to take a ${item} and give an example of ${coreSubject}`,
        definition:          `Ask each student to select a ${item} and write or state a definition of ${coreSubject}`,
        uses:                `Ask each student to pick a ${item} and state at least two uses of ${coreSubject}`,
        functions:           `Ask each student to choose a ${item} and explain one function of ${coreSubject}`,
        components:          `Ask each student to take a ${item} and name and describe a component of ${coreSubject}`,
        solutions:           `Ask each student to select a ${item} and propose a solution to ${coreSubject}`,
        generic:             `Ask each student to select a ${item} and ${verb} ${original}`,
    };

    const studentActions = {
        meaning_importance:  `Selecting a ${item} and stating the meaning and importance of ${coreSubject}`,
        meaning:             `Picking a ${item} and defining ${coreSubject} in their own words`,
        importance:          `Choosing a ${item} and listing the importance of ${coreSubject}`,
        effects:             `Taking a ${item} and stating the effects of ${coreSubject}`,
        causes:              `Selecting a ${item} and identifying the causes of ${coreSubject}`,
        advantages:          `Picking a ${item} and stating the advantages of ${coreSubject}`,
        disadvantages:       `Choosing a ${item} and stating the disadvantages of ${coreSubject}`,
        adv_disadv:          `Taking a ${item} and comparing the advantages and disadvantages of ${coreSubject}`,
        types:               `Selecting a ${item} and identifying which type of ${coreSubject} it shows`,
        characteristics:     `Picking a ${item} and listing characteristics of ${coreSubject}`,
        steps:               `Choosing a ${item} and arranging or describing the steps of ${coreSubject}`,
        examples:            `Taking a ${item} and giving a real-life example of ${coreSubject}`,
        definition:          `Selecting a ${item} and stating a definition of ${coreSubject}`,
        uses:                `Picking a ${item} and stating uses of ${coreSubject}`,
        functions:           `Choosing a ${item} and explaining a function of ${coreSubject}`,
        components:          `Taking a ${item} and naming a component of ${coreSubject}`,
        solutions:           `Selecting a ${item} and proposing a solution to ${coreSubject}`,
        generic:             `Selecting a ${item} and ${verbIng} ${original}`,
    };

    const teacher   = teacherActions[conceptType] || teacherActions.generic;
    const student   = studentActions[conceptType] || studentActions.generic;
    const assessment = buildEnglishAssessment(conceptType, coreSubject, original, 'realization');
    return { teacher, student, assessment };
}

function buildSwahiliRealization(verb, activity, stimulus) {
    const { conceptType, coreSubject, original } = activity;
    const verbBase = verb.startsWith('ku') ? verb : 'ku' + verb;
    const items = stimulus.key === 'card'    ? ['kadi', 'kadi', 'kadi ya kazi']
                : stimulus.key === 'video'   ? ['karatasi ya swali', 'kadi', 'picha']
                : stimulus.key === 'diagram' ? ['mchoro', 'kadi ya mchoro', 'picha']
                : ['picha', 'kadi', 'kitu'];
    const item = pick(items);

    const teacherActions = {
        meaning_importance:  `Kuuliza kila mwanafunzi kuchagua ${item} na kusema maana na umuhimu wa ${coreSubject}`,
        meaning:             `Kuuliza kila mwanafunzi kuchukua ${item} na kueleza maana ya ${coreSubject}`,
        importance:          `Kuuliza kila mwanafunzi kuchagua ${item} na kutaja mambo mawili kuhusu umuhimu wa ${coreSubject}`,
        effects:             `Kuuliza kila mwanafunzi kuchukua ${item} na kutaja athara za ${coreSubject}`,
        causes:              `Kuuliza kila mwanafunzi kuchagua ${item} na kutambua sababu za ${coreSubject}`,
        advantages:          `Kuuliza kila mwanafunzi kuchukua ${item} na kutaja faida za ${coreSubject}`,
        disadvantages:       `Kuuliza kila mwanafunzi kuchagua ${item} na kutaja hasara za ${coreSubject}`,
        adv_disadv:          `Kuuliza kila mwanafunzi kuchukua ${item} na kulinganisha faida na hasara za ${coreSubject}`,
        types:               `Kuuliza kila mwanafunzi kuchagua ${item} na kutambua ni aina gani ya ${coreSubject} inayowakilishwa`,
        characteristics:     `Kuuliza kila mwanafunzi kuchukua ${item} na kutaja sifa tatu za ${coreSubject}`,
        steps:               `Kuuliza kila mwanafunzi kuchagua ${item} na kupanga au kueleza hatua za ${coreSubject}`,
        examples:            `Kuuliza kila mwanafunzi kuchukua ${item} na kutoa mfano wa ${coreSubject}`,
        definition:          `Kuuliza kila mwanafunzi kuchagua ${item} na kuandika au kusema ufafanuzi wa ${coreSubject}`,
        uses:                `Kuuliza kila mwanafunzi kuchukua ${item} na kutaja matumizi mawili ya ${coreSubject}`,
        functions:           `Kuuliza kila mwanafunzi kuchagua ${item} na kueleza kazi moja ya ${coreSubject}`,
        components:          `Kuuliza kila mwanafunzi kuchukua ${item} na kutaja na kueleza sehemu moja ya ${coreSubject}`,
        solutions:           `Kuuliza kila mwanafunzi kuchagua ${item} na kupendekeza suluhu ya ${coreSubject}`,
        generic:             `Kuuliza kila mwanafunzi kuchagua ${item} na ${verbBase} ${original}`,
    };

    const studentActions = {
        meaning_importance:  `Kuchagua ${item} na kusema maana na umuhimu wa ${coreSubject}`,
        meaning:             `Kuchukua ${item} na kueleza maana ya ${coreSubject} kwa maneno yake mwenyewe`,
        importance:          `Kuchagua ${item} na kutaja umuhimu wa ${coreSubject}`,
        effects:             `Kuchukua ${item} na kutaja athara za ${coreSubject}`,
        causes:              `Kuchagua ${item} na kutambua sababu za ${coreSubject}`,
        advantages:          `Kuchukua ${item} na kutaja faida za ${coreSubject}`,
        disadvantages:       `Kuchagua ${item} na kutaja hasara za ${coreSubject}`,
        adv_disadv:          `Kuchukua ${item} na kulinganisha faida na hasara za ${coreSubject}`,
        types:               `Kuchagua ${item} na kutambua aina ya ${coreSubject} inayoonyeshwa`,
        characteristics:     `Kuchukua ${item} na kutaja sifa za ${coreSubject}`,
        steps:               `Kuchagua ${item} na kupanga au kueleza hatua za ${coreSubject}`,
        examples:            `Kuchukua ${item} na kutoa mfano wa kweli wa ${coreSubject}`,
        definition:          `Kuchagua ${item} na kusema ufafanuzi wa ${coreSubject}`,
        uses:                `Kuchukua ${item} na kutaja matumizi ya ${coreSubject}`,
        functions:           `Kuchagua ${item} na kueleza kazi ya ${coreSubject}`,
        components:          `Kuchukua ${item} na kutaja sehemu ya ${coreSubject}`,
        solutions:           `Kuchagua ${item} na kupendekeza suluhu ya ${coreSubject}`,
        generic:             `Kuchagua ${item} na ${verbBase} ${original}`,
    };

    const teacher    = teacherActions[conceptType] || teacherActions.generic;
    const student    = studentActions[conceptType] || studentActions.generic;
    const assessment = buildSwahiliAssessment(conceptType, coreSubject, original, 'realization');
    return { teacher, student, assessment };
}

// ─────────────────────────────────────────────────────────────────────────────
// 9.  MAIN ENGLISH PHRASE GENERATOR  (replaces old generateEnglishPhrases)
// ─────────────────────────────────────────────────────────────────────────────
function generateEnglishPhrases(verb, specificLesson, isContinue, tlmString) {
    const verbIng  = getVerbForm(verb, 'gerund',  'english') || (verb + 'ing');
    const verbBase = verb.toLowerCase();

    const activity  = parseActivity(specificLesson);
    const stimulus  = getStimulusFromTLM(tlmString, false);
    const questions = buildEnglishQuestions(activity, stimulus.label);
    const groupTask = buildEnglishGroupTasks(verbBase, activity);

    const phrases = {};

    // ── INTRODUCTION ──
    if (isContinue) {
        const introTeacher = [
            `${capitalizeFirst(stimulus.verb)} ${stimulus.label} from the previous lesson and asking students questions about ${activity.original}`,
            `Showing resources used in the previous lesson and posing review questions about ${activity.original} to the class`,
            `Presenting ${stimulus.label} from the last lesson and facilitating a brief recall discussion on ${activity.original}`,
            `Reviewing teaching materials from the previous lesson and asking guiding questions to check students' understanding of ${activity.original}`,
        ];
        const introStudent = [
            `Observing the ${stimulus.label} and responding to questions about ${activity.original} from the previous lesson`,
            `Examining the resources and answering review questions on ${activity.original}`,
            `Participating in a recall discussion about ${activity.original} from the previous lesson`,
            `Engaging with the materials and answering questions based on prior knowledge of ${activity.original}`,
        ];
        phrases.intro1 = pick(introTeacher);
        phrases.intro2 = pick(introStudent);
        phrases.intro3 = `Review questions about ${activity.original} from the previous lesson are correctly answered`;
    } else {
        const introTeacherOptions = [
            `${capitalizeFirst(stimulus.verb)} ${stimulus.label} related to ${activity.original} and asking questions about what students observe`,
            `${capitalizeFirst(stimulus.verb)} ${stimulus.label} that illustrate ${activity.original} and posing questions to stimulate prior knowledge`,
            `${capitalizeFirst(stimulus.verb)} ${stimulus.label} about ${activity.original} and inviting students to share what they already know`,
        ];
        const introStudentOptions = [
            `Observing the ${stimulus.label} and responding to questions about ${activity.original}`,
            `Examining the ${stimulus.label} and sharing what they know about ${activity.original}`,
            `Studying the ${stimulus.label} and answering introductory questions on ${activity.original}`,
        ];
        phrases.intro1 = pick(introTeacherOptions);
        phrases.intro2 = pick(introStudentOptions);
        phrases.intro3 = `Introductory questions about ${activity.original} are answered`;
    }

    // ── COMPETENCE DEVELOPMENT ──
    const devTeacher = [
        `${capitalizeFirst(stimulus.verb)} ${stimulus.label} on ${activity.original} to guide students in understanding the topic, using the following guiding questions: ${questions}`,
        `Using ${stimulus.label} to introduce ${activity.original} and guiding students with questions such as: ${questions}`,
        `Presenting ${stimulus.label} about ${activity.original} and using the following questions to develop understanding: ${questions}`,
        `${capitalizeFirst(stimulus.verb)} ${stimulus.label} related to ${activity.original} and facilitating discussion through these guiding questions: ${questions}`,
    ];
    const devStudent = [
        `Studying the ${stimulus.label} and answering the guiding questions about ${activity.original}`,
        `Observing the ${stimulus.label} and responding to questions on ${activity.original}`,
        `Engaging with the ${stimulus.label} and providing answers to the questions about ${activity.original}`,
    ];
    phrases.new1 = pick(devTeacher);
    phrases.new2 = pick(devStudent);
    phrases.new3 = buildEnglishAssessment(activity.conceptType, activity.coreSubject, activity.original, 'development');

    // ── DESIGN (GROUP WORK) ──
    const designTeacher = [
        `Organising students in groups and giving the following instructions: ${groupTask}. Use probing questions to guide the groups`,
        `Dividing students into groups and assigning the tasks: ${groupTask}`,
        `Instructing students to work in small groups: ${groupTask}. Move around to provide guidance`,
        `Guiding students in groups with the following tasks: ${groupTask}`,
    ];
    const designStudent = [
        `Working in groups on the assigned tasks and sharing findings with the class`,
        `Collaborating in groups to complete the tasks and presenting results`,
        `Discussing and working as a group on the given instructions and reporting back to the class`,
    ];
    phrases.rein1 = pick(designTeacher);
    phrases.rein2 = pick(designStudent);
    phrases.rein3 = buildEnglishAssessment(activity.conceptType, activity.coreSubject, activity.original, 'design');

    // ── REALIZATION (INDIVIDUAL) ──
    const ra = buildEnglishRealization(verbBase, verbIng, activity, stimulus);
    phrases.reflect1 = ra.teacher;
    phrases.reflect2 = ra.student;
    phrases.reflect3 = ra.assessment;

    return phrases;
}

// ─────────────────────────────────────────────────────────────────────────────
// 10. MAIN SWAHILI PHRASE GENERATOR  (replaces old generateSwahiliPhrases)
// ─────────────────────────────────────────────────────────────────────────────
function generateSwahiliPhrases(verb, specificLesson, isContinue, tlmString) {
    const verbBase = verb.startsWith('ku') ? verb : 'ku' + verb;

    const activity  = parseActivity(specificLesson);
    const stimulus  = getStimulusFromTLM(tlmString, true);
    const questions = buildSwahiliQuestions(activity, stimulus.label);
    const groupTask = buildSwahiliGroupTasks(verbBase, activity);

    const phrases = {};

    // ── INTRODUCTION ──
    if (isContinue) {
        const introTeacher = [
            `${capitalizeFirst(stimulus.verb)} ${stimulus.label} zilizotumika katika somo lililopita na kuuliza maswali kuhusu ${activity.original}`,
            `Kuwasilisha nyenzo za somo la awali na kuwaongoza wanafunzi kwa maswali ya marudio ya ${activity.original}`,
            `Kutumia ${stimulus.label} za kipindi kilichopita na kuwauliza wanafunzi maswali ya kukagua uelewa wa ${activity.original}`,
            `Kurejesha ${stimulus.label} za somo lililopita na kufanya majadiliano ya kurejesha maarifa ya ${activity.original}`,
        ];
        const introStudent = [
            `Kujibu maswali kutokana na ${stimulus.label} za somo lililopita kuhusu ${activity.original}`,
            `Kuchunguza vifaa na kujibu maswali ya marudio kuhusu ${activity.original}`,
            `Kushiriki katika majadiliano ya ukumbusho kuhusu ${activity.original}`,
            `Kujishughulisha na nyenzo na kujibu maswali ya marudio ya ${activity.original}`,
        ];
        phrases.intro1 = pick(introTeacher);
        phrases.intro2 = pick(introStudent);
        phrases.intro3 = `Maswali ya marudio kuhusu ${activity.original} yamejibiwa kwa usahihi`;
    } else {
        const introTeacherOptions = [
            `${capitalizeFirst(stimulus.verb)} ${stimulus.label} zinazohusiana na ${activity.original} na kuuliza maswali kuhusu wanachokiona`,
            `${capitalizeFirst(stimulus.verb)} ${stimulus.label} zinazoonyesha ${activity.original} na kuuliza maswali ya kuchochea maarifa ya awali`,
            `${capitalizeFirst(stimulus.verb)} ${stimulus.label} kuhusu ${activity.original} na kuwaalika wanafunzi kushiriki kwa kueleza wanachojua`,
        ];
        const introStudentOptions = [
            `Kuangalia ${stimulus.label} na kujibu maswali kuhusu ${activity.original}`,
            `Kuchunguza ${stimulus.label} na kushiriki kile wanachokijua kuhusu ${activity.original}`,
            `Kusoma ${stimulus.label} na kujibu maswali ya utangulizi ya ${activity.original}`,
        ];
        phrases.intro1 = pick(introTeacherOptions);
        phrases.intro2 = pick(introStudentOptions);
        phrases.intro3 = `Maswali ya utangulizi kuhusu ${activity.original} yamejibiwa`;
    }

    // ── COMPETENCE DEVELOPMENT ──
    const devTeacher = [
        `${capitalizeFirst(stimulus.verb)} ${stimulus.label} kuhusu ${activity.original} ili kuwaongoza wanafunzi kuelewa mada, kwa kutumia maswali ya mwongozo yafuatayo: ${questions}`,
        `Kutumia ${stimulus.label} kuanzisha ${activity.original} na kuwaongoza wanafunzi kwa maswali kama vile: ${questions}`,
        `Kuwasilisha ${stimulus.label} kuhusu ${activity.original} na kutumia maswali yafuatayo kukuza uelewa: ${questions}`,
        `${capitalizeFirst(stimulus.verb)} ${stimulus.label} zinazohusiana na ${activity.original} na kuwezesha majadiliano kupitia maswali haya: ${questions}`,
    ];
    const devStudent = [
        `Kusoma ${stimulus.label} na kujibu maswali ya mwongozo kuhusu ${activity.original}`,
        `Kuangalia ${stimulus.label} na kujibu maswali ya ${activity.original}`,
        `Kujishughulisha na ${stimulus.label} na kutoa majibu ya maswali kuhusu ${activity.original}`,
    ];
    phrases.new1 = pick(devTeacher);
    phrases.new2 = pick(devStudent);
    phrases.new3 = buildSwahiliAssessment(activity.conceptType, activity.coreSubject, activity.original, 'development');

    // ── DESIGN (GROUP WORK) ──
    const designTeacher = [
        `Kupanga wanafunzi katika vikundi na kutoa maelekezo yafuatayo: ${groupTask}. Tumia maswali ya uchunguzi kuwaongoza vikundi`,
        `Kuwagawanya wanafunzi katika vikundi na kuwapa kazi hizi: ${groupTask}`,
        `Kuwataka wanafunzi wafanye kazi katika vikundi vidogo: ${groupTask}. Tembea kati yao kutoa mwongozo`,
        `Kuwaongoza wanafunzi katika vikundi kwa kazi hizi: ${groupTask}`,
    ];
    const designStudent = [
        `Kufanya kazi katika vikundi kuhusu kazi zilizopewa na kushirikiana matokeo na darasa`,
        `Kushirikiana katika vikundi kukamilisha kazi na kuwasilisha matokeo`,
        `Kujadili na kufanya kazi ya kikundi kulingana na maelekezo na kuripoti kwa darasa`,
    ];
    phrases.rein1 = pick(designTeacher);
    phrases.rein2 = pick(designStudent);
    phrases.rein3 = buildSwahiliAssessment(activity.conceptType, activity.coreSubject, activity.original, 'design');

    // ── REALIZATION ──
    const ra = buildSwahiliRealization(verbBase, activity, stimulus);
    phrases.reflect1 = ra.teacher;
    phrases.reflect2 = ra.student;
    phrases.reflect3 = ra.assessment;

    return phrases;
}

// ─────────────────────────────────────────────────────────────────────────────
// 11. REFERENCE FORMATTING  (unchanged from original)
// ─────────────────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// 12. TIMING HELPER  (unchanged from original)
// ─────────────────────────────────────────────────────────────────────────────
function applyTiming(period, lessonTime, introCont, newKnow, reinCont, refleCont, isSwahili) {
    function formatTime(startHour, startMinutes, durationMinutes) {
        var acaTime      = parseInt(startMinutes) + durationMinutes;
        var endMinutes   = acaTime % 60;
        var endHour      = parseInt(startHour) + Math.floor(acaTime / 60);
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

// ─────────────────────────────────────────────────────────────────────────────
// 13.  updateContent  (patched to pass tlmString to phrase generators)
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Call this instead of the old updateContent().
 * Only the two generateXxxPhrases() calls are changed; everything else is identical.
 *
 * FRONTEND CHANGE REQUIRED:
 *   The TLM field (#tlmaterials) should ideally be a multi-select or checkbox
 *   group with values like: "pictures", "cards", "video", "charts", "diagrams",
 *   "real objects", "textbooks", "worksheets", "audio", "map", "model".
 *   The value will be comma-joined and parsed by parseTLM().
 *   If it remains a free-text field it also works — parseTLM() scans for keywords.
 */
function updateContent() {
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

    var period          = document.getElementById("period").value;
    var subject         = document.getElementById("subject").value;
    var school          = document.getElementById("school").value;
    var name            = document.getElementById("teacherName").value;
    var subClasses      = document.getElementById("classes").value;
    var subStreams      = document.getElementById("streams").value;
    var subDate         = document.getElementById("date").value;
    var specificLesson  = document.getElementById("specificLesson").value;
    var tlmaterials     = document.getElementById("tlmaterials").value;   // ← used for stimulus
    var studentsOption  = document.getElementById("studentsOption").value;
    var femaleReg       = studentsOption === "set" ? document.getElementById("femaleReg").value : "";
    var maleReg         = studentsOption === "set" ? document.getElementById("maleReg").value : "";
    var femalePres      = studentsOption === "set" ? document.getElementById("femalePres").value : "";
    var malePres        = studentsOption === "set" ? document.getElementById("malePres").value : "";
    var remarkOption    = document.getElementById("remarkOption").value;
    var customRemark    = document.getElementById("customRemark").value;

    var schoolNm       = document.getElementById("schoolNm");
    var teacherName    = document.getElementById("lessonTch");
    var lessonSubject  = document.getElementById("lessonSbjt");
    var lessonTime     = document.getElementById("lessonTm");
    var studentClass   = document.getElementById("lessonClss");
    var streams        = document.getElementById("lessonStrm");
    var lessonDate     = document.getElementById("lessonDt");
    var sylbsCmp       = document.getElementById("sylbsCmp");
    var sylbsMnObj     = document.getElementById("sylbsMnObj");
    var sylbsSbtp      = document.getElementById("sylbsSbtp");
    var sylbsSpobj     = document.getElementById("sylbsSpobj");
    var sylbsMts       = document.getElementById("sylbsMts");
    var sylbsRfrs      = document.getElementById("sylbsRfrs");
    var flReg          = document.getElementById("flReg");
    var mlReg          = document.getElementById("mlReg");
    var flPr           = document.getElementById("flPr");
    var mlPr           = document.getElementById("mlPr");
    var stRegt         = document.getElementById("stRegt");
    var stPrt          = document.getElementById("stPrt");
    var introCont      = document.getElementById("introCont");
    var newKnow        = document.getElementById("newKnow");
    var reinCont       = document.getElementById("reinCont");
    var refleCont      = document.getElementById("refleCont");
    var intro1         = document.getElementById("intro1");
    var intro2         = document.getElementById("intro2");
    var intro3         = document.getElementById("intro3");
    var new1           = document.getElementById("new1");
    var new2           = document.getElementById("new2");
    var new3           = document.getElementById("new3");
    var rein1          = document.getElementById("rein1");
    var rein2          = document.getElementById("rein2");
    var rein3          = document.getElementById("rein3");
    var reflect1       = document.getElementById("reflect1");
    var reflect2       = document.getElementById("reflect2");
    var reflect3       = document.getElementById("reflect3");
    var remarkComm     = document.getElementById("remarkComm");

    schoolNm.innerText    = school;
    teacherName.innerText = name;
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

    const allowedSubjects = [
        "kiswahili","elimu ya dini ya kiislam","fasihi ya kiswahili",
        "historia ya tanzania na maadili","stadi za awali za lugha",
        "kuhesabu,sayansi na tehama","stadi za awali za maisha",
        "afya na mazingira","kusoma","sanaa bunifu na michezo",
        "naipenda nchi yangu tanzania","kuandika","kuhesabu",
        "utamaduni, sanaa na michezo","sanaa na michezo",
        "jiografia na mazingira","hisabati","sayansi","maarifa ya jamii","stadi za kazi","uraia na maadili"
    ];
    const isSwahiliSubject = allowedSubjects.includes(subject.toLowerCase());
    const isContinue = wrdImp1 === "Endelea" || wrdImp1.toLowerCase() === "continue";

    if (isSwahiliSubject) {
        // ── Swahili UI labels (unchanged) ──
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
        studentClass.innerText = classesMap[subClasses.toLowerCase()] || "Darasa Halijulikani";

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
            remarkComm.innerText = sentenceCase(pick(swahiliRemarks));
        }

        // ← tlmaterials passed for stimulus detection
        var phrases = generateSwahiliPhrases(wrdImp2, specificLesson, isContinue, tlmaterials);
        intro1.innerText   = sentenceCase(phrases.intro1);
        intro2.innerText   = sentenceCase(phrases.intro2);
        intro3.innerText   = sentenceCase(phrases.intro3);
        new1.innerText     = sentenceCase(phrases.new1);
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
            remarkComm.innerText = sentenceCase(pick(englishRemarks));
        }

        // ← tlmaterials passed for stimulus detection
        var phrases = generateEnglishPhrases(wrdImp2, specificLesson, isContinue, tlmaterials);
        intro1.innerText   = sentenceCase(phrases.intro1);
        intro2.innerText   = sentenceCase(phrases.intro2);
        intro3.innerText   = sentenceCase(phrases.intro3);
        new1.innerText     = sentenceCase(phrases.new1);
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

/*
 * ═══════════════════════════════════════════════════════════════════════════
 * FRONTEND RECOMMENDATION — TLM multi-select
 * ───────────────────────────────────────────────────────────────────────────
 * Replace the current free-text #tlmaterials <input> with a <select multiple>
 * or checkbox group. Example HTML:
 *
 *  <label>Teaching & Learning Materials:</label>
 *  <div id="tlm-checkboxes">
 *    <label><input type="checkbox" name="tlm" value="pictures"> Pictures</label>
 *    <label><input type="checkbox" name="tlm" value="cards"> Cards</label>
 *    <label><input type="checkbox" name="tlm" value="video"> Video</label>
 *    <label><input type="checkbox" name="tlm" value="charts"> Charts</label>
 *    <label><input type="checkbox" name="tlm" value="diagrams"> Diagrams</label>
 *    <label><input type="checkbox" name="tlm" value="real objects"> Real Objects</label>
 *    <label><input type="checkbox" name="tlm" value="model"> Model</label>
 *    <label><input type="checkbox" name="tlm" value="textbook"> Textbook</label>
 *    <label><input type="checkbox" name="tlm" value="worksheet"> Worksheet</label>
 *    <label><input type="checkbox" name="tlm" value="audio"> Audio Recording</label>
 *    <label><input type="checkbox" name="tlm" value="map"> Map</label>
 *  </div>
 *  <input type="hidden" id="tlmaterials" name="tlmaterials">
 *
 * Then add this JS to sync checked values into the hidden input before submit:
 *
 *  document.querySelectorAll('input[name="tlm"]').forEach(cb => {
 *    cb.addEventListener('change', () => {
 *      document.getElementById('tlmaterials').value =
 *        [...document.querySelectorAll('input[name="tlm"]:checked')]
 *          .map(c => c.value).join(', ');
 *    });
 *  });
 * ═══════════════════════════════════════════════════════════════════════════
 */
