var userLoad = document.getElementById("userLoad");
var lessonplanSubmit = document.getElementById("submit-lesson-plan");
function conjugateEnglishVerb(verb, form) {
    const actionVerbs = {
        'discuss': { ing: 'discussing', base: 'discuss' },
        'explain': { ing: 'explaining', base: 'explain' },
        'describe': { ing: 'describing', base: 'describe' },
        'demonstrate': { ing: 'demonstrating', base: 'demonstrate' },
        'analyse': { ing: 'analysing', base: 'analyse' },
        'analyze': { ing: 'analyzing', base: 'analyze' },
        'calculate': { ing: 'calculating', base: 'calculate' },
        'compute': { ing: 'computing', base: 'compute' },
        'find': { ing: 'finding', base: 'find' },
        'evaluate': { ing: 'evaluating', base: 'evaluate' },
        'state': { ing: 'stating', base: 'state' },
        'give': { ing: 'giving', base: 'give' },
        'practice': { ing: 'practicing', base: 'practice' },
        'organise': { ing: 'organising', base: 'organise' },
        'organize': { ing: 'organizing', base: 'organize' },
        'apply': { ing: 'applying', base: 'apply' },
        'identify': { ing: 'identifying', base: 'identify' },
        'write': { ing: 'writing', base: 'write' },
        'read': { ing: 'reading', base: 'read' },
        'solve': { ing: 'solving', base: 'solve' }
    };

    const verbLower = verb.toLowerCase().trim();
    
    if (actionVerbs[verbLower]) {
        return form === 'ing' ? actionVerbs[verbLower].ing : actionVerbs[verbLower].base;
    }

    if (form === 'ing') {
        if (verbLower.endsWith('e') && !verbLower.endsWith('ee')) {
            return verbLower.slice(0, -1) + 'ing';
        }
        if (verbLower.match(/[^aeiou][aeiou][^aeiouwxy]$/)) {
            return verbLower + verbLower.slice(-1) + 'ing';
        }
        return verbLower + 'ing';
    }

    return verbLower;
}

