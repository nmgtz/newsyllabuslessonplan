document.getElementById("showpopUp").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("backpop").style.display="block";
    document.getElementById("popUp").style.display="block";
    var subject =document.getElementById("subject").value;
    var name = document.getElementById("teacherName").value;
    var popHd = document.getElementById("popHd");

    var chem ="https://drive.google.com/file/d/1_T6fUm2Agjwb3TlVfGI-j4yfmZI8SROu/preview";
      
    var bio ="https://drive.google.com/file/d/1d9sly7zlSraZAkt8DzkU8XFEeUPld0BY/preview";
          
    var kisw ="https://drive.google.com/file/d/10XnmivvKyBWS4b1NcwdyUZ-3HGI6VSE6/preview";
         
    var geo ="https://drive.google.com/file/d/1EU1Avj8oLDJ7iUoLsWku-L7238f71JgL/preview";
          
    var phy ="https://drive.google.com/file/d/1AEmAs5RXwdXONuvemHE_rCLf1fCWQPWN/preview";
        
    var eng ="https://drive.google.com/file/d/1jpFrODH_Q6-PzoZLSEkIlz1BvWP3bDeH/preview";
          
    var math ="https://drive.google.com/file/d/1lui7YHDgOEY4pTUxFTIejdp8WHsJKEBr/preview";
         
    var civ ="https://drive.google.com/file/d/1-Fm0sypBJm-COl3Fw7_tp0OB1Bfaip4_/preview";
         
    var hist ="https://drive.google.com/file/d/1YUoez-ewcOgEfsirDTXqQmDKwknrCrq5/preview";
          
    var com ="https://drive.google.com/file/d/1vPgcC6SPBsivHN2kjwgTSZS9pQ7N_Gr_/preview";
         
    var bk ="https://drive.google.com/file/d/1RDhht4g_3zV7yJWg6IjqAH2h-zQYYgDC/preview";
        
   

    var newSrc = subject === "Chemistry" ? chem
    : subject === "Biology" ? bio
    : subject === "Kiswahili" ? kisw
    : subject === "Geography" ? geo
    : subject === "Physics" ? phy
    : subject === "English" ? eng
    : subject === "Basic Mathematics" ? math
    : subject === "Civics" ? civ
    : subject === "History" ? hist
    : subject === "Commerce" ? com
    : subject === "Book-Keeping" ? bk
    : null;

    if (newSrc) {
        popHd.innerText =`Hello "${name}"  Welcome ACADEMIXPOINT Lesson Plan Creator Powered by NMG AI, Here you can check "${subject}" Syllabus!`;
        document.getElementById("pdfIframe").src = newSrc;
    }  else {
            popHd.innerText = `Hey "${name}", the "${subject}" syllabus isn't uploaded yet. We're working on it—thanks for your patience!`;
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
       videIframe.src ="https://www.youtube.com/embed/oUwwtDtOn2M?si=3AV6wLhyjHyqfZA1?autoplay=1";

   });
document.getElementById("syllalink2").addEventListener('click',function (e) {
       e.preventDefault();
       document.getElementById("videpop").style.display="block";
       document.getElementById("videPopUp").style.display="block";
       var videIframe =document.getElementById("videIframe");
       videIframe.src ="https://www.youtube.com/embed/oUwwtDtOn2M?si=3AV6wLhyjHyqfZA1?autoplay=1";

   });
   
document.getElementById("studlink1").addEventListener('click',function (e) {
       e.preventDefault();
       document.getElementById("videpop").style.display="block";
       document.getElementById("videPopUp").style.display="block";
       var videIframe =document.getElementById("videIframe");
       videIframe.src ="https://www.youtube.com/embed/oUwwtDtOn2M?si=3AV6wLhyjHyqfZA1?autoplay=1";

   });
   
document.getElementById("lesslink1").addEventListener('click',function (e) {
       e.preventDefault();
       document.getElementById("videpop").style.display="block";
       document.getElementById("videPopUp").style.display="block";
       var videIframe =document.getElementById("videIframe");
       videIframe.src ="https://www.youtube.com/embed/oUwwtDtOn2M?si=3AV6wLhyjHyqfZA1?autoplay=1";

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
     }
