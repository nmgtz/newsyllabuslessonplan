(function() {
  if ( window.location.href !== "https://www.academixpoint.com/p/create-english-medium-lesson-plans.html#" && window.location.href !== "https://www.academixpoint.com/p/create-english-medium-lesson-plans.html?m=1" && window.location.href !== "https://www.academixpoint.com/p/create-english-medium-lesson-plans.html?m=1#" && window.location.href !== "https://www.academixpoint.com/p/create-english-medium-lesson-plans.html" ) {
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

//THIS IS HELPER FUNCTION FOR POPULATINGTHINGS IN OPTIONS

  function dopopOpts(selectElement, optionsArray) {
    optionsArray.forEach(option => {
      const opt = document.createElement("option");
      opt.value = option.value;
      opt.textContent = option.value;
      selectElement.appendChild(opt);
    });
  }

  if (subClasses === "Pre-Primary") {
  if (subject === "Early Arithmetic, Science and ICT skills") {
var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Sing"},
      { value: "Recite poems"},
      { value: "Recite ngonjera"},
      { value: "Act"},
      { value: "Play musical instruments"},
      { value: "Dance"},
      { value: "Create objects"},
      { value: "Draw pictures and shapes"},
      { value: "Weave articles"},
      { value: "Thread objects"},
      { value: "Play games that involve small muscles"},
      { value: "Play games that involve large muscles"},
      { value: "Create sports materials"},
      { value: "Identify National symbols"},
      { value: "Identify the National virtues (patriotism, accountability, National language)"},
      { value: "Describe the union between Tanganyika and Zanzibar"},
      { value: "Name the national leaders"},
      { value: "Identify the types of food available in one’s community"},
      { value: "Identify the types of food available in a different community"},
      { value: "Identify Tanzanian garments worn in various contexts"},
      { value: "Show various garments worn in one’s community"},
      { value: "Identify one’s faith"},
      { value: "Identify religious acts"},
      { value: "Identify other people’s faiths"},
      { value: "Collaborate in social activities"},
      { value: "Distinguish sounds and voices in one’s environment"},
      { value: "Follow the given instructions"},
      { value: "Listen to stories"},
      { value: "Narrate various events"},
      { value: "Ask and solve riddles"},
      { value: "Sing"},
      { value: "Tell Stories"},
      { value: "Use early reading skills"},
      { value: "Observe pictures"},
      { value: "Pronounce first sounds of names of pictures/words/ objects"},
      { value: "Relate sounds with letter shapes"},
      { value: "Read syllables and words"},
      { value: "Follow the stages of writing letters"},
      { value: "Write letters"},
      { value: "Greet and bid farewell"},
      { value: "Observe the principles of communication"},
      { value: "Talk about oneself in variouscontexts"},
      { value: "Introduce oneself and others"},
      { value: "Demonstrate acts of good behaviour"},
      { value: "Identify one’s rights and responsibilities"},
      { value: "Identify works done by family members and other people"},
      { value: "Mention things he/she likes and dislikes"},
      { value: "Explain how to control feelings"},
      { value: "Do actions that communicate feelings"},
      { value: "Do acts of selfreliance"},
      { value: "Arrange objects in a correct order"},
      { value: "Collaborate in various contexts"},
      { value: "Taking turns in play and different activitie"},
      { value: "Play games that develop the skills of solving challenges"},
      { value: "Demonstrate how to deal with challenges"},
      { value: "Use ICT to solve problems"},
      { value: "Identify parts of the body and their functions"},
      { value: "Clean the body"},
      { value: "Care for clothes"},
      { value: "Identify different types of food"},
      { value: "Explain table manners"},
      { value: "Preserve food"},
      { value: "Use food utensils"},
      { value: "Do the dishes"},
      { value: "Keep the dishes"},
      { value: "Mention objects found in the environment"},
      { value: "Distinguish objects found in the environment"},
      { value: "Do cleanliness in his/her environment"},
      { value: "Explain the impact of unclean environment"},
      { value: "Identify risky behaviours"},
      { value: "Identify risky environments"},
      { value: "Demonstrate how to avoid risky environments"},
      { value: "Identify safety signs in one’s environment"},
      { value: "Identify infectious diseases"},
      { value: "Protect oneself against diseases"},
      { value: "Identify objects that develop the concept of number in the environment"},
      { value: "Identify figures"},
      { value: "Sort things based on their characteristics"},
      { value: "Identify measurements"},
      { value: "Count numbers 1-20"},
      { value: "Write numbers 1-20"},
      { value: "Add using real objects and ICT"},
      { value: "Subtract using real objects and ICT"},
      { value: "Identify the Tanzanian banknotes and coins"},
      { value: "Observe things in the surrounding environment"},
      { value: "Do simple scientific experiments"},
      { value: "Identify ICT tools"},
      { value: "Create various ICT models"},
      { value: "Use a computer to perform various activities"},
      { value: "Use various ICT tools"},
      
  ];
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Perform theatre arts"},
      { value: "Create handmade works of arts"},
      { value: "Use creative skills that involve body movements"},
      { value: "Appreciate National symbols and virtues"},
      { value: "Appreciate Tanzanian food"},
      { value: "Appreciate Tanzanian garments"},
      { value: "Demonstrate religious acts based on one’s faith"},
      { value: "Respect other people’s faiths"},
      { value: "Listen in various contexts"},
      { value: "Converse in various contexts"},
      { value: "Read at early stages"},
      { value: "Write at early stages"},
      { value: "Communicate in various contexts"},
      { value: "Value oneself and others"},
      { value: "Control feelings in different contexts"},
      { value: "Demonstrate mastery of the skills of self-reliance"},
      { value: "Demonstrate mastery of the skills for collaboration"},
      { value: "Solve challenges in daily life"},
      { value: "Take care of the body"},
      { value: "Appreciate different types of food"},
      { value: "Keep the dishes"},
      { value: "Observing things found in the environment"},
      { value: "Clean the environment"},
      { value: "Avoid risky environment"},
      { value: "Take precaution against various diseases"},
      { value: "Use the environment to develop arithmetic concepts and critical thinking"},
      { value: "Do scientific experiments"},
      { value: "Use ICT tools to communicate in various contexts"},
      
  ];
  var topicsOptions = [
      { value: "Select main competence"},
      { value: "Demonstrate mastery of the skills of arts, creativity and sports"},
      { value: "Appreciate the culture of one’s community, religious education and National virtues"},
      { value: "Demonstrate mastery of early language and communication on skills"},
      { value: "Relate with one another"},
      { value: "Take care of health and environment"},
      { value: "Use early numeracy skills, science and ICT"},
      
      
  ];
  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute of Education. (2023). Early Arithmetic, Science and ICT skills, Child's Book Pre-primary Class. Tanzania Institute of Education."},
      
  ];

} else if ( subject === "Early Literacy Skills") {
  var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Sing"},
      { value: "Recite poems"},
      { value: "Recite ngonjera"},
      { value: "Act"},
      { value: "Play musical instruments"},
      { value: "Dance"},
      { value: "Create objects"},
      { value: "Draw pictures and shapes"},
      { value: "Weave articles"},
      { value: "Thread objects"},
      { value: "Play games that involve small muscles"},
      { value: "Play games that involve large muscles"},
      { value: "Create sports materials"},
      { value: "Identify National symbols"},
      { value: "Identify the National virtues (patriotism, accountability, National language)"},
      { value: "Describe the union between Tanganyika and Zanzibar"},
      { value: "Name the national leaders"},
      { value: "Identify the types of food available in one’s community"},
      { value: "Identify the types of food available in a different community"},
      { value: "Identify Tanzanian garments worn in various contexts"},
      { value: "Show various garments worn in one’s community"},
      { value: "Identify one’s faith"},
      { value: "Identify religious acts"},
      { value: "Identify other people’s faiths"},
      { value: "Collaborate in social activities"},
      { value: "Distinguish sounds and voices in one’s environment"},
      { value: "Follow the given instructions"},
      { value: "Listen to stories"},
      { value: "Narrate various events"},
      { value: "Ask and solve riddles"},
      { value: "Sing"},
      { value: "Tell Stories"},
      { value: "Use early reading skills"},
      { value: "Observe pictures"},
      { value: "Pronounce first sounds of names of pictures/words/ objects"},
      { value: "Relate sounds with letter shapes"},
      { value: "Read syllables and words"},
      { value: "Follow the stages of writing letters"},
      { value: "Write letters"},
      { value: "Greet and bid farewell"},
      { value: "Observe the principles of communication"},
      { value: "Talk about oneself in variouscontexts"},
      { value: "Introduce oneself and others"},
      { value: "Demonstrate acts of good behaviour"},
      { value: "Identify one’s rights and responsibilities"},
      { value: "Identify works done by family members and other people"},
      { value: "Mention things he/she likes and dislikes"},
      { value: "Explain how to control feelings"},
      { value: "Do actions that communicate feelings"},
      { value: "Do acts of selfreliance"},
      { value: "Arrange objects in a correct order"},
      { value: "Collaborate in various contexts"},
      { value: "Taking turns in play and different activitie"},
      { value: "Play games that develop the skills of solving challenges"},
      { value: "Demonstrate how to deal with challenges"},
      { value: "Use ICT to solve problems"},
      { value: "Identify parts of the body and their functions"},
      { value: "Clean the body"},
      { value: "Care for clothes"},
      { value: "Identify different types of food"},
      { value: "Explain table manners"},
      { value: "Preserve food"},
      { value: "Use food utensils"},
      { value: "Do the dishes"},
      { value: "Keep the dishes"},
      { value: "Mention objects found in the environment"},
      { value: "Distinguish objects found in the environment"},
      { value: "Do cleanliness in his/her environment"},
      { value: "Explain the impact of unclean environment"},
      { value: "Identify risky behaviours"},
      { value: "Identify risky environments"},
      { value: "Demonstrate how to avoid risky environments"},
      { value: "Identify safety signs in one’s environment"},
      { value: "Identify infectious diseases"},
      { value: "Protect oneself against diseases"},
      { value: "Identify objects that develop the concept of number in the environment"},
      { value: "Identify figures"},
      { value: "Sort things based on their characteristics"},
      { value: "Identify measurements"},
      { value: "Count numbers 1-20"},
      { value: "Write numbers 1-20"},
      { value: "Add using real objects and ICT"},
      { value: "Subtract using real objects and ICT"},
      { value: "Identify the Tanzanian banknotes and coins"},
      { value: "Observe things in the surrounding environment"},
      { value: "Do simple scientific experiments"},
      { value: "Identify ICT tools"},
      { value: "Create various ICT models"},
      { value: "Use a computer to perform various activities"},
      { value: "Use various ICT tools"},
      
  ];
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Perform theatre arts"},
      { value: "Create handmade works of arts"},
      { value: "Use creative skills that involve body movements"},
      { value: "Appreciate National symbols and virtues"},
      { value: "Appreciate Tanzanian food"},
      { value: "Appreciate Tanzanian garments"},
      { value: "Demonstrate religious acts based on one’s faith"},
      { value: "Respect other people’s faiths"},
      { value: "Listen in various contexts"},
      { value: "Converse in various contexts"},
      { value: "Read at early stages"},
      { value: "Write at early stages"},
      { value: "Communicate in various contexts"},
      { value: "Value oneself and others"},
      { value: "Control feelings in different contexts"},
      { value: "Demonstrate mastery of the skills of self-reliance"},
      { value: "Demonstrate mastery of the skills for collaboration"},
      { value: "Solve challenges in daily life"},
      { value: "Take care of the body"},
      { value: "Appreciate different types of food"},
      { value: "Keep the dishes"},
      { value: "Observing things found in the environment"},
      { value: "Clean the environment"},
      { value: "Avoid risky environment"},
      { value: "Take precaution against various diseases"},
      { value: "Use the environment to develop arithmetic concepts and critical thinking"},
      { value: "Do scientific experiments"},
      { value: "Use ICT tools to communicate in various contexts"},
      
  ];
  var topicsOptions = [
      { value: "Select main competence"},
      { value: "Demonstrate mastery of the skills of arts, creativity and sports"},
      { value: "Appreciate the culture of one’s community, religious education and National virtues"},
      { value: "Demonstrate mastery of early language and communication on skills"},
      { value: "Relate with one another"},
      { value: "Take care of health and environment"},
      { value: "Use early numeracy skills, science and ICT"},
      
      
  ];
