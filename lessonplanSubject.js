function createOptionElement() {
    var subject = document.getElementById("subject").value;
    var subClasses = document.getElementById("classes").value;
    var topicLesson = document.getElementById("topicLesson");
    //var compLesson = document.getElementById("compLesson");
    //var mainlesson = document.getElementById("mainlesson");
    var refLesson = document.getElementById("refLesson");
    topicLesson.innerHTML = "";
    //compLesson.innerHTML = "";
    //mainlesson.innerHTML = "";
    refLesson.innerHTML = "";

    if (subClasses === "Form One") {
        if (subject === "Chemistry") {
        /*var mainOptions = [
            { value: "Select Main Objective"},
            { value: "Explain the importance of Chemistry in daily life"},
            { value: "Carry out chemistry activities safely and efficiency"},
            { value: "Using various laboratory Apparatus"},
            { value: "Explain the nature properties of matter"},
            { value: "Separate various mixtures using variety of methods"},
            { value: "Differentiate physical from chemical changes of matter"},
            { value: "Using scientific procedures in carrying out Invesigations"},
            
        ];

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "using Chemistry skills and knowledge in daily life"},
            { value: "working safely in chemistry laboratory"},
            { value: "Designing and carrying out simple chemistry experiments"},
            { value: "Applying the scientific procedure to carry out investigations in chemistry"},
            { value: "using various chemistry apparatus properly to perform different activities and experiments"},
            { value: "Applying different methods to separate mixtures into a pure components" },
            { value: "Dealing with nature and properties of matter"},
            
        ];
*/
        var referenceOptions = [
            { value: "Select Reference"},
            { value: "tie (2022),chemistry for secondary schools student's book form one"},
            
        ];
        
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Introduction To Chemistry"},
            { value: "Laboratory"},
            { value: "Heat Sources and Flames"},
            { value: "Scientific Procedures"},
            { value: "Matter"},
            { value: "Air,Combustion,Fire and Fire Fighting"},

            
        ];
/*
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
        });*/

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
        

    } else if ( subject === "Physics") {
        /* 
        var mainOptions = [
            { value: "Select Main Objective"},
            { value: "Demostrate laboratory practice and safety"},
            { value: "Develop skills on basic principles of scientific investigation"},
            { value: "Develop skills for making physical measurements"},
            { value: "Recognize behaviour and properties of Matter"},
            
        ]; 
        var competenceOptions = [
            { value: "Select Competence"},
            { value: "Practicing safety rules in daily life"},
            { value: "applying basic principles of scientific investigation"},
            { value: "Making appropriate measurement of physical quantities"},
            { value: "Using Scientific skills to identify nature and properties of matter"},
            
        ]; */


        var referenceOptions = [
            { value: "Select Reference"},
            { value: "tie (2022),physics for secondary schools student's book form one"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Introduction to Physics"},
            { value: "Introduction to laboratory Practices"},
            { value: "Mesurement"},
            { value: "Force"},
            { value: "Archimede's principle and Floatation Law"},
            { value: "Structure and Properties of Matter"},
            { value: "pressure"},
            { value: "Work,energy and Power"},
            { value: "Light"},

            
        ];
/*
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
        
        */

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
    } else if (subject === "Mathematics") {
        /* 
        var mainOptions = [
            { value: "Select Main Objective"},
            { value: "Perform computations of numbers"},
            { value: "Use approximations in solving simple problems"},
            { value: "Converts and  computations on basic units"},
            { value: "Construct and draw Geometrical figures"},
            { value: "Find the angles in Geometrical figures"},
            { value: "Solve linear equations in one or two unknowns"},
            { value: "Find the parameter and areas of simple geometrical figures"},
            { value: "Compute ratios,profit and loss and simple interest"},
            { value: "draw graphs of linear equations"},
            { value: "Solve linear inequalities in one unknown"},
            
            
        ];
        
        var competenceOptions = [
            { value: "Select Competence"},
            { value: "Distinguish different types of numbers"},
            { value: "Estimate and compute numbers accurately"},
            { value: "Convert units and fractions"},
            { value: "Handle mathematical instruments in constructing and drawing geomentrical figures"},
            { value: "Solve problems on geometry,ratio,profit and loss,and simple interest"},
            { value: "Graph and interpret linear equations"},
            
        ]; */

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "tie (2022),mathematics for secondary schools student's book form one"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Numbers"},
            { value: "Fractions"},
            { value: "Decimals and percentage"},
            { value: "units"},
            { value: "Approximations"},
            { value: "Geometry"},
            { value: "Algebra"},
            { value: "Numbers II"},
            { value: "Ratio,Profit and Loss"},
            { value: "Cordinate Geometry"},
            { value: "Parameters And Areas"},

            
        ];
/*
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
        */
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
    } else if (subject === "Civics") {
        /* 
        var mainOptions = [
            { value: "Select Main Objective" },
            { value: "show an appreciation of the importance for work for self development and that of the nation "},
            { value: "demostrate the ability to recognize and respect human rights and dignity"},
            { value: "show an understanding of civic responsibilities and be able to fulfil them"},
            { value: "show an understanding  on matters related to courtship, marriage and family relationships"},
            { value: "use roads correctly and safely"},
            { value: "explain the meaning of life skills and applu them in their lives"},
            
        ];

        

        var competenceOptions = [
            { value: "Select Main competence"},   
            { value: "demostrate willingness to work hard and diligently for self and national developmwnt"},
            { value: "demostrate respect for human rights and individual dignity"},
            { value: "demostrate an understanding of his/her civic responsibilities and fulfils them"},
            { value: "analyze matters relating to family issues and makes the right decisions"},
            { value: "use roads correctly and safely"},
            { value: "demostrate knowledge and ability to apply life skills in life"},
            
        ]; */

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "tie (2022),civics for secondary schools student's book form one"},
            
        ];
        var topicsOptions = [
            { value: "Select Topic"},
            { value: "Our Nation"},
            { value: "Promotion of Life Skills"},
            { value: "Human Rights"},
            { value: "Responsibility of Citizen"},
            { value: "Work"},
            { value: "Family"},
            { value: "Road Safety Education"},
            

            
        ];
