(function() {
if ( window.location.href !== "https://www.academixpoint.com/p/create-lesson-plan.html#" && window.location.href !== "https://www.academixpoint.com/p/create-lesson-plan.html?m=1" && window.location.href !== "https://www.academixpoint.com/p/create-lesson-plan.html?m=1#" && window.location.href !== "https://www.academixpoint.com/p/create-lesson-plan.html" ) {
      console.error("Just Your Domain has problem, Can work with this codes!Try another way to make it run.. Thanks 'AcademixPoint'");
      document.body.innerHTML = "";
      throw new Error("Unauthorized script execution");
  } 
  
  if (window.top !== window.self) {
    console.error("Blocked from running in an iframe!");
    document.body.innerHTML = "";
    throw new Error("Script blocked due to iframe embedding");
}



lessonplanSubmit.addEventListener('click', function(mySb) {
    mySb.preventDefault(); 

   
    if (!validateFields()) {
        console.error("Please fill in all required fields.");
        alert("Make sure You Fill all required selection and space and then click 'SUBMIT'");
        return; 
    }

    
    updateContent();

    var endContentAds = document.getElementById("endContentAds");
    endContentAds.style.display="block";
    userLoad.style.textTransform="capitalize";
    userLoad.style.fontSize="16px";
    userLoad.style.fontWeight="bolder";
    userLoad.style.fontFamily="verdana";
    document.getElementById('downloadPdfBtn').style.display="block";
    document.getElementById('downloadPdfBtn').addEventListener('click',downloadDocument)  
});

function validateFields() {
    const yearOfStd = document.getElementById("yearOfStd").value;
    const school = document.getElementById("school").value;
    const teacherName = document.getElementById("teacherName").value;
    const date = document.getElementById("date").value;
    const subject = document.getElementById("subject").value;
    const classes = document.getElementById("classes").value;
    const streams = document.getElementById("streams").value;
    const period = document.getElementById("period").value;
    const femaleReg = document.getElementById("femaleReg").value;
    const maleReg = document.getElementById("maleReg").value;
    const femalePres = document.getElementById("femalePres").value;
    const malePres = document.getElementById("malePres").value;
    const specificLesson = document.getElementById("specificLesson").value;
    const tlmaterials = document.getElementById("tlmaterials").value;
    const wrdImp1 = document.getElementById("wrdImp1").value;
    const wrdImp2 = document.getElementById("wrdImp2").value;

    if (
        !yearOfStd || !school || !teacherName || !date || !subject || !classes || 
        !streams || !period || !femaleReg || !maleReg || !femalePres || !malePres || 
        !specificLesson || !tlmaterials || !wrdImp1 || !wrdImp2
    ) {
        return false; 
    }
    return true; 
}


function userLoadd() {
    document.getElementById("wordToshow").innerText="Thanks!  Your lesson plan will download shortly, please be patient";
    document.getElementById("videoDiv").style.display="block";
    document.getElementById("adDiv").style.display="none";
    document.getElementById("refreshBtn").style.display="block";
    document.getElementById('downloadPdfBtn').style.display="block";
    document.getElementById('downloadPdfBtn').innerText="download lesson plan again";
    document.getElementById("gotoEdit").style.display="none";
}
 function downloadDocument() {
const lessonTemp = document.getElementById('lessonTemp');
let defaultName1 = "Downloaded Lesson Plan";
let defaultName = defaultName1.trim().replace(/\s+/g, "_") ;
let documentName = prompt("WEKA JINA LA LESSON PLAN (Mfano : Mr. nmgai subject topic 1). HALAFU BONYEZA 'OK' KUENDELEA",defaultName1);
    documentName = documentName.trim().replace(/\s+/g, "_");
const finalName = documentName.trim() === "" ? defaultName : documentName; 
document.getElementById("refreshBtn").addEventListener('click', function(nmRf) {
nmRf.preventDefault();
window.location.href ="https://www.academixpoint.com/p/create-lesson-plan";
});
html2pdf()
    .from(lessonTemp)
    .set({filename: `${finalName}.Pdf`})
    .save();
document.getElementById('downloadPdfBtn').style.display="none";
userLoadd()

};
})();
