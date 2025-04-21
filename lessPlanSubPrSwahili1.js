(function() {
  if ( window.location.href !== "https://www.academixpoint.com/p/create-swahili-medium-lesson-plans.html#" && window.location.href !== "https://www.academixpoint.com/p/create-swahili-medium-lesson-plans.html?m=1" && window.location.href !== "https://www.academixpoint.com/p/create-swahili-medium-lesson-plans.html?m=1#" && window.location.href !== "https://www.academixpoint.com/p/create-swahili-medium-lesson-plans.html" ) {
      console.error("Just Your Domain has problem, Can work with this codes!Try another way to make it run.. Thanks 'AcademixPoint'");
      document.body.innerHTML = "";
      throw new Error("Unauthorized script execution");
  } 
  
  if (window.top !== window.self) {
    console.error("Blocked from running in an iframe!");
    document.body.innerHTML = "";
    throw new Error("Script blocked due to iframe embedding");
}



function createOptionElement() {
  var subject = document.getElementById("subject").value;
  var subClasses = document.getElementById("classes").value;
  var topicLesson = document.getElementById("topicLesson");
  var compLesson = document.getElementById("compLesson");
  var mainlesson = document.getElementById("mainlesson");
  var refLesson = document.getElementById("refLesson");
  topicLesson.innerHTML = "";
  compLesson.innerHTML = "";
  mainlesson.innerHTML = "";
  refLesson.innerHTML = "";

  if (subClasses === "Darasa La Awali") {
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Kuimba nyimbo"},
        { value: "Kughani mashairi"},
        { value: "Kutamba ngonjera"},
        { value: "Kuigiza"},
        { value: "Kutumia ala za muziki"},
        { value: "Kucheza muziki"},
        { value: "Kuunda vitu"},
        { value: "Kuchora picha na maumbo"},
        { value: "Kusuka vitu"},
        { value: "Kutunga vitu katika uzi/kamba"},
        { value: "Kucheza michezo inayohusisha misuli midogo"},
        { value: "Kucheza michezo inayohusisha misuli mikubwa"},
        { value: "Kutengeneza vifaa vya michezo"},
        { value: "Kubaini alama za taifa"},
        { value: "Kubaini tunu za taifa (uzalendo, uwajibikaji na lugha ya taifa)"},
        { value: "Kuelezea Muungano wa Tanganyika na Zanzibar"},
        { value: "Kutaja majina ya viongozi wa kitaifa"},
        { value: "Kubaini vyakula vinavyopatikana katika jamii yake"},
        { value: "Kubaini vyakula vinavyopatikana katika jamii nyingine"},
        { value: "Kubainisha mavazi ya Kitanzania yanayovaliwa katika mazingira yake"},
        { value: "Kuonesha mavazi mbalimbali yanayovaliwa katika jamii yake"},
        { value: "Kubaini imani yake"},
        { value: "Kubaini matendo ya kiimani"},
        { value: "Kubainisha imani za watu wengine"},
        { value: "Kushirikishana katika shughuli za kijamii"},
        { value: "Kutofautisha sauti na milio katika mazingira yake"},
        { value: "Kufuata maelekezo yanayotolewa"},
        { value: "Kusikiliza hadithi"},
        { value: "Kusimulia matukio mbalimbali"},
        { value: "Kutega na kutegua vitendawili"},
        { value: "Kuimba nyimbo"},
        { value: "Kusimulia hadithi"},
        { value: "Kutumia stadi za awali za kusoma"},
        { value: "Kusoma picha"},
        { value: "Kutamka sauti za mwanzo za majina ya picha/maneno/vitu"},
        { value: "Kuhusianisha sauti na maumbo ya herufi"},
        { value: "Kusoma silabi na maneno"},
        { value: "Kufuatisha hatua za kuandika herufi"},
        { value: "Kuandika herufi"},
        { value: "Kusalimiana na kuagana"},
        { value: "Kufuata kanuni za mawasiliano"},
        { value: "Kujieleza katika miktadha mbalimbali"},
        { value: "Kujitambulisha na kutambulisha wengine"},
        { value: "Kuonesha matendo ya tabia njema"},
        { value: "Kubaini haki na wajibu wake"},
        { value: "Kubaini kazi zinazotendwa na wanafamilia na watu wengine"},
        { value: "Kutaja vitu anavyovipenda na asivyovipenda"},
        { value: "Kueleza namna ya kutawala hisia"},
        { value: "Kutenda matendo yanayoonesha hisia"},
        { value: "Kutenda matendo ya kujitegemea"},
        { value: "Kupanga vitu katika mpangilio sahihi"},
        { value: "Kushirikiana katika miktadha mbalimbali"},
        { value: "Kupeana zamu katika michezo na shughuli mbalimbali"},
        { value: "Kucheza michezo inayojenga stadi za kutatua changamoto"},
        { value: "Kuonesha namna ya kukabiliana na changamoto"},
        { value: "Kutumia TEHAMA kutatua changamoto"},
        { value: "Kubainisha sehemu za mwili na kazi zake"},
        { value: "Kusafisha mwili"},
        { value: "Kutunza mavazi"},
        { value: "Kubaini vyakula mbalimbali"},
        { value: "Kueleza taratibu za kuzingatia wakati wa kula"},
        { value: "Kutunza vyakula"},
        { value: "Kutumia vyombo vya chakula"},
        { value: "Kuosha vyombo vya chakula"},
        { value: "Kuhifadhi vyombo vya chakula"},
        { value: "Kutaja vitu vinavyopatikana katika mazingira"},
        { value: "Kutofautisha vitu katika mazingira yake"},
        { value: "Kufanya usafi katika mazingira yanayomzunguka"},
        { value: "Kueleza madhara yanayotokana na mazingira machafu"},
        { value: "ubaini matendo hatarishi"},
        { value: "Kubaini mazingira hatarishi"},
        { value: "Kuonesha namna ya kuepuka mazingira hatarishi"},
        { value: "Kubaini alama za usalama katika mazingira yake"},
        { value: "Kubaini magonjwa ya kuambukiza"},
        { value: "Kujikinga na magonjwa"},
        { value: "Kubaini vitu vinavyojenga dhana ya namba katika mazingira"},
        { value: "Kubaini maumbo"},
        { value: "Kuchambua vitu kulingana na sifa"},
        { value: "Kubaini vipimo"},
        { value: "Kuhesabu namba 1-20"},
        { value: "Kuandika namba 1-20"},
        { value: "Kuongeza kwa kutumia vitu halisi na TEHAMA"},
        { value: "Kupunguza kwa kutumia vitu halisi na TEHAMA"},
        { value: "Kutambua sarafu na noti za Kitanzania kuanzia sh 50 hadi sh 10000"},
        { value: "Kuchunguza vitu katika mazingira yanayomzunguka"},
        { value: "Kufanya majaribio sahili ya kisayansi"},
        { value: "Kubaini vifaa vya TEHAMA"},
        { value: "Kuunda vifani mbalimbali vya TEHAMA"},
        { value: "Kutumia kompyuta kufanya shughuli mbalimbali"},
        { value: "Kutumia vifaa mbalimbali vya TEHAMA"},
        
        
    ]; 
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Kuonesha sanaa za maonesho "},
        { value: "Kubuni sanaa zinazohusisha utendaji wa mikono"},
        { value: "Kutumia stadi za ubunifu zinazohusisha utendaji wa mwili"},
        { value: "Kuthamini alama na tunu za taifa"},
        { value: "Kuthamini vyakula vya Kitanzania"},
        { value: "Kuthamini mavazi ya Kitanzania"},
        { value: "1Kuonesha matendo ya kiimani kulingana na imani yake"},
        { value: "Kuheshimu imani za watu wengine"},
        { value: "Kusikiliza katika miktadha mbalimbali"},
        { value: "Kuzungumza katika miktadha mbalimbali"},
        { value: "Kusoma katika hatua za awali"},
        { value: "Kuandika katika hatua za awali"},
        { value: "Kuwasiliana katika miktadha mbalimbali"},
        { value: "Kujithamini na kuthamini wengine"},
        { value: "Kutawala hisia katika miktadha mbalimbali"},
        { value: "Kumudu stadi za kujitegemea"},
        { value: "Kumudu stadi za kushirikiana"},
        { value: "Kutatua changamoto katika maisha ya kila siku"},
        { value: "Kutunza mwili"},
        { value: "Kuthamini vyakula vya aina mbalimbali"},
        { value: "Kutunza vyombo vya chakula"},
        { value: "Kuchunguza vitu vilivyopo katika mazingira"},
        { value: "Kusafisha mazingira"},
        { value: "Kuepuka mazingira hatarishi"},
        { value: "Kuchukua tahadhari dhidi ya magonjwa mbalimbali"},
        { value: "Kutumia mazingira kujenga dhana za kihisabati na kufikiri kimantiki"},
        { value: "Kufanya majaribio ya Kisayansi"},
        { value: "Kutumia vifaa vya TEHAMA kuwasiliana katika miktadha mbalimbali"},
        
    ]; 

    var topicsOptions = [
        { value: "Select Main Competence"},
        { value: "Kumudu stadi za kisanii, ubunifu na michezo"},
        { value: "Kuthamini utamaduni wa jamii yake,elimu ya imani na tunu za taifa"},
        { value: "Kumudu stadi za awali za lugha na mawasiliano"},
        { value: "Kuhusiana"},
        { value: "Kutunza afya na mazingira"},
        { value: "Kutumia stadi za awali za kihisabati, sayansi na TEHAMA"},

        
    ];

    if (subject === "Stadi za Awali za Lugha") {
   
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Stadi za Awali za Lugha, Kitabu Cha Mtoto Darasa la Awali. Taasisi ya Elimu Tanzania."},
        
    ];
    

    

} else if ( subject === "Kuhesabu,Sayansi na TEHAMA") {
    

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Kuhesabu,Sayansi na TEHAMA, Kitabu Cha Mtoto Darasa la Awali. Taasisi ya Elimu Tanzania."},
        
    ];
    

} else if (subject === "Sanaa Bunifu na Michezo") {
    
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Sanaa Bunifu na Michezo, Kitabu Cha Mtoto Darasa la Awali. Taasisi ya Elimu Tanzania."},
        
    ];
    
} else if (subject === "Naipenda Nchi Yangu Tanzania") {
    

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Naipenda Nchi Yangu Tanzania, Kitabu Cha Mtoto Darasa la Awali. Taasisi ya Elimu Tanzania."},
        
    ];
    
} else if (subject === "Stadi za Awali za Maisha") {
   

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Stadi za Awali za Maisha, Kitabu Cha Mtoto Darasa la Awali. Taasisi ya Elimu Tanzania."},
        
    ];
   
}  else if (subject === "Afya na Mazingira") {
   
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Afya na Mazingira, Kitabu Cha Mtoto Darasa la Awali. Taasisi ya Elimu Tanzania."},
        
    ];
   
}
} else if (subClasses === "Darasa la Kwanza") {
    if(subject === 'English') {
        
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Imitate different sounds (eg. Sounds of animals, hand clap etc)"},
        { value: "Relate words with familiar objects found in the environment"},
        { value: "Follow simple instructions given at school and home (e.g. go out, stand up, jump, clap your hands, touch your head and sit down)"},
        { value: "Name parts of the body orally"},
        { value: "Pronounce English letter sounds (a-z)"},
        { value: "Recognise English sounds in different spoken words"},
        { value: "Identify words with the same last sounds (rhyming) and words with the same first sound (alliteration)"},
        { value: "Blend letter sounds to form words"},
        { value: "Associate letter names with sounds"},
        { value: "Recognise numbers and talk about times of the day"},
        { value: "Introduce oneself and others "},
        { value: "Use common greetings and polite expressions"},
        { value: "Say goodbye to others"},
        
    ];

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Develop listening and speaking skills in different contexts"},
        { value: "Develop early literacy and numeracy skills"},
        { value: "Communicate in different contexts"},
        
    ];

    var topicsOptions = [
{ value: "Select main competence"},
{ value: "Demonstrate mastery of basic English language skills"},

];
    } else { 
        var mainOptions = [
            { value: "Chagua Shughuri Kuu"},
            { value: "Kubaini sauti za irabu (a, e, i, o, u) katika maneno"},
            { value: "Kuunganisha sauti za irabu ili kuunda maneno (oa, au, ua)"},
            { value: "Kutambua sauti za konsonanti (b, m, k, d, n); (l, t, p, s, f, j); (g, y, z, h, r, w, v, ch) kwenye maneno"},
            { value: "Kutambua herufi kubwa na ndogo"},
            { value: "Kuunganisha sauti za konsonanti na irabu ili kuunda silabi"},
            { value: "Kutenganisha kwa kutamka sauti za konsonanti na irabu zilizounda silabi na silabi zilizounda maneno"},
            { value: "Kutambua sauti za herufi mwambatano (sh, th, mb, ny, ng, nd, kw, mw) kwenye maneno"},
            { value: "Kuunganisha sauti za herufi mwambatano (sh, th, mb, ny, ng, nd, kw, mw) na irabu ili kuunda silabi"},
            { value: "Kuhusianisha sauti na herufi za irabu (a, e, i, o, u) katika matini"},
            { value: "Kuhusianisha sauti na herufi za konsonanti (b, m, k, d, n); (l, t, p, s, f, j); (g, y, z, h, r, w, v, ch) katika matini"},
            { value: "Kuhusianisha sauti na herufi za konsonanti mwambatano (sh, th, mb, ny, ng, nd, kw, mw) katika matini"},
            { value: "Kuunganisha sauti za herufi za konsonanti mwambatano na irabu ili kusoma silabi katika makundi yote (sh, th, mb, ny, ng, nd, kw, mw)"},
            { value: "Kuunganisha silabi ili kusoma maneno"},
            { value: "Kutenganisha kwa kutamka sauti mojamoja ili kuunda maneno"},
            { value: "Kuunganisha maneno ili kusoma sentensi"},
            { value: "Kusoma kwa sauti kifungu cha habari/ hadithi linganifu kwa kuzingatia matamshi sahihi ya maneno"},
            { value: "Kusoma kwa sauti kifungu linganifu cha habari/hadithi kwa kasi stahiki (maneno 40 kwa dakika)"},
            { value: "Kusoma kwa sauti kifungu linganifu cha habari/hadithi kwa hisia na kwa kuzingatia alama za uandishi (nukta, mkato, alama ya kuuliza na alama ya mshangao)"},
            { value: "Kutafsiri na kuelezea picha"},
            { value: "Kubashiri maudhui ya habari/hadithi kwa usahihi kwa kutumia picha, jina la habari/hadithi na msamiati uliochaguliwa"},
            { value: "Kusikiliza habari/hadithi kwa ufahamus"},
            { value: "Kutumia stadi za awali za kuandika"},
            { value: "Kuchora michoro ya herufi"},
            { value: "Kufuatisha herufi kwa kuzingatia hatua"},
            { value: "Kuandika herufi ndogo za irabu (a, e, i, o, u), konsonanti (b, m, k, d, n); (l, t, p, s, f, j); (g, y, z, h, r, w, v, ch) kwa mpangilio kwa kuzingatia hatua"},
            { value: "Kuandika herufi kubwa za irabu (A, E, I, O, U), konsonanti (B, M, K, D, N); (L, T, P, S, F, J); (G, Y, Z, H, R, W, V, CH) kwa mpangilio na kufuata hatua"},
            { value: "Kuandika herufi mwambatano (sh, th, mb, ny, ng, nd, kw, mw)"},
            { value: "Kuandika silabi zinazotokana na herufi za konsonanti na irabu"},
            { value: "Kuandika silabi za herufi mwambatano"},
            { value: "Kuandika sentensi fupi"},
            { value: "Kubaini alama za uandishi (nukta, mkato, alama ya kuuliza na alama ya mshangao)"},
            { value: "Kubaini dhana ya namba kwa kutumia vitu katika mazingira"},
            { value: "Kubaini namba kuanzia 1-100 kwa tarakimu na maneno"},
            { value: "Kupanga namba kwa mfuatano 1-100"},
            { value: "Kutambua namba katika makumi na mamoja"},
            { value: "Kutumia vitu/TEHAMA kumudu dhana ya kujumlisha"},
            { value: "Kujumlisha namba kupata jumla isiyozidi 99"},
            { value: "Kutumia vitu/TEHAMA kumudu dhana ya kutoa"},
            { value: "Kutoa namba zisizozidi 99"},
            { value: "Kubaini maumbo ya msingi"},
            { value: "Kubaini vyakula vya Kitanzania"},
            { value: "Kubaini mavazi ya Kitanzania"},
            { value: "Kucheza ngoma na kuimba nyimbo za asili"},
            { value: "Kueleza imani za watu wanaomzunguka"},
            { value: "Kushirikiana katika shughuli za kijamii"},
            { value: "Kutenda matendo yenye kimaadili"},
            { value: "Kutenda matendo yanayoonesha kuthamini watu wengine"},
            { value: "Kusuka, kufinyanga, kuchora, kupiga chapa, kutunga vitu na kupaka rangi"},
            { value: "Kuimba nyimbo na mashairi"},
            { value: "Kucheza ngoma na muziki"},
            { value: "Kufanya mazoezi sahili ya viungo (wepesi, msawazo na uratibu wa mwili)"},
            { value: "Kusafisha mwili wake"},
            { value: "Kutunza mavazi yake"},
            { value: "Kuepuka mazingira na vitu hatarishi"},
            { value: "Kubaini alama za usalama barabarani na katika mazingira yake"},
            
        ];

        var competenceOptions = [
            { value: "Chagua Umahili Mahususi"},
            { value: "Kutambua sauti za herufi"},
            { value: "Kutambua uhusiano wa sauti na herufi"},
            { value: "Kusoma kwa ufasaha"},
            { value: "Kusoma na kusikiliza kwa ufahamu"},
            { value: "Kumudu misingi ya kuandika"},
            { value: "Kumudu stadi za kuandika"},
            { value: "Kutumia kanuni za uandishi"},
            { value: "Kutambua dhana ya namba"},
            { value: "Kutumia matendo ya kihisabati"},
            { value: "Kutumia dhana za kihisabati"},
            { value: "Kuthamini utamaduni wake na wa watu wengine"},
            { value: "1 *** Kuheshimu tofauti za kiimani(1 ***Umahiri mahususi huu wa 5.2 utafundishwa na viongozi wa imani husika katika kipindi cha dini)"},
            { value: "Kuonesha matendo yenye kimaadili"},
            { value: "Kubuni kazi za sanaa"},
            { value: "Kushiriki katika michezo mbalimbali"},
            { value: "Kutunza afya yake na jamii inayomzunguka"},
            { value: "Kujilinda na mazingira hatarishi"},
            
        ];

        var topicsOptions = [
            { value: "Chagua Umahili Mkuu"},
            { value: "Kusoma"},
            { value: "Kuandika"},
            { value: "Kuhesabu"},
            { value: "Kuthamini utamaduni, sanaa na michezo"},
            { value: "Kutunza afya na mazingira"},
            
            
        ];
    }
    if (subject === "Kusoma") {
    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Kusoma, Kitabu Cha Mwanafunzi Darasa la Kwanza. Taasisi ya Elimu Tanzania."},
        
    ];
} else if ( subject === "Kuandika") {
    
var referenceOptions = [
{ value: "Chagua Rejea"},
{ value: "Taasisi ya Elimu Tanzania. (2023). Kuandika, Kitabu Cha Mwanafunzi Darasa la Kwanza. Taasisi ya Elimu Tanzania."},

];


} else if (subject === "Kuhesabu") {
 
var referenceOptions = [
{ value: "Chagua Rejea"},
{ value: "Taasisi ya Elimu Tanzania. (2023). Kuhesabu, Kitabu Cha Mwanafunzi Darasa la Kwanza. Taasisi ya Elimu Tanzania."},

];

} else if (subject === "Utamaduni, Sanaa Na Michezo") {
   
var referenceOptions = [
{ value: "Chagua Rejea"},
{ value: "Taasisi ya Elimu Tanzania. (2023). Utamaduni, Sanaa Na Michezo, Kitabu Cha Mwanafunzi Darasa la Kwanza. Taasisi ya Elimu Tanzania."},

];

} else if (subject === "Afya Na Mazingira") {
   
var referenceOptions = [
{ value: "Chagua Rejea"},
{ value: "Taasisi ya Elimu Tanzania. (2023). Afya Na Mazingira, Kitabu Cha Mwanafunzi Darasa la Kwanza. Taasisi ya Elimu Tanzania."},

];

}  else if (subject === "Learn English") {
    
var referenceOptions = [
{ value: "Select Reference"},
{ value: "Tanzania Institute Of Education. (2023). Learn English, Pupil's Book, Standard One. Tanzania Institute Of Education."},

];


} 
}
 else if  (subClasses === "Darasa La Pili") {
        if (subject === 'Learn English') {
             
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Use singular and plural forms of names of objects found in the environment"},
            { value: "Listen and respond to simple sentences"},
            { value: "Manipulate phonemes (delete, add and substute) phonemes (sounds) to form new words"},
            { value: "Pronounce English sounds in written words"},
            { value: "Read and write simple English words (e.g. bag, ten, did, dog, sun)"},
            { value: "Read words with two consonant clusters (e.g. bl, cl, fl, gl, pl, sl, br, cr, dr, fr, gr, pr, tr, sc, sk, sm, sn, sp, st, and tw) and words with consonant digraphs (e.g. th, ch, sh, ph)"},
            { value: "Read and write simple sentences"},
            { value: "Use basic punctuation marks in sentences (target: full stop, comma and question mark)"},
            { value: "Express days of the week and months of the year"},
            { value: "Use singular and plural forms of names of objects found in the environment"},
            { value: "Listen and respond to simple sentences"},
            { value: "Manipulate phonemes (delete, add and substute) phonemes (sounds) to form new words"},
            { value: "Pronounce English sounds in written words"},
            { value: "Read and write simple English words (e.g. bag, ten, did, dog, sun)"},
            { value: "Read words with two consonant clusters (e.g. bl, cl, fl, gl, pl, sl, br, cr, dr, fr, gr, pr, tr, sc, sk, sm, sn, sp, st, and tw) and words with consonant digraphs (e.g. th, ch, sh, ph)"},
            { value: "Read and write simple sentences"},
            { value: "Use basic punctuation marks in sentences (target: full stop, comma and question mark)"},
            { value: "Express days of the week and months of the year"},
            
        ]; 
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Develop listening and speaking skills in different contexts"},
            { value: "Develop early Literacy and numeracy skills"},
            
        ]; 
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of basic English language skills"},

            
        ];
        } else {
            var mainOptions = [
                { value: "Chagua Shughuri Kuu"},
                { value: "Kubaini sauti katika maneno"},
                { value: "Kuunganisha sauti za herufi za konsonanti mwambatano (gh, ng’, nz, nj, sw, bw, gw, tw, dh, pw, vy, fy, my, ml, ky, py, ft, lw) na irabu kusoma silabi"},
                { value: "Kutamka maneno yenye silabi mwambatano"},
                { value: "Kutambua sauti zinazounda maneno katika sentensi"},
                { value: "Kuunganisha sauti za herufi mwambatano zenye konsonanti mbili na irabu ili kuunda silabi (gh, ng’, nz, nj, sw, bw, gw, tw,, pw, vy, fy, my, ml, ky, py, ft, lw) na kutambulisha herufi mwambatano zenye maneno ya kukopa (bl, sp, sk, pt, st, ks, kt, pl, al, ar)"},
                { value: "Kuunganisha silabi kusoma maneno yenye konsonanti tatu na irabu (njwa, nywe, shwa, ngwa, mbwe, ndwa, ng’we)"},
                { value: "Kuunganisha maneno kusoma sentensi"},
                { value: "Kusoma kwa kujiamini kifungu cha habari/hadithi linganifu kwa kuzingatia matamshi sahihi ya maneno"},
                { value: "Kusoma kifungu cha habari/ hadithi linganifu kwa kasi stahiki (maneno 50 kwa dakika)"},
                { value: "Kusoma kwa kujiamini kifungu linganifu cha habari/ hadithi kwa hisia na kwa kuzingatia alama za uandishi (nukta, mkato, alama ya kuuliza, alama ya mshangao)"},
                { value: "Kusoma kwa sauti kifungu cha habari/hadithi sahili"},
                { value: "Kutafsiri na kuelezea matukio (Kupanga na kusoma sentensi kwa kufuata mtiririko sahihi wa matukio, kusoma sentensi zenye mtiririko sahihi, kupanga na kusoma sentensi zilizochanganywa ili kuleta mtiririko wenye mantiki)"},
                { value: "Kusimulia matini fupi aliyoisoma kwa mtiririko wa matukio yenye mantiki"},
                { value: "Kusikiliza matini sahili kwa ufahamu"},
                { value: "Kusoma matini sahili kwa ufahamu"},
                { value: "Kutumia alama za uandishi (kuandika habari fupi kwa kuzingatia alama za uandishi, kuandika insha fupi kwa kuzingatia alama za uandishi, kubaini alama za uandishi zinazokosekana katika matini)"},
                { value: "Kuandika mwandiko wa chapa wenye kikonyo"},
                { value: "Kuandika matini fupi kwa mtiririko wa matukio wenye mantiki"},
                { value: "Kutambua namba katika mamia"},
                { value: "Kujumlisha namba kupata jumla isiyozidi 999"},
                { value: "Kutoa namba zisizozidi 999"},
                { value: "Kutumia vitu/ TEHAMA kumudu dhana ya kuzidisha kama kujumlisha makundi yanayolingana"},
                { value: "Kuzidisha namba kwa tarakimu moja kupata zao lisilozidi 100"},
                { value: "Kutumia vitu/TEHAMA kumudu dhana ya kugawanya kama kutoa makundi yanayolingana"},
                { value: "Kugawanya namba zisizozidi 100 bila baki"},
                { value: "Kubaini dhana ya sehemu kwa kutumia vitu halisi na TEHAMA (nzima, nusu, robo, theluthi, theluthi mbili n.k)"},
                { value: "Kuonesha sehemu kwa kutumia namba( 1/4 , 1/2 n.k)"},
                { value: "Kutumia maumbo ya msingi kuumba maumbo mbalimbali"},
                { value: "Kubaini makazi ya asili ya Kitanzania"},
                { value: "Kubaini shughuli mbalimbali za jamii za Kitanzania"},
                { value: "Kuhusianisha imani na maadili mema"},
                { value: "Kujali matendo ya imani za watu wengine"},
                { value: "Kushiriki katika sanaa za utendaji wa mikono (kufuma, kufinyanga, kuchonga, kushona, kutia nakshi)"},
                { value: "Kushiriki katika sanaa za ubunifu wa sauti (ngonjera, majigambo, vichekesho)"},
                { value: "Kufanya sanaa zinazohusisha utendaji wa mwili (kuigiza, mijongeo ya mwili)"},
                { value: "Kucheza michezo sahili"},
                { value: "Kufanya uchunguzi sahili wa viumbe hai na visivyo hai katika mazingira yanayomzunguka"},
                { value: "Kuzingatia alama za usalama barabarani na katika mazingira yake"},
                { value: "Kushiriki katika shughuli zinazohusu mazingira shuleni"},
                
            ]; 
            var competenceOptions = [
                { value: "Chagua Umahili Mahususi"},
                { value: "Kutambua sauti za herufi"},
                { value: "Kutambua uhusiano wa sauti na herufi"},
                { value: "Kusoma kwa ufasaha"},
                { value: "Kusoma na kusikiliza kwa ufahamu"},
                { value: "Kutumia kanuni za uandishi"},
                { value: "Kutumia matendo ya kihisabati"},
                { value: "Kutumia dhana za kihisabati"},
                { value: "Kuthamini utamaduni wake na wa watu wengine"},
                { value: "***2 Kuheshimu tofauti za kiimani(***Umahiri mahususi huu wa 5.2 utafundishwa na viongozi wa imani husika katika kipindi cha dini)"},
                { value: "Kubuni kazi za sanaa"},
                { value: "Kushiriki katika michezo mbalimbali"},
                { value: "Kuchunguza vitu vilivyopo katika mazingira"},
                { value: "Kujilinda na mazingira hatarishi"},
                { value: "Kuwa na mtazamo chanya kuhusu mazingira"},
                
            ]; 
    
            var topicsOptions = [
                { value: "Chagua Umahili Mkuu"},
                { value: "Kusoma"},
                { value: "Kuandika"},
                { value: "Demonstrate mastery of basic English language skills"},
                { value: "Kuhesabu"},
                { value: "Kuthamini utamaduni, sanaa na michezo"},
                { value: "Kutunza afya na mazingira"},
    
                
            ];
        }
        if (subject === "Kusoma") {
        var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Taasisi ya Elimu Tanzania. (2023). Kusoma, Kitabu Cha Mwanafunzi Darasa la Pili. Taasisi ya Elimu Tanzania."},
            
        ];
        


    } else if ( subject === "Kuandika") {
       

        var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Taasisi ya Elimu Tanzania. (2023). Kuandika, Kitabu Cha Mwanafunzi Darasa la Pili. Taasisi ya Elimu Tanzania."},
            
        ];
      
    } else if (subject === "Kuhesabu") {
       

        var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Taasisi ya Elimu Tanzania. (2023). Kuhesabu, Kitabu Cha Mwanafunzi Darasa la Pili. Taasisi ya Elimu Tanzania."},
            
        ];
        
    } else if (subject === "Utamaduni, Sanaa Na Michezo") {
       
        var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Taasisi ya Elimu Tanzania. (2023). Utamaduni, Sanaa Na Michezo, Kitabu Cha Mwanafunzi Darasa la Pili. Taasisi ya Elimu Tanzania."},
            
        ];
       
    }  else if (subject === "Learn English") {
        

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute Of Education. (2023). Learn English, Pupil's Book, Standard Two. Tanzania Institute Of Education."},
            
        ];
       

    } else if (subject === "Afya Na Mazingira") {
        

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Taasisi ya Elimu Tanzania. (2023). Afya Na Mazingira, Kitabu Cha Mwanafunzi Darasa la Pili. Taasisi ya Elimu Tanzania."},
            
        ];
      
    } 
    }else if(subClasses === "Darasa La Tatu") {
    if (subject === "SANAA NA MICHEZO") {
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kuigiza sauti za viumbe vilivyo hai na visivyo hai"},
        { value: "Kuimba kwa sauti moja (unison singing) kwa kuzingatia mkao na upumuaji sahihi (proper posture and breathing)"},
        { value: "Kutumia ala za muziki zinazotumika katika mazingira yake kusindikiza nyimbo fupi"},
        { value: "Kuchora picha sahili kwa kutumia penseli"},
        { value: "Kufinyanga maumbo sahili"},
        { value: "Kufanya mazoezi ya wepesi na msawazo (agility and balance)"},
        { value: "Kucheza michezo ya rede, kukimbia na chupa kichwani, kukimbia na kijiko"},
        { value: "Kufanya maonesho ya kazi za sanaa katika ngazi ya darasa"},
        { value: "Kushiriki katika mashindano ya michezo katika ngazi ya darasa"},
        
    ];

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kumudu misingi ya uimbaji na uigizaji"},
        { value: "Kuchora picha"},
        { value: "Kufinyanga maumbo mbalimbali"},
        { value: "Kumudu mazoezi ya viungo"},
        { value: "Kucheza michezo ya asili"},
        { value: "Kushiriki katika maonesho ya kazi za sanaa na michezo"},
        
    ];

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Sanaa Na Michezo, Kitabu Cha Mwanafunzi, Darasa la Tatu. Taasisi ya Elimu Tanzania."},
        
    ];
    
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kubuni kazi za sanaa"},
        { value: "Kuimarisha afya, stadi na ushindani"},
        { value: "Kumudu stadi za maonesho ya kazi za sanaa na michezo"},
        
        
    ];

    

} else if ( subject === "JIOGRAFIA NA MAZINGIRA") {
    
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kueleza dhana ya jiografia na mazingira (maana, uhusiano na umuhimu)"},
        { value: "Kueleza dhana ya sura ya nchi (Maana, maumbo - milima, vilima, tambarare, mabonde, uwanda wa juu na basini na mtawanyiko)"},
        { value: "Kueleza uhusiano baina ya shughuli za kibinadamu na utunzaji wa mazingira (ufugaji, uchimbaji madini, uvuvi, uchanaji mbao, viwanda na kilimo)"},
        { value: "Kueleza njia za kutunza mazingira (kupanda maua na miti/ukoka, njia anuai za kukabiliana na taka katika mazingira)"},
        
    ]; 
    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kutumia ramani katika maisha ya kila siku"},
        { value: "Kuonesha uelewa wa awali wa sura ya nchi"},
        { value: "Kuonesha uelewa wa awali wa elimu ya kutunza mazingira"},
        
    ]; 


    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Jiografia na Mazingira, Kitabu Cha Mwanafunzi, Darasa la Tatu. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kumudu stadi za awali za ramani na mfumo wa jua"},
        { value: "Kumudu stadi za awali za sura ya nchi na rasilimali zilizopo"},
        { value: "Kumudu misingi ya kutunza mazingira"},

        
    ];

} else if (subject === "HISABATI") {
    
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kubaini thamani ya tarakimu katika namba nzima zenye tarakimu zaidi ya moja"},
        { value: "Kusoma na kuandika namba nzima zenye tarakimu zaidi ya moja"},
        { value: "Kulinganisha namba nzima kwa kutumia alama =, < na >"},
        { value: "Kubaini mfuatano katika namba nzima"},
        { value: "Kujumlisha na kutoa namba nzima"},
        { value: "Kubaini vipimo vya urefu, uzani na ujazo"},
        { value: "Kufafanua dhana ya maumbo"},
        { value: "Kueleza dhana ya nukta, mstari, kipande cha mstari na mwale"},
        { value: "Kuunda maumbo bapa kwa kutumia nukta, mstari, na kipande cha mstari"},
        { value: "Kutumia mga¬wanyo wa vitu kueleza dhana ya sehemu"},
        { value: "Kujumlisha na kutoa sehemu zenye asili moja"},
        { value: "Kueleza vipimo vya muda"},
        { value: "Kusoma muda katika mtindo wa saa 12"},
        { value: "Kusoma muda katika mtindo wa saa 24"},
        { value: "Kutambua idadi ya saa katika siku, siku katika wiki, wiki katika mwezi na miezi katika mwaka"},
        { value: "Kubaini fedha ya Tanzania katika shilingi na senti"},
        { value: "Kujumlisha na kutoa fedha"},
        
        
    ];
    
    var competenceOptions = [
        { value: "Chagua Umahili Mahusisi"},
        { value: "kuonesha uelewa wa dhana ya namba"},
        { value: "Kuonesha uelewa wa matendo ya namba"},
        { value: "Kuonesha uelewa wa vipimo"},
        { value: "Kuonesha uelewa wa stadi za maumbo"},
        { value: "Kuonesha uelewa wa stadi za awali za namba"},
        { value: "Kuonesha uelewa wa hesabu za muda"},
        { value: "Kuonesha uelewa wa hesabu za fedha"},
        
    ]; 

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Hisabati, Kitabu Cha Mwanafunzi, Darasa la Tatu. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kumudu misingi ya awali ya kihisabati"},
        { value: "Kumudu matumizi ya stadi za kihisabati"},

        
    ];

} else if (subject === "SAYANSI") {
     
    var mainOptions = [
        { value: "Chagua Shughuri Kuu" },
        { value: "Kueleza dhana ya sayansi (maana na matawi ya sayansi)"},
        { value: "Kueleza milango ya fahamu ya binadamu"},
        { value: "Kubaini vitu vilivyomo katika mazingira kwa kutumia milango ya fahamu"},
        { value: "Kubaini viumbehai na vitu visivyo hai"},
        { value: "Kubaini makundi makuu ya viumbehai (mimea na wanyama)"},
        { value: "Kuaridhia hatua za kufanya uchunguzi wa kisayansi"},
        { value: "Kufanya majaribio sahili kuhusu viumbehai na vitu visivyo hai"},
        { value: "Kutunza viumbehai katika mazingira"},
        { value: "Kutumia TEHAMA kucheza michezo sahili inayokuza uwezo wa kueleza matukio na dhana za kisayansi"},
        
    ];

    

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},   
        { value: "Kuonesha uelewa wa nadharia za kisayansi"},
        { value: "Kufanya uchunguzi sahili wa kisayansi"},
        { value: "Kufanya majaribio sahili ya kisayansi"},
        { value: "Kutumia TEHAMA katika ujifunzaji"},
        
    ]; 

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Sayansi, Kitabu Cha Mwanafunzi, Darasa la Tatu. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kumudu nadharia za kisayansi"},
        { value: "Kumudu stadi za awali za kisayansi"},
        { value: "Kumudu matumizi ya TEHAMA"},

        
    ];

} else if (subject === "ENGLISH LANGUAGE") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Write dictated words"},
        { value: "Listen and respond to questions based on simple stories from familiar contexts (home, school)"},
        { value: "Read aloud simple short stories"},
        { value: "Read short, simple texts for comprehension"},
        { value: "Use personal pronouns" },
        { value: "Express possession using the verbs have and has"},
        { value: "Carry out microscopic observation of a cell"},
        { value: "Express routines and ongoing activities in school and home contexts (target: simple present tense, present continuous tense)"},
        { value: "Use conjunctions in oral and written contexts (target: and, but)"},
        { value: "Read two-syllable and grade-appropriate words"},
        { value: "Read multi-syllable and grade-appropriate words"},
        { value: "Read aloud a variety of grade-level texts"},
        { value: "Identify words with short and long vowels (e.g., ship/ sheep, full/ fool, to/too)"},
        { value: "Pronounce words with long vowel sounds with speed and fluency"},
        { value: "Read short phrases and simple sentences with short and long vowels"},
    ];

    
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Develop listening and speaking skills"},
        { value: "Develop phonemic awareness and pronunciation of English letters"},
        { value: "Use appropriate grammar and vocabulary both orally and in writing"},
        { value: "Read a variety of simple texts appropriately"},
        { value: "Demonstrate knowledge of the basic features of spoken language"},
        
    ]; 

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute Of Education. (2023). English Language, Pupil's Book, Standard Three. Tanzania Institute Of Education."},
        
    ];
    var topicsOptions = [
        { value: "Select main competence" },
        { value: "Demonstrate mastery of basic English language skills"},
        { value: "Comprehend oral and written information"},
        { value: "Communicate effectively in different contexts"},
    ];

}  else if (subject === "FRENCH") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Écouter et identifier les sons du français"},
        { value: "Prononcer les sons des lettres françaises"},
        { value: "Combiner les sons des lettres françaises pour former des mots"},
        { value: "Reconnaître les noms des objets de la classe présentés à l’oral et à l’écrit"},
        { value: "Reconnaître les noms des animaux et des objets de l’environnement proche présentés à l’oral et à l’écrit"},
        { value: "Reconnaître les noms des membres de la famille présentés à l’oral et à l’écrit"},
        { value: "Utiliser les nombres jusqu’à 20 oralement et à l’écrit"},
        { value: "Utiliser à l’oral et à l’écrit la grammaire et le vocabulaire simples pour localiser des objets de l’environnement proche (à l’école, à la maison)"},
        { value: "Utiliser à l’oral et à l’écrit la grammaire et le vocabulaire simples pour se présenter et presenter quelqu’un"},
        { value: "Lire et comprendre des messages courts (annonces, instructions/ consignes, texto)"},
        { value: "Suivre des consignes simples données oralement et à l’écrit dans le contexte familier (à l’école et à la maison)"},
        { value: "Utiliser les intonations appropriées dans la communication simple"},
        { value: "Utiliser les signes de ponctuation (majuscule, minuscule, point et point d’interrogation) dans des textes simples"},
        
    ];

    

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Développer la conscience phonémique et la prononciation des lettres françaises"},
        { value: "Relier des mots aux objets dans l’environnement"},
        { value: "Maîtriser la grammaire et le vocabulaire simples"},
        { value: "Lire et comprendre des textes simples"},
        { value: "Réagir de manière appropriée à un contexte familier de communication"},
        { value: "Demontrer une connaissance des caractéristiques de base de la langue parlée et écrite"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Institut Tanzanien de l’Éducation. (2023). Français, Livre de l'élève, troisième année. Institut Tanzanien de l’Éducation."},
        
    ];
    var topicsOptions = [
        { value: "Select main Competence"},
        { value: "Maîtriser les compétences langagières de base du français"},
        { value: "Démontrer la compréhension des informations orales et écrites"},
        { value: "Communiquer efficacement dans des divers contextes"},
    ];

} else if (subject === "Historia Ya Tanzania na Maadili") {
    
    var mainOptions = [
        { value: "Chagua Shughuri Kuu" },
        { value: "Kueleza dhana ya Historia ya Tanzania, urithi na maadili (maana, umuhimu)" },
        { value: "Kubaini vitendo vya kimaadili na umuhimu wake" },
        { value: "Kubaini wajibu na haki zake katika familia na shuleni" },
        { value: "Kuonesha matendo ya kuheshimu wengine, kutii sheria,kujithamini, kujali na kushirikiana na watu wengine nyumbani na shuleni" },
        { value: "Kueleza maarifa na ujuzi wa asili wa jamii inayomzunguka (katika kilimo, utunzaji wa mazingira, dawa na dini)" },
        { value: "Kubaini asili za jamii zinazomzunguka (tamaduni, mavazi, chakula, ngoma, michezo na nyimbo)" },
        { value: "Kufafanua umuhimu wa maarifa, ujuzi wa asili na urithi wa kihistoria kwa maendeleo ya kiuchumi na kijamii" },
        { value: "Kubaini mbinu za kutumia maarifa na ujuzi wa asili (katika kilimo, utunzaji wa mazingira, dawa, dini) katika kuboresha ustawi wa jamii" },
        { value: "Kusimulia maarifa na ujuzi wa asili, asili za jamii na urithi wa kihistoria katika mazingira yake (mf. nyumbani, shuleni)" },
        { value: "Kueleza thamani ya asili na urithi wa kihistoria katika jamii inayomzunguka" },
        { value: "Kueleza uhusiano wake na jamii inayomzunguka (nyumbani na shuleni)" },
        { value: "Kubaini umuhimu wa uhusiano na ushirikiano wa familia na rafiki zake" },
        { value: "Kueleza matendo ya kijamii na kiuchumi yanayojenga uhusiano na ushirikiano katika jamii" },
        { value: "Kueleza mifumo ya uongozi katika ngazi ya familia, ukoo na shule" },
        { value: "Kueleza misingi ya ukuzaji na utunzaji wa maadili katika jamii inayomzunguka" },
        { value: "Kueleza mchango wa uongozi wa ukoo katika utunzaji na ukuzaji wa maadili ya jamii kabla ya ukoloni" },
        { value: "Kubaini wajibu wa jamii katika ujenzi wa maadili ya familia" },
        
    ];

    

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kumudu dhana ya Historia ya Tanzania, urithi na maadili"},
        { value: "Kumudu maarifa ya jamii inayomzunguka"},
        { value: "Kutumia maarifa na ujuzi wa asili wa jamii inayomzunguka kusimulia asili, urithi, na maadili ya jamii husika"},
        { value: "Kutathmini ushirikiano baina ya jamii za Kitanzania katika kujenga uhusiano wa kijamii na kiuchumi"},
        { value: "Kuelezea mifumo mbalimbali ya utunzaji na ukuzaji wa maadili ya jamii za Kitanzania kabla ya ukoloni"},
    ]; 

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Historia Ya Tanzania Na Maadili, Kitabu Cha Mwanafunzi, Darasa la Tatu. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kulinda Historia ya Tanzania, urithi na maadili ya Taifa"},
        { value: "Kumudu Historia ya Tanzania na Maadili kabla ya ukoloni"},
    ];

} else if (subject === "Kiswahili") {
   
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kutamka sauti za herufi mwambatano ngw, ndw, njw, mbw na nzw"},
        { value: "Kutamka sauti mwambatano katika silabi, maneno, sentensi na habari"},
        { value: "Kutumia msamiati unaohusiana na maisha ya kila siku katika kuanzisha na kuendeleza mazungumzo kwa kujiamini katika miktadha mbalimbali"},
        { value: "Kubaini maneno yenye maana sawa na kinyume katika mazungumzo"},
        { value: "Kuelezea vitu vilivyomo kwenye mazingira katika umoja na wingi"},
        { value: "Kuuliza na kujibu maswali"},
        { value: "Kubadili kiimbo kulingana na hisia au muktadha wa mazungumzo"},
        { value: "Kuanzisha na kumalizia vitendawili, methali na nahau katika mazungumzo"},
        { value: "Kuandika kifungu cha habari kwa kutumia alama za uakifishaji: nukta (.), mshangao (!), kiulizo (?) na mkato (,)"},
        { value: "Kuandika kifungu cha habari kwa kutumia viunganishi vya ushikamani"},
        { value: "Kutumia alama za uakifishaji kwa usahihi wakati wa kuandika imla"},
        { value: "Kutumia vihusishi (nyuma ya, mbele ya, juu ya, kando ya, chini ya, katikati ya na pembeni ya) katika uandishi"},
        { value: "Kusikiliza mazungumzo kwa kuzingatia mambo ya msingi katika miktadha mbalimbali"},
        { value: "Kutumia maneno aliyoyasikia katika miktadha mingine ya mazungumzo"},
        { value: "Kutumia kamusi kupata maana ya msamiati mpya uliojitokeza katika matini fupi sahili"},
        { value: "Kujibu kwa usahihi maswali yanayotokana na matini"},
        { value: "Kusoma matini fupi na sahili kwa kasi mwafaka na matamshi sahihi"},
        { value: "Kusoma sentensi kwa kuzingatia kupanda na kushuka kwa mawimbi ya sauti"},
        { value: "Kueleza ujumbe mkuu uliomo katika matini fupi aliyoisoma"},
        { value: "Kuandika sentensi mbalimbali kwa usahihi"},
        { value: "Kupanga katika mtiririko sahihi sentensi zilizochanganywa"},
        { value: "Kuandika matini fupi kwa kuzingatia mpangilio sahihi wa maneno na alama za uakifishaji"},
        { value: "Kubainisha msamiati uliojitokeza katika matini fupi sahili"},
        { value: "Kuchambua mawazo makuu yanayojitokeza katika matini fupi sahili"},
        { value: "Kusimulia hadithi fupi sahili"},
        
    ];

   

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kutambua matamshi ya sauti mbalimbali katika silabi, maneno, sentensi na habari"},
        { value: "Kuendeleza mazungumzo katika miktadha mbalimbali"},
        { value: "Kutumia maandishi katika mawasiliano kulingana na miktadha mbalimbali"},
        { value: "Kuonesha stadi za kusikiliza na kuelewa"},
        { value: "Kusoma matini kwa ufasaha na ufahamu"},
        { value: "Kuandika matini mbalimbali"},
        { value: "Kuchanganua mawazo yaliyowasilishwa katika matini mbalimbali"},
        { value: "Kuonesha stadi za awali za ubunifu wa kazi mbalimbali za Kiswahili"},
        
    ];

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Kiswahili, Kitabu Cha Mwanafunzi, Darasa la Tatu. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kuwasiliana katika miktadha mbalimbali"},
        { value: "Kuonesha uelewa wa jambo alilolisikiliza au kulisoma"},
        { value: "Kuwasilisha hoja kwa mazungumzo na kwa maandishi kulingana na muktadha"},
    ];

} 
}  else if (subClasses === "Darasa la Nne") {
    if (subject === "SANAA NA MICHEZO") {
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kufanya mazoezi mbalimbali ya mwili kwa kuigiza viumbe hai na visivyo hai"},
        { value: "Kuimba kwa sauti moja na sauti mbili kwa kuzingatia matamshi (diction) na toni (tone)"},
        { value: "Kutumia ala za muziki zinazotumika katika mazingira yake kusindikiza wimbo wa shule"},
        { value: "Kuchora picha za vitu mbalimbali kwa kutumia penseli"},
        { value: "Kufinyanga mfano wa kitu halisi"},
        { value: "Kufanya mazoezi ya kujenga mawasiliano ya viungo na unyumbufu (coordination and flexibility)"},
        { value: "Kukimbia kwenye gunia na kukimbiza kuku"},
        { value: "Kucheza sarakasi"},
        { value: "Kufanya maonesho ya sanaa katika ngazi ya shule"},
        { value: "Kushiriki katika mashindano ya michezo katika ngazi ya shule"},
        
    ];

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kumudu misingi ya uimbaji na uigizaji"},
        { value: "Kuchora picha"},
        { value: "Kufinyanga maumbo mbalimbali"},
        { value: "Kumudu mazoezi ya viungo"},
        { value: "Kucheza michezo ya asili"},
        { value: "Kucheza michezo ya kisasa"},
        { value: "Kushiriki katika maonesho ya kazi za sanaa na michezo"},
        
    ];

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Sanaa Na Michezo, Kitabu Cha Mwanafunzi, Darasa la Nne. Taasisi ya Elimu Tanzania."},
        
    ];
    
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kubuni kazi za sanaa"},
        { value: "Kuimarisha afya, stadi na ushindani"},
        { value: "Kumudu stadi za maonesho ya kazi za sanaa na michezo"},
        
        
    ];


} else if ( subject === "JIOGRAFIA NA MAZINGIRA") {
    
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kuonesha uelekeo wa vitu mbalimbali kwa kutumia pande kuu nne na nane za dunia (Kutambua pande kuu nne, kuchora pande kuu nne, kutumia pande kuu nne kuonesha uelekeo, kutambua pande nane, kuchora pande nane, kutumia pande nane kuonesha uelekeo)"},
        { value: "Kueleza dhana ya ramani (maana, sifa na umuhimu)"},
        { value: "Kuchora ramani sahili kuonesha mazingira ya darasani"},
        { value: "Kuchora ramani sahili ya shule, kata, wilaya, Tanzania"},
        { value: "Kutumia ramani sahili kubaini uelekeo, umbali, na kutoa na kufuata maelekezo"},
        { value: "Kutumia ramani kuonesha mipaka ya kiutawala (Mikoa) na sura ya nchi (milima, mabonde, mito na maziwa makuu, na bahari)"},
        
    ]; 
    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kutumia ramani katika maisha ya kila siku"},
        
    ]; 


    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Jiografia Na Mazingira, Kitabu Cha Mwanafunzi, Darasa la Nne. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagaua Umahili Mkuu"},
        { value: "Kumudu stadi za awali za ramani na mfumo wa jua"},

        
    ];

} else if (subject === "HISABATI") {
     
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kutambua namba za kirumi (hadi M)"},
        { value: "Kuzidisha na kugawanya namba nzima"},
        { value: "Kubadili vipimo vya urefu,uzani na ujazo katika vijenzi vyake (milimita hadi kilomita, miligramu hadi tani na mililita hadi lita)"},
        { value: "Kujumlisha na kutoa vipimo vya urefu, uzani na ujazo"},
        { value: "Kutafuta mzingo na maeneo ya maumbo bapa (mstatili, mraba na pembetatu)"},
        { value: "Kulinganisha sehemu kwa kutumia alama =, < na >"},
        { value: "Kuzidisha na kugawanya sehemu"},
        { value: "Kueleza dhana ya desimali"},
        { value: "Kujumlisha na kutoa desimali"},
        { value: "Kubadili vipimo vya muda katika vijenzi vyake (sekunde hadi saa)"},
        { value: "Kujumlisha na kutoa muda katika saa"},
        { value: "Kuzidisha na kugawanya fedha za kitanzania"},
        
        
    ];
    
    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kuonesha uelewa wa dhana ya namba"},
        { value: "Kuonesha uelewa wa matendo ya namba"},
        { value: "Kuonesha uelewa wa vipimo"},
        { value: "Kuonesha uelewa wa stadi za awali za maumbo"},
        { value: "Kuonesha uelewa wa stadi za awali za namba"},
        { value: "Kuonesha uelewa wa hesabu za muda"},
        { value: "Kuonesha uelewa wa hesabu za fedha"},
        
    ]; 

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Hisabati, Kitabu Cha Mwanafunzi, Darasa la Nne. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kumudu Misingi ya awali ya kihisabati"},
        { value: "Kumudu matumizi ya stadi za kihisabati"},

        
    ];

} else if (subject === "SAYANSI") {
    
    var mainOptions = [
        { value: "Chagua Shughuri Kuu" },
        { value: "Kueleza kanuni za afya (mlo kamili, mazoezi ya mwili, usafi wa mwili na mazingira, alama na taarifa muhimu)"},
        { value: "Kueleza magonjwa makuu ya binadamu (njia za maambukizi visababishi, kudhibiti na kujikinga)"},
        { value: "Kueleza dhana ya maada (aina na sifa)"},
        { value: "Kueleza kitendo cha uunguaji wa vitu (combustion: maana, visababishi, na matokeo)"},
        { value: "Kuchunguza hatua za ukuaji wa wadudu wanaoeneza magonjwa katika mazingira (mfano; nzi, mende na mbu)"},
        { value: "Kuaridhia aina za nishati (joto, mwanga na sauti) na matumizi yake"},
        { value: "Kufanya majaribio sahili ya kuchunguza hali za maada"},
        { value: "Kufanya majaribio sahili ya kubaini umuhimu wa hewa katika uunguaji wa vitu"},
        { value: "Kufanya majaribio sahili kuhusu nishati ya joto, mwanga na sauti"},
        { value: "Kutumia TEHAMA kuchora na kupangilia maumbo mbalimbali kimantiki"},
        { value: "Kutumia zana inayoigiza lugha ya kompyuta (block-based programming languages) kuunda michezo sahili inayotumia umbo moja"},
        
    ];

    

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},   
        { value: "Kuonesha uelewa wa nadharia za kisayansi"},
        { value: "Kufanya uchunguzi sahili wa kisayansi"},
        { value: "Kuonesha uelewa wa aina za nishati na matumizi yake"},
        { value: "Kufanya majaribio sahili ya kisayansi"},
        { value: "Kutumia TEHAMA katika ujifunzaji"},
        { value: "Kubuni programu sahili za kompyuta"},
        
    ]; 

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Sayansi, Kitabu Cha Mwanafunzi, Darasa la Nne. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kumudu nadharia za kisayansi"},
        { value: "Kumudu stadi za awali za kisayansi"},
        { value: "Kumudu matumizi ya TEHAMA"},
        { value: "Kubuni programu sahili za kompyuta"},

        
    ];

} else if (subject === "ENGLISH LANGUAGE") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Write dictated words"},
        { value: "Associate words with objects found in different contexts (e.g., home, hospital, market, bus station)"},
        { value: "Match objects with their respective characteristics"},
        { value: "Construct short sentences using vocabulary referring to objects found in different settings"},
        { value: "Talk about quantity using appropriate words (e.g., some, many, any, much)" },
        { value: "Express location using appropriate prepositions of place and time (target: in, at, on, under, inside, outside, over, near)"},
        { value: "Express past events (target: simple past tense, past continuous tense)"},
        { value: "Participate in simple dialogues about school, market and home contexts"},
        { value: "Read aloud grade-level simple texts with appropriate intonation"},
        { value: "Read grade-level simple texts of different natures fluently"},
        { value: "Pronounce words with similar sounds (e.g., see/sea, by/bye/buy, right/write)"},
        { value: "Convey simple ideas using words with similar sounds"},
        { value: "Use words with opposite meanings in spoken contexts"},
        { value: "Identify the form and content of wishes and messages"},
        { value: "Write wishes and messages to parents, teachers and friends"},
        { value: "Prepare a schedule of daily routines"},
        { value: "Write simple sentences using visual/ audiovisual stimuli (e.g., pictures, charts, diagrams)"},
        { value: "Write simple guided paragraphs using appropriate and punctuation marks (target: and, but, comma, full stop, question marks)"},
    ];

    
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Develop vocabulary by relating words with objects in the environment"},
        { value: "Use appropriate grammar and vocabulary both orally and in writing"},
        { value: "Respond appropriately in a familiar communicative context"},
        { value: "Read appropriately a variety of simple texts"},
        { value: "Demonstrate knowledge of the basic features of spoken language"},
        { value: "Produce short written messages using appropriate grammar and vocabulary"},
        { value: "Demonstrate basic skills in creative writing"},
        
    ]; 

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute Of Education. (2023). English Language, Pupil's Book, Standard Four. Tanzania Institute Of Education."},
        
    ];
    var topicsOptions = [
        { value: "Select main competence" },
        { value: "Demonstrate mastery of basic English language skills"},
        { value: "Comprehend oral and written information"},
        { value: "Communicate effectively in different contexts"},
    ];

}  else if (subject === "FRENCH") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Reconnaître les noms des parties du corps humain présentés à l’oral et à l’écrit"},
        { value: "Utiliser les nombres jusqu’à 60 oralement et à l’écrit"},
        { value: "Utiliser la grammaire et le vocabulaire simples pour décrire des personnes à l’oral et à l’écrit"},
        { value: "Utiliser la grammaire et le vocabulaire simples pour décrire des objets oralement et à l’écrit"},
        { value: "Utiliser la grammaire et le vocabulaire simples pour décrire des lieux/endroits oralement et à l’écrit"},
        { value: "Utiliser oralement et à l’écrit la grammaire et le vocabulaire simples pour exprimer les jours de la semaine et les mois de l’année"},
        { value: "Utiliser la grammaire et le vocabulaire simples pour demander et dire l’heure"},
        { value: "Demander et dire la date"},
        { value: "Écouter et comprendre des informations sur les goûts et les préférences"},
        { value: "Lire et comprendre des descriptions simples des personnes, des objets, des animaux"},
        { value: "Suivre le code de la route et des consignes"},
        { value: "Utiliser les signes de ponctuation (Les points d’exclamation et la virgule) dans des textes simples"},
        { value: "Utiliser la grammaire et le vocabulaire appropriés pour exprimer les sentiments"},
        
    ];

    

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Relier des mots aux objets dans l’environne-ment"},
        { value: "Maîtriser la grammaire et le vocabulaire simples"},
        { value: "Écouter et comprendre des informations simples"},
        { value: "Lire et comprendre des textes simples"},
        { value: "Réagir de manière appropriée à un contexte familier de communication"},
        { value: "Démontrer une connaissance des caractéristiques de base de la langue parlée et écrite"},
        { value: "Converser dans des contextes variés en utilisant la grammaire et le vocabulaire appropriés"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Institut Tanzanien de l’Éducation. (2023). Français, Livre de l'élève, quatrième année. Institut Tanzanien de l’Éducation."},
        
    ];
    var topicsOptions = [
        { value: "Select main Competence"},
        { value: "Maîtriser les compétences langagières de base du français"},
        { value: "Démontrer la compréhension des informations orales et écrites"},
        { value: "Communiquer efficacement dans des divers contextes"},
    ];

} else if (subject === "Historia Ya Tanzania na Maadili") {
    
    var mainOptions = [
        { value: "Chagua Shughuri Kuu" },
        { value: "Kutambua wajibu na haki zake katika jamii na Taifa" },
        { value: "Kueleza mamlaka mbalimbali za kijadi kabla ya ukoloni (uchifu, usultani, utemi nk)" },
        { value: "Kueleza michango ya mamlaka mbalimbali za kijadi katika utunzaji na ukuzaji wa maadili na maendeleo ya jamii kabla ya ukoloni" },
        { value: "Kufafanua wajibu wake katika utunzaji na ukuzaji wa maadili ya jamii" },
        { value: "Kueleza dhana ya maendeleo ya jamii (maana, viashiria na umuhimu)" },
        { value: "Kueleza shughuli za maendeleo ya jamii na uchumi (mfano kilimo, ufugaji, uhunzi, ususi, ufinyanzi, uvuvi na makazi) na maadili yake kabla ya ukoloni" },
        { value: "Kubaini michango ya shughuli za uchumi kabla ya ukoloni katika maendeleo ya jamii kabla ya ukoloni (mfano kilimo, ufugaji, uhunzi, ususi, ufinyanzi na uvuvi)" },
        { value: "Kubaini ushirikiano na uhusiano wa kiuchumi na kijamii baina ya jamii kabla ya ukoloni" },
        { value: "Kubaini mchango wa maendeleo ya sayansi na teknolojia ya asili katika kuendeleza shughuli za uchumi na maadili kabla ya ukoloni (mfano kilimo, ufugaji, uhunzi, ususi, ufinyanzi na uvuvi)" },
        { value: "Kubaini wajibu wa jamii katika kuendeleza shughuli za uchumi na maadili yake kwa sasa (mfano kilimo, ufugaji, uhunzi, ususi, ufinyanzi na uvuvi)" },
        { value: "Kueleza matumizi ya Alama za Taifa" },
        { value: "Kuthamini Alama za Taifa katika kutambulisha Tanzania Kitaifa na Kimataifa" },
        
    ];

    

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kumudu maarifa ya jamii inayomzunguka"},
        { value: "Kuelezea mifumo mbalimbali ya utunzaji na ukuzaji wa maadili ya jamii za Kitanzania kabla ya ukoloni"},
        { value: "Kueleza maendeleo ya jamii za Kitanzania na maadili yake kabla ya ukoloni"},
        { value: "Kutumia Alama za Taifa kama utambulisho wa Tanzania"},
    ]; 

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Historia Ya Tanzania Na Maadili, Kitabu Cha Mwanafunzi, Darasa la Nne. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kulinda Historia ya Tanzania, urithi na maadili ya Taifa"},
        { value: "Kumudu historia ya Tanzania na maadili kabla ya ukoloni"},
        { value: "Kumudu historia ya ujenzi wa Taifa na maadili katika kipindi cha 1961- 1966"},
    ];


} else if (subject === "Kiswahili") {
   
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kutumia msamiati katika kusimulia matukio, habari na vitu mbalimbali kwa kujiamini"},
        { value: "Kubainisha nafsi (umoja na wingi) katika mazungumzo"},
        { value: "Kutumia nahau na methali katika mazungumzo"},
        { value: "Kuandika kifungu cha habari kwa kuzingatia alama za uakifishaji: nuktapacha (:), nuktamkato (;), ritifaa (‘) na nuktakatishi (…)"},
        { value: "Kutumia msamiati sahihi katika uandishi wa insha kwa kuzingatia mada"},
        { value: "Kuandika barua ya kiofisi kwa kuzingatia muundo sahihi"},
        { value: "Kusimulia hadithi aliyoisikiliza kwa usahihi"},
        { value: "Kutafsiri ujumbe mkuu uliomo kwenye hadithi na mazingira halisi"},
        { value: "Kuhusianisha mienendo ya wahusika waliomo katika hadithi na mazingira halisi"},
        { value: "Kufafanua maana ya nahau na methali zilizomo katika hadithi kwa usahihi"},
        { value: "Kusoma matini ndefu sahili"},
        { value: "Kuwasilisha mawazo makuu aliyoyasoma katika matini ndefu"},
        { value: "KKutoa hoja kwa kutumia msamiati unaoendana na muktadha mahususi wa mazungumzo"},
        { value: "Kuandika insha fupi kwa kuzingatia vipengele vya insha"},
        { value: "KKujibu barua ya kirafiki"},
        { value: "Kuchambua mawazo mbalimbali yaliyojitokeza katika matini fupi sahili aliyoisoma"},
        { value: "Kueleza mawazo yaliyojitokeza katika matini fupi sahili kwa kuzungumza"},
        { value: "Kufupisha habari alizozisoma katika matini fupi sahili kwa kuandika"},
        { value: "Kutunga maigizo rahisi na mafupi kwa kuzingatia kanuni"},
        { value: "Kuigiza michezo sahili"},
        
    ];

   

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kuendeleza mazungumzo katika miktadha mbalimbali"},
        { value: "Kutumia maandishi katika mawasiliano kulingana na miktadha mbalimbali"},
        { value: "Kuonesha stadi za kusikiliza na kuelewa"},
        { value: "Kusoma matini kwa ufasaha na ufahamu"},
        { value: "Kuwasilisha hoja kwa njia ya mazungumzo katika miktadha mbalimbali"},
        { value: "Kuchanganua mawazo yaliyowasilishwa katika matini mbalimbali"},
        { value: "Kuonesha stadi za awali za ubunifu wa kazi mbalimbali za Kiswahili"},
        
    ]; 

    var referenceOptions = [
        { value: "Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Kiswahili, Kitabu Cha Mwanafunzi, Darasa la Nne. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kuwasiliana katika miktadha mbalimbali"},
        { value: "Kuonesha uelewa wa jambo alilolisikiliza au kulisoma"},
        { value: "Kuwasilisha hoja kwa mazungumzo na kwa maandishi kulingana na muktadha"},
    ];

} 
} else if (subClasses === "Darasa la Tano") {
    if (subject === "SANAA NA MICHEZO") {
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kuigiza kwa kutumia vitendo na sauti na vitendo bila sauti (mime)"},
        { value: "Kuimba kwa kuzingatia mienendo ya muziki (dynamics) na uwiano wa sauti (voice balancing)"},
        { value: "Kutumia ala za muziki kusindikiza uimbaji wa solfege (d r m f s l t d’)"},
        { value: "Kuchora picha zinazoonesha hisia na hali kwa kutumia penseli"},
        { value: "Kufinyanga na kuweka nakshi kwenye maumbo mbalimbali"},
        { value: "Kutumia makunzi kutengeneza vitu vyenye maumbo sahili"},
        { value: "Kufanya mazoezi ya kujenga nguvu na kasi (strength and speed)"},
        { value: "Kuvuta kamba"},
        { value: "Kucheza mpira wa miguu na netiboli"},
        
    ];

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kumudu misingi ya uimbaji na uigizaji"},
        { value: "Kuchora picha"},
        { value: "Kufinyanga maumbo mbalimbali"},
        { value: "Kutengeneza vitu kwa kutumia makunzi mbalimbali"},
        { value: "Kumudu mazoezi ya viungo"},
        { value: "Kucheza michezo ya asili"},
        { value: "Kucheza michezo ya kisasa"},
        
    ];

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Sanaa Na Michezo, Kitabu Cha Mwanafunzi, Darasa la Tano. Taasisi ya Elimu Tanzania."},
        
    ];
    
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kubuni kazi za sanaa"},
        { value: "Kuimarisha afya, stadi na ushindani"},
        
        
    ];

    

} else if ( subject === "JIOGRAFIA NA MAZINGIRA") {
    
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kueleza mtawanyiko wa rasilimali asilia kuu za Tanzania"},
        { value: "Kueleza uhusiano kati ya mtawanyiko wa rasilimali asilia na maendeleo (misitu-utalii, ufugaji wa nyuki; mito/maziwa/bahari-uvuvi, usafirishaji, kilimo; ardhi-kilimo, ufugaji, uchimbaji wa madini)"},
        { value: "Kueleza visababishi vya kijiografia vya mtawanyiko wa watu"},
        { value: "Kueleza uhusiano kati ya mtawanyiko wa watu, matumizi ya rasilimali na utunzaji wa mazingira"},
        { value: "Kueleza dhana ya hali ya hewa (maana, vipengele vya hali ya hewa, na vifaa vinavyotumika kupima na kurekodi hali ya hewa)"},
        { value: "Kupima na kurekodi jotoridi, unyevuanga, mvua, upepo na mgandamizo wa hewa"},
        { value: "Kueleza uhusiano kati ya hali ya hewa na shughuli za kiuchumi"},
        
    ]; 
    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kuonesha uelewa wa rasilimali asilia kuu za Tanzania"},
        { value: "Kuonesha uelewa wa awali wa uhusiano kati ya rasilimali asilia na maendeleo"},
        { value: "Kuonesha uelewa wa awali wa uhusiano kati ya mtawanyiko wa watu na matumizi ya rasilimali"},
        { value: "Kuonesha uelewa wa awali wa dhana ya tabianchi na uhusiano wake na shughuli za kiuchumi"},
        
    ]; 


    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Jiografia Na Mazingira, Kitabu Cha Mwanafunzi, Darasa la Tano. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kumudu stadi za awali za sura ya nchi na rasilimali zilizopo"},
        { value: "Kumudu stadi za awali za Jiografia ya binadamu"},
        { value: "Kumudu misingi ya kutunza mazingira"},

        
    ];

} else if (subject === "HISABATI") {
     
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kuzidisha vipimo vya urefu, uzani na ujazo"},
        { value: "Kugawanya vipimo vya urefu, uzani na ujazo"},
        { value: "Kueleza dhana ya pai"},
        { value: "Kutafuta mzingo wa duara"},
        { value: "Kutafuta eneo la duara"},
        { value: "Kubaini namba shufwa, witiri na tasa"},
        { value: "Kutafuta vigawo na vigawe vya namba zisizozidi tatu"},
        { value: "Kutafuta Kigawo Kikubwa cha Shirika (KKS) na Kigawe Kidogo cha Shirika (KDS) cha namba nzima"},
        { value: "Kujumlisha na kutoa sehemu zenye asili tofauti"},
        { value: "Kujumlisha na kutoa sehemu mchanganyiko"},
        { value: "Kuzidisha desimali"},
        { value: "Kugawanya namba kupata jawabu lenye nafasi za desimali zisizozidi tatu"},
        { value: "Kubadili asilimia katika sehemu au desimali"},
        { value: "Kueleza dhana ya aljebra"},
        { value: "Kubaini vigeu na vizigeu katika mitajo"},
        { value: "Kuunda sentensi za aljebra"},
        { value: "Kurahisisha milinganyo ya kialjebra kwa kufuata mpangilio sahihi wa kihisabati"},
        { value: "Kukokotoa milinganyo sahili"},
        { value: "Kutatua mafumbo ya mauzo na manunuzi"},
        
        
    ];
    
    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kuonesha uelewa wa vipimo"},
        { value: "Kuonesha uelewa wa awali stadi za maumbo"},
        { value: "Kuonesha uelewa wa stadi za awali za namba"},
        { value: "Kuonesha uelewa wa awali wa aljebra"},
        { value: "Kuonesha uelewa wa hesabu za fedha"},
        
    ]; 

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Hisabati, Kitabu Cha Mwanafunzi, Darasa la Tano. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kumudu Misingi ya awali ya kihisabati"},
        { value: "Kumudu matumizi ya stadi za kihisabati"},

        
    ];

} else if (subject === "SAYANSI") {
    
    var mainOptions = [
        { value: "Chagua Shughuri Kuu" },
        { value: "Kueleza mfumo wa mmeng’enyo wa chakula wa binadamu (maana, sehemu na kazi zake)"},
        { value: "Kueleza mifumo ya uzazi wa binadamu"},
        { value: "Kueleza ukuaji katika wanyama na mimea"},
        { value: "Kueleza hatua za makuzi za mwili wa binadamu"},
        { value: "Kueleza dhana ya usumaku (maana, tabia na matumizi)"},
        { value: "Kufanya majaribio sahili ya ukuaji katika wanyama na mimea"},
        { value: "Kufanya majaribio sahili ya kubaini tabia za sumaku"},
        { value: "Kutumia zana inayoigiza lugha ya kompyuta (block-based programming languages) kuunda michezo sahili inayounganisha maumbo mawili"},
        
    ];

    

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},   
        { value: "Kuonesha uelewa wa nadharia za kisayansi"},
        { value: "Kuonesha uelewa wa aina za nishati na matumizi yake"},
        { value: "Kufanya majaribio sahili ya kisayansi"},
        { value: "Kubuni programu sahili za kompyuta"},
        
    ]; 

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Sayansi, Kitabu Cha Mwanafunzi, Darasa la Tano. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kumudu nadharia za kisayansi"},
        { value: "Kumudu stadi za awali za kisayansi"},
        { value: "Kubuni programu sahili za kompyuta"},

        
    ];

} else if (subject === "ENGLISH LANGUAGE") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Find synonyms and antonyms of targeted words in different texts"},
        { value: "Solve word puzzles from various media"},
        { value: "Construct short passages using vocabulary referring to objects found in different settings"},
        { value: "Compare things based on size, quality and quantity (e.g., big-bigger-biggest, much-more-most)"},
        { value: "Express location using appropriate prepositions of direction (target: towards, between, beside, from, into, onto, through, across)" },
        { value: "Express possession using adjectives and pronouns (target: my, mine, yours, his, her, hers, their, theirs)"},
        { value: "Express completed and unfinished actions (structure: present perfect, past perfect tense)"},
        { value: "Use conjunctions in oral and written contexts (target: too… to, either …or, neither…nor)"},
        { value: "Use active and passive voices to communicate in different contexts"},
        { value: "Follow oral instructions to accomplish a task (e.g., operating equipment and making objects)"},
        { value: "Listen to grade-appropriate myths, fairy tales and fables presented through audio/ audiovisual channels and respond accordingly"},
        { value: "Identify major and minor ideas in a story"},
        { value: "Summarise issues found in the texts heard"},
        { value: "Retell oral texts"},
        { value: "Read grade-appropriate texts to identify their basic components and contents"},
        { value: "Deduce the general meaning of a text"},
        { value: "Summarise issues found in the texts read"},
        { value: "Identify main points in conversations"},
        { value: "Respond to compliments, apologies, wishes and sympathy messages"},
        { value: "Read aloud grade-level simple texts with the correct rhythm"},
        { value: "Reading grade-level prose and poetry with accuracy and appropriate speed"},
        { value: "Practise connected speech by linking words(e.g. they’ll, won’t, there’s)"},
        { value: "Practise connected speech by deleting some sounds (e.g. next door –> nexdoor dad take –> datake mostcommon –> moscommon used to –> useto"},
        { value: "Use question tags"},
        { value: "Make statements about objects and ideas that can be judged as true or false"},
        { value: "Present simple speeches about self and family members on familiar topics (e.g. my pet, my brother, birthday party, wedding)"},
        { value: "Identify the form and content of appreciation, thanks and apology notes"},
        { value: "Write appreciation, thanks and apology notes to teachers, friends and parents"},
        { value: "Create a journal to record inspiring things (at home, at school, from TV and radio programmes, etc.)"},
        { value: "Devise a topic for a poem from the ideas recorded in a journal"},
        { value: "Use basic figures of speech (simile, metaphor, personification) to write a four-line stanza"},
    ];

    
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Develop vocabulary by relating words with objects in the environment"},
        { value: "Use appropriate grammar and vocabulary both orally and in writing"},
        { value: "Comprehend information presented orally"},
        { value: "Construct meaning from simple texts"},
        { value: "Respond appropriately in a familiar communicative context"},
        { value: "Read appropriately a variety of simple texts"},
        { value: "Demonstrate knowledge of the basic features of spoken language"},
        { value: "Produce short and basic oral messages with a logical structure and intelligible pronunciation"},
        { value: "Produce short written messages using appropriate grammar and vocabulary"},
        { value: "Demonstrate basic skills in creative writing"},
        
    ]; 

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute Of Education. (2023). English Language, Pupil's Book, Standard Five. Tanzania Institute Of Education."},
        
    ];
    var topicsOptions = [
        { value: "Select main competence" },
        { value: "Demonstrate mastery of basic English language skills"},
        { value: "Comprehend oral and written information"},
        { value: "Communicate effectively in a different context"},
    ];

}  else if (subject === "FRENCH") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Utiliser les nombres jusqu’à 500 à l’oral et à l’écrit"},
        { value: "Utiliser à l’oral et à l’écrit la grammaire et le vocabulaire simples pour demander et donner des directions"},
        { value: "Utiliser à l’oral et à l’écrit la grammaire et le vocabulaire simples pour faire et répondre à une demande polie"},
        { value: "Utiliser à l’oral et à l’écrit la grammaire et le vocabulaire simples pour parler de ses routines quotidiennes"},
        { value: "Écouter et comprendre des informations sur les moyens de transports"},
        { value: "Lire et comprendre des récits courts"},
        { value: "Lire des textes simples avec aisance"},
        { value: "Téléphoner à quelqu’un"},
        { value: "Utiliser la grammaire et le vocabulaire simples pour demander et donner le prix"},
        { value: "Utiliser la grammaire et le vocabulaire simples pour converser de manière simple sur des aliments"},
        { value: "Utiliser la grammaire et le vocabulaire appropriés pour faire des correspondances (rédiger des cartes postales et des cartes d’invitation)"},
    ];

    

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Relier des mots aux objets dans l’environne-ment"},
        { value: "Maîtriser la grammaire et le vocabulaire simples"},
        { value: "Écouter et comprendre des informations simples"},
        { value: "Lire et comprendre des textes simples"},
        { value: "Lire correctement des textes simples"},
        { value: "Démontrer une connaissance des caractéristiques de base de la langue parlée et écrite"},
        { value: "Converser dans des contextes variés en utilisant la grammaire et le vocabulaire appropriés"},
        { value: "Communiquer à l’écrit dans des contextes variés en utilisant la grammaire et le vocabulaire appropriés"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Institut Tanzanien de l’Éducation. (2023). Français, Livre de l'élève, cinquième année. Institut Tanzanien de l’Éducation."},
        
    ];
    var topicsOptions = [
        { value: "Select main Competence"},
        { value: "Maîtriser les compétences langagières de base du français"},
        { value: "Démontrer la compréhension des informations orales et écrites"},
        { value: "Communiquer efficacement dans des divers contextes"},
    ];

} else if (subject === "Kiswahili") {
    
    var mainOptions = [
        { value: "Chagua Shughuri Kuu" },
        { value: "Kutumia msamiati katika kusimulia matukio, habari na vitu mbalimbali kwa kujiamini" },
        { value: "Kubainisha nafsi (umoja na wingi) katika mazungumzo" },
        { value: "Kutumia nahau na methali katika mazungumzo" },
        { value: "Kuandika kifungu cha habari kwa kuzingatia alama za uakifishaji: nuktapacha (:), nuktamkato (;), ritifaa (‘) na nuktakatishi (…)" },
        { value: "Kutumia msamiati sahihi katika uandishi wa insha kwa kuzingatia mada" },
        { value: "Kuandika barua ya kiofisi kwa kuzingatia muundo sahihi" },
        { value: "Kusimulia hadithi aliyoisikiliza kwa usahihi" },
        { value: "Kutafsiri ujumbe mkuu uliomo kwenye hadithi na mazingira halisi" },
        { value: "Kuhusianisha mienendo ya wahusika waliomo katika hadithi na mazingira halisi" },
        { value: "Kufafanua maana ya nahau na methali zilizomo katika hadithi kwa usahihi" },
        { value: "Kusoma matini ndefu sahili" },
        { value: "Kuwasilisha mawazo makuu aliyoyasoma katika matini ndefu" },
        { value: "Kutoa hoja kwa kutumia msamiati unaoendana na muktadha mahususi wa mazungumzo" },
        { value: "Kuandika insha fupi kwa kuzingatia vipengele vya insha" },
        { value: "Kujibu barua ya kirafiki" },
        { value: "Kuchambua mawazo mbalimbali yaliyojitokeza katika matini fupi sahili aliyoisoma" },
        { value: "Kueleza mawazo yaliyojitokeza katika matini fupi sahili kwa kuzungumza" },
        { value: "Kufupisha habari alizozisoma katika matini fupi sahili kwa kuandika" },
        { value: "Kutunga maigizo rahisi na mafupi kwa kuzingatia kanuni" },
        { value: "Kuigiza michezo sahili" },
        
    ];

    

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kuendeleza mazungumzo katika miktadha mbalimbali"},
        { value: "Kutumia maandishi katika mawasiliano kulingana na miktadha mbalimbali"},
        { value: "Kuonesha stadi za kusikiliza na kuelewa"},
        { value: "Kusoma matini kwa ufasaha na ufahamu"},
        { value: "Kuwasilisha hoja kwa njia ya mazungumzo katika miktadha mbalimbali"},
        { value: "Kuandika matini mbalimbali"},
        { value: "Kuchanganua mawazo yaliyowasilishwa katika matini mbalimbali"},
        { value: "Kuonesha stadi za awali za ubunifu wa kazi mbalimbali za Kiswahili"},
    ]; 

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Kiswahili, Kitabu Cha Mwanafunzi, Darasa la Tano. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kuwasiliana katika miktadha mbalimbali"},
        { value: "Kuonesha uelewa wa jambo alilolisikiliza au kulisoma"},
        { value: "Kuwasilisha hoja kwa mazungumzo na kwa maandishi kulingana na muktadha"},
    ];


} else if (subject === "Historia Ya Tanzania na Maadili") {
   
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kueleza dhana ya ukoloni."},
        { value: "Kufafanua mifumo ya kiutawala na kijamii wakati wa ukoloni (mfano mahakama, ulinzi, uongozi, afya na elimu)"},
        { value: "Kufafanua athari za mifumo ya kikoloni katika maadili na urithi wa Kitanzania"},
        { value: "Kutathmini athari za ukoloni katika mifumo ya mamlaka za kijadi katika jamii"},
        { value: "Kufafanua mabadiliko na mwendelezo wa maadili ya Kitanzania kabla na wakati wa ukoloni"},
        { value: "Kutathmini nafasi ya ukoloni katika kuleta mabadiliko na mwendelezo wa maadili"},
        { value: "Kubaini jitihada zilizotumika kulinda maadili ya Kitanzania dhidi ya maadili ya kigeni"},
        { value: "Kufafanua mabadiliko na mwendelezo wa maadili ya Kitanzania kabla na wakati wa ukoloni"},
        { value: "Kutathmini nafasi ya ukoloni katika kuleta mabadiliko na mwendelezo wa maadili"},
        { value: "Kubaini jitihada zilizotumika kulinda maadili ya Kitanzania dhidi ya maadili ya kigeni"},
        { value: "Kufafanua historia ya Tunu za Taifa (utu, uzalendo, uadilifu, umoja, uwazi, uwajibikaji na lugha ya Taifa) nchini"},
        { value: "Kueleza umuhimu wa kuenzi Tunu za Taifa"},
        { value: "Kueleza matendo ya kushiriki kutetea, kulinda na kudumisha Tunu, Alama za Taifa, umoja wa Kitaifa na uzalendo"},
        
    ];

   

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kuelezea historia ya Tanzania na urithi wakati wa ukoloni"},
        { value: "Kulinganisha mabadiliko na mwendelezo wa maadili kabla na wakati wa ukoloni."},
        { value: "Kuelezea jitahada za kulinda maadili ya Kitanzania dhidi ya maadili ya kigeni yaliyoletwa wakati wa ukoloni."},
        { value: "Kuelezea mchango wa Tunu na Alama za Taifa katika kujenga umoja wa kitaifa na uzalendo."},
        
    ]; 

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Historia Ya Tanzania Na Maadili, Kitabu Cha Mwanafunzi, Darasa la Tano. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kumudu Historia ya Tanzania na Maadili wakati wa ukoloni 1890- 1960"},
        { value: "Kumudu historia ya ujenzi wa Taifa na maadili katika kipindi cha 1961- 1966"},
    ];

} 
}  else if (subClasses === "Darasa la Sita") {
    if (subject === "SANAA NA MICHEZO") {
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kutumia mbinu mbalimbali za uigizaji"},
        { value: "Kucheza ngoma za asili"},
        { value: "Kuchora picha kwa kuangalia vitu mbalimbali"},
        { value: "Kufanya mazoezi ya ustahimilivu (endurance)"},
        { value: "Kucheza michezo ya kuruka ya chini na juu"},
        { value: "Kucheza michezo ya kukimbia"},
        
    ];

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kumudu misingi ya uimbaji na uigizaji"},
        { value: "Kuchora picha"},
        { value: "Kumudu mazoezi ya viungo"},
        { value: "Kucheza michezo ya asili"},
        { value: "Kucheza michezo mikubwa"},
        
    ];

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Sanaa Na Michezo, Kitabu Cha Mwanafunzi, Darasa la Sita. Taasisi ya Elimu Tanzania."},
        
    ];
    
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kubuni kazi za sanaa"},
        { value: "Kuimarisha afya, stadi na ushindani"},
        
        
    ];


} else if ( subject === "JIOGRAFIA NA MAZINGIRA") {
    
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kueleza dhana ya mfumo wa jua (maana, umuhimu, sayari na mpangilio wake na magimba mengine)"},
        { value: "Kueleza uhusiano kati ya sura ya nchi na uoto wa asili"},
        { value: "Kueleza umuhimu wa taarifa za idadi ya watu na makazi"},
        { value: "Kueleza vyanzo vya upatikanaji wa taarifa za idadi ya watu na makazi (sensa: maana, aina, sifa, umuhimu, usajiri wa vizazi na vifo, rekodi za uhamiaji )"},
        { value: "Kueleza dhana ya tabianchi na mambo yanayoiathiri"},
        { value: "Kueleza uhusiano kati ya tabianchi, mtawanyiko wa watu na shughuli za kiuchumi"},
        
    ]; 
    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kuonesha uelewa wa awali wa elimu ya mfumo wa jua"},
        { value: "Kuonesha uelewa wa awali wa sura ya nchi"},
        { value: "Kuonesha uelewa wa vyanzo vya taarifa za idadi ya watu na makazi"},
        { value: "Kuonesha uelewa wa awali wa dhana ya tabianchi na uhusiano wake na shughuli za kiuchumi"},
        
    ]; 


    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Jiografia Na Mazingira, Kitabu Cha Mwanafunzi, Darasa la Sita. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kumudu stadi za awali za ramani na mfumo wa jua"},
        { value: "Kumudu stadi za awali za sura ya nchi"},
        { value: "Kumudu stadi za awali za Jiografia ya binadamu"},
        { value: "Kumudu misingi ya kutunza mazingira"},

        
    ];

} else if (subject === "HISABATI") {
    
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kukokotoa mafumbo yanayohusu umbali na muda"},
        { value: "Kutafuta eneo na ujazo wa maumbo ya ukumbi (mche mstatili,mche mraba na mche duara)"},
        { value: "Kutafuta nyuzi katika maumbo bapa (pembetatu, mstatili na duara)"},
        { value: "Kueleza aina za pembetatu na kanuni ya Pythagoras"},
        { value: "Kutafuta kipeo cha pili cha namba"},
        { value: "Kufuta kipeuo cha pili cha namba"},
        { value: "Kufafanua dhana ya namba kamili"},
        { value: "Kufanya matendo katika namba kamili"},
        { value: "Kuelezea dhana ya takwimu"},
        { value: "Kutafuta wastani, namba ya katikati (Mediani) na namba iliyojitokeza mara nyingi (modi) kwenye data zisizo katika makundi"},
        { value: "Kubaini matumizi ya takwimu (duara na mihimili) kuwasilisha taarifa"},
    ];
    
    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kuonesha uelewa wa vipimo"},
        { value: "Kuonesha uelewa wa stadi za awali za maumbo"},
        { value: "Kuonesha uelewa wa stadi za awali za namba"},
        { value: "Kuonesha uelewa wa awali wa takwimu na matumizi yake"},
        
    ]; 

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Hisabati, Kitabu Cha Mwanafunzi, Darasa la Sita. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kumudu misingi ya awali ya kihisabati"},
        { value: "Kumudu matumizi ya awali ya hisabati"},

        
    ];

} else if (subject === "SAYANSI") {
    
    var mainOptions = [
        { value: "Chagua Shughuri Kuu" },
        { value: "Kueleza mfumo wa upumuaji katika wanyama na mimea (maana, sehemu za mfumo na namna upumuaji unavyofanyika)"},
        { value: "Kueleza dhana ya tindikali na nyongo (maana, tabia, vyanzo na matumizi)"},
        { value: "Kueleza dhana ya mashine (maana, aina na matumizi)"},
        { value: "Kueleza dhana ya kuelea na kuzama"},
        { value: "Kueleza dhana ya umeme (maana, vyanzo na matumizi)"},
        { value: "Kuaridhia sakiti sahili ya umeme (sehemu, aina, alama na muunganiko)"},
        { value: "Kufanya majaribio sahili ya kubaini vitu vyenye tindikali au nyongo katika mazingira"},
        { value: "Kufanya majaribio sahili kuhusu mashine"},
        { value: "Kufanya majaribio sahili kuhusu kuelea na kuzama"},
        { value: "Kufanya majaribio kuhusu sakiti sahili za umeme"},
        { value: "Kutumia zana inayoigiza lugha ya kompyuta (block-based programming languages) kuunda michezo sahili inayounganisha maumbo zaidi ya mawili"},
        
    ];

    

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},   
        { value: "Kuonesha uelewa wa nadharia za kisayansi"},
        { value: "Kuonesha uelewa wa aina za nishati na matumizi yake"},
        { value: "Kufanya majaribio sahili ya kisayansi"},
        { value: "Kubuni programu sahili za kompyuta"},
        
    ]; 

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Sayansi, Kitabu Cha Mwanafunzi, Darasa la Sita. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kumudu nadharia za kisayansi"},
        { value: "Kumudu stadi za awali za kisayansi"},
        { value: "Kubuni programu sahili za kompyuta"},

        
    ];

} else if (subject === "ENGLISH LANGUAGE") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Compose a dialogue using vocabulary referring to objects found in different settings"},
        { value: "Compose a story using vocabulary referring to objects found in different settings"},
        { value: "Express nationalities using appropriate adjectives (e.g. Tanzanian, Japanese, Norwegian)"},
        { value: "Use relative pronouns in appropriate contexts (e.g., who, whose, whom)"},
        { value: "Express future actions (structure: will, shall, going to)" },
        { value: "Use conjunctions in oral and written contexts (target: yet, despite, in spite of, so… that)"},
        { value: "Express concession (target: although, though)"},
        { value: "Report information heard from a speech"},
        { value: "Participate in dialogues on grade appropriate topical issues"},
        { value: "Engage in oral discussions on topical issues (e.g. environment, gender, corruption)"},
        { value: "Interpret figurative and idiomatic language from a text (e.g. idioms, riddles, proverbs)"},
        { value: "Infer meaning from a text"},
        { value: "Relate the content of a text with real life"},
        { value: "Give an appropriate and logical conclusion to a conversation"},
        { value: "Debate on topical issues (e.g. gender, entrepreneurship, corruption, education)"},
        { value: "Give appropriate responses to riddles"},
        { value: "Express feelings using appropriate intonation patterns (e.g., surprise, shock, happiness, sadness)"},
        { value: "Use appropriate backchannels in conversations (e.g. so, well, right, uh-huh, wow, yeah, really)"},
        { value: "Report messages received orally (virtually and face to face)"},
        { value: "Engage in discussions on a variety of topical issues and defend arguments"},
        { value: "Develop skills for taking notes from oral presentations"},
        { value: "Develop skills for taking notes from oral presentations"},
        { value: "Taking notes from various oral presentations (e.g. speech, lecture, discussion and audio/ audiovisual materials)"},
        { value: "Develop a plan for a story (target: setting & plot)"},
    ];

    
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Develop vocabulary by relating words with objects in the environment"},
        { value: "Use appropriate grammar and vocabulary both orally and in writing"},
        { value: "Comprehend information presented orally"},
        { value: "Construct meaning from simple texts"},
        { value: "Respond appropriately in a familiar communicative context"},
        { value: "Demonstrate knowledge of the basic features of spoken language"},
        { value: "Produce short and basic oral messages with a logical structure and intelligible pronunciation"},
        { value: "Produce short written messages using appropriate grammar and vocabulary"},
        { value: "Demonstrate basic skills in creative writing"},
        
    ]; 

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute Of Education. (2023). English Language, Pupil's Book, Standard Six. Tanzania Institute Of Education."},
        
    ];
    var topicsOptions = [
        { value: "Select main competence" },
        { value: "Demonstrate mastery of basic English language skillsComprehend oral and written information"},
        { value: "Comprehend oral and written information"},
        { value: "Communicate effectively in different contexts"},
    ];

}  else if (subject === "FRENCH") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Utiliser les nombres jusqu’à 1 000 à l’orale et à l’écrit"},
        { value: "Utiliser la grammaire et le vocabulaire simples pour raconter un événement passé (les vacances, les voyages)"},
        { value: "Utiliser la grammaire et le vocabulaire simples pour exprimer des événements futurs"},
        { value: "Utiliser la grammaire et le vocabulaire simples pour parler d’activités quotidiennes"},
        { value: "Écouter et comprendre des informations sur la météo"},
        { value: "Lire et comprendre des poèmes simples"},
        { value: "Utiliser la grammaire et le vocabulaire appropriés pour écrire une lettre amicale courte"},
    ];

    

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Relier des mots aux objets dans l’environnement"},
        { value: "Maîtriser la grammaire et le vocabulaire simples"},
        { value: "Écouter et comprendre des informations simples"},
        { value: "Lire et comprendre des textes simples"},
        { value: "Communiquer à l’écrit dans des contextes variés en utilisant la grammaire et le vocabulaire appropriés"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Institut Tanzanien de l’Éducation. (2023). Français, Livre de l'élève, sixième année. Institut Tanzanien de l’Éducation."},
        
    ];
    var topicsOptions = [
        { value: "Select main Competence"},
        { value: "Maîtriser les compétences langagières de base du français"},
        { value: "Démontrer la compréhension des informations orales et écrites"},
        { value: "Communiquer efficacement dans divers contextes"},
    ];

} else if (subject === "Kiswahili") {
    
    var mainOptions = [
        { value: "Chagua Shughuri Kuu" },
        { value: "Kutumia msamiati katika mijadala mbalimbali kwa kujiamini" },
        { value: "Kubaini makosa ya kiuandishi katika matini" },
        { value: "Kusahihisha makosa ya kiuandishi katika matini" },
        { value: "Kuandika risala na hotuba kwa kuzingatia muundo na muktadha" },
        { value: "Kusikiliza habari mbalimbali na kunukuu mawazo makuu" },
        { value: "Kufupisha habari alizozisikiliza kwa kuzingatia mawazo makuu" },
        { value: "Kutumia msamiati mwafaka katika kupinga au kutetea hoja kwa kutoa mifano thabiti kulingana na muktadha" },
        { value: "Kutumia lugha ya mvuto katika kuwasilisha hoja" },
        { value: "Kuhutubia kwa lugha fasaha katika miktadha ya shuleni" },
        { value: "Kusoma mashairi na ngonjera mbalimbali" },
        { value: "Kuchambua mawazo yanayo jitokeza katika ngonjera na mashairi aliyoyasoma" },
        { value: "Kusimulia mawazo yaliyomo katika ngonjera na mashairi aliyoyasoma" },
        { value: "Kutunga shairi na ngonjera" },
        { value: "Kutamba ngonjera na kughani mashairi" },
        
    ];

    

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kuendeleza mazungumzo katika miktadha mbalimbali"},
        { value: "Kutumia maandishi katika mawasiliano kulingana na miktadha mbalimbali"},
        { value: "Kuonesha stadi za kusikiliza na kuelewa"},
        { value: "Kuwasilisha hoja kwa njia ya mazungumzo katika miktadha mbalimbali"},
        { value: "Kuchanganua mawazo yaliyowasilishwa katika matini mbalimbali"},
        { value: "Kuonesha stadi za awali za ubunifu wa kazi mbalimbali za Kiswahili"},
    ];

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Kiswahili, Kitabu Cha Mwanafunzi, Darasa la Sita. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahuili Mkuu"},
        { value: "Kuwasiliana katika miktadha mbalimbali"},
        { value: "Kuonesha uelewa wa jambo alilolisikiliza au kulisoma"},
        { value: "Kuwasilisha hoja kwa mazungumzo na kwa maandishi kulingana na muktadha"},
    ];


} else if (subject === "Historia Ya Tanzania na Maadili") {
   
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kueleza historia ya ujenzi wa Taifa na maadili baada ya uhuru katika kipindi cha 1961-1966 (kiuchumi, kisiasa na kijamii)"},
        { value: "Kubaini mafanikio yaliyofikiwa katika historia ya ujenzi wa Taifa na maadili"},
        { value: "Kuelezea changamoto zilizojitokeza wakati wa ujenzi wa Taifa na maadili baada ya uhuru"},
        { value: "Kueleza dhana ya Azimio la Arusha na Siasa ya Ujamaa na Kujitegemea (lengo na umuhimu)"},
        { value: "Kufafanua misingi ya Azimio la Arusha (Ujamaa na Kujitegemea) katika"},
        { value: "Kutathmini nafasi ya ukoloni katika kuleta mabadiliko na mwendelezo wa maadili harakati za ujenzi wa Taifa huru na maadili nchini (ushirikiano, haki na usawa, heshima, utu, uwajibikaji, miiko ya uongozi, umoja wa Kitaifa na uzalendo n.k)"},
        { value: "Kueleza mchango wa Azimio la Arusha katika harakati za mapambano dhidi ya rushwa"},
        { value: "Kutathmini harakati za ujenzi wa Taifa na maadili wakati wa kipindi cha 1967-1985"},
        { value: "Kueleza mchango wa Tanzania katika ukombozi wa Afrika dhidi ya ukoloni na ukandamizaji (lengo na umuhimu wake kwa Tanzania)"},
        { value: "Kubaini mchango wa Tanzania katika mapambano dhidi ya ukoloni na ukandamizaji"},
        { value: "Kuelezea dhana ya uliberali (maana na sifa)"},
        { value: "Kubaini athari za uliberali katika maadili na ujenzi wa Taifa"},
        { value: "Kutathmini mikakati ya kukabiliana na changamoto za kimaadili katika ujenzi wa Taifa katika nyakati za uliberali na wakati uliopo"},
        { value: "Kubaini uwepo wa mkinzano wa maadili nyakati za uliberali"},
        { value: "Kueleza athari za uliberali kwa Taifa katika kufanya uamuzi sahihi"},
        { value: "Kubaini mbinu zinazotumika kukabili mkinzano wa maadili katika ujenzi wa Taifa"},
        
    ];

   

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kumudu historia ya ujenzi wa Taifa na maadili baada ya uhuru katika kipindi cha 1961- 1966"},
        { value: "Kuelezea Misingi na Maadili ya Azimio la Arusha na Siasa ya Ujamaa na Kujitegemea"},
        { value: "Kuelezea mchango wa Tanzania katika mapambano dhidi ya ukoloni na ukandamizaji"},
        { value: "Kufafanua dhana ya uliberali kwa kuhusianisha na maadili ya Kitanzania"},
        { value: "Kutumia maarifa na ujuzi wa historia ya Tanzania na maadili kufanya uamuzi sahihi katika nyakati za uliberali"},
        
    ];

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023). Historia Ya Tanzania Na Maadili, Kitabu Cha Mwanafunzi, Darasa la Sita. Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kumudu Historia ya Ujenzi wa Taifa na Maadili katika Kipindi cha 1961- 1966"},
        { value: "Kutathmini ujenzi wa Taifa na Maadili wakati wa Azimio la Arusha 1967-1985"},
        { value: "Kutathmini Historia ya Tanzania na Maadili wakati wa Uliberali 1986 hadi sasa"},
    ];

} 
} 

competenceOptions.forEach(function(option) {
            var opt = document.createElement("option");
            opt.value = option.value;
            opt.textContent = option.value;
            compLesson.appendChild(opt);
        });


        mainOptions.forEach(function(option) {
            var opt = document.createElement("option");
            opt.value = option.value;
            opt.textContent = option.value;
            mainlesson.appendChild(opt);
        });

        referenceOptions.forEach(function(option) {
            var opt = document.createElement("option");
            opt.value = option.value;
            opt.textContent = option.value;
            refLesson.appendChild(opt);
        });

        topicsOptions.forEach(function(option) {
            var opt = document.createElement("option");
            opt.value = option.value;
            opt.textContent = option.value;
            topicLesson.appendChild(opt);
        });
}
document.getElementById("classes").addEventListener("change", createOptionElement);
document.getElementById("subject").addEventListener("change", createOptionElement);
createOptionElement();
})();