/*
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

        */
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
    } else if (subject === "Biology") {
        /* 
        var mainOptions = [
            { value: "Select Main Objective"},
            { value: "develop basic knowledge and skills on scientific processes of studyind biology"},
            { value: "develop mastery for  carrying out experiments on various biological processes"},
            { value: "develop appropriate use of biological knowledge,concepts,principles and skills in every day life"},
            { value: "Promote ability to communicate using biological terms and vocabularies"},
            { value: "classify living organisms in their respective kingdoms and phyla/divisions" },
            { value: "Applying appropriate health precautions and measures against common accidesnts,infections and other health problems as wel as protecting others"},
        ];

        
        var competenceOptions = [
            { value: "Select Competence"},
            { value: "Make use of scientific procedures and practical skills in studying biology"},
            { value: "Demostrate appropriate use of biological knowledge,concepts,principles and skills in evevry day life"},
            { value: "Group organisms according to their similarities and their differences"},
            { value: "Demostrate appropriate preventive measures and precautions agaist common accents,infections and other related health problems"},
            
        ]; */

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "tie (2022),biology for secondary schools student's book form one"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence" },
            { value: "Introduction to Biology"},
            { value: "Safety In Our Environment"},
            { value: "Cell Structure and Organization"},
            { value: "Classification"},
        ];
/*
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
        */
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
    }  else if (subject === "English") {
        /*
        var mainOptions = [
            { value: "Select Main Objective"},
            { value: "listen to and uderstand simple oral texts"},
            { value: "express oneself appropriately in different situations using simple english structures"},
            { value: "read intesively texts in english for comprehension"},
            { value: "explain the content of simple english readers read"},
            { value: "write simple descriptions in english"},
            
        ];

        

        var competenceOptions = [
            { value: "Select Competence"},
            { value: "Use Simple english to comunicate in social interactions  and settings"},
            { value: "Engage in a simple conversions and transactions on familiar topics"},
            { value: "express in english orally and writting,needs,feelings and ideas using appropriate vocabulary"},
            { value: "Give and respond to directions/requests using imple english langauge"},
            { value: "use english to obtain,process,construct and provide subject matter information in spoken and witten forms"},
            { value: "identify general information on events in simple orla/wittn texts she/he encounters"},
            { value: "use appropriate english pronounciation and intonation in a variety of settings"},
            
        ];  */

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "tie (2022),english for secondary schools student's book form one"},
            
        ];
        var topicsOptions = [
            { value: "Select main Competence"},
            { value: "Listening and Understanding Simple Texts about variety Events and Situations"},
            { value: "Giving Directions"},
            { value: "Using Dictionary"},
            { value: "Expression of Personal and Group Routines/Habits"},
            { value: "Expression of Ongoing Activities"},
            { value: "expression of Likes and Dislikes"},
            { value: "Talking about One's Family"},
            { value: "Expressions of Opinions and Feelings"},
            { value: "Talking about  Events/Activities"},
            { value: "Expressing future plans/Activities"},
            { value: "Reading variety Texts"},
            { value: "Interpreting  Literary Works"},
            { value: "Analysing Information from media"},
            { value: "Writting Persnal Letters"},
            { value: "Taking Notes"},
            { value: "Writing Variety of Texts"},
        ];
/*
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
        */
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
    } else if (subject === "Geography") {
        /*
        var mainOptions = [
            { value: "Select Main Objective" },
            { value: "interpret the concept of geography in the context of its major component" },
            { value: "explain the conjcept of the solar system and its related aspects" },
            { value: "illustrate and differentiate parts and physical components of the earth" },
            { value: "observe,record,analyze and interpret elements od wather and takes necessary measures to manage their outcomes" },
            { value: "understand the relationship between the climate and the environment" },
            { value: "demostrate basic skills of map work to generate useful information" },
            
        ];

        

        var competenceOptions = [
            { value: "Select Competence"},
            { value: "understanding the concept of geography and  its area of study"},
            { value: "understanding the aspects related to solar and the abality to plan day life activities"},
            { value: "knowledge on parts of physical components of the earth"},
            { value: "ability to observe,record,analyse and interpret the element of weather"},
            { value: "the use of skills on weather elements to solve problems associated with weather"},
            { value: "the ability to relate the climate to the envirionmenta to daily social and economic activities"},
            { value: "the ability to read,measure and interpret the information on  simple map"},
            
        ]; */

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "tie (2022),geography for secondary schools student's book form one"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Concept of Geography"},
            { value: "the solar system"},
            { value: "Major Features of Earth's surface"},
            { value: "Weather"},
            { value: "Climate"},
            { value: "Map Works"},
        ];

  /*
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

        */

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
    } else if (subject === "History") {
       /*
        var mainOptions = [
            { value: "Select Main Objective"},
            { value: "explain the concept and appriciate the impportance and source of histroy"},
            { value: "explain the theory of the origin and evolution of man"},
            { value: "relates man's development to the environment and technology"},
            { value: "explain how people's economic activities influenced the development of their social and political organization in pre-colonial africa"},
            
        ];

       

        var competenceOptions = [
            { value: "Select Competence"},
            { value: "demeostrates knowledge of the concept of history and appreciates the importance of sources of history"},
            { value: "demostrates ability to examine the theories of the origin and evolution of man and draw conclusion"},
            { value: "demostrates ability to relate  man's development to the envirnment and technology"},
            { value: "demostrates the ability to realtse people's economic activities to rthe development of theire social and political organization"},
            
        ]; */

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "tie (2022),history for secondary schools student's book form one"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Sources and Importance of History"},
            { value: "Evolution of man, Technology and Environment"},
            { value: "Development of Economic Activities and their Impact"},
            { value: "Development of Social and Political System"},
        ];
/*
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

        */

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
    }  else if (subject === "Commerce") {
        
        /*
        var mainOptions = [
            { value: "Select Main Objective"},
            { value: "describe commerce basics"},
            { value: "plan basic production activities"},
            { value: "develop entrepreneurship attitudes"},
            { value: "expalin the domestic trade activities"},
            
        ];

        

        var competenceOptions = [
            { value: "Select Competence"},
            { value: "engage in the commercial activities"},
            { value: "acquire appropriate resources for production process"},
            { value: "demostrate entreprneurship attitudes and innovations"},
            
        ]; */

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "tie (2022),commerce for secondary schools student's book form one"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Scope of Commerce"},
            { value: "Production"},
           
        ];
