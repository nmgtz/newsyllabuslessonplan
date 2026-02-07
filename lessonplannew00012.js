function convertToSwahiliTime(hour24, minutes) {
    let swahiliHour;
    let session;
    
    if (hour24 >= 6 && hour24 < 18) {
       
        swahiliHour = hour24 - 6;
        
        
        if (swahiliHour === 0) {
            swahiliHour = 12;
        }
        
        if (hour24 >= 6 && hour24 < 12) {
            
            session = "ASUB";
        } else if (hour24 >= 12 && hour24 < 15) {
            
            session = "MCHAN";
        } else {
            
            session = "ALASIRI";
        }
    } else {
        
        if (hour24 >= 18) {
            swahiliHour = hour24 - 18;
        } else {
            swahiliHour = hour24 + 6;
        }
        
        
        if (swahiliHour === 0) {
            swahiliHour = 12;
        }
        
        if (hour24 >= 17 && hour24 < 19) {
            
            session = "JIONI";
        } else {
            
            session = "USIKU";
        }
    }
    
    const formattedHour = swahiliHour.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    
    return {
        hour: swahiliHour,
        formattedHour: formattedHour,
        minutes: minutes,
        formattedMinutes: formattedMinutes,
        session: session
    };
}
const verbConjugations = {
    english: {
        
        "sing": { gerund: "singing", past: "sang", noun: "singing" },
        "draw": { gerund: "drawing", past: "drew", noun: "drawing" },
        "color": { gerund: "coloring", past: "colored", noun: "coloring" },
        "count": { gerund: "counting", past: "counted", noun: "counting" },
        "play": { gerund: "playing", past: "played", noun: "play" },
        "recite": { gerund: "reciting", past: "recited", noun: "recitation" },
        "name": { gerund: "naming", past: "named", noun: "naming" },
        "identify": { gerund: "identifying", past: "identified", noun: "identification" },
        "match": { gerund: "matching", past: "matched", noun: "matching" },
        "sort": { gerund: "sorting", past: "sorted", noun: "sorting" },
        "discuss": { gerund: "discussing", past: "discussed", noun: "discussion" },
        "explain": { gerund: "explaining", past: "explained", noun: "explanation" },
        "describe": { gerund: "describing", past: "described", noun: "description" },
        "demonstrate": { gerund: "demonstrating", past: "demonstrated", noun: "demonstration" },
        "analyse": { gerund: "analysing", past: "analysed", noun: "analysis" },
        "analyze": { gerund: "analyzing", past: "analyzed", noun: "analysis" },
        "calculate": { gerund: "calculating", past: "calculated", noun: "calculation" },
        "compute": { gerund: "computing", past: "computed", noun: "computation" },
        "find": { gerund: "finding", past: "found", noun: "finding" },
        "solve": { gerund: "solving", past: "solved", noun: "solution" },
        "evaluate": { gerund: "evaluating", past: "evaluated", noun: "evaluation" },
        "state": { gerund: "stating", past: "stated", noun: "statement" },
        "give": { gerund: "giving", past: "gave", noun: "giving" },
        "practice": { gerund: "practicing", past: "practiced", noun: "practice" },
        "organise": { gerund: "organising", past: "organised", noun: "organisation" },
        "organize": { gerund: "organizing", past: "organized", noun: "organization" },
        "apply": { gerund: "applying", past: "applied", noun: "application" },
        "write": { gerund: "writing", past: "wrote", noun: "writing" },
        "read": { gerund: "reading", past: "read", noun: "reading" },
        "compare": { gerund: "comparing", past: "compared", noun: "comparison" },
        "contrast": { gerund: "contrasting", past: "contrasted", noun: "contrast" },
        "examine": { gerund: "examining", past: "examined", noun: "examination" },
        "investigate": { gerund: "investigating", past: "investigated", noun: "investigation" },
        "explore": { gerund: "exploring", past: "explored", noun: "exploration" },
        "interpret": { gerund: "interpreting", past: "interpreted", noun: "interpretation" },
        "justify": { gerund: "justifying", past: "justified", noun: "justification" },
        "prove": { gerund: "proving", past: "proved", noun: "proof" },
        "verify": { gerund: "verifying", past: "verified", noun: "verification" },
        "construct": { gerund: "constructing", past: "constructed", noun: "construction" },
        "create": { gerund: "creating", past: "created", noun: "creation" },
        "design": { gerund: "designing", past: "designed", noun: "design" },
        "develop": { gerund: "developing", past: "developed", noun: "development" },
        "formulate": { gerund: "formulating", past: "formulated", noun: "formulation" },
        "synthesize": { gerund: "synthesizing", past: "synthesized", noun: "synthesis" },
        "plan": { gerund: "planning", past: "planned", noun: "plan" },
        "propose": { gerund: "proposing", past: "proposed", noun: "proposal" },
        "summarize": { gerund: "summarizing", past: "summarized", noun: "summary" },
        "outline": { gerund: "outlining", past: "outlined", noun: "outline" },
        "review": { gerund: "reviewing", past: "reviewed", noun: "review" },
        "classify": { gerund: "classifying", past: "classified", noun: "classification" },
        "categorize": { gerund: "categorizing", past: "categorized", noun: "categorization" },
        "distinguish": { gerund: "distinguishing", past: "distinguished", noun: "distinction" },
        "measure": { gerund: "measuring", past: "measured", noun: "measurement" },
        "estimate": { gerund: "estimating", past: "estimated", noun: "estimation" },
        "predict": { gerund: "predicting", past: "predicted", noun: "prediction" },
        "infer": { gerund: "inferring", past: "inferred", noun: "inference" },
        "deduce": { gerund: "deducing", past: "deduced", noun: "deduction" },
        "conclude": { gerund: "concluding", past: "concluded", noun: "conclusion" },
        "relate": { gerund: "relating", past: "related", noun: "relation" },
        "connect": { gerund: "connecting", past: "connected", noun: "connection" },
        "perform": { gerund: "performing", past: "performed", noun: "performance" },
        "execute": { gerund: "executing", past: "executed", noun: "execution" },
        "implement": { gerund: "implementing", past: "implemented", noun: "implementation" },
        "conduct": { gerund: "conducting", past: "conducted", noun: "conduct" },
        "determine": { gerund: "determining", past: "determined", noun: "determination" },
        "establish": { gerund: "establishing", past: "established", noun: "establishment" },
        "recognize": { gerund: "recognizing", past: "recognized", noun: "recognition" },
        "recall": { gerund: "recalling", past: "recalled", noun: "recall" },
        "list": { gerund: "listing", past: "listed", noun: "list" },
        "label": { gerund: "labeling", past: "labeled", noun: "label" },
        "select": { gerund: "selecting", past: "selected", noun: "selection" },
        "choose": { gerund: "choosing", past: "chose", noun: "choice" },
        "differentiate": { gerund: "differentiating", past: "differentiated", noun: "differentiation" },
        "modify": { gerund: "modifying", past: "modified", noun: "modification" },
        "adapt": { gerund: "adapting", past: "adapted", noun: "adaptation" },
        "simplify": { gerund: "simplifying", past: "simplified", noun: "simplification" },
        "convert": { gerund: "converting", past: "converted", noun: "conversion" },
        "transform": { gerund: "transforming", past: "transformed", noun: "transformation" },
        "translate": { gerund: "translating", past: "translated", noun: "translation" },
        "express": { gerund: "expressing", past: "expressed", noun: "expression" },
        "present": { gerund: "presenting", past: "presented", noun: "presentation" },
        "report": { gerund: "reporting", past: "reported", noun: "report" },
        "argue": { gerund: "arguing", past: "argued", noun: "argument" },
        "defend": { gerund: "defending", past: "defended", noun: "defense" },
        "critique": { gerund: "critiquing", past: "critiqued", noun: "critique" },
        "assess": { gerund: "assessing", past: "assessed", noun: "assessment" },
        "judge": { gerund: "judging", past: "judged", noun: "judgment" },
        "rate": { gerund: "rating", past: "rated", noun: "rating" },
        "rank": { gerund: "ranking", past: "ranked", noun: "ranking" },
        "prioritize": { gerund: "prioritizing", past: "prioritized", noun: "prioritization" },
        "sequence": { gerund: "sequencing", past: "sequenced", noun: "sequence" },
        "arrange": { gerund: "arranging", past: "arranged", noun: "arrangement" },
        "order": { gerund: "ordering", past: "ordered", noun: "order" },
        "sketch": { gerund: "sketching", past: "sketched", noun: "sketch" },
        "paint": { gerund: "painting", past: "painted", noun: "painting" },
        "illustrate": { gerund: "illustrating", past: "illustrated", noun: "illustration" }
    },
    swahili: {
        "kuimba": { present: "kuimba", continuous: "anaimba", past: "aliimba", noun: "wimbo" },
        "kuchora": { present: "kuchora", continuous: "anachora", past: "alichora", noun: "mchoro" },
        "kurangi": { present: "kurangi", continuous: "anarangi", past: "alirangi", noun: "urangi" },
        "kuhesabu": { present: "kuhesabu", continuous: "anahesabu", past: "alihesabu", noun: "mahesabu" },
        "kucheza": { present: "kucheza", continuous: "anacheza", past: "alicheza", noun: "mchezo" },
        "kukariri": { present: "kukariri", continuous: "anakariri", past: "alikariri", noun: "ukariri" },
        "kuita majina": { present: "kuita majina", continuous: "anaita majina", past: "aliita majina", noun: "majina" },
        "kutambua": { present: "kutambua", continuous: "anatambua", past: "alitambua", noun: "utambuzi" },
        "kuoanisha": { present: "kuoanisha", continuous: "anaoanisha", past: "alioanisha", noun: "uoanishaji" },
        "kuweka kwa mpangilio": { present: "kuweka kwa mpangilio", continuous: "anaweka kwa mpangilio", past: "aliweka kwa mpangilio", noun: "mpangilio" },
        "kuandika": { present: "kuandika", continuous: "anaandika", past: "aliandika", noun: "uandishi" },
        "kueleza": { present: "kueleza", continuous: "anaeleza", past: "alieleza", noun: "uelezaji" },
        "kujibu": { present: "kujibu", continuous: "anajibu", past: "alijibu", noun: "majibu" },
        "kufupisha": { present: "kufupisha", continuous: "anafupisha", past: "alifupisha", noun: "ufupisho" },
        "kubaini": { present: "kubaini", continuous: "anabaini", past: "alibaini", noun: "ubainisho" },
        "kuhakiki": { present: "kuhakiki", continuous: "anahakiki", past: "alihakiki", noun: "uhakiki" },
        "kuunda": { present: "kuunda", continuous: "anaunda", past: "aliunda", noun: "uundaji" },
        "kutunga": { present: "kutunga", continuous: "anatunga", past: "alitunga", noun: "utungaji" },
        "kupambanua": { present: "kupambanua", continuous: "anapambanua", past: "alipambanua", noun: "upambanuo" },
        "kufafanua": { present: "kufafanua", continuous: "anafafanua", past: "alifafanua", noun: "ufafanuzi" },
        "kuonesha": { present: "kuonesha", continuous: "anaonesha", past: "alionesha", noun: "uonyesho" },
        "kuainisha": { present: "kuainisha", continuous: "anaainisha", past: "aliainisha", noun: "uainisho" },
        "kusoma": { present: "kusoma", continuous: "anasoma", past: "alisoma", noun: "usomaji" },
        "kusimulia": { present: "kusimulia", continuous: "anasimulia", past: "alisimulia", noun: "usimuliaji" },
        "kujadili": { present: "kujadili", continuous: "anajadili", past: "alijadili", noun: "majadiliano" },
        "kutatua": { present: "kutatua", continuous: "anatatua", past: "alitatua", noun: "utatuzi" },
        "kutafuta": { present: "kutafuta", continuous: "anatafuta", past: "alitafuta", noun: "utafutaji" },
        "kupata": { present: "kupata", continuous: "anapata", past: "alipata", noun: "upatikanaji" },
        "kutathmini": { present: "kutathmini", continuous: "anatathmini", past: "alitathmini", noun: "tathmini" },
        "kutaja": { present: "kutaja", continuous: "anataja", past: "alitaja", noun: "utajaji" },
        "kutoa": { present: "kutoa", continuous: "anatoa", past: "alitoa", noun: "utoaji" },
        "kufanya mazoezi": { present: "kufanya mazoezi", continuous: "anafanya mazoezi", past: "alifanya mazoezi", noun: "mazoezi" },
        "kuandaa": { present: "kuandaa", continuous: "anaandaa", past: "aliandaa", noun: "uandaaji" },
        "kutumia": { present: "kutumia", continuous: "anatumia", past: "alitumia", noun: "matumizi" },
        "kulinganisha": { present: "kulinganisha", continuous: "analinganisha", past: "alilinganisha", noun: "ulinganisho" },
        "kutofautisha": { present: "kutofautisha", continuous: "anatofautisha", past: "alitofautisha", noun: "utofauti" },
        "kuchunguza": { present: "kuchunguza", continuous: "anachunguza", past: "alichunguza", noun: "uchunguzi" },
        "kuchambua": { present: "kuchambua", continuous: "anachambua", past: "alichambua", noun: "uchambuzi" },
        "kugundua": { present: "kugundua", continuous: "anagundua", past: "aligundua", noun: "ugunduzi" },
        "kutafsiri": { present: "kutafsiri", continuous: "anatafsiri", past: "alitafsiri", noun: "tafsiri" },
        "kuhalalisha": { present: "kuhalalisha", continuous: "anahalalisha", past: "alihalalisha", noun: "uhalalishaji" },
        "kuthibitisha": { present: "kuthibitisha", continuous: "anathibitisha", past: "alithibitisha", noun: "uthibitisho" },
        "kujenga": { present: "kujenga", continuous: "anajenga", past: "alijenga", noun: "ujenzi" },
        "kubuni": { present: "kubuni", continuous: "anabuni", past: "alibuni", noun: "ubuni" },
        "kutengeneza": { present: "kutengeneza", continuous: "anatengeneza", past: "alitengeneza", noun: "utengenezaji" },
        "kupanga": { present: "kupanga", continuous: "anapanga", past: "alipanga", noun: "upangaji" },
        "kupendekeza": { present: "kupendekeza", continuous: "anapendekeza", past: "alipendekeza", noun: "mapendekezo" },
        "kumuhtasari": { present: "kumuhtasari", continuous: "anamuhtasari", past: "alimuhtasari", noun: "muhtasari" },
        "kukagua": { present: "kukagua", continuous: "anakagua", past: "alikagua", noun: "ukaguzi" },
        "kuweka": { present: "kuweka", continuous: "anaweka", past: "aliweka", noun: "uwekaji" },
        "kupima": { present: "kupima", continuous: "anapima", past: "alipima", noun: "upimaji" },
        "kukadiria": { present: "kukadiria", continuous: "anakadiria", past: "alikadiria", noun: "ukadirio" },
        "kutabiri": { present: "kutabiri", continuous: "anatabiri", past: "alitabiri", noun: "utabiri" },
        "kuhitimisha": { present: "kuhitimisha", continuous: "anahitimisha", past: "alihitimisha", noun: "uhitimisho" },
        "kuhusianisha": { present: "kuhusianisha", continuous: "anahusianisha", past: "alihusianisha", noun: "uhusiano" },
        "kuunganisha": { present: "kuunganisha", continuous: "anaunganisha", past: "aliunganisha", noun: "muunganisho" },
        "kutekeleza": { present: "kutekeleza", continuous: "anatekeleza", past: "alitekeleza", noun: "utekelezaji" },
        "kufanya": { present: "kufanya", continuous: "anafanya", past: "alifanya", noun: "ufanyaji" },
        "kuamua": { present: "kuamua", continuous: "anaamua", past: "aliamua", noun: "uamuzi" },
        "kukumbuka": { present: "kukumbuka", continuous: "anakumbuka", past: "alikumbuka", noun: "ukumbusho" },
        "kuorodhesha": { present: "kuorodhesha", continuous: "anaorodhesha", past: "aliorodhesha", noun: "orodha" },
        "kuweka alama": { present: "kuweka alama", continuous: "anaweka alama", past: "aliweka alama", noun: "alama" },
        "kuchagua": { present: "kuchagua", continuous: "anachagua", past: "alichagua", noun: "uchaguzi" },
        "kurekebisha": { present: "kurekebisha", continuous: "anarekebisha", past: "alirekebisha", noun: "marekebisho" },
        "kubadilisha": { present: "kubadilisha", continuous: "anabadilisha", past: "alibadilisha", noun: "mabadiliko" },
        "kurahisisha": { present: "kurahisisha", continuous: "anarahisisha", past: "alirahisisha", noun: "urahisishaji" },
        "kugeuza": { present: "kugeuza", continuous: "anageuza", past: "aligeuza", noun: "mageuko" },
        "kuelezea": { present: "kuelezea", continuous: "anaelezea", past: "alielezea", noun: "maelezo" },
        "kuwasilisha": { present: "kuwasilisha", continuous: "anawasilisha", past: "aliwasilisha", noun: "uwasilishaji" },
        "kuripoti": { present: "kuripoti", continuous: "anaripoti", past: "aliripoti", noun: "ripoti" },
        "kubishana": { present: "kubishana", continuous: "anabishana", past: "alibishana", noun: "mabishano" },
        "kutetea": { present: "kutetea", continuous: "anatetea", past: "alitetea", noun: "utetezi" },
        "kukosoa": { present: "kukosoa", continuous: "anakosoa", past: "alikosoa", noun: "ukosefu" },
        "kuhukumu": { present: "kuhukumu", continuous: "anahukumu", past: "alihukumu", noun: "hukumu" },
        "kupanga kwa utaratibu": { present: "kupanga kwa utaratibu", continuous: "anapanga kwa utaratibu", past: "alipanga kwa utaratibu", noun: "utaratibu" },
        "kupaka": { present: "kupaka", continuous: "anapaka", past: "alipaka", noun: "upakaji" }
    }
};

