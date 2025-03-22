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
    } else if (subject === "Mathematics") {
        
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
    } else if (subject === "Historia") {
        
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
            { Value: "Describe the stages of human evolution and their technological Ages"},
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
    }  else if (subject === "Business") {
        
        
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
})();
