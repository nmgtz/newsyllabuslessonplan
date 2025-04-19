
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
    const hourCodes = document.getElementById("hourCodes").value;
    const minCodes = document.getElementById("minCodes").value;
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
        !hourCodes || !minCodes || !school || !teacherName || !date || !subject || !classes || 
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
let subjectLook = document.getElementById('subject')?.value || "Downloaded" ;
let activityLook = document.getElementById('specificLesson')?.value || "Lesson Plan";
let defaultName1 = `${subjectLook} ${activityLook}`;
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
  .set({
    filename: `${finalName}.pdf`,
    html2canvas: {
      scale: 4,
      useCORS: true
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  })
  .outputPdf('blob')
  .then(blob => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${finalName}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  });

document.getElementById('downloadPdfBtn').style.display="none";
userLoadd()

};