// Helper functions
function getVerbForm(verb, form, language) {
    if (!verb) return verb;
    const conjugations = verbConjugations[language];
    if (conjugations && conjugations[verb.toLowerCase()] && conjugations[verb.toLowerCase()][form]) {
        return conjugations[verb.toLowerCase()][form];
    }
    return verb;
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function capitalizeFirst(str) {
    if (!str) return str;
    str = str.trim();
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function sentenceCase(str) {
    if (!str) return str;
    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    str = str.replace(/([.!?]\s+)([a-z])/g, function(match, punct, letter) {
        return punct + letter.toUpperCase();
    });
    
   
    str = capitalizeProperNouns(str);
    
    return str;
}
function formatReference(ref, subject) {
    if (!ref || ref.trim() === '') return '';
    
    // Store original reference before any modifications
    const originalRef = ref.trim();
    ref = originalRef;
    
    // Determine if subject uses Swahili
    const allowedSubjects = [
        "kiswahili", "elimu ya dini ya kiislam", "fasihi ya kiswahili",
        "historia ya tanzania na maadili", "stadi za awali za lugha",
        "kuhesabu,sayansi na tehama", "stadi za awali za maisha",
        "afya na mazingira", "kusoma", "sanaa bunifu na michezo",
        "naipenda nchi yangu tanzania", "kuandika", "kuhesabu",
        "utamaduni, sanaa na michezo", "sanaa na michezo",
        "jiografia na mazingira", "hisabati", "sayansi"
    ];
    const isSwahili = subject && allowedSubjects.includes(subject.toLowerCase());
    
    // Expand abbreviations based on language
    if (isSwahili) {
        ref = ref.replace(/\bTIE\b/gi, 'Taasisi ya Elimu Tanzania');
        ref = ref.replace(/\bTET\b/gi, 'Taasisi ya Elimu Tanzania');
    } else {
        ref = ref.replace(/\bTIE\b/gi, 'Tanzania Institute of Education');
        ref = ref.replace(/\bTET\b/gi, 'Tanzania Institute of Education');
    }
    
    // Remove publisher location (APA 7 doesn't use it)
    ref = ref.replace(/([A-Z][a-z\s]+(?:,\s*[A-Z][a-z\s]+)?)\s*:\s*(?=[A-Z])/g, '');
    
    // Parse APA format
    var periodIndex = ref.indexOf('.');
    if (periodIndex === -1) {
        return ref.trim();
    }
    
    var authorPart = ref.substring(0, periodIndex).trim();
    var restPart = ref.substring(periodIndex + 1).trim();
    
    // Extract year
    var yearMatch = restPart.match(/^\((\d{4})\)\.?\s*/);
    var yearPart = '';
    var afterYear = restPart;
    
    if (yearMatch) {
        yearPart = '(' + yearMatch[1] + ')';
        afterYear = restPart.substring(yearMatch[0].length).trim();
    }
    
    // Separate title from publisher
    var titlePart = '';
    var publisherPart = '';
    
    var parts = afterYear.split('.');
    var cleanParts = parts.map(p => p.trim()).filter(p => p.length > 0);
    
    if (cleanParts.length === 0) {
        titlePart = '';
        publisherPart = '';
    } else if (cleanParts.length === 1) {
        titlePart = cleanParts[0];
        publisherPart = '';
    } else {
        var lastPart = cleanParts[cleanParts.length - 1];
        var looksLikePublisher = (
            lastPart.length < 60 && 
            !lastPart.includes(':') && 
            !lastPart.match(/\b(darasa|kidato|standard|form|class|kitabu|book|mwanafunzi|student)\b/i)
        );
        
        if (looksLikePublisher) {
            publisherPart = lastPart;
            titlePart = cleanParts.slice(0, -1).join('. ');
        } else {
            titlePart = cleanParts.join('. ');
            publisherPart = '';
        }
    }
    
    // Apply sentence case with proper noun preservation (now passes subject)
    titlePart = sentenceCaseWithProperNouns(titlePart, originalRef, subject);
    
    // Check if author and publisher are the same
    var authorNormalized = authorPart.toLowerCase().trim();
    var publisherNormalized = publisherPart.toLowerCase().trim();
    var sameAuthorPublisher = (publisherNormalized && authorNormalized === publisherNormalized);
    
    // Build formatted reference (NO BOLD - APA 7 compliant)
    var formatted = authorPart + '.';

if (yearPart) {
    formatted += ' ' + yearPart + '.';
}

if (titlePart) {
    // Trim the titlePart first
    titlePart = titlePart.trim();
    
    // Remove any trailing periods or commas
    while (titlePart.endsWith('.') || titlePart.endsWith(',')) {
        titlePart = titlePart.slice(0, -1).trim();
    }
    
    // Now add the period
    formatted += ' <em>' + titlePart + '.</em>';
}

if (publisherPart && !sameAuthorPublisher) {
    formatted += ' ' + publisherPart + '.';
}

return formatted;
}

function sentenceCaseWithProperNouns(str, originalRef, subject) {
    if (!str) return str;
    
    const original = str;
    const detectedProperNouns = new Set();
    
    if (originalRef) {
        // Check if original is well-formatted
        const hasLowercase = /[a-z]/.test(originalRef);
        const hasUppercase = /[A-Z]/.test(originalRef);
        const notAllCaps = !/^[^a-z]*$/.test(originalRef.replace(/[^a-zA-Z]/g, ''));
        const isWellFormatted = hasLowercase && hasUppercase && notAllCaps;
        
        if (isWellFormatted) {
            const words = originalRef.match(/\b[A-Z][a-z]+\b/g);
            if (words) {
                words.forEach(word => {
                    const regex = new RegExp('(?<![.!?:]\\s)\\b' + word + '\\b');
                    if (regex.test(originalRef)) {
                        detectedProperNouns.add(word);
                    }
                });
            }
        }
    }
    
    // Build intelligent fallback list
    const intelligentNouns = buildIntelligentNounList(str, subject);
    const properNouns = new Set([...detectedProperNouns, ...intelligentNouns]);
    
    // Apply sentence case
    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    
    // Capitalize after punctuation
    str = str.replace(/([.!?]\s+)([a-z])/g, function(match, punct, letter) {
        return punct + letter.toUpperCase();
    });
    
    // Capitalize after colons
    str = str.replace(/:\s+([a-z])/g, function(match, letter) {
        return ': ' + letter.toUpperCase();
    });
    
    // Restore proper nouns
    properNouns.forEach(word => {
        const regex = new RegExp('\\b' + word.toLowerCase() + '\\b', 'gi');
        str = str.replace(regex, word);
    });
    
    return str;
}

// Helper: Build intelligent noun list based on patterns
function buildIntelligentNounList(str, subject) {
    const nouns = new Set();
    
    // Universal proper nouns
    const universal = [
        'Tanzania', 'Afrika', 'Africa', 'Zanzibar', 'Pemba',
        'Allah', 'Allaah', 'Mungu', 'Yesu', 'Kristo',
        'English', 'Swahili', 'Kiswahili'
    ];
    universal.forEach(word => {
        if (new RegExp('\\b' + word + '\\b', 'i').test(str)) {
            nouns.add(word);
        }
    });
    
    // Swahili keywords
    const swahiliKeywords = [
        'Kiislamu', 'Kiislam', 'Uislamu', 'Islam', 'Imani', 'Ibada',
        'Quran', 'Kuran', 'Qur\'an', 'Hadith', 'Hadithi',
        'Kitabu', 'Mwongozo', 'Mwanafunzi', 'Mwalimu',
        'Darasa', 'Kidato', 'Shule', 'Sekondari', 'Chekechea',
        'Elimu', 'Dini', 'Historia', 'Jiografia', 'Mazingira',
        'Hisabati', 'Sayansi', 'Fasihi', 'Uraia', 'Maadili',
        'Uchumi', 'Biashara', 'Uhandisi', 'Teknolojia',
        'Kwanza', 'Pili', 'Tatu', 'Nne', 'Tano', 'Sita'
    ];
    
    // English keywords
    const englishKeywords = [
        'Mathematics', 'Math', 'Physics', 'Chemistry', 'Biology',
        'Geography', 'History', 'Civics', 'English', 'Literature',
        'Science', 'Economics', 'Commerce', 'Accounting',
        'Book', 'Student', 'Teacher', 'Guide', 'Manual',
        'Standard', 'Form', 'Primary', 'Secondary', 'Advanced',
        'One', 'Two', 'Three', 'Four', 'Five', 'Six'
    ];
    
    // Determine which keywords to use
    const allowedSubjects = [
        "kiswahili", "elimu ya dini ya kiislam", "fasihi ya kiswahili",
        "historia ya tanzania na maadili", "stadi za awali za lugha",
        "kuhesabu,sayansi na tehama", "stadi za awali za maisha",
        "afya na mazingira", "kusoma", "sanaa bunifu na michezo",
        "naipenda nchi yangu tanzania", "kuandika", "kuhesabu",
        "utamaduni, sanaa na michezo", "sanaa na michezo",
        "jiografia na mazingira", "hisabati", "sayansi"
    ];
    
    const isSwahiliSubject = subject && allowedSubjects.includes(subject.toLowerCase());
    const keywords = isSwahiliSubject ? swahiliKeywords : englishKeywords;
    
    keywords.forEach(word => {
        if (new RegExp('\\b' + word + '\\b', 'i').test(str)) {
            nouns.add(word);
        }
    });
    
    return nouns;
}

function generateEnglishPhrases(verb, specificLesson, isContinue) {
    const verbIng = getVerbForm(verb, 'gerund', 'english');
    const verbBase = verb.toLowerCase();
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const phrases = {};
    
    if (isContinue) {
        const introTeacherTemplates = [
            "Providing materials of the previous lesson and asking questions about them",
            "Displaying resources from the last lesson and posing questions",
            "Showing previous lesson materials and facilitating discussion",
            "Presenting materials used in the prior lesson and asking related questions",
            "Introducing previous lesson resources and engaging students with questions"
        ];
        
        const introStudentTemplates = [
            "Observing the materials and responding to the questions",
            "Examining the resources and answering the questions posed",
            "Reviewing the materials and participating in the discussion",
            "Looking at the previous lesson materials and providing responses",
            "Engaging with the resources and answering questions"
        ];
        
        const introAssessmentTemplates = [
            "Questions about previous lesson are answered",
            "Previous lesson questions are correctly addressed",
            "Discussion about prior lesson shows understanding",
            "Students demonstrate recall of previous content",
            "Previous lesson concepts are reviewed successfully"
        ];
        
        phrases.intro1 = pick(introTeacherTemplates);
        phrases.intro2 = pick(introStudentTemplates);
        phrases.intro3 = pick(introAssessmentTemplates);
    } else {
        const introTeacherTemplates = [
            `Providing the teaching aid and questioning about ${specificLesson}`,
            `Presenting teaching materials and asking about ${specificLesson}`,
            `Displaying learning resources and posing questions on ${specificLesson}`,
            `Showing teaching aids and facilitating discussion about ${specificLesson}`,
            `Introducing materials and asking questions related to ${specificLesson}`
        ];
        
        const introStudentTemplates = [
            `Observing the teaching aid and responding to questions on ${specificLesson}`,
            `Examining the materials and answering questions about ${specificLesson}`,
            `Looking at the teaching aid and participating in discussion on ${specificLesson}`,
            `Engaging with the resources and responding to questions on ${specificLesson}`,
            `Reviewing the teaching aid and providing answers about ${specificLesson}`
        ];
        
        const introAssessmentTemplates = [
            `Questions about ${specificLesson} are answered`,
            `Students respond correctly to questions on ${specificLesson}`,
            `Understanding of ${specificLesson} is demonstrated through responses`,
            `Key questions about ${specificLesson} are addressed`,
            `Discussion about ${specificLesson} shows engagement`
        ];
        
        phrases.intro1 = pick(introTeacherTemplates);
        phrases.intro2 = pick(introStudentTemplates);
        phrases.intro3 = pick(introAssessmentTemplates);
    }
    
    const newTeacherTemplates = [
        `Providing students with ${specificLesson} teaching aids and asking them in groups to ${verbBase} ${specificLesson}`,
        `Distributing resources about ${specificLesson} and guiding groups to ${verbBase} ${specificLesson}`,
        `Giving teaching materials on ${specificLesson} and directing groups to ${verbBase} ${specificLesson}`,
        `Supplying learning aids about ${specificLesson} and asking student groups to ${verbBase} ${specificLesson}`,
        `Sharing resources on ${specificLesson} and prompting groups to ${verbBase} ${specificLesson}`
    ];
    
    const newStudentTemplates = [
        `${verbIng} and sharing ${specificLesson}`,
        `Working in groups to ${verbBase} ${specificLesson}`,
        `Collaborating to ${verbBase} and discuss ${specificLesson}`,
        `${verbIng} ${specificLesson} in small groups`,
        `Engaging in group work to ${verbBase} ${specificLesson}`
    ];
    
    const newAssessmentTemplates = [
        `${specificLesson} are correctly answered`,
        `Students demonstrate understanding of ${specificLesson}`,
        `Key concepts about ${specificLesson} are grasped`,
        `Group work shows comprehension of ${specificLesson}`,
        `${specificLesson} are successfully explored`
    ];
    
    phrases.new1 = pick(newTeacherTemplates);
    phrases.new2 = pick(newStudentTemplates);
    phrases.new3 = pick(newAssessmentTemplates);
    
    const reinTeacherTemplates = [
        `Asking students in the groups to ${verbBase} ${specificLesson}`,
        `Prompting group members to ${verbBase} ${specificLesson}`,
        `Directing students in groups to ${verbBase} ${specificLesson}`,
        `Challenging groups to ${verbBase} ${specificLesson}`,
        `Requesting that student groups ${verbBase} ${specificLesson}`
    ];
    
    const reinStudentTemplates = [
        `${verbIng} ${specificLesson}`,
        `Working to ${verbBase} ${specificLesson}`,
        `Practicing ${verbIng} ${specificLesson}`,
        `Demonstrating ability to ${verbBase} ${specificLesson}`,
        `Applying skills to ${verbBase} ${specificLesson}`
    ];
    
    const reinAssessmentTemplates = [
        `${specificLesson} are correctly answered`,
        `Students successfully ${verbBase} ${specificLesson}`,
        `Mastery of ${specificLesson} is demonstrated`,
        `${specificLesson} concepts are reinforced`,
        `Understanding of ${specificLesson} is confirmed`
    ];
    
    phrases.rein1 = pick(reinTeacherTemplates);
    phrases.rein2 = pick(reinStudentTemplates);
    phrases.rein3 = pick(reinAssessmentTemplates);
    
    const reflectTeacherTemplates = [
        `Asking each student to pick one card and ${verbBase} ${specificLesson}`,
        `Requesting individual students to select a card and ${verbBase} ${specificLesson}`,
        `Prompting each learner to choose a card and ${verbBase} ${specificLesson}`,
        `Having students pick cards and ${verbBase} ${specificLesson}`,
        `Directing each student to take a card and ${verbBase} ${specificLesson}`
    ];
    
    const reflectStudentTemplates = [
        `Picking a card and ${verbIng} ${specificLesson}`,
        `Selecting a card and ${verbIng} ${specificLesson}`,
        `Choosing a card and working to ${verbBase} ${specificLesson}`,
        `Taking a card and demonstrating ${specificLesson}`,
        `Drawing a card and ${verbIng} ${specificLesson}`
    ];
    
    const reflectAssessmentTemplates = [
        `${specificLesson} are correctly answered`,
        `Individual understanding of ${specificLesson} is demonstrated`,
        `Each student shows mastery of ${specificLesson}`,
        `Personal comprehension of ${specificLesson} is evident`,
        `Students successfully demonstrate ${specificLesson}`
    ];
    
    phrases.reflect1 = pick(reflectTeacherTemplates);
    phrases.reflect2 = pick(reflectStudentTemplates);
    phrases.reflect3 = pick(reflectAssessmentTemplates);
    
    return phrases;
}

// TIE-approved phrase generation for Swahili (updated from File 3)
function generateSwahiliPhrases(verb, specificLesson, isContinue) {
    const verbBase = verb.startsWith('ku') ? verb : 'ku' + verb;
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const phrases = {};
    
    if (isContinue) {
        const introTeacherTemplates = [
            "Kuonesha zana zilizotumika kwenye mada ya kipindi kilichopita na kuuliza maswali juu ya mada hiyo",
            "Kuwasilisha vifaa vya somo la awali na kuwaongoza wanafunzi kwa maswali",
            "Kutumia nyenzo za kipindi kilichopita na kuwauliza wanafunzi maswali",
            "Kuonyesha zana za mada iliyopita na kufanya majadiliano",
            "Kurejesha vifaa vya somo lililopita na kuuliza maswali mbalimbali"
        ];
        
        const introStudentTemplates = [
            "Kujibu maswali kutokana na zana za mada ya kipindi kilichopita",
            "Kuchunguza vifaa na kujibu maswali yaliyoulizwa",
            "Kushiriki katika majadiliano kuhusu somo lililopita",
            "Kuangalia nyenzo na kutoa majibu",
            "Kujishughulisha na zana na kujibu maswali"
        ];
        
        const introAssessmentTemplates = [
            "Maswali kutokana na zana za mada ya kipindi kilichopita yamejadiliwa kwa ufasaha",
            "Maswali ya somo lililopita yamejibiwa kwa usahihi",
            "Uelewa wa mada iliyopita umedhihirishwa",
            "Mjadala kuhusu somo la awali umeonyesha uelewa",
            "Maswali ya kurejesha yamejibiwa vizuri"
        ];
        
        phrases.intro1 = pick(introTeacherTemplates);
        phrases.intro2 = pick(introStudentTemplates);
        phrases.intro3 = pick(introAssessmentTemplates);
    } else {
        const introTeacherTemplates = [
            `Kuonesha zana za kufundishia na kisha kuuliza maswali kuhusu ${specificLesson}`,
            `Kuwasilisha vifaa vya kufundishia na kuwauliza wanafunzi kuhusu ${specificLesson}`,
            `Kutumia nyenzo za kufundishia wakati wa kuuliza maswali juu ya ${specificLesson}`,
            `Kuonyesha zana za ufundishaji na kuwaongoza wanafunzi kwa maswali kuhusu ${specificLesson}`,
            `Kutoa vifaa vya kujifunzia na kufanya majadiliano kuhusu ${specificLesson}`
        ];
        
        const introStudentTemplates = [
            `Kujibu maswali kutokana na zana za kufundishia kuhusu ${specificLesson}`,
            `Kuchunguza vifaa na kujibu maswali juu ya ${specificLesson}`,
            `Kuangalia zana za kufundishia na kushiriki katika majadiliano kuhusu ${specificLesson}`,
            `Kujishughulisha na nyenzo na kutoa majibu kuhusu ${specificLesson}`,
            `Kukagua vifaa vya kufundishia na kujibu maswali kuhusu ${specificLesson}`
        ];
        
        const introAssessmentTemplates = [
            `Maswali kutokana na zana kuhusu ${specificLesson} yamejadiliwa kwa usahihi`,
            `Wanafunzi wamejibu maswali kuhusu ${specificLesson} kwa usahihi`,
            `Uelewa wa ${specificLesson} umedhihirishwa kupitia majibu`,
            `Maswali muhimu kuhusu ${specificLesson} yamejadiliwa`,
            `Mjadala kuhusu ${specificLesson} umeonyesha ushiriki`
        ];
        
        phrases.intro1 = pick(introTeacherTemplates);
        phrases.intro2 = pick(introStudentTemplates);
        phrases.intro3 = pick(introAssessmentTemplates);
    }
    
    const newTeacherTemplates = [
        `Kutumia maswali ya mwongozo kuwaongoza wanafunzi katika vikundi vidogo kujadili ${specificLesson}`,
        `Kuwaongoza wanafunzi katika vikundi kuchunguza ${specificLesson} kwa maswali`,
        `Kuwaelekeza wanafunzi katika makundi madogo kujadili ${specificLesson} kwa ujumbe`,
        `Kutumia mbinu ya maswali kuwawezesha wanafunzi kujadili ${specificLesson} katika vikundi`,
        `Kuwaongoza wanafunzi kwa vikundi vidogo kugundua ${specificLesson} kupitia maswali`
    ];
    
    const newStudentTemplates = [
        `Wanafunzi katika vikundi vidogo kujadili kuhusu ${specificLesson}`,
        `Kufanya kazi katika vikundi kuchunguza ${specificLesson}`,
        `Kushirikiana katika majadiliano kuhusu ${specificLesson}`,
        `Kujadili ${specificLesson} katika makundi madogo`,
        `Kushiriki katika kazi ya kikundi kuhusu ${specificLesson}`
    ];
    
    const newAssessmentTemplates = [
        `Mambo mbalimbali kuhusu ${specificLesson} yamejadiliwa kwa usahihi`,
        `Wanafunzi wameonyesha uelewa wa ${specificLesson}`,
        `Dhana muhimu kuhusu ${specificLesson} zimeeleweka`,
        `Kazi ya kikundi inaonyesha uelewa wa ${specificLesson}`,
        `${specificLesson} imechunguzwa kwa mafanikio`
    ];
    
    phrases.new1 = pick(newTeacherTemplates);
    phrases.new2 = pick(newStudentTemplates);
    phrases.new3 = pick(newAssessmentTemplates);
    
    const reinTeacherTemplates = [
        `Kuwauliza wanafunzi katika vikundi vidogo ${verbBase} ${specificLesson}`,
        `Kuwaelekeza wanafunzi katika makundi ${verbBase} ${specificLesson}`,
        `Kuwahamasisha vikundi vya wanafunzi ${verbBase} ${specificLesson}`,
        `Kuwataka wanafunzi katika vikundi ${verbBase} ${specificLesson}`,
        `Kuwapa changamoto wanafunzi katika makundi ${verbBase} ${specificLesson}`
    ];
    
    const reinStudentTemplates = [
        `${verbBase} ${specificLesson}`,
        `Kufanya kazi ${verbBase} ${specificLesson}`,
        `Kujitahidi ${verbBase} ${specificLesson}`,
        `Kuonyesha uwezo wa ${verbBase} ${specificLesson}`,
        `Kutumia ujuzi ${verbBase} ${specificLesson}`
    ];
    
    const reinAssessmentTemplates = [
        `Maswali kuhusu ${specificLesson} yamejibiwa kwa usahihi`,
        `Wanafunzi wamefanikiwa ${verbBase} kuhusu ${specificLesson}`,
        `Utaalamu kuhusu ${specificLesson} umedhihirishwa`,
        `Dhana kuhusu ${specificLesson} zimeimarishwa`,
        `Uelewa kuhusu ${specificLesson} umethibitishwa`
    ];
    
    phrases.rein1 = pick(reinTeacherTemplates);
    phrases.rein2 = pick(reinStudentTemplates);
    phrases.rein3 = pick(reinAssessmentTemplates);
    
    const reflectTeacherTemplates = [
        `Kuuliza kila mwanafunzi kutoa mifano na ${verbBase} ${specificLesson}`,
        `Kumwomba kila mwanafunzi ${verbBase} ${specificLesson} na kutoa mifano`,
        `Kuwataka wanafunzi binafsi ${verbBase} ${specificLesson} kwa mifano`,
        `Kuwauliza wanafunzi mmoja mmoja ${verbBase} ${specificLesson} na kueleza`,
        `Kuwapa nafasi wanafunzi wote ${verbBase} ${specificLesson} kwa mifano`
    ];
    
    const reflectStudentTemplates = [
        `Kutoa mifano na ${verbBase} ${specificLesson}`,
        `Kuchagua kadi na ${verbBase} ${specificLesson}`,
        `Kuchukua kadi na kufanya kazi ${verbBase} ${specificLesson}`,
        `Kuonyesha ${specificLesson} kwa mifano`,
        `Kutoa mfano na ${verbBase} ${specificLesson}`
    ];
    
    const reflectAssessmentTemplates = [
        `Mifano imetolewa na ${specificLesson} kwa usahihi`,
        `Uelewa wa kibinafsi kuhusu ${specificLesson} umedhihirishwa`,
        `Kila mwanafunzi ameonyesha umahiri kuhusu ${specificLesson}`,
        `Uelewa wa mtu binafsi kuhusu ${specificLesson} umeonekana`,
        `Wanafunzi wameonyesha ${specificLesson} kwa mafanikio`
    ];
    
    phrases.reflect1 = pick(reflectTeacherTemplates);
    phrases.reflect2 = pick(reflectStudentTemplates);
    phrases.reflect3 = pick(reflectAssessmentTemplates);
    
    return phrases;
}

// Update the main updateContent function to use sentence case
var userLoad = document.getElementById("userLoad");
var lessonplanSubmit = document.getElementById("submit-lesson-plan");

function updateContent() {
    const isBaseline = document.getElementById('subject').value === 'Baseline';
    
    function getValue(fieldId) {
        if (isBaseline) {
            const textInput = document.querySelector(`input[type="text"][name="${fieldId}"]`);
            if (textInput && textInput.style.display !== 'none') {
                return textInput.value;
            }
        }
        return document.getElementById(fieldId).value;
    }
    
    const topicLesson = getValue('topicLesson');
    const compLesson = getValue('compLesson');
    const mainlesson = getValue('mainlesson');
    const refLesson = getValue('refLesson');
    const wrdImp1 = getValue('wrdImp1');
    const wrdImp2 = getValue('wrdImp2');

    var period = document.getElementById("period").value;
    var subject = document.getElementById("subject").value;
    var school = document.getElementById("school").value;
    var name = document.getElementById("teacherName").value;
    var subClasses = document.getElementById("classes").value;
    var subStreams = document.getElementById("streams").value;
    var subDate = document.getElementById("date").value;
    var specificLesson = document.getElementById("specificLesson").value;
    var tlmaterials = document.getElementById("tlmaterials").value;
    var studentsOption = document.getElementById("studentsOption").value;
    var femaleReg = studentsOption === "set" ? document.getElementById("femaleReg").value : "";
    var maleReg = studentsOption === "set" ? document.getElementById("maleReg").value : "";
    var femalePres = studentsOption === "set" ? document.getElementById("femalePres").value : "";
    var malePres = studentsOption === "set" ? document.getElementById("malePres").value : "";
    var remarkOption = document.getElementById("remarkOption").value;
    var customRemark = document.getElementById("customRemark").value;

    var schoolNm = document.getElementById("schoolNm");
    var schoolNmc = `${school}`;
    var teacherName = document.getElementById("lessonTch");
    var lessonSubject = document.getElementById("lessonSbjt");
    var teacherInfo = document.getElementById("teacherInfo");
    var lessonPeriod = document.getElementById("lessonPrd");
    var lessonTime = document.getElementById("lessonTm");
    var studentClass = document.getElementById("lessonClss");
    var streams = document.getElementById("lessonStrm");
    var lessonDate = document.getElementById("lessonDt");
    var sylbsCmp = document.getElementById("sylbsCmp");
    var sylbsMnObj = document.getElementById("sylbsMnObj");
    var sylbsMntp = document.getElementById("sylbsMntp");
    var sylbsSbtp = document.getElementById("sylbsSbtp");
    var sylbsSpobj = document.getElementById("sylbsSpobj");
    var sylbstlads = document.getElementById("sylbstlads");
    var sylbsMts = document.getElementById("sylbsMts");
    var sylbsRfrs = document.getElementById("sylbsRfrs");
    var flReg = document.getElementById("flReg");
    var mlReg = document.getElementById("mlReg");
    var flPr = document.getElementById("flPr");
    var mlPr = document.getElementById("mlPr");
    var flAb = document.getElementById("flAb");
    var mlAb = document.getElementById("mlAb");
    var stRegt = document.getElementById("stRegt");
    var stPrt = document.getElementById("stPrt");
    var stAbt = document.getElementById("stAbt");
    var introCont = document.getElementById("introCont");
    var newKnow = document.getElementById("newKnow");
    var reinCont = document.getElementById("reinCont");
    var refleCont = document.getElementById("refleCont");
    var intro1 = document.getElementById("intro1");
    var intro2 = document.getElementById("intro2");
    var intro3 = document.getElementById("intro3");
    var new1 = document.getElementById("new1");
    var new2 = document.getElementById("new2");
    var new3 = document.getElementById("new3");
    var rein1 = document.getElementById("rein1");
    var rein2 = document.getElementById("rein2");
    var rein3 = document.getElementById("rein3");
    var reflect1 = document.getElementById("reflect1");
    var reflect2 = document.getElementById("reflect2");
    var reflect3 = document.getElementById("reflect3");
    var lessonComment = document.getElementById("lessonComment");
    studentComm = document.getElementById("studentComm");
    remarkComm = document.getElementById("remarkComm");

    schoolNm.innerText = schoolNmc;
    teacherName.innerText = name;
    lessonSubject.innerText = subject;
    studentClass.innerText = subClasses;
    subStreams === "none" ? "" : (streams.innerText = subStreams);
    const dateOption = document.getElementById('dateOption').value;
    lessonDate.innerText = dateOption === 'notset' ? '' : subDate;
    sylbsMts.innerText = tlmaterials;
    sylbsRfrs.innerHTML = formatReference(refLesson, subject);
    flReg.innerText = femaleReg || "";
    mlReg.innerText = maleReg || "";
    flPr.innerText = femalePres || "";
    mlPr.innerText = malePres || "";
    stRegt.innerText = (femaleReg && maleReg) ? (parseInt(femaleReg) + parseInt(maleReg)) : "";
    stPrt.innerText = (femalePres && malePres) ? (parseInt(femalePres) + parseInt(malePres)) : "";

    const allowedSubjects = [
        "kiswahili",
        "elimu ya dini ya kiislam",
        "fasihi ya kiswahili",
        "historia ya tanzania na maadili",
        "stadi za awali za lugha",
        "kuhesabu,sayansi na tehama",
        "stadi za awali za maisha",
        "afya na mazingira",
        "kusoma",
        "sanaa bunifu na michezo",
        "naipenda nchi yangu tanzania",
        "kuandika",
        "kuhesabu",
        "utamaduni, sanaa na michezo",
        "sanaa na michezo",
        "jiografia na mazingira",
        "hisabati",
        "sayansi"
    ];

    if (allowedSubjects.includes(subject.toLowerCase())) {
        // Swahili subjects
        var schoolNm = document.getElementById("schoolNm");
        var muda = document.getElementById("muda");
        var mudaDakika = document.getElementById("muda-dakika");
        var andalio = document.getElementById("andalio");
        var somo = document.getElementById("somo");
        var darasa = document.getElementById("darasa");
        var mkondo = document.getElementById("mkondo");
        var kipindi = document.getElementById("kipindi");
        var ujuzi = document.getElementById("ujuzi");
        var lengoKuu = document.getElementById("lengoKuu");
        var madaKuu = document.getElementById("madaKuu");
        var madaNdogo = document.getElementById("madaNdogo");
        var jinaMwalimu = document.getElementById("jinaMwalimu");
        var lengoMahususi = document.getElementById("lengoMahususi");
        var tarehe = document.getElementById("tarehe");
        var nukuu = document.getElementById("nukuu");
        var rejea = document.getElementById("rejea");
        var idadi = document.getElementById("idadi");
        var hawapo = document.getElementById("hawapo");
        var sajiliwa = document.getElementById("sajiliwa");
        var fika = document.getElementById("fika");
        var wasichana = document.getElementById("wasichana");
        var wavulana = document.getElementById("wavulana");
        var jumla = document.getElementById("jumla");
        var wasichana1 = document.getElementById("wasichana1");
        var wavulana1 = document.getElementById("wavulana1");
        var jumla1 = document.getElementById("jumla1");
        var hatua = document.getElementById("hatua");
        var mwalimu = document.getElementById("mwalimu");
        var mwanafunzi = document.getElementById("mwanafunzi");
        var angalia = document.getElementById("angalia");
        var mwanzo = document.getElementById("mwanzo");
        var mpya = document.getElementById("mpya");
        var kuimarisha = document.getElementById("kuimarisha");
        var tafakari = document.getElementById("tafakari");
        var hitimisho = document.getElementById("hitimisho");
        var kichwaHabari = document.getElementById("kichwa-habari");
        var maoni = document.getElementById("maoni");
        var schoolNm = document.getElementById("schoolNm");
        var schoolNmc = school;
        var school = document.getElementById("school").value;
        var ShuleJina = document.getElementById("ShuleJina");

        schoolNm.innerText = schoolNmc;
        ShuleJina.innerText = "Shule";
        mudaDakika.innerText = `Muda (Dak)`;
        andalio.innerText = "Andalio la somo";
        somo.innerText = "somo";
        darasa.innerText = "Darasa";
        ujuzi.innerText = "Umahiri Mkuu";
        lengoKuu.innerText = "Umahiri Mahususi";
        madaNdogo.innerText = "Shughuli Kuu";
        jinaMwalimu.innerText = "jina La Mwalimu";
        lengoMahususi.innerText = "Shughuli Mahususi";
        tarehe.innerText = "tarehe";
        kichwaHabari.innerText = "Mchakato wa ufundishaji na Ujifunzaji";
        nukuu.innerText = "Zana za kufundishia";
        rejea.innerText = "Rejea";
        idadi.innerText = "Idadi";
        fika.innerText = "Walio hudhuria";
        sajiliwa.innerText = "Walio andikishwa";
        wasichana.innerText = "Wasichana";
        wavulana.innerText = "Wavulana";
        jumla.innerText = "Jumla";
        wasichana1.innerText = "Wasichana";
        wavulana1.innerText = "Wavulana";
        jumla1.innerText = "Jumla";
        hatua.innerText = "Hatua";
        mwalimu.innerText = "Shughuli za Ufundishaji";
        mwanafunzi.innerText = "Shughuli za ujifunzaji";
        angalia.innerText = "Vigezo vya upimaji";
        mwanzo.innerText = "Utangulizi";
        mpya.innerText = "Kuendeleza ujenzi wa umahiri";
        kuimarisha.innerText = "Kubuni";
        tafakari.innerText = "Tathmini";
        maoni.innerText = "Maoni :";
        muda.innerText = "Muda";

        const classesArray = [
            ["pre-primary", "Darasa la Awali"],
            ["standard i", "Darasa la Kwanza"],
            ["standard ii", "Darasa la Pili"],
            ["standard iii", "Darasa la Tatu"],
            ["standard iv", "Darasa la Nne"],
            ["standard v", "Darasa la Tano"],
            ["standard vi", "Darasa la Sita"],
            ["form one", "Kidato cha Kwanza"],
            ["form two", "Kidato cha Pili"],
            ["form three", "Kidato cha Tatu"],
            ["form four", "Kidato cha Nne"],
            ["form five", "Kidato cha Tano"],
            ["form six", "Kidato cha Sita"]
        ];

        const classes = Object.fromEntries(
            classesArray.flatMap(([english, swahili]) => [
                [english.toLowerCase(), swahili],
                [swahili.toLowerCase(), swahili]
            ])
        );
        const subNewClass = classes[subClasses.toLowerCase()] || null;

        studentClass.innerText = subNewClass || "Class not Found";

        sylbsMnObj.innerText = sentenceCase(topicLesson);
        sylbsCmp.innerText = sentenceCase(compLesson);
        sylbsSbtp.innerText = sentenceCase(mainlesson);
        sylbsSpobj.innerText = sentenceCase(wrdImp2 + " " + specificLesson);

        if (remarkOption === "blank") {
            remarkComm.innerText = "";
        } else if (remarkOption === "custom" && customRemark.trim() !== "") {
            remarkComm.innerText = sentenceCase(customRemark);
        } else {
            remarkComm.innerText = sentenceCase(`Wanafunzi waliweza ${wrdImp2} ${specificLesson} kutokana na matumizi ya mbinu shirikishi za kufundisha na kujifunza, pamoja na shughuli na zana mbalimbali. Hata hivyo, baadhi ya wanafunzi walishindwa ${wrdImp2} ${specificLesson}. Kwa hivyo, nitafafanua zaidi katika kipindi kijacho.`);
        }

        var phrases = generateSwahiliPhrases(wrdImp2, specificLesson, wrdImp1 === "Endelea");
        intro1.innerText = sentenceCase(phrases.intro1);
        intro2.innerText = sentenceCase(phrases.intro2);
        intro3.innerText = sentenceCase(phrases.intro3);
        new1.innerText = sentenceCase(phrases.new1);
        new2.innerText = sentenceCase(phrases.new2);
        new3.innerText = sentenceCase(phrases.new3);
        rein1.innerText = sentenceCase(phrases.rein1);
        rein2.innerText = sentenceCase(phrases.rein2);
        rein3.innerText = sentenceCase(phrases.rein3);
        reflect1.innerText = sentenceCase(phrases.reflect1);
        reflect2.innerText = sentenceCase(phrases.reflect2);
        reflect3.innerText = sentenceCase(phrases.reflect3);

if (period === "custom_duration") {
    const customMinutes = parseInt(document.getElementById("customMinutes")?.value) || 0;
    const periodType = document.getElementById("periodType")?.value;

    if (customMinutes > 0) {
        const startHour = parseInt(document.getElementById("hourCodes").value);
        const startMinutes = parseInt(document.getElementById("minCodes").value);
        const acaTime = startMinutes + customMinutes;
        const endMinutes = acaTime % 60;
        const minutesToHours = Math.floor(acaTime / 60);
        const endHour = startHour + minutesToHours;

        // Convert to Swahili time
        const swahiliStart = convertToSwahiliTime(startHour, startMinutes);
        const swahiliEnd = convertToSwahiliTime(endHour, endMinutes);

        lessonTime.innerText = `${swahiliStart.formattedHour} : ${swahiliStart.formattedMinutes} ${swahiliStart.session} - ${swahiliEnd.formattedHour} : ${swahiliEnd.formattedMinutes} ${swahiliEnd.session}`;

        const intro = Math.ceil(customMinutes * 0.125);
        const development = Math.ceil(customMinutes * 0.50);
        const design = Math.ceil(customMinutes * 0.1875);
        const realization = customMinutes - intro - development - design;

        introCont.innerText = intro;
        newKnow.innerText = development;
        reinCont.innerText = design;
        refleCont.innerText = realization;
    }
} else if (period === 'custom_distribution') {
    const intro = parseInt(document.getElementById("introMinutes")?.value) || 0;
    const development = parseInt(document.getElementById("developmentMinutes")?.value) || 0;
    const design = parseInt(document.getElementById("designMinutes")?.value) || 0;
    const realization = parseInt(document.getElementById("realizationMinutes")?.value) || 0;
    const distributionType = document.getElementById("distributionType")?.value;

    let totalMinutes = 0;
    if (distributionType === 'single') {
        totalMinutes = 40;
    } else if (distributionType === 'double') {
        totalMinutes = 80;
    } else if (distributionType === 'custom') {
        totalMinutes = parseInt(document.getElementById("customTotalMinutes")?.value) || 0;
    }

    const startHour = parseInt(document.getElementById("hourCodes").value);
    const startMinutes = parseInt(document.getElementById("minCodes").value);
    const acaTime = startMinutes + totalMinutes;
    const endMinutes = acaTime % 60;
    const minutesToHours = Math.floor(acaTime / 60);
    const endHour = startHour + minutesToHours;

    // Convert to Swahili time
    const swahiliStart = convertToSwahiliTime(startHour, startMinutes);
    const swahiliEnd = convertToSwahiliTime(endHour, endMinutes);

    lessonTime.innerText = `${swahiliStart.formattedHour} : ${swahiliStart.formattedMinutes} ${swahiliStart.session} - ${swahiliEnd.formattedHour} : ${swahiliEnd.formattedMinutes} ${swahiliEnd.session}`;

    introCont.innerText = intro;
    newKnow.innerText = development;
    reinCont.innerText = design;
    refleCont.innerText = realization;
} else if (period === "2") {
    var startHour = parseInt(document.getElementById("hourCodes").value);
    var startMinutes = parseInt(document.getElementById("minCodes").value);
    const acaMinutes = 80;
    acaTime = parseInt(startMinutes) + acaMinutes;
    endMinutes = acaTime % 60;
    minutesToHours = Math.floor(acaTime / 60);
    endHour = parseInt(startHour) + minutesToHours;

    // Convert to Swahili time
    const swahiliStart = convertToSwahiliTime(startHour, startMinutes);
    const swahiliEnd = convertToSwahiliTime(endHour, endMinutes);

    lessonTime.innerText = `${swahiliStart.formattedHour} : ${swahiliStart.formattedMinutes} ${swahiliStart.session} - ${swahiliEnd.formattedHour} : ${swahiliEnd.formattedMinutes} ${swahiliEnd.session}`;

    introCont.innerText = "10";
    newKnow.innerText = "40";
    reinCont.innerText = "15";
    refleCont.innerText = "15";

} else if (period === "1") {
    var startHour = parseInt(document.getElementById("hourCodes").value);
    var startMinutes = parseInt(document.getElementById("minCodes").value);
    const acaMinutes = 40;
    acaTime = parseInt(startMinutes) + acaMinutes;
    endMinutes = acaTime % 60;
    minutesToHours = Math.floor(acaTime / 60);
    endHour = parseInt(startHour) + minutesToHours;

    // Convert to Swahili time
    const swahiliStart = convertToSwahiliTime(startHour, startMinutes);
    const swahiliEnd = convertToSwahiliTime(endHour, endMinutes);

    lessonTime.innerText = `${swahiliStart.formattedHour} : ${swahiliStart.formattedMinutes} ${swahiliStart.session} - ${swahiliEnd.formattedHour} : ${swahiliEnd.formattedMinutes} ${swahiliEnd.session}`;

    introCont.innerText = "5";
    newKnow.innerText = "15";
    reinCont.innerText = "10";
    refleCont.innerText = "10";

} else {
    lessonTime.innerText = " ";
}

    } else {
        // English subjects
        sylbsMnObj.innerText = sentenceCase(topicLesson);
        sylbsCmp.innerText = sentenceCase(compLesson);
        sylbsSbtp.innerText = sentenceCase(mainlesson);
        sylbsSpobj.innerText = sentenceCase(wrdImp2 + " " + specificLesson);

        if (remarkOption === "blank") {
            remarkComm.innerText = "";
        } else if (remarkOption === "custom" && customRemark.trim() !== "") {
            remarkComm.innerText = sentenceCase(customRemark);
        } else {
            remarkComm.innerText = sentenceCase("The students were able to " + wrdImp2 + " " + specificLesson + " due to the use of interactive teaching and learning methods, activities and resources. However, some students failed to " + wrdImp2 + " " + specificLesson + " Therefore, I will clarify it next period.");
        }

        var phrases = generateEnglishPhrases(wrdImp2, specificLesson, wrdImp1 === "Continue");
        intro1.innerText = sentenceCase(phrases.intro1);
        intro2.innerText = sentenceCase(phrases.intro2);
        intro3.innerText = sentenceCase(phrases.intro3);
        new1.innerText = sentenceCase(phrases.new1);
        new2.innerText = sentenceCase(phrases.new2);
        new3.innerText = sentenceCase(phrases.new3);
        rein1.innerText = sentenceCase(phrases.rein1);
        rein2.innerText = sentenceCase(phrases.rein2);
        rein3.innerText = sentenceCase(phrases.rein3);
        reflect1.innerText = sentenceCase(phrases.reflect1);
        reflect2.innerText = sentenceCase(phrases.reflect2);
        reflect3.innerText = sentenceCase(phrases.reflect3);

        if (period === "custom_duration") {
            const customMinutes = parseInt(document.getElementById("customMinutes")?.value) || 0;
            const periodType = document.getElementById("periodType")?.value;

            if (customMinutes > 0) {
                const startHour = parseInt(document.getElementById("hourCodes").value);
                const startMinutes = parseInt(document.getElementById("minCodes").value);
                const acaTime = startMinutes + customMinutes;
                const endMinutes = acaTime % 60;
                const minutesToHours = Math.floor(acaTime / 60);
                const endHour = startHour + minutesToHours;

                startSession = startHour >= 12 ? "P.M" : "A.M";
                endSession = endHour >= 12 ? "P.M" : "A.M";

                startSession12 = startHour % 12 || 12;
                endSession12 = endHour % 12 || 12;

                const formattedstartHour = startHour.toString().padStart(2, "0");
                const formattedendHour = endHour.toString().padStart(2, "0");
                const formattedstartMinutes = startMinutes.toString().padStart(2, "0");
                const formattedendMinutes = endMinutes.toString().padStart(2, "0");

                lessonTime.innerText = `${formattedstartHour} : ${formattedstartMinutes} ${startSession} - ${formattedendHour} : ${formattedendMinutes} ${endSession}`;

                const intro = Math.ceil(customMinutes * 0.125);
                const development = Math.ceil(customMinutes * 0.50);
                const design = Math.ceil(customMinutes * 0.1875);
                const realization = customMinutes - intro - development - design;

                introCont.innerText = intro;
                newKnow.innerText = development;
                reinCont.innerText = design;
                refleCont.innerText = realization;
            }
        } else if (period === 'custom_distribution') {
            const intro = parseInt(document.getElementById("introMinutes")?.value) || 0;
            const development = parseInt(document.getElementById("developmentMinutes")?.value) || 0;
            const design = parseInt(document.getElementById("designMinutes")?.value) || 0;
            const realization = parseInt(document.getElementById("realizationMinutes")?.value) || 0;
            const distributionType = document.getElementById("distributionType")?.value;

            let totalMinutes = 0;
            if (distributionType === 'single') {
                totalMinutes = 40;
            } else if (distributionType === 'double') {
                totalMinutes = 80;
            } else if (distributionType === 'custom') {
                totalMinutes = parseInt(document.getElementById("customTotalMinutes")?.value) || 0;
            }

            const startHour = parseInt(document.getElementById("hourCodes").value);
            const startMinutes = parseInt(document.getElementById("minCodes").value);
            const acaTime = startMinutes + totalMinutes;
            const endMinutes = acaTime % 60;
            const minutesToHours = Math.floor(acaTime / 60);
            const endHour = startHour + minutesToHours;

            startSession = startHour >= 12 ? "P.M" : "A.M";
            endSession = endHour >= 12 ? "P.M" : "A.M";

            startSession12 = startHour % 12 || 12;
            endSession12 = endHour % 12 || 12;

            const formattedstartHour = startHour.toString().padStart(2, "0");
            const formattedendHour = endHour.toString().padStart(2, "0");
            const formattedstartMinutes = startMinutes.toString().padStart(2, "0");
            const formattedendMinutes = endMinutes.toString().padStart(2, "0");

            lessonTime.innerText = `${formattedstartHour} : ${formattedstartMinutes} ${startSession} - ${formattedendHour} : ${formattedendMinutes} ${endSession}`;

            introCont.innerText = intro;
            newKnow.innerText = development;
            reinCont.innerText = design;
            refleCont.innerText = realization;
        } else if (period === "2") {

            var startHour = document.getElementById("hourCodes").value;
            var startMinutes = document.getElementById("minCodes").value;
            const acaMinutes = 80;
            acaTime = parseInt(startMinutes) + acaMinutes;
            endMinutes = acaTime % 60;
            minutesToHours = Math.floor(acaTime / 60);
            endHour = parseInt(startHour) + minutesToHours;

            startSession = startHour >= 12 ? "P.M" : "A.M";
            endSession = endHour >= 12 ? "P.M" : "A.M";

            startSession12 = startHour % 12 || 12;
            endSession12 = endHour % 12 || 12;

            formattedstartHour = startHour.toString().padStart(2, "0");
            formattedendHour = endHour.toString().padStart(2, "0");
            formattedstartMinutes = startMinutes.toString().padStart(2, "0");
            formattedendMinutes = endMinutes.toString().padStart(2, "0");
            lessonTime.innerText = `${formattedstartHour} : ${formattedstartMinutes} ${startSession} - ${formattedendHour} : ${formattedendMinutes} ${endSession}`;

            introCont.innerText = "10";
            newKnow.innerText = "40";
            reinCont.innerText = "15";
            refleCont.innerText = "15";

        } else if (period === "1") {

            var startHour = document.getElementById("hourCodes").value;
            var startMinutes = document.getElementById("minCodes").value;
            const acaMinutes = 40;
            acaTime = parseInt(startMinutes) + acaMinutes;
            endMinutes = acaTime % 60;
            minutesToHours = Math.floor(acaTime / 60);
            endHour = parseInt(startHour) + minutesToHours;

            startSession = startHour >= 12 ? "P.M" : "A.M";
            endSession = endHour >= 12 ? "P.M" : "A.M";

            startSession12 = startHour % 12 || 12;
            endSession12 = endHour % 12 || 12;

            formattedstartHour = startHour.toString().padStart(2, "0");
            formattedendHour = endHour.toString().padStart(2, "0");
            formattedstartMinutes = startMinutes.toString().padStart(2, "0");
            formattedendMinutes = endMinutes.toString().padStart(2, "0");
            lessonTime.innerText = `${formattedstartHour} : ${formattedstartMinutes} ${startSession} - ${formattedendHour} : ${formattedendMinutes} ${endSession}`;

            introCont.innerText = "5";
            newKnow.innerText = "15";
            reinCont.innerText = "10";
            refleCont.innerText = "10";

        } else {
            lessonTime.innerText = " ";
        }
    }
}

function capitalizeProperNouns(str) {
    if (!str) return str;
    
    const properNouns = [
        'Allah',
        'Allaah', 
        'Mungu',
        'Tanzania',
        'Africa',
        'Afrika'
    ];
    properNouns.forEach(word => {
        // Match the word with word boundaries to avoid partial matches
        const regex = new RegExp('\\b' + word + '\\b', 'gi');
        str = str.replace(regex, word);
    });
    
    return str;
}
