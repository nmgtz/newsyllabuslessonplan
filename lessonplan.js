var userLoad = document.getElementById("userLoad");
    var submit =document.getElementById("submit");
    function updateContent() {
        var period = document.getElementById("period").value;
        var subject =document.getElementById("subject").value;
       var school =document.getElementById("school").value;
       var name = document.getElementById("teacherName").value;
       var subClasses = document.getElementById("classes").value;
       var subStreams = document.getElementById("streams").value;
       var subDate = document.getElementById("date").value;
       //var compLesson = document.getElementById("compLesson").value;
       //var mainlesson = document.getElementById("mainlesson").value;
       var topicLesson = document.getElementById("topicLesson").value;
       var subTopiclesson = document.getElementById("subTopiclesson").value;
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
       var yearOfStd = document.getElementById("yearOfStd").value;

       var schoolNm = document.getElementById("schoolNm");
       var schoolNmc = school +" secondary school";
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
        var cYear = document.getElementById("cYear");
        studentComm = document.getElementById("studentComm");
        remarkComm = document.getElementById("remarkComm");


       
       schoolNm.innerText = schoolNmc;
       teacherName.innerText = name;
       //lessonSubject.innerText = subject;
       teacherInfo.innerText =`${subject}`;
       lessonPeriod.innerText = period;
       studentClass.innerText = subClasses;
       streams.innerText = subStreams;
       lessonDate.innerText = subDate;
       //sylbsMntp.innerText = topicLesson; 
       sylbsSbtp.innerText = subTopiclesson; 
       cYear.innerText = yearOfStd;
       //sylbstlads.innerText = aidsLesson; 
       sylbsMts.innerText = tlmaterials; 
       sylbsRfrs.innerText = refLesson; 
       flReg.innerText = femaleReg; 
       mlReg.innerText = maleReg; 
       flPr.innerText = femalePres; 
       mlPr.innerText = malePres; 
       flAb.innerText = femaleReg - femalePres;
       mlAb.innerText = maleReg - malePres;
       stRegt.innerText = parseInt(femaleReg) + parseInt(maleReg);
       stPrt.innerText = parseInt(femalePres) + parseInt(malePres);
       stAbt.innerText = (femaleReg - femalePres )+ (maleReg - malePres );
       //var underStd = parseInt(stdUnderstood);
       //var underStdPrc = ((parseInt(stdUnderstood)/(parseInt(femalePres) + parseInt(malePres)))*100).toFixed(1)+"%";
       //var notUnderstd = (parseInt(femalePres) + parseInt(malePres))-parseInt(stdUnderstood);
       //var notUnderstdprs = ((1 - (parseInt(stdUnderstood)/(parseInt(femalePres) + parseInt(malePres))))*100).toFixed(1) +"%";

     if (subject === "Kiswahili" || subject === "Elimu Ya Dini Ya Kiislam") {
         var schoolNm = document.getElementById("schoolNm");
         var muda = document.getElementById("muda");
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
         var jinsia = document.getElementById("jinsia");
         var hawapo = document.getElementById("hawapo");
         var sajiliwa = document.getElementById("sajiliwa");
         var fika = document.getElementById("fika");
         var wasichana = document.getElementById("wasichana");
         var wavulana = document.getElementById("wavulana");
         var jumla = document.getElementById("jumla");
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


         schoolNm.innerText = schoolNmc;
         andalio.innerText = "andalio la somo";
        // somo.innerText = "somo";
         darasa.innerText = "darasa";
         mkondo.innerText = "mkondo";
         kipindi.innerText = "kipindi";
         ujuzi.innerText = "umahiri Mkuu";
         lengoKuu.innerText = "Umahiri Mahususi";
         //madaKuu.innerText = "mada kuu";
         madaNdogo.innerText = "Shughuli Kuu";
         jinaMwalimu.innerText = "jina La Mwalimu";
         lengoMahususi.innerText = "Shughuli Mahususi";
         tarehe.innerText = "tarehe";
         kichwaHabari.innerText = "Hatua za kufundishia na kujifunzia"
         //vifaa.innerText ="zana za kujifunzia";
         nukuu.innerText = "zana za kufundishia";
         rejea.innerText = "rejea";
         idadi.innerText ="idadi";
         jinsia.innerText ="jinsia";
         fika.innerText = "walio hudhuria";
         hawapo.innerText = "wasio hudhuria";
         sajiliwa.innerText ="Walio andikishwa";
         wasichana.innerText = "wasichana";
         wavulana.innerText = "wavulana";
         jumla.innerText = "jumla";
         hatua.innerText = "hatua";
         mwalimu.innerText = "vitendo vya ufundishaji";
         mwanafunzi.innerText = "vitendo vya ujifunzaji";
         angalia.innerText = "vitendo vya upimaji";
         mwanzo.innerText = "utangulizi";
         mpya.innerText ="Kuendeleza ujenzi wa umahiri";
         kuimarisha.innerText = "kubuni";
         tafakari.innerText = "tathmini";
         //hitimisho.innerText = "hitimisho";
         //tathMwanafunzi.innerText = "tahmini ya Mwanafunzi :";
         //tathMwalimu.innerText = "tathmini ya mwalimu :";
         maoni.innerText = "maoni :";
         muda.innerText = "muda";

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

       sylbsCmp.innerText = "somo la kiswahili "+ subNewClass +",linatazamiwa kumpatia mwanafunzi ujuzi wa " + topicLesson; 
       sylbsMnObj.innerText = "inatazamiwa kuwa mwanafunzi amalizapo "+ subNewClass + ",ataweza " + subTopiclesson; 
       sylbsSpobj.innerText = "mwishoni mwa kipindi kila mwanafunzi aweze "  + subTopiclesson; 
       
       sylbsCmp.innerText = "Demostrate an understanding of " + subTopiclesson ; 
       sylbsMnObj.innerText = "Demstrate mastery of "+ topicLesson ; 
       sylbsSbtp.innerText = wrdImp2 + " " + subTopiclesson; 
       sylbsSpobj.innerText = wrdImp2 + " " + specificLesson;
       
       remarkComm.innerText ="Somo limeeleweka vizuri hivyo nitaendelea na sehemu inayofuata kipindi kijacho";

       /*studentComm.innerText ="Somo limeeleweka vizuri na mwanafunzi,kwa kuwa ameshiriki vizuri " + wrdImp2 +" "+ specificLesson;
       if (parseInt(stdUnderstood) === (parseInt(femalePres) + parseInt(malePres))) {
        lessonComment.innerText = "somo limeelewekana wanafunzi "+ underStd +" (" + underStdPrc +")";
       } else if(notUnderstd === 1) { 
       lessonComment.innerText = "somo limeeleweka na wanafunzi " + underStd + " (" + underStdPrc + ") na mwanafunzi " + notUnderstd + "  (" + notUnderstdprs + ") amepatiwa zoezi kwa ujifunzanzi wa ziada";
       } else { 
       lessonComment.innerText = "somo limeeleweka na wanafunzi " + underStd + " (" + underStdPrc + ") na wanafunzi " + notUnderstd + "  (" + notUnderstdprs + ") wamepatiwa zaezi kwa ujifunzaji wa ziada";
       }*/

       if(wrdImp1 === "Endelea") {
        intro1.innerText = "kuuliza maswali juu ya somo lililopita";
        intro2.innerText = "mwanafunzi kutoa majibu ya maswali ya yanayoulizwa kwa mdomo ";
        intro3.innerText = "kuangalia kama mwanafunzi anaweza kutoa majibu kwa usahihi";

       }else {
        intro1.innerText = "Mwalimu kutambulisha somo jipya kwa kuuliza mwaswali kuhusu " + specificLesson;
        intro2.innerText = "mwanafunzi kkujibu maswali yanayoulizwa kuhusu " + specificLesson ;
        intro3.innerText = "kuangaliakama mwanafunzia anaweza kutoa majibu kwa usahihi";
       }

       new1.innerText = "mwalimu kumuelekeza mwanafunzi " + wrdImp2 +" "+ specificLesson;
       new2.innerText = "mwanfunzi " + wrdImp2 +" " + specificLesson;
       new3.innerText = "kuangalia  kama mwanafunzi anaweza "+ wrdImp2 +" "+ specificLesson;

       rein1.innerText = "mwalimu kuwaelekeza wanafunzi kwenye kundi kujadili jinsi ya " + wrdImp2 +" "+ specificLesson;
       rein2.innerText = "wanafunzi kwenye makundi kujadili jinsi ya " + wrdImp2 +" "+ specificLesson;
       rein3.innerText = "kuangalia kama mwanafunzi anaweza kwenye kundi anaweza kujadili jinsi ya "+ wrdImp2 +" "+ specificLesson;

       reflect1.innerText = "Mwalimu kumpa nafasi kila mwanafunzi kuhusianisha alichojifunza kuhusu "+ wrdImp2 +" "+ specificLesson+" na mazingira halisia";
       reflect2.innerText = "mwanafunzi kuhusianisha alichojifunza kuhusu "+ wrdImp2 +" "+ specificLesson + " na mazingira halisia";
       reflect3.innerText = "kuangalia majibu yake";

       //conso1.innerText = "mwalimu kuuliza maswali machache na kufanya marejeo ya somo kwa uchache kuhusu " + specificLesson;
       //conso2.innerText = "mwanafunzi kujibu maswali machache yalioulizwa na kuandika nukuu chache za marejeo  ya somo kuhusu " + specificLesson;
       //conso3.innerText = "kuangalia kama anaweza kujibu maswali kwa usahihi na kuchukua nukuu chache za marejeo ya somo";
       if(period === "1 & 2" || period === "3 & 4" || period === "5 & 6" || period === "6 & 7" ||period === "8 & 9" ) {

         introCont.innerText =" (dakika 10) ";
         newKnow.innerText =" (dakika 40) ";
         reinCont.innerText =" (dakika 15) ";
         refleCont.innerText =" (dakika 15) ";
         //consoCont.innerText =" (dakika 5)";

         if(period === "1 & 2") {
            lessonTime.innerText = "08:00 Asub - 09:20 Asub";
         } else if( period === "3 & 4") {
            lessonTime.innerText = "09:20 Asub - 10:40 Asub";
         } else if( period === "5 & 6") {
            lessonTime.innerText = "11:00 Asub - 12:20 Mchan";
         } else if( period === "6 & 7") {
            lessonTime.innerText = "11:40 Asub - 13:00 Mchan";
         } else if( period === "8 & 9") {
            lessonTime.innerText = "13:10 Mchan - 14:30 Mchan";
         }

       } else if(period === "5" || period === "6" || period === "7" || period === "8" || period === "9" )  {
            
        introCont.innerText =" (dakika 5) ";
        newKnow.innerText =" (dakika 15) ";
        reinCont.innerText =" (dakika 10) ";
        refleCont.innerText =" (dakika 10) ";
        //consoCont.innerText =" (dakika 5)";
        if(period === "5") {
         lessonTime.innerText = "11:00 Asub - 11:40 Asub";
        } else if(period === "6") {
         lessonTime.innerText = "11:40 Asub - 12:20 Mchan";
        } else if(period === "7") {
         lessonTime.innerText = "12:20 Mchan - 13:00 Mchan";
        } else if(period === "8") {
         lessonTime.innerText = "13:10 Mchan - 13:50 Mchan";
        }  else if(period === "9") {
         lessonTime.innerText = "13:50 Mchan - 14:30 Mchan";
        }

       } else {
         lessonTime.innerText = " ";
       }

     } else { 
       sylbsCmp.innerText = "Demostrate an understanding of " + subTopiclesson ; 
       sylbsMnObj.innerText = "Demostrate mastery of "+ topicLesson ; 
       sylbsSbtp.innerText = wrdImp2 + " " + subTopiclesson; 
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
        intro2.innerText = "observing the materials and responding to the questions";
        intro3.innerText = "Questions about previous lesson are answered";

       }else {
        intro1.innerText = "providing the teaching aid and question about  " + specificLesson;
        intro2.innerText = "Observing the teaching aid and respond to the question on " + specificLesson + " asked";
        intro3.innerText = "Questions about "+ specificLesson + " are answered";
       }

       new1.innerText = "provide student with " + specificLesson + " teaching aids and ask them in groups to " + wrdImp2 + " " + specificLesson;
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
       if(period === "1 & 2" || period === "3 & 4" || period === "5 & 6" || period === "6 & 7" ||period === "8 & 9" ) {

         introCont.innerText =" (10 Minutes) ";
         newKnow.innerText =" (40 Minutes) ";
         reinCont.innerText =" (15 Minutes) ";
         refleCont.innerText =" (15 Minutes) ";
         //consoCont.innerText =" (5 Minutes)";

         if(period === "1 & 2") {
             lessonTime.innerText = "08:00 A.M - 09:20 A.M";
         } else if( period === "3 & 4") {
            lessonTime.innerText = "09:20 A.M - 10:40 A.M";
         } else if( period === "5 & 6") {
            lessonTime.innerText = "11:00 A.M - 12:20 P.M";
         } else if( period === "6 & 7") {
            lessonTime.innerText = "11:40 A.M - 13:00 P.M";
         } else if( period === "8 & 9") {
            lessonTime.innerText = "13:10 P.M - 14:30 P.M";
         }

       } else if(period === "5" || period === "6" || period === "7" || period === "8" || period === "9" )  {

         introCont.innerText =" (5 Minutes) ";
         newKnow.innerText =" (15 Minutes) ";
         reinCont.innerText =" (10 Minutes) ";
         refleCont.innerText =" (10 Minutes) ";
         //consoCont.innerText =" (5 Minutes)";
        if(period === "5") {
         lessonTime.innerText = "11:00 A.M - 11:40 A.M";
        } else if(period === "6") {
         lessonTime.innerText = "11:40 A.M - 12:20 P.M";
        } else if(period === "7") {
         lessonTime.innerText = "12:20 P.M - 13:00 P.M";
        } else if(period === "8") {
         lessonTime.innerText = "13:10 P.M - 13:50 P.M";
        } else if(period === "9") {
         lessonTime.innerText = "13:50 P.M - 14:30 P.M";
        }

       } else {
         lessonTime.innerText = " ";
       }
    }
    }