var referenceOptions = [
{ value: "Select Reference"},
{ value: "Tanzania Institute of Education. (2023). Early Literacy Skills, Child's Book Pre-primary Class. Tanzania Institute of Education."},

];

} else if (subject === "Health and Environment") {
var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Sing"},
      { value: "Recite poems"},
      { value: "Recite ngonjera"},
      { value: "Act"},
      { value: "Play musical instruments"},
      { value: "Dance"},
      { value: "Create objects"},
      { value: "Draw pictures and shapes"},
      { value: "Weave articles"},
      { value: "Thread objects"},
      { value: "Play games that involve small muscles"},
      { value: "Play games that involve large muscles"},
      { value: "Create sports materials"},
      { value: "Identify National symbols"},
      { value: "Identify the National virtues (patriotism, accountability, National language)"},
      { value: "Describe the union between Tanganyika and Zanzibar"},
      { value: "Name the national leaders"},
      { value: "Identify the types of food available in one’s community"},
      { value: "Identify the types of food available in a different community"},
      { value: "Identify Tanzanian garments worn in various contexts"},
      { value: "Show various garments worn in one’s community"},
      { value: "Identify one’s faith"},
      { value: "Identify religious acts"},
      { value: "Identify other people’s faiths"},
      { value: "Collaborate in social activities"},
      { value: "Distinguish sounds and voices in one’s environment"},
      { value: "Follow the given instructions"},
      { value: "Listen to stories"},
      { value: "Narrate various events"},
      { value: "Ask and solve riddles"},
      { value: "Sing"},
      { value: "Tell Stories"},
      { value: "Use early reading skills"},
      { value: "Observe pictures"},
      { value: "Pronounce first sounds of names of pictures/words/ objects"},
      { value: "Relate sounds with letter shapes"},
      { value: "Read syllables and words"},
      { value: "Follow the stages of writing letters"},
      { value: "Write letters"},
      { value: "Greet and bid farewell"},
      { value: "Observe the principles of communication"},
      { value: "Talk about oneself in variouscontexts"},
      { value: "Introduce oneself and others"},
      { value: "Demonstrate acts of good behaviour"},
      { value: "Identify one’s rights and responsibilities"},
      { value: "Identify works done by family members and other people"},
      { value: "Mention things he/she likes and dislikes"},
      { value: "Explain how to control feelings"},
      { value: "Do actions that communicate feelings"},
      { value: "Do acts of selfreliance"},
      { value: "Arrange objects in a correct order"},
      { value: "Collaborate in various contexts"},
      { value: "Taking turns in play and different activitie"},
      { value: "Play games that develop the skills of solving challenges"},
      { value: "Demonstrate how to deal with challenges"},
      { value: "Use ICT to solve problems"},
      { value: "Identify parts of the body and their functions"},
      { value: "Clean the body"},
      { value: "Care for clothes"},
      { value: "Identify different types of food"},
      { value: "Explain table manners"},
      { value: "Preserve food"},
      { value: "Use food utensils"},
      { value: "Do the dishes"},
      { value: "Keep the dishes"},
      { value: "Mention objects found in the environment"},
      { value: "Distinguish objects found in the environment"},
      { value: "Do cleanliness in his/her environment"},
      { value: "Explain the impact of unclean environment"},
      { value: "Identify risky behaviours"},
      { value: "Identify risky environments"},
      { value: "Demonstrate how to avoid risky environments"},
      { value: "Identify safety signs in one’s environment"},
      { value: "Identify infectious diseases"},
      { value: "Protect oneself against diseases"},
      { value: "Identify objects that develop the concept of number in the environment"},
      { value: "Identify figures"},
      { value: "Sort things based on their characteristics"},
      { value: "Identify measurements"},
      { value: "Count numbers 1-20"},
      { value: "Write numbers 1-20"},
      { value: "Add using real objects and ICT"},
      { value: "Subtract using real objects and ICT"},
      { value: "Identify the Tanzanian banknotes and coins"},
      { value: "Observe things in the surrounding environment"},
      { value: "Do simple scientific experiments"},
      { value: "Identify ICT tools"},
      { value: "Create various ICT models"},
      { value: "Use a computer to perform various activities"},
      { value: "Use various ICT tools"},
      
  ];
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Perform theatre arts"},
      { value: "Create handmade works of arts"},
      { value: "Use creative skills that involve body movements"},
      { value: "Appreciate National symbols and virtues"},
      { value: "Appreciate Tanzanian food"},
      { value: "Appreciate Tanzanian garments"},
      { value: "Demonstrate religious acts based on one’s faith"},
      { value: "Respect other people’s faiths"},
      { value: "Listen in various contexts"},
      { value: "Converse in various contexts"},
      { value: "Read at early stages"},
      { value: "Write at early stages"},
      { value: "Communicate in various contexts"},
      { value: "Value oneself and others"},
      { value: "Control feelings in different contexts"},
      { value: "Demonstrate mastery of the skills of self-reliance"},
      { value: "Demonstrate mastery of the skills for collaboration"},
      { value: "Solve challenges in daily life"},
      { value: "Take care of the body"},
      { value: "Appreciate different types of food"},
      { value: "Keep the dishes"},
      { value: "Observing things found in the environment"},
      { value: "Clean the environment"},
      { value: "Avoid risky environment"},
      { value: "Take precaution against various diseases"},
      { value: "Use the environment to develop arithmetic concepts and critical thinking"},
      { value: "Do scientific experiments"},
      { value: "Use ICT tools to communicate in various contexts"},
      
  ];
  var topicsOptions = [
      { value: "Select main competence"},
      { value: "Demonstrate mastery of the skills of arts, creativity and sports"},
      { value: "Appreciate the culture of one’s community, religious education and National virtues"},
      { value: "Demonstrate mastery of early language and communication on skills"},
      { value: "Relate with one another"},
      { value: "Take care of health and environment"},
      { value: "Use early numeracy skills, science and ICT"},
      
      
  ];
var referenceOptions = [
{ value: "Select Reference"},
{ value: "Tanzania Institute of Education. (2023). Health and Environment, Child's Book Pre-primary Class. Tanzania Institute of Education."},

];



} else if (subject === "Early Life Skills") {
  var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Sing"},
      { value: "Recite poems"},
      { value: "Recite ngonjera"},
      { value: "Act"},
      { value: "Play musical instruments"},
      { value: "Dance"},
      { value: "Create objects"},
      { value: "Draw pictures and shapes"},
      { value: "Weave articles"},
      { value: "Thread objects"},
      { value: "Play games that involve small muscles"},
      { value: "Play games that involve large muscles"},
      { value: "Create sports materials"},
      { value: "Identify National symbols"},
      { value: "Identify the National virtues (patriotism, accountability, National language)"},
      { value: "Describe the union between Tanganyika and Zanzibar"},
      { value: "Name the national leaders"},
      { value: "Identify the types of food available in one’s community"},
      { value: "Identify the types of food available in a different community"},
      { value: "Identify Tanzanian garments worn in various contexts"},
      { value: "Show various garments worn in one’s community"},
      { value: "Identify one’s faith"},
      { value: "Identify religious acts"},
      { value: "Identify other people’s faiths"},
      { value: "Collaborate in social activities"},
      { value: "Distinguish sounds and voices in one’s environment"},
      { value: "Follow the given instructions"},
      { value: "Listen to stories"},
      { value: "Narrate various events"},
      { value: "Ask and solve riddles"},
      { value: "Sing"},
      { value: "Tell Stories"},
      { value: "Use early reading skills"},
      { value: "Observe pictures"},
      { value: "Pronounce first sounds of names of pictures/words/ objects"},
      { value: "Relate sounds with letter shapes"},
      { value: "Read syllables and words"},
      { value: "Follow the stages of writing letters"},
      { value: "Write letters"},
      { value: "Greet and bid farewell"},
      { value: "Observe the principles of communication"},
      { value: "Talk about oneself in variouscontexts"},
      { value: "Introduce oneself and others"},
      { value: "Demonstrate acts of good behaviour"},
      { value: "Identify one’s rights and responsibilities"},
      { value: "Identify works done by family members and other people"},
      { value: "Mention things he/she likes and dislikes"},
      { value: "Explain how to control feelings"},
      { value: "Do actions that communicate feelings"},
      { value: "Do acts of selfreliance"},
      { value: "Arrange objects in a correct order"},
      { value: "Collaborate in various contexts"},
      { value: "Taking turns in play and different activitie"},
      { value: "Play games that develop the skills of solving challenges"},
      { value: "Demonstrate how to deal with challenges"},
      { value: "Use ICT to solve problems"},
      { value: "Identify parts of the body and their functions"},
      { value: "Clean the body"},
      { value: "Care for clothes"},
      { value: "Identify different types of food"},
      { value: "Explain table manners"},
      { value: "Preserve food"},
      { value: "Use food utensils"},
      { value: "Do the dishes"},
      { value: "Keep the dishes"},
      { value: "Mention objects found in the environment"},
      { value: "Distinguish objects found in the environment"},
      { value: "Do cleanliness in his/her environment"},
      { value: "Explain the impact of unclean environment"},
      { value: "Identify risky behaviours"},
      { value: "Identify risky environments"},
      { value: "Demonstrate how to avoid risky environments"},
      { value: "Identify safety signs in one’s environment"},
      { value: "Identify infectious diseases"},
      { value: "Protect oneself against diseases"},
      { value: "Identify objects that develop the concept of number in the environment"},
      { value: "Identify figures"},
      { value: "Sort things based on their characteristics"},
      { value: "Identify measurements"},
      { value: "Count numbers 1-20"},
      { value: "Write numbers 1-20"},
      { value: "Add using real objects and ICT"},
      { value: "Subtract using real objects and ICT"},
      { value: "Identify the Tanzanian banknotes and coins"},
      { value: "Observe things in the surrounding environment"},
      { value: "Do simple scientific experiments"},
      { value: "Identify ICT tools"},
      { value: "Create various ICT models"},
      { value: "Use a computer to perform various activities"},
      { value: "Use various ICT tools"},
      
  ];
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Perform theatre arts"},
      { value: "Create handmade works of arts"},
      { value: "Use creative skills that involve body movements"},
      { value: "Appreciate National symbols and virtues"},
      { value: "Appreciate Tanzanian food"},
      { value: "Appreciate Tanzanian garments"},
      { value: "Demonstrate religious acts based on one’s faith"},
      { value: "Respect other people’s faiths"},
      { value: "Listen in various contexts"},
      { value: "Converse in various contexts"},
      { value: "Read at early stages"},
      { value: "Write at early stages"},
      { value: "Communicate in various contexts"},
      { value: "Value oneself and others"},
      { value: "Control feelings in different contexts"},
      { value: "Demonstrate mastery of the skills of self-reliance"},
      { value: "Demonstrate mastery of the skills for collaboration"},
      { value: "Solve challenges in daily life"},
      { value: "Take care of the body"},
      { value: "Appreciate different types of food"},
      { value: "Keep the dishes"},
      { value: "Observing things found in the environment"},
      { value: "Clean the environment"},
      { value: "Avoid risky environment"},
      { value: "Take precaution against various diseases"},
      { value: "Use the environment to develop arithmetic concepts and critical thinking"},
      { value: "Do scientific experiments"},
      { value: "Use ICT tools to communicate in various contexts"},
      
  ];
  var topicsOptions = [
      { value: "Select main competence"},
      { value: "Demonstrate mastery of the skills of arts, creativity and sports"},
      { value: "Appreciate the culture of one’s community, religious education and National virtues"},
      { value: "Demonstrate mastery of early language and communication on skills"},
      { value: "Relate with one another"},
      { value: "Take care of health and environment"},
      { value: "Use early numeracy skills, science and ICT"},
      
      
  ];
