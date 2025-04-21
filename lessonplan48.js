var userLoad = document.getElementById("userLoad");
var lessonplanSubmit = document.getElementById("submit-lesson-plan");

    function updateContent() {
        var period = document.getElementById("period").value;
        var subject =document.getElementById("subject").value;
       var school =document.getElementById("school").value;
       var name = document.getElementById("teacherName").value;
       var subClasses = document.getElementById("classes").value;
       var subStreams = document.getElementById("streams").value;
       var subDate = document.getElementById("date").value;
       var compLesson = document.getElementById("compLesson").value;
       var mainlesson = document.getElementById("mainlesson").value;
       var topicLesson = document.getElementById("topicLesson").value;
      // var subTopiclesson = document.getElementById("subTopiclesson").value;
       var specificLesson = document.getElementById("specificLesson").value;
       //var aidsLesson = document.getElementById("aidsLesson").value;
       var tlmaterials =document.getElementById("tlmaterials").value;
       var refLesson = document.getElementById("refLesson").value;
       var femaleReg = document.getElementById("femaleReg").value;
       var maleReg = document.getElementById("maleReg").value;
       var femalePres = document.getElementById("femalePres").value;
       var malePres = document.getElementById("malePres").value;
       var wrdImp1 = document.getElementById("wrdImp1").value;
       var wrdImp2 = document.getElementById("wrdImp2").value;
       //var stdUnderstood = document.getElementById("stdUnderstood").value;
      

       var schoolNm = document.getElementById("schoolNm");
       var schoolNmc = `${school} Sec School`;
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
       streams.innerText = subStreams;
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

  const words = {
    english: {
      wrdImp2: [
        "discuss", "explain", "describe", "demonstrate", "analyse",
        "calculate", "compute", "find", "evaluate", "state",
        "give", "organise", "apply", "practice"
      ],
      wrdImp1: [
        "continue", "start", "end", "continue with topic", "start new topic"
      ]
    },
    kiswahili: {
      wrdImp2: [
        "kuandika", "kueleza", "kujibu", "kufupisha", "kubaini",
        "kuhakiki", "kuunda", "kutunga", "kupambanua", "kufafanua",
        "kuonesha", "kuainisha", "kusoma", "kusimulia"
      ],
      wrdImp1: [
        "endelea", "anza", "maliza", "endelea na mada", "anza mada mpya"
      ]
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    const subjectSelect = document.getElementById('subject');
    const wrdImp1Select = document.getElementById('wrdImp1');
    const wrdImp2Select = document.getElementById('wrdImp2');

    subjectSelect.addEventListener('change', function () {
      const selectedSubject = this.value.toLowerCase();

      // Determine language
      let language = allowedSubjects.includes(selectedSubject) ? 'kiswahili' : 'english';

      // Update placeholder based on language
      if (language === 'kiswahili') {
        wrdImp2Select.innerHTML = '<option value="">Chagua neno la kutumia</option>';
        wrdImp1Select.innerHTML = '<option value="">Chagua neno la utangulizi</option>';
      } else {
        wrdImp2Select.innerHTML = '<option value="">Select word to use</option>';
        wrdImp1Select.innerHTML = '<option value="">Select word for introduction</option>';
      }

      // Populate wrdImp2
      words[language].wrdImp2.forEach(function (word) {
        const option = document.createElement('option');
        option.value = word;
        option.textContent = word;
        wrdImp2Select.appendChild(option);
      });

      // Populate wrdImp1
      words[language].wrdImp1.forEach(function (word) {
        const option = document.createElement('option');
        option.value = word;
        option.textContent = word;
        wrdImp1Select.appendChild(option);
      });
    });
  });
 
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
         var schoolNmc ="shule ya sekondari " + school;
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
         mwanafunzi.innerText = "Shughuli ujifunzaji";
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
         

         if (subClasses === "Form One"){
            subNewClass = "kidato cha Kwanza";
         } else if (subClasses === "Form Two") {
            subNewClass = "kidato cha pili";
         } else if (subClasses === "Form Three") {
            subNewClass = "kidato cha tatu";
         } else {
            subNewClass = "kidato cha nne";
         }
         studentClass.innerText = subNewClass;

       
         sylbsMnObj.innerText = topicLesson ; 
       sylbsCmp.innerText = compLesson ; 
       sylbsSbtp.innerText = mainlesson; 
       sylbsSpobj.innerText = wrdImp2 + " " + specificLesson;
         
       
       remarkComm.innerText =`Wanafunzi waliweza  ${wrdImp2} ${specificLesson} kutokana na matumizi ya mbinu shirikishi za kufundisha na kujifunza, pamoja na shughuli na zana mbalimbali. Hata hivyo, baadhi ya wanafunzi walishindwa ${wrdImp2} ${specificLesson}. Kwa hivyo, nitafafanua zaidi katika kipindi kijacho.`;

       /*studentComm.innerText ="Somo limeeleweka vizuri na mwanafunzi,kwa kuwa ameshiriki vizuri " + wrdImp2 +" "+ specificLesson;
       if (parseInt(stdUnderstood) === (parseInt(femalePres) + parseInt(malePres))) {
        lessonComment.innerText = "somo limeelewekana wanafunzi "+ underStd +" (" + underStdPrc +")";
       } else if(notUnderstd === 1) { 
       lessonComment.innerText = "somo limeeleweka na wanafunzi " + underStd + " (" + underStdPrc + ") na mwanafunzi " + notUnderstd + "  (" + notUnderstdprs + ") amepatiwa zoezi kwa ujifunzanzi wa ziada";
       } else { 
       lessonComment.innerText = "somo limeeleweka na wanafunzi " + underStd + " (" + underStdPrc + ") na wanafunzi " + notUnderstd + "  (" + notUnderstdprs + ") wamepatiwa zaezi kwa ujifunzaji wa ziada";
       }*/

       if(wrdImp1 === "Endelea") {
        intro1.innerText = "Kuonesha zana zilizotumika kwenye mada ya kipindi kilichopita na kuuliza maswali juu ya mada hiyo";
        intro2.innerText = "Kujibu maswali kutokana na zana za mada ya kipindi kilichopita";
        intro3.innerText = "Maswali kutokana na zana za mada ya kipindi kilichopita yamejadiliwa kwa ufasaha";

       }else {
        intro1.innerText = `Kuonesha zana za kufundishia na kisha kuuliza maswali kuhusu ${specificLesson}`;
        intro2.innerText = `Kujibu maswali kutokana na zana za kufundishia kuhusu ${specificLesson}`;
        intro3.innerText = `Maswali kutokana na zana kuhusu ${specificLesson} yamejadiliwa kwa usahihi`;
       }

       new1.innerText = `Kutumia maswali mwongozo, kuwaongoza wanafunzi kwenye vikundi vidogo vidogo kujadili kuhusu  ${specificLesson}`;
       new2.innerText = `Wanafunzi katika vikundi vidogo vidogo kujadili kuhusu  ${specificLesson}`;
       new3.innerText = `Mambo mbalimbali kuhusu ${specificLesson} yamejadiliwa kwa usahihi`;

       rein1.innerText = `Kuwauliza wanafunzi katika vikundi vidogo vidogo ${wrdImp2} ${specificLesson}`;
       rein2.innerText = `${wrdImp2} ${specificLesson}`;
       rein3.innerText = `Maswali kuhusu ${specificLesson} yamejibiwa kwa usahihi`;

       reflect1.innerText = `Kuuliza kila mwanafunzi kutoa mifano na ${wrdImp2}  ${specificLesson}`;
       reflect2.innerText = `kutoa mifano na  ${wrdImp2} ${specificLesson}`;
       reflect3.innerText = `Mifano imetolewa na ${specificLesson} kwa usahihi`;

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
         
       } else if(period === "2")  {
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
       remarkComm.innerText ="The students were able to "+ wrdImp2 + " " + specificLesson + " due to the use of interactive teaching and learning methods, activities and resources. However, some students failed to "+ wrdImp2 + " " + specificLesson + " Therefore, I will clarify it next period.";

       /*if (parseInt(stdUnderstood) === (parseInt(femalePres) + parseInt(malePres))) {
        lessonComment.innerText = "Lesson understood well by "+ underStd +" students  (" + underStdPrc +")";
       } else if(notUnderstd === 1) { 
       lessonComment.innerText = "Lesson understood well by " + underStd + " students (" + underStdPrc + ") and the rest " + notUnderstd + " student (" + notUnderstdprs + ") was given an exercise for more practice";
       } else { 
       lessonComment.innerText = "Lesson understood well by " + underStd + " students (" + underStdPrc + ") and the rest " + notUnderstd + " students (" + notUnderstdprs + ") were given an exercise for more practice";
       }*/

       if(wrdImp1 === "Continue") {
        intro1.innerText = "Providing materials of the previous lesson and Asking questions about them";
        intro2.innerText = "Observing the materials and responding to the questions";
        intro3.innerText = "Questions about previous lesson are answered";

       }else {
        intro1.innerText = "Providing the teaching aid and question about  " + specificLesson;
        intro2.innerText = "Observing the teaching aid and respond to the question on " + specificLesson + " asked";
        intro3.innerText = "Questions about "+ specificLesson + " are answered";
       }

       new1.innerText = "Provide student with " + specificLesson + " teaching aids and ask them in groups to " + wrdImp2 + " " + specificLesson;
       new2.innerText = wrdImp2 +" and share " + specificLesson;
       new3.innerText = specificLesson + " are correctly answered";

       rein1.innerText = "Ask students in the groups to " + wrdImp2 +" "+ specificLesson;
       rein2.innerText = wrdImp2 +" "+ specificLesson;
       rein3.innerText = specificLesson + " are correctly answered";

       reflect1.innerText = "Ask each student to pick one card and "+ wrdImp2 +" "+ specificLesson;
       reflect2.innerText = "Pick a card and "+ wrdImp2 +" "+ specificLesson;
       reflect3.innerText = specificLesson + " are correctly answered";

       //conso1.innerText = "Teacher To Ask Students Some Question And Making The Summary Of The Lesson about " + specificLesson;
       //conso2.innerText = "Student Respond To The Question And Listening The Summary Of The Lesson about " + specificLesson;
       //conso3.innerText = " To Check If The Student Can Respond The Question Correctly";
       if(period === "1") {

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