/*
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
        */
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
    }  else if (subject === "Book-Keeping") {
        /*
        var mainOptions = [
            { value: "Select Main Objective"},
            { value: "describe the subject matter of the book-keeping"},
            { value: "identify the role of double entry and use it to post transactions into various accounts"},
            { value: "post transactions to the ledgers using primary  entry books"},
            { value: "use knowledge of accounting concepts to record business transactions"},
            { value: "prepare financial statements"},
            
        ];

       

        var competenceOptions = [
            { value: "Select Competence"},
            { value: "apply book-keeping skills in range of small business situations"},
            { value: "apply the principle of double entry system in book-keeping"},
            { value: "demstrate the willingness to make proper, accurate and timely recording"},
            { value: "use basic accounting concepts and principle in according financial information"},
            { value: "use the financial information in decision making"},
            
        ];  */

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "tie (2022),book-keeping for secondary schools student's book form one"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Subject matter of Book Keeping"},
            { value: "Principles of Double Entry System"},
            { value: "Classification of accounts"},
            { value: "Trial Balance"},
            { value: "Stocks"},
            { value: "Elementary trading profit and loss accounts"},
            { value: "Elementary  balance Sheets"}, 
           
        ];
/*
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

        */
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
    } else if (subject === "Kiswahili") {
        /*var mainOptions = [
            { value: "Chagua Lengo Kuu"},
            { value: "kusikiliza na kuelewa taarifa au mazungumzo kwa  kiswahili yanayolingana na kiwango chake"},
            { value: "kusoma na kuelewa maandiko ya vitabu mbalimbali vya kiswahili vyenye taarifa fupi na rahisi ili kupata ujumbe mahususi"},
            { value: "kuwasiliana kwa kiswahili katika mazungumzo na maandishi na watu au jamii katika miktadha mbalimbali"},
            { value: "kujieleza kwa kiswahili kwa kusimulia au kuandika habari fupi kwa kuzingatia taratibu za uandishi"},
            { value: "kubaini matumizi sahihi ya maneno katika tungo mbalimbali za kiswahili"},
            { value: "kubainisha,kuhakiki na kutunga kazi za fasihi simulizi kwa kiswahili"},
            { value: "kutumia kamusi"},
            { value: "kujenga tabia ya kujisomea maandiko mbalimbali ya kiswahili"},
            
        ];

        

        var competenceOptions = [
            { value: "Chagua Umahiri"},
            { value: "kuwasiliana kwa mazungumzo na maandishi kiswahili sanifu"},
            { value: "kusoma na kuelewa maandiko mbalimbali ya kiswahili"},
            { value: "kusikiliza na kuelewa mazungumzo yaliyoko katika lugha ya kiswahili"},
            { value: "kuandika habari fupi kwa kuzingatia taratibu za uandishi"},
            { value: "kubainisha,kuhakiki na kutunga kazi za fasihi simulizi"},
            { value: "kutumia kamusi"},
            
        ]; */

        var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "tie (2022),kiswahili kitabu cha mwanafunzi kwa shule za sekondari kidato cha kwanza"},
            
        ];
        var topicsOptions = [
            { value: "chagua Umahiri Mkuu"},
            { value: "mawasiliano"},
            { value: "aina za maneno"},
            { value: "fasihi kwa ujumla"},
            { value: "fasihi simulizi"},
            { value: "usimulizi"},
            { value: "uandishi wa insha"},
            { value: "uandishi wa barua"}, 
            { value: "ufahamu"},
            { value: "uandishi wa barua"},
           
        ];
