
lessonplanSubmit.addEventListener('click',function(mySb){
    mySb.preventDefault();
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