var referenceOptions = [
{ value: "Select Reference"},
{ value: "Tanzania Institute of Education. (2023). Early Life Skills, Child's Book Pre-primary Class. Tanzania Institute of Education."},

];
} else if (subject === "Creative Arts and Sports") {
var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Sing"},
      { value: "Recite poems"},
      { value: "Recite ngonjera"},
      { value: "Act"},
      { value: "Play musical instruments"},
      { value: "Dance"},
      { value: "Create objects"},
      { value: "Draw pictures and shapes"},
      { value: "Weave articles"},
      { value: "Thread objects"},
      { value: "Play games that involve small muscles"},
      { value: "Play games that involve large muscles"},
      { value: "Create sports materials"},
      { value: "Identify National symbols"},
      { value: "Identify the National virtues (patriotism, accountability, National language)"},
      { value: "Describe the union between Tanganyika and Zanzibar"},
      { value: "Name the national leaders"},
      { value: "Identify the types of food available in one’s community"},
      { value: "Identify the types of food available in a different community"},
      { value: "Identify Tanzanian garments worn in various contexts"},
      { value: "Show various garments worn in one’s community"},
      { value: "Identify one’s faith"},
      { value: "Identify religious acts"},
      { value: "Identify other people’s faiths"},
      { value: "Collaborate in social activities"},
      { value: "Distinguish sounds and voices in one’s environment"},
      { value: "Follow the given instructions"},
      { value: "Listen to stories"},
      { value: "Narrate various events"},
      { value: "Ask and solve riddles"},
      { value: "Sing"},
      { value: "Tell Stories"},
      { value: "Use early reading skills"},
      { value: "Observe pictures"},
      { value: "Pronounce first sounds of names of pictures/words/ objects"},
      { value: "Relate sounds with letter shapes"},
      { value: "Read syllables and words"},
      { value: "Follow the stages of writing letters"},
      { value: "Write letters"},
      { value: "Greet and bid farewell"},
      { value: "Observe the principles of communication"},
      { value: "Talk about oneself in variouscontexts"},
      { value: "Introduce oneself and others"},
      { value: "Demonstrate acts of good behaviour"},
      { value: "Identify one’s rights and responsibilities"},
      { value: "Identify works done by family members and other people"},
      { value: "Mention things he/she likes and dislikes"},
      { value: "Explain how to control feelings"},
      { value: "Do actions that communicate feelings"},
      { value: "Do acts of selfreliance"},
      { value: "Arrange objects in a correct order"},
      { value: "Collaborate in various contexts"},
      { value: "Taking turns in play and different activitie"},
      { value: "Play games that develop the skills of solving challenges"},
      { value: "Demonstrate how to deal with challenges"},
      { value: "Use ICT to solve problems"},
      { value: "Identify parts of the body and their functions"},
      { value: "Clean the body"},
      { value: "Care for clothes"},
      { value: "Identify different types of food"},
      { value: "Explain table manners"},
      { value: "Preserve food"},
      { value: "Use food utensils"},
      { value: "Do the dishes"},
      { value: "Keep the dishes"},
      { value: "Mention objects found in the environment"},
      { value: "Distinguish objects found in the environment"},
      { value: "Do cleanliness in his/her environment"},
      { value: "Explain the impact of unclean environment"},
      { value: "Identify risky behaviours"},
      { value: "Identify risky environments"},
      { value: "Demonstrate how to avoid risky environments"},
      { value: "Identify safety signs in one’s environment"},
      { value: "Identify infectious diseases"},
      { value: "Protect oneself against diseases"},
      { value: "Identify objects that develop the concept of number in the environment"},
      { value: "Identify figures"},
      { value: "Sort things based on their characteristics"},
      { value: "Identify measurements"},
      { value: "Count numbers 1-20"},
      { value: "Write numbers 1-20"},
      { value: "Add using real objects and ICT"},
      { value: "Subtract using real objects and ICT"},
      { value: "Identify the Tanzanian banknotes and coins"},
      { value: "Observe things in the surrounding environment"},
      { value: "Do simple scientific experiments"},
      { value: "Identify ICT tools"},
      { value: "Create various ICT models"},
      { value: "Use a computer to perform various activities"},
      { value: "Use various ICT tools"},
      
  ];
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Perform theatre arts"},
      { value: "Create handmade works of arts"},
      { value: "Use creative skills that involve body movements"},
      { value: "Appreciate National symbols and virtues"},
      { value: "Appreciate Tanzanian food"},
      { value: "Appreciate Tanzanian garments"},
      { value: "Demonstrate religious acts based on one’s faith"},
      { value: "Respect other people’s faiths"},
      { value: "Listen in various contexts"},
      { value: "Converse in various contexts"},
      { value: "Read at early stages"},
      { value: "Write at early stages"},
      { value: "Communicate in various contexts"},
      { value: "Value oneself and others"},
      { value: "Control feelings in different contexts"},
      { value: "Demonstrate mastery of the skills of self-reliance"},
      { value: "Demonstrate mastery of the skills for collaboration"},
      { value: "Solve challenges in daily life"},
      { value: "Take care of the body"},
      { value: "Appreciate different types of food"},
      { value: "Keep the dishes"},
      { value: "Observing things found in the environment"},
      { value: "Clean the environment"},
      { value: "Avoid risky environment"},
      { value: "Take precaution against various diseases"},
      { value: "Use the environment to develop arithmetic concepts and critical thinking"},
      { value: "Do scientific experiments"},
      { value: "Use ICT tools to communicate in various contexts"},
      
  ];
  var topicsOptions = [
      { value: "Select main competence"},
      { value: "Demonstrate mastery of the skills of arts, creativity and sports"},
      { value: "Appreciate the culture of one’s community, religious education and National virtues"},
      { value: "Demonstrate mastery of early language and communication on skills"},
      { value: "Relate with one another"},
      { value: "Take care of health and environment"},
      { value: "Use early numeracy skills, science and ICT"},
      
      
  ];
var referenceOptions = [
{ value: "Select Reference"},
{ value: "Tanzania Institute of Education. (2023). Creative Arts and Sports, Child's Book Pre-primary Class. Tanzania Institute of Education."},

];
} 

  }  else if (subClasses === "Standard I") {

    if (subject === "Reading") {
   var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Imitate different sounds (e.g.sounds of animals, hands clap etc.)"},
        { value: "Relate words with familiar objects found in the environment (e.g. home, school, market, hospital, playgrounds)"},
        { value: "Follow the simple instructions given at school and home (e.g. go out, stand up, jump, clap your hands, touch your head and sit down)"},
        { value: "Introduce oneself and others"},
        { value: "Name parts of the body orally"},
        { value: "Use common greetings and say goodbye to others"},
        { value: "Pronounce letter sounds a-z"},
        { value: "Identify individual sounds in simple words (initial, middle, and last sounds)"},
        { value: "Identify words with the same last sound (rhyming) and words with the same first sound (alliteration)"},
        { value: "Blend individual sounds to form simple words"},
        { value: "Pronounce words with short vowel sounds (e.g. bat, mat, red, hit, hot, cup)"},
        { value: "Associate letters with sounds"},
        { value: "Read single syllable words with simple structure (vowel consonant-at, consonant-vowel-consonant –cat)"},
        { value: "Read words with two consonant clusters (e.g. bl, cl, fl, gl, pl, sl, br, cr, dr, fr, gr, pr, tr, sc, sk, sm, sn, sp, st, sw, and tw)"},
        { value: "Read words with consonant digraphs (e.g. th, ch, sh, ph)"},
        { value: "Read words with vowel digraphs (Target: ai, ay, ee, ea, oa and oe)"},
        { value: "Read short simple sentences"},
        { value: "Use basic punctuation marks (full stop and question mark)"},
        { value: "Read grade appropriate texts with appropriate pronunciation"},
        { value: "Practise activities that build motor skills (holding a pencil, sitting posture, moulding letter shapes)"},
        { value: "Trace letter shapes"},
        { value: "Write small and capital letters step-by step"},
        { value: "Join letters to form simple words"},
        { value: "Join words to form simple sentences"},
        { value: "Master/learn the concept of numbers using object found in the environment"},
        { value: "Identify numbers in numerals and words (1-100)"},
        { value: "Trace, copy and write numbers (1-10)"},
        { value: "Arrange numbers sequentially (1-100)"},
        { value: "Identify numbers in tens and ones"},
        { value: "Use real objects/ICT to understand the concept of addition"},
        { value: "Add numbers to get a sum not exceeding 99"},
        { value: "Use real objects/ICT to understand the concept of subtraction"},
        { value: "Subtract number in the range of 0-99"},
        { value: "Identify basic shapes"},
        { value: "Identify Tanzanian foods"},
        { value: "Identify various Tanzania clothing"},
        { value: "Dance and sing traditional songs"},
        { value: "Explain beliefs of other people"},
        { value: "Participate in social activities"},
        { value: "Perform action that demonstrate ethics "},
        { value: "Perform activities showing care for others"},
        { value: "Use hands to plait, draw and paint"},
        { value: "Sing songs and recite poems"},
        { value: "Perform simple dances and plays"},
        { value: "Perform simple body exercises (agility, body balance and coordination)"},
        { value: "Care for one’s body"},
        { value: "Care for one’s clothes"},
        { value: "Avoid hazardous environments/ situations/substances"},
        { value: "Identify road signs and other safety signs in the environment"},
        
    ];

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Develop listening and speaking skills in different contexts"},
        { value: "Recognise letter sounds"},
        { value: "Recognise letter-sound relationships"},
        { value: "Read fluently"},
        { value: "Develop pre-writing skills"},
        { value: "Develop basic writing skills"},
        { value: "Recognise the concept of numbers"},
        { value: "Use mathematical operations"},
        { value: "Use mathematical concepts"},
        { value: "Appreciate one’s culture and that of other people"},
        { value: "1*** Demonstrate religious tolerance(1 *** This specific competence will be taught by specific religious leaders in the religion period)"},
        { value: "Demonstrate ethical practices"},
        { value: "Create simple works of arts"},
        { value: "Participate in various sports"},
        { value: "Care for one’s health and that of immediate community"},
        { value: "Protect oneself from hazardous environment/situations/substances"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Listening and speaking"},
        { value: "Reading"},
        { value: "Writing"},
        { value: "Arithmetic"},
        { value: "Appreciate culture, arts and sports"},
        { value: "Care for health and environment"},
        
        
    ];
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute Of Education. (2023). Reading, Pupil's Book, Standard One. Tanzania Institute Of Education."},
        
    ];
    

} else if ( subject === "Writing") {
   var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Imitate different sounds (e.g.sounds of animals, hands clap etc.)"},
        { value: "Relate words with familiar objects found in the environment (e.g. home, school, market, hospital, playgrounds)"},
        { value: "Follow the simple instructions given at school and home (e.g. go out, stand up, jump, clap your hands, touch your head and sit down)"},
        { value: "Introduce oneself and others"},
        { value: "Name parts of the body orally"},
        { value: "Use common greetings and say goodbye to others"},
        { value: "Pronounce letter sounds a-z"},
        { value: "Identify individual sounds in simple words (initial, middle, and last sounds)"},
        { value: "Identify words with the same last sound (rhyming) and words with the same first sound (alliteration)"},
        { value: "Blend individual sounds to form simple words"},
        { value: "Pronounce words with short vowel sounds (e.g. bat, mat, red, hit, hot, cup)"},
        { value: "Associate letters with sounds"},
        { value: "Read single syllable words with simple structure (vowel consonant-at, consonant-vowel-consonant –cat)"},
        { value: "Read words with two consonant clusters (e.g. bl, cl, fl, gl, pl, sl, br, cr, dr, fr, gr, pr, tr, sc, sk, sm, sn, sp, st, sw, and tw)"},
        { value: "Read words with consonant digraphs (e.g. th, ch, sh, ph)"},
        { value: "Read words with vowel digraphs (Target: ai, ay, ee, ea, oa and oe)"},
        { value: "Read short simple sentences"},
        { value: "Use basic punctuation marks (full stop and question mark)"},
        { value: "Read grade appropriate texts with appropriate pronunciation"},
        { value: "Practise activities that build motor skills (holding a pencil, sitting posture, moulding letter shapes)"},
        { value: "Trace letter shapes"},
        { value: "Write small and capital letters step-by step"},
        { value: "Join letters to form simple words"},
        { value: "Join words to form simple sentences"},
        { value: "Master/learn the concept of numbers using object found in the environment"},
        { value: "Identify numbers in numerals and words (1-100)"},
        { value: "Trace, copy and write numbers (1-10)"},
        { value: "Arrange numbers sequentially (1-100)"},
        { value: "Identify numbers in tens and ones"},
        { value: "Use real objects/ICT to understand the concept of addition"},
        { value: "Add numbers to get a sum not exceeding 99"},
        { value: "Use real objects/ICT to understand the concept of subtraction"},
        { value: "Subtract number in the range of 0-99"},
        { value: "Identify basic shapes"},
        { value: "Identify Tanzanian foods"},
        { value: "Identify various Tanzania clothing"},
        { value: "Dance and sing traditional songs"},
        { value: "Explain beliefs of other people"},
        { value: "Participate in social activities"},
        { value: "Perform action that demonstrate ethics "},
        { value: "Perform activities showing care for others"},
        { value: "Use hands to plait, draw and paint"},
        { value: "Sing songs and recite poems"},
        { value: "Perform simple dances and plays"},
        { value: "Perform simple body exercises (agility, body balance and coordination)"},
        { value: "Care for one’s body"},
        { value: "Care for one’s clothes"},
        { value: "Avoid hazardous environments/ situations/substances"},
        { value: "Identify road signs and other safety signs in the environment"},
        
    ];

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Develop listening and speaking skills in different contexts"},
        { value: "Recognise letter sounds"},
        { value: "Recognise letter-sound relationships"},
        { value: "Read fluently"},
        { value: "Develop pre-writing skills"},
        { value: "Develop basic writing skills"},
        { value: "Recognise the concept of numbers"},
        { value: "Use mathematical operations"},
        { value: "Use mathematical concepts"},
        { value: "Appreciate one’s culture and that of other people"},
        { value: "1*** Demonstrate religious tolerance(1 *** This specific competence will be taught by specific religious leaders in the religion period)"},
        { value: "Demonstrate ethical practices"},
        { value: "Create simple works of arts"},
        { value: "Participate in various sports"},
        { value: "Care for one’s health and that of immediate community"},
        { value: "Protect oneself from hazardous environment/situations/substances"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Listening and speaking"},
        { value: "Reading"},
        { value: "Writing"},
        { value: "Arithmetic"},
        { value: "Appreciate culture, arts and sports"},
        { value: "Care for health and environment"},
        
        
    ];