/*
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
        */
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
    } /* else if (subClasses === "Form Two") {

if (subject === "Chemistry") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "explain preparation amd properties of simple gases"},
{ value: "treat,purify and use water while conserving the environment"},
{ value: "recognize the importance of efficiency and sustainability in using fuel"},
{ value: "promote the use of fuels with environmental consideration"},
{ value: "explain the structure of an atom and periodic trend"},
];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "preparing and testing properties of simple gases in the laboratory"},
{ value: "treating and purifying water with environmental consideration"},
{ value: "using fuels efficiency and sustainability with  environmental  consideration"},
{ value: "applying periodicity to explain characteristics of element"},
];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),chemistry for secondary schools student's book form two"},

];

var topicsOptions = [
{ value: "Select Topic"},
{ value: "Oxygen"},
{ value: "Hydrogen"},
{ value: "Water"},
{ value: "Fuel and Energy"},
{ value: "atomic structure"},
{ value: "periodic classification"},
{ value: "formula,bonding and nomenclature"},


];

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


} else if ( subject === "Physics") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "understand concepts and principles of magnetism and electricity"},
{ value: "comprehend the laws of motion"},
{ value: "understand principles of simple machine"},
{ value: "develop knowledge on sustainable energy for environmental conservation"},

];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "applying electricity and magnetism knowledge in daily life"},
{ value: "applying laws of motion in dealing with moving objects"},
{ value: "using simple machine to simplify work"},
{ value: "practicing environmental conservation by adopting appropriate sustainable energy sources"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),physics for secondary schools student's book form two"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "static electricity"},
{ value: "current electricity"},
{ value: "magnetism"},
{ value: "forces in equilibrium"},
{ value: "simple machines"},
{ value: "motion in straight line"},
{ value: "newton's laws of motion"},
{ value: "temperature"},
{ value: "sustainable energy sources"},


];

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
} else if (subject === "Mathematics") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "derive and apply the laws of exponents,radicals and logarithms in mathematical manipulations"},
{ value: "do  calculations using mathematical tables"},
{ value: "prove and apply congruency and similarity  of figures"},
{ value: "represent reflections,rotations,translations and enlargement geometrically"},
{ value: "represent and interpret statistical data collected from real life situations such as road safety,HIV/AIDS,environment and crimes"},
{ value: "perform operations on sets and apply sets to solve problems"},
];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "find relationships among logarithms,exponents,radicals,right triangles and trigonometric ratios"},
{ value: "use mathematical tables in computations"},
{ value: "verify laws and prove theorems"},
{ value: "do scale drawing and geometrical transformation"},
{ value: "factorize and solve problems"},
{ value: "organize and interpret data"},
{ value: "apply set operations in solving problems"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),mathematics for secondary schools student's book form two"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "exponents and radicals"},
{ value: "algebra"},
{ value: "quadratic equations"},
{ value: "logarithms"},
{ value: "congruence"},
{ value: "similarity"},
{ value: "geometrical transformations"},
{ value: "pathagoras theorem"},
{ value: "trigonometry"},
{ value: "sets"},
{ value: "statics"},


];

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
} else if (subject === "Civics") {
var mainOptions = [
{ value: "Select Main Objective" },
{ value: "apply problem solving techniques in eal life situations"},
{ value: "demonstrate an understanding of his/her government"},
{ value: "explain what democracy is and parcipate in democratic activities"},
{ value: "promote knowledge of good sexual behaviour and gender concepts"},

];

var competenceOptions = [
{ value: "Select Main competence"},   
{ value: "apply problem solving techniques"},
{ value: "demonstrate an understanding of the concept,structure and functioning of government and participates in its running"},
{ value: "demonstrate knowledge of democratic principles and competently participates in democratic processes"},
{ value: "demonstrate reaponsible sexual behaviour and gender relations"},
];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),civics for secondary schools student's book form two"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "promotion of life skills"},
{ value: "government of tanzania"},
{ value: "democracy"},
{ value: "gender"},
];

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
} else if (subject === "Biology") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "acquire basic knowledge,concepts,principles and skills in evaluating the role of various physiological processes in animals and plants"},
{ value: "apply appropriate skills in processes,preserving and storing food"},
{ value: "apply biological practical skills in studying physiological processes in plants and animals"},
{ value: "classify organisms in their respective kingdoms and phyla/divisions"},
{ value: "develop positive attitudes towards proper use of natural heritage and management of the environment for sustainable development" },
{ value: "appl appropriate biological principles and skills in solving various health related problems"},
];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "make appropriate use of basic biological concepts,principles and skills to evaluate the roles of various physiological processes in plants and animals"},
{ value: "demonstrate use of biological practical skills in studying various physiological processes in plants and animals"},
{ value: "group organisms according to their similarities and differences"},
{ value: "appreciate nature and ensure sustainable interaction of organisms in the natural environment"},
{ value: "demonstrate appropriate use of biological principles and skills in solving health related problems"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),biology for secondary schools student's book form two"},

];
var topicsOptions = [
{ value: "Select Topic" },
{ value: "classification of living things"},
{ value: "nutrition"},
{ value: "balance of nature"},
{ value: "transportation of materials in living things"},
{ value: "gaseous exchange and respiration"},

];

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
}  else if (subject === "English") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "listen to and uderstand various simple english texts"},
{ value: "express oneself orally in english using slightly compex sentences"},
{ value: "read intensively a variety  of simple english texts"},
{ value: "explain content of simple english readers in different genres"},
{ value: "write simple texts in english"},

];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "identify specific information on events in simple oral written materials she/he encounters"},
{ value: "use english to obtain,proceess,construct and provide subject matter information in spoken and written forms"},
{ value: "interact in spoken and written for personal expression and enjoyment"},
{ value: "use english to interact in the classroom"},
{ value: "describe past activities and personal experiences"},
{ value: "ask and answer questions on simple readers and report on what he/she read"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),english for secondary schools student's book form two"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "listening to various simple oral texts"},
{ value: "talking about events"},
{ value: "asking for services"},
{ value: "locating places"},
{ value: "analysing information from the media"},
{ value: "giving discriptions"},
{ value: "talking about cultural activities"},
{ value: "expressing opinions"},
{ value: "reading for comprehension"},
{ value: "interpreting literary works"},
{ value: "writing cards and messages"},
];

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
} else if (subject === "Geography") {
var mainOptions = [
{ value: "Select Main Objective" },
{ value: "types,characteristics,importance and problems of crops farming and animal keeping" },
{ value: "the importance of water,forestry,wild animals,mineral resources,problems linked to them and their necessary management practices" },
{ value: "the types,factors for location,importance and management of hazards of manufacturing industries" },
{ value: "the types,location,sustainable use,accruing problems,the management of power and energy resources" },
{ value: "the types,importance and problems of transport in east africa" },

];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "the knowledge  of types,characteristics,importance,problems and ability to apply skills to meet certain human needs"},
{ value: "an understanding of the importance of natural resources and the ability to use and conserve natural resources to improve the standard of life"},
{ value: "the knowledge on types,factors for location and importance of manufacturing industries and ability to use conservation skills to protect the environment form industrial hazards"},
{ value: "the knowledge on types,location  and existing problems of power and energy resources"},
{ value: "the ability to manage and use power and energy resources sustainable"},
{ value: "the knowledge on importance and different types of transport in east africa"},
];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),geography for secondary schools student's book form two"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "human activities"},
{ value: "agriculture"},
{ value: "water management for economic development"},
{ value: "sustainable use of forest resources"},
{ value: "sustainable mining"},
{ value: "tourism"},
{ value: "manufacturing industry"},
{ value: "sustainable use of power and energy  resources"},
{ value: "transport"},
];

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
} else if (subject === "History") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "understand and explain the moatives the interactives among the people of africa"},
{ value: "understandi and appreciate the level of social and economic development in pre-colonial"},
{ value: "explain the motivates for the  coming of foreigners to africa earliest times up to 1850s"},
{ value: "eunderstand and explain how and why the development of capitalism influenced social and economic changes in africa"},

];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "demonstrates knownledge on the motives for interactions among the people of africa"},
{ value: "demonstrates knowledge and shows appreciation of yhe levels of social economic africa up to mid 19th century"},
{ value: "demonstrates knowledge on the development of capitalism and analyse how and why it influenced social and economic changes in africa"},
];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),history for secondary schools student's book form two"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "interactions amoung the people of africa"},
{ value: "social economic development and production in pre-colonial africa"},
{ value: "african abd the external world"},
{ value: "industrial capitalism"},
];

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
}  else if (subject === "Commerce") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "describe the economic basics"},
{ value: "explain the domestic trade activities"},
{ value: "examine the enterprising activities conducted in their locality"},
{ value: "design the transportation model"},

];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "demonstrate entrepreneurship attitudes and innovations"},
{ value: "apply trading features in daily life"},
{ value: "administer delivery  of goods"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),commerce for secondary schools student's book form two"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "entrepreneurship"},
{ value: "warehousing management"},
{ value: "economics basics"},
{ value: "transportation"},

];

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
}  else if (subject === "Book-Keeping") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "prepare columnar cash books"},
{ value: "make comparison between bank statement and bank account"},
{ value: "record journal enties supporting the correction of errors and post entries to a suspense account"},

];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "manage resources effectively through proper and accurate keeping"},
{ value: "apply the principle of double entry book-keeping"},
{ value: "demonstrate knowledge of internal control processes"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),book-keeping for secondary schools student's book form two"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "columnar cash books"},
{ value: "bank reconciliation"},
{ value: "government accounting and budgeting"},
{ value: "correction of errors"},

];

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
} else if (subject === "Kiswahili") {
        var mainOptions = [
            { value: "Chagua Lengo Kuu"},
            { value: "kutumia maneno kwa ufasaha"},
            { value: "kubainisha matumizi ya kikswahili katika miktadha mbalimbali"},
            { value: "kutunga na kuhakiki kazi za kifasihi simulizi"},
            { value: "kukusanya na kuhifadhi kazi za kifasihi simulizi"},
            { value: "kuandika insha,barua na simu"},
            { value: "kusoma na kuelewa maandiko yenye ujumbe mbalimbali"},
            { value: "kusikiliza na kuelewa masimiulizi mbalimbali atayosimuliwa"},
            
        ];

        var competenceOptions = [
            { value: "Chagua Umahiri"},
            { value: "kusikiliza na kuelewa mazungumzo yaliyo lugha ya kiswahili"},
            { value: "kuzungumza na kuandika kwa kiswahili"},
            { value: "kusoma na kuelewa habari fupifupi za kiswahili"},
            { value: "kubainisha na kutunga kazi za fasihi simulizi"},
            { value: "kukusanya na kuhifadhi kazi za fasihi simulizi"},
            { value: "kuhakiki kazi za fasihi simullizi"},
            
        ];

        var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "tie (2022),kiswahili kitabu cha mwanafunzi kwa shule za sekondari kidato cha pili"},
            
        ];
        var topicsOptions = [
            { value: "chagua Mada Kuu"},
            { value: "uundaji wa maneno"},
            { value: "matumizi ya lugha katika miktadha mbalimbali"},
            { value: "uhakiki wa kazi za kifasihi simulizi"},
            { value: "uhifadhi wa kazi za kifasihi simulizi"},
            { value: "utungaji wa kazi za kifasihi simulizi"},
            { value: "uandishi"},
            { value: "usimulizi"}, 
            { value: "ufahamu"},
           
        ];

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
}  else  if (subClasses === "Form Three") {

if (subject === "Chemistry") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "promote knowledge on hardness of water"},
{ value: "establish accurate quantities of the reacting substances in various chemical reactions"},
{ value: "understand effects of electricity on chemical substances"},
{ value: "recognize appropriate methods of extraction of metal"},
{ value: "realize the concequences of environmental destruction"},
{ value: "realize chemistry principles in industrial processes"},
];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "applying chemistry principle in understanding industrial processes"},
{ value: "using technological skills in extraction of metals and conservation of environment"},
{ value: "solving problems of hardness of water in daily life"},
{ value: "using the concept of volumetric analysis in solving daily life problems"},
{ value: "using electrolysis to solve daily life problems"},
];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),chemistry for secondary schools student's book form three"},

];

var topicsOptions = [
{ value: "Select Topic"},
{ value: "chemical equation"},
{ value: "hardness of water"},
{ value: "acids,bases and salts"},
{ value: "the mole concept and related calculations"},
{ value: "volumetric analysis"},
{ value: "ionic theory and electrolysis"},
{ value: "chemical kinetics,chemical equilibrium and energetics"},
{ value: "extraction of metals"},
{ value: "compounds of metals"},
];

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


} else if ( subject === "Physics") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "realize the importance of friction force in daily life"},
{ value: "understand principles of construction of optical instruments"},
{ value: "understand the mechanism of heat transfer and its measurement"},
{ value: "promote knowledge on thermal expansion of matter"},
{ value: "understand effects and uses of current electricity"},

];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "applying rules of friction force in daily life"},
{ value: "using the knowledge of light in the construction of optical instruments"},
{ value: "applying the concepts and laws  of heat in daily life"},
{ value: "managing the use of current electricity in daily life"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),physics for secondary schools student's book form three"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "applications of vectors"},
{ value: "friction"},
{ value: "light"},
{ value: "optical instruments"},
{ value: "thermal expansion"},
{ value: "transfer of thermal energy"},
{ value: "measurement of thermal energy"},
{ value: "vapour and humidity"},
{ value: "current electricity"},


];

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
} else if (subject === "Mathematics") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "apply the knowledge on rates and variation in real life situations"},
{ value: "locate places on the  earth,s surface and find the distance between an two places"},
{ value: "represent data statistically and draw conclusions from numerical statistical information (mean,mode and medium)"},
{ value: "apply computations on sequences and series to discover mathematical patterns and solve problems on compound interest"},
{ value: "draw graphs of relations and functions and identify their properties"},
{ value: "prove and apply circle theorem"},
{ value: "solve real life problems involving double entry and trial balance"},
];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "use mathematical knownledge,skills and concept in solving real life related problems"},
{ value: "analyse and interpret statistical data"},
{ value: "generate sequences and series"},
{ value: "prove circle theorems"},
{ value: "prepare simple trading accounts"},
{ value: "draw graphs"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),mathematics for secondary schools student's book form three"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "relations"},
{ value: "functions"},
{ value: "statistics"},
{ value: "rates and variations"},
{ value: "sequences and series"},
{ value: "circles"},
{ value: "the earth as sphere"},
{ value: "accounts"},
];

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
} else if (subject === "Civics") {
var mainOptions = [
{ value: "Select Main Objective" },
{ value: "explain the importance of good ladership,team work,positive relationships,self worth and confidence qualities"},
{ value: "show an understanding of concepts,factors for,a nd indicators of economic and social development of our country"},
{ value: "show an understanding of the problem of poverty in tanzania and work diligently towards its alleviation at personal level"},

];

var competenceOptions = [
{ value: "Select Main competence"},   
{ value: "demonstrate good leadership,team work,positive relationships,self worth and confidence"},
{ value: "assess and analyse information on social and economic development and draw conclusions"},
{ value: "demonstrate knowledge on the magnitude of the problems of poverty in tanzania and work diligently in an effort to advance her/himself"},
];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),civics for secondary schools student's book form three"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "promotion of life skills"},
{ value: "economic and social development"},
{ value: "poverty"},
];

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
} else if (subject === "Biology") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "acquire basic knownledge principles,concepts and skills in evaluating the roles of physiological processes in plants and animals"},
{ value: "apply knowledge and skills of biological science and related fields in improving livestock and production"},
{ value: "classify organisms in their respective kingdoms,phylum/divison and class"},
{ value: "develop positive attitudes,value and practices for enhancing positive gender relations,environmental protection and sexual and reproductive health"},
{ value: "take appropriate precautions and measures against problem related to reproductive processes in animals and flowering plants" },
{ value: "apply appropriate skills in managing problems related to HIV/AIDS,drug/substance abuse,and sexual and reproductive health"},
];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "demonstrate appropriate use of bilogical knowledge,concepts,principles and skills in evaluating the roles of physiological processes in animals and plants"},
{ value: "group organisms according to their similarities and their differences"},
{ value: "demonstrate positive attitudes and responsiveness towards community social values take measures to protects oneself family and community"},
{ value: "use approriate skills to solve various health related problems"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),biology for secondary schools student's book form three"},

];
var topicsOptions = [
{ value: "Select Topic" },
{ value: "classification of living things"},
{ value: "movement"},
{ value: "coordination"},
{ value: "excretion"},
{ value: "regulation"},
{ value: "reproduction"},

];

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
}  else if (subject === "English") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "listen to,understand and respond to texts from various sources"},
{ value: "express oneself orally and in writing using appropriate language in various situations and settings"},
{ value: "read and  understand slightly complex texts"},
{ value: "read and analyse literary works"},
];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "use appropriate language content and style in expressing her/his ideas,opinions and feelings orally and witing"},
{ value: "apply reading comprehension strategies to extend and enhance content area knowledge"},
{ value: "use apppropriate langauge to summarize ,report and give his/her opinion"},
{ value: "read and narrate a story/event using appropriate language structures"},
{ value: "listen to,analyze texts and relate them to real life situations"},
{ value: "read,analyze texts and relat them to real life situations"},
{ value: "use english to obtain,proces,construct and provide subject matter information i spoken and written form"},
{ value: "read literary texts appreciating messages and themes read"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),english for secondary schools student's book form three"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "listening information from different sources"},
{ value: "using appropriate language content and style in speaking"},
{ value: "reading for information from different sources"},
{ value: "reading literary works"},
{ value: "writing using appropriate language content and style"},
{ value: "writing formal letters"},
];

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
} else if (subject === "Geography") {
var mainOptions = [
{ value: "Select Main Objective" },
{ value: "show an understanding of composition of the earth,geological time scale,structure and force that affects the earth and their economic importance" },
{ value: "show an understanding of formation,composition,impoprtance,characteristics,simple classification and conservation of soil" },
{ value: "develop an understang of the meaning ,types,equipment and application of simple survey" },
{ value: "develop skills to read,identify,measure and interpret topographical maps and photographs" },
{ value: "develop an understanding of the concept,types of statistics,presentation of data,simple statistical measures and their use" },

];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "knowledge on composition of the earth,geological time scale and force that affect the structure of the earth"},
{ value: "ability to utilize resources resulting from geoological processes"},
{ value: "ability to classify and conserve soil"},
{ value: "knowledge on  surveying techniques and ability to use survey equipment for proper land use planning"},
{ value: "knowledge on photographs and map work to read,identify,measure and interpret information  for use in social and economic activities"},
{ value: "knowledge on the concepts,types and importance of statistics"},
{ value: "the application of simple statistical measures to present and use data for various purposes"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),geography for secondary schools student's book form three"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "structure of the earth"},
{ value: "forces that affect the earth"},
{ value: "soil"},
{ value: "elementary survey and map"},
{ value: "map reading and map interpretation"},
{ value: "photograph reading and interpretation"},
];

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
} else if (subject === "History") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "understand and explain the processes of establishing colonial rule in africa"},
{ value: "understand and explain the different colonial administrative systems applied in africa and assess their impact"},
{ value: "understand and explain the sectors of c olonial economy,their features and impact on  africa"},
{ value: "demonstrate knowledge on the various colonial services and show how they consolidated colonialism"},

];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "demontrate knowledge on the processes of establishing colonial rule in africa"},
{ value: "demonstrate knowledge on the similarities and differences of colonial administrative systems applied in africa and shows ability to assess their impact"},
{ value: "demonstrate ability to analyse the different sectors of conial economy and assess their impact on africa"},
{ value: "demonstrates ability to critically analyse the various colonial social services"},
];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),history for secondary schools student's book form three"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "establishment of colonialism"},
{ value: "colonial administrative system"},
{ value: "colonial economy"},
{ value: "colonial social services"},
];

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
}  else if (subject === "Commerce") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "use bussiness communication facilities"},
{ value: "discuss marketing elements effectively"},
{ value: "examine the enterprising activities conducted in their differentiate services offered by financial institutions"},
{ value: "describe international trade activities"},
{ value: "develop competitive business ideas"},

];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "demonstrate ability to communicate business transactions effectively"},
{ value: "establish a wining marketing stratergy"},
{ value: "manage and solicit  financial resources"},
{ value: "demonstrate ability to conduct international trade"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),commerce for secondary schools student's book form three"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "business communication"},
{ value: "marketing"},
{ value: "finance"},
{ value: "international trade"},
{ value: "entrepreneurship"},

];

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
}  else if (subject === "Book-Keeping") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "use control account as part of the internal control of an organization"},
{ value: "calculate and record depreciation,and the acquisition and disposal of assets using different methods of depreciation"},
{ value: "prepare financial statements of a sole trader,non-profit making organizations including year-end adjustments"},

];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "make timely and appropriate adjustments in various business accounts"},
{ value: "apply internal control processes in a business environment"},
{ value: "apply double entry system in incomplete records"},
{ value: "prepare financial statements in accordance to international accounting standards"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),book-keeping for secondary schools student's book form three"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "adjustments"},
{ value: "control accounts"},
{ value: "accounting for single entry and incomplete records"},
{ value: "accounting for non-profit making organisation"},

];

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
}   else if (subject === "Kiswahili") {
        var mainOptions = [
            { value: "Chagua Lengo Kuu"},
            { value: "kutunga kazi za kifasihi za kiada kwa kutumia kiswahili sanifu"},
            { value: "kuwasiliana kwa mazungumzo na maandishi na watu katika miktadha mbalimbali"},
            { value: "kusoma na kuelewa maandiko mbalimbali"},
            { value: "kusikiliza na kuelewa kwa kina taarifa au habari mbalimbali kutokana na vyanzo vya habari zinazohusu masuala ya jamii"},
            { value: "kusoma na kuhakiki kazi za fasihi andishi"},
            { value: "kuainisha na kuchanganua tungo"},
            { value: "kuielewa na kuieleza asili ya lugha ya kiswahili"},
            { value: "kueleza kukua na kuenea kwa lugha ya kiswahili katika enzi ya waarabu na wajerumani nchini tanzania"},
            
        ];

        var competenceOptions = [
            { value: "Chagua Umahiri"},
            { value: "kuzungumza na kuandika kwa kiswahili sanifu"},
            { value: "kusoma na kuelewa habari ndefu za kiswahili"},
            { value: "kusikiliza na kuelewa mazungumzo yaliyo katika lugha ya kiswahili"},
            { value: "kuandika habari ndefu kiasi kwa kuzingatia taratibu za uandishi"},
            { value: "kubainisha na kuutunga kazi za fasihi andishi"},
            { value: "kuhakiki kazi za fasihi andishi kwa kuzinjgatia vifezo vya uhakiki"},
            { value: "kuainisha tungo"},
            { value: "kueleza asili ya kiswahili"},
            { value: "kueleza kukua na kuenea kwa lugha ya kiswahili katika enzi ya waarabu nchini tanzania"},
            
        ];

        var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "tie (2022),kiswahili kitabu cha mwanafunzi kwa shule za sekondari kidato cha tatu"},
            
        ];
        var topicsOptions = [
            { value: "chagua Mada Kuu"},
            { value: "ngeli za nomino"},
            { value: "mjengo wa tungo"},
            { value: "maendeleo ya kiswahili"},
            { value: "uhakiki wa kazi za fasihi  andishi"},
            { value: "utungaji wa kazi za fasihi andishi"},
            { value: "uandishi wa insha na matangazo"},
           
        ];

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
}   else if (subClasses === "Form Four") {

if (subject === "Chemistry") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "analyse critically properties of matter andtheir environmental effects"},
{ value: "show understanding of sources of organic compounds,their properties and uses in daily life"},
{ value: "use scientif skills to investigate the nature and properties of  soil"},
{ value: "use knowledge on conservation of soil for maximum utility"},
{ value: "understand effects of pollution and remedial measures"},
];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "applying appropriate skills to conserve the environment"},
{ value: "investigating the properties of organic compouds and their applications in daily life"},
{ value: "determining the nature and the properties of soil"},
{ value: "analyzing effects of pollution and prevention"},
];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),chemistry for secondary schools student's book form four"},

];

var topicsOptions = [
{ value: "Select Topic"},
{ value: "non metal and their compounds"},
{ value: "organic chemistry"},
{ value: "soil chemistry"},
{ value: "pollution"},
{ value: "qualitative analysis"},
];

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


} else if ( subject === "Physics") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "understand the laws and principles of waves and electromagnetic induction"},
{ value: "realize the importance of hazards of radioactive emission"},
{ value: "understand basic building unit for electronic circuit"},
{ value: "develop knowledge on the occurance of environmental disasters"},

];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "demonstrating effects and application of waves and electromagnetic induction"},
{ value: "recognizing the importance and hazards of radioactive emissions"},
{ value: "designing and implementing the simple electronic  circuit"},
{ value: "describing the solar system and other celestrial bodies"},
{ value: "describing the occurance of environmental disasters"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),physics for secondary schools student's book form four"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "waves"},
{ value: "electromagnetism"},
{ value: "radioactivity"},
{ value: "thermionic emission"},
{ value: "electronics"},
{ value: "elementary astronomy"},
];

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
} else if (subject === "Mathematics") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "apply mathematical knowledge and skills to form lines,calculate distance between two points and do problems on parallel and perpendicular lines in two-dimensional geometry"},
{ value: "derive and apply the formulae  for surface area and volume of geometrical figures"},
{ value: "find the sum,difference and scalar multiplication of vectors and hence use the knowledge to solve practical problems"},
{ value: "use 2 x 2 matrices to solve simultaneous equations and solve problems on transformation"},
{ value: "calculate the probability of an even and perform simple combination of probabilities"},
{ value: "draw graphs of sine and cosine functions and apply sine and cosine rules to solve problems"},
{ value: "use oblique projections to draw three dimensional figures and find the angle between a line and a plane and the angle between two planes"},
];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "solve general mathematical problems on coordinate geometry"},
{ value: "perform mathematical experiments and predict outcomes"},
{ value: "compute surface area and volume of the objects"},
{ value: "draw graphs and three-dimensional figures"},
{ value: "do computaions on matrices and vectors"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),mathematics for secondary schools student's book form four"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "coordinate geometry"},
{ value: "area and parameter"},
{ value: "three dimensional figures"},
{ value: "probability"},
{ value: "trigonometry"},
{ value: "vectors"},
{ value: "matrices and transformation"},
{ value: "linear programming"},
];

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
} else if (subject === "Civics") {
var mainOptions = [
{ value: "Select Main Objective" },
{ value: "apply life skills in real life situations"},
{ value: "show an understanding and appreciation of national cultural values"},
{ value: "show an understanding of globalisation issues and ability to alleviate their negative effects at personal level"},

];

var competenceOptions = [
{ value: "Select Main competence"},   
{ value: "apply life skills to deal with life situations"},
{ value: "demonstrate knowledge of national cultural values and willingness to promote the positive ones"},
{ value: "collectsclassify and analyse information on prevailing globalisation issues and their effects on tanzania and deal with them at personal level"},
];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),civics for secondary schools student's book form four"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "culture"},
{ value: "globalization"},
];

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
} else if (subject === "Biology") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "acquire basic knowledge,skills,concepts,principle and mechanisms of physioloogical processes in plants and animals"},
{ value: "develop practical skills in the studying growth processes,genetics and evolution"},
{ value: "apply knowledge,skills and principles of genetics in improving plant and animal breeds as well as resolving socio-cultural conflicts (eg. marital conflicts and child rejection)"},
{ value: "develop positive attitude, towards,counseling and voluntarytesting (CVT) and taking care of people living with HIV/AIDS"},
{ value: "classify organisms in their respective kingdoms,phylum and class" },
];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "make appropriate use of biological knowledge,concepts and principles in solving various problems in daily life"},
{ value: "perform practical activities in growth processes,genetics and evolution"},
{ value: "demonstrate appropriate use of genetic principles to improve animal,crop production and resol;ve socia-culturral conflicts"},
{ value: "demonstrate positive attitudes towards personal,community and social values as well as resolving health related problems"},
{ value: "group organisms according to their similarities and differences"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),biology for secondary schools student's book form four"},

];
var topicsOptions = [
{ value: "Select Topic" },
{ value: "growth"},
{ value: "genetics"},
{ value: "classification of living things"},
{ value: "evolution"},
{ value: "human immuno defficiency virus(HIV)/acquired immune deficiency syndrome(AIDS) and sexually transmitted infections (STIs)"},

];

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
}  else if (subject === "English") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "listen to,understand and respond to texts from various sources"},
{ value: "express oneself orally and in writing using appropriate language in different social contexts"},
{ value: "read and analyze literary works"},
{ value: "read and understand complex texts"},
];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "read,analyze texts and relates them to real life situations"},
{ value: "start,intervene and close a discussion on a familiar topic using suitable phrases"},
{ value: "present orally and in writing descriptions of complex subjects"},
{ value: "express herself/himself clearly,orally and witing,expressing points of view at some length"},
{ value: "read and understand long and complex factual texts"},
{ value: "scan a text for relevant information"},
{ value: "listen  to and point out relevant information"},
{ value: "read literary text appreciating messages and themes read"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),english for secondary schools student's book form four"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "expressing oneself"},
{ value: "listening  for the information"},
{ value: "reading literary works"},
{ value: "speaking using appropriate language content and style"},
{ value: "writing using appropriate language content and style"},
{ value: "writing application letters"},
];

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
} else if (subject === "Geography") {
var mainOptions = [
{ value: "Select Main Objective" },
{ value: "develop an understanding of the objectives,tools,intruments and importance of research output" },
{ value: "show an understanding of the major climatic types and their relationship natural regions" },
{ value: "develop an understang of the concepts of human population and settlement,factors for their distribution and change,relevant policies,associated problems and possible solutions" },
{ value: "development an understanding of the problems facing environment,their causes and solutions at national and global contexts" },
];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "the ability to utilize basic research skills and research output"},
{ value: "the knowledge on major climatic types and ability to relate climate and natural regions so as to plan and manage daily  life activities"},
{ value: "knowledge on the concepts of settlement and human population change,distribution and associated problems and use appropriate skills to manage them"},
{ value: "ability  to critically examine environmental problems and take appropriate measures  to solve them"},
{ value: "ability to critically examine environmental problems and take appropriate measures to solve them"},
];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),geography for secondary schools student's book form four"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "introduction to research"},
{ value: "climatic and natural regions"},
{ value: "human population"},
{ value: "settlements"},
{ value: "environmental issues and management"},
];

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
} else if (subject === "History") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "develop an understanding of the causes of the amjor crises in capitalist countries and assess their impact on africa"},
{ value: "develop an understanding and appreciation of the motives for the struggle for independence and analyse the efforts made and strategies used by the african people to achieve polititical independence"},
{ value: "develop knowledge on the efforts made to bring about social and economic development in africa after independence and assess their strengths and weeknesses"},
{ value: "develop knownledge on the efforts made by african nations to promote international co-operation and interdependence and assess their achievement and problems"},

];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "demonstrate knowledge on the causes of major cries in the capitalist countries and ability to assess their impact on africa"},
{ value: "demonstrate knowledge on the motive of the struggle for independence and ability to evaluate the strengths,weakness and contribution of the efforts made  and strategies used by african people to achieve political independence"},
{ value: "demonstrate knowledge on the efforts made to bring about social and economic development in africa after independence and shows ability to assess their strengths and weaknesses"},
{ value: "demonstrate knowledge on the efforts made by african nations to promote international co-operational and interdepence and assesses their achievements and problems"},
];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),history for secondary schools student's book form four"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "crises in the capitalist system"},
{ value: "nationalism and deconisation"},
{ value: "changes in political,social and economic policies in africa after independence"},
];

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
}  else if (subject === "Commerce") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "develop attitudes of paying taxes to the government organs"},
{ value: "examine the insurance policies offered in tanzania"},
{ value: "establish school based business model"},
{ value: "manage activities conducted in the business organizations"},
{ value: "establish formalized business"},

];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "demonstrate positive attitudes in paying tax"},
{ value: "administer procedures of insuring risks"},
{ value: "establish competitive and formalized business enterprises"},
{ value: "manage business activities"},
{ value: "develop business plan"},

];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),commerce for secondary schools student's book form four"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "taxation"},
{ value: "insurance"},
{ value: "business units"},
{ value: "business management"},
{ value: "entrepreneurship"},

];

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
}  else if (subject === "Book-Keeping") {
var mainOptions = [
{ value: "Select Main Objective"},
{ value: "compute and record elements of cost-material,labour and production overheads "},
{ value: "describe and prepare joint venture and partnerships accounts"},
{ value: "explain the nature,purpose and scope of an audit and discuss the role of the auditor"},

];

var competenceOptions = [
{ value: "Select Competence"},
{ value: "apply costing and behaviour in manufacturing environment"},
{ value: "demonstrate mutual agreement and commitment in business situations"},
{ value: "recognize the importance of auditing to business firm"},
];

var referenceOptions = [
{ value: "Select Reference"},
{ value: "tie (2022),book-keeping for secondary schools student's book form four"},

];
var topicsOptions = [
{ value: "Select Topic"},
{ value: "accounts for manufacturing firms"},
{ value: "consignments"},
{ value: "accounting for joint businesses"},
{ value: "accounting for department stores"},

];

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
}   else if (subject === "Kiswahili") {
        var mainOptions = [
            { value: "Chagua Lengo Kuu"},
            { value: "kuwasilliana kwa mazungumzo na maandishi na watu katika miktadha mbalimbali"},
            { value: "kusikiliza na kuelewa kw kina taarifa na habari mbalimbali kutokana na vyanzo vya habari zinzzohusu masuala ya ndani ya jamii"},
            { value: "kutunga kazi za kifasihi na za kiada kwa kutumia kiswahili sanifu  katika miktadha mbalimbali"},
            { value: "kuchanganua sentensi"},
            { value: "kusoma na kuhakiki kazi za kifasihi andishi"},
            { value: "kuelewa maumbo na tabia za maneno"},
            { value: "kuelewa na kuelezea kukua na kuenea kwa lugha ya kiswahili katika enzi ya waingereza na baada ya uhuru nchini tanzania"},
            
        ];

        var competenceOptions = [
            { value: "Chagua Umahiri"},
            { value: "kuzungumza na kuandika kwa kiswahili sanifu"},
            { value: "kusoma na kuelewa habari ndefu kiasi za kiswahili"},
            { value: "kusikiliza na kuelewa mazungumzo yaliyoko katika lugha ya kiswahili"},
            { value: "kuandika habari ndefu kiasi kwa kuzingatia taratibu za uandishi"},
            { value: "kuchanganua sentensi"},
            { value: "kubainisha na kutunga kazi za fasihi andishi"},
            { value: "kuhakiki kazi ya fasihi andishi kw akuzingatia vigezo vya uhakiki"},
            { value: "kueleza kukua na kuendea kwa lugha ya kiswahili katika enzi za waingereza na baada ya uhuru nchini tanzania"},
            
        ];

        var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "tie (2022),kiswahili kitabu cha mwanafunzi kwa shule za sekondari kidato cha nne"},
            
        ];
        var topicsOptions = [
            { value: "chagua Mada Kuu"},
            { value: "kuongeza msamiati wa kiswahili"},
            { value: "ukuaji na ueneaji wa lugha ya kiswahili ezni za waingereza na baada ya uhuru"},
            { value: "uhakiki wa kazi za fasihi andishi"},
            { value: "kutunga kazi za fasihi"},
            { value: "uandishi"},
            { value: "ufahamu"},
           
        ];

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
} */

}
document.getElementById("classes").addEventListener("change", createOptionElement);
document.getElementById("subject").addEventListener("change", createOptionElement);
createOptionElement();