function generateEnglishPhrases(verb, specificLesson, isContinue) {
    const verbIng = conjugateEnglishVerb(verb, 'ing');
    const verbBase = conjugateEnglishVerb(verb, 'base');
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

function handleSwahiliVerb(verb) {
    const swahiliVerbs = {
        'kuandika': { base: 'kuandika', root: 'andika' },
        'kueleza': { base: 'kueleza', root: 'eleza' },
        'kujibu': { base: 'kujibu', root: 'jibu' },
        'kufupisha': { base: 'kufupisha', root: 'fupisha' },
        'kubaini': { base: 'kubaini', root: 'baini' },
        'kuhakiki': { base: 'kuhakiki', root: 'hakiki' },
        'kuunda': { base: 'kuunda', root: 'unda' },
        'kutunga': { base: 'kutunga', root: 'tunga' },
        'kupambanua': { base: 'kupambanua', root: 'pambanua' },
        'kufafanua': { base: 'kufafanua', root: 'fafanua' },
        'kuonesha': { base: 'kuonesha', root: 'onesha' },
        'kuainisha': { base: 'kuainisha', root: 'ainisha' },
        'kusoma': { base: 'kusoma', root: 'soma' },
        'kusimulia': { base: 'kusimulia', root: 'simulia' }
    };

    const verbLower = verb.toLowerCase().trim();
    
    if (swahiliVerbs[verbLower]) {
        return swahiliVerbs[verbLower].base;
    }

    if (verbLower.startsWith('ku')) {
        return verbLower;
    }

    return 'ku' + verbLower;
}

function generateSwahiliPhrases(verb, specificLesson, isContinue) {
    const verbBase = handleSwahiliVerb(verb);
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

    function updateContent() {  // ← Changed name from updateContentEnhanced
    const isBaseline = document.getElementById('subject').value === 'Baseline';
    
    // Smart helper to get values from either text inputs OR dropdowns
    function getValue(fieldId) {
        if (isBaseline) {
            // In baseline mode, look for text input with same name
            const textInput = document.querySelector(`input[type="text"][name="${fieldId}"]`);
            if (textInput && textInput.style.display !== 'none') {
                return textInput.value;
            }
        }
        // Normal mode OR fallback: use the original element
        return document.getElementById(fieldId).value;
    }
    
    // Get values using smart helper
    const topicLesson = getValue('topicLesson');
    const compLesson = getValue('compLesson');
    const mainlesson = getValue('mainlesson');
    const refLesson = getValue('refLesson');
    const wrdImp1 = getValue('wrdImp1');
    const wrdImp2 = getValue('wrdImp2');

        var period = document.getElementById("period").value;
        var subject =document.getElementById("subject").value;
       var school =document.getElementById("school").value;
       var name = document.getElementById("teacherName").value;
       var subClasses = document.getElementById("classes").value;
       var subStreams = document.getElementById("streams").value;
       var subDate = document.getElementById("date").value;
      // var subTopiclesson = document.getElementById("subTopiclesson").value;
       var specificLesson = document.getElementById("specificLesson").value;
       //var aidsLesson = document.getElementById("aidsLesson").value;
       var tlmaterials =document.getElementById("tlmaterials").value;
       var femaleReg = document.getElementById("femaleReg").value;
       var maleReg = document.getElementById("maleReg").value;
       var femalePres = document.getElementById("femalePres").value;
       var malePres = document.getElementById("malePres").value;
       //var stdUnderstood = document.getElementById("stdUnderstood").value;
      

       var schoolNm = document.getElementById("schoolNm");
       var schoolNmc = `${school}`;
       var teacherName = document.getElementById("lessonTch");
        var lessonSubject = document.getElementById("lessonSbjt");
        var teacherInfo = document.getElementById("teacherInfo");
        var lessonPeriod = document.getElementById("lessonPrd");
        var lessonTime = document.getElementById("lessonTm");
        var studentClass =document.getElementById("lessonClss");
        var streams =document.getElementById("lessonStrm");
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
        //var consoCont = document.getElementById("consoCont");
        var intro1 = document.getElementById("intro1");
        var intro2 = document.getElementById("intro2");
        var intro3 = document.getElementById("intro3");
        var new1 = document.getElementById("new1");
        var new2 = document.getElementById("new2");
        var new3 = document.getElementById("new3");
        var rein2 = document.getElementById("rein1");
        var rein2 = document.getElementById("rein2");
        var rein3 = document.getElementById("rein3");
        var reflect1 = document.getElementById("reflect1");
        var reflect2 = document.getElementById("reflect2");
        var reflect3 = document.getElementById("reflect3");
        //var conso1 = document.getElementById("conso1");
        //var conso2 = document.getElementById("conso2");
       // var conso3 = document.getElementById("conso3");
        var lessonComment = document.getElementById("lessonComment");
       // var cYear = document.getElementById("cYear");
        studentComm = document.getElementById("studentComm");
        remarkComm = document.getElementById("remarkComm");


       
       schoolNm.innerText = schoolNmc;
       teacherName.innerText = name;
       lessonSubject.innerText = subject;
      // teacherInfo.innerText =`${subject}`;
       //lessonPeriod.innerText = period;
       studentClass.innerText = subClasses;
      subStreams === "none"? "" :(streams.innerText = subStreams);
       lessonDate.innerText = subDate;
       //sylbsMntp.innerText = topicLesson; 
       //sylbsSbtp.innerText = subTopiclesson; 
      // cYear.innerText = yearOfStd;
       //sylbstlads.innerText = aidsLesson; 
       sylbsMts.innerText = tlmaterials; 
       sylbsRfrs.innerText = refLesson; 
       flReg.innerText = femaleReg; 
       mlReg.innerText = maleReg; 
       flPr.innerText = femalePres; 
       mlPr.innerText = malePres; 
      //flAb.innerText = femaleReg - femalePres;
       //mlAb.innerText = maleReg - malePres;
       stRegt.innerText = parseInt(femaleReg) + parseInt(maleReg);
       stPrt.innerText = parseInt(femalePres) + parseInt(malePres);
       //stAbt.innerText = (femaleReg - femalePres )+ (maleReg - malePres );
       //var underStd = parseInt(stdUnderstood);
       //var underStdPrc = ((parseInt(stdUnderstood)/(parseInt(femalePres) + parseInt(malePres)))*100).toFixed(1)+"%";
       //var notUnderstd = (parseInt(femalePres) + parseInt(malePres))-parseInt(stdUnderstood);
       //var notUnderstdprs = ((1 - (parseInt(stdUnderstood)/(parseInt(femalePres) + parseInt(malePres))))*100).toFixed(1) +"%";

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
         var schoolNm = document.getElementById("schoolNm");
         var muda = document.getElementById("muda");
         var mudaDakika = document.getElementById("muda-dakika");
         var andalio = document.getElementById("andalio");
         var somo =document.getElementById("somo");
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
         //var vifaa = document.getElementById("vifaa");
         var nukuu = document.getElementById("nukuu");
         var rejea = document.getElementById("rejea");
         var idadi = document.getElementById("idadi");
         //var jinsia = document.getElementById("jinsia");
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
         //var tathMwanafunzi = document.getElementById("tathMwanafunzi");
         //var tahMwalimu = document.getElementById("tathMwalimu");
         var maoni = document.getElementById("maoni");
         var schoolNm = document.getElementById("schoolNm");
         var schoolNmc = school;
         var school =document.getElementById("school").value;
         var ShuleJina = document.getElementById("ShuleJina");


         schoolNm.innerText = schoolNmc;
         ShuleJina.innerText = "Shule";
         mudaDakika.innerText = `Muda (Dak)`;
         andalio.innerText = "Andalio la somo";
         somo.innerText = "somo";
         darasa.innerText = "Darasa";
         //mkondo.innerText = "Mkondo";
         //kipindi.innerText = "Kipindi";
         ujuzi.innerText = "Umahiri Mkuu";
         lengoKuu.innerText = "Umahiri Mahususi";
         //madaKuu.innerText = "mada kuu";
         madaNdogo.innerText = "Shughuli Kuu";
         jinaMwalimu.innerText = "jina La Mwalimu";
         lengoMahususi.innerText = "Shughuli Mahususi";
         tarehe.innerText = "tarehe";
         kichwaHabari.innerText = "Mchakato wa ufundishaji na Ujifunzaji"
         //vifaa.innerText ="zana za kujifunzia";
         nukuu.innerText = "Zana za kufundishia";
         rejea.innerText = "Rejea";
         idadi.innerText ="Idadi";
         //jinsia.innerText ="jinsia";
         fika.innerText = "Walio hudhuria";
         //hawapo.innerText = "Wasio hudhuria";
         sajiliwa.innerText ="Walio andikishwa";
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
         mpya.innerText ="Kuendeleza ujenzi wa umahiri";
         kuimarisha.innerText = "Kubuni";
         tafakari.innerText = "Tathmini";
         //hitimisho.innerText = "hitimisho";
         //tathMwanafunzi.innerText = "tahmini ya Mwanafunzi :";
         //tathMwalimu.innerText = "tathmini ya mwalimu :";
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
     [ "form one", "Kidato cha Kwanza"],
     ["form two", "Kidato cha Pili"],
     [ "form three", "Kidato cha Tatu"],
     ["form four", "Kidato cha Nne"],
     ["form five", "Kidato cha Tano"],
     ["form six", "Kidato cha Sita"]
  ];

const classes = Object.fromEntries(
  classesArray.flatMap(([english,swahili]) => [
   [english.toLowerCase(), swahili],
   [swahili.toLowerCase(), swahili]
  ])
);
const subNewClass = classes[subClasses.toLowerCase()] || null;

         studentClass.innerText = subNewClass || "Class not Found";

       
         sylbsMnObj.innerText = topicLesson ; 
       sylbsCmp.innerText = compLesson ; 
       sylbsSbtp.innerText = mainlesson; 
       sylbsSpobj.innerText = wrdImp2 + " " + specificLesson;
         
       var remarkOption = document.getElementById("remarkOption").value;
var customRemark = document.getElementById("customRemark").value;

if (remarkOption === "custom" && customRemark.trim() !== "") {
    remarkComm.innerText = customRemark;
} else {
       remarkComm.innerText =`Wanafunzi waliweza  ${wrdImp2} ${specificLesson} kutokana na matumizi ya mbinu shirikishi za kufundisha na kujifunza, pamoja na shughuli na zana mbalimbali. Hata hivyo, baadhi ya wanafunzi walishindwa ${wrdImp2} ${specificLesson}. Kwa hivyo, nitafafanua zaidi katika kipindi kijacho.`;
}
       /*studentComm.innerText ="Somo limeeleweka vizuri na mwanafunzi,kwa kuwa ameshiriki vizuri " + wrdImp2 +" "+ specificLesson;
       if (parseInt(stdUnderstood) === (parseInt(femalePres) + parseInt(malePres))) {
        lessonComment.innerText = "somo limeelewekana wanafunzi "+ underStd +" (" + underStdPrc +")";
       } else if(notUnderstd === 1) { 
       lessonComment.innerText = "somo limeeleweka na wanafunzi " + underStd + " (" + underStdPrc + ") na mwanafunzi " + notUnderstd + "  (" + notUnderstdprs + ") amepatiwa zoezi kwa ujifunzanzi wa ziada";
       } else { 
       lessonComment.innerText = "somo limeeleweka na wanafunzi " + underStd + " (" + underStdPrc + ") na wanafunzi " + notUnderstd + "  (" + notUnderstdprs + ") wamepatiwa zaezi kwa ujifunzaji wa ziada";
       }*/

       var phrases = generateSwahiliPhrases(wrdImp2, specificLesson, wrdImp1 === "Endelea");
intro1.innerText = phrases.intro1;
intro2.innerText = phrases.intro2;
intro3.innerText = phrases.intro3;
new1.innerText = phrases.new1;
new2.innerText = phrases.new2;
new3.innerText = phrases.new3;
rein1.innerText = phrases.rein1;
rein2.innerText = phrases.rein2;
rein3.innerText = phrases.rein3;
reflect1.innerText = phrases.reflect1;
reflect2.innerText = phrases.reflect2;
reflect3.innerText = phrases.reflect3;

       //conso1.innerText = "mwalimu kuuliza maswali machache na kufanya marejeo ya somo kwa uchache kuhusu " + specificLesson;
       //conso2.innerText = "mwanafunzi kujibu maswali machache yalioulizwa na kuandika nukuu chache za marejeo  ya somo kuhusu " + specificLesson;
       //conso3.innerText = "kuangalia kama anaweza kujibu maswali kwa usahihi na kuchukua nukuu chache za marejeo ya somo";
       if(period === "2") {
          var startHour = document.getElementById("hourCodes").value;
          var startMinutes = document.getElementById("minCodes").value;
          const acaMinutes = 80;
          acaTime = parseInt(startMinutes) + acaMinutes;
           endMinutes = acaTime % 60;
           minutesToHours = Math.floor(acaTime / 60);
           endHour = parseInt(startHour) +  minutesToHours;

           startSession = startHour >= 12 ? "MCHAN" : "ASUB";
           endSession = endHour >= 12 ? "MCHAN" : "ASUB";

           startSession12 = startHour % 12 || 12 ;
           endSession12 = endHour % 12 || 12;

           formattedstartHour = startHour.toString().padStart(2,"0");
           formattedendHour = endHour.toString().padStart(2,"0");
           formattedstartMinutes = startMinutes.toString().padStart(2,"0");
           formattedendMinutes =endMinutes.toString().padStart(2,"0");
           lessonTime.innerText = `${formattedstartHour} : ${formattedstartMinutes} ${startSession} - ${formattedendHour} : ${formattedendMinutes} ${endSession}`;
          
         
         introCont.innerText ="10";
         newKnow.innerText ="40";
         reinCont.innerText ="15";
         refleCont.innerText = "15";
         //consoCont.innerText =" (dakika 5)"; 
         
       } else if(period === "1")  {
          var startHour = document.getElementById("hourCodes").value;
          var startMinutes = document.getElementById("minCodes").value;
          const acaMinutes = 40;
          acaTime = parseInt(startMinutes) + acaMinutes;
           endMinutes = acaTime % 60;
           minutesToHours = Math.floor(acaTime / 60);
           endHour = parseInt(startHour) +  minutesToHours;

           startSession = startHour >= 12 ? "MCHAN" : "ASUB";
           endSession = endHour >= 12 ? "MCHAN" : "ASUB";

           startSession12 = startHour % 12 || 12 ;
           endSession12 = endHour % 12 || 12;

           formattedstartHour = startHour.toString().padStart(2,"0");
           formattedendHour = endHour.toString().padStart(2,"0");
           formattedstartMinutes = startMinutes.toString().padStart(2,"0");
           formattedendMinutes =endMinutes.toString().padStart(2,"0");
           lessonTime.innerText = `${formattedstartHour} : ${formattedstartMinutes} ${startSession} - ${formattedendHour} : ${formattedendMinutes} ${endSession}`;
          
            
        introCont.innerText ="5";
        newKnow.innerText ="15";
        reinCont.innerText ="10";
        refleCont.innerText ="10";
        //consoCont.innerText =" (dakika 5)";

       } else {
         lessonTime.innerText = " ";
       }

     } else { 
       
       sylbsMnObj.innerText = topicLesson ; 
       sylbsCmp.innerText = compLesson ; 
       sylbsSbtp.innerText = mainlesson; 
       sylbsSpobj.innerText = wrdImp2 + " " + specificLesson;
       //studentComm.innerText =" Lesson understood well by the student,because student enjoyed the lesson and participated fully to " + wrdImp2 +" "+ specificLesson;
if (remarkOption === "custom" && customRemark.trim() !== "") {
    remarkComm.innerText = customRemark;
} else {
       remarkComm.innerText ="The students were able to "+ wrdImp2 + " " + specificLesson + " due to the use of interactive teaching and learning methods, activities and resources. However, some students failed to "+ wrdImp2 + " " + specificLesson + " Therefore, I will clarify it next period.";
}
       /*if (parseInt(stdUnderstood) === (parseInt(femalePres) + parseInt(malePres))) {
        lessonComment.innerText = "Lesson understood well by "+ underStd +" students  (" + underStdPrc +")";
       } else if(notUnderstd === 1) { 
       lessonComment.innerText = "Lesson understood well by " + underStd + " students (" + underStdPrc + ") and the rest " + notUnderstd + " student (" + notUnderstdprs + ") was given an exercise for more practice";
       } else { 
       lessonComment.innerText = "Lesson understood well by " + underStd + " students (" + underStdPrc + ") and the rest " + notUnderstd + " students (" + notUnderstdprs + ") were given an exercise for more practice";
       }*/

       var phrases = generateEnglishPhrases(wrdImp2, specificLesson, wrdImp1 === "Continue");
intro1.innerText = phrases.intro1;
intro2.innerText = phrases.intro2;
intro3.innerText = phrases.intro3;
new1.innerText = phrases.new1;
new2.innerText = phrases.new2;
new3.innerText = phrases.new3;
rein1.innerText = phrases.rein1;
rein2.innerText = phrases.rein2;
rein3.innerText = phrases.rein3;
reflect1.innerText = phrases.reflect1;
reflect2.innerText = phrases.reflect2;
reflect3.innerText = phrases.reflect3;

       //conso1.innerText = "Teacher To Ask Students Some Question And Making The Summary Of The Lesson about " + specificLesson;
       //conso2.innerText = "Student Respond To The Question And Listening The Summary Of The Lesson about " + specificLesson;
       //conso3.innerText = " To Check If The Student Can Respond The Question Correctly";
       if(period === "2") {

         var startHour = document.getElementById("hourCodes").value;
          var startMinutes = document.getElementById("minCodes").value;
          const acaMinutes = 80;
          acaTime = parseInt(startMinutes) + acaMinutes;
           endMinutes = acaTime % 60;
           minutesToHours = Math.floor(acaTime / 60);
           endHour = parseInt(startHour) +  minutesToHours;

           startSession = startHour >= 12 ? "P.M" : "A.M";
           endSession = endHour >= 12 ? "P.M" : "A.M";

           startSession12 = startHour % 12 || 12 ;
           endSession12 = endHour % 12 || 12;

           formattedstartHour = startHour.toString().padStart(2,"0");
           formattedendHour = endHour.toString().padStart(2,"0");
           formattedstartMinutes = startMinutes.toString().padStart(2,"0");
           formattedendMinutes =endMinutes.toString().padStart(2,"0");
           lessonTime.innerText = `${formattedstartHour} : ${formattedstartMinutes} ${startSession} - ${formattedendHour} : ${formattedendMinutes} ${endSession}`;

         introCont.innerText ="10";
         newKnow.innerText ="40";
         reinCont.innerText ="15";
         refleCont.innerText ="15";
         //consoCont.innerText ="5";
         

       } else if(period === "1")  {

         var startHour = document.getElementById("hourCodes").value;
          var startMinutes = document.getElementById("minCodes").value;
          const acaMinutes = 40;
          acaTime = parseInt(startMinutes) + acaMinutes;
           endMinutes = acaTime % 60;
           minutesToHours = Math.floor(acaTime / 60);
           endHour = parseInt(startHour) +  minutesToHours;

           startSession = startHour >= 12 ? "P.M" : "A.M";
           endSession = endHour >= 12 ? "P.M" : "A.M";

           startSession12 = startHour % 12 || 12 ;
           endSession12 = endHour % 12 || 12;

           formattedstartHour = startHour.toString().padStart(2,"0");
           formattedendHour = endHour.toString().padStart(2,"0");
           formattedstartMinutes = startMinutes.toString().padStart(2,"0");
           formattedendMinutes =endMinutes.toString().padStart(2,"0");
           lessonTime.innerText = `${formattedstartHour} : ${formattedstartMinutes} ${startSession} - ${formattedendHour} : ${formattedendMinutes} ${endSession}`;

         introCont.innerText ="5";
        newKnow.innerText ="15";
        reinCont.innerText ="10";
        refleCont.innerText ="10";
        //consoCont.innerText ="5";
       

       } else {
         lessonTime.innerText = " ";
       }
    }
    }