var referenceOptions = [
{ value: "Select Reference"},
{ value: "Tanzania Institute Of Education. (2023). Writing, Pupil's Book, Standard One. Tanzania Institute Of Education."},

];


} else if (subject === "Arithmetic") {
      var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Imitate different sounds (e.g.sounds of animals, hands clap etc.)"},
        { value: "Relate words with familiar objects found in the environment (e.g. home, school, market, hospital, playgrounds)"},
        { value: "Follow the simple instructions given at school and home (e.g. go out, stand up, jump, clap your hands, touch your head and sit down)"},
        { value: "Introduce oneself and others"},
        { value: "Name parts of the body orally"},
        { value: "Use common greetings and say goodbye to others"},
        { value: "Pronounce letter sounds a-z"},
        { value: "Identify individual sounds in simple words (initial, middle, and last sounds)"},
        { value: "Identify words with the same last sound (rhyming) and words with the same first sound (alliteration)"},
        { value: "Blend individual sounds to form simple words"},
        { value: "Pronounce words with short vowel sounds (e.g. bat, mat, red, hit, hot, cup)"},
        { value: "Associate letters with sounds"},
        { value: "Read single syllable words with simple structure (vowel consonant-at, consonant-vowel-consonant –cat)"},
        { value: "Read words with two consonant clusters (e.g. bl, cl, fl, gl, pl, sl, br, cr, dr, fr, gr, pr, tr, sc, sk, sm, sn, sp, st, sw, and tw)"},
        { value: "Read words with consonant digraphs (e.g. th, ch, sh, ph)"},
        { value: "Read words with vowel digraphs (Target: ai, ay, ee, ea, oa and oe)"},
        { value: "Read short simple sentences"},
        { value: "Use basic punctuation marks (full stop and question mark)"},
        { value: "Read grade appropriate texts with appropriate pronunciation"},
        { value: "Practise activities that build motor skills (holding a pencil, sitting posture, moulding letter shapes)"},
        { value: "Trace letter shapes"},
        { value: "Write small and capital letters step-by step"},
        { value: "Join letters to form simple words"},
        { value: "Join words to form simple sentences"},
        { value: "Master/learn the concept of numbers using object found in the environment"},
        { value: "Identify numbers in numerals and words (1-100)"},
        { value: "Trace, copy and write numbers (1-10)"},
        { value: "Arrange numbers sequentially (1-100)"},
        { value: "Identify numbers in tens and ones"},
        { value: "Use real objects/ICT to understand the concept of addition"},
        { value: "Add numbers to get a sum not exceeding 99"},
        { value: "Use real objects/ICT to understand the concept of subtraction"},
        { value: "Subtract number in the range of 0-99"},
        { value: "Identify basic shapes"},
        { value: "Identify Tanzanian foods"},
        { value: "Identify various Tanzania clothing"},
        { value: "Dance and sing traditional songs"},
        { value: "Explain beliefs of other people"},
        { value: "Participate in social activities"},
        { value: "Perform action that demonstrate ethics "},
        { value: "Perform activities showing care for others"},
        { value: "Use hands to plait, draw and paint"},
        { value: "Sing songs and recite poems"},
        { value: "Perform simple dances and plays"},
        { value: "Perform simple body exercises (agility, body balance and coordination)"},
        { value: "Care for one’s body"},
        { value: "Care for one’s clothes"},
        { value: "Avoid hazardous environments/ situations/substances"},
        { value: "Identify road signs and other safety signs in the environment"},
        
    ];

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Develop listening and speaking skills in different contexts"},
        { value: "Recognise letter sounds"},
        { value: "Recognise letter-sound relationships"},
        { value: "Read fluently"},
        { value: "Develop pre-writing skills"},
        { value: "Develop basic writing skills"},
        { value: "Recognise the concept of numbers"},
        { value: "Use mathematical operations"},
        { value: "Use mathematical concepts"},
        { value: "Appreciate one’s culture and that of other people"},
        { value: "1*** Demonstrate religious tolerance(1 *** This specific competence will be taught by specific religious leaders in the religion period)"},
        { value: "Demonstrate ethical practices"},
        { value: "Create simple works of arts"},
        { value: "Participate in various sports"},
        { value: "Care for one’s health and that of immediate community"},
        { value: "Protect oneself from hazardous environment/situations/substances"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Listening and speaking"},
        { value: "Reading"},
        { value: "Writing"},
        { value: "Arithmetic"},
        { value: "Appreciate culture, arts and sports"},
        { value: "Care for health and environment"},
        
        
    ];
var referenceOptions = [
{ value: "Select Reference"},
{ value: "Tanzania Institute Of Education. (2023). Arithmetic, Pupil's Book, Standard One. Tanzania Institute Of Education."},

];

} else if (subject === "Sport and Art") {
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Imitate different sounds (e.g.sounds of animals, hands clap etc.)"},
        { value: "Relate words with familiar objects found in the environment (e.g. home, school, market, hospital, playgrounds)"},
        { value: "Follow the simple instructions given at school and home (e.g. go out, stand up, jump, clap your hands, touch your head and sit down)"},
        { value: "Introduce oneself and others"},
        { value: "Name parts of the body orally"},
        { value: "Use common greetings and say goodbye to others"},
        { value: "Pronounce letter sounds a-z"},
        { value: "Identify individual sounds in simple words (initial, middle, and last sounds)"},
        { value: "Identify words with the same last sound (rhyming) and words with the same first sound (alliteration)"},
        { value: "Blend individual sounds to form simple words"},
        { value: "Pronounce words with short vowel sounds (e.g. bat, mat, red, hit, hot, cup)"},
        { value: "Associate letters with sounds"},
        { value: "Read single syllable words with simple structure (vowel consonant-at, consonant-vowel-consonant –cat)"},
        { value: "Read words with two consonant clusters (e.g. bl, cl, fl, gl, pl, sl, br, cr, dr, fr, gr, pr, tr, sc, sk, sm, sn, sp, st, sw, and tw)"},
        { value: "Read words with consonant digraphs (e.g. th, ch, sh, ph)"},
        { value: "Read words with vowel digraphs (Target: ai, ay, ee, ea, oa and oe)"},
        { value: "Read short simple sentences"},
        { value: "Use basic punctuation marks (full stop and question mark)"},
        { value: "Read grade appropriate texts with appropriate pronunciation"},
        { value: "Practise activities that build motor skills (holding a pencil, sitting posture, moulding letter shapes)"},
        { value: "Trace letter shapes"},
        { value: "Write small and capital letters step-by step"},
        { value: "Join letters to form simple words"},
        { value: "Join words to form simple sentences"},
        { value: "Master/learn the concept of numbers using object found in the environment"},
        { value: "Identify numbers in numerals and words (1-100)"},
        { value: "Trace, copy and write numbers (1-10)"},
        { value: "Arrange numbers sequentially (1-100)"},
        { value: "Identify numbers in tens and ones"},
        { value: "Use real objects/ICT to understand the concept of addition"},
        { value: "Add numbers to get a sum not exceeding 99"},
        { value: "Use real objects/ICT to understand the concept of subtraction"},
        { value: "Subtract number in the range of 0-99"},
        { value: "Identify basic shapes"},
        { value: "Identify Tanzanian foods"},
        { value: "Identify various Tanzania clothing"},
        { value: "Dance and sing traditional songs"},
        { value: "Explain beliefs of other people"},
        { value: "Participate in social activities"},
        { value: "Perform action that demonstrate ethics "},
        { value: "Perform activities showing care for others"},
        { value: "Use hands to plait, draw and paint"},
        { value: "Sing songs and recite poems"},
        { value: "Perform simple dances and plays"},
        { value: "Perform simple body exercises (agility, body balance and coordination)"},
        { value: "Care for one’s body"},
        { value: "Care for one’s clothes"},
        { value: "Avoid hazardous environments/ situations/substances"},
        { value: "Identify road signs and other safety signs in the environment"},
        
    ];

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Develop listening and speaking skills in different contexts"},
        { value: "Recognise letter sounds"},
        { value: "Recognise letter-sound relationships"},
        { value: "Read fluently"},
        { value: "Develop pre-writing skills"},
        { value: "Develop basic writing skills"},
        { value: "Recognise the concept of numbers"},
        { value: "Use mathematical operations"},
        { value: "Use mathematical concepts"},
        { value: "Appreciate one’s culture and that of other people"},
        { value: "1*** Demonstrate religious tolerance(1 *** This specific competence will be taught by specific religious leaders in the religion period)"},
        { value: "Demonstrate ethical practices"},
        { value: "Create simple works of arts"},
        { value: "Participate in various sports"},
        { value: "Care for one’s health and that of immediate community"},
        { value: "Protect oneself from hazardous environment/situations/substances"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Listening and speaking"},
        { value: "Reading"},
        { value: "Writing"},
        { value: "Arithmetic"},
        { value: "Appreciate culture, arts and sports"},
        { value: "Care for health and environment"},
        
        
    ];
var referenceOptions = [
{ value: "Select Reference"},
{ value: "Tanzania Institute Of Education. (2023). Sport and Art, Pupil's Book, Standard One. Tanzania Institute Of Education."},

];

} else if (subject === "Health And Environment") {
   var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Imitate different sounds (e.g.sounds of animals, hands clap etc.)"},
        { value: "Relate words with familiar objects found in the environment (e.g. home, school, market, hospital, playgrounds)"},
        { value: "Follow the simple instructions given at school and home (e.g. go out, stand up, jump, clap your hands, touch your head and sit down)"},
        { value: "Introduce oneself and others"},
        { value: "Name parts of the body orally"},
        { value: "Use common greetings and say goodbye to others"},
        { value: "Pronounce letter sounds a-z"},
        { value: "Identify individual sounds in simple words (initial, middle, and last sounds)"},
        { value: "Identify words with the same last sound (rhyming) and words with the same first sound (alliteration)"},
        { value: "Blend individual sounds to form simple words"},
        { value: "Pronounce words with short vowel sounds (e.g. bat, mat, red, hit, hot, cup)"},
        { value: "Associate letters with sounds"},
        { value: "Read single syllable words with simple structure (vowel consonant-at, consonant-vowel-consonant –cat)"},
        { value: "Read words with two consonant clusters (e.g. bl, cl, fl, gl, pl, sl, br, cr, dr, fr, gr, pr, tr, sc, sk, sm, sn, sp, st, sw, and tw)"},
        { value: "Read words with consonant digraphs (e.g. th, ch, sh, ph)"},
        { value: "Read words with vowel digraphs (Target: ai, ay, ee, ea, oa and oe)"},
        { value: "Read short simple sentences"},
        { value: "Use basic punctuation marks (full stop and question mark)"},
        { value: "Read grade appropriate texts with appropriate pronunciation"},
        { value: "Practise activities that build motor skills (holding a pencil, sitting posture, moulding letter shapes)"},
        { value: "Trace letter shapes"},
        { value: "Write small and capital letters step-by step"},
        { value: "Join letters to form simple words"},
        { value: "Join words to form simple sentences"},
        { value: "Master/learn the concept of numbers using object found in the environment"},
        { value: "Identify numbers in numerals and words (1-100)"},
        { value: "Trace, copy and write numbers (1-10)"},
        { value: "Arrange numbers sequentially (1-100)"},
        { value: "Identify numbers in tens and ones"},
        { value: "Use real objects/ICT to understand the concept of addition"},
        { value: "Add numbers to get a sum not exceeding 99"},
        { value: "Use real objects/ICT to understand the concept of subtraction"},
        { value: "Subtract number in the range of 0-99"},
        { value: "Identify basic shapes"},
        { value: "Identify Tanzanian foods"},
        { value: "Identify various Tanzania clothing"},
        { value: "Dance and sing traditional songs"},
        { value: "Explain beliefs of other people"},
        { value: "Participate in social activities"},
        { value: "Perform action that demonstrate ethics "},
        { value: "Perform activities showing care for others"},
        { value: "Use hands to plait, draw and paint"},
        { value: "Sing songs and recite poems"},
        { value: "Perform simple dances and plays"},
        { value: "Perform simple body exercises (agility, body balance and coordination)"},
        { value: "Care for one’s body"},
        { value: "Care for one’s clothes"},
        { value: "Avoid hazardous environments/ situations/substances"},
        { value: "Identify road signs and other safety signs in the environment"},
        
    ];

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Develop listening and speaking skills in different contexts"},
        { value: "Recognise letter sounds"},
        { value: "Recognise letter-sound relationships"},
        { value: "Read fluently"},
        { value: "Develop pre-writing skills"},
        { value: "Develop basic writing skills"},
        { value: "Recognise the concept of numbers"},
        { value: "Use mathematical operations"},
        { value: "Use mathematical concepts"},
        { value: "Appreciate one’s culture and that of other people"},
        { value: "1*** Demonstrate religious tolerance(1 *** This specific competence will be taught by specific religious leaders in the religion period)"},
        { value: "Demonstrate ethical practices"},
        { value: "Create simple works of arts"},
        { value: "Participate in various sports"},
        { value: "Care for one’s health and that of immediate community"},
        { value: "Protect oneself from hazardous environment/situations/substances"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Listening and speaking"},
        { value: "Reading"},
        { value: "Writing"},
        { value: "Arithmetic"},
        { value: "Appreciate culture, arts and sports"},
        { value: "Care for health and environment"},
        
        
    ];
