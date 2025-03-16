(function() {
  const allowedHost = "https://www.academixpoint.com/p/create-lesson-plan.html?m=1";

if ( window.location.hostname !== allowedHost) {
      console.error("Just Your Domain has problem, Can work with this codes!Try another way to make it run.. Thanks 'AcademixPoint'");
      document.body.innerHTML = "";
      throw new Error("Unauthorized script execution");
  }
  


    
    document.getElementById("showpopUp").addEventListener("click",function(e){
        e.preventDefault();
        document.getElementById("backpop").style.display="block";
        document.getElementById("popUp").style.display="block";
        var subject =document.getElementById("subject").value;
        if(subject === "Chemistry") {
         var name = document.getElementById("teacherName").value;
         var popHd = document.getElementById("popHd");
         var newSrc ="https://drive.google.com/file/d/1_T6fUm2Agjwb3TlVfGI-j4yfmZI8SROu/preview";
         popHd.innerText =`Hello "${name}"  Welcome NMG AI Lesson Plan Creator, Here you can check "${subject}" Syllabus!`;
         document.getElementById("pdfIframe").src = newSrc;
        } else if (subject === "Biology"){
         var name = document.getElementById("teacherName").value;
         var popHd = document.getElementById("popHd");
         var newSrc ="https://drive.google.com/file/d/1d9sly7zlSraZAkt8DzkU8XFEeUPld0BY/preview";
         popHd.innerText =`Hello "${name}"  Welcome NMG AI Lesson Plan Creator, Here you can check "${subject}" Syllabus!`;
         document.getElementById("pdfIframe").src = newSrc;
        } else if (subject === "Kiswahili"){
         var name = document.getElementById("teacherName").value;
         var popHd = document.getElementById("popHd");
         var newSrc ="https://drive.google.com/file/d/10XnmivvKyBWS4b1NcwdyUZ-3HGI6VSE6/preview";
         popHd.innerText =`Hello "${name}"  Welcome NMG AI Lesson Plan Creator, Here you can check "${subject}" Syllabus!`;
         document.getElementById("pdfIframe").src = newSrc;
        } else if (subject === "Geography"){
         var name = document.getElementById("teacherName").value;
         var popHd = document.getElementById("popHd");
         var newSrc ="https://drive.google.com/file/d/1EU1Avj8oLDJ7iUoLsWku-L7238f71JgL/preview";
         popHd.innerText =`Hello "${name}"  Welcome NMG AI Lesson Plan Creator, Here you can check "${subject}" Syllabus!`;
         document.getElementById("pdfIframe").src = newSrc;
        }else if (subject === "Physics"){
         var name = document.getElementById("teacherName").value;
         var popHd = document.getElementById("popHd");
         var newSrc ="https://drive.google.com/file/d/1AEmAs5RXwdXONuvemHE_rCLf1fCWQPWN/preview";
         popHd.innerText =`Hello "${name}"  Welcome NMG AI Lesson Plan Creator, Here you can check "${subject}" Syllabus!`;
         document.getElementById("pdfIframe").src = newSrc;
        } else if (subject === "English"){
         var name = document.getElementById("teacherName").value;
         var popHd = document.getElementById("popHd");
         var newSrc ="https://drive.google.com/file/d/1jpFrODH_Q6-PzoZLSEkIlz1BvWP3bDeH/preview";
         popHd.innerText =`Hello "${name}"  Welcome NMG AI Lesson Plan Creator, Here you can check "${subject}" Syllabus!`;
         document.getElementById("pdfIframe").src = newSrc;
        } else if (subject === "Mathematics"){
         var name = document.getElementById("teacherName").value;
         var popHd = document.getElementById("popHd");
         var newSrc ="https://drive.google.com/file/d/1lui7YHDgOEY4pTUxFTIejdp8WHsJKEBr/preview";
         popHd.innerText =`Hello "${name}"  Welcome NMG AI Lesson Plan Creator, Here you can check "${subject}" Syllabus!`;
         document.getElementById("pdfIframe").src = newSrc;
        } else if (subject === "Civics"){
         var name = document.getElementById("teacherName").value;
         var popHd = document.getElementById("popHd");
         var newSrc ="https://drive.google.com/file/d/1-Fm0sypBJm-COl3Fw7_tp0OB1Bfaip4_/preview";
         popHd.innerText =`Hello "${name}"  Welcome NMG AI Lesson Plan Creator, Here you can check "${subject}" Syllabus!`;
         document.getElementById("pdfIframe").src = newSrc;
        } else if (subject === "History"){
         var name = document.getElementById("teacherName").value;
         var popHd = document.getElementById("popHd");
         var newSrc ="https://drive.google.com/file/d/1YUoez-ewcOgEfsirDTXqQmDKwknrCrq5/preview";
         popHd.innerText =`Hello "${name}"  Welcome NMG AI Lesson Plan Creator, Here you can check "${subject}" Syllabus!`;
         document.getElementById("pdfIframe").src = newSrc;
        } else if (subject === "Commerce"){
         var name = document.getElementById("teacherName").value;
         var popHd = document.getElementById("popHd");
         var newSrc ="https://drive.google.com/file/d/1vPgcC6SPBsivHN2kjwgTSZS9pQ7N_Gr_/preview";
         popHd.innerText =`Hello "${name}"  Welcome NMG AI Lesson Plan Creator, Here you can check "${subject}" Syllabus!`;
         document.getElementById("pdfIframe").src = newSrc;
        } else if (subject === "Book-Keeping"){
         var name = document.getElementById("teacherName").value;
         var popHd = document.getElementById("popHd");
         var newSrc ="https://drive.google.com/file/d/1RDhht4g_3zV7yJWg6IjqAH2h-zQYYgDC/preview";
         popHd.innerText =`Hello "${name}"  Welcome NMG AI Lesson Plan Creator, Here you can check "${subject}" Syllabus!`;
         document.getElementById("pdfIframe").src = newSrc;
        }
     });
     
     document.getElementById("closeTab").addEventListener("click",function(e){
      e.preventDefault();
      closeWindow();
 
     });
     document.getElementById("backpop").addEventListener("click",function(e){
       if(e.target === this) {
         closeWindow();
       }
     });
     function closeWindow(){
         document.getElementById("backpop").style.display="none";
        document.getElementById("popUp").style.display="none";
     }
    document.getElementById("gotoEdit").addEventListener("click",function(e){
      e.preventDefault();
      closeToEdit()
 
    });
    function closeToEdit() {
     document.getElementById("endContentAds").style.display="none";
 
    }
     
 document.getElementById("teachlink1").addEventListener('click',function (e) {
         e.preventDefault();
         document.getElementById("videpop").style.display="block";
         document.getElementById("videPopUp").style.display="block";
         var videIframe =document.getElementById("videIframe");
         videIframe.src ="https://www.youtube.com/embed/StKAabMAJtI?si=StKAabMAJtI?autoplay=1";
 
     });
document.getElementById("syllalink2").addEventListener('click',function (e) {
         e.preventDefault();
         document.getElementById("videpop").style.display="block";
         document.getElementById("videPopUp").style.display="block";
         var videIframe =document.getElementById("videIframe");
         videIframe.src ="https://www.youtube.com/embed/StKAabMAJtI?si=StKAabMAJtI?autoplay=1";
 
     });
     
document.getElementById("studlink1").addEventListener('click',function (e) {
         e.preventDefault();
         document.getElementById("videpop").style.display="block";
         document.getElementById("videPopUp").style.display="block";
         var videIframe =document.getElementById("videIframe");
         videIframe.src ="https://www.youtube.com/embed/StKAabMAJtI?si=StKAabMAJtI?autoplay=1";
 
     });
     
document.getElementById("lesslink1").addEventListener('click',function (e) {
         e.preventDefault();
         document.getElementById("videpop").style.display="block";
         document.getElementById("videPopUp").style.display="block";
         var videIframe =document.getElementById("videIframe");
         videIframe.src ="https://www.youtube.com/embed/StKAabMAJtI?si=StKAabMAJtI?autoplay=1";
 
     });
     document.getElementById("videCloseTab").addEventListener("click",function(e){
        e.preventDefault();
        closeVideoWindow();
   
       });
       document.getElementById("videpop").addEventListener("click",function(e){
         if(e.target === this) {
            closeVideoWindow();
         }
       });
       function closeVideoWindow(){
        document.getElementById("videpop").style.display="none";
        document.getElementById("videPopUp").style.display="none";
       }})();
