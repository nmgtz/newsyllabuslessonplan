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

    if (subClasses === "Form One") {
        if (subject === "Chemistry") {
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the concept of Chemistry (meaning, branches, applications and relationships with other disciplines)"},
            { value: "Discuss the contribution of Chemistry in the development of modern society"},
            { value: "Discuss the contribution of Chemistry in the development of modern society"},
            { value: "Describe the concepts of chemical elements (criteria for assigning chemical symbols), compounds (binary compound) and mixtures (types of solution and separation of mixtures)"},
            { value: "Compare the properties of compounds with those of constituent elements"},
            { value: "Explain the concept of the periodic table (1st 20 elements in the Periodic Table; metals and non-metals)"},
            { value: "Describe basic Chemistry laboratory skills (chemistry laboratory rules and safety measures, first aid, fire and firefighting, and Chemistry laboratory apparatus)"},
            { value: "Perform experiments on the changes of matter from one state to another"},
            { value: "Perform experiments on separation of different mixtures using different methods"},
            
        ];

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of concepts, theories and principles in Chemistry"},
            { value: "Conduct experiments in Chemistry"},
            
        ];

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Chemistry for secondary schools student's book, form one. Tanzania Institute of Education"},
            
        ];
        
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of basic concepts, theories and principles in Chemistry"},
            { value: "Conduct experiments in Chemistry"},
            
            
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
            { value: "Select Main Activity"},
            { value: "Explain the concept of Physics (Meaning, branches and connection with other disciplines)"},
            { value: "Discuss the contribution of Physics to the development of modern society"},
            { value: "Explain concepts of physical quantities (fundamental and derived quantities) and their, SI units"},
            { value: "Describe concepts of linear motion (speed, velocity, acceleration, distance, and displacement)"},
            { value: "Explain the concepts and principles related to force, density, pressure, work, power, energy"},
            { value: "Deduce the relationship between density, sinking and floating"},
            { value: "Describe the mechanical properties of matter in relation to force and energy"},
            { value: "Describe various instruments used for measurement in Physics"},
            { value: "Relate measuring instruments to physical quantities"},
            { value: "Use mathematical knowledge to describe relationship between various physical quantities (force, velocity, acceleration, density, pressure)"},
            { value: "Conduct experiments related to linear motion, density, force, pressure, work, energy, power and mechanical properties of matter"},
            { value: "Explain the methods of analysing experimental data in physics (statistical analysis)"},
            { value: "Use analytical methods to manipulate experimental data in physics"},
            { value: "Use graphical method to present experimental results in physics"},
            { value: "Collect and analyse data to explain various physical quantities (density, force, pressure)"},
            { value: "Collect and analyse data to explain experimental observations related to linear motion, force, density, pressure and mechanical properties of matter"},
            { value: "Develop prototype devices based on the concepts, theories, principles and laws gained from the field of linear motion, force, density, pressure and mechanical properties of matter"},
            
        ]; 
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of basic concepts, theories and principles of Physics"},
            { value: "Demonstrate mastery of basic terminologies, measurements and symbols in Physics"},
            { value: "Use mathematics to explain physical principles and phenomena"},
            { value: "Demonstrate mastery of basic experimental skills in Physics"},
            { value: "Demonstrate mastery of data analysis, presentation and report writing in Physics"},
            { value: "Collect, describe and relate physical data"},
            { value: "Carry out a project in Physics"},
            
        ]; 


        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Physics for secondary schools student's book, form one. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Apply knowledge of Physics in various contexts"},
            { value: "Conduct experiments in Physics"},
            { value: "Evaluate and use information in Physics"},

            
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
    } else if (subject === "Basic Mathematics") {
        
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Explain the basic concepts of Mathematics (Meaning of mathematics, branches of mathematics, relationship between mathematics and other subjects, importance of mathematics)"},
            { value: "Explain the concept of rational, irrational, and real numbers"},
            { value: "Convert repeating/recurring decimals into fractions and vice versa"},
            { value: "Represent rational numbers on a number line"},
            { value: "Explain the concept of inequalities and absolute values of real numbers"},
            { value: "Describe the importance of numbers in real-life situations"},
            { value: "Explain the concept of ratios and proportions"},
            { value: "Solve ratio and proportion problems"},
            { value: "Explain the concept of approximations (rounding off, significant figures, and decimal places)"},
            { value: "Round off numbers and estimate values of expressions"},
            { value: "Approximate numbers to the required significant figures and decimal places"},
            { value: "Use approximations in computations and measurements of quantities in various contexts"},
            { value: "Explore the basic tenets of algebra (algebraic expressions and equations, linear simultaneous equations of two unknowns, inequalities in one unknown)"},
            { value: "Use algebraic expressions to model situations (word problems into algebraic expressions and equations)"},
            { value: "Solve simultaneous equations using substitution and elimination methods"},
            { value: "Solve inequalities in one unknown"},
            { value: "Explore the basic tenets of coordinate geometry (gradient and equations of a straight line, graphs of linear equations)"},
            { value: "Find the gradient/slope of a line"},
            { value: "Determine the equation of a straight line and draw its graph"},
            { value: "Solve linear simultaneous equations graphically"},
            { value: "Use mathematical software to solve and draw graphs of simultaneous equations"},
            
            
        ];
        
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Use numerical skills in different contexts"},
            { value: "Use ratios and proportions in daily life"},
            { value: "Use geometry, approximations, relations and functions in various contexts"},
            { value: "Use algebra and matrices in problem solving"},
            { value: "Use basic coordinate geometry, trigonometry and vectors skills in daily life"},
            
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Mathematics for secondary schools student's book, form one. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of mathematical language"},
            { value: "Demonstrate mastery of basic concepts in geometry and algebra"},
            { value: "Demonstrate mastery of basic concepts in coordinate geometry, trigonometry, circles, vectors, probability and statistics"},

            
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
    } else if (subject === "Historia Ya Tanzania na Maadili") {
        
        var mainOptions = [
            { value: "Chagua Shughuli Kuu" },
            { value: "Kueleza asili ya jamii za Kitanzania (Wabantu, Wanilo, Wakushito, Wakichembe)"},
            { value: "Kubaini shughuli mbalimbali za makundi ya asili ya jamii za Kitanzania"},
            { value: "Kueleza maadili ya jamii za asili ya Kitanzania"},
            { value: "Kuchambua maadili na urithi wa jamii za Kitanzania"},
            { value: "Kueleza matendo ya msingi yanayokuza na kulinda maadili na urithi wa jamii za Kitanzania"},
            { value: "Kubaini fursa mbalimbali zilizopo kwenye urithi wa jamii za Kitanzania"},
            { value: "Kueleza namna fursa zilizopo kwenye urithi wa jamii za Kitanzania zinavyoweza kutumika kukuza uchumi binafsi na jamii"},
            { value: "Kueleza njia mbalimbali za kutunza urithi wa jamii za Kitanzania"},
            { value: "Kuainisha shughuli mbalimbali za kujenga ushirikiano na kukuza uchumi wa Taifa"},
            { value: "Kufafanua namna shughuli mbalimbali zinavyochangia kujenga ushirikiano na kukuza uchumi wa Taifa"},
            { value: "Kubaini mifumo ya kijamii ya Tanzania kabla ya ukoloni"},
            { value: "Kueleza mifumo ya kijamii ya Tanzania ilivyokuza maadili kabla ya ukoloni"},
            { value: "Kubaini mifumo ya kiuchumi na kisiasa katika jamii za Kitanzania kabla ya ukoloni"},
            { value: "Kueleza jinsi mifumo ya kisiasa na kiuchumi ilivyokuza na kuendeleza shughuli za kiuchumi na kisiasa kabla ya ukoloni"},
            { value: "Kufafanua uhusiano kati ya jamiii za Kitanzania na za Mashariki ya Kati, Mashariki ya Mbali na Ulaya katika kuendeleza shughuli za kiuchumi na kisiasa kabla ya ukoloni"},
            { value: "Kutathmini mchango wa mifumo ya kisiasa na kiuchumi katika kukuza maadili ya jamii za Kitanzania kabla ya ukoloni"},
            { value: "Kueleza hali ya sayansi na teknolojia katika jamii za Kitanzania kabla ya ukoloni"},
            { value: "Kubaini vichocheo vya mabadiliko ya sayansi na teknolojia katika jamii za Kitanzania kabla ya ukoloni"},
            
        ];

        

        var competenceOptions = [
            { value: "Chagua Umahiri mahususi"},   
            { value: "Kuelezea chimbuko la jamii za Kitanzania na maadili yake"},
            { value: "maarifa na ujuzi wa maadili na urithi wa jamii za Kitanzania"},
            { value: "Kutumia maarifa na ujuzi wa historia na urithi kubuni fursa mbalimbali zilizopo katika jamii za Kitanzania"},
            { value: "Kubaini fursa mbalimbali za kujenga ushirikiano na kukuza uchumi wa kitaifa"},
            { value: "Kuchambua mifumo ya kijamii (elimu, afya, utamaduni) iliyokuza na kuendeleza maadili ya jamii za Kitanzania kabla ya ukoloni"},
            { value: "Kuchambua mifumo iliyokuza na kuendeleza uchumi na siasa katika jamiii za Kitanzania kabla ya ukoloni"},
            { value: "Kutathmini vichocheo vya mabadiliko ya sayansi na teknolojia katika jamii za Kitanzania kabla ya ukoloni"},
            
        ];

        var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Taasisi ya Elimu Tanzania. (2023). Historia Ya Tanzania na Maadili kitabu cha mwanafunzi kwa shule za sekondari kidato cha kwanza. Taasisi ya Elimu Tanzania"},
            
        ];
        var topicsOptions = [
            { value: "Chagua Umahiri mkuu"},
            { value: "Kulinda historia ya Tanzania, urithi na maadili ya Taifa"},
            { value: "Kumudu historia ya Tanzania na maadili kabla ya ukoloni"},
            

            
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
            { value: "Select Main Activity"},
            { value: "Explain the basic concepts of Biology (meaning, branches, basic terminologies, importance and its relationship with other disciplines)"},
            { value: "Describe a cell (meaning,types, structures and functions)"},
            { value: "Describe nutrition in plants (photosynthesis, leaf structure and mineral requirements)"},
            { value: "Explain the concept and systems of classification (meaning importance of classification, rules of scientific naming of organisms, artificial and natural classification systems)"},
            { value: "Describe the major groups of organisms: (Monera, Protista, Fungi, Plantae, Animalia and Viruses)" },
            { value: "Describe the basic skills for conducting biological experiments (observation, measurement and experimentation)"},
            { value: "Carry out microscopic observation of a cell"},
            { value: "Carry out investigations related to photosynthesis (conditions necessary for photosynthesis)"},
            { value: "Prepare and present a report on cell and photosynthesis investigations"},
        ];

        
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Describe the physiological, anatomical and ecological processes of living organisms"},
            { value: "Demonstrate mastery of scientific biological terminologies"},
            { value: "Demonstrate mastery of basic skills for conducting biological investigations"},
            { value: "Prepare and present results of biological investigations"},
            
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Biology for secondary schools student's book, form one. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence" },
            { value: "Demonstrate mastery of the concepts, principles and processes of Biology"},
            { value: "Communicating using scientific biological terminologies"},
            { value: "Conduct biological investigations"},
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
            { value: "Select Main Activity"},
            { value: "Familiarise with various types of search engines (e.g., Google, Google Scholar, Bing)"},
            { value: "Utilise ICT tools to search for general information (e.g., books, journals)"},
            { value: "Answer questions based on information from presentations/tasks"},
            { value: "Practise pronunciation of words from oral and audio/audio-visual sources"},
            { value: "Write words heard from oral and audio/audio-visual sources "},
            { value: "Reproduce messages from oral presentations"},
            { value: "Distinguish words with minimal sound distinctions that have different meanings (cut/cat; paper/ pepper; date/debt)"},
            { value: "Practise pronunciation with proper word stress assignment"},
            { value: "Practise pronunciation of words with short and long vowels (e.g., sit/seat, hit/ heat, pot/port)"},
            { value: "Practise pronunciation of unfamiliar sounds (e.g., through the use of tongue twisters, songs, poems)"},
            { value: "Practise pronunciation of words with similar sounds that have different spellings (e.g., one/won, ewe/you)"},
            { value: "Write new vocabulary from conversations and written texts on particular topics (e.g., politics, sports, tourism, agriculture)"},
            { value: "Construct sentences using vocabulary acquired from conversations and written texts"},
            { value: "Play vocabulary building games using digital and non-digital resources (e.g., word board games, charades, picture games, flash cards)"},
            { value: "Express ideas or opinions in contextualised oral and written language tasks using proper grammar and vocabulary (e.g hospital, market, library, bus stop, sport and games)"},
            { value: "Construct sentences using appropriate grammar and vocabulary relating to a specific context (structure: tenses – simple past, simple present, articles, present progressive, pronouns, coordinators, prepositions, adjectives, adverbs)"},
            { value: "Debate on topics using proper grammar and vocabulary "},
            { value: "Sequence the order of events in stories"},
            { value: "Make a summary of stories"},
            { value: "Make a summary of stories"},
            { value: "Paraphrase various oral messages from different contexts"},
            { value: "Respond to oral messages from different contexts"},
            { value: "Respond to questions about oral messages"},
            { value: "Express ideas and opinions in different interpersonal communication settings (e.g., I think…, I guess…, In my opinion…, I would say …)"},
            { value: "Use appropriate non-verbal cues in interpersonal communication"},
            { value: "Use proper grammar and vocabulary in different interpersonal communication contexts (e.g., greetings, biding farewell, apologising)"},
            { value: "Use appropriate language and expressions in communicating with people of different age groups and statuses (e.g., peers, elders, family members, leaders)"},
            { value: "Express daily routines (structure: present simple)"},
            { value: "Express ongoing activities (structure: present progressive)"},
            { value: "Express family relationship and occupations (structure: present simple+progressive)"},
            { value: "Express ownership/ possession (structure: have/has in present simple and had in past simple, apostrophe, possessive pronouns)"},
            { value: "Give directions"},
            { value: "Recognise the main stages of writing texts (e.g., pre-writing, drafting, revising, editing)"},
            { value: "Write a variety of friendly letters and invitations (vocabulary: Dear Father/ Uncle, Dear Mother/Aunt, Mr/Mrs…, Dr./ Prof./Madam/Ms …)"},
            { value: "Create dialogues on various topics (e.g., the value of education, environment, culture, gender equality)"},
            { value: "Create and express orally daily and weekly timetables for routines"},
            
        ];

        

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Use ICT tools to search for information from different sources"},
            { value: "Develop listening skills"},
            { value: "Produce short and coherent oral messages with intelligible pronunciation and fluency"},
            { value: "Develop vocabulary from conversations and written texts"},
            { value: "Use appropriate grammar and vocabulary in oral and in written language tasks"},
            { value: "Read texts for comprehension"},
            { value: "Comprehend oral messages with increasing difficulty"},
            { value: "Respond appropriately in a variety of oral and written communication contexts"},
            { value: "Use appropriate grammar and vocabulary for oral communication in a variety of contexts"},
            { value: "Create a variety of texts for different communicative purposes using the appropriate tone and register"},
            
        ];  

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). English Language for secondary schools student's book, form one. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main Competence"},
            { value: "Manage information search from different sources for lifelong learning"},
            { value: "Demonstrate mastery of English language skills"},
            { value: "Comprehend oral and written information"},
            { value: "Communicate effectively in different contexts"},
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
            { value: "Select Main Activity" },
            { value: "Explain the concept and scope of Geography (branches, importance and relationship with other disciplines)" },
            { value: "Describe the Earth (origin, shape, size, position and movements of the earth in the solar system, and parallels and meridians)" },
            { value: "Describe major features of the Earth’s surface (continents, oceans, major relief features, large inland water bodies and vegetation zones)" },
            
        ];

        

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the origin and the structure of the Earth and Earth systems"},
            { value: "Demonstrate an understanding of the major features of the Earth surface "},
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Geography for secondary schools student's book, form one. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of the structure of the Earth"},
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
            { value: "Select Main Activity"},
            { value: "Describe the concept of History and the sources of historical information"},
            { value: "Describe the theories of the origin of human beings"},
            { value: "Describe the stages of human evolution and their technological Ages"},
            { value: "Describe different modes of production in pre-colonial Africa"},
            { value: "Explain different economic activities and their impact on pre-colonial African societies"},
            { value: "Describe social-political organisations and education in pre-colonial African societies"},
            
        ];

       

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the concept of History and sources of historical information"},
            { value: "Demonstrate an understanding of theories of the origin of human beings"},
            { value: "Demonstrate an understanding of the economic, political, social and technological development of pre-colonial Africa"},
            
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). History for secondary schools student's book, form one. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of African history before colonialism"},
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
    }  else if (subject === "Business Studies") {
        
        
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the concept and scope of business studies, and its relationship with other disciplines"},
            { value: "Describe the concept and theories of entrepreneurship (meaning, characteristics, skills and importance)"},
            { value: "Describe sole proprietorship (meaning, features, advantages and disadvantages and start-up)"},
            
        ];

        

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of the concepts, theories and principles of Business Education"},
            
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Business Studies for secondary schools student's book, form one. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of business knowledge"},
           
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
            { value: "Select Main Activity"},
            { value: "Explain the concept of Book Keeping (origin, meaning, purpose, relationship with other disciplines and basic terms)"},
            { value: "Explain the basis for recording business transactions (accounting assumptions and principles)"},
            { value: "Describe the theory of the double-entry system of Book-keeping(the accounting equation)"},
            { value: "Describe various types of accounts (assets, liabilities, capital, revenue and expenses)"},
            { value: "Identify sources of business transactions (source documents)"},
            { value: "Record business transactions from various source documents"},
            { value: "Post recorded business transactions from books of original entry to ledger accounts and balance off the accounts"},
            { value: "Describe the trial balance"},
            { value: "Prepare a trial balance to check the arithmetical accuracy of ledger accounts"},
            { value: "Describe basic financial statements (meaning, types, purpose, content and format)"},
            { value: "Prepare a basic income statement"},
            { value: "Classify assets and liabilities"},
            { value: "Prepare a basic statement of financial position"},
            
        ];

       

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the basic principles and theories of Book-keeping"},
            { value: "Record business transactions using source documents"},
            { value: "Prepare a trial balance"},
            { value: "Prepare basic profit or loss statements"},
            { value: "Prepare basic business financial position statements"},
            
        ];  

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Book-Keeping for secondary schools student's book, form one. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the principles of Book-keeping"},
            { value: "Prepare basic financial statements"},
           
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
            { value: "Chagua Shughuli Kuu"},
            { value: "Kutumia Kiswahili katika mijadala mbalimbali kwa kuzingatia utamaduni wa Mtanzania (mf. Matumizi ya tafsida na uteuzi wa maneno kulingana na mila na desturi za Mtanzania)"},
            { value: "Kusimulia habari na matukio kwa kuzingatia kiimbo, mkazo, na lafudhi pamoja na dhima zake"},
            { value: "Kuandika hadithi kwa kuzingatia mpangilio na uhusiano sahihi wa maneno (nomino, vivumishi, vielezi, viwakilishi, vitenzi, vihisishi, vihusishi na viunganishi) katika sentensi"},
            { value: "Kuandika hadithi kwa kuzingatia mpangilio na uhusiano sahihi wa sentensi katika aya"},
            { value: "Kusikiliza mazungumzo changamani na kujibu maswali"},
            { value: "Kueleza kwa muhtasari mazungumzo changamani aliyoyasikiliza"},
            { value: "Kushiriki katika majadiliano ya masuala mbalimbali kwa kuzingatia sifa za lugha ya mazungumzo (mf. lugha ya mkato, kupeana nafasi)"},
            { value: "Kusoma matini fupi changamani kwa kuzingatia alama za uandishi,kasi sahihi na kiimbo cha tungo"},
            { value: "Kueleza namna alama za uandishi na kiimbo vinavyoathiri ujumbe katika usomaji wa matini fupi changamani"},
            { value: "Kuandika hoja kuu kutoka katika matini fupi changamani alizozisoma kwa kuzingatia sifa za lugha ya maandishi (mf. Alama za uandishi, miunganiko sahihi ya tungo, usanifu)"},
            { value: "Kutumia TEHAMA kutafuta maana ya maneno mapya kutoka katika matini aliyoisoma"},
            { value: "Kutumia msamiati kwa usahihi katika mazungumzo na maandishi"},
            { value: "Kutumia taarifa mbalimbali za kamusi katika mawasiliano ya mazungumzo na maandishi"},
            { value: "Kuzungumza kwa ufasaha katika miktadha mbalimbali (mf. nyumbani, shuleni na hospitalini)"},
            { value: "Kutumia lugha kwa ufasaha katika malumbano ya hoja"},
            { value: "Kujieleza kwa ufasaha kwa maandishi katika miktadha mbalimbali"},
            
        ];

        

        var competenceOptions = [
            { value: "Chagua Umahiri Mahususi"},
            { value: "Kutambua Kiswahili kama kielelezo cha utaifa na utambulisho wa Mtanzania"},
            { value: "Kukuza uelewa wa sarufi ya Kiswahili"},
            { value: "Kusikiliza na kuelewa mazungumzo"},
            { value: "Kusoma matini kwa ufasaha na ufahamu"},
            { value: "Kutumia kamusi katika miktadha mbalimbali"},
            { value: "Kuwasiliana kwa ufasaha kwa njia ya mazungumzo"},
            { value: "Kuwasiliana kwa njia ya maandishi katika miktadha mbalimbali"},
            
        ]; 

        var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Taasisi ya Elimu Tanzania. (2023), kiswahili kitabu cha mwanafunzi kwa shule za sekondari kidato cha kwanza, Taasisi ya Elimu Tanzania."},
            
        ];
        var topicsOptions = [
            { value: "chagua Umahiri Mkuu"},
            { value: "Kumudu misingi ya Kiswahili"},
            { value: "Kumudu lugha ya mazungumzo na ya maandishi"},
            { value: "Kuwasiliana katika miktadha mbalimbali"},
           
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
    } else if (subject === "Computer Science") {
        
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the concept of Computer Science (meaning, importance, application)"},
            { value: "Describe fields related to Computer Science (IT, ICT, IS, Computer Engineering)"},
            { value: "Describe computer systems (Meaning, types, functions, and significance)"},
            { value: "Describe computer hardware (meaning, components, functions, computer generation)"},
            { value: "Describe computer software (meaning, types, functions)"},
            { value: "Describe and observe principles of computer system handling (safety measures, management, cleanliness, data backup and utilities)"},
            { value: "Install simple computer software"},
            { value: "Organise computer files in different operating systems (windows, Linux, etc)"},
            { value: "Describe the steps in solving a problem using computers"},
            { value: "Demonstrate an understanding of basic principle of algorithms"},
            { value: "Design and present a single algorithm using flow charts and pseudocode"},
            
        ];

       

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the concept of Computer Science"},
            { value: "Demonstrate an understanding of computer systems"},
            { value: "Demonstrate mastery of maintenance and troubleshooting of computer system"},
            { value: "Demonstrate mastery of the basic principles in problem solving(concept of problem solving, steps of problem solving, concept of algorithms)"},
            
        ];  

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Computer Science for secondary schools student's book, form one. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the basic Concepts of Computer Science"},
            { value: "Demonstrate mastery of the basic principles of Computer Science"},
           
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
 else if (subject === "Elimu ya Dini ya Kiislam") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Kufafanua ufahamu wa Elimu kwa mtazamo wa Uislamu. (Maana, lengo, chanzo na umuhimu wa elimu, sifa za mtu aliyeelimika, mgawanyo wa Elimu, umuhimu wa somo la Elimu ya Dini ya Kiislamu, uhusiano wa somo la Elimu ya Dini ya Kiislamu na masomo mengine)."},
        { value: "Kuchambua ufahamu wa dini kwa mujibu wa Qur’an na Sunnah. (Maana ya dini, aina za dini)"},
        { value: "Kuchambua ufahamu wa Imani kwa mujibu wa Qur’an na Sunnah. (Maana, nguzo za Imani na nguzo ya ihsani, sifa za muumini wa kweli katika aya za Quran; (49:15), ( 8:2 – 4), (2:2 – 5), (23:1-11)"},
        { value: "Kufafanua ufahamu wa Tawhiid na shirki. (Maana,namna ya kumpwekesha Allaah (SW), umuhimu wa Tawhiid, aina za shirki, madhara ya shirki)"},
        { value: "Kuchambua ufahamu wa Qur’an. (Maana, kushuka, namna ilivyo hifadhiwa na misingi ya kuifahamu)"},
        { value: "Kuchambua ufahamu wa usomaji wa Qur’an. (umuhimu wa kusoma Qur’an kwa kuzingatia hukumu za Tajwiid, hukumu za nun sakina na tanwin)"},
        { value: "Kuchambua sura zilizoteuliwa: Al-Fat-ha (1); An-Naas (114); Al-Falaq (113); Ikhlas (112). (Kusoma kwa hukumu, kuhifadhi, kutafsiri na kueleza mafunzo ya kila sura)"},
        { value: "Kuchambua ufahamu wa Sunnah na Hadithi. (Maana, umuhimu na tofauti ya Sunnah na Hadithi, kazi ya Sunnah)"},
        { value: "Kuchambua Hadithi zilizoteuliwa kuhusu Ikhlas, kujiheshimu na kuheshimu wazazi, viongozi na wakubwa, kuwa mpole na mnyenyekevu, kuwa mkweli na kujiepusha na uongo, kuwa mwaminifu na mwadilifu, kuchunga ahadi, kujiepusha na maongezi ya kipuuzi,kuwa na upendo, adabu za kunyoa/ kusuka nywele (Kusoma kwa kuhifadhi, kuandika, kutafsiri na kubainisha mafunzo)"},
        { value: "Kufafanua ufahamu juu ya Uislamu na nguzo za Uislamu kwa mujibu wa Qur an na Sunnah (Maana, sifa za Muislamu, lengo, umuhimu wa kila nguzo)"},
        { value: "Kueleza ufahamu wa Shahada. (Kutamka shahada mbili kwa matini ya kiarabu, Tafsiri ya shahada, hatua za shahada, umuhimu wa shahada)"},
        { value: "Kufafanua utekelezaji wa swala za faradhi Sharti: (twahara- udhu, josho, tayamamu, kuondoa najisi), kuelekea qibla, kujisitiri, kuingia kwa wakati) nguzo, Sunnah, Makruh na yanayobatilisha sala, namna ya kuswali swala za jamaa na swala ya ijumaa , kuswali nyakati za dharura safarini, mgonjwa na vitani,)"},
        { value: "Kubainisha swala za Sunnah (Swala za Iddi, Tarawehe, witri, Qabliyyah na Ba’adiyyah, Dhuha, Tahiyyaatul masjid, Qiyaamullayl na Istikhara)."},
        { value: "Kufafanua mambo anayostahiki kufanyiwa maiti wa Kiislamu. (Kuoshwa, kuvishwa sanda, kuswaliwa na kuzikwa)."},
        { value: "Kuchambua ufahamu wa Fiqh. (maana ya Fiqh, matapo ya Fiqh, chimbuko, na umuhimu wa fiqh)"},
        { value: "Kufafanua misingi na vyanzo vya sharia ya Kiislamu (Qur an, Sunnah na Ijtihad)."},
        { value: "Kuchambua Ufahamu wa kulingania Uislamu katika jamii. (Maana, lengo, misingi, umuhimu na faida)."},
        { value: "Kufafanua nguzo za da`awah (Da`i, hadhira na ujumbe)."},
        { value: "Kufafanua ufahamu wa historia ya mwanadamu kwa mujibu wa Uislamu. (Tofauti ya mtazamo wa Uislamu na ule wa makafiri juu ya maana, umuhimu wa historia,lengo la kuumbwa mwanadamu na hadhi yake hapa ulimwenguni)."},
        { value: "Kuchambua historia ya nabii Adam (A.S), (Kuumbwa, maisha ya peponi, kuteremshwa ardhini na maisha ya watoto wake)."},
        { value: "Kuchambua historia ya manabii kabla ya Mtume Muhammad (S.A.W): Nuhu (A.S), Ibrahim (A.S), Lut (A.S), Musa (A.S); na Isa (A.S). (wasifu, hali ya jamii zao, mbinu za kulingania na mafunzo yatokanayo katika kujenga jamii bora)."},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Kutambua uwepo wa Allaah (S.W) na sifa zake."},
        { value: "Kuisoma Qur’an kwa mazingatio ya hukumu na ujumbe."},
        { value: "Kuishi kwa kuzingatia Sunnah ya Mtume Muhammad (S.A.W)"},
        { value: "Kutekeleza nguzo za Uislamu kwa kuzingatia lengo la kila nguzo."},
        { value: "Kuchunga mipaka ya Allaah (S.W) katika kuendesha maisha ya binafsi na jamii"},
        { value: "Kutumia Qur’an na Sunnah kulingania jamii."},
        { value: "Kutumia historia ya Uislamu kujenga mwenendo mwema wa jamii."},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Elimu Ya Dini Ya Kiislamu for secondary schools student's book, form one. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Kumtambua, kumpenda, kumtukuza na kumsifu Allaah (S.W)."},
        { value: "Kumtumikia Allaah (S.W) katika kila kipengele cha maisha"},
        { value: "Kulingania na kusimamisha haki na uadilifu katika jamii"},
       
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
}  else if (subject === "Bible Knowledge") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Explain the concept of the Bible and Bible Knowledge"},
        { value: "Classify the books in the Bible"},
        { value: "Explain the concept of the Book of Genesis"},
        { value: "Describe the concept of God’s creation"},
        { value: "Clarify man’s responsibility for God’s creations"},
        { value: "Explain the importance of taking care of life and the environment"},
        { value: "Analyse the Fall of Man and its consequences"},
        { value: "Describe the history of the biblical Patriarchs"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Use the Book of Genesis to learn about creation, responsibility and taking care of life"},
        { value: "Demonstrate mastery of the Holy Scripture through the Book of Genesis"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Bible Knowledge for secondary schools student's book, form one. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate an understanding of Creation and God’s commandments"},
       
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
}  else if (subject === "Agriculture") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Explain the basic concepts of agriculture (meaning of agriculture and its importance, branches of agriculture relationship of Agriculture with other subjects)"},
        { value: "Describe soil (conceptualisation of soil, its constituents, physical, chemical, and biological properties)"},
        { value: "Describe the principles and practices for the production of horticultural crops (conceptualisation of horticultural crops; principles and practices for production of horticultural crops: (amaranth, chinese cabbage, onion, tomato)"},
        { value: "Describe the principles and practices for the production of poultry (conceptualisation of poultry production; principles and practices for production of chicken (layers, broilers and dual purpose) and duck"},
        { value: "Perform husbandry practices in the production of horticultural crops (amaranth, chinese cabbage, onion, tomato)"},
        { value: "Perform husbandry practices in the production of poultry (local, layer, broiler and dual purpose chicken) and duck"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Demonstrate an understanding of the principles of agriculture"},
        { value: "Apply basic principles of husbandry in crop production"},
        { value: "Apply basic principles of husbandry in animal production"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Agriculture for secondary schools student's book, form one. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate mastery of the principles of agriculture"},
        { value: "Use basic agricultural skills"},
       
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
    } 
    else if (subClasses === "Form Five") {
        if (subject === "Chemistry") {
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the concept of the atom (Dalton’s atomic theory, Bohr’s atomic theory, atomic mass and quantum theory)"},
            { value: "Use different atomic theories to determine the electronic configuration of elements with different properties"},
            { value: "Explain the concept of chemical bonding and the interactions of atoms to form molecules"},
            { value: "Describe the concept of gases in terms of the gas laws and the kinetic theory of gases"},
            { value: "Demonstrate an understanding of changes in the physical and chemical properties of elements according to their positions in the periodic table"},
            { value: "Analyse the periodic trends of elements in relation to their physical and chemical properties"},
            { value: "Describe the concept of colligative properties in understanding responses of the system towards changes in the environment (boiling point elevation, freezing point depression, osmotic pressure, relative lowering of vapour pressure and Raoult’s law)"},
            { value: "Examine the applications of colligative properties in the purification of water, dialysis, preservation of food and in antifreeze and coolants"},
            { value: "Describe the concept of two component liquid systems (immiscible liquid, completely miscible liquid and the distribution law)"},
            { value: "Examine the applications of two component liquid systems in pharmaceutical industries and in the extraction of plant components, separation and purification of substances"},
            { value: "Describe the concept of energetics (Heat/enthalpy of reactions and Hess’s law)"},
            { value: "Examine the applications of energetics in daily life in combustion of fuel, cooking and human body metabolism"},
            { value: "Describe the concepts of aromatic hydrocarbons, halogen derivatives of hydrocarbons, phenols, carbonyl compounds, carboxylic acids and their derivatives, amines and polymers"},
            { value: "Apply IUPAC rules in naming of aromatic hydrocarbons, halohydrocarbons,phenols, carbonyl compounds, carboxylic acids and their derivatives, and amines"},
            { value: "Examine reactions of aromatic hydrocarbons, phenols, carbonyl compounds, and carboxylic acids and their derivatives for preparation of useful organic products like soaps, perfumes and pesticides"},
            { value: "Examine reactions of haloalkanes, amines and polymers for preparation of useful organic products like plastics, dyes, detergents and rubber"},
            { value: "Synthesise aromatic hydrocarbons, haloalkanes, phenols, carbonyl compounds, carboxylic acids and their derivatives, amines and polymers"},
            { value: "Design and carry out a project in Chemistry"},
            
        ];

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an advanced understanding of the concepts, theories and principles in Chemistry"},
            { value: "Demonstrate an understanding of changes in the physical and chemical properties of elements according to their positions in the periodic table"},
            { value: "Demonstrate an understanding of chemical concepts and principles and their applications in different contexts"},
            { value: "Demonstrate an understanding of advanced concepts and principles in organic chemistry"},
            { value: "Conduct synthesis of selected organic compounds"},
            { value: "Conduct a project in Chemistry"},
            
        ];
        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Chemistry for Advanced Level secondary schools student's book, form Five. Tanzania Institute of Education"},
            
        ];
        
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of basic concepts, theories and principles in Chemistry"},
            { value: "Conduct experiments in chemistry"},
            { value: "Conduct a project in Chemistry"},
            
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
            { value: "Select Main Activity"},
            { value: "Explain the fundamental principles of measurement (dimensional analysis, precision, accuracy and uncertainties)"},
            { value: "Describe the basic tenets of mechanics and two dimensional motion (projectile motion, circular motion, rotation, gravitation and fluid mechanics)"},
            { value: "Describe the fundamental concepts, principles and theories underlying the thermal properties of materials (heat transfer, kinetic theory of solids, liquids and gases, thermodynamics and thermal radiation)"},
            { value: "Explore the basic tenets of vibrations and waves (simple harmonic motion, and wave propagation {interference, diffraction and polarization})"},
            { value: "Explain the concept, theories and principles of electrostatics (electric field, electric potential and capacitance)"},
            { value: "Use various instruments to carry out experiments in mechanics, vibrations and waves, thermal properties of materials and electrostatics"},
            { value: "Analyse the precision and accuracy of measurements"},
            { value: "Analyse the strengths and weaknesses of various instruments and techniques used in mechanics, vibrations and waves, thermal properties of materials and electrostatics"},
            { value: "Design and carry out scientific experiments related to mechanics, vibrations and waves, thermal properties of materials and electrostatics"},
            { value: "Use ICT tools to analyse and present data (Ms Excel, PSPP, R, MATLAB, Python and Origin)"},
            { value: "Use various methods to disseminate scientific results in Physics (reports, journal articles and case studies)"},
            { value: "Design and carry out a research project in Physics"},
            
        ]; 
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an advanced understanding of the concepts, theories and principles in Physics"},
            { value: "Use various instruments to carry out measurements in Physics"},
            { value: "Analyse the efficacy of different techniques and instruments in physical measurements"},
            { value: "Carry out experiments in Physics"},
            { value: "Conduct a project in Physics"},
            
        ]; 


        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Physics for Advanced Level secondary schools student's book, form Five. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of concepts, theories and principles in Physics"},
            { value: "Conduct experiments in Physics"},
            { value: "Conduct a project in Physics"},

            
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
    } else if (subject === "Advanced Mathematics") {
     
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Explore advanced tenets of functions (polynomials, rational, composite, exponential, and logarithmic)"},
            { value: "Explore advanced tenets of linear programming (transportation: two sources and two destinations, two sources and three destinations)"},
            { value: "Explore advanced tenets of coordinate geometry (angle between two lines, perpendicular distance, locus of a moving point, ratio theorem, and equations of a circle)"},
            { value: "Explore advanced tenets of trigonometry (ratios, small angles, compound angles and factor formulae, trigonometric functions, trigonometric equations, inverse trigonometric functions, graphs of inverse trigonometric functions, domain, and range)"},
            { value: "Explore basic tenets of differentiation (first principles, power rule, chain rule, product rule, quotient rule, and partial derivatives)"},
            { value: "Determine the nature of stationary points, rates of change between quantities, small changes in quantities, and series expansions of different functions"},
            { value: "Explore basic tenets of integration (by parts, substitution method, and partial fractions)"},
            { value: "Determine the area enclosed by a curve, volume of a solid of revolution, and length of an arc"},
            { value: "Explore advanced tenets of set theory (operations, expressions, and cardinality)"},
            { value: "Use knowledge of sets to organise, create, and categorise objects"},
            { value: "Explore basic tenets of logic (connectives, propositions, arguments, and electrical networks)"},
            { value: "Use logic to analyse arguments and construct circuit diagrams"},
            { value: "Explore advanced tenets of algebra (series of squares and cubes of natural numbers, roots, quadratic and rational inequalities, 3x3 matrices, partial fractions, mathematical induction, and binomial theorem)"},
            { value: "Carry out a project to solve a problem using mathematical skills"},
            
            
        ];
        
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an advanced understanding of knowledge and skills in Mathematics"},
            { value: "Demonstrate basic understanding of calculus"},
            { value: "Demonstrate an advanced understanding of set theory and logic"},
            { value: "Demonstrate an advanced understanding of algebra"},
            { value: "Carry out a project in Mathematics"},
            
        ];

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Advanced Mathematics for secondary schools student's book, form Five. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of some advanced concepts in Mathematics "},
            { value: "Demonstrate mastery of set theory and logic"},
            { value: "Demonstrate mastery of advanced algebra"},
            { value: "Conduct a project in Mathematics"},

            
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
    } else if (subject === "Historia Ya Tanzania na Maadili") {
         
        var mainOptions = [
            { value: "Chagua Shughuli Kuu" },
            { value: "Kueleza dhana na uhusiano wa kinadharia uliopo kati ya historia, utambulisho na maadili ya taifa"},
            { value: "Kujadili misingi ya kihistoria iliyounda utambulisho na maadili ya taifa"},
            { value: "Kuchambua nafasi ya historia na maadili katika kujenga fahari ya taifa"},
            { value: "Kutathmini nafasi ya Tunu za taifa na maadili katika kujenga misingi ya uongozi bora"},
            { value: "Kubaini mikakati ya kulinda historia, utambulisho na maadili ya taifa"},
            { value: "Kufafanua dhana ya urithi wa taifa"},
            { value: "Kubaini historia na urithi wa taifa katika maeneo mbalimbali nchini"},
            { value: "Kujadili mchango wa historia na urithi katika maendeleo ya taifa"},
            { value: "Kuchambua uhusiano uliopo kati ya maadili na urithi katika kuleta maendeleo ya taifa"},
            { value: "Kujadili njia bora za uhifadhi wa urithi ili kuleta maendeleo endelevu kwa taifa"},
            { value: "Kubaini fursa za kiuwekezaji zitokanazo na vivutio vya kihistoria na urithi wa Tanzania"},
            { value: "Kujadili nafasi ya historia na urithi wa Tanzania katika kujenga ushirikiano na kukuza biashara ya kimataifa"},
            { value: "Kubaini vitendo vya kimaadili na visivyo vya kimaadili vinavyoweza kukuza au kudumaza fursa zitokanazo na historia na urithi"},
            { value: "Kueleza vichocheo vya maendeleo ya jamii za Kitanzania kabla ya ukoloni"},
            { value: "Kutathmini maadili ya jamii za Kitanzania na namna yalivyochochea maendeleo kabla ya ukoloni"},
            { value: "Kuchambua mifumo ya kusimamia maadili katika jamii za Kitanzania kabla ya ukoloni"},
            { value: "Kuchambua uhusiano wa jamii za Kitanzania na jamii nyingine za Kiafrika kabla ya ukoloni"},
            { value: "Kuchambua uhusiano baina ya jamii za Kitanzania na zile za Ulaya, Mashariki ya Kati na Mashariki ya Mbali"},
            { value: "Kuhusianisha mifumo ya maadili ya jamii nyingine duniani na jamii za Kitanzania kabla ya ukoloni"},
            { value: "Kujadili mabadiliko katika historia na maadili yaliyotokana na uhusiano wa kihistoria"},
            { value: "Kuchambua matokeo ya mapokeo ya mifumo ya kihistoria na maadili ya Kitanzania kabla ya ukoloni"},
            { value: "Kujadili mapokeo ya kidini na namna yalivyochangia katika kujenga maadili ya jamii za Kitanzania kabla ya ukoloni"},
            { value: "Kueleza dhana ya ukoloni kama nguvu laini (soft power) na nguvu ngumu (hard power)"},
            { value: "Kueleza chimbuko la ukoloni na kuenea kwake Tanzania"},
            { value: "Kuchambua athari za ukoloni kisiasa, kiuchumi, kijamii, kiutamaduni na maadili"},
            { value: "Kujadili uzalendo na ujasiri wa Watanzania waliopinga mfumo wa ukoloni na maadili ya utamaduni"},
            { value: "Kueleza maadili na mfumo wa usimamizi uliojengwa wakati wa ukoloni"},
            { value: "Kuhusianisha maadili yaliyojengwa kabla ya ukoloni na yale ya wakati wa ukoloni"},
            { value: "Kuchambua athari za ukoloni katika mfumo wa maadili ya Kitanzania"},
            { value: "Bainisha changamoto yoyote ya kihistoria iliyopo katika jamii, kisha andaa kazi mradi ili kupata ufumbuzi."},
            
        ];

        

        var competenceOptions = [
            { value: "Chagua Umahiri mahususi"},   
            { value: "Kumudu historia, utambulisho na maadili ya taifa"},
            { value: "Kutathmini mchango wa historia na urithi katika kuchangia maendeleo ya taifa"},
            { value: "Kutumia fursa mbalimbali zitokanazo na historia na urithi wa Tanzania kujenga ushirikiano na kukuza biashara ya kimataifa"},
            { value: "Kutathmini vichocheo vya maendeleo ya jamii za Kitanzania na maadili yake kabla ya ukoloni"},
            { value: "Kuelezea uhusiano wa jamii za Kitanzania na jamii nyingine duniani kabla ya ukoloni"},
            { value: "Kuhusianisha mapokeo ya mifumo ya kihistoria katika kuelezea maadili ya Kitanzania"},
            { value: "Kutathmini ukoloni kama nguvu laini (soft power) ya kujenga mwelekeo mpya wa jamii"},
            { value: "Kuchambua mchango wa ukoloni katika mfumo wa maadili ya Kitanzania"},
            { value: "Kufanya kazi mradi ya historia ya Tanzania na maadili"},
            
        ]; 

        var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Taasisi ya Elimu Tanzania. (2023). Historia Ya Tanzania na Maadili kitabu cha mwanafunzi kwa shule za sekondari kidato cha Tano. Taasisi ya Elimu Tanzania"},
            
        ];
        var topicsOptions = [
            { value: "Chagua Umahiri mkuu"},
            { value: "Kulinda historia ya Tanzania, urithi na maadili ya taifa"},
            { value: "Kumudu historia ya Tanzania na maadili kabla ya ukoloni"},
            { value: "Kumudu historia ya Tanzania na maadili wakati wa ukoloni, 1890-1960"},
            { value: "Kufanya kazi mradi ya historia ya Tanzania na maadili"},
            

            
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
            { value: "Select Main Activity"},
            { value: "Explain the physiology and theories underlying transportation of materials in plants"},
            { value: "Describe the mechanism of blood circulation in vertebrates (single, double and maternal-foetal circulation)"},
            { value: "Explain growth process in plants (cell cycle, growth patterns, seed dormancy and viability, and primary and secondary growth)"},
            { value: "Explain growth process in animals (growth patterns and metamorphosis)"},
            { value: "Describe the mechanism of reproduction in plants (gametogenesis, fertilisation, and life cycles of selected plants)" },
            { value: "Describe the mechanism of reproduction in animals (gametogenesis, fertilisation and hormonal control of menstrual cycle, oestrus cycle and pregnancy)"},
            { value: "Describe principles of inheritance in living organisms (hereditary materials, DNA replication, protein synthesis and dihybrid inheritance)."},
            { value: "Describe theories and mechanism underlying evolution (theories of origin of life, organic evolution theory, evidence of evolution, and speciation)"},
            { value: "Explain the concept of ecology (methods of studying, biodiversity, ecological succession, and conservation methods)"},
            { value: "Prepare and present a report based on the findings"},
            { value: "Design and carry out anatomical and physiological investigations related to transportation in plants and animals, growth in plants and reproductive system"},
            { value: "Complete and submit for assessment a scientific report of the project started in Form Five"},
        ];

        
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an advanced understanding of concepts, theories and principles in Biology"},
            { value: "Demonstrate an understanding of the principles of binomial nomenclature and classification"},
            { value: "Demonstrate mastery of advanced skills for conducting biological investigations"},
            { value: "Perform investigations on the anatomy and physiology of living organisms"},
            { value: "Conduct a project in Biology"},
            
        ];

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Biology for Dvanced Level secondary schools student's book, form Five. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence" },
            { value: "Demonstrate mastery of advanced concepts, theories and principles in Biology"},
            { value: "Demonstrate mastery of taxonomic terminologies"},
            { value: "Conduct biological investigations"},
            { value: "Conduct a project in Biology"},
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
    }  else if (subject === "English Language") {
        
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Articulate sentences in connected speech with standard pronunciation (e.g., phonemes, syllables, stress and intonation)"},
            { value: "Describe objects, events and situations with appropriate English expressions (e.g., level of formality, pre-supposition, time, audience and topics)"},
            { value: "Participate in discussions on various topical issues (e.g., entrepreneurship, corruption, taxation, child right and security, gender education, cyber security education, disaster management, health and productive education, drug abuse, life skills, financial management education and taxation) with a standard pronunciation"},
            { value: "Write unfamiliar vocabulary from given complex oral and written texts"},
            { value: "Discover the meanings of vocabulary using context, technical dictionary, thesaurus and encyclopaedia"},
            { value: "Form new words through word formation processes (e.g., compounding, blending, clipping)"},
            { value: "Use the synonyms and antonyms of given words to compose a variety of texts"},
            { value: "Use advanced vocabulary and grammar (e.g., tenses and subject-verb agreement) to describe events, objects and situations"},
            { value: "Prepare and deliver complex speeches on various topics including cross-cutting issues using appropriate vocabulary and grammar (e.g., tenses and cohesive devices)"},
            { value: "Write articles (e.g., newspaper articles, magazine articles and journal articles) about events, objects and situations using advanced vocabulary and grammar"},
            { value: "Explain different types of meanings from oral information (e.g., denotative, connotative and figurative)"},
            { value: "Explain meanings of oral texts derived from different registers (e.g., journalism, law, medicine and religion)"},
            { value: "Describe rhetorical and implied meanings derived from conversations"},
            { value: "Respond to oral messages with confidence and autonomy (e.g., seeking clarifications, adding comments, arguing and summarising)"},
            { value: "Use complex stylistic features (e.g., dialects, registers and figures of speech) obtained from written texts to convey meanings"},
            { value: "Explain meaning of written texts derived from different registers (journalism, medicine and religion)"},
            { value: "Interpret information from spontaneous and non-spontaneous conversations"},
            { value: "Apply pronunciation techniques in spontaneous and non-spontaneous conversations"},
            { value: "Participate in spontaneous and non-spontaneous conversations with people using different dialects of the English language"},
            { value: "Compare a variety of complex oral texts with appropriate prosodic features and correct grammar in different contexts."},
            { value: "Compose a variety of complex texts (e.g., investigative reports, academic reports, contracts, wills and complex instructional manuals) with appropriate punctuation and style"},
            { value: "Use prosodic features, punctuation and correct register to create a variety of complex oral and written texts for different communicative purposes"},
            { value: "Differentiate intralingua, interlingua and sign language interpretations"},
            { value: "Analyse theories and principles of interpretation"},
            { value: "Discuss the ethics of interpretation"},
            { value: "Interpret conversations in a variety of settings"},
            { value: "Analyse theories and principles of translation"},
            { value: "Discuss the ethics of translation as a career"},
            { value: "Translate a variety of general texts using Computer-Assisted Translation (CAT) tools"},
            { value: "Analyse the theories and principles of editing and proofreading"},
            { value: "Edit and proofread a variety of complex texts"},
            { value: "Assess the contribution of elements of form (e.g., plot, language and style) in shaping meanings of any literary work"},
            { value: "Relate the lesson from literary work to real life situations"},
            { value: "Assess the contribution of Tanzanian literature in moulding a civilized society"},
            { value: "Explain the distinctive features of different genres of literature"},
            { value: "Apply the theories of literature in critiquing literary works"},
            { value: "Express a personal point of view after reading a literary work"},
            
        ];

        

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Automate the production of oral descriptions and conversations using standard pronunciation (e.g., phonemes, syllables, stress and intonation)"},
            { value: "Develop vocabulary from conversations and written texts"},
            { value: "Use correct grammar and vocabulary in oral and written language tasks"},
            { value: "Comprehend oral messages with confidence and autonomy"},
            { value: "Construct complex and stylistic meanings from diverse and multiple texts"},
            { value: "Manage conversations with a good command of pronunciation"},
            { value: "Create a variety of complex oral and written texts for different communicative purposes"},
            { value: "Apply principles of interpretation to provide complex and authentic interpretations"},
            { value: "Apply principles of translation to produce. complex authentic translation"},
            { value: "Apply principles of editing and proofreading a variety of texts"},
            { value: "Appreciate the aesthetic and value of literature"},
            { value: "Analyse the genres of literature and appreciate their conventions"},
            
        ];  

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). English Language for Advanced Level secondary schools student's book, form Five. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main Competence"},
            { value: "Demonstrate mastery of the advanced English language skills"},
            { value: "Comprehend oral and written information"},
            { value: "Communicate effectively in different contexts"},
            { value: "Provide advanced English language services to the community"},
            { value: "Appreciate and create literary works"},
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
            { value: "Select Main Activity" },
            { value: "Describe the theories (continental drift, Isostacy and plate tectonics) that explain the gross structure of the earth’s surface (continents, oceans, seas, ocean ridges, ocean trenches, Islands etc.)" },
            { value: "Describe the interactions among the major earth systems (atmosphere, biosphere, hydrosphere, geosphere)" },
            { value: "Describe the internal forces responsible for the formation of the Earth’s major relief features (volcanoes, block mountains, fold mountains, faults, rift valleys, depressions/basin) and earthquakes" },
            { value: "Describe the external forces (waves, gravitational forces, wind and running water) that shape the Earth’s surface (valleys, gullies, dunes, deltas, flood plains, yardangs, zeugens etc.)" },
            { value: "Carry out some Advanced surveying activities (plane table, prismatic compass, leveling)" },
            { value: "Acquire, present and interpret geographical data through charts, graphs, maps and diagrams (choropleth, scatter plots, dot maps, flow line etc.) for planning and decision making" },
            { value: "Identify a geographical challenge in society and design a project to address it" },
            
        ];

        

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an Advanced understanding of concepts and theories explaining the structure of the Earth and the interactions of earth systems"},
            { value: "Demonstrate an understanding of the forces responsible for formation of the major relief features of the Earth"},
            { value: "Demonstrate mastery of some advanced skills in land surveying"},
            { value: "Demonstrate mastery of research skills in Geography"},
            { value: "Conduct a project in Geography"},
        ];

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Geography for Advanced Level secondary schools student's book, form Five. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of the structure of the Earth"},
            { value: "Demonstrate mastery of skills and techniques in Geography"},
            { value: "Conduct a project in Geography"},
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
            { value: "Select Main Activity"},
            { value: "Examine the concept of Pan- Africanism (meaning, objectives and importance)"},
            { value: "Explain the origins of Pan- Africanism in the 15th Century (Trans- Atlantic Slave Trade and people of African origin in the New World)"},
            { value: "Discuss the development of Pan- Africanism from the 16th to 19th Century (slavery and colonial systems in the New World, Back to Africa Movement and Black Solidarity)"},
            { value: "Examine the development of Pan- Africanism during the first half of the 20th Century"},
            { value: "Discuss the contribution of Pan- Africanism to anti-colonial struggles in Africa (conferences and their resolutions)"},
            { value: "Analyse the development of Pan- Africanism since 1960s (African unity, struggles against neo-colonialism, Apartheid and globalization)"},
            { value: "Explain the concept of industrial revolution (meaning, processes and characteristics)"},
            { value: "Compare the Industrial Revolution of Britain with the revolutions in Belgium, France, Germany, USA and Japan"},
            { value: "Discuss the impacts of the 18th and 19th Centuries industrial revolutions on the world"},
            { value: "Discuss the rise of industrial revolutions of the 20th Century and their impacts on the world (industrial revolutions in Asia and Latin America)"},
            { value: "Discuss the changes and continuities between the industrial revolutions of the 18th and 19th Centuries and those of the 20th Century"},
            { value: "Discuss the nature and character of the Fourth Industrial Revolution evolving in the 21st Century"},
            { value: "Discuss the impacts of the Fourth industrial revolution on global changes in socio-economic and political patterns (digital technology, smart economy, e-government, e-commerce) development patterns"},
            { value: "Discuss the nature and character of industrial development in Africa from the 1960s to the present"},
            { value: "Examine lessons learnt from the industrial revolutions of the 19th, 20th and 21st Centuries which can be applied to bring about industrial development in Africa"},
            { value: "Discuss the concepts of administration and administrative systems"},
            { value: "Examine indigenous concepts and practices of administration and administrative systems in different global contexts (pre- colonial Africa, Ancient Europe, South America, Asia and the Middle East)"},
            { value: "Discuss the conceptual relationship between religion and administration"},
            { value: "Discuss the extent to which religious principles led to changes in administrative systems in the world from the Middle Ages to the 18th Century (indigenous religions in different global contexts, Christianity, Islam, Buddhism, Confucianism, Shintoism Judaism, and African religions)"},
            { value: "Examine the transition from religious-based to secular administrative systems from the 15th to 19th Century"},
            { value: "Examine slavery and feudalism as forms of socio-economic and political organisations"},
            { value: "Assess the influence of slavery and feudalism on the development of new administrative systems in Western Europe, Asia and Africa up to the 19th Century"},
            { value: "Discuss lessons learnt from European political revolutions on the rise of new administrative systems in the world (English and French revolutions)"},
            { value: "Examine the influence of the rise of capitalism on political revolutions and socio-economic and administrative changes up to the 19th Century"},
            { value: "Examine the contribution of crises in capitalism to the development of new reactionary and revolutionary systems in the 20th Century (Socialism and Fascism)"},
            { value: "Assess the impacts of new reactionary and revolutionary systems of the 20th Century on development of new ideologies in the world (Apartheid, Zionism)"},
            { value: "Examine the changing nature and character of administrative systems which developed in Africa from the 1960s to the present"},
            { value: "Design and carry out a project in any area of your competence"},
            
        ];

       

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the concept of Pan- Africanism and its origins in the 15th Century "},
            { value: "Demonstrate an understanding of the development of Pan- Africanism from the 16th to 19th Century"},
            { value: "Demonstrate an understanding of the history of Pan- Africanism during colonial time and during the struggle against colonialism from 1900 to 1960"},
            { value: "Demonstrate an understanding of the history of Pan- Africanism since 1960"},
            { value: "Demonstrate an understanding of the history of industrialisation in different nations during the 18th and 19th Centuries"},
            { value: "Demonstrate an understanding of the history of industralisation in different nations from the 20th Century to the present"},
            { value: "Demonstrate an understanding of the history of industralisation in Africa"},
            { value: "Demonstrate an understanding of the origins of administrative systems in the ancient world"},
            { value: "Demonstrate an understanding of the contribution of religion to the establishment of modern administrative systems"},
            { value: "Demonstrate an understanding of the contribution of slavery and feudalism to changes in the administrative systems in Western Europe, Asia and Africa"},
            { value: "Demonstrate an understanding of the contribution of political revolutions in Europe to the growth of current administrative systems"},
            { value: "Demonstrate an understanding of the influence of the capitalist crises to the emergence of alternative ideologies and systems of governance in the 20th Century"},
            { value: "Demonstrate an understanding of the administrative systems built in post-colonial Africa"},
            { value: "Conduct a project in History"},
            
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). History for Advanced Level secondary schools student's book, form Five. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of the history of Pan- Africanism"},
            { value: "Demonstrate mastery of the history of the industrial revolution"},
            { value: "Demonstrate mastery of the history of administrative systems in the world"},
            { value: "Conduct a project in History"},
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
    }  else if (subject === "Business Studies") {
        
        
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the basic aspects of business environment (stakeholders in business and agents supporting business start-ups)"},
            { value: "Describe some advanced aspects of the business units (size classification, company and company’s management, franchise, joint ventures and cooperatives, formation and dissolution)"},
            { value: "Describe some advanced aspects of financing medium businesses (internal and external sources: retained earnings, sale and leaseback of non-current assets, share capital, venture capital, overdrafts, loans, debentures, crowd funding and government grants)"},
            { value: "Explore the basic aspects of the policy and regulatory environment governing medium businesses in Tanzania (roles of government and nongovernmental agencies, policies, laws and by-laws)"},
            { value: "Describe procedures for registering medium businesses in Tanzania (types of licences, importance of registration and sanctions for noncompliance)"},
            { value: "Identify an appropriate business opportunity and develop its business plan"},
            
        ];

        

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an advanced understanding of the principles of business"},
            { value: "Demonstrate an understanding of the policies and laws governing medium scale business"},
            { value: "Prepare a medium scale business plan"},
            
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Business Studies for Advanced Level secondary schools student's book, form five. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of principles of business"},
            { value: "Demonstrate an understanding of the business environment"},
            { value: "Conduct a project in Business Studies"},
           
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
    }  else if (subject === "Economics") {
        
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the concept and scope of economics (meaning and origin, importance, its relationship with other subjects, basic terminologies, branches, the central economic problem and fundamental economic questions)"},
            { value: "Describe economic systems (forms, features, advantages and disadvantages)"},
            { value: "Explore the basic tenets of microeconomics (meaning, scope and goals)"},
            { value: "Describe the price theory (demand, supply, market equilibrium and elasticity)"},
            { value: "Describe the theories of production and costs (factors of production, production function, objectives and profit of firms, scale and costs of production and revenue)"},
            { value: "Describe the concept of the market (meaning, types and structures)"},
            { value: "Examine the influence of the economic system on resource allocation and distribution"},
            { value: "Use the price theory to explain the effects of pricing on consumer behaviour and business profits"},
            { value: "Apply production, cost and market theories to make decisions on price and output"},
            { value: "Design and execute a research project on an appropriate economic problem"},
            
        ];

       

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the concepts, theories and principles used in Economics"},
            { value: "Demonstrate mastery of economic analysis"},
            { value: "Design and carry out a project in Economics"},
            
        ];  

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Economics for Advanced Level secondary schools student's book, form five. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of basic concepts, theories and principles in Economics"},
            { value: "Conduct a project in Economics"},
           
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
            { value: "Chagua Shughuli Kuu"},
            { value: "Kufafanua dhana ya fonimu na alofoni za lugha ya Kiswahili (maana, aina, sifa bainifu, uhusiano wa fonimu na alofoni)"},
            { value: "Kueleza dhana na miundo ya silabi za Kiswahili"},
            { value: "Kufafanua sifa na dhima za viarudhi vya lugha ya Kiswahili katika utamkaji"},
            { value: "Kufafanua vipashio vinavyojenga neno (mofu na alomofu)"},
            { value: "Kuchambua vipashio vinavyojenga neno na dhima zake"},
            { value: "Kuchanganua sentensi changamani na ambatani kwa kutumia mikabala ya kidhima na kimuundo (kwa njia ya matawi, jedwali, mishale na maelezo)"},
            { value: "Kubaini msamiati mpya kutoka katika mazungumzo changamani na kawaida katika miktadha anuai (mfano: taarifa ya habari, midahalo, na mazungumzo ya watu sokoni)"},
            { value: "Kubaini msamiati mpya kutoka katika matini andishi za kawaida"},
            { value: "Kutumia msamiati mpya katika kuzungumza na kuandika matini za kawaida na changamani"},
            { value: "Kutumia kanuni za kipragmatiki katika lugha (mfano: mada, wahusika, na miktadha)"},
            { value: "Kueleza dhana ya utata (maana na aina)"},
            { value: "Kufafanua sababu za utata katika lugha"},
            { value: "Kuondoa utata katika lugha"},
            { value: "Kujadili nadharia kuhusu chimbuko na asili ya lugha ya Kiswahili"},
            { value: "Kuthibitisha Ubantu wa lugha ya Kiswahili kiisimu"},
            { value: "Kuthibitisha Ubantu wa lugha ya Kiswahili kihistoria"},
            { value: "Kujadili kukua na kuenea kwa Kiswahili katika nchi za Afrika Mashariki kabla ya uhuru"},
            { value: "Kujadili kukua na kuenea kwa Kiswahili katika nchi za Afrika Mashariki baada ya uhuru"},
            { value: "Kujadili kukua na kuenea kwa Kiswahili kutokana na maendeleo ya sayansi na teknolojia"},
            { value: "Kufafanua dhana na matumizi ya lugha ya kwanza na lugha ya pili"},
            { value: "Kufafanua dhana na matumizi ya lugha rasmi na lugha ya taifa"},
            { value: "Kujadili dhana na sifa ya lugha ya kimataifa"},
            { value: "Kujadili sifa za Kiswahili kama lugha ya kimataifa"},
            { value: "Kubainisha kanuni za uhariri"},
            { value: "Kufafanua vipengele vya lugha na maudhui vinavyozingatiwa katika uhariri"},
            { value: "Kufafanua alama za uhariri"},
            { value: "Kuhariri matini za kawaida"},
            { value: "Kutathmini matini za kawaida zilizohaririwa na wengine"},
            { value: "Kufafanua mbinu za tafsiri"},
            { value: "Kutafsiri matini za kawaida kwa mbinu ya tafsiri sisisi"},
            { value: "Kutafsiri matini za kawaida kwa mbinu ya tafsiri ya kisemantiki"},
            { value: "Kutafsiri matini za kawaida kwa mbinu ya tafsiri ya kimawasiliano"},
            { value: "Kufafanua stadi ya kusikiliza huku ukinukuu kumbukumbu muhimu"},
            { value: "Kufafanua aina za ukalimani"},
            { value: "Kunukuu kumbukumbu muhimu katika mazungumzo mbalimbali wakati wa kukalimani"},
            { value: "Kukalimani mazungumzo kwa ukalimani fuatizi, nong’onezi na kiungo"},
            { value: "Kujadili mitazamo kuhusu dhana ya fasihi"},
            { value: "Kutathmini nadharia za chimbuko la fasihi"},
            { value: "Kujadili maendeleo ya fasihi kabla ya ujio wa wageni"},
            { value: "Kujadili maendeleo ya fasihi baada ya ujio wa wageni"},
            { value: "Kujadili maendeleo ya fasihi baada ya uhuru"},
            { value: "Kuhakiki fani na maudhui katika riwaya"},
            { value: "Kuhusianisha ujumbe unaopatikana katika riwaya na maisha ya kila siku"},
            { value: "Kuhakiki fani na maudhui katika tamthiliya"},
            { value: "Kuhusianisha ujumbe unaopatikana katika tamthiliya na maisha ya kila siku"},
            { value: "Kubaini mbinu za utungaji wa riwaya na tamthiliya"},
            { value: "Kutunga riwaya"},
            { value: "Kutunga tamthiliya"},
            
        ];

        

        var competenceOptions = [
            { value: "Chagua Umahiri Mahususi"},
            { value: "Kukuza uelewa wa misingi na kanuni za Kiswahili"},
            { value: "Kukuza msamiati kutokana na mazungu-mzo na maandishi changamani"},
            { value: "Kutumia msamiati na sarufi stahiki katika miktadha mbalimbali"},
            { value: "Kutambua chimbuko na asili ya Kiswahili"},
            { value: "Kutathmini kukua na kuenea kwa Kiswahili"},
            { value: "Kutambua matumizi ya lugha ya kwanza, pili, rasmi na lugha ya taifa"},
            { value: "Kumudu stadi za uhariri"},
            { value: "Kutafsiri matini mbalimbali"},
            { value: "Kukalimani mazungumzo mbalimbali"},
            { value: "Kutambua nadharia ya fasihi"},
            { value: "Kutathmini maendeleo ya fasihi"},
            { value: "Kuhakiki kazi za fasihi"},
            { value: "Kutunga kazi za fasihi"},
            
        ]; 

        var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Taasisi ya Elimu Tanzania. (2023), kiswahili kitabu cha mwanafunzi kwa shule za sekondari kidato cha Tano, Taasisi ya Elimu Tanzania."},
            
        ];
        var topicsOptions = [
            { value: "chagua Umahiri Mkuu"},
            { value: "Kumudu stadi za juu za Kiswahili"},
            { value: "Kuthamini Kiswahili kama lugha ya taifa"},
            { value: "Kuhariri kazi mbalimbali"},
            { value: "Kutafsiri na kukalimani kazi mbalimbali"},
            { value: "Kuthamini kazi za fasihi"},
           
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
    }  else if (subject === "Computer Science") {
        
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the classification of computer architecture (Von Neumann and Non Von Neumann, Harvard Architecture, Modified Harvard Architecture, Flynn’s Taxonomy)"},
            { value: "Demonstrate understanding of Boolean algebra and logic gates (Logic expressions, standard logic gate symbols, logic circuits)"},
            { value: "Explore computer memory (Meaning, design principles, memory hierarchy and interfacing, cache memory, memory mapping, primary & secondary memory)"},
            { value: "Analyse instruction set architecture (Instruction set types, registers, instruction execution cycles, addressing modes, register transfer language, ARM and x86 architectures)"},
            { value: "Describe I/O system (Direct Memory Access, Interrupt and exception, privileged / non privileged instruction)"},
            { value: "Demonstrate function of memory and input-output system"},
            { value: "Develop understanding of pipelining (Basics, types, stalling & forwarding, throughput and speedup, hazards) and Instruction Level Parallelism ( concept, compilation techniques, scalar versus superscalar pipelining, branch prediction, register renaming) and thread and data level parallelism"},
            { value: "Demonstrate understanding of OSI and TCP/IP Reference models, transmission media, wireless transmission, the public switched telephone networks, mobile telephone system and Network protocols (HTTP, FTP, IP,PPP,etc)"},
            { value: "Develop understanding of Data link layer (Switched LANs: Link-Layer Addressing and ARP, Ethernet, Link-Layer, Switches, VLANs)"},
            { value: "Create a network that make use of wireless or Ethernet technology"},
            { value: "Develop understanding of Network layer (design issues, routing algorithms, Congestion control algorithms, Internetworking, the network layer in the internet (IPv4 and IPv6), Quality of Service)"},
            { value: "Elaborate the transport layer (Transport service, elements of transport protocol, Simple Transport Protocol, Internet transport layer protocols: UDP and TCP)"},
            { value: "Describe the application layer (Domain name system, electronic mail, World Wide Web: architecture; dynamic web document and http)"},
            { value: "Apply network security principles, tools and protocols in computer networks"},
            { value: "Describe the concept of Object Oriented Programming (Output, Directives, input, type bool, set width manipulator, type conversion, Object oriented paradigm differences between Object Oriented Programming and Procedure oriented programming, Encapsulation, Inheritance, composition and Polymorphism, Benefits of OOP, Structure of C++/ Java/python, namespace, Data types, C++/Java/ python tokens, Identifiers, Variables, Constants, Operators, Control structures and Loops)"},
            { value: "Describe the general structure of Object Oriented Program (Using C++, Java, Python, etc)"},
            { value: "Apply appropriate syntax and constructs to create Object Oriented programs"},
            { value: "Debug Object Oriented programs using appropriate skills (Use C++, Java, Python, etc)"},
            { value: "Describe the concept of operating systems ( evolution, types, architecture, structure and design)"},
            { value: "Describe the impact of operating system design on application system design and performance"},
            { value: "Demonstrate competency in recognising and using operating system design and performance [Process Management (Processes and threads, process creation, synchronisation and Communication), CPU/Processor Scheduling ( Deadlock prevention, avoidance and recovery), Memory Management ( Main and virtual memory management), File System Structure and implementation, Input/output Systems and device management]"},
            { value: "Describe the basic concepts of Relational Database Design, ER Model, SQL, NoSQL, big data, and data warehouse"},
            { value: "Demonstrate understanding of database design (conceptual, logical, physical, normalization etc)"},
            { value: "Demonstrate understanding of database models"},
            { value: "Describe different database management systems (Parallel, distribution)"},
            { value: "Describe the emerging Database Models, Technologies and Application"},
            { value: "Design database using SQL and PHP"},
            
        ];

       

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate understanding of the principles of computer architecture and organisation"},
            { value: "Demonstrate understanding of computer networks"},
            { value: "Demonstrate mastery of Basic principles of Object Oriented Programming Using C++, Java, Python, etc"},
            { value: "Demonstrate understanding of principles of Operating Systems"},
            { value: "Demonstrate mastery of Advanced principles of databases and database management systems"},
            
        ];  

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Computer Science for Advanced Level secondary schools student's book, form five. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the principles of Computer Science"},
            { value: "Demonstrate mastery of the data management"},
           
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
 else if (subject === "Elimu ya Dini ya kiislam") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Kutofautisha maana na malengo ya elimu baina ya Uislamu na itikadi nyingine"},
        { value: "Kubainisha nafasi na umuhimu wa elimu"},
        { value: "Kubainisha dhana potofu kuhusu elimu na athari zake"},
        { value: "Kuchambua mchango wa Waislamu katika fani za sayansi na teknolojia"},
        { value: "Kubainisha tofauti kati ya itikadi ya Uislamu na itikadi nyingine na athari zake"},
        { value: "Kuchambua nguzo za Imani"},
        { value: "Kupambanua athari za nguzo za Imani katika maisha"},
        { value: "Kuchambua hoja potofu zinazoelezwa dhidi ya Qur’an"},
        { value: "Kuonesha hoja zinazothibitish a kuwa Qur’an ni maneno ya Allah (S.W)"},
        { value: "Kufafanua dhana ya tafsiri ya Qur’an"},
        { value: "Kufafanua ngazi za tafsiri ya Qur’an"},
        { value: "KKufafanua dhana ya Sababun Nuzul katika kufasiri Qur’an"},
        { value: "Kufafanua masharti ya mfasiri wa Qur’an"},
        { value: "Kubainisha dhana ya Nasikh na Mansukh"},
        { value: "Kuchambua hoja potofu zinazonasibishwa na Sunnah"},
        { value: "Kuchambua hoja za ukubalifu wa Hadithi"},
        { value: "Kubainisha umuhimu wa kutekeleza Sunnah"},
        { value: "Kuonesha kutegemeana kwa nguzo za Uislamu katika utekelezaji wake"},
        { value: "Kubainisha masharti na matendo ya nguzo za Uislamu yanavyofanikisha malengo yake"},
        { value: "Kubainisha dhana ya mfumo wa maisha"},
        { value: "Kujadili mifumo ya maisha iliyopo na athari zake"},
        { value: "Kuthibitisha mfumo sahihi anaostahiki mwanadamu kuufuata"},
        { value: "Kubainisha dhana ya historia katika Uislamu"},
        { value: "Kufafanua historia ya mwanadamu"},
        { value: "Kufafanua historia ya maisha ya mwanadamu kabla ya Mtume Muhammad (S.A.W)"},
        { value: "Kufafanua ustawi wa Uislamu wakati wa Mtume Muhammad (S.A.W)"},
        { value: "Kubainisha ustawi wa Uislamu wakatiwa Makhalifa waongofu"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Kuchambua dhana ya Elimu kwa mtazamo wa Uislamu"},
        { value: "Kuthibitisha usahihi wa Itikadi ya Uislamu."},
        { value: "Kuthamini nguzo za Imani ya Kiislamu"},
        { value: "Kuthibitisha kuwa Qur’an ni maneno ya Allah (S.W)"},
        { value: "Kuchambua misingi ya kufasiri Qur’an"},
        { value: "Kuchambua dhana ya Sunnah"},
        { value: "Kutathmini utekelezaji wa nguzo za Uislamu."},
        { value: "Kutathmini mifumo ya maisha kwa mujibu wa Uislamu"},
        { value: "Kufafanua dhana ya Historia kwa mujibu wa Uislamu"},
        { value: "Kutathmini historia ya Uislamu kabla ya Mtume Muhammad (S.A.W) hadi hivi sasa"},
        
    ]; 

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Taasisi ya Elimu Tanzania. (2023), Elimu Ya Dini Ya Kiislamu kitabu cha mwanafunzi kwa shule za sekondari kidato cha Tano, Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Kuishi kwa mujibu wa itikadi ya Uislamu"},
        { value: "Kuthamini Qur’an na Sunnah"},
        { value: "Kumtumikia Allah (S.W) katika Nyanja zote za maisha"},
        { value: "Kuthamini historia katika kuimarisha Haki na Uadilifu katika jamii"},
       
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
}  else if (subject === "Divinity") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Explain the concept of Divinity"},
        { value: "Use the books of Judges, Samuel and Kings to discuss the concept and practice of governance"},
        { value: "Use the ministries of Elijah and Elisha to discuss the concept of courage"},
        { value: "Use the ministries of Elijah and Elisha to discuss the importance of making the right decisions at the right time"},
        { value: "Discuss the main ideas contained in the Book of Isaiah (Chapter 1-12)"},
        { value: "Discuss the main ideas contained in the Book of Isaiah (Chapters 40- 45)"},
        { value: "Use the Book of Isaiah to discuss the importance of repentance and living a holy life"},
        { value: "Use the Book of Amos to discuss the concept of social justice and violation of community rights"},
        { value: "Use the Book of Hosea to understand God’s compassion, mercy and the importance of forgiveness"},
        { value: "Use the books of Haggai and Zechariah to discuss the importance of responsibility"},
        { value: "Design and carry out a project on a relevant problem in Divinity"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Demonstrate an understanding of the concept and practice of governance as revealed in the books of Judges, Samuel and Kings"},
        { value: "Demonstrate an understanding of the concept of courage and decision making as revealed in the ministries of Prophets Elijah and Elisha"},
        { value: "Demonstrate an understanding of the teachings of Prophet Isaiah"},
        { value: "Demonstrate an understanding of the concepts of social justice, compassion and forgiveness as depicted in the books of prophets Amos and Hosea"},
        { value: "Demonstrate an understanding of the importance of responsibility as depicted in the books of prophets Haggai and Zechariah"},
        { value: "Conduct a project"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Divinity for Advanced Level secondary schools student's book, form five. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate mastery of the concepts of governance, courage and decision making as depicted in the Old Testament"},
        { value: "Demonstrate mastery of the works of selected prophets and their relevance in daily life"},
        { value: "Conduct a Project in Divinity"},
       
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
}  else if (subject === "Agriculture") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Describe the principles and practices for the production of selected crops (mushroom, clove, avocado, tea, coffee and cashew)"},
        { value: "Analyse the problems associated with the cultivation, postharvest management and marketing of selected crops (mushroom, clove, avocado, tea, coffee and cashew) and propose possible solutions"},
        { value: "Describe advanced agricultural technologies used in crop production (technologies used in planning, site selection, propagation and nursery management, crop establishment, crop management, postharvest management, and marketing)"},
        { value: "Apply basic and some advanced agricultural technologies in the production of selected crops (mushroom, clove, avocado, tea, coffee and cashew)"},
        { value: "Identify agricultural problem in society, and design and carry out a project to address it"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Demonstrate an understanding of principles and some advanced practices of agriculture"},
        { value: "Demonstrate a basic understanding of the agricultural value chain for selected products"},
        { value: "Demonstrate an understanding of some advanced technologies in agriculture"},
        { value: "Use technology to increase agricultural production"},
        { value: "Conduct a project in Agriculture"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Agriculture for Adanced Level secondary schools student's book, form Five. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate mastery of the principles of agriculture"},
        { value: "Use some advanced technologies in agriculture"},
        { value: "Conduct a project in Agriculture"},
       
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
}  else if (subject === "Literature In English") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Explain the aspects of society, artist, imagination, and literary language"},
        { value: "Explain the concept of folklore"},
        { value: "Classify written literature in its genres"},
        { value: "Examine the use of imagery in reflecting human experiences in a selected literary work"},
        { value: "Explain mimetic (imitation), myth and ritual theories"},
        { value: "Examine the contribution of imitation, ritual and mythical elements (plot, setting, resolution, conflict and characters) in a selected literary work"},
        { value: "Apply mimetic, myth and ritual theories to trace the origin and development of various genres of folklore and written literature"},
        { value: "Discuss the relationship between African oral traditions, Western literary conventions and African literature in English"},
        { value: "Discuss the contribution of African authors in the development of African literature in English"},
        { value: "Explore the features of pre-colonial African literature in a selected literary work"},
        { value: "Explore the features of colonial African literature in a selected literary work"},
        { value: "Explore the features of post-colonial African literature in a selected literary work"},
        { value: "Describe the concepts of material culture, social folk custom and performing folk arts"},
        { value: "Identify various forms of folklore in a community (cultural context)"},
        { value: "Identify various forms of folklore used in a selected literary work (created context)"},
        { value: "Examine the relationship between folklore and written literature"},
        { value: "Explain elements of literature (e.g. setting, theme, message, language, plot, style and character)"},
        { value: "Discuss the significance of each element of literature in a selected literary work"},
        { value: "Examine the relationship between form and content in literature"},
        { value: "Examine the four traditional critical theories (mimetic, pragmatic, objective and expressive)"},
        { value: "Explain modern theories of literary criticism (formalism, Marxism, post-colonial, feminism, eco-criticism and social learning theory)"},
        { value: "Apply modern literary theories in critiquing a selected literary text"},
        { value: "Apply formalism theory in analysing a selected literary text"},
        { value: "Apply modern literary theories to discuss thematic representation in selected pre-colonial and colonial literary texts"},
        { value: "Relate issues represented in selected pre-colonial and colonial literary texts to real life experiences"},
        { value: "Discern lessons obtained in selected pre-colonial and colonial literary texts"},
        { value: "Explain the principles for making rational argument and judgment in literature"},
        { value: "Discuss the actions of the characters in a selected literary text"},
        { value: "Analyse the themes portrayed in a selected literary text"},
        { value: "Distinguish writing for children and writing for adults"},
        { value: "Discuss the principles of composing a work of literature (point of view, characterisation, plot and conflict)"},
        { value: "Elaborate the steps for writing a short story (pre-writing, writing, revision, editing and publishing)"},
        { value: "Develop a plan for composing a short story (idea, plot, setting and characterisation)"},
        { value: "Apply basic skills in creative writing to compose a short story"},
        { value: "Use ICT tools and digital platforms to write and publish a short story"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Demonstrate a broad understanding of the concepts of literature"},
        { value: "Evaluate theories of the origin and development of literature nationally and internationally"},
        { value: "Explain the origin and development of African literature in English"},
        { value: "Analyse the relationship between folklore and written literature"},
        { value: "Exhibit an in-depth understanding of elements of literature"},
        { value: "Analyse literary criticism theories"},
        { value: "Analyse critically pre-colonial, colonial, liberation, and post-colonial literatures"},
        { value: "Use literary works to build rational arguments and judgment"},
        { value: "Demonstrate mastery of the principles of composing literary works"},
        { value: "Compose original literary works"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Literature In English for Advanced Level secondary schools student's book, form Five. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate mastery of the concepts and principles of literature"},
        { value: "Appreciate literary works"},
        { value: "Demonstrate mastery of argumentative skills"},
        { value: "Create literary works"},
       
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
}  else if (subject === "Fasihi ya Kiswahili") {
    
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kufafanua dhana ya fasihi kwa kurejelea wataalamu mbalimbali"},
        { value: "Kujadili mitazamo mbalimbali kuhusu dhana ya fasihi"},
        { value: "Kujadili ubora na udhaifu kuhusu mitazamo ya dhana ya fasihi"},
        { value: "Kujadili nadharia za chimbuko la fasihi"},
        { value: "Kufafanua tanzu na vipera vya fasihi simulizi na fasihi andishi"},
        { value: "Kueleza mchango wa fasihi simulizi katika maendeleo ya fasihi andishi"},
        { value: "Kujadili mchango wa fasihi simulizi na fasihi andishi katika maendeleo ya jamii"},
        { value: "Kuhusianisha fasihi simulizi na fasihi andishi"},
        { value: "Kujadili mitazamo inayohusu fani na maudhui"},
        { value: "Kuhusianisha fani na maudhui katika kazi za fasihi"},
        { value: "Kueleza dhima za vipengele vya fani na maudhui katika kazi za fasihi"},
        { value: "Kuchambua nadharia za uhakiki wa kazi za fasihi"},
        { value: "Kutumia nadharia kuhakiki kazi za fasihi simulizi (maigizo) na fasihi andishi (mashairi na tamthiliya) za waandishi wakongwe na chipukizi walioteuliwa"},
        { value: "Kutathmini mchango wa nadharia za uhakiki katika maendeleo ya ushairi na tamthiliya"},
        { value: "Kueleza maadili yaliyomo katika nyimbo za bongo fleva, mashairi na tamthiliya"},
        { value: "Kulinganisha maadili yaliyomo katika bongo fleva, mashairi, tamthiliya na imani za jamii"},
        { value: "Kueleza mitazamo iliyomo katika bongo fleva, mashairi na tamthiliya"},
        { value: "Kuhusianisha mitazamo iliyomo katika nyimbo za bongo fleva, mashairi na tamthiliya na matendo ya jamii"},
        { value: "Kujadili namna athari za kiimani na kimitazamo katika bongo fleva, mashairi na tamthiliya zinavyojidhihi risha katika jamii"},
        { value: "Kueleza mbinu zinazotumika kujenga ujumi katika kazi za fasihi"},
        { value: "Kuchambua mbinu zilizotumika kujenga ujumi katika kazi teule za majigambo, mashairi na tamthiliya"},
        { value: "Kuibua maana mbalimbali zinazopatikana katika matini/ insha za kifasihi, mashairi na tamthiliya"},
        { value: "Kujadili namna mbinu za kifasihi zinavyoathiri kupatikana kwa maana katika mashairi na tamthiliya"},
        { value: "Kufafanua misingi ya ujenzi wa hoja zenye mantiki na ushawishi katika fasihi"},
        { value: "Kutumia misingi ya ujenzi wa hoja zenye mantiki na ushawishi katika kutathmini matendo ya wahusika wa kazi za fasihi"},
        { value: "Kuwasilisha hoja zenye mantiki na ushawishi katika miktadha mbalimbali kwa kutumia maarifa ya kifasihi"},
        { value: "Kueleza miktadha inayochagiza utunzi wa kazi za fasihi"},
        { value: "Kujadili fursa zinazotokana na kazi za fasihi"},
        { value: "Kufafanua mchango wa TEHAMA katika kutambua fursa zinazotokana na kazi za fasihi"},
        { value: "Kueleza hatua za utunzi wa kazi za fasihi simulizi (maigizo) na fasihi andishi (mashairi na hadithi za watoto)"},
        { value: "Kutunga kazi za fasihi simulizi (maigizo) na fasihi andishi (mashairi na hadithi za watoto) kwa kuzingatia kanuni"},
        
    ];

   

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kukuza uelewa wa dhana ya fasihi"},
        { value: "Kutathmini nadharia za chimbuko la fasihi"},
        { value: "Kuchambua uhusiano kati ya fasihi simulizi na fasihi andishi"},
        { value: "Kuonesha uelewa wa misingi ya kutathmini kazi za fasihi"},
        { value: "Kutathmini nadharia za uhakiki wa kazi za fasihi"},
        { value: "Kuhakiki kazi za fasihi kwa kutumia misingi na nadharia mbalimbali"},
        { value: "Kutumia fasihi kutathmini maadili na mitazamo katika jamii"},
        { value: "Kumudu mbinu zinazotumika kujenga ujumi katika kazi za fasihi"},
        { value: "Kutathmini maana mbalimbali za kazi za fasihi"},
        { value: "Kutumia fasihi kujenga hoja zenye mantiki na ushawishi"},
        { value: "Kutambua fursa zinazotokana na kazi za fasihi ya Kiswahili"},
        { value: "Kumudu kanuni za utunzi wa kazi za fasihi"},
        { value: "Kutunga kazi za fasihi"},
        
    ];  

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023), Fasihi Ya kiswahili kitabu cha mwanafunzi kwa shule za sekondari kidato cha Tano, Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kumudu dhana na misingi ya fasihi"},
        { value: "Kuthamini kazi za fasihi"},
        { value: "Kujenga ujumi"},
        { value: "Kubuni kazi changamani za fasihi"},
       
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
}  else if (subject === "Basic Applied Mathematics") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Explore some advanced tenets of trigonometry (relationship of the secant, cosecant, and cotangent to the sine, cosine, and tangent, trigonometric identities: Pythagorean, compound and double angles)"},
        { value: "Explore some advanced tenets of functions (Properties, Domain and Range and graphs of cubic functions, rational functions with a constant numerator and a linear equation in the denominator, logarithmic, and exponential functions)"},
        { value: "Solve real life problems involving growth and decay"},
        { value: "Explore the basic tenets of calculus (Differentiation: first principles, power rule, chain rule, product rule, and quotient rule, Integration: substitution method)"},
        { value: "Use differentiation methods to solve real life problems (maximum and minimum, curve sketching, rate of change marginal cost and marginal revenue functions) "},
        { value: "Use integration methods to solve real life problems (area under the curve, volume of solid of revolution, cost and revenue functions)"},
        { value: "Use sequences and series to determine simple and compound interest"},
        { value: "Explore some advanced tenets of algebra (solve simultaneous equations of one linear and one quadratic equation algebraically and graphically, graphs of direct and inverse variation)"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Use some advanced skills in geometry, trigonometry, and vectors to solve problems in different contexts"},
        { value: "Use functions and calculus to solve problems in different contexts"},
        { value: "Apply knowledge of sequences and series in different contexts"},
        { value: "Apply knowledge of algebra and number theory in different contexts"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Basic Applied Mathematics for Adavanced Level secondary schools student's book, form Five. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Use applied mathematical knowledge and skills"},
        { value: "Use algebra, set theory, and logic to solve problems in different contexts"},
       
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
}  else if (subject === "Accountancy") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Describe the principles and practices f cashew)"},
        { value: "Describe the conceptual framework of accounting (objectives of general-purpose financial statements, users and qualitative characteristics of useful accounting information)"},
        { value: "Describe the concepts and principles applied in the accounting for inventories (meaning, types, valuation methods, stock estimation and insurance claims)"},
        { value: "Describe the concepts and principles applied in the accounting of payroll (meaning, forms and methods of employees’ remuneration and deductions)"},
        { value: "Describe the concepts and principles applied in the accounting of investments (meaning, types and terminologies)"},
        { value: "Describe the concepts and principles applied in the accounting of businesses operating with branches (meaning and nature, types and transactions involved)"},
        { value: "Describe the concepts and principles applied in the accounting of royalties (meaning, types and terminologies)"},
        { value: "Describe the concepts and principles applied in the accounting of non-current assets (nature, types, valuation and measurement methods, depreciation and disposal)"},
        { value: "Describe the concepts and principles applied in the accounting of hire purchases (meaning, nature and terminologies)"},
        { value: "Describe how to develop an accounting action plan"},
        { value: "Develop an accounting action plan"},
        { value: "Prepare and maintain accounting records related to inventories (using: different stock-taking systems (perpetual and periodic) and using different inventory valuation methods (FIFO, LIFO and weighted average))"},
        { value: "Prepare and maintain accounting records related to payroll (computations of gross pay and net pay, payroll summary for remunerations and deductions, and journal entries)"},
        { value: "Prepare and maintain accounting records related to equity-based investments (acquisition and disposal using different price quotations; returns on investments)"},
        { value: "Prepare and maintain accounting records related to businesses operating with branches (ledger accounts for dependent and independent branches)"},
        { value: "Prepare and maintain accounting records related to royalties (in the books of the lessor and lessee when the contract provides minimum rent and when it does not provide minimum rent)"},
        { value: "Prepare and maintain accounting records related to non-current assets (valuation, depreciation and disposal)"},
        { value: "Prepare and maintain accounting records related to hire purchases (in the books of hire vendors and hire purchasers)"},
        { value: "Evaluate the impact of using different inventory valuation methods on reported profits/ losses and the financial position of a business"},
        { value: "Perform relevant computations to correct various accounting errors using a suspense account"},
        { value: "Analyse the impact of various accounting errors (commission, principle, original entry and transposition) on the reported profit/loss and the financial position of a business"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Demonstrate an understanding of concepts, theories and principles of Accounting"},
        { value: "Preparing an accounting work plan"},
        { value: "Prepare and maintain accounting records"},
        { value: "Adjust records in financial statements"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Accountancy for Advanced Level secondary schools student's book, form Five. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate mastery of the concepts, theories and principles of Accounting"},
        { value: "Preparing accounting reports"},
       
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
} 
    else if (subClasses === "Form Six") {
        if (subject === "Chemistry") {
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the concept of chemical equilibria in predicting the direction of reactions for formation of desired products (dynamic equilibrium, ionic equilibrium and acid-base equilibrium)"},
            { value: "Perform experiments involving chemical equilibria and report the experimental results scientifically (preparation of buffer solutions and acid-base titrations)"},
            { value: "Assess the applications of chemical equilibria in industries and daily life (manufacture of H2SO4, fertilizers, photochromic lenses and, acids, bases and salts in food industries)"},
            { value: "Describe the physical and chemical properties of transition elements (variable oxidation states, catalytic properties, magnetic properties, alloy formation)"},
            { value: "Describe the concept of complex compounds (type of complexes and factors affecting complex formation)"},
            { value: "Explore reactions of complex compounds"},
            { value: "Analyse the uses of transition elements and complex compounds in industries (as conductors, catalysts, alloys and ornaments)"},
            { value: "Describe the concept of chemical kinetics (rate laws, activation energy, catalysis)"},
            { value: "Investigate the applications of chemical kinetics in industries and real-life situation (catalyst in production, medical aspects, baking industries, food storage)"},
            { value: "Describe the concept of electrochemistry (electrochemical cells and electrode potentials)"},
            { value: "Investigate the applications of electrochemistry in industries and real life situation (corrosion inhibition, purification of metals and batteries productions)"},
            { value: "Complete and submit for assessment a scientific report of the project started in Form Five"},
            
        ];

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an advanced understanding of the concepts, theories and principles of Chemistry"},
            { value: "Demonstrate an understanding of changes in the physical and chemical properties of elements according to their position in the periodic table"},
            { value: "Demonstrate an understanding of chemical concepts and principles and their application in different contexts"},
            { value: "Conduct a project in Chemistry"},
            
        ];

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Chemistry for Advanced Level secondary schools student's book, form Six. Tanzania Institute of Education"},
            
        ];
        
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the concepts, theories and principles in Chemistry"},
            { value: "Conduct a project in Chemistry"},
            
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
            { value: "Select Main Activity"},
            { value: "Explain the principles, theories and concepts of current electricity (direct and alternating current and electrical networks)"},
            { value: "Explore the basic tenets of electromagnetism (electromagnetic force, induction and electromagnetic waves)"},
            { value: "Explore the basic tenets of electronics and telecommunication (band theory, semiconductors, transistors, logic gates and satellites)"},
            { value: "Explore some advanced tenets of atomic Physics (atomic transitions, nuclear physics, LASER, X-rays, α, β and γ radiations)"},
            { value: "Explore the basic tenets of energy and energy sources (solar radiation, wind energy, hydropower and thermal reactors)"},
            { value: "Explore the basic tenets of medical Physics (nervous system, electro¬cardiography, diagnostic imaging and radiotherapy)"},
            { value: "Use various instruments to carry out experiments in current electricity, electromagnet is, electronics, telecommunication, energy sources, medical physics and atomic physics Interactive simulation: Facilitate students to visualize and understand the use of various measuring instruments used in current electricity, electromagnetism, electronics, telecommunication, energy sources, medical Physics and physics of the atom"},
            { value: "Analyse the strengths and weaknesses of the various instruments and techniques used in current electricity, electromagnetism, electronics, telecommunication, energy sources, medical physics and atomic Physics"},
            { value: "Design and carry out scientific experiments related to current electricity, electromagnetism, electronics, telecommunication, energy sources, medical physics and atomic physics"},
            { value: "Complete and submit a report for the research project started in Form Five"},
            
        ]; 
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an advanced understanding of the concepts, theories and principles in Physics"},
            { value: "Use various instruments to carry out measurements in Physics"},
            { value: "Analyse the efficacy of different techniques and instruments in physical measuremnts"},
            { value: "Carry out experiments in Physics"},
            { value: "Conduct a project in Physics"},
            
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Physics for Advanced Level secondary schools student's book, form Six. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of concepts, theories and principles in Physics"},
            { value: "Conduct experiments in Physics"},
            { value: "Conduct a project in Physics"},

            
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
    } else if (subject === "Advanced Mathematics") {
        
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Explore the basic tenets of hyperbolic functions (definition, conversion into logarithmic form, series of hyperbolic cosine and sine functions, derivatives and integration)"},
            { value: "Explore the basic tenets of probability theory (counting principles, independent and dependent events, probability distributions)"},
            { value: "Determine the probability of an event, expectation, variance, and standard deviation of random variables"},
            { value: "Explore the basic tenets of first and second order differential equations (linearity, degree, order, formulation, solutions, homogeneity, separability, and exactness)"},
            { value: "Use differential equations to solve real life problems related to growth (decay, cooling of bodies, falling bodies, electrical circuits, and vibrating springs)"},
            { value: "Explore the basic tenets of numerical methods (errors, secant method, Newton- Raphson method, trapezoidal rule, and Simpson’s rule)"},
            { value: "Explore advanced tenets of coordinate geometry (parabola, ellipse, hyperbola, and polar coordinates)"},
            { value: "Explore advanced tenets of vectors (ratio theorems, dot product, cross product, vector differentiation, and vector integration)"},
            { value: "Use vectors to solve problems related to displacement, velocity, and acceleration of a particle, work done by forces, and projection of vectors"},
            { value: "Explore the basic tenets of complex numbers (modulus, argument, Argand diagram, polar form, De Moivre’s theorem and Euler’s formula)"},
            { value: "Explore advanced tenets of statistics (measures of central tendency and dispersion: mean, variance and standard deviation by coding method, quartiles, and percentiles)"},
            { value: "Complete the project started in Form Five and submit the report for assessment"},
            
            
        ];
        
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an advanced understanding of knowledge and skills in Mathematics"},
            { value: "Demonstrate an advanced understanding of statistics"},
            { value: "Carry out a project in Mathematics"},
            
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Advanced Mathematics for secondary schools student's book, form Six. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of some advanced concepts in Mathematics"},
            { value: "Conduct a project in Mathematics"},

            
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
    } else if (subject === "Historia ya Tanzania na Maadili") {
        
        var mainOptions = [
            { value: "Chagua Shughuli Kuu" },
            { value: "Kueleza dhana na chimbuko la ukoloni mamboleo"},
            { value: "Kuchambua athari za ukoloni mamboleo kwa Tanzania kiuchumi, kisiasa, kijamii kiutamaduni na kimaadili"},
            { value: "Kutathmini mikakati ya kitaifa katika kupambana na ukoloni mamboleo"},
            { value: "Kueleza chimbuko la mifumo ya ulinzi na usalama wa taifa"},
            { value: "Kuchambua hatua za mabadiliko ya mifumo ya ulinzi na usalama wa taifa baada ya uhuru"},
            { value: "Kutathmini nafasi ya maadili katika kujenga mifumo imara ya ulinzi na usalama wa taifa"},
            { value: "Kujadili umuhimu wa wananchi kushiriki katika shughuli za ulinzi na usalama"},
            { value: "Kueleza chimbuko na misingi ya Sera ya mambo ya nje ya Jamhuri ya Muungano wa Tanzania"},
            { value: "Kujadili mabadiliko ya Sera ya mambo ya nje na uhusiano wa kimataifa tangu 1964"},
            { value: "Kuchambua nafasi ya Sera ya mambo ya nje na uhusiano wa kimataifa katika kudumisha na kulinda maadili ya Kitanzania"},
            { value: "Kueleza falsafa ya Mapinduzi Matukufu ya Zanzibar"},
            { value: "Kujadili mchango wa Mapinduzi Matukufu ya Zanzibar katika kudumisha uhuru, umoja na amani ya kitaifa"},
            { value: "KKuchambua matendo ya kimaadili katika kuenzi Mapinduzi Matukufu ya Zanzibar"},
            { value: "Kufafanua falsafa ya Azimio la Arusha"},
            { value: "Kutathmini mifumo na misingi mipya ya kimaadili iliyoanzishwa na Azimio la Arusha"},
            { value: "Kuchambua athari za Azimio la Arusha kiuchumi, kisiasa, kijamii, kimaadili, kiutamaduni na katika uhusiano wa kimataifa"},
            { value: "Kutathmini umuhimu (relevance) wa Azimio la Arusha katika mazingira ya sasa"},
            { value: "Kueleza mchango wa Tanzania katika kuundwa na kukua (evolution) kwa jumuiya za kikanda"},
            { value: "Kuchambua fursa zitokanazo na ushiriki wa Tanzania katika uhusiano wa kikanda"},
            { value: "Kutathmini mchango wa lugha ya Kiswahili katika uhusiano wa kikanda"},
            { value: "Kutathmini ushiriki wa Tanzania katika mapambano dhidi ya rushwa na ujenzi wa utawala bora kikanda"},
            { value: "Kueleza falsafa ya mabadiliko ya kiuchumi, kisiasa, kiutamaduni, na kimaadili katika kipindi cha uliberali hadi sasa"},
            { value: "Kujadili athari za mfumo wa kiliberali kiuchumi, kisiasa, kiutamaduni na kimaadili"},
            { value: "Kuchambua mifumo ya kitaasisi iliyoundwa kuratibu, kulinda na kuzuia vitendo vya ukiukwaji wa maadili ya Taifa katika kipindi cha uliberali hadi sasa"},
            { value: "Kukamilisha na kuwasilisha taarifa ya kazi mradi kuhusu historia ya Tanzania na maadili ulioianza kidato cha tano"},
            
        ];

        

        var competenceOptions = [
            { value: "Chagua Umahiri mahususi"},   
            { value: "Kumudu chimbuko la ukoloni mamboleo"},
            { value: "Kutathmini mabadiliko ya mifumo ya ulinzi na usalama wa taifa"},
            { value: "Kuchambua visababishi vya mabadiliko ya sera ya mambo ya nje na uhusiano ya kimataifa"},
            { value: "Kutathmini mchango wa Mapinduzi Matukufu ya Zanzibar katika kudumisha uhuru, umoja, na amani ya kitaifa."},
            { value: "Kuchambua chimbuko la Azimio la Arusha na matokeo yake kiuchumi, kisiasa, kiutamaduni na kimaadili."},
            { value: "Kutathmini nafasi ya Tanzania katika kujenga uhusiano wa kikanda"},
            { value: "Kutafsiri mabadiliko ya kiuchumi, kisiasa, kiutamaduni na kimaadili katika kipindi cha uliberali na utandawazi kuanzia 1986 hadi sasa"},
            { value: "Kufanya kazi mradi ya historia ya Tanzania na maadili"},
            
        ]; 

        var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Taasisi ya Elimu Tanzania. (2023). Historia Ya Tanzania na Maadili kitabu cha mwanafunzi kwa shule za sekondari kidato cha kwanza. Taasisi ya Elimu Tanzania"},
            
        ];
        var topicsOptions = [
            { value: "Chagua Umahiri mkuu"},
            { value: "Kumudu historia ya ujenzi wa taifa na maadili yake katika kipindi cha 1961- 1966"},
            { value: "Kutathmini ujenzi wa Taifa na maadili yake wakati wa Azimio la Arusha, 1967-1985"},
            { value: "Kutathmini historia ya Tanzania na maadili wakati wa uliberali, 1986 hadi sasa"},
            { value: "Kufanya kazi mradi ya historia ya Tanzania na maadili"},
            

            
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
            { value: "Select Main Activity"},
            { value: "Explain the physiology and theories underlying transportation of materials in plants"},
            { value: "Describe the mechanism of blood circulation in vertebrates (single, double and maternal-foetal circulation)"},
            { value: "Explain growth process in plants (cell cycle, growth patterns, seed dormancy and viability, and primary and secondary growth)"},
            { value: "Explain growth process in animals (growth patterns and metamorphosis)"},
            { value: "Describe the mechanism of reproduction in plants (gametogenesis, fertilisation, and life cycles of selected plants)" },
            { value: "Describe the mechanism of reproduction in animals (gametogenesis, fertilisation and hormonal control of menstrual cycle, oestrus cycle and pregnancy)"},
            { value: "Describe principles of inheritance in living organisms (hereditary materials, DNA replication, protein synthesis and dihybrid inheritance)."},
            { value: "Describe theories and mechanism underlying evolution (theories of origin of life, organic evolution theory, evidence of evolution, and speciation)"},
            { value: "Explain the concept of ecology (methods of studying, biodiversity, ecological succession, and conservation methods)"},
            { value: "Prepare and present a report based on the findings"},
            { value: "Design and carry out anatomical and physiological investigations related to transportation in plants and animals, growth in plants and reproductive system"},
            { value: "Complete and submit for assessment a scientific report of the project started in Form Five"},
        ];

        
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an advanced understanding of concepts, theories and principles in Biology"},
            { value: "Demonstrate mastery of advanced skills for conducting biological investigations"},
            { value: "Perform investigations on the anatomy and physiology of living organisms"},
            { value: "Conduct a project in Biology"},
            
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Biology for Advanced Level secondary schools student's book, form Six. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence" },
            { value: "Demonstrate mastery of advanced concepts, theories and principles in Biology"},
            { value: "Conduct biological investigations"},
            { value: "Conduct a project in Biology"},
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
    }  else if (subject === "English Language") {
        
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Participate in oral conversations in advanced settings (e.g., airports, migration, diplomacy and diplomatic protocols etc)"},
            { value: "Narrate documentaries of events, and situations with a standard pronunciation in different contexts (e.g., history, religion and, medicine)"},
            { value: "Participate in dialogues, debates and meetings on topical and cross-cutting issues (e.g. debate, meeting, and presentations) with a standard pronunciation"},
            { value: "Use advanced vocabulary and grammar (e.g., adverbs, prepositions and conjunctions) to describe field specific past, present and future events"},
            { value: "Compose field specific texts using advanced vocabulary and grammar (e.g., therein, thereof, besides, in addition, although, and however) in different contexts"},
            { value: "Evaluate the appropriateness of grammar and vocabulary used in speech and written texts in field specific contexts"},
            { value: "Participate in complex conversations (e.g., death, violence, discrimination, accidents and poor results)"},
            { value: "Respond to conversations using rhetorical devices"},
            { value: "Employ paralinguistic features to communicate information in a variety of settings"},
            { value: "Read a variety of texts and identifying the contextual clues (e.g., general context, co-text, punctuations) for understanding implied meanings"},
            { value: "Read a variety of texts (e.g., letters, articles and newspapers) to obtain implied meanings"},
            { value: "Read a variety of texts and comment on the implied meanings from the author’s point of view"},
            { value: "Assess the appropriateness of the language and style used in functional texts"},
            { value: "Differentiate the structure and style of different functional texts"},
            { value: "Interpret conversations in field specific settings (e.g., legal, medicine, religion, science and technology)"},
            { value: "Solve the challenges that may arise when interpreting field specific conversations"},
            { value: "Translate a variety of complex technical texts using Computer – Assisted Translation (CAT) tools"},
            { value: "Address challenges that may arise during translation of technical texts"},
            { value: "Edit and proofread complex field specific texts"},
            { value: "Evaluate edited field specific texts with an editorial perspective"},
            { value: "Explain the qualities of a translation project manager"},
            { value: "Use Computer-Assisted Translation (CAT) tools to manage translation projects (e.g., writing quotations, invoices and contracts)"},
            { value: "Analyse the settings of literary texts to show their contributions to the content"},
            { value: "Relate the content of literary works to real life situations"},
            { value: "Infer moral lessons from a variety of literary works"},
            { value: "Formulate an idea for composing literary work of literature"},
            { value: "Develop plans of writing literary works (e.g., characters, themes, setting and plot)"},
            { value: "Apply literary skills in developing literary works"},
            
        ];

        

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Automate the production of oral descriptions and conversations using standard pronunciation"},
            { value: "Use correct grammar and vocabulary in oral and written language tasks"},
            { value: "Demonstrate advanced oral and written proficiency in a variety of communicative contexts"},
            { value: "Read texts critically to recognise potential implications beyond the author’s explicit meaning"},
            { value: "Develop advanced socio-cultural analysis of functional texts"},
            { value: "Apply principles of interpretation to provide complex and authentic interpretations"},
            { value: "Apply principles of translation to produce complex authentic translation"},
            { value: "Apply principles of editing and proofreading a variety of texts"},
            { value: "Manage complex translation and edit projects using Computer-Assisted tools"},
            { value: "Evaluate the context in which literary texts are written, read and understood"},
            { value: "Create complex literary works"},
            
        ];  

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). English Language for Advanced Level Secondary Schools Student's book, form Six. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main Competence"},
            { value: "Demonstrate mastery of the advanced English language skills"},
            { value: "Comprehend oral and written information"},
            { value: "Communicate effectively in different contexts"},
            { value: "Provide advanced English language services to the community"},
            { value: "Appreciate and create literary works"},
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
            { value: "Select Main Activity" },
            { value: "Describe rocks and the rock cycle (meaning, characteristics, types, formation, weathering and soil formation)" },
            { value: "Explain the basic concepts of hydrology (meaning, types and importance)" },
            { value: "Describe the hydrological cycle (Outputs, storages, flows and underground water)" },
            { value: "Use the principles of map interpretation (visualizing symbols, signs, understanding themes, direction and association) to infer geographical features" },
            { value: "Apply the techniques of photograph interpretation to analyse geographical phenomena" },
            { value: "Complete and submit for assessment the project started in Form Five" },
            
        ];

        

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of rocks and the rock cycle"},
            { value: "Demonstrate an understanding of the basics of hydrology and the hydrological cycle"},
            { value: "Interpret maps and photographs"},
            { value: "Conduct a project in Geography"},
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Geography for Advanced Level Secondary Schools Student's book, form Six. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of the structure of the Earth"},
            { value: "Demonstrate mastery of skills and techniques in Geography"},
            { value: "Conduct a project in Geography"},
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
            { value: "Select Main Activity"},
            { value: "Explain the concept of threats to world peace and security (meaning and features"},
            { value: "Analyse the great wars fought from the 17th to the 19th Century and their impacts on world peace and security (30 Years War, Napoleonic war, and Franco- Prussian war)"},
            { value: "Discuss the ways in which great wars fought from the 17th to the 19th Century generated new ideas on world peace and security (Westphalia Treaty, sovereignty, balance of power and military alliances)"},
            { value: "Examine the contributions of world wars and tensions in undermining world peace and security from the late 19th Century to 1940s (Colonial rivalries, First World War, Manchuria crisis and Second World War)"},
            { value: "Discuss changing efforts pursued to overcome threats to world peace from the late 19th Century to the 1940s (Berlin Conference, Versailles Peace Treaty, the League of Nations, and the United Nations)"},
            { value: "Examine the extent to which cold war politics and the arms race threatened world peace and security from the 1940s to the 1990s"},
            { value: "Examine the efforts made to overcome threats to world peace caused by cold war politics and the arms race (Nuclear Proliferation Treaties SALT I, SALT II), Camp David Peace Accord 1979 and Oslo Accord 1993)"},
            { value: "Examine the rise of new threats to world peace and security (terrorism and asymmetric war, cyber security, radicalism)"},
            { value: "Discuss the differences between traditional and new threats to world peace and security (nature, character and pattern)"},
            { value: "Discuss strategies to overcome new threats to world peace and security"},
            { value: "Examine the nature and character of ethnic and civil wars and the threats they pose on world peace and security (Kosovo conflict, Rwanda and Burundi Civil Wars, Somalia, Central Africa Republic, Mali, Rohingya, Cambodia, Yemen, the Palestinian- Israel conflict)"},
            { value: "Examine the extent to which ethnic and civil wars are connected to the global industrial-military complex"},
            { value: "Discuss peace building strategies in countries affected by ethnic and civil wars"},
            { value: "Explain the concept of development in post-colonial Africa (meaning and indicators)"},
            { value: "Appraise political, economic, and social developments in different regions of Africa from the 1960 to present (Eastern, Western, Southern and Northern Africa)"},
            { value: "Discuss the internal and external factors hindering political, social, technological and economic development in Africa from the 1960s to the present"},
            { value: "Complete and submit for assessment the project initiated in Form Five"},
            
        ];

       

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the history of the great wars of the 17th to 19th Century"},
            { value: "Demonstrate an understanding of the history of conflicts and wars of the 20th Century"},
            { value: "Demonstrate an understanding of new threats to world peace and security"},
            { value: "Demonstrate an understanding of the threats to world peace resulting from civil and ethnic wars"},
            { value: "Demonstrate an understanding of the history of development in post-colonial Africa"},
            { value: "Conduct a project in History"},
            
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). History for Advanced Level Secondary Schools Student's Book, Form Six. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of the history of threats to world peace"},
            { value: "Demonstrate mastery of the history of development in Africa"},
            { value: "Conduct a project in History"},
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
    }  else if (subject === "Business Studies") {
        
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe some basic aspects of operations management (methods of production, value addition and stock administration)"},
            { value: "Explain some aspects of insurance for medium businesses (choice of appropriate insurance plan and procedures for filing insurance claims)"},
            { value: "Describe some advanced aspects of marketing (marketing mix - 4Cs and 7Ps, market changes, market segmentation, marketing boards, market research, e-marketing)"},
            { value: "Explore the basic aspects of law of contract (nature of contractual obligations, elements of a contract, formation of a contract, types of misrepresentation, forms and consequences of breach of contract and remedies for breach)"},
            { value: "Describe taxes and levies associated with medium businesses in Tanzania"},
            { value: "Complete and submit the business plan developed in Form Five"},
            
        ];

        

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an advanced understanding of the principles of business"},
            { value: "Demonstrate an understanding of the policies and laws governing medium scale businesses"},
            { value: "Prepare a medium scale business plan"},
            
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Business Studies for Advanced Level secondary Schools Student's book, form Six. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of principles of business"},
            { value: "Demonstrate an understanding of the business environment"},
            { value: "Conduct a project in Business Studies"},
           
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
    }  else if (subject === "Economics") {
        
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Explore the basic tenets of macroeconomics (meaning, scope and goals)"},
            { value: "Describe national income (key terms, approaches of measuring, determinants, importance, effect on standard of living and determination of equilibrium)"},
            { value: "Describe unemployment (key terms, forms, causes, effects and control measures)"},
            { value: "Describe money (key terms, the evolution of money, functions and monetary policies)"},
            { value: "Describe inflation (meaning, types, causes, effects and control measures)"},
            { value: "Describe public finance (key terms, government revenue and expenditure, public debt and fiscal policy)"},
            { value: "Describe international trade (meaning, advantages, disadvantages, terms of trade, balance of payments, absolute and comparative advantage and protectionism)"},
            { value: "Apply macroeconomic theories to explain the state of national and international economies"},
            { value: "Apply macroeconomic theories to explain the levels of socio-economic development of nations"},
            { value: "Complete and submit a report of the project developed in Form Five"},
            
        ];

       

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the concepts, theories and principles used in Economics"},
            { value: "Demonstrate mastery of economic analysis"},
            { value: "Design and carry out a project in Economics"},
            
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Economics for Advanced Level Secondary Schools Student's book, form Six. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of basic concepts, theories and principles in Economics"},
            { value: "Conduct a project in Economics"},
           
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
            { value: "Chagua Shughuli Kuu"},
            { value: "Kueleza dhana ya maana na aina zake"},
            { value: "Kubaini maneno yenye maana za msingi na za ziada katika matini mbalimbali"},
            { value: "Kutumia maneno yenye maana za msingi na ziada katika miktadha mbalimbali"},
            { value: "Kufafanua uhusiano wa kimaana wa maneno (mfano: antonimia, homonimia, sinonimia, na polisemia)"},
            { value: "Kutumia kamusi kubainisha maana za antonimia, homonimia, sinonimia na polisemia"},
            { value: "Kubaini msamiati mpya kutoka katika mazungumzo changamani ya kiufundi (mfano: matini ya kisheria, sayansi na teknolojia, kitaaluma, na sera)"},
            { value: "Kubaini msamiati mpya kutoka katika matini andishi changamani ya kiufundi(mfano: kisheria, sayansi na teknolojia, kitaaluma, na sera)"},
            { value: "Kuandika matini kuhusu fani mahususi kwa kutumia msamiati mpya (mfano: kemia, fizikia, fasihi)"},
            { value: "Kusahihisha makosa ya kisarufi na kimantiki katika matumizi ya lugha"},
            { value: "Kutofautisha lugha ya staha na isiyo ya staha"},
            { value: "Kufafanua dhana na aina za lahaja"},
            { value: "Kujadili sababu za kuibuka kwa lahaja za Kiswahili"},
            { value: "Kujadili dhana na mchakato wa usanifishaji wa Kiswahili"},
            { value: "Kujadili umuhimu wa lahaja katika ukuzaji na usanifishaji wa Kiswahili"},
            { value: "Kujadili kukua na kuenea kwa Kiswahili kutokana na muamko wa utangamano wa nchi za Afrika"},
            { value: "Kutathimini kukua na kuenea kwa Kiswahili duniani"},
            { value: "Kujadili fursa mbalimbali za lugha ya Kiswahili"},
            { value: "Kuhariri matini changamani anuai za kiufundi"},
            { value: "Kutathmini matini za kiufundi zilizohaririwa na wengine"},
            { value: "Kutafsiri matini za fani mahususi kwa mbinu ya kisemantiki na kimawasiliano (mfano: kifasihi, kisayansi, na kisheria)"},
            { value: "Kukalimani mazungumzo kwa ukalimani sawia/sambamba"},
            { value: "Kubaini changamoto zinazojitokeza katika ukalimani sawia/sambamba"},
            { value: "Kutatua changamoto zinazojitokeza katika ukalimani sawia/sambamba"},
            { value: "Kueleza dhana ya kutathmini tafsiri (maana, sababu,umuhimu na matokeo)"},
            { value: "Kufafanua mbinu za kutathmini tafsiri"},
            { value: "Kutathmini matini mbalimbali zilizotafsiriwa"},
            { value: "Kueleza dhana ya kutathmini ukalimani (maana, sababu, umuhimu, na matokeo ya tathmini)"},
            { value: "Kubaini mbinu za kutathmini ukalimani"},
            { value: "Kutathmini ukalimani"},
            { value: "Kubainisha fursa mbalimbali za ukalimani"},
            { value: "Kujadili maendeleo ya fasihi katika kipindi cha utandawazi"},
            { value: "Kujadili nafasi ya uhuru wa mwandishi na udhamini katika maendeleo ya fasihi"},
            { value: "Kuhakiki fani na maudhui katikamashairi"},
            { value: "Kuhusianisha ujumbe unaopatikana katika mashairi na maisha yakila siku"},
            { value: "Kusanifu matini mbalimbali za kisanaa"},
            { value: "Kubaini mbinu za utungaji wa mashairi"},
            { value: "Kutunga mashairi anuai"},
            { value: "Kujadili fursa za utungaji wa kazi za fasihi"},
            
        ];

        

        var competenceOptions = [
            { value: "Chagua Umahiri Mahususi"},
            { value: "Kukuza uelewa wa misingi na kanuni za Kiswahili"},
            { value: "Kukuza msamiati kutokana na mazungumzo na maandishi changamani"},
            { value: "Kutumia msamiati na sarufi stahiki katika miktadha mbalimbali"},
            { value: "Kutambua chimbuko na asili ya Kiswahili"},
            { value: "Kutathmini kukua na kuenea kwa Kiswahili"},
            { value: "Kutafsiri matini mbalimbali"},
            { value: "Kukalimani mazungumzo mbalimbali"},
            { value: "Kutathmini kazi mbalimbali za tafsiri"},
            { value: "Kutathmini ukalimani"},
            { value: "Kutathmini maendeleo ya fasihi"},
            { value: "Kuhakiki kazi za fasihi"},
            { value: "Kutunga kazi za fasihi"},
            
        ]; 

        var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Taasisi ya Elimu Tanzania. (2023), kiswahili kitabu cha mwanafunzi kwa shule za sekondari kidato cha Sita, Taasisi ya Elimu Tanzania."},
            
        ];
        var topicsOptions = [
            { value: "chagua Umahiri Mkuu"},
            { value: "Kumudu stadi za juu za Kiswahili"},
            { value: "Kuthamini Kiswahili kama lugha ya taifa"},
            { value: "Kuhariri kazi mbali-mbali"},
            { value: "Kutafsiri na kukalimani kazi mbalimbali"},
            { value: "Kuthamini kazi za fasihi"},
           
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
    }  else if (subject === "Computer Science") {
        
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the web application (Meaning, history and development, types, differences between website development and web application development, tags, Application Programming Interfacing -APIs)"},
            { value: "Create an interactive web pages (Use modern versions of PHP/Python, JavaScript, CSS, etc.) with appropriate responsive techniques"},
            { value: "Apply web API in rich web based application (Canvas API, Add canvas, Draw canvas environment, drag and drop API, Representation state transfer and CRUD operations)"},
            { value: "Create data-driven web based applications that speak to client or server storage systems and embed it with audio and video"},
            { value: "Create rich-based web applications that deliver similar features and functions as in desktop applications using modern libraries or frameworks"},
            { value: "Use CSS and modern HTML controls in rich based web applications"},
            { value: "Develop back-end using PHP/Python, JavaScript, CSS, etc (Back end should be handling user input, producing template output, storing information in databases and data stores, and building systems with secure user accounts)"},
            { value: "Describe the concept of data structure and algorithms"},
            { value: "Explore and utilise basic data structure (linked lists, stacks, queues and trees.)"},
            { value: "Describe the design and performance of various classic searching and sorting algorithms"},
            { value: "Write a program that implements various sorting algorithms and create a report for performance"},
            { value: "Create a program that implements array and a linked list data structure using object-oriented programming language"},
            { value: "Implement stack and queue, binary search tree , balanced tree (such as an AVL tree), graph, hash table data structures in object-oriented programming language."},
            { value: "Describe the techniques of algorithm analysis"},
            { value: "Demonstrate basic understanding of automated system and how sensors, microprocessors and actuators can be used in collaboration to create automated systems"},
            { value: "Describe the advantages and disadvantages of an automated system used for various scenario (agriculture, Industry, transport, weather, etc)"},
            { value: "Create simple automated system for specific challenge in surrounding environment"},
            { value: "Describe the concept of emerging technologies (Meaning, types, importance, advantages and disadvantages, and their impacts in everyday life)"},
            { value: "Demonstrate practical understanding of building blocks and components of artificial intelligence: basics algorithms, machine learning, and neural networks"},
            { value: "Demonstrate practical understanding of impacts of emerging technologies in everyday life"},
            { value: "Perform an advanced data analysis using appropriate tools (Excel, Python, etc)"},
            { value: "Apply appropriate skills to visualise and interpret data"},
            { value: "Demonstrate understanding of database models"},
            
        ];

       

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of web application development (Using PHP/ Python, JavaScript, CSS, etc)"},
            { value: "Demonstrate mastery of basic principles of Algorithms and Data structures"},
            { value: "Demonstrate understanding of Automated and Emerging technologies (Automated systems, Artificial Intelligence, Machine learning, 3D and holographic imaging, Virtual Reality (VR), Augmented Reality (AR))"},
            { value: "Mastering principles of computer data analysis (advanced analysis, visualisation and results interpretation, etc)"},
            
        ];  

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Computer Science for Advanced Level Secondary Schools Student's book, form Six. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the principles of Computer Science"},
            { value: "Demonstrate mastery of the data management"},
           
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
 else if (subject === "Elimu ya Dini ya Kiislam") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Kuchambua uhusiano wa kiitikadi baina ya Uislamu na itikadi nyingine"},
        { value: "Kuonesha kuwa Uislamu ni dini anayostahiki kuifuata mwanadamu"},
        { value: "Kuchambua nguzo za Imani"},
        { value: "Kufafanua nguzo ya Ihsan"},
        { value: "Kufafanua mwongozo wa Uislamu kuhusu mambo mtambuka"},
        { value: "Kuchambua mambo mtambuka"},
        { value: "Kueleza dhana ya Maqasid sharia"},
        { value: "Kubainisha matumizi ya misingi ya kiada na ziada ya sharia"},
        { value: "Kubainisha uthabiti wa sharia na unyumbufu wa fat-wa na rai"},
        { value: "Kubainisha mfumo wa kiuchumi katika Uislamu"},
        { value: "Kufafanua mfumo wa kijamii katika Uislamu"},
        { value: "Kubainisha mfumo wa kisiasa katika Uislamu"},
        { value: "Kubainisha mfumo wa kielimu katika Uislamu"},
        { value: "Kufafanua mfumo wa kimahakama katika Uislamu"},
        { value: "Kufafanua ustawi wa Uislamu wakati wa dola ya Banu Umayyah na Banu Abbas"},
        { value: "Kufafanua ustawi wa Uislamu Wakati na Baada ya dola ya Uthmaniyy ah"},
        { value: "Kufafanua ustawi wa Uislamu Afrika"},
        { value: "Kutathmini mbinu za da’awah kulingana na wakati"},
        { value: "Kujihusisha na da’awah"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Kuthibitisha usahihi wa itikadi ya Uislamu"},
        { value: "Kuthamini nguzo za Imani ya Kiislamu"},
        { value: "Kuchambua mambo mtambuka katika jamii kwa mujibu wa Qur’an na Sunnah."},
        { value: "Kufafanua misingi ya Sharia"},
        { value: "Kuthamini matumizi ya Sharia katika miamala"},
        { value: "Kutathmini historia ya Uislamu kabla ya Mtume Muhammad (S.A.W) hadi hivi sasa"},
        { value: "Kujenga mwenendo mwema wa jamii"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Taasisi ya Elimu Tanzania. (2023), Elimu Ya Dini Ya Kiislamu kitabu cha mwanafunzi kwa shule za sekondari kidato cha Sita, Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Kuishi kwa mujibu wa itikadi ya Uislamu"},
        { value: "Kuthamini Qur’an na Sunnah"},
        { value: "Kumtumikia Allah (S.W) katika nyanja zote za maisha"},
        { value: "Kuthamini historia katika kuimarisha Haki na Uadilifu katika jamii"},
       
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
}  else if (subject === "Divinity") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Use the writings of Matthew to discuss the concept of the Gospel"},
        { value: "Discuss the ministry of Jesus as portrayed in the Gospel according to Matthew"},
        { value: "Discuss the role of women in the Gospel according to Matthew"},
        { value: "Use the writings of John to discuss the concept of the Gospel"},
        { value: "Discuss the love of Jesus as portrayed in the Gospel according to John"},
        { value: "Discuss the love of God to others as portrayed in the Gospel according to John"},
        { value: "Discuss the reasons behind the Epistle of Paul to the Romans"},
        { value: "Discuss the rights and obligations of rulers and their subjects as portrayed in the Epistle of Paul to the Romans"},
        { value: "Discuss the reasons behind the Epistle of James"},
        { value: "Discuss the various methods of maintaining communication, cooperation and good relations in society as expounded in the Epistle of James"},
        { value: "Discuss the importance of living the Faith in action as expounded in the Epistle of James"},
        { value: "Use Epistle of James to discuss the evils of prejudice in society"},
        { value: "Complete and submit a report of the project started in Form Five"},
         
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Demonstrate an understanding of the Gospel according to Matthew"},
        { value: "Demonstrate an understanding of the Gospel according to John"},
        { value: "Demonstrate an understanding of the Epistle of Paul to the Romans"},
        { value: "Demonstrate an understanding of the Epistle of James"},
        { value: "Conduct a project"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Divinity for Advanced Level Secondary Schools Student's book, form Six. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate mastery of selected works from the New Testament"},
        { value: "Conduct a Project in Divinity"},
       
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
}  else if (subject === "Agriculture") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Describe basic principles and some advanced practices for production of selected crops (cotton, oil palm, sisal, coconut and grape)"},
        { value: "Describe basic principles and some advanced practices for production of goat and sheep"},
        { value: "Analyse the problems associated with the cultivation, postharvest management and marketing of selected crops (cotton, oil palm, sisal, coconut and grape) and propose possible solutions"},
        { value: "Analyse the problems associated with the husbandry, postharvest management and marketing of livestock produce and products (goat & sheep) and propose possible solutions"},
        { value: "Describe advanced agricultural technologies used in animal production (technologies in husbandry, postharvest management and marketing)"},
        { value: "Apply basic and some advanced agricultural technologies in the production of selected crops (cotton, oil palm, sisal, coconut and grape)"},
        { value: "Apply basic some advanced agricultural technologies in goat and sheep production"},
        { value: "Complete and submit a report on the project started in Form V"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Demonstrate an understanding of principles and some advanced practices of agriculture"},
        { value: "Demonstrate a basic understanding of the agricultural value chain for selected products"},
        { value: "Demonstrate an understanding of some advanced technologies in agriculture"},
        { value: "Use technology to increase agricultural production"},
        { value: "Conduct a project in Agriculture"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Agriculture for Advanced Level Secondary Schools student's book, form Six. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate mastery of the principles of agriculture"},
        { value: "Use some advanced technologies in agriculture"},
        { value: "Conduct a project in Agriculture"},
       
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
}  else if (subject === "Basic Applied Mathematics") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Explore some advanced tenets of coordinate geometry (area of a triangle, angle between two lines and perpendicular distance from a point to a line)"},
        { value: "Explore some advanced tenets of vectors (unit vector, scalar product, cross product, angle between two vectors and work done by a constant force, derivative and integration of vector functions)"},
        { value: "Explore some advanced tenets of statistics (measure of central tendency and dispersion:calculate mean by the coding method, variance, standard deviation, quartiles, and percentiles)"},
        { value: "Explore advanced tenets of set theory (operations involving three sets and cardinality of a set)"},
        { value: "Explore the basic tenets of logic (statements, connectives, truth table, arguments involving three propositions, electrical networks involving three propositions)"},
        { value: "Use logic to analyse validity of arguments"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Use some advanced skills in geometry, trigonometry, and vectors to solve problems in different contexts"},
        { value: "Use statistics to solve problems in different contexts"},
        { value: "Use set theory and logic in argumentation and decision making"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Basic Applied Mathematics for Advanced Level Secondary Schools Student's book, Form Six. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Use applied mathematical knowledge and skills"},
        { value: "Use algebra, set theory and logic to solve problems in different contexts"},
       
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
}  else if (subject === "Fasihi Ya Kiswahili") {
    
    var mainOptions = [
        { value: "Chagua Shughuri Kuu"},
        { value: "Kufafanua dhana ya fasihi ya Kiswahili na fasihi kwa Kiswahili"},
        { value: "Kuchambua sifa za fasihi ya Kiswahili na fasihi kwa Kiswahili kwa kurejelea kazi teule"},
        { value: "Kujadili mchango wa fasihi ya Kiswahili katika maendeleo ya fasihi kwa Kiswahili"},
        { value: "Kujadili mchango wa fasihi kwa Kiswahili katika maendeleo ya fasihi ya Kiswahili."},
        { value: "Kufafanua maendeleo ya fasihi ya Kiswahili kitaifa na kimataifa kabla ya uhuru"},
        { value: "Kuchambua maendeleo ya fasihi ya Kiswahili kitaifa na kimataifa baada ya uhuru"},
        { value: "Kujadili athari za sayansi na teknolojia katika maendeleo ya fasihi ya Kiswahili kitaifa na kimataifa"},
        { value: "Kutumia nadharia kuchambua kazi za fasihi simulizi (hadithi simulizi) na fasihi andishi (hadithi fupi na riwaya) za waandishi wakongwe na chipukizi walioteuliwa"},
        { value: "Kujadili mchango wa nadharia za uhakiki katika maendeleo ya hadithi fupi na riwaya"},
        { value: "Kufafanua maadili yaliyomo katika semi, hadithi fupi na riwaya"},
        { value: "Kulinganisha maadili yaliyomo katika semi, hadithi fupi na riwaya na imani za jamii"},
        { value: "Kuchambua mitazamo iliyomo katika semi, hadithi fupi na riwaya"},
        { value: "Kulinganisha mitazamo iliyomo katika semi, hadithi fupi na riwaya na matendo ya jamii"},
        { value: "Kujadili namna athari za kiimani na kimitazamo zilizomo katika semi, hadithi fupi na riwaya zinavyojidhihiri sha katika jamii"},
        { value: "Kuchambua mbinu zinazotumika kujenga ujumi katika ngonjera, hadithi fupi na riwaya"},
        { value: "Kutumia mbinu za ujumi kusimulia na kutunga matini/ insha za kisanaa"},
        { value: "Kuibua maana mbalimbali zinazopatikana katika fasihi simulizi (semi) na fasihi andishi (hadithi fupi na riwaya)"},
        { value: "Kujadili namna mbinu za kifasihi zinavyoathiri kupatikana kwa maana katika masimulizi, hadithi fupi na riwaya"},
        { value: "Kuwasilisha hoja zenye mantiki na ushawishi kuhusu maudhui yanayojitokeza katika kazi za fasihi"},
        { value: "Kutumia maarifa ya fasihi kutunga matini zenye hoja, mantiki na ushawishi"},
        { value: "Kufafanua hatua za utunzi wa kazi za fasihi andishi (tamthiliya na riwaya)"},
        { value: "Kutunga tamthiliya na riwaya kwa kuzingatia kanuni za utunzi"},
        { value: "Kuigiza tamthiliya mbalimbali"},
        { value: "Kujadili mchango wa TEHAMA katika uchapaji, uchapishaji na usambazaji wa kazi za fasihi"},
        
    ];

   

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kuhusianisha fasihi ya Kiswahili na fasihi kwa Kiswahili"},
        { value: "Kutathmini maendeleo ya fasihi ya Kiswahili kitaifa na kimataifa"},
        { value: "Kuhakiki kazi za fasihi kwa kutumia misingi na nadharia mbalimbali"},
        { value: "Kutumia fasihi kutathmini maadili na mitazamo katika jamii"},
        { value: "Kumudu mbinu zinazotumika kujenga ujumi katika kazi za fasihi"},
        { value: "Kutathmini maana mbalimbali za kazi za kifasihi"},
        { value: "Kutumia fasihi kujenga hoja zenye mantiki na ushawishi"},
        { value: "Kumudu kanuni za utunzi wa kazi za fasihi"},
        { value: "Kutunga kazi za fasihi"},
        
    ];  

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023), Fasihi Ya kiswahili kitabu cha mwanafunzi kwa shule za sekondari kidato cha Sita, Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Kumudu dhana na misingi ya fasihi"},
        { value: "Kuthamini kazi za fasihi"},
        { value: "Kujenga ujumi"},
        { value: "Kubuni kazi changamani za fasihi"},
       
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
}  else if (subject === "Literature In English") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Discuss how the aspects of indigenous socio-cultural setting, Ujamaa and Pan-Africanism have influenced Tanzanian Literature in English"},
        { value: "Survey the development of Tanzanian Literature in English"},
        { value: "Use a selected literary text by a Tanzanian author to examine his/ her reflections on the national cultural, social and political heritage"},
        { value: "Discuss the contribution of Tanzanian authors in representing contemporary and topical issues (e.g. corruption, gender, taxation and development, and environmental health)"},
        { value: "Examine the effectiveness of narrative techniques, and literary devices in a selected literary text"},
        { value: "Apply modern literary theories to discuss thematic representation in selected liberation and post-colonial literary texts"},
        { value: "Relate issues represented in selected liberation and post-colonial literary texts to real life experiences"},
        { value: "Reflect on characters’ experiences in selected liberation and post-colonial literary texts"},
        { value: "Examine the representation of political issues (human rights, good governance, election, etc) in a selected literary text"},
        { value: "Examine the depiction of social inequalities (racial discrimination, wage inequality, homelessness, inequality in education, etc) in a selected literary text"},
        { value: "Explore the use of stylistic features to create aesthetics in a selected literary text"},
        { value: "Discuss the author’s choice and use of setting in a selected literary work"},
        { value: "Examine the author’s development of plot and characterisation in a selected literary work"},
        { value: "Discuss the author’s choice and use of rhetorical devices in a selected literary work"},
        { value: "Assess moral dilemmas depicted in a literary text"},
        { value: "Discuss the conflicts portrayed in a literary text and how they are resolved"},
        { value: "Assess various interpretations of a literary text"},
        { value: "Explain different communicative contexts exhibited in a selected literary text"},
        { value: "Use a selected literary text to examine the communications of a given character in different contexts"},
        { value: "Survey various opportunities created by literature (writing, editing, publishing, printing, sales and marketing, and publicity)"},
        { value: "Identify various opportunities depicted in a selected literary text"},
        { value: "Design, write, revise, and edit a script for stage performance"},
        { value: "Adapt an episode or extract from a selected literary text on the stage"},
        { value: "Develop a plan for composing a novel (idea, plot, setting and characterisation)"},
        { value: "Apply basic skills in creative writing to compose a novel"},
        { value: "Use ICT tools and digital platforms to write and publish a novel"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Assess the contribution of Tanzanian writers to the development of Tanzanian literature in English"},
        { value: "Analyse critically pre-colonial, colonial, liberation, and post-colonial literatures"},
        { value: "Analyse the nexus between literature and politics, aesthetics and social inequalities"},
        { value: "Evaluate the effectiveness of various elements of form in shaping meaning"},
        { value: "Use literary works to build rational arguments and judgements"},
        { value: "Use literature to adapt and manage new communicative contexts"},
        { value: "Identify opportunities created by literary works"},
        { value: "Compose original literary works"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Literature In English for Advanced Level Secondary schools student's book, Form Six. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate mastery of the concepts and principles of literature"},
        { value: "Appreciate literary works"},
        { value: "Demonstrate mastery of argumentative skills"},
        { value: "Create literary works"},
       
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
}  else if (subject === "Accountancy") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Describe the concepts and principles applied in preparing records and financial statements relating to dissolution and amalgamation of partnerships (meaning, reasons/ causes, procedures and realisation)"},
        { value: "Describe the concepts and principles applied in preparing records and financial statements relating to companies (meaning, types, reserves, retained earnings, dividends and procedures for raising share capital)"},
        { value: "Describe the concepts and principles of cost and management accounting (Cost accounting: meaning, importance and classification of costs; Cost- Volume-Profit model: meaning, assumptions and limitations, contribution margin and break-even point; Budgeting: meaning, objectives and types)"},
        { value: "Describe the concepts and principles relating to the analysis and interpretation of financial statements (meaning, objectives, techniques, categories of ratios and limitations)"},
        { value: "Prepare and maintain accounting records and financial statements relating to dissolution and amalgamation of partnerships (accounts and statements before and after dissolution and amalgamation)"},
        { value: "Prepare and maintain accounting records and financial statements relating to limited companies (ledger accounts for issue of shares, statements of profit/loss and other comprehensive income, financial position, cash flows and changes in equity excluding debentures, forfeiture and reissue of shares and redemption of preference shares)"},
        { value: "Classify costs by behaviour and perform Cost- Volume-Profit (CVP) analysis (compute the break-even quantity and revenue, target quantity and revenue excluding multiple products)"},
        { value: "Prepare operating budgets (sales, production, purchases, direct labour, overheads and master budget excluding credit sales and credit purchases)"},
        { value: "Describe the professional code of ethics for Accountants (integrity, objectivity, professional competence and due care, confidentiality and professional behaviour)"},
        { value: "Use accounting packages to analyse financial statements (profitability, liquidity, efficiency and financial leverage ratios excluding market-based ratios)"},
        { value: "Develop an accounting action plan"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Demonstrate an understanding of concepts, theories and principles of accounting"},
        { value: "Prepare and maintain accounting records"},
        { value: "Use accounting principles"},
        { value: "Demonstrate an understanding of the principles and practice of professional ethics in Accountancy"},
        { value: "Use computer programmes in financial analysis"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Accountancy for Advanced Level secondary schools student's book, Form Six. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate mastery of the concepts, theories and principles of accounting"},
        { value: "Prepare accounting reports"},
        { value: "Demonstrate mastery of professional ethics in Accountancy"},
        { value: "DUse ICT to analyse financial statements"},
       
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
}
}
document.getElementById("classes").addEventListener("change", createOptionElement);
document.getElementById("subject").addEventListener("change", createOptionElement);
createOptionElement();
})();