var referenceOptions = [
{ value: "Select Reference"},
{ value: "Tanzania Institute Of Education. (2023). Health And Environment, Pupil's Book, Standard One. Tanzania Institute Of Education."},

];

}  else if (subject === "Kusoma") {
var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kubaini sauti za irabu (a, e, i, o, u) katika maneno"},
        { value: "Kutambua sauti za konsonanti (b, m, k, d, n); (l, t, p, s, f, j); (g, y, z, h, r, w, v, ch) kwenye maneno"},
        { value: "Kuunganisha sauti za konsonanti na irabu ili kuunda silabi"},
        { value: "Kuunganisha kwa kutamka sauti za konsonanti na irabu zilizounda silabi na silabi zilizounda maneno"},
        { value: "Kutambua sauti za herufi mwambatano (sh, th, mb, ny, ng, nd, kw, mw) kwenye maneno"},
        { value: "Kuunganisha sauti za herufi mwambatano (sh, th, mb, ny, ng, nd, kw, mw) na irabu ili kuunda silabi"},
        { value: "Kuunganisha silabi kwa kutamka ili kuunda maneno"},
        { value: "Kuhusianisha sauti na herufi za irabu (a, e, i, o, u) katika matini"},
        { value: "Kuhusianisha sauti na herufi za konsonanti (b, m, k, d, n); (l, t, p, s, f, j) (g, y, z, h, r, w, v, ch) katika matini"},
        { value: "Kuhusianisha sauti na herufi za konsonanti mwambatano (sh, th, mb, ny, ng, nd, kw, mw) katika matini"},
        { value: "Kutambua majina ya namba"},
        { value: "Kuunganisha silabi kusoma maneno"},
        
    ];

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kumudu stadi za awali za kusoma"},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kumudu stadi za awali za Kiswahili"},
    ];
var referenceOptions = [
{ value: "Chagua Rejea"},
{ value: "Taasisi ya Elimu Tanzania. (2023). Kusoma, Kitabu Cha Mwanafunzi Darasa la Kwanza. Taasisi ya Elimu Tanzania"},

];
} 
}
 else if (subClasses === "Standard II") {
  if (subject === "Reading") {
   var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Use singular and plural forms of names of objects found in the environment"},
      { value: "Express days of the week and months of the year"},
      { value: "Listen and respond to simple sentences and stories"},
      { value: "Engage in simple conversations (asking and responding to questions, making polite requests, taking turns to talk about simple daily activities etc.)"},
      { value: "Engage in telling grade appropriate stories (Target: tell, role-play)"},
      { value: "Narrate simple events"},
      { value: "Manipulate phonemes (delete, add and substitute sound to form new words)"},
      { value: "Pronounce words with long vowel sounds (e.g. cake, rain, boat, toad, wild, stake, fume, roll, moth, slow and stay)"},
      { value: "Read words with three consonant clusters (e.g. str, spr, scr)"},
      { value: "Identify and recite similar and different sounds in words ( e.g. bad-bat, sip-zip)"},
      { value: "Read simple words with familiar suffixes (e.g. –s, –es, –ing, –ed)"},
      { value: "Read multisyllabic words (e.g. watermelon-4, sunflower-3, & oven-2)"},
      { value: "Read grade appropriate stories with appropriate pronunciation, tone and speed (40 words per minute)"},
      { value: "Read grade appropriate stories and observe basic punctuation marks (target: full stop, comma, exclamation and question marks)"},
      { value: "Read grade appropriate texts for comprehension"},
      { value: "Write texts using joined-up hand writing"},
      { value: "Write simple texts and use basic punctuation marks (target: full stops, comma and question marks)"},
      { value: "Identify numbers in hundreds"},
      { value: "Add numbers to get a sum not exceeding 999"},
      { value: "Subtract numbers in the range of 100-999"},
      { value: "Arrange real objects in groups of equal numbers to demonstrate the concept of multiplication as repeated addition"},
      { value: "Multiply single digit numbers not exceeding 100"},
      { value: "Arrange real objects in groups of equal numbers to demonstrate the concept of division as repeated subtraction"},
      { value: "Divide numbers not exceeding100 without a remainder"},
      { value: "Recognise the concepts of whole, half, quarter, third and two-thirds using real objects and ICT tools"},
      { value: "Identify parts of a whole thing using common fraction symbols (1/4,1/2 ect.)"},
      { value: "Use measurement skills in various contexts"},
      { value: "Use basic shapes to create complex shapes"},
      { value: "Identify a variety of Tanzanian traditional houses"},
      { value: "Identify various Tanzanian socio-cultural activities"},
      { value: "Relate faith and values"},
      { value: "Appreciate actions associated with other people’s beliefs"},
      { value: "Use hand to weave, mould, sew and decorate"},
      { value: "Recite panegyric songs and perform comedy"},
      { value: "Perform simple dances and plays"},
      { value: "Play simple games"},
      { value: "Make simple observations of living and non-living things found in the immediate environment"},
      { value: "Observe road signs and other safety signs in the environment"},
      { value: "Participate in environmental activities at school"},
      
      
  ];
  
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Develop listening and speaking skills in different contexts"},
      { value: "Recognise letter sounds"},
      { value: "Recognise letter-sound relationships"},
      { value: "Read fluently"},
      { value: "Read for comprehension"},
      { value: "Develop basic writing skills"},
      { value: "Apply basic writing skills"},
      { value: "Use mathematical operations"},
      { value: "Use mathematical concepts"},
      { value: "Appreciate one’s culture and that of other people"},
      { value: "2 ***Demonstrate religious tolerance(2 *** This specific competence will be taught by specific religious leaders in religion period)"},
      { value: "Create simple works of arts"},
      { value: "Participate in various sports"},
      { value: "Observe objects found in the environment"},
      { value: "Protect oneself from hazardous environment/situation substances"},
      { value: "Demonstrate positive attitude towards the environment"},
      
  ]; 

  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Listening and speaking"},
      { value: "Reading"},
      { value: "Writing"},
      { value: "Arithmetic"},
      { value: "Appreciate culture, arts and sports"},
      { value: "Care for health and environment"},

      
  ];
  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Reading, Pupil's Book, Standard One. Tanzania Institute Of Education."},
      
  ];
 

} else if ( subject === "Writing") {
    var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Use singular and plural forms of names of objects found in the environment"},
      { value: "Express days of the week and months of the year"},
      { value: "Listen and respond to simple sentences and stories"},
      { value: "Engage in simple conversations (asking and responding to questions, making polite requests, taking turns to talk about simple daily activities etc.)"},
      { value: "Engage in telling grade appropriate stories (Target: tell, role-play)"},
      { value: "Narrate simple events"},
      { value: "Manipulate phonemes (delete, add and substitute sound to form new words)"},
      { value: "Pronounce words with long vowel sounds (e.g. cake, rain, boat, toad, wild, stake, fume, roll, moth, slow and stay)"},
      { value: "Read words with three consonant clusters (e.g. str, spr, scr)"},
      { value: "Identify and recite similar and different sounds in words ( e.g. bad-bat, sip-zip)"},
      { value: "Read simple words with familiar suffixes (e.g. –s, –es, –ing, –ed)"},
      { value: "Read multisyllabic words (e.g. watermelon-4, sunflower-3, & oven-2)"},
      { value: "Read grade appropriate stories with appropriate pronunciation, tone and speed (40 words per minute)"},
      { value: "Read grade appropriate stories and observe basic punctuation marks (target: full stop, comma, exclamation and question marks)"},
      { value: "Read grade appropriate texts for comprehension"},
      { value: "Write texts using joined-up hand writing"},
      { value: "Write simple texts and use basic punctuation marks (target: full stops, comma and question marks)"},
      { value: "Identify numbers in hundreds"},
      { value: "Add numbers to get a sum not exceeding 999"},
      { value: "Subtract numbers in the range of 100-999"},
      { value: "Arrange real objects in groups of equal numbers to demonstrate the concept of multiplication as repeated addition"},
      { value: "Multiply single digit numbers not exceeding 100"},
      { value: "Arrange real objects in groups of equal numbers to demonstrate the concept of division as repeated subtraction"},
      { value: "Divide numbers not exceeding100 without a remainder"},
      { value: "Recognise the concepts of whole, half, quarter, third and two-thirds using real objects and ICT tools"},
      { value: "Identify parts of a whole thing using common fraction symbols (1/4,1/2 ect.)"},
      { value: "Use measurement skills in various contexts"},
      { value: "Use basic shapes to create complex shapes"},
      { value: "Identify a variety of Tanzanian traditional houses"},
      { value: "Identify various Tanzanian socio-cultural activities"},
      { value: "Relate faith and values"},
      { value: "Appreciate actions associated with other people’s beliefs"},
      { value: "Use hand to weave, mould, sew and decorate"},
      { value: "Recite panegyric songs and perform comedy"},
      { value: "Perform simple dances and plays"},
      { value: "Play simple games"},
      { value: "Make simple observations of living and non-living things found in the immediate environment"},
      { value: "Observe road signs and other safety signs in the environment"},
      { value: "Participate in environmental activities at school"},
      
      
  ];
  
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Develop listening and speaking skills in different contexts"},
      { value: "Recognise letter sounds"},
      { value: "Recognise letter-sound relationships"},
      { value: "Read fluently"},
      { value: "Read for comprehension"},
      { value: "Develop basic writing skills"},
      { value: "Apply basic writing skills"},
      { value: "Use mathematical operations"},
      { value: "Use mathematical concepts"},
      { value: "Appreciate one’s culture and that of other people"},
      { value: "2 ***Demonstrate religious tolerance(2 *** This specific competence will be taught by specific religious leaders in religion period)"},
      { value: "Create simple works of arts"},
      { value: "Participate in various sports"},
      { value: "Observe objects found in the environment"},
      { value: "Protect oneself from hazardous environment/situation substances"},
      { value: "Demonstrate positive attitude towards the environment"},
      
  ]; 

  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Listening and speaking"},
      { value: "Reading"},
      { value: "Writing"},
      { value: "Arithmetic"},
      { value: "Appreciate culture, arts and sports"},
      { value: "Care for health and environment"},

      
  ];
  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Reading, Pupil's Book, Standard One. Tanzania Institute Of Education."},
      
  ];

  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Writing, Pupil's Book, Standard One. Tanzania Institute Of Education."},
      
  ];
  

} else if (subject === "Arithmetic") {
   var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Use singular and plural forms of names of objects found in the environment"},
      { value: "Express days of the week and months of the year"},
      { value: "Listen and respond to simple sentences and stories"},
      { value: "Engage in simple conversations (asking and responding to questions, making polite requests, taking turns to talk about simple daily activities etc.)"},
      { value: "Engage in telling grade appropriate stories (Target: tell, role-play)"},
      { value: "Narrate simple events"},
      { value: "Manipulate phonemes (delete, add and substitute sound to form new words)"},
      { value: "Pronounce words with long vowel sounds (e.g. cake, rain, boat, toad, wild, stake, fume, roll, moth, slow and stay)"},
      { value: "Read words with three consonant clusters (e.g. str, spr, scr)"},
      { value: "Identify and recite similar and different sounds in words ( e.g. bad-bat, sip-zip)"},
      { value: "Read simple words with familiar suffixes (e.g. –s, –es, –ing, –ed)"},
      { value: "Read multisyllabic words (e.g. watermelon-4, sunflower-3, & oven-2)"},
      { value: "Read grade appropriate stories with appropriate pronunciation, tone and speed (40 words per minute)"},
      { value: "Read grade appropriate stories and observe basic punctuation marks (target: full stop, comma, exclamation and question marks)"},
      { value: "Read grade appropriate texts for comprehension"},
      { value: "Write texts using joined-up hand writing"},
      { value: "Write simple texts and use basic punctuation marks (target: full stops, comma and question marks)"},
      { value: "Identify numbers in hundreds"},
      { value: "Add numbers to get a sum not exceeding 999"},
      { value: "Subtract numbers in the range of 100-999"},
      { value: "Arrange real objects in groups of equal numbers to demonstrate the concept of multiplication as repeated addition"},
      { value: "Multiply single digit numbers not exceeding 100"},
      { value: "Arrange real objects in groups of equal numbers to demonstrate the concept of division as repeated subtraction"},
      { value: "Divide numbers not exceeding100 without a remainder"},
      { value: "Recognise the concepts of whole, half, quarter, third and two-thirds using real objects and ICT tools"},
      { value: "Identify parts of a whole thing using common fraction symbols (1/4,1/2 ect.)"},
      { value: "Use measurement skills in various contexts"},
      { value: "Use basic shapes to create complex shapes"},
      { value: "Identify a variety of Tanzanian traditional houses"},
      { value: "Identify various Tanzanian socio-cultural activities"},
      { value: "Relate faith and values"},
      { value: "Appreciate actions associated with other people’s beliefs"},
      { value: "Use hand to weave, mould, sew and decorate"},
      { value: "Recite panegyric songs and perform comedy"},
      { value: "Perform simple dances and plays"},
      { value: "Play simple games"},
      { value: "Make simple observations of living and non-living things found in the immediate environment"},
      { value: "Observe road signs and other safety signs in the environment"},
      { value: "Participate in environmental activities at school"},
      
      
  ];
  
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Develop listening and speaking skills in different contexts"},
      { value: "Recognise letter sounds"},
      { value: "Recognise letter-sound relationships"},
      { value: "Read fluently"},
      { value: "Read for comprehension"},
      { value: "Develop basic writing skills"},
      { value: "Apply basic writing skills"},
      { value: "Use mathematical operations"},
      { value: "Use mathematical concepts"},
      { value: "Appreciate one’s culture and that of other people"},
      { value: "2 ***Demonstrate religious tolerance(2 *** This specific competence will be taught by specific religious leaders in religion period)"},
      { value: "Create simple works of arts"},
      { value: "Participate in various sports"},
      { value: "Observe objects found in the environment"},
      { value: "Protect oneself from hazardous environment/situation substances"},
      { value: "Demonstrate positive attitude towards the environment"},
      
  ]; 

  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Listening and speaking"},
      { value: "Reading"},
      { value: "Writing"},
      { value: "Arithmetic"},
      { value: "Appreciate culture, arts and sports"},
      { value: "Care for health and environment"},

      
  ];
  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Arithmetic, Pupil's Book, Standard One. Tanzania Institute Of Education."},
      
  ];
  
} else if (subject === "Spot And Art") {
 var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Use singular and plural forms of names of objects found in the environment"},
      { value: "Express days of the week and months of the year"},
      { value: "Listen and respond to simple sentences and stories"},
      { value: "Engage in simple conversations (asking and responding to questions, making polite requests, taking turns to talk about simple daily activities etc.)"},
      { value: "Engage in telling grade appropriate stories (Target: tell, role-play)"},
      { value: "Narrate simple events"},
      { value: "Manipulate phonemes (delete, add and substitute sound to form new words)"},
      { value: "Pronounce words with long vowel sounds (e.g. cake, rain, boat, toad, wild, stake, fume, roll, moth, slow and stay)"},
      { value: "Read words with three consonant clusters (e.g. str, spr, scr)"},
      { value: "Identify and recite similar and different sounds in words ( e.g. bad-bat, sip-zip)"},
      { value: "Read simple words with familiar suffixes (e.g. –s, –es, –ing, –ed)"},
      { value: "Read multisyllabic words (e.g. watermelon-4, sunflower-3, & oven-2)"},
      { value: "Read grade appropriate stories with appropriate pronunciation, tone and speed (40 words per minute)"},
      { value: "Read grade appropriate stories and observe basic punctuation marks (target: full stop, comma, exclamation and question marks)"},
      { value: "Read grade appropriate texts for comprehension"},
      { value: "Write texts using joined-up hand writing"},
      { value: "Write simple texts and use basic punctuation marks (target: full stops, comma and question marks)"},
      { value: "Identify numbers in hundreds"},
      { value: "Add numbers to get a sum not exceeding 999"},
      { value: "Subtract numbers in the range of 100-999"},
      { value: "Arrange real objects in groups of equal numbers to demonstrate the concept of multiplication as repeated addition"},
      { value: "Multiply single digit numbers not exceeding 100"},
      { value: "Arrange real objects in groups of equal numbers to demonstrate the concept of division as repeated subtraction"},
      { value: "Divide numbers not exceeding100 without a remainder"},
      { value: "Recognise the concepts of whole, half, quarter, third and two-thirds using real objects and ICT tools"},
      { value: "Identify parts of a whole thing using common fraction symbols (1/4,1/2 ect.)"},
      { value: "Use measurement skills in various contexts"},
      { value: "Use basic shapes to create complex shapes"},
      { value: "Identify a variety of Tanzanian traditional houses"},
      { value: "Identify various Tanzanian socio-cultural activities"},
      { value: "Relate faith and values"},
      { value: "Appreciate actions associated with other people’s beliefs"},
      { value: "Use hand to weave, mould, sew and decorate"},
      { value: "Recite panegyric songs and perform comedy"},
      { value: "Perform simple dances and plays"},
      { value: "Play simple games"},
      { value: "Make simple observations of living and non-living things found in the immediate environment"},
      { value: "Observe road signs and other safety signs in the environment"},
      { value: "Participate in environmental activities at school"},
      
      
  ];
  
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Develop listening and speaking skills in different contexts"},
      { value: "Recognise letter sounds"},
      { value: "Recognise letter-sound relationships"},
      { value: "Read fluently"},
      { value: "Read for comprehension"},
      { value: "Develop basic writing skills"},
      { value: "Apply basic writing skills"},
      { value: "Use mathematical operations"},
      { value: "Use mathematical concepts"},
      { value: "Appreciate one’s culture and that of other people"},
      { value: "2 ***Demonstrate religious tolerance(2 *** This specific competence will be taught by specific religious leaders in religion period)"},
      { value: "Create simple works of arts"},
      { value: "Participate in various sports"},
      { value: "Observe objects found in the environment"},
      { value: "Protect oneself from hazardous environment/situation substances"},
      { value: "Demonstrate positive attitude towards the environment"},
      
  ]; 

  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Listening and speaking"},
      { value: "Reading"},
      { value: "Writing"},
      { value: "Arithmetic"},
      { value: "Appreciate culture, arts and sports"},
      { value: "Care for health and environment"},

      
  ];
  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Sport And Art, Pupil's Book, Standard One. Tanzania Institute Of Education."},
      
  ];
  
} else if (subject === "Health and Environment") {
  var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Use singular and plural forms of names of objects found in the environment"},
      { value: "Express days of the week and months of the year"},
      { value: "Listen and respond to simple sentences and stories"},
      { value: "Engage in simple conversations (asking and responding to questions, making polite requests, taking turns to talk about simple daily activities etc.)"},
      { value: "Engage in telling grade appropriate stories (Target: tell, role-play)"},
      { value: "Narrate simple events"},
      { value: "Manipulate phonemes (delete, add and substitute sound to form new words)"},
      { value: "Pronounce words with long vowel sounds (e.g. cake, rain, boat, toad, wild, stake, fume, roll, moth, slow and stay)"},
      { value: "Read words with three consonant clusters (e.g. str, spr, scr)"},
      { value: "Identify and recite similar and different sounds in words ( e.g. bad-bat, sip-zip)"},
      { value: "Read simple words with familiar suffixes (e.g. –s, –es, –ing, –ed)"},
      { value: "Read multisyllabic words (e.g. watermelon-4, sunflower-3, & oven-2)"},
      { value: "Read grade appropriate stories with appropriate pronunciation, tone and speed (40 words per minute)"},
      { value: "Read grade appropriate stories and observe basic punctuation marks (target: full stop, comma, exclamation and question marks)"},
      { value: "Read grade appropriate texts for comprehension"},
      { value: "Write texts using joined-up hand writing"},
      { value: "Write simple texts and use basic punctuation marks (target: full stops, comma and question marks)"},
      { value: "Identify numbers in hundreds"},
      { value: "Add numbers to get a sum not exceeding 999"},
      { value: "Subtract numbers in the range of 100-999"},
      { value: "Arrange real objects in groups of equal numbers to demonstrate the concept of multiplication as repeated addition"},
      { value: "Multiply single digit numbers not exceeding 100"},
      { value: "Arrange real objects in groups of equal numbers to demonstrate the concept of division as repeated subtraction"},
      { value: "Divide numbers not exceeding100 without a remainder"},
      { value: "Recognise the concepts of whole, half, quarter, third and two-thirds using real objects and ICT tools"},
      { value: "Identify parts of a whole thing using common fraction symbols (1/4,1/2 ect.)"},
      { value: "Use measurement skills in various contexts"},
      { value: "Use basic shapes to create complex shapes"},
      { value: "Identify a variety of Tanzanian traditional houses"},
      { value: "Identify various Tanzanian socio-cultural activities"},
      { value: "Relate faith and values"},
      { value: "Appreciate actions associated with other people’s beliefs"},
      { value: "Use hand to weave, mould, sew and decorate"},
      { value: "Recite panegyric songs and perform comedy"},
      { value: "Perform simple dances and plays"},
      { value: "Play simple games"},
      { value: "Make simple observations of living and non-living things found in the immediate environment"},
      { value: "Observe road signs and other safety signs in the environment"},
      { value: "Participate in environmental activities at school"},
      
      
  ];
  
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Develop listening and speaking skills in different contexts"},
      { value: "Recognise letter sounds"},
      { value: "Recognise letter-sound relationships"},
      { value: "Read fluently"},
      { value: "Read for comprehension"},
      { value: "Develop basic writing skills"},
      { value: "Apply basic writing skills"},
      { value: "Use mathematical operations"},
      { value: "Use mathematical concepts"},
      { value: "Appreciate one’s culture and that of other people"},
      { value: "2 ***Demonstrate religious tolerance(2 *** This specific competence will be taught by specific religious leaders in religion period)"},
      { value: "Create simple works of arts"},
      { value: "Participate in various sports"},
      { value: "Observe objects found in the environment"},
      { value: "Protect oneself from hazardous environment/situation substances"},
      { value: "Demonstrate positive attitude towards the environment"},
      
  ]; 

  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Listening and speaking"},
      { value: "Reading"},
      { value: "Writing"},
      { value: "Arithmetic"},
      { value: "Appreciate culture, arts and sports"},
      { value: "Care for health and environment"},

      
  ];

  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Health and Environment, Pupil's Book, Standard One. Tanzania Institute Of Education."},
      
  ];
 
}  else if (subject === "Kusoma") {
   var mainOptions = [
          { value: "Chagua Shughuri Kuu"},
          { value: "Kusimulia matukio sahili katika mktadha wa nyumbani na shuleni"},
          { value: "Kusikiliza hadithi sahili na kujibu maswali"},
          { value: "Kusimulia hadithi sahili"},
          { value: "Kuunganisha sauti za herufi mwambatano na irabu kusoma silabi (gh, ng’, nj, sw, bw, jw, tw, dh, pw, vw, fw, mw, ml, kw, pw, ft, lw)"},
          { value: "Kutamka maneno yenye silabi mwambatano"},
          { value: "Kutambua sauti za herufi zinazounda maneno katika sentensi"},
          { value: "Kuhusianisha sauti na herufi (sh, th, mb, ny, ng, nd, kw, mw) katika matini"},
          { value: "Kuunganisha sauti za herufi mwambatano zenye konsonanti mbili na irabu ili kuunda silabi (gh, ng’, nz, nj, sw, bw, gw, tw, dh, pw, vy, fy, my, ml, kw, py, ft, lw) na kutambulisha herufi mwambatano zenye maneno ya kukopa (bl, sp, sk, pt, st, ks, kt, pl, al, ar)"},
          { value: "Kuunganisha silabi kusoma maneno yenye konsonanti tatu na irabu (njwa, nywe, shwa, ngwa, mbwe, ndwa, ng’we)"},
          { value: "Kutambua majina ya siku za wiki na miezi"},
          { value: "Kuunganisha maneno na kusoma sentensi"},
          { value: "Kusoma kifungu cha habari/hadithi sahili (kwa umri sahihi) kwa kuzingatia matamshi sahihi ya maneno"},
          { value: "Kusoma kifungu cha habari/hadithi linganifu kwa kasi stahiki (maneno 50 kwa dakika)"},
          { value: "Kusoma kifungu cha habari/hadithi sahili kwa hisia na kwa kuzingatia alama za uandishi (nukta, mkato, alama ya kuuliza, na alama ya mshangao)"},
          { value: "Kutafsiri na kuelezea picha"},
          { value: "Kubashiri maudhui ya matini kwa usahihi kwa kutumia picha, jina la hadithi na msamiati uliochaguliwa"},
          { value: "Kusikiliza habari/hadithi sahili kwa ufahamu"},
          { value: "Kusoma kifungu cha habari/hadithi sahihi kwa ufahamu"},
          { value: "Kusoma kwa sauti hadithi kifungu cha habari"},
          
          
      ];
      
      var competenceOptions = [
          { value: "Chagua Umahili Mahususi"},
          { value: "Kumudu stadi za awali za kusikiliza na kuzungumza katika miktadha mbalimbali"},
          { value: "Kumudu stadi za awali za kusoma"},
          
      ]; 

      var topicsOptions = [
          { value: "Chagua Umahili Mkuu"},
          { value: "Kumudu stadi za awali za Kiswahili"},

          
      ];
  var referenceOptions = [
      { value: "Chagua Rejea"},
      { value: "Taasisi ya Elimu Tanzania. (2023). Kusoma, Kitabu Cha Mwanafunzi Darasa la Pili. Taasisi ya Elimu Tanzania"},
      
  ];
  
} 
} else if(subClasses === "Standard III") {
  if (subject === "ARTS AND SPORTS") {

  var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Imitate various sounds of living and non-living things"},
      { value: "Sing in unison considering proper posture and breathing"},
      { value: "Use musical instruments found in their environment to accompany short songs"},
      { value: "Draw images of various objects using a pencil"},
      { value: "Create simple shapes"},
      { value: "Perform agility and balance exercises"},
      { value: "Play rede, running with a bottle on the head and running with a spoon"},
      { value: "Participate in various art exhibitions at the class level "},
      { value: "Participate in various sports competitions at the class level"},
      
  ];

  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Demonstrate mastery of the basics of singing and acting"},
      { value: "Create images"},
      { value: "Create various shapes"},
      { value: "Demonstrate mastery of physical exercises"},
      { value: "Play traditional games"},
      { value: "Participate in sports and arts exhibitions"},
      
  ];

  var topicsOptions = [
      { value: "Select main competence"},
      { value: "Create works of art"},
      { value: "Improve health, skills, and competitiveness"},
      { value: "Demonstrate mastery of exhibition skills in arts and sports"},
      
      
  ];

  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Arts And Sports, Pupil's Book, Standard Three. Tanzania Institute Of Education."},
      
  ];

} else if ( subject === "GEOGRAPHY AND THE ENVIRONMENT") {

  var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Explain the concept of geography and the environment (meaning, their relationship and significance)"},
      { value: "Explain the concept of the earth’s relief (meaning, main features-mountain, hills, plateaus, plains, basins and their distribution)"},
      { value: "Explain the relationship between human activities and environmental conservation (Agriculture, fishing, lumbering livestock keeping and mining)"},
      { value: "Describe methods of protecting environment (planting flowers and trees/lawn grass and various ways to tackle waste in the environment)"},
      
  ]; 
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Use maps in daily life"},
      { value: "Demonstrate an elementary understanding of the earth’s relief"},
      { value: "Demonstrate an elementary understanding of environmental conservation"},
      
  ]; 


  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Geography And The Environment, Pupil's Book, Standard Three. Tanzania Institute Of Education."},
      
  ];
  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Demonstrate mastery of an elementary knowledge of maps and the solar system"},
      { value: "Demonstrate mastery of an elementary knowledge of the earth’s relief and the available resources"},
      { value: "Demonstrate mastery of an elementary knowledge of environmental conservation"},

      
  ];

} else if (subject === "Mathematics") {
  
  var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Recognise the value of a digit in a multi-digit whole number"},
      { value: "Read and write multi-digit whole numbers"},
      { value: "Compare whole numbers using symbols =, <, and >"},
      { value: "Identify sequences in whole numbers"},
      { value: "Addition and subtraction of whole numbers"},
      { value: "Recognise measurements of length, mass and volume"},
      { value: "Explain the concept of shape"},
      { value: "Explain a point, line, line segment, and a ray"},
      { value: "Construct plain figures using points, lines and line segments"},
      { value: "Use division of objects to explain the concept of fraction"},
      { value: "Addition and subtraction of fractions of the same denominator"},
      { value: "Describe units of measuring time"},
      { value: "Describe time in 12-hour format"},
      { value: "Describe time in 24-hour format"},
      { value: "Recognise number of hours in a day, days in a week, weeks in a month, months in a year"},
      { value: "Recognise the denomination of Tanzanian currency in shillings and cents"},
      { value: "Addition and subtraction of Tanzanian currency"},
      
      
  ];
  
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Demonstrate an understanding of the concept of numbers"},
      { value: "Demonstrate an understanding of basic numerical operations"},
      { value: "Demonstrate an understanding of measurements"},
      { value: "Demonstrate an understanding of elementary geometry"},
      { value: "Demonstrate an understanding of elementary mathematical skills"},
      { value: "Demonstrate an understanding of the mathematics of time"},
      { value: "Demonstrate an understanding of financial mathematics"},
      
  ]; 

  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Mathematics, Pupil's Book, Standard Three. Tanzania Institute Of Education."},
      
  ];
  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Demonstrate mastery of elementary mathematical skills"},
      { value: "Demonstrate mastery of elementary application of mathematics"},

      
  ];

} else if (subject === "SCIENCE") {
  
  var mainOptions = [
      { value: "Select Main Activity" },
      { value: "Explain the concept of science (meaning and branches of science)"},
      { value: "Describe the human sensory organs"},
      { value: "Identify different objects in the environment"},
      { value: "Identify living and non-living things"},
      { value: "Identify the main groups of living things (plants and animals)"},
      { value: "Describe basic steps in conducting a scientific investigations"},
      { value: "Conduct elementary experiments on various living and non-living things"},
      { value: "Care for living things in the environment"},
      { value: "Use ICT to play simple games that promote ability to explain scientific phenomena and concepts"},
      
  ];

  

  var competenceOptions = [
      { value: "Select Specific Competence"},   
      { value: "Demonstrate an elementary understanding of scientific theories"},
      { value: "Make simple scientific observations"},
      { value: "Conduct simple scientific experiments"},
      { value: "Use ICT for learning"},
      
  ]; 

  var referenceOptions = [
      { value: "Chagua Rejea"},
      { value: "Tanzania Institute Of Education. (2023). Science, Pupil's Book, Standard Three. Tanzania Institute Of Education."},
      
  ];
  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Demonstrate mastery of scientific theories"},
      { value: "Demonstrate mastery of elementary scientific skills"},
      { value: "Demonstrate mastery of ICT skills"},

      
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

} else if (subject === "Historia ya Tanzania na Maadili") {
  
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
      { value: "Taasisi Ya Elimu Tanzania. (2023). Historia Ya Tanzania Na Maadili, Kitabu Cha Mwanafunzi, Darasa la Tatu. Taasisi Ya Elimu Tanzania."},
      
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
      { value: "Taasisi Ya Elimu Tanzania. (2023). Kiswahili, Kitabu Cha Mwanafunzi, Darasa la Tatu. Taasisi Ya Elimu Tanzania."},
      
  ];
  var topicsOptions = [
      { value: "Chagua Umahili Mkuu"},
      { value: "Kuwasiliana katika miktadha mbalimbali"},
      { value: "Kuonesha uelewa wa jambo alilolisikiliza au kulisoma"},
      { value: "Kuwasilisha hoja kwa mazungumzo na kwa maandishi kulingana na muktadha"},
  ];
} 
} else if (subClasses === "Standard IV") {
  if (subject === "ARTS AND SPORTS") {
  var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Perform various body movements by imitating living and non-living things"},
      { value: "Sing in unison and in two-part harmony based on diction and tone"},
      { value: "Use musical instruments found in their environment to accompany the school song"},
      { value: "Create images of various objects using a pencil"},
      { value: "Create shapes based on real objects"},
      { value: "Perform coordination and flexibility exercises"},
      { value: "Play sack-race and chicken chase games"},
      { value: "Play acrobatics"},
      { value: "Participate in various art exhibitions at the school level"},
      { value: "Participate in various sports competitions at the school level"},
      
  ];

  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Demonstrate mastery of the basics of singing and acting"},
      { value: "Create images"},
      { value: "Create various shapes"},
      { value: "Demonstrate mastery of physical exercises"},
      { value: "Play traditional games"},
      { value: "Play modern sports"},
      { value: "Participate in sports and arts exhibitions"},
      
  ];

  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Arts And Sports, Pupil's Book, Standard Four. Tanzania Institute Of Education."},
      
  ];
  
  var topicsOptions = [
      { value: "Select main competence"},
      { value: "Create works of art"},
      { value: "Improve health, skills and competitiveness"},
      { value: "Demonstrate mastery of exhibition skills in arts and sports"},
      
      
  ];

} else if ( subject === "GEOGRAPHY AND THE ENVIRONMENT") {
  
  var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Show the direction of different objects using the four and eight main cardinal points of the earth (recognise four cardinal points, draw four cardinal points, use four cardinal points to show directions, recognise eight cardinal points, use eight cardinal points to show direction)"},
      { value: "Explain the concept of map (meaning, characteristics and significance)"},
      { value: "Draw a simple map to show the classroom environment"},
      { value: "Draw simple maps of the school, ward, district, region and Tanzania"},
      { value: "Use a simple map in determining a location, direction, distance and giving and following instructions"},
      { value: "Use map of Tanzania to show administrative boundaries (regions) and earth’s relief (mountains valleys, great rivers, lakes and oceans)"},
      
  ]; 
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Use maps in daily life"},
      
  ]; 


  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Geography And The Environment, Pupil's Book, Standard Four. Tanzania Institute Of Education."},
      
  ];
  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Demonstrate mastery of an elementary knowledge of maps and the solar system"},

      
  ];

} else if (subject === "Mathematics") {
  
  var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Recognise Roman numbers (up to M)"},
      { value: "Multiplication and division of whole numbers"},
      { value: "Convert between the various components of the measures of length, mass, and volume (millimetres to kilometres, miligrams to tonnes, and millilitres to litres)"},
      { value: "Addition and subtraction of measurements for length, mass and volume"},
      { value: "Calculate the perimeters and areas of plane figures (rectangle, square and triangle)"},
      { value: "Compare fractions by using =, <, and > signs"},
      { value: "Multiplication and division of fractions"},
      { value: "Explain the concept of decimals"},
      { value: "Addition and subtraction of decimals"},
      { value: "Convert between the components of measures of time (seconds to hours)"},
      { value: "Addition and subtraction of time"},
      { value: "Multiplication and division of Tanzanian currency"},
      
      
  ];
  
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Demonstrate an understanding of the concept of numbers"},
      { value: "Demonstrate an understanding of basic numerical operations"},
      { value: "Demonstrate an understanding of measurements"},
      { value: "Demonstrate an understanding of elementary geometry"},
      { value: "Demonstrate an understanding of elementary mathematical skills"},
      { value: "Demonstrate an understanding of the mathematics of time"},
      { value: "Demonstrate an understanding of financial mathematics"},
      
  ]; 

  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Mathematics, Pupil's Book, Standard Four. Tanzania Institute Of Education."},
      
  ];
  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Demonstrate mastery of elementary mathematical skills"},
      { value: "Demonstrate mastery of elementary application of mathematics"},

      
  ];

} else if (subject === "SCIENCE") {
  
  var mainOptions = [
      { value: "Select Main Activity" },
      { value: "Explain the basic principles of health (balanced diet, physical exercises, personal and environmental hygiene, safety signs and symbols)"},
      { value: "Describe types of common human diseases (Modes of transimission, causes, control and preventions)"},
      { value: "Explain the concept of matter (types and characteristics)"},
      { value: "Explain the concept of combustion (meaning, causes and effects)"},
      { value: "Investigate the life cycle of insect vectors (housefly, cockroach and mosquito)"},
      { value: "Describe types of energy (heat, light and sound energy) and their uses"},
      { value: "Conduct simple experiments to investigate the states of matter"},
      { value: "Conduct simple experiments to demostrate importance of air in combustion"},
      { value: "Conduct simple experiments on heat, light and sound energy"},
      { value: "Use ICT to draw and arrange various shapes in a logical sequence"},
      { value: "Develop simple games that use a single shape by using block-based programming language"},
      
  ];

  

  var competenceOptions = [
      { value: "Select Specific Competence"},   
      { value: "Demonstrate an elementary understanding of scientific theories"},
      { value: "Make simple scientific observations"},
      { value: "Demonstrate a basic understanding of types of energy and their uses"},
      { value: "Conduct elementary scientific experiments"},
      { value: "Use ICT for learning"},
      { value: "Design simple computer programme"},
      
  ]; 

  var referenceOptions = [
      { value: "Chagua Rejea"},
      { value: "Tanzania Institute Of Education. (2023). Science, Pupil's Book, Standard Four. Tanzania Institute Of Education."},
      
  ];
  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Demonstrate mastery of scientific theories"},
      { value: "Demonstrate mastery of elementary scientific skills"},
      { value: "Demonstrate mastery of elementary ICT skills"},
      { value: "Design simple computer programme"},

      
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

} else if (subject === "Historia ya Tanzania na Maadili") {
  
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
      { value: "Chagua Rejea"},
      { value: "Taasisi ya Elimu Tanzania. (2023). Kiswahili, Kitabu Cha Mwanafunzi, Darasa la Nne. Taasisi ya Elimu Tanzania."},
      
  ];
  var topicsOptions = [
      { value: "Chagua Umahili Mkuu"},
      { value: "Kuwasiliana katika miktadha mbalimbali"},
      { value: "Kuonesha uelewa wa jambo alilolisikiliza au kulisoma"},
      { value: "Kuwasilisha hoja kwa mazungumzo na kwa maandishi kulingana na muktadha"},
  ];
} 
} else if (subClasses === "Standard V") {
  if (subject === "ARTS AND SPORTS") {
  var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Act with or without vocalization"},
      { value: "Sing songs based on musical dynamics and voice balancing"},
      { value: "Use musical instruments to accompany solfege singing (d r m f s l t d’)"},
      { value: "Draw images that express feelings and situations using a pencil"},
      { value: "Create and decorate various shapes"},
      { value: "Use unconventional materials to create objects with simple shapes"},
      { value: "Perform exercises for building strength and speed"},
      { value: "Play tug of war"},
      { value: "Play football and netball"},
      
  ];

  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Demonstrate mastery of the basics of singing and acting"},
      { value: "Create images"},
      { value: "Create various shapes"},
      { value: "Create objects by using various unconventional materials"},
      { value: "Demonstrate mastery of physical exercises"},
      { value: "Play traditional games"},
      { value: "Play modern sports"},
      
  ];

  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Arts And Sports, Pupil's Book, Standard Five. Tanzania Institute Of Education."},
      
  ];
  
  var topicsOptions = [
      { value: "Select main competence"},
      { value: "Create works of art"},
      { value: "Improve health, skills and competitiveness"},
      
      
  ];


} else if ( subject === "GEOGRAPHY AND THE ENVIRONMENT") {
  
  var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Describe the distribution of the major natural resources of Tanzania"},
      { value: "Describe the relationship between the distribution of natural resources and development (forestry: tourism, beekeeping, logging; rivers/lakes/ sea: fishing, transport, agriculture; land: agriculture, pastoralism and mining)"},
      { value: "Describe the geographical factors that influence population distribution"},
      { value: "Describe the relationship between population distribution, resource utilisation and environmental conservation"},
      { value: "Explain the concept of weather (meaning, elements of weather, and instruments used to measure and record weather elements)"},
      { value: "Measure and record temperature, humidity, rain, wind and pressure"},
      { value: "Describe the relationship between weather and economic activities"},
      
  ]; 
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Demonstrate an elementary understanding of the major natural resources of Tanzania"},
      { value: "Demonstrate an elementary understanding of the relationship between natural resources and development"},
      { value: "Demonstrate an elementary understanding of the relationship between population distribution and resource utilisation"},
      { value: "Demonstrate an elementary understanding of the concept of climate and its relationship with economic activities"},
      
  ]; 


  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Geography And The Environment, Pupil's Book, Standard Five. Tanzania Institute Of Education."},
      
  ];
  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Demonstrate mastery of an elementary knowledge of the earth’s relief and the available resources"},
      { value: "Demonstrate mastery of an elementary knowledge of human geography "},
      { value: "Demonstrate mastery of an elementary knowledge of environmental conservation"},

      
  ];

} else if (subject === "Mathematics") {
   
  var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Multiplication of measurements for length, mass and volume"},
      { value: "Division of measurements for length, mass and volume"},
      { value: "Explain the concept of pi"},
      { value: "Calculate the circumference of a circle"},
      { value: "Calculate the area of a circle"},
      { value: "Identify even, odd and prime numbers"},
      { value: "Calculate factors and multiples of numbers not exceeding three digits"},
      { value: "Calculate the Lowest Common Multiple (LCM) and Greatest Common Factor (GCF) of whole numbers"},
      { value: "Addition and subtraction of fractions with different denominators"},
      { value: "Addition and subtraction of mixed fractions"},
      { value: "Multiplication of decimals"},
      { value: "Divide numbers to obtain an answer with no more than three decimal places"},
      { value: "Convert percentages into fractions and decimals"},
      { value: "Explain the concept of algebra"},
      { value: "Identify term, variables, and coefficients in algebraic expressions"},
      { value: "Write algebraic equations"},
      { value: "Simplify algebraic expressions using the right sequence of mathematical operations"},
      { value: "Calculate simple equations"},
      { value: "Solve problems involving sale and purchase"},
      
      
  ];
  
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Demonstrate an understanding of measurements"},
      { value: "Demonstrate an understanding of elementary geometry"},
      { value: "Demonstrate an understanding of elementary of mathematical skills"},
      { value: "Demonstrate an elementary understanding of algebra"},
      { value: "Demonstrate an understanding of financial mathematics"},
      
  ]; 

  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Mathematics, Pupil's Book, Standard Five. Tanzania Institute Of Education."},
      
  ];
  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Demonstrate mastery of elementary mathematical skills"},
      { value: "Demonstrate mastery of elementary application of mathematics"},

      
  ];

} else if (subject === "SCIENCE") {
  
  var mainOptions = [
      { value: "Select Main Activity" },
      { value: "Explain the human digestive system (meaning, parts and their functions)"},
      { value: "Explain the human reproductive systems"},
      { value: "Explain the growth in animals and plants"},
      { value: "Explain the stages of development of the human body"},
      { value: "Explain the concept of magnetism (meaning, properties and applications)"},
      { value: "Conduct simple scientific experiments on growth in animals and plants"},
      { value: "Conduct simple experiments to demonstrate magnetic properties"},
      { value: "Develop simple games that use two shapes by using block-based programming language"},
      
  ];

  

  var competenceOptions = [
      { value: "Select Specific Competence"},   
      { value: "Demonstrate an elementary understanding of scientific theories"},
      { value: "Demonstrate a basic understanding of types of energy and their uses"},
      { value: "Conduct elementary scientific experiments"},
      { value: "Design simple computer programme"},
      
  ]; 

  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Science, Pupil's Book, Standard Five. Tanzania Institute Of Education."},
      
  ];
  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Demonstrate mastery of scientific theories"},
      { value: "Demonstrate mastery of elementary scientific skills"},
      { value: "Design simple computer programme"},

      
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

} else if (subject === "Historia ya Tanzania na Maadili") {
 
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
} else if (subClasses === "Standard VI") {
  if (subject === "ARTS AND SPORTS") {
  var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Apply various acting techniques"},
      { value: "Perform traditional ngoma"},
      { value: "Create images from observing different objects"},
      { value: "Perform endurance exercises"},
      { value: "Play high and long jump"},
      { value: "Play athletic games"},
      
  ];

  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Demonstrate mastery of the basics of singing and acting"},
      { value: "Create images"},
      { value: "Demonstrate mastery of physical exercises"},
      { value: "Play traditional games"},
      { value: "Play modern sports"},
      
  ];

  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Arts And Sports, Pupil's Book, Standard Six. Tanzania Institute Of Education."},
      
  ];
  
  var topicsOptions = [
      { value: "Select main competence"},
      { value: "Create works of art"},
      { value: "Improve health, skills, and competitiveness"},
      
      
  ];

} else if ( subject === "GEOGRAPHY AND THE ENVIRONMENT") {

  var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Describe the concept solar system (meaning, importance, the planets and their arrangement and other heavenly bodies)"},
      { value: "Explain the relationship between the earth’s relief and natural vegetation"},
      { value: "Describe the importance of population and settlements data"},
      { value: "Describe the sources of population and settlements data (census: meaning, types, characteristics and importance; registration of births and deaths; and immigration records)"},
      { value: "Explain the concept of climate and factors that affect it"},
      { value: "Describe the relationship between climate, population distribution and economic activities"},
      
  ]; 
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Demonstrate an elementary understanding of the solar system"},
      { value: "Identify features of the earth’s relief"},
      { value: "Demonstrate an elementary understanding of the sources of population and settlements data"},
      { value: "Demonstrate an elementary understanding of the concept of climate and its relationship with economic activities "},
      
  ]; 


  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Geography And The Environment, Pupil's Book, Standard Six. Tanzania Institute Of Education."},
      
  ];
  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Demonstrate mastery of an elementary knowledge of maps and the solar system"},
      { value: "Demonstrate mastery of an elementary knowledge of the earth’s relief and available resources"},
      { value: "Demonstrate mastery of an elementary knowledge of human geography"},
      { value: "Demonstrate mastery of an elementary knowledge of environmental conservation"},

      
  ];

} else if (subject === "Mathematics") {
  
  var mainOptions = [
      { value: "Select Main Activity"},
      { value: "Solve problems involving distance and time"},
      { value: "Calculate the area and volume of three dimensional figures (rectangular parallelepiped, square parallelepiped and cylinder)"},
      { value: "Calculate degree of angles in plane figures (triangle, rectangle and circle)"},
      { value: "Describe types of triangles and Pythagoras’ theorem"},
      { value: "Calculate the square of a number"},
      { value: "Calculate the square root of a number"},
      { value: "Explain the concept of integers"},
      { value: "Perform operations in integers"},
      { value: "Explain the concept of statistics"},
      { value: "Find the mean, median and mode of ungrouped data"},
      { value: "Interpretation and presentation of data using statistical diagrams (pie charts and histograms)"},
  ];
  
  var competenceOptions = [
      { value: "Select Specific Competence"},
      { value: "Demonstrate an understanding of measurements"},
      { value: "Demonstrate an understanding of elementary geometry"},
      { value: "Demonstrate an understanding of elementary mathematical skills"},
      { value: "Demonstrate an understanding of elementary statistics and its applications"},
      
  ]; 

  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Mathematics, Pupil's Book, Standard Six. Tanzania Institute Of Education."},
      
  ];
  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Demonstrate mastery of elementary mathematical skills"},
      { value: "Demonstrate mastery of elementary application of mathematics"},

      
  ];

} else if (subject === "SCIENCE") {
  
  var mainOptions = [
      { value: "Select Main Activity" },
      { value: "Explain respiratory systems in animals and plants (meaning, parts and mechanisms)"},
      { value: "Explain the concept of acids and bases (meaning, properties, source and uses)"},
      { value: "Explain the concept of a machine (meaning, type and uses)"},
      { value: "Explain the concepts of floating and sinking"},
      { value: "Explain the concept of electricity (meaning, sources and uses)"},
      { value: "Describe simple electric circuit (parts, type, symbols and constructions)"},
      { value: "Conduct simple experiments about machines"},
      { value: "Conduct simple experiments on floating or sinking"},
      { value: "Conduct experiments on simple electric circuits"},
      { value: "Develop simple games that use more than two shapes using a block-based programming languages"},
      
  ];

  

  var competenceOptions = [
      { value: "Select Specific Competence"},   
      { value: "Demonstrate elementary understanding of scientific theories"},
      { value: "Demostrarte a basic understanding of types of energy and their uses"},
      { value: "Conduct elementary scientific experiments"},
      { value: "Design simple computer programme"},
      
  ]; 

  var referenceOptions = [
      { value: "Select Reference"},
      { value: "Tanzania Institute Of Education. (2023). Science, Pupil's Book, Standard Six. Tanzania Institute Of Education."},
      
  ];
  var topicsOptions = [
      { value: "Select Main Competence"},
      { value: "Demonstrate mastery of scientific theories"},
      { value: "Demonstrate mastery of elementary scientific skills"},
      { value: "Design simple computer programme"},

      
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
      { value: "Chagua Umahili Mkuu"},
      { value: "Kuwasiliana katika miktadha mbalimbali"},
      { value: "Kuonesha uelewa wa jambo alilolisikiliza au kulisoma"},
      { value: "Kuwasilisha hoja kwa mazungumzo na kwa maandishi kulingana na muktadha"},
  ];


} else if (subject === "Historia ya Tanzania na Maadili") {
 
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
           }

dopopOpts(compLesson, competenceOptions);
dopopOpts(mainlesson, mainOptions);
dopopOpts(refLesson, referenceOptions);
dopopOpts(topicLesson, topicsOptions);
}
document.getElementById("classes").addEventListener("change", createOptionElement);
document.getElementById("subject").addEventListener("change", createOptionElement);
createOptionElement();
})();
