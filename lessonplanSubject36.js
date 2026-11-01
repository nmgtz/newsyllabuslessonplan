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
        

    } else if (subject === "Life Skills") {
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the concept of life skills"},
            { value: "Respect people's values"},
            { value: "Describe the concept of self-identification and self-awareness"},
            { value: "Build self-esteem"},
            { value: "Build self-confidence"},
            { value: "Control emotions"},
            { value: "Explain the concept of building character"},
            { value: "Describe the pillars of character building"},
            { value: "Develop character"},
            { value: "Build and maintain good interpersonal relationships"},
            { value: "Build teamwork spirit"},
            { value: "Enhance effective interpersonal communication"},
            { value: "Describe the concept of giving and receiving feedback"},
            { value: "Explain the concept of coping with peer pressure"},
            { value: "Manage drugs and substance abuse"},
            { value: "Apply problem-solving strategies"},
            { value: "Promote the right decision-making"},
            { value: "Manage stress"},
            { value: "Describe the concept of being assertive"},
            { value: "Describe negotiation skills"},
            { value: "Develop conflict-resolution ability"},
            
        ];
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Appreciating people's values"},
            { value: "Developing self-awareness"},
            { value: "Developing self-esteem"},
            { value: "Developing self-confidence"},
            { value: "Managing emotions"},
            { value: "Building character"},
            { value: "Maintaining an interpersonal relationship"},
            { value: "Building interpersonal communication"},
            { value: "Managing peer pressure"},
            { value: "Managing problem"},
            { value: "Making the right decision"},
            { value: "Coping with stress"},
            { value: "Developing assertive skills"},
            { value: "Building negotiation skills"},
            { value: "Developing conflict-resolution skills"},
            
        ];
        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Life Skills for secondary schools student's book, form one. Tanzania Institute of Education"},
            
        ];
        
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Building personality and character"},
            { value: "Maintaining interpersonal relationships and effective communication"},
            { value: "Enhancing problem-solving and effective decision-making"},
            { value: "Developing negotiation and conflict resolution skills"},
            
            
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
        
    } else if (subject === "Computer Application") {
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Introduction to computer"},
        { value: "Office application"}
    ];
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Organising a microcomputer and its peripherals"},
        { value: "Word Processing"}
    ];
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Familiarizing yourself with a computer"},
        { value: "Connecting peripherals to a Microcomputer"},
        { value: "Connecting a computer to the Internet"},
        { value: "Introduction to word processing"},
        { value: "Working with Microsoft Office Word"}
    ];
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2025). Computer Application for secondary schools student's book, form one. Tanzania Institute of Education"}
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
} else if (subject === "Technical Drawing") {
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Drawing Plane Geometry"},
        { value: "Drawing Scale"},
        { value: "Constructing Pictorial Drawing"}
    ];
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Drawing layout"},
        { value: "Constructing angles"},
        { value: "Constructing geometrical figures"},
        { value: "Constructing plain and diagonal scales"},
        { value: "Constructing isometric projections"},
        { value: "Constructing oblique projections"}
    ];
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Describing the concept of Technical Drawing"},
        { value: "Constructing lines"},
        { value: "Performing lettering and numbering"},
        { value: "Drawing a title block"},
        { value: "Constructing perpendiculars and bisectors"},
        { value: "Drawing parallel lines"},
        { value: "Dividing a straight line into equal parts and given ratios"},
        { value: "Constructing angles by using compass and ruler only"},
        { value: "Performing dimensioning"},
        { value: "Constructing triangles"},
        { value: "Constructing quadrilaterals"},
        { value: "Constructing regular polygons"},
        { value: "Constructing circles"},
        { value: "Constructing tangents and arc tangents"},
        { value: "Constructing an ellipse"},
        { value: "Drawing plain and diagonal scales"},
        { value: "Constructing square and rectangular boxes in isometric projection"},
        { value: "Constructing isometric stepped blocks"},
        { value: "Constructing isometric circles and cylindrical shapes"},
        { value: "Constructing square and rectangular boxes in oblique projection"},
        { value: "Constructing stepped blocks in oblique projection"},
        { value: "Constructing circles and cylindrical shapes in oblique projection"}
    ];
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2025). Technical Drawing for secondary schools student's book, form one. Tanzania Institute of Education"}
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
} else if (subject === "Masonry and Bricklaying") {
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Maintaining the Safety of the Workshop and Surroundings"},
        { value: "Preventive Maintenance of Tools, Equipment and Machines"},
        { value: "Performing Material Tests"}
    ];
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Maintaining workshop safety"},
        { value: "Handling accidents and incidents"},
        { value: "Handling fire accidents"},
        { value: "Performing first aid"},
        { value: "Maintaining tools and equipment"},
        { value: "Maintaining machines"},
        { value: "Performing site test"},
        { value: "Performing laboratory test"}
    ];
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Maintaining workshop safety rules and regulations"},
        { value: "Maintaining workshop working environment"},
        { value: "Maintaining personal safety"},
        { value: "Maintaining safety gears"},
        { value: "Handling mechanical hazards"},
        { value: "Handling physical hazards"},
        { value: "Handling chemical hazards"},
        { value: "Handling electrical hazards"},
        { value: "Handling ergonomic hazards"},
        { value: "Handling firefighting equipment and materials"},
        { value: "Handling different types of fire"},
        { value: "Performing artificial respiration"},
        { value: "Performing first aid to minor wound scalpels"},
        { value: "Maintaining cutting tools"},
        { value: "Maintaining laying tools"},
        { value: "Maintaining measuring tools"},
        { value: "Maintaining finishing tools"},
        { value: "Maintaining hammering tools"},
        { value: "Maintaining power machines"},
        { value: "Maintaining manual machines"},
        { value: "Testing clay soil contents"},
        { value: "Assessing sand"},
        { value: "Testing the strength of concrete"},
        { value: "Testing strength of blocks"},
        { value: "Testing bearing capacity of soil"}
    ];
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2025). Masonry and Bricklaying for secondary schools student's book, form one. Tanzania Institute of Education"}
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
} else if (subject === "Welding and Metal Fabrication") {
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Maintaining Safety of Workshop and Surroundings"},
        { value: "Performing Preventive Maintenance of Tools, Equipment and Machines"},
        { value: "Performing Bench Work"},
        { value: "Performing Sheet Metal Work"}
    ];
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Maintaining workshop safety"},
        { value: "Handling accidents and incidents"},
        { value: "Handling fire accidents"},
        { value: "Performing first aid"},
        { value: "Maintaining environmental issues"},
        { value: "Maintaining tools"},
        { value: "Maintaining equipment"},
        { value: "Maintaining workshop machines"},
        { value: "Performing measuring"},
        { value: "Performing mark off metal profile"},
        { value: "Performing hand sawing"},
        { value: "Performing power sawing"},
        { value: "Performing filing a metal"},
        { value: "Performing hand drilling"},
        { value: "Performing bench drilling"},
        { value: "Performing manual thread cutting"},
        { value: "Performing hand shearing"},
        { value: "Performing machine shearing"},
        { value: "Performing chiseling"},
        { value: "Performing forming of sheet metal"},
        { value: "Performing soft soldering"},
        { value: "Performing riveting"},
        { value: "Performing grinding"}
    ];
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Maintaining workshop safety rules"},
        { value: "Maintaining personal safety"},
        { value: "Maintaining personal hygiene"},
        { value: "Handling mechanical hazards"},
        { value: "Handling physical hazards"},
        { value: "Handling chemical hazards"},
        { value: "Handling electrical hazards"},
        { value: "Handling accidents and incidents"},
        { value: "Performing fire classification"},
        { value: "Performing firefighting"},
        { value: "Maintaining fire alarms and detectors"},
        { value: "Maintaining first aid kit"},
        { value: "Performing artificial respiration"},
        { value: "Performing first aid to minor injuries"},
        { value: "Maintaining environmental pollution"},
        { value: "Maintaining safe waste disposal"},
        { value: "Maintaining measuring tools"},
        { value: "Maintaining marking out tools"},
        { value: "Maintaining cutting tools"},
        { value: "Maintaining trolleys and workbench"},
        { value: "Maintaining compressors and heat treatment furnaces"},
        { value: "Maintaining power machines"},
        { value: "Maintaining manual machines"},
        { value: "Using linear measuring tools"},
        { value: "Using angular measuring tools"},
        { value: "Using non-linear/non-angular measuring tools"},
        { value: "Marking off a linear plate"},
        { value: "Marking off an I-beam"},
        { value: "Marking off and fabricating an angle iron bracket"},
        { value: "Marking off and fabricating a pipe reducer"},
        { value: "Performing straight sawing"},
        { value: "Performing angular sawing"},
        { value: "Sawing a round bar"},
        { value: "Sawing a flat bar"},
        { value: "Performing cross filing"},
        { value: "Performing draw filing"},
        { value: "Performing longitudinal filing"},
        { value: "Drilling a hole on a plate"},
        { value: "Counter-sinking a drilled hole"},
        { value: "Counter-boring a drilled hole"},
        { value: "Tapping a drilled hole"},
        { value: "Cutting external threads by die and stock"},
        { value: "Performing straight shearing"},
        { value: "Performing circular shearing"},
        { value: "Performing metal notching"},
        { value: "Cropping an angle iron"},
        { value: "Punching holes on a plate"},
        { value: "Cutting thin metal"},
        { value: "Performing surface chipping"},
        { value: "Bending sheet metal at right angle"},
        { value: "Forming single and double seam"},
        { value: "Forming grooved seam"},
        { value: "Forming cylindrical shapes"},
        { value: "Joining metal sheets by soldering"},
        { value: "Joining pipe pieces by soldering"},
        { value: "Joining thick plates by hot riveting"},
        { value: "Joining thin sheets by cold riveting"},
        { value: "Grinding weld seams"},
        { value: "Grinding weld joints"},
        { value: "Sharpening cutting tools"}
    ];
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2025). Welding and Metal Fabrication for secondary schools student's book, form one. Tanzania Institute of Education"}
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
} else if (subject === "Electrical Installation") {
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Maintaining Health, Safety and Environment at the Workplace"},
        { value: "Performing Basic Workshop Activities"},
        { value: "Building Simple DC Circuits"}
    ];
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Handling workshop safety"},
        { value: "Handling workshop tools"},
        { value: "Handling workshop equipment"},
        { value: "Carrying out health and safety investigation"},
        { value: "Handling fire accidents"},
        { value: "Performing first aid"},
        { value: "Maintaining buildings"},
        { value: "Maintaining safe working environment"},
        { value: "Performing machine operations"},
        { value: "Performing forming operations"},
        { value: "Performing surface finishing operations"},
        { value: "Performing bearing removal and mounting"},
        { value: "Constructing resistive circuits"},
        { value: "Constructing capacitive circuits"},
        { value: "Constructing inductive circuits"},
        { value: "Constructing RLC circuits"},
        { value: "Measuring electrical quantities"},
        { value: "Determining characteristics of active electronic components"},
        { value: "Constructing rectifier circuits"}
    ];
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Maintaining workshop safety rules"},
        { value: "Maintaining personal safety"},
        { value: "Classifying tools"},
        { value: "Maintaining workshop tools"},
        { value: "Classifying equipment"},
        { value: "Maintaining workshop equipment"},
        { value: "Classifying accidents"},
        { value: "Identifying hazards"},
        { value: "Investigating accidents"},
        { value: "Performing fire classification"},
        { value: "Performing firefighting"},
        { value: "Performing fire protection"},
        { value: "Maintaining first aid kit"},
        { value: "Performing artificial respiration"},
        { value: "Performing first aid to minor injuries"},
        { value: "Performing arrangement of fittings and fixtures to the building"},
        { value: "Performing interior and exterior cleanliness"},
        { value: "Maintaining workshop safety"},
        { value: "Drawing safety signs"},
        { value: "Handling waste"},
        { value: "Performing metal grinding"},
        { value: "Performing hole drilling"},
        { value: "Performing thread cutting"},
        { value: "Performing metal cutting"},
        { value: "Performing metal shearing"},
        { value: "Performing metal bending"},
        { value: "Constructing sheet metal box"},
        { value: "Carrying out sanding"},
        { value: "Carrying out filing"},
        { value: "Carrying out reaming"},
        { value: "Mounting bearing manually"},
        { value: "Mounting bearing mechanically"},
        { value: "Removing bearing manually"},
        { value: "Building single resistor circuit"},
        { value: "Building series resistive circuit"},
        { value: "Building parallel resistive circuit"},
        { value: "Building series-parallel resistive circuit"},
        { value: "Building a single capacitor circuit"},
        { value: "Building a series capacitor circuit"},
        { value: "Building a parallel capacitor circuit"},
        { value: "Building a combination capacitor circuit"},
        { value: "Building a single inductive circuit"},
        { value: "Building a series inductive circuit"},
        { value: "Building a parallel inductive circuit"},
        { value: "Building a combined inductive circuit"},
        { value: "Testing inductive circuits"},
        { value: "Building a resistance and capacitance circuit"},
        { value: "Building a resistance and inductance circuit"},
        { value: "Building a resistance, capacitance and inductance circuit"},
        { value: "Measuring voltage in the circuit"},
        { value: "Measuring current in the circuit"},
        { value: "Measuring resistance in the circuit"},
        { value: "Testing characteristics of diodes"},
        { value: "Testing characteristics of transistors"},
        { value: "Testing characteristics of thyristor"},
        { value: "Building half-wave rectifier"},
        { value: "Building full-wave rectifier (centre tapped)"},
        { value: "Building bridge rectifier"},
        { value: "Building a smoothing circuit"},
        { value: "Testing rectifier circuits"}
    ];
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2025). Electrical Installation for secondary schools student's book, form one. Tanzania Institute of Education"}
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
} else if (subject === "Textiles Garment Construction") {

    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Describe basic garment construction (meaning, objectives and the sewing room)" },
        { value: "Operate and care of the sewing machine" },
        { value: "Describe basic garment making processes (structural, decorative and functional: stitches, seams, openings, fasteners, disposal of fullness, edge finishes)" },
        { value: "Make a portfolio of prototypes of garment-making processes (structural and functional: stitches, seams, openings, fastenings, disposal of fullness, edge finishes)" },
        { value: "Prepare patterns for a skirt or pyjamas (body measurements, drafting, adaption, lay and cut out)" },
        { value: "Assemble garment sections to make a skirt or pyjamas" }
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Demonstrate an understanding of the fundamentals of garment construction" },
        { value: "Make sewing patterns" },
        { value: "Sew simple styles of various garments" }
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Textiles Garment Construction for secondary schools student's book, form one. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate mastery of the fundamentals of garment construction" }
       
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
    } else if (subject === "Solar Power Installation") {
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Maintaining Health, Safety and Environment at the Workplace"},
        { value: "Performing Preventive Maintenance of Tools, Equipment and Machines"},
        { value: "Performing Bench Works"}
    ];
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Handling workshop safety"},
        { value: "Handling workshop tools"},
        { value: "Handling workshop equipment"},
        { value: "Carrying out health and safety investigations"},
        { value: "Handling fire accidents"},
        { value: "Performing first aid"},
        { value: "Maintaining buildings"},
        { value: "Maintaining a safe working environment"},
        { value: "Performing preventive maintenance of electrical tools"},
        { value: "Performing preventive maintenance of basic electrical equipment"},
        { value: "Performing preventive maintenance of simple electric machines"},
        { value: "Performing machining operations"},
        { value: "Performing forming operation"},
        { value: "Performing surface finishing operation"},
        { value: "Performing bearing removal and mounting"},
        { value: "Performing threading"}
    ];
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Maintaining workshop safety rules"},
        { value: "Maintaining personal safety"},
        { value: "Maintaining safety gear record"},
        { value: "Classifying workshop tools"},
        { value: "Maintaining workshop tools"},
        { value: "Classifying workshop equipment"},
        { value: "Maintaining workshop equipment"},
        { value: "Classifying accidents"},
        { value: "Identifying hazards"},
        { value: "Investigating an accident"},
        { value: "Performing fire classification"},
        { value: "Performing firefighting"},
        { value: "Performing fire protection"},
        { value: "Maintaining first aid kit"},
        { value: "Performing artificial respiration"},
        { value: "Performing first aid to minor injuries"},
        { value: "Performing arrangement of fittings and fixtures for the buildings"},
        { value: "Performing interior and exterior cleanliness"},
        { value: "Cleaning workshop environment"},
        { value: "Drawing safety signs"},
        { value: "Handling waste"},
        { value: "Maintaining workshop safety gear"},
        { value: "Maintaining electrical hand tools"},
        { value: "Maintaining measuring tools"},
        { value: "Maintaining passive equipment"},
        { value: "Maintaining active equipment"},
        { value: "Maintaining power machines"},
        { value: "Maintaining manual machines"},
        { value: "Performing metal grinding"},
        { value: "Performing hole drilling"},
        { value: "Performing metal cutting"},
        { value: "Performing metal shearing"},
        { value: "Performing metal bending"},
        { value: "Constructing sheet metal boxing"},
        { value: "Carrying out sanding"},
        { value: "Carrying out filing"},
        { value: "Mounting bearing manually"},
        { value: "Mounting bearing mechanically"},
        { value: "Removing bearing mechanically"},
        { value: "Performing tapping"},
        { value: "Performing die cutting"}
    ];
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2025). Solar Power Installation for secondary schools student's book, form one. Tanzania Institute of Education"}
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
} else if (subject === "Plumbing and Pipe Fitting") {
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Maintaining Safety of Workshop and Surroundings"},
        { value: "Performing Bench Work"},
        { value: "Installing Pipes, Taps and Valves"},
        { value: "Installing Water Supply Systems"}
    ];
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Maintaining workshop safety"},
        { value: "Handling accidents and incidents"},
        { value: "Handling fire accidents"},
        { value: "Performing first aid"},
        { value: "Maintaining environmental issues"},
        { value: "Performing hand hacksaw cutting"},
        { value: "Performing power hacksaw cutting"},
        { value: "Performing metal filing"},
        { value: "Performing hand drilling"},
        { value: "Performing bench drilling"},
        { value: "Performing manual thread cutting"},
        { value: "Cutting pipes"},
        { value: "Bending pipes"},
        { value: "Installing taps and valves"},
        { value: "Performing pipe joining"},
        { value: "Installing cold water supply to the building"}
    ];
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Maintaining workshop safety rules and regulations"},
        { value: "Maintaining workshop-working environment"},
        { value: "Maintaining personal safety"},
        { value: "Maintaining safety gears"},
        { value: "Handling mechanical hazards"},
        { value: "Handling physical hazards"},
        { value: "Handling chemical hazards"},
        { value: "Handling electrical hazards"},
        { value: "Handling ergonomic hazards"},
        { value: "Handling firefighting equipment and materials"},
        { value: "Handling different classes of fire"},
        { value: "Performing artificial respiration"},
        { value: "Performing first aid to minor wound scalpels"},
        { value: "Maintaining environmental pollution"},
        { value: "Maintaining safe waste disposal"},
        { value: "Performing straight sawing"},
        { value: "Performing angular sawing"},
        { value: "Performing sawing a round metal"},
        { value: "Performing sawing a flat metal"},
        { value: "Performing draw filing"},
        { value: "Performing longitudinal filing"},
        { value: "Performing cross filing"},
        { value: "Drilling a hole on a plate"},
        { value: "Counter sinking a drilled hole"},
        { value: "Counter boring a drilled hole"},
        { value: "Tapping a drilled hole"},
        { value: "Dieing a round bar"},
        { value: "Performing square cut"},
        { value: "Performing external and internal reaming"},
        { value: "Performing thread cutting (on different materials)"},
        { value: "Constructing square bend"},
        { value: "Constructing offset bend"},
        { value: "Constructing saddle bend"},
        { value: "Constructing \u201cU\u201d bend"},
        { value: "Constructing expansion bend"},
        { value: "Constructing obtuse bend"},
        { value: "Fixing screw down taps"},
        { value: "Fixing quick closing taps"},
        { value: "Fixing valve"},
        { value: "Fixing float valve"},
        { value: "Joining different types of plastic pipes"},
        { value: "Joining steel pipes"},
        { value: "Joining copper pipes"},
        { value: "Installing and repairing direct cold-water supply systems"},
        { value: "Installing and repairing indirect cold-water supply system"}
    ];
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2025). Plumbing and Pipe Fitting for secondary schools student's book, form one. Tanzania Institute of Education"}
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
}  else if (subject === "Design,Sewing and Cloth Technology") {

    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Maintaining Workshop safety rules" },
  { value: "Maintaining Workshop working environment" },
  { value: "Maintaining personal safety" },
  { value: "Handling mechanical hazards" },
  { value: "Handling machine physical hazards" },
  { value: "Handling chemical hazards" },
  { value: "Handling electrical hazards" },
  { value: "Maintaining safety gears" },
  { value: "Handling firefighting equipment and materials" },
  { value: "Handling different types of fire" },
  { value: "Performing artificial respiration" },
  { value: "Performing first aid to minor wounds" },
  { value: "Maintaining workshop Safety gears" },
  { value: "Maintaining workshop tools" },
  { value: "Maintaining manual, the sewing Machine" },
  { value: "Maintaining power machine" },
  { value: "Correcting workshop tools" },
  { value: "Correcting safety environment" },
  { value: "Correcting manual sewing machine" },
  { value: "Correcting power machine" },
  { value: "Making temporary stitches" },
  { value: "Making joining stitches" },
  { value: "Making neatening stitches" },
  { value: "Making decorative stitches" },
  { value: "Interpreting fabric structures" },
  { value: "Selecting fabric appropriate for casual wear" },
  { value: "Performing fabric test" },
  { value: "Making blouses with sleeves [Kimono, set in sleeves, Raglan flat collar]" },
  { value: "Making a skirt with hooks and eyes, zip fastener, Buttons/loops, Darts, Gathering, Belts and belt carriers, Edge finishing and pocket set in seam" },
  { value: "Making short-sleeved shirts [Patch pocket with flaps, Button, and buttonholes, press studs, stand collars and easing]" },
  { value: "Making dresses [continuous wrap opening, faced opening, bound opening, bias binding/crossway strips, tapes and ribbons, press studs and shirring]" },
  { value: "Making knickers [overlaid seam, inseam pocket and elasticated waist]" },
  { value: "Making pajamas [machine fell/run and fell seam and elasticated waist]" },
  { value: "Making shorts [welt pocket with flap, belt and belt carrier, double stitched seam, Velcro fastener, zip fastener, hook and eye and tucks]" }
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Maintaining Workshop Safety" },
  { value: "Handling accidents and incidents" },
  { value: "Handling fire accidents" },
  { value: "Performing first aid" },
  { value: "Conducting preventive maintenance of work Tools" },
  { value: "Conducting Preventive Maintenance on Equipment" },
  { value: "Conduct corrective Maintenance on work Area" },
  { value: "Conduct corrective Maintenance on Equipment" },
  { value: "Making stitches" },
  { value: "Perform fabric identification for making the garment" },
  { value: "Making casual Garments Using readymade and Commercial patterns" }
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Design,Sewing and Cloth Technology for secondary schools student's book, form one. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Maintaining Safety of Workshop and Surroundings" },
        { value: "Performing Preventive Maintenance of Tools and Equipment" },
        { value: "Performing basic sewing" }
       
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
    }  else if (subject === "Sport Studies") {

    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Explain the concepts of sports, games, play, physical activity and exercise, their importance to health and well-being, and their relationship with other disciplines"},
        { value: "Describe the categories of sports"},
        { value: "Describe the basic tenets of safety in sports (meaning, importance and practice)"},
        { value: "Describe the basic tenets of physical and mental fitness in sports (meaning, importance, attributes and components)"},
        { value: "Describe warm-up and cool-down exercises"},
        { value: "Carry out warm up and cool down exercises"},
        { value: "Describe different skills, techniques, safety measures and rules in selected sports (football and track events)."},
        { value: "Play selected sports by observing skills, techniques, rules and safety principles (football and track events)"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Demonstrate an understanding of the importance of sports"},
        { value: "Demonstrate an understanding of the principles of building physical and mental fitness in sports"},
        { value: "Perform physical exercises"},
        { value: "Develop skills and techniques in sports"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Sport Studies for secondary schools student's book, form one. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate mastery of the concepts, safety and ethical conduct in sports"},
        { value: "Demonstrate mastery of the role of physical and mental fitness in sports"},
        { value: "Play various sports"},
       
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
    }  else if (subject === "Food and Human Nutrition") {

    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Describe the concept of food and nutrition (meaning and importance)" },
        { value: "Describe the relationship between Food and Human Nutrition with other subjects" },
        { value: "Describe the different food groups (cereals, roots, tubers and green bananas; foods of animal origin, legumes and pulses; vegetables; fruits; sugar, honey, oils and fats)" },
        { value: "Describe the nutrient contents in different foods (types, functions and stability)" },
        { value: "Describe the concept of a balanced meal (meaning, importance and factors to consider when planning a balanced meal)" },
        { value: "Explore food, kitchen and personal hygiene in food preparation, cooking and serving" },
        { value: "Describe safety in the kitchen (safety precautions, common accidents)" },
        { value: "Describe different fruits and vegetables" },
        { value: "Describe different beverages and appetizers (meaning and types)" },
        { value: "Describe pulses, nuts and oil seeds (types, nutritive values and uses)" },
        { value: "Describe the importance of proper nutrition on health" },
        { value: "Explore the relationship between diet, health and physical activity" },
        { value: "Describe eating disorders" },
        { value: "Describe different methods of preparing beverages and appetizers" },
        { value: "Prepare different beverages and appetizers" },
        { value: "Describe different methods of preparing pulses and nuts dishes" },
        { value: "Prepare dishes using pulses and nuts" }
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Demonstrate an understanding of the basic principles of Food and Nutrition" },
        { value: "Demonstrate mastery of the principles of cookery" },
        { value: "Demonstrate an understanding of the relationship between health and nutrition" },
        { value: "Prepare a balanced meal based on different foods" }
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Food and Human Nutrition for secondary schools student's book, form one. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate  mastery of the basic principles of Food and Nutrition"},
        { value: "Demonstrate  mastery of the relationship between health and nutrition"},
        { value: "Prepare different dishes"},
       
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
    }  else if ( subject === "Physics") {
        
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
    }  else if (subject === "English Language") {
    
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
        { value: "Taasisi ya Elimu Tanzania. (2023), Elimu Ya Dini Ya Kiislamu kitabu cha mwanafunzi kwa shule za sekondari kidato cha Kwanza, Taasisi ya Elimu Tanzania."},
        
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
    else if (subject === "Costume and Makeup Design") {
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Develop appropriate costume designs for theatrical production (interpret the vision of the production)"},
            { value: "Sketch designs according to the demands of production (create rough sketches, costume layout and costume sketches)"},
            { value: "Produce final costume designs (refine the designed costumes and create final costume designs)"},
            { value: "Use ICT to develop costume designs"},
            { value: "Demonstrate mastery of ethics in developing costume design"},
            { value: "Produce costume designs for stage play"},
        ];
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of the principles of costume and makeup design"},
            { value: "Use ICT to design costumes and makeup"},
            { value: "Adhere to ethics in designing costumes"},
            { value: "Design costumes and makeup for a theatre artist"},
        ];
        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Costume and Makeup Design for secondary schools student's book, form one. Tanzania Institute of Education"},
        ];
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Design costumes and makeup for a theatre artist"},
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
    }  else if (subClasses === "Form Two") {
        if (subject === "Chemistry") {
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the modern concept of atomic structure (Dalton’s atomic structure and sub-atomic particles)"}, 
            { value: "Describe the concept of electronic arrangements"},
            { value: "Use the concept of atomic structure to determine the atomic and mass numbers of an element"},
            { value: "Explain the concept of chemical formulae and nomenclature (valence, oxidation state, radicals and naming of binary inorganic compounds using the IUPAC system)"},
            { value: "Determine empirical and molecular formulae of common compounds"},
            { value: "Describe the concept of chemical bonding (covalent and electrovalent bonding)"},
            { value: "Describe the concept of chemical reactions (chemical equations, balancing chemical equations, and types of chemical reactions)"},
            { value: "Relate the types of chemical reactions with common processes in daily life such as burning of fuel and digestion in living organisms"},
            { value: "Describe acids, bases and salts (reactions of acids and bases with various substances) and their applications in daily life"},
            { value: "Explain the changes in the physical and chemical properties of elements across and down the periodic table"},
            { value: "Use the electronic configuration of an element to locate their positions in the periodic table"},
            { value: "Prepare acid- base indicators using locally available materials"},
            { value: "Use the prepared indicators to test acidity and alkalinity of substances found in the locality"},
            
        ];

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of concepts, theories and principles in Chemistry"},
            { value: "Demonstrate an understanding of the physical and chemical properties of elements on the basis of their arrangements in the periodic table"},
            { value: "Conduct experiments in Chemistry"},
            
        ];

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Chemistry for secondary schools student's book, form two. Tanzania Institute of Education"},
            
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
        

    } else if (subject === "Life Skills") {
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Explain the concept of reproductive health"},
            { value: "Understand facts about STIs and RTIs"},
            { value: "Describe the facts about HIV and AIDS"},
            { value: "Promote Voluntary Counselling and Testing (VCT) for HIV"},
            { value: "Enhance care and treatment services for HIV and AIDS patients"},
            { value: "Identify general human rights"},
            { value: "Describe sexual and reproductive health rights"},
            { value: "Identify rights and obligations of people living with HIV"},
            { value: "Overcome HIV stigma and discrimination"},
            { value: "Explain gender concepts"},
            { value: "Describe gender stereotypes"},
            { value: "Understand and overcome gender-based violence"},
            { value: "Set career goals"},
            { value: "Explain the concept of career path"},
            { value: "Deal with career setbacks"},
            { value: "Develop creative thinking ability"},
            { value: "Develop critical thinking ability"},
            { value: "Describe different support systems"},
            { value: "Describe the concept of referral processes"},
            { value: "Describe internal and external customers"},
            { value: "Establish effective relationships with customers"},
            { value: "Build customers' trust"},
            { value: "Describe the customer care codes and professional ethics"},
            { value: "Manage customer needs and expectations"},
            { value: "Manage customer complaints"},
            
        ];
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Managing reproductive health"},
            { value: "Understanding Sexually Transmitted Infections (STIs) and Reproductive Tract Infections (RTIs)"},
            { value: "Understanding HIV and AIDS"},
            { value: "Testing and care for HIV/AIDS patients"},
            { value: "Exploring human rights"},
            { value: "Understanding and challenging HIV stigma and discrimination"},
            { value: "Understanding the concept of gender"},
            { value: "Exploring gender issues"},
            { value: "Staying focused on career goals and vision"},
            { value: "Building creative and critical thinking abilities"},
            { value: "Understanding and utilising support systems"},
            { value: "Giving customers a positive image"},
            { value: "Offering quality and standard customer care service"},
            
        ];
        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Life Skills for secondary schools student's book, form two. Tanzania Institute of Education"},
            
        ];
        
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Maintaining sexual and reproductive health"},
            { value: "Gender concerns"},
            { value: "Achieving career goals and vision"},
            { value: "Developing creative and critical thinking abilities"},
            { value: "Developing referrals and linkage"},
            { value: "Building customer care ability"},
            
            
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
        
    } else if (subject === "Computer Application") {
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Office application"}
    ];
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Working with spreadsheets"},
        { value: "Working with data base applications"},
        { value: "Working with presentation applications"}
    ];
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Performing spreadsheet creation, formatting, data entry, organization, sort and filter"},
        { value: "Performing basic calculations and formulas"},
        { value: "Performing data validation and conditional formatting"},
        { value: "Performing data import and export"},
        { value: "Performing page setup and printing"},
        { value: "Familiarizing with a database application"},
        { value: "Creating tables and entering data"},
        { value: "Creating queries"},
        { value: "Creating forms"},
        { value: "Creating reports"},
        { value: "Creating, format presentations and organize slide content"},
        { value: "Inserting Images, Graphics and SmartArt"},
        { value: "Incorporating charts and tables"},
        { value: "Creating slide transitions, slide master and animations"},
        { value: "Creating presentations for remote meetings"}
    ];
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2025). Computer Application for secondary schools student's book, form two. Tanzania Institute of Education"}
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
}  else if (subject === "Technical Drawing") {
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Constructing Orthographic Projection"},
        { value: "Constructing Sectional Views"}
    ];
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Drawing in the first-angle orthographic projection"},
        { value: "Drawing in the third-angle orthographic projection"},
        { value: "Sectioning of engineering components"},
        { value: "Drawing conic sections"}
    ];
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Projecting blocks in the first-angle projection system"},
        { value: "Projecting engineering components in the first-angle projection system"},
        { value: "Sketching by freehand"},
        { value: "Projecting blocks in the third-angle projection system"},
        { value: "Projecting engineering components in the third-angle projection system"},
        { value: "Drawing sections"},
        { value: "Drawing standard symbols"},
        { value: "Constructing conic sections"}
    ];
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2025). Technical Drawing for secondary schools student's book, form two. Tanzania Institute of Education"}
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
} else if (subject === "Welding and Metal Fabrication") {
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Performing Shielded Metal Arc Welding and Arc Cutting"},
        { value: "Performing Gas Welding and Brazing on Ferrous and Non-Ferrous Metals"},
        { value: "Performing Arc Welding of Alloy Steels and Ferrous Metals"}
    ];
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Carrying out mild steel arc welding"},
        { value: "Carrying out mild steel arc cutting"},
        { value: "Carrying out sheet metal welding"},
        { value: "Carrying out metal brazing and bronze welding"},
        { value: "Carrying out metal cutting by gas flame"},
        { value: "Carrying out welding of alloy steels and ferrous metals"},
        { value: "Carrying out welding of stainless and carbon steel by TIG welding"},
        { value: "Carrying out welding of stainless and carbon steel pipes by MIG/MAG"},
        { value: "Filling worn-out metal surfaces"},
        { value: "Cutting steel plates using plasma-arc cutting"},
        { value: "Cutting steel plates using an electric arc cutting machine"}
    ];
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Using tools and equipment for welding straight beads"},
        { value: "Welding metal in down hand butt joint in 1G position"},
        { value: "Welding metal in down hand lap joint in 1F position"},
        { value: "Welding metal in down hand corner joint in 3G position"},
        { value: "Welding metal in down hand tee joint in 1F position"},
        { value: "Welding metal in horizontal butt joint in 2G position"},
        { value: "Welding metal in horizontal corner joint in 2F position"},
        { value: "Welding metal in horizontal lap joint in 2F position"},
        { value: "Welding metal in horizontal corner joint in 2G position"},
        { value: "Cutting thick metals"},
        { value: "Gouging metal plates"},
        { value: "Using gas welding tools and equipment to make fusion welding on sheet metal"},
        { value: "Welding metal in down hand butt joint"},
        { value: "Welding metal in down hand tee joint"},
        { value: "Welding metal in corner joint"},
        { value: "Welding metal in horizontal butt joint"},
        { value: "Welding metal in horizontal tee joint"},
        { value: "Welding metal in horizontal corner joint"},
        { value: "Bronzing weld butt joint"},
        { value: "Bronzing weld tee joint"},
        { value: "Bronzing weld lap joint"},
        { value: "Bronze weld corner joint"},
        { value: "Brazing sheet metal seam"},
        { value: "Brazing copper/steel pipe"},
        { value: "Cutting thick and thin metal by gas flames"},
        { value: "Cutting square and round holes on metals"},
        { value: "Making chamfers and removing risers"},
        { value: "Gouging metal plate/bar"},
        { value: "Welding stainless steel by arc welding"},
        { value: "Welding cold cast iron by arc welding"},
        { value: "Welding stainless steel pipe by TIG"},
        { value: "Welding carbon steel pipe by TIG"},
        { value: "Welding stainless steel by MIG and MAG welding"},
        { value: "Welding carbon steel by FCAW"},
        { value: "Depositing metal by arc welding/pad welding"},
        { value: "Hard facing surfaces welding"},
        { value: "Cutting steel plate using plasma arc cutting machine"},
        { value: "Cutting steel pipes using plasma arc cutting"},
        { value: "Cutting mild steel plates using air carbon arc cutting machine (gouging)"},
        { value: "Cutting mild steel plates using oxygen arc cutting machine (lancing)"}
    ];
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2025). Welding and Metal Fabrication for secondary schools student's book, form two. Tanzania Institute of Education"}
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
} else if (subject === "Electrical Installation") {
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Performing Preventive Maintenance of Tools, Equipment and Machines"},
        { value: "Performing Basic Electrical Installation"}
    ];
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Performing preventive maintenance of electrical tools"},
        { value: "Performing preventive maintenance of electrical equipment"},
        { value: "Performing preventive maintenance of simple electric machines"},
        { value: "Performing cold electrical joint"},
        { value: "Performing soldering"},
        { value: "Installing lighting circuits"},
        { value: "Installing power circuits"},
        { value: "Installing alarm and signal circuits"},
        { value: "Installing basic protective devices"},
        { value: "Carrying out system earthing"},
        { value: "Carrying out electrical tests"}
    ];
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Maintaining workshop safety gear"},
        { value: "Maintaining electrical hand tools"},
        { value: "Maintaining measuring tools"},
        { value: "Maintaining passive equipment"},
        { value: "Maintaining active equipment"},
        { value: "Maintaining power machines"},
        { value: "Maintaining manual machines"},
        { value: "Making eyelet joint"},
        { value: "Making crimp joint"},
        { value: "Making parallel groove clamp joint"},
        { value: "Making bolt joint"},
        { value: "Making twist joint"},
        { value: "Making a tee joint"},
        { value: "Making married joint"},
        { value: "Carrying out soft soldering"},
        { value: "Carrying out hard soldering"},
        { value: "Installing lighting points controlled by one way, one gang switch"},
        { value: "Installing lighting points controlled by one way, two/three gang switch"},
        { value: "Installing lighting points controlled by two two-way switches"},
        { value: "Installing lighting points controlled by two two-way switches and an intermediate switch"},
        { value: "Installing radial circuit"},
        { value: "Installing ring circuit and spur"},
        { value: "Installing electric cooker circuit"},
        { value: "Installing electric water heater circuit"},
        { value: "Installing single-stroke bell"},
        { value: "Installing trembler bell"},
        { value: "Installing buzzer"},
        { value: "Installing continuous ringing bell"},
        { value: "Installing indicator board"},
        { value: "Installing single-phase protective devices"},
        { value: "Installing three-phase protective devices"},
        { value: "Performing TT earthing method"},
        { value: "Performing IT earthing method"},
        { value: "Performing TN-S earthing method"},
        { value: "Performing bonding of metal fixtures"},
        { value: "Carrying out verification of polarity test"},
        { value: "Carrying out insulation test"},
        { value: "Carrying out ring circuit test"},
        { value: "Carrying out earthing test"},
        { value: "Carrying out continuity test"},
        { value: "Carrying out open circuit test"}
    ];
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2025). Electrical Installation for secondary schools student's book, form two. Tanzania Institute of Education"}
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
} else if (subject === "Masonry and Bricklaying") {
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Making Blocks, Bricks and Pavings"},
        { value: "Constructing Foundations and Walls"},
        { value: "Performing Wall and Floor Finishes"}
    ];
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Making blocks"},
        { value: "Making bricks"},
        { value: "Making paving blocks and kerbstones"},
        { value: "Making decorations"},
        { value: "Setting out a building"},
        { value: "Excavation of foundation trench"},
        { value: "Constructing foundation"},
        { value: "Constructing walls"},
        { value: "Making scaffold"},
        { value: "Performing plastering"},
        { value: "Performing floor finish"}
    ];
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Making solid blocks by hand"},
        { value: "Making solid blocks by machine"},
        { value: "Making hollow blocks by hand"},
        { value: "Making hollow blocks by machine"},
        { value: "Making clay bricks by hand"},
        { value: "Making clay bricks by machine"},
        { value: "Making cement bricks by hand"},
        { value: "Making cement bricks by machine"},
        { value: "Burning clay bricks"},
        { value: "Making interlocking bricks"},
        { value: "Making paving blocks"},
        { value: "Making kerbstones"},
        { value: "Making purpose-made bricks or blocks"},
        { value: "Making vent blocks"},
        { value: "Making louvre blocks"},
        { value: "Making balusters"},
        { value: "Verifying technical specifications"},
        { value: "Preparing the site for setting out"},
        { value: "Setting out a building"},
        { value: "Making profile boards"},
        { value: "Examining and marking the foundation size"},
        { value: "Trench excavation"},
        { value: "Conducting timbering to the trench"},
        { value: "Conducting dewatering"},
        { value: "Conducting sandbagging to the trench"},
        { value: "Levelling the foundation base"},
        { value: "Laying the blinding layer"},
        { value: "Constructing foundation wall"},
        { value: "Backfilling"},
        { value: "Filling the hardcore"},
        { value: "Setting the formwork"},
        { value: "Laying reinforcement"},
        { value: "Concrete mixing and pouring"},
        { value: "Curing of concrete"},
        { value: "Setting the first course"},
        { value: "Bonding"},
        { value: "Constructing subsequent courses"},
        { value: "Making putlog scaffold"},
        { value: "Making independent scaffold"},
        { value: "Making ladder"},
        { value: "Dismantling scaffold"},
        { value: "Performing internal plaster"},
        { value: "Performing external plaster"},
        { value: "Performing tyrolean"},
        { value: "Performing final finish to the plaster (skimming)"},
        { value: "Performing granolithic floor finish"},
        { value: "Performing monolithic finish"},
        { value: "Performing floor and wall tiles"}
    ];
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2025). Masonry and Bricklaying for secondary schools student's book, form two. Tanzania Institute of Education"}
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
} else if (subject === "Solar Power Installation") {
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Selecting Solar PV System Components"},
        { value: "Performing Electrical Joints"},
        { value: "Building Simple DC Circuits"},
        { value: "Performing Basic Electrical Installation"}
    ];
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Specifying solar PV system major components"},
        { value: "Performing solar PV basic measurement"},
        { value: "Performing cold electrical joints"},
        { value: "Performing soldering"},
        { value: "Constructing resistive circuits"},
        { value: "Constructing capacitive circuits"},
        { value: "Constructing inductive circuits"},
        { value: "Constructing RLC circuit"},
        { value: "Measuring electric quantities"},
        { value: "Determining characteristics of active electronic components"},
        { value: "Constructing rectifier circuits"},
        { value: "Installing lighting circuits"},
        { value: "Installing power circuits"},
        { value: "Installing alarm and signal circuits"},
        { value: "Installing basic protective device"},
        { value: "Carrying out earthing systems"},
        { value: "Carrying out electrical tests"}
    ];
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Specifying solar PV module"},
        { value: "Specifying solar battery"},
        { value: "Specifying solar charge controller"},
        { value: "Specifying a solar PV system inverter"},
        { value: "Performing solar cell voltage measurement"},
        { value: "Performing PV module open circuit voltage measurement"},
        { value: "Performing PV module short-circuit current measurement"},
        { value: "Making eyelet joint"},
        { value: "Making crimp joint"},
        { value: "Making parallel groove clamp joint"},
        { value: "Making bolt joint"},
        { value: "Making twist joint"},
        { value: "Making tee joint"},
        { value: "Making married joint"},
        { value: "Carrying out soft soldering"},
        { value: "Carrying out hard soldering"},
        { value: "Building a single resistor circuit"},
        { value: "Building a series resistive circuit"},
        { value: "Building a parallel resistive circuit"},
        { value: "Building a series-parallel resistive circuit"},
        { value: "Building a single capacitor circuit"},
        { value: "Building a series capacitive circuit"},
        { value: "Building parallel capacitive circuits"},
        { value: "Building a series-parallel capacitive circuit"},
        { value: "Building a single inductive circuit"},
        { value: "Building a series inductive circuit"},
        { value: "Building a parallel inductive circuit"},
        { value: "Building a series-parallel inductive circuit"},
        { value: "Building a resistor and capacitor (RC) circuit"},
        { value: "Building a resistor and inductor (RL) circuit"},
        { value: "Building a resistor, capacitor and inductor (RLC) circuit"},
        { value: "Measuring voltage in the circuit"},
        { value: "Measuring current in the circuit"},
        { value: "Measuring resistance in the circuit"},
        { value: "Testing characteristics of diodes"},
        { value: "Testing characteristics of transistors"},
        { value: "Testing characteristics of thyristor"},
        { value: "Building half-wave rectifier"},
        { value: "Building full-wave rectifier (center tapped)"},
        { value: "Building bridge rectifier"},
        { value: "Installing lighting points controlled by one way, one gang switch"},
        { value: "Installing lighting points controlled by one way, two gang switch"},
        { value: "Installing lighting points controlled by two-two way switches"},
        { value: "Installing lighting points controlled by two-two way switches and intermediate switch"},
        { value: "Installing radial circuit"},
        { value: "Installing ring and spur power circuit"},
        { value: "Installing electric cooker circuit"},
        { value: "Installing electric water heater circuit"},
        { value: "Installing single stroke bell circuit"},
        { value: "Installing trembler bell circuit"},
        { value: "Installing a continuous ringing bell circuit"},
        { value: "Installing buzzer circuit"},
        { value: "Installing indicator board circuit"},
        { value: "Installing single-phase protective devices"},
        { value: "Installing three-phase protective devices"},
        { value: "Performing TT earthing method"},
        { value: "Performing IT earthing method"},
        { value: "Performing TNS earthing method"},
        { value: "Performing bonding of metal fixtures"},
        { value: "Carrying out verification of polarity test"},
        { value: "Carrying out insulation test"},
        { value: "Carrying out ring circuit test"},
        { value: "Carrying out earthing resistance test"},
        { value: "Carrying out continuity test of the installation"},
        { value: "Carrying out open circuit test in the installation"}
    ];
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2025). Solar Power Installation for secondary schools student's book, form two. Tanzania Institute of Education"}
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
} else if (subject === "Plumbing and Pipe Fitting") {
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Domestic Water Supply Systems"},
        { value: "Installing Sanitary Appliances"},
        { value: "Installing Sanitary Pipe Work Systems"},
        { value: "Installing Domestic Gas Supply Systems"},
        { value: "Performing Sheet Metal Works"},
        { value: "Fabricating Sheet Metal Works"},
        { value: "Project"}
    ];
    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Installing irrigation system"},
        { value: "Installing, servicing and repairing hot water supply system"},
        { value: "Installing and repairing waste appliances"},
        { value: "Installing and repairing soil appliances"},
        { value: "Installing and maintaining above ground drainage system"},
        { value: "Installing and maintaining underground drainage system"},
        { value: "Installing gas pipe system to the building"},
        { value: "Performing hand shearing"},
        { value: "Performing machine shearing"},
        { value: "Performing sheet metal forming"},
        { value: "Performing soft soldering"},
        { value: "Performing riveting"},
        { value: "Performing grinding"},
        { value: "Performing gas welding and brazing"},
        { value: "Performing shielded metal arc welding"},
        { value: "Project"}
    ];
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Installing and maintaining sprinkler irrigation system"},
        { value: "Installing and maintaining dripping irrigation system"},
        { value: "Installing and maintaining furrow surface irrigation system"},
        { value: "Installing and repairing direct hot water supply"},
        { value: "Installing and repairing indirect hot water supply"},
        { value: "Installing and repairing hot water storage tank"},
        { value: "Installing and repairing electrical heaters"},
        { value: "Installing and repairing solar water heater system"},
        { value: "Installing and repairing gas heaters"},
        { value: "Fixing and repairing hand washbasin"},
        { value: "Fixing and repairing bathtub"},
        { value: "Fixing and repairing traps"},
        { value: "Fixing and repairing sink"},
        { value: "Fixing and repairing bidets"},
        { value: "Fixing and repairing drinking fountain"},
        { value: "Fixing and repairing water closet pans"},
        { value: "Fixing and repairing flushing cisterns"},
        { value: "Fixing and repairing urinals"},
        { value: "Fixing and repairing flush valve"},
        { value: "Fixing and repairing spray pipes"},
        { value: "Installing and maintaining two-pipe system"},
        { value: "Installing and maintaining single stack system"},
        { value: "Installing and maintaining one-pipe system"},
        { value: "Installing and maintaining separate systems"},
        { value: "Installing and maintaining combined systems"},
        { value: "Laying pipe to the required slope"},
        { value: "Performing drain tests"},
        { value: "Constructing inspection chambers"},
        { value: "Connecting pipes to septic tanks, sewers, chambers, soak-aways, cesspools, and bio-digester oxidation ponds"},
        { value: "Drilling and connecting service pipe from main"},
        { value: "Installing and maintaining gas meter"},
        { value: "Installing and repairing domestic gas appliances"},
        { value: "Performing gas test"},
        { value: "Performing maintenance and servicing of gas system"},
        { value: "Performing straight shearing"},
        { value: "Performing circular shearing"},
        { value: "Performing straight edge shearing"},
        { value: "Bending sheet metal at right angle"},
        { value: "Forming single and double seam"},
        { value: "Forming grooved seam"},
        { value: "Forming cylindrical shapes"},
        { value: "Joining metal sheets by soldering"},
        { value: "Joining pipe by soldering"},
        { value: "Joining sheet metal by cold riveting"},
        { value: "Joining sheet metal by pop riveting"},
        { value: "Grinding metal"},
        { value: "Sharpening cutting tools"},
        { value: "Assembling oxy-acetylene plant"},
        { value: "Performing fusion welding"},
        { value: "Performing hard soldering"},
        { value: "Gas cutting"},
        { value: "Starting and welding straight bead"},
        { value: "Performing butt joints"},
        { value: "Performing groove butt joints"},
        { value: "Performing lap joints"},
        { value: "Performing corner joints"},
        { value: "Performing T-joint"},
        { value: "Performing project"}
    ];
    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2025). Plumbing and Pipe Fitting for secondary schools student's book, form two. Tanzania Institute of Education"}
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
} else if (subject === "Textiles Garment Construction") {

    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Describe basic garment making processes (collars and cuffs, sleeves, pockets, facing, interfacing, lining, interlining, ruffles and trimmings)" },
        { value: "Make a portfolio of prototypes of garment-making processes (structural and functional: collars and cuffs, sleeves, pockets, facing, interfacing, lining, interlining, ruffles and trimmings)" },
        { value: "Prepare patterns for an apron, a shirt or blouse (body measurements, drafting, adaption, lay and cut out)" },
        { value: "Assemble garment sections to make an apron, a shirt or blouse" }
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Demonstrate an understanding of the fundamentals of garment construction" },
        { value: "Make sewing patterns" },
        { value: "Sew simple styles of various garments" }
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Textiles Garment Construction for secondary schools student's book, form two. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate mastery of the fundamentals of garment construction" }
       
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
    }  else if (subject === "Food and Human Nutrition") {

    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Describe the different food additives (herbs, spices, food colours, flavourings, preservatives and condiments)" },
        { value: "Describe cereals (types, nutritive values, cereal products and uses)" },
        { value: "Explore the concept of malnutrition (meaning, types, causes, symptoms and prevention)" },
        { value: "Apply different food and nutrition principles in planning balanced meals for different groups of people" },
        { value: "Describe different methods of preparing cereal dishes" },
        { value: "Prepare cereal dishes" }
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Demonstrate mastery of the principles of cookery" },
        { value: "Demonstrate an understanding of the relationship between health and nutrition" },
        { value: "Prepare a balanced meal based on different foods" }
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Food and Human Nutrition for secondary schools student's book, form two. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate mastery of the basic principles of Food and Nutrition" },
        { value: "Demonstrate mastery of the relationship between health and nutrition" },
        { value: "Prepare different dishes" }
       
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
    }  else if ( subject === "Physics") {
        
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the concept and principles of light (sources of light, propagation and transmission, image formation, colours, optical instruments)"},
            { value: "Describe the concept and principles of magnetism (magnetization and demagnetization, magnetic fields)"},
            { value: "Explain the concept and principles of static electricity (detection of static charges, types of materials, capacitors, charge distributions and lightning conductor)"},
            { value: "Describe the concept and laws of current electricity (electromotive force, potential difference, resistance, effect of electric current, domestic electrical installation)"},
            { value: "Apply mathematical knowledge to describe various relations related to light and current electricity"},
            { value: "Carry out experiments related to light, magnetism, static electricity and current electricity"},
            { value: "Use spreadsheet to process experimental data in physics"},
            { value: "Use graphs to analyse and determine mathematical relationships between various variables in Physics"},
            { value: "Communicate experimental results orally"},
            { value: "Collect and analyse data to explain various physical quantities (light, magnetism, static electricity and current electricity)"},
            { value: "Collect and analyse data to explain experimental observations related to light, magnetism, static electricity and current electricity"},
            { value: "Develop prototype devices based on the concepts, theories, principles, and laws gained from the field of light, magnetism, static electricity and current electricity"},
            
        ]; 
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of basic concepts, theories and principles of Physics"},
            { value: "Use mathematics to explain physical principles and phenomena"},
            { value: "Demonstrate mastery of basic experimental skills in Physics"},
            { value: "Demonstrate mastery of data analysis, presentation and report writing in Physics"},
            { value: "Collect, describe and relate physical data"},
            { value: "Carry out a project in Physics"},
            
        ]; 


        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Physics for secondary schools student's book, form two. Tanzania Institute of Education"},
            
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
            { value: "Describe the concepts of rates and variations"},
            { value: "Solve problems on rates and variations"},
            { value: "Describe the concepts of geometry (similarities and congruence)"},
            { value: "Recognize properties of similar triangles"},
            { value: "Explain postulates, proofs, and theorems of congruent triangles"},
            { value: "Explore the basic tenets of algebra (binary operations, quadratic expressions and equations, radicals, exponents, and logarithms)"},
            { value: "Solve quadratic equations by using different methods (factorisation, Completing the square, and quadratic formula)"},
            { value: "Identify and use laws of exponents involving positive, negative, and zero exponents (multiplication law, division law, power law, and zero index)"},
            { value: "Write numbers in standard form"},
            { value: "Use laws of logarithms to solve problems"},
            { value: "Perform operations on radicals and rationalize the denominators"},
            { value: "Explore the basic tenets of sets (types of sets, subsets, operation with sets, and Venn diagrams of two sets)"},
            { value: "Distinguish among different types of sets (universal set, equal sets, empty/null set, finite and infinite sets, equivalent sets, and disjoint sets)"},
            { value: "Compare sets (subsets and universal sets)"},
            { value: "Perform operations with sets (union, intersection, and complement of a set)"},
            { value: "Represent two sets in a Venn diagram"},
            { value: "Find the number of elements in a set"},
            { value: "Explore the basic tenets of trigonometry (trigonometric ratios, angles of elevation and depression)"},
            { value: "Determine trigonometric ratios of angles and special angles"},
            { value: "Calculate angles of elevation and depression"},
            
            
        ];
        
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Use rates and variations in different contexts"},
            { value: "Use geometry, approximations, relations and functions in various contexts"},
            { value: "Use algebra and matrices in problem solving"},
            { value: "Use sets, sequences and series in problem solving"},
            { value: "Use basic coordinate geometry, trigonometry and vectors skills in daily life"},
            
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Mathematics for secondary schools student's book, form Two. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of mathematical language"},
            { value: "Demonstrate mastery of basic concepts in geometry and algebra"},
            { value: "Demonstrate mastery of basic concepts in coordinate geometry, trigonometry, circles, vectors, probability, and statistics"},

            
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
            { value: "Kuchambua chimbuko la ukoloni"},
            { value: "Kubainisha mataifa yaliyoitawala Tanzania na mifumo yake ya kikoloni katika uchumi, utawala na utamaduni"},
            { value: "Kujadili mchango wa mifumo ya kikoloni katika uhusiano wa Tanzania na mataifa yaliyoitawala"},
            { value: "Kueleza hali ya maadili ya jamii za Kitanzania kipindi ukoloni unaingia"},
            { value: "Kuchambua athari za mfumo wa ukoloni katika maadili ya jamii za Kitanzania"},
            { value: "KKubaini maadili yaliyo-dumishwa na jamii za Kitanzania wakati wa ukoloni"},
            { value: "Kubaini sababu za jamii za Kitanzania kupinga uvamizi wa kikoloni, ukoloni na maadili yake"},
            { value: "Kujadili njia mbalimbali zilizotumika na jamii za Kitanzania kupinga uvamizi wa kikoloni, ukoloni na maadili yake"},
            { value: "Kufafanua misingi na mbinu zilizotumika kupigania Uhuru wa Tanganyika na Zanzibar"},
            { value: "Kutathmini mchango wa harakati za kupinga uvamizi na ukoloni katika kutunza maadili ya Kitanzania na kujenga uzalendo"},
            { value: "Kueleza hali ya uchumi, siasa, utamaduni, jamii na maadili mara baada ya uhuru"},
            { value: "Kutathmini mikakati na changamoto za ujenzi wa Taifa kiuchumi, kisiasa, kiutamaduni, kijamii na kimaadili kipindi cha 1961-1966"},
            { value: "Kueleza chimbuko la Mapinduzi Matukufu ya Zanzibar"},
            { value: "Kubaini mchango wa Mapinduzi Matukufu ya Zanzibar katika kujenga umoja, mshikamano na maadili miongoni mwa Wazanzibari"},
            
        ];

        

        var competenceOptions = [
            { value: "Chagua Umahiri mahususi"},   
            { value: "Kutumia maarifa na ujuzi wa chimbuko na ukuaji wa mfumo wa ukoloni kuelewa uhusiano wa kihistoria kati ya Tanzania na mataifa yaliyoitawala"},
            { value: "Kutathmini athari za mfumo wa ukoloni kwenye maadili ya jamii za Kitanzania"},
            { value: "Kuchambua jitihada za jamii za Kitanzania kupinga ukoloni na maadili ya kikoloni"},
            { value: "Kuchambua mifumo ya uchumi, siasa, utamaduni, jamii na maadili iliyojengwa, 1961-1966"},
            { value: "Kumudu historia ya Mapinduzi Matukufu ya Zanzibar"},
            
        ]; 

        var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Taasisi ya Elimu Tanzania. (2023). Historia Ya Tanzania na Maadili kitabu cha mwanafunzi kwa shule za sekondari kidato cha pili. Taasisi ya Elimu Tanzania"},
            
        ];
        var topicsOptions = [
            { value: "Chagua Umahiri mkuu"},
            { value: "Kumudu historia ya Tanzania na maadili wakati wa ukoloni, 1890- 1960"},
            { value: "Kumudu historia ya ujenzi wa Taifa na maadili yake katika kipindi cha 1961- 1966"},
            

            
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
            { value: "Describe nutrition in human and ruminants (nutrients, digestive system and processes)"},
            { value: "Describe the mechanism of transportation of materials in flowering plants (vascular system, absorption and movement of water and mineral salts and transpiration)"},
            { value: "Describe the mechanism of transportation of materials in the human body (the mammalian heart, blood vessels, blood, blood circulation)"},
            { value: "Describe the mechanisms of gaseous exchange and respiration in mammals (gaseous exchange in mammals, aerobic and anaerobic respiration)"},
            { value: "Describe the mechanism of gaseous exchange in plants (parts of plants responsible for gaseous exchange and the process)" },
            { value: "Investigate food nutrients in various food samples"},
            { value: "Investigate processes of transportation of materials in flowering plants"},
            { value: "Carry out experiments to determine the pulse rate in human"},
            { value: "Investigate aerobic and anaerobic respiration in living organisms"},
            { value: "Prepare and present a report of a biological investigation on ( food nutrients in various food samples, transportation of materials in flowering plants, pulse rate in human, aerobic and anaerobic respiration )"},
        ];

        
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Describe the physiological, anatomical and ecological processes of living organisms"},
            { value: "Demonstrate mastery of basic skills for conducting biological investigations"},
            { value: "Prepare and present results of biological investigations"},
            
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Biology for secondary schools student's book, form two. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence" },
            { value: "Demonstrate mastery of the concepts, principles and processes of Biology"},
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
    }  else if (subject === "English Language") {
        
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Use search engines to obtain specific information from different online sources (e.g., books, journals)"},
            { value: "Use online platforms to develop vocabulary (e.g., online dictionaries, online word building games)"},
            { value: "Use ICT to extract and store information"},
            { value: "Participate in various conversations in different communicative settings (e.g., peer discussions, storytelling)"},
            { value: "Summarise information from oral presentations and audio/audio-visual sources"},
            { value: "Paraphrase information presented orally"},
            { value: "Construct sentences with proper intonation"},
            { value: "Use cohesive devices to deliver oral presentations of events (e.g., first of all, moreover, but, however, yet, in contrast, although, otherwise, still, on the contrary, on the other hand)"},
            { value: "Recognise words with opposite meanings from conversations and written texts"},
            { value: "Use words from conversations and written texts to produce new vocabulary by attaching suffixes and prefixes (e.g., kind-unkind; slow-slowly)"},
            { value: "Produce contextualised oral and written descriptions based on personal experience"},
            { value: "Compose passages on specific contexts (structure: tenses –past progressive, present perfect, past perfect, present progressive, adjectives, adverbs, coordinators, prepositions, determiners, conjunctions)"},
            { value: "Present messages in formal discussions on various issues using correct grammar and vocabulary"},
            { value: "Express the main ideas from a text"},
            { value: "Infer meanings of unfamiliar words and idiomatic expressions from a given text"},
            { value: "Relate the core messages from a text to real life experiences"},
            { value: "Synthesise ideas from a variety of oral sources"},
            { value: "Summarise information from a variety of oral sources"},
            { value: "Participate in contextualised oral conversations"},
            { value: "Express ideas and opinions in different group communicative settings (differing, counter-arguing, supporting ideas)"},
            { value: "Use appropriate non-verbal cues in group communication"},
            { value: "Use appropriate language to respond to messages in online group communicative contexts (e.g., WhatsApp, Telegram)"},
            { value: "Describe various locations (structure: prepositions, adjectives, adverbs)"},
            { value: "Express quality and quantity of objects and living organisms (structure: adjectives, quantifiers, adverbs)"},
            { value: "Negotiate prices using appropriate expressions (e.g., convincing a customer to buy a product, convincing a seller to lower the price) (Structure: May I…, I would like…, could you …, I offer you…)"},
            { value: "Request for services in different contexts"},
            { value: "Participate in various conversations in different contexts (e.g., discussions, dialogues) by initiating, intervening, changing a topic, turn-taking and closing"},
            { value: "Write claim and request letters in different contexts (e.g., learning facilities, sports gear, result report – Structure: I would like to bring your kind attention… I am writing to request…)"},
            { value: "Compose E-mails on various issues using appropriate language"},
            { value: "Create short stories on various topics (structure: once upon a time …, I wonder…, what if…, back in time…)"},
            
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
            { value: "Tanzania Institute of Education. (2023). English Language for secondary schools student's book, form two. Tanzania Institute of Education"},
            
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
            { value: "Describe the internal structure of the Earth (crust, mantle, core) and their major characteristics (location, size/ thickness, density and gross composition)"},
            { value: "Describe the main external Earth systems (Hydrosphere, Atmosphere and Biosphere)"},
            { value: "Describe the basic principles of reading and interpreting maps (key, symbols, direction, margin/frame, map title, scale and contour patterns)"},
            { value: "Reading and interpreting various type of maps and their importance (topographical and statistical map)" },
            { value: "Describe the basic concept of photograph in Geography (meaning, types, elements and uses)"},
            { value: "Describe the basic principles of photograph interpretation (identifying foreground, middle ground and background, associating objects with geographical phenomena)"},
            
        ];

        

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the origin and the tructure of the Earth and earth systems"},
            { value: "Demonstrate an understanding of the basic techniques of map and photograph interpretation"},
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Geography for secondary schools student's book, form two. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of the structure of the Earth"},
            { value: "Demonstrate mastery of basic skills and techniques in Geography"},
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
            { value: "Describe the pre-colonial interactions among the societies of Indian Ocean Islands, Eastern, Western, Northern and Southern Africa (conditions and consequences)"},
            { value: "Describe the early contacts between African societies and the Middle East, Far East and Europe from the 1st Century up to the 15th Century (conditions and consequences)"},
            { value: "Explain the contacts between African societies and the Portuguese, French, Dutch and British from the 15th Century up to the 18th Century"},
            { value: "Describe the origin, development and effects of the slave trade from the 15th Century to the 19th Century"},
            
        ];

       

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of interactions among African societies during the pre-colonial period"},
            { value: "Demonstrate an understanding of the early contacts among the people of Africa, the Middle East, the Far East and Europe from the 1st Century to the 19th Century"},
            
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). History for secondary schools student's book, form two. Tanzania Institute of Education"},
            
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
            { value: "Explain the concept of production (meaning, types, factors and importance)"},
            { value: "Describe sources of capital for small businesses (loans, savings, deferred payments, funds from family and friends)"},
            { value: "Describe the role of microfinancing and cooperatives in facilitating business formation and operations"},
            { value: "Describe the basic aspects of management for small businesses (meaning,financial and other records keeping, calculation of profit and loss, budgeting and control and administration)"},
            { value: "Describe the basic aspects of warehousing and inventorying for small businesses (meaning and functions)"},
            { value: "Identify business opportunities available in the local environment"},
            
        ];

        

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of the concepts, theories and principles of Business Education"},
            { value: "Demonstrate mastery of the basic skills of operating a small-scale business"},
            { value: "Apply business theories into practice"},
            
        ]; 

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Business Studies for secondary schools student's book, form two. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of business knowledge"},
            { value: "Solve social challenges using business skills"},
            { value: "Apply business knowledge in various contexts"},
           
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
            { value: "Describe cash and banking transactions (types of cash books)"},
            { value: "Record cash/ bank receipts and payments from various source documents in the Cash Book (double column, three-column or petty cash book)"},
            { value: "Describe errors in the Trial balance (meaning, types, sources and detection)"},
            { value: "Correct errors in the Trial balance by means of journal entries and adjust the trial balance"},
            { value: "Describe a Bank reconciliation statement (meaning, importance, reasons for inconsistencies, and the key terms used)"},
            { value: "Prepare adjusted cash book and bank reconciliation statement."},
            { value: "Describe Budgeting and budgetary control process (meaning, importance, approaches, and features of a good budget )"},
            { value: "Prepare a simple cash budget"},
            
        ];

       

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Record business transactions using source documents"},
            { value: "Prepare a Trial balance"},
            { value: "Prepare bank reconciliation statements"},
            { value: "Prepare a financial budget"},
            
        ];  

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Book-Keeping for secondary schools student's book, form two. Tanzania Institute of Education"},
            
        ];
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the principles of Book-keeping"},
            { value: "Demonstrate mastery of financial assets control"},
           
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
            { value: "Kuandika habari kwa kuzingatia upatanisho  wa kisarufi (kwa kuzingatia ngeli za nomino na viambishi vya upatanisho)"},
            { value: "Kuzungumza kwa kutumia miundo changamani ya sentensi katika miktadha mbalimbali (sentensi ambatani na changamani)"},
            { value: "Kuandika matini fupi kwa kutumia miundo changamani ya sentensi"},
            { value: "KKusikiliza habari changamani kwa umakini, udadisi na kuuliza maswali"},
            { value: "Kusikiliza mijadala/ habari changamani na kuwasilisha mawazo makuu aliyoyapata kwa kuzingatia uwazi na uwekevu"},
            { value: "Kusoma matini ndefu changamani kwa kina na utunduizi"},
            { value: "Kusoma matini ndefu changamani, kuandika muhtasari wa hoja kuu zilizomo na kutoa maoni juu ya hoja hizo"},
            { value: "Kuzungumza kwa kutumia mitindo mbalimbali ya lugha ya mazungumzo na kwa kuzingatia miktadha, umri, jinsia na uhusiano"},
            { value: "Kutumia kwa usahihi ishara zinazoambatana na mazungumzo katika kuwasiliana"},
            { value: "Kuandika insha za wasifu na hoja (za kisanaa na zisizo za kisanaa)"},
            { value: "Kusikiliza hoja na kuandika kumbukumbu"},
            
        ];

        

        var competenceOptions = [
            { value: "Chagua Umahiri Mahususi"},
            { value: "Kukuza uelewa wa sarufi ya Kiswahili"},
            { value: "Kusikiliza na kuelewa mazungumzo"},
            { value: "Kusoma matini kwa ufasaha na ufahamu"},
            { value: "Kuwasiliana kwa ufasaha kwa njia ya mazungumzo"},
            { value: "Kuwasiliana kwa njia ya maandishi katika miktadha mbalimbali"},
            
        ]; 

        var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Taasisi ya Elimu Tanzania. (2023), kiswahili kitabu cha mwanafunzi kwa shule za sekondari kidato cha pili, Taasisi ya Elimu Tanzania."},
            
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
    }  else if (subject === "Computer Science") {
        
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the concept of internet and cyber security (ethics, security, and privacy)"},
            { value: "Use Internet services (searching information, www, electronic mail)"},
            { value: "Understand cyber security threats and related counter measures"},
            { value: "Evaluate ethical issues, related principles, and practices of cyber security"},
            { value: "Apply basic cyber security measures (passwords, safe browsing, netiquette)"},
            { value: "Describe concept of programming language (categories, paradigm, generic structures)"},
            { value: "Describe programming tools (compiler/interpreter, text editor, IDE, Debugger)"},
            { value: "Install and configure the selected programming language (compiler/interpreter, text editor, IDE, Debugger)"},
            { value: "Use programming tools of selected programming language to write a program (compile/run and debuga simple program) "},
            { value: "Use variables, constants, and data types of a selected programming language in a program (operators and expressions)"},
            { value: "Use syntax and constructs of the selected programming language to write programs branching"},
            { value: "Debugging computer programs"},
            
        ];

       

        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of the Internet, and basics of cyber security"},
            { value: "Demonstrate an understanding of basic principles of computer programming (using an appropriate structured programming language such as C, python, etc.)"},
            
        ];  

        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Computer Science for secondary schools student's book, form two. Tanzania Institute of Education"},
            
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
        { value: "Chagua Shughuri Kuu"},
        { value: "Kufafanua ufahamu wa dini kwa mujibu wa Qur’an. (tofauti ya mtazamo wa Uislamu na ukafiri juu ya chanzo na kazi ya dini, sababu za hitajio la dini kwa mwanadamu)."},
        { value: "Kufafanua njia za kumjua Allaah (S.W) na kuthibitisha kuwepo kwake (njia za kumjua Allaah, kumuamini Allah sio sualla la kibubusa, udhaifu wa madia ya makafiri dhidi ya kuwepo Allaah (S.W), dalili za kuwepo Allaah (S.W)) Udhaifu wa madai ya makafiri dhidi ya kuwepo kwa Allaah (S.W) (v) Athari za kumuamini Allaah (S.W) katika maisha ya kila siku."},
        { value: "Kuchambua sifa na majina 99 ya Allaah (S.W) (kuyasoma, kuyahifadhi na kuyazingatia)."},
        { value: "Kuchambua ufahamu wa hukumu za usomaji wa Qur’an. (hukumu za mim na nuni zenye shadda, hukumu za mim sakina"},
        { value: "Kuchambua historia ya kushuka Qur’an. (Hatua za kushuka Qur’an, hekima ya Qur’an kushuka hatua kwa hatua, namna Qur’an ilivyohifadhiwa kuanzia wakati ikishuka hadi leo)."},
        { value: "Kuchambua sura zilizoteuliwa: Lahab (111); Nasr (110); Kaafiruun (109); Maa’uun (107).(Kusoma kwa hukumu, kuhifadhi, kutafsiri na kutoa mafunzo)."},
        { value: "Kuchambua historia ya uandishi wa Hadithi za Mtume Muhammad (S.A.W). (Wakati wa uhai wa Mtume Muhammad (SAW), Maswahaba, Tabiina, Tabii Taabiina)."},
        { value: "Kufafanua Hadithi zilizoteuliwa kuhusu; kuepuka usengenyaji, kujiepusha na dharau, kujiepusha na matusi, kuepuka mabishano, kuepuka kujisifu na kujitukuza, kuepukana na kibri na majivuno, kuepukana na kulaani ovyo, kujiepusha na viapo. (Kusoma kwa kuhifadhi, kuandika, kutafsiri na kubaini mafunzo)."},
        { value: "Kufafanua utekelezaji wa ibada ya Zakat. (Masharti, mali zinazopasa kutolewa Zakat, nisaabu na makundi ya watu wanaostahiki kupewa Zakat)."},
        { value: "Kufafanua utekelezaji wa ibada ya funga (Maana, aina, umuhimu, nguzo za funga, sunnah na miiko ya funga, kubatilika kwa funga,)"},
        { value: "Kuchambua ufahamu wa familia ya Kiislamu. (Maana,umuhimu, na taratibu za ndoa katika Uislamu, umri wa kuoa na kuolewa, majukumu katika familia na ukewenza)"},
        { value: "Kufafanua vipengele vya utamaduni wa Kiislamu (maana, mavazi, sherehe, misiba, maamkizi, michezo)"},
        { value: "Kufafanua adabu za matendo ya Muislamu ya kila siku: (kula, kwenda haja, kulala na kuamka, kuoga, kutoka na kurudi nyumbani, kupiga miayo na chafya, kuishi na watu kwa wema, kuwatembelea wagonjwa, kuingia na kutoka msikitini)"},
        { value: "Kufafanua sifa za mlinganiaji. (Ujuzi sahihi,Imani thabiti, tabia njema, kuendeleza Uislamu kuwe ndio lengo kuu la maisha, kutaraji malipo kutoka kwa Allaah (S.W), kuwa na subira, kuwa na hekima)."},
        { value: "Kuchambua sifa za kundi la walinganiaji. Mshikamano wa udugu na upendo, kushauriana, nidhamu na utii, kukosoana kwa nia njema na njia nzuri, kujiepusha na kujiona na ria, kuwa na subira, kuwa na hekima"},
        { value: "Kufafanua hali ya jamii ya Bara Arabu zama za jahiliya (509 – 609A.D). (Utabiri wa ujio wa Mtume Muhammad (S.A.W), mifumo ya jamii kisiasa, kiuchumi, kiutamaduni na kimaadili, utukufu wa mji wa Makkah na kabila la Quraysh,)."},
        { value: "Kufafanua mbinu za ulinganiaji alizozitumia Mtume Muhammad (S.A.W) kipindi cha Makkah. (Kuzaliwa kwa Mtume (S.A.W), kulelewa, nasaba, makuzi, kuandaliwa, kupewa Utume, kulingania, upinzani wa makureishi, isra na miraji, hijra na mafunzo yatokanayo katika kujenga jamii)"},
        
    ];

   

    var competenceOptions = [
        { value: "Chagua Umahili Mahususi"},
        { value: "Kutambua uwepo wa Allaah (S.W) na sifa zake."},
        { value: "Kuisoma Qur’an kwa mazingatio ya hukumu na ujumbe."},
        { value: "Kuishi kwa kuzingatia Sunnah ya Mtume Muhammad (S.A.W"},
        { value: "Kutekeleza nguzo za Uislamu kwa kuzingatia lengo la kila nguzo."},
        { value: "Kuchunga mipaka ya Allaah (S.W) katika kuendesha maisha ya binafsi na jamii"},
        { value: "Kutumia Qur’an na Sunnah kulingania jamii."},
        { value: "Kutumia historia ya Uislamu kujenga mwenendo mwema wa jamii"},
        
    ];  

    var referenceOptions = [
        { value: "Chagua Rejea"},
        { value: "Taasisi ya Elimu Tanzania. (2023), Elimu Ya Dini Ya Kiislamu kitabu cha mwanafunzi kwa shule za sekondari kidato cha pili, Taasisi ya Elimu Tanzania."},
        
    ];
    var topicsOptions = [
        { value: "Chagua Umahili Mkuu"},
        { value: "Kumtambua, kumpenda, kumtukuza na kumsifu Allaah (S.W)."},
        { value: "Kumtumikia Allaah (S.W) katika kila kipengele cha maisha."},
        { value: "Kulingania na kusimamisha haki na uadilifu katika jamii."},
       
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
        { value: "Describe the Concept of the Book of Exodus"},
        { value: "Show how the concept of God’s love and compassion appears in the Book of Exodus"},
        { value: "Identify the consequences of not appreciating God’s"},
        { value: "Love and Compassion"},
        { value: "Explain the Sinai Covenant"},
        { value: "Clarify God’s Commandments as stated in the Book of Exodus"},
        { value: "Show the indicators of Moses’ leadership qualities"},
        { value: "Explain the concept of statistics as revealed in the Book of Numbers."},
        { value: "Use the Book of Numbers to discuss the objectives and importance of statistics and the census in society"},
        { value: "Identify the main ideas in the book of Joshua"},
        { value: "Use the Book of Joshua to discuss the importance of preparing leaders"},
        { value: "Describe the fall of the biblical cities of Jericho and Ai"},
        { value: "Discuss the indicators of strength and bravery according to the Book of Joshua"},
        { value: "Use the Book of Joshua to discuss the importance of bravery, humility and perseverance"},
        { value: "Explain the concept of patriotism as appears in the Book of Joshua"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Use the Book of Exodus to understand God’s love and compassion"},
        { value: "Demonstrate an appreciation of God’s commandments as outlined in the Book of Exodus"},
        { value: "Demonstrate an appreciation of the importance of statistics based on the Book of Numbers"},
        { value: "Demonstrate mastery of the Holy Scripture through the Book of Joshua"},
        { value: "Use the Book of Joshua to appreciate the importance of courage, bravery, humility, perseverance and patriotism"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Bible Knowledge for secondary schools student's book, form two. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate an understanding of Creation and God’s commandments"},
        { value: "Demonstrate an understanding of faith by living a holy life"},
       
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
        { value: "Describe the principles and practices for the production of banana and common root/ stem/ tuber crops (conceptualisation of production of banana and the selected common root/stem/tuber crops: cassava, sweet and round potato"},
        { value: "Describe the principles and practices for the production of pig or rabbit (conceptualisation of pig and rabbit production, principles and practices for production of pig and rabbit)"},
        { value: "Perform husbandry practices in the production of banana, common root and stem tuber crops (cassava, sweet and round potato)"},
        { value: "Perform husbandry practices in the production of pig or rabbit"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Demonstrate an understanding of the principles of agriculture"},
        { value: "Apply basic principles of husbandry in crop production"},
        { value: "Apply basic principles of husbandry in animal production"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Agriculture for secondary schools student's book, form two. Tanzania Institute of Education"},
        
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
    else if (subject === "Costume and Makeup Design") {
        var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Develop appropriate makeup designs for theatrical production (interpret the vision of the production)"},
            { value: "Sketch designs according to the demands of production (draw lines, use colour and blending techniques to create a bold/angular face for a soft/subtle look)"},
            { value: "Produce final makeup designs (refine and create the final makeup designs)"},
            { value: "Use ICT to develop innovative makeup designs"},
            { value: "Produce makeup designs for dance"},
        ];
        var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of the principles of costume and makeup design"},
            { value: "Use ICT to design costumes and makeup"},
            { value: "Design costumes and makeup for a theatre artist"},
        ];
        var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Costume and Makeup Design for secondary schools student's book, form two. Tanzania Institute of Education"},
        ];
        var topicsOptions = [
            { value: "Select main competence"},
            { value: "Design costumes and makeup for a theatre artist"},
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
    else if (subClasses === "Form Three") {
        if (subject === "Additional Mathematics") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Explore the basic tenets of logic (logical statements/propositions, connectives, arguments, validity of an argument, truth tables and simple circuits)"},
            { value: "Explore the basic tenets of Algebra (sum and product of roots of a quadratic equation, solve algebraically and graphically simultaneous equations involving one linear and one quadratic equation, use the remainder theorem to find a remainder of a polynomial function of up to third degree)"},
            { value: "Explore the basic tenets of Rational Functions (properties, asymptotes, domain and range, graphs)"},
            { value: "Explore the basic tenets of Differentiation (derivatives of polynomial and trigonometric functions: first principles, power rule, chain rule, product rule and quotient rule)"},
            { value: "Apply differentiation to determine rates of change of quantities, maxima and minima of functions, turning points, points of inflection and curve sketching"},
            { value: "Determine indefinite and definite integrals of polynomial expressions and simple trigonometric functions"},
            { value: "Apply Integration to determine area under a curve and volume of a solid of revolution of a simple curve about an axis"},
            { value: "Explore the basic tenets of set theory (operation on three sets, Venn diagrams, cardinality of a set, set properties and De Morgan’s laws)"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of logic in decision making"},
            { value: "Use Algebra and Calculus to solve problems in different contexts"},
            { value: "Apply sets theory skills in decision making"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Additional Mathematics for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Use advanced mathematical knowledge and skills in everyday life"},
            { value: "Demonstrate mastery of some advanced concepts in Algebra and Calculus in problem solving"},
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
        } else if (subject === "Agriculture") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the principles and practices for the production of cereals (maize, sorghum, paddy) and pulses (common bean/pea, cow pea and pigeon pea) (conceptualisation of cereals and pulses; principles and practices for production of selected cereals (maize, sorghum, paddy) and pulses (common bean/pea, cow pea and pigeon pea))"},
            { value: "Describe the basic principles and practices for the production of cattle (conceptualisation production of cattle; principles and practices for production of dairy and beef cattle)"},
            { value: "Perform basic husbandry practices in the production of cereals (maize, sorghum and paddy); pulses (common bean/pea, cow pea and pigeon pea)"},
            { value: "Perform basic husbandry practices in the production of dairy and beef cattle"},
            { value: "Plan and carry out a crop/animal-based production project"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the principles of agriculture"},
            { value: "Apply basic principles of husbandry in crop production"},
            { value: "Apply basic principles of husbandry in animal production"},
            { value: "Carry out a project in Agriculture"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Agriculture for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the principles of agriculture"},
            { value: "Use basic agricultural skills"},
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
        } else if (subject === "Animal Health and Production") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Preparing different types of fish ponds"},
            { value: "Managing fish ponds"},
            { value: "Breeding fish"},
            { value: "Preparing fish feed"},
            { value: "Performing aquarium fish farming"},
            { value: "Performing aquaponics"},
            { value: "Performing fish tank farming"},
            { value: "Feeding fish in cages"},
            { value: "Designing different types of fish cages"},
            { value: "Managing fish cages"},
            { value: "Conserving lake environments"},
            { value: "Performing crab farming"},
            { value: "Performing shrimp farming"},
            { value: "Performing salmon farming"},
            { value: "Performing seaweed and cucumber farming"},
            { value: "Harvesting fish"},
            { value: "Smoking fish"},
            { value: "Salting fish"},
            { value: "Freezing fish"},
            { value: "Preparing sun dried fish"},
            { value: "Fermenting fish"},
            { value: "Performing organoleptic test"},
            { value: "Inspecting fish products"},
            { value: "Grading fish and fish products"},
            { value: "Sketching simple farm layout"},
            { value: "Locating sketched farm layout on selected site"},
            { value: "Marking specific area for selected location of structure and boundaries"},
            { value: "Constructing poultry units"},
            { value: "Constructing ruminants’ units"},
            { value: "Constructing non-ruminants’ units"},
            { value: "Designing spray race"},
            { value: "Designing dipping tank"},
            { value: "Fabricating feeders and water trough"},
            { value: "Fabricating nests and cages"},
            { value: "Fabricating yoke and skey"},
            { value: "Fabricating brooder"},
            { value: "Preparing layout for livestock markets"},
            { value: "Preparing layout for meat processing facilities"},
            { value: "Preparing layout for milk processing facility"},
            { value: "Preparing layout for fish processing facility"},
            { value: "Preparing layout for hides and skins processing facility"},
            { value: "Performing reseeding and over sowing"},
            { value: "Making fire barriers"},
            { value: "Removing weeds and bushes"},
            { value: "Creating paddocks"},
            { value: "Locating water points"},
            { value: "Selecting site"},
            { value: "Determining soil type"},
            { value: "Preparing land"},
            { value: "Planting or sowing (grass, legumes or mixture)"},
            { value: "Applying fertilizer/manure"},
            { value: "Performing weed control"},
            { value: "Harvesting and preserving seeds"},
            { value: "Making hay"},
            { value: "Making silage"},
            { value: "Preserving crop residues"},
            { value: "Selecting different animal and fish feed ingredients"},
            { value: "Preparing different animal and fish feed stuff"},
            { value: "Packaging and storage of animal and fish feed stuff"},
            { value: "Pasteurizing milk"},
            { value: "Preparing cheese"},
            { value: "Preparing ghee"},
            { value: "Preparing butter"},
            { value: "Preparing yoghurt"},
            { value: "Preparing fermented milk"},
            { value: "Preparing ice cream"},
            { value: "Preparing poultry carcasses"},
            { value: "Preparing ruminant carcasses"},
            { value: "Preparing pig carcasses"},
            { value: "Processing tail switch, hooves and horns"},
            { value: "Processing hides and skins"},
            { value: "Preparing blood and bone meal"},
            { value: "Preparing smoked meat"},
            { value: "Processing trotter, head and tail and offal"},
            { value: "Preparing sun dried meat"},
            { value: "Performing canning of meat"},
            { value: "Chilling, freezing or blasting meat"},
            { value: "Salting or spicing meat"},
            { value: "Preparing different types of sausages"},
            { value: "Inspecting livestock"},
            { value: "Grading different types of livestock"},
            { value: "Determining weight of livestock"},
            { value: "Performing visual inspection"},
            { value: "Performing organoleptic test"},
            { value: "Performing lactometer test"},
            { value: "Collecting samples for laboratory test"},
            { value: "Handling meat inspection judgments"},
            { value: "Grading meat or carcass, milk and eggs"},
            { value: "Inspecting hides and skins"},
            { value: "Grading hides and skins"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Performing fish pond farming"},
            { value: "Performing smart technologies fish farming"},
            { value: "Performing lake fish farming"},
            { value: "Performing marine farming"},
            { value: "Harvesting and preserving fish"},
            { value: "Controlling quality of fish"},
            { value: "Preparing layout of infrastructure for new livestock farm"},
            { value: "Constructing livestock farm structures"},
            { value: "Fabricating farm equipment"},
            { value: "Designing layout for livestock markets and processing facilities"},
            { value: "Improving rangeland"},
            { value: "Cultivating pastures"},
            { value: "Conserving pastures and crop residues"},
            { value: "Preparing animal and fish feeds"},
            { value: "Processing milk"},
            { value: "Preparing carcasses"},
            { value: "Processing inedible slaughter by products"},
            { value: "Processing meat and edible slaughter by products"},
            { value: "Controlling quality of livestock"},
            { value: "Controlling quality of livestock products"},
            { value: "Controlling quality of hides and skins"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Animal Health and Production for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Performing fish farming"},
            { value: "Designing and constructing farm infrastructure"},
            { value: "Feeding livestock and fish"},
            { value: "Processing and utilizing livestock products"},
            { value: "Controlling quality of farm products"},
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
        } else if (subject === "Art and Design") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Making road signs"},
            { value: "Making public transport signs"},
            { value: "Making hospital signs"},
            { value: "Making educational signs"},
            { value: "Making museum exhibit signs"},
            { value: "Making wayfinding signs"},
            { value: "Making trail signs"},
            { value: "Making campground signs"},
            { value: "Making office building signs"},
            { value: "Making hotel signs"},
            { value: "Making caution signs: fire safety signs"},
            { value: "Making chemical hazard signs"},
            { value: "Making electrical safety signs"},
            { value: "Making biohazard signs"},
            { value: "Making storefront signs"},
            { value: "Making billboards"},
            { value: "Making neon signs"},
            { value: "Making banner signs"},
            { value: "Making vehicle wraps"},
            { value: "Making braille signs"},
            { value: "Making accessible restroom signs"},
            { value: "Making tactile maps"},
            { value: "Making audio information kiosks"},
            { value: "Making sign language interpretation signs"},
            { value: "Creating human sculptures"},
            { value: "Creating animal sculptures"},
            { value: "Creating abstract sculptures"},
            { value: "Preparing materials and tools for making paper crafts"},
            { value: "Creating cards and bookmarks"},
            { value: "Creating packages"},
            { value: "Creating envelopes"},
            { value: "Making beeswax candles"},
            { value: "Making paraffin wax candles"},
            { value: "Making gel (wax) candles"},
            { value: "Making palm wax candles"},
            { value: "Making coconut wax candles"},
            { value: "Making bar soap"},
            { value: "Making liquid soap"},
            { value: "Making powder detergent"},
            { value: "Preparing materials for making woodcrafts"},
            { value: "Making wood décor"},
            { value: "Preparing materials and tools for making pottery"},
            { value: "Making a clay cup"},
            { value: "Making a clay plate"},
            { value: "Making a clay pot"},
            { value: "Making a clay flower vessel"},
            { value: "Making stencil printing"},
            { value: "Making intaglio printing"},
            { value: "Making screen printing"},
            { value: "Making heat transfer printing"},
            { value: "Weaving grass basket"},
            { value: "Weaving beads basket"},
            { value: "Weaving sisal basket"},
            { value: "Weaving bamboo basket"},
            { value: "Weaving cord basket"},
            { value: "Weaving palm mat (ukindu)"},
            { value: "Weaving grass mat"},
            { value: "Weaving stem mat (matete)"},
            { value: "Making necklace wear"},
            { value: "Making waist wear"},
            { value: "Making earrings"},
            { value: "Making hair clipper"},
            { value: "Making bracelets"},
            { value: "Making ankle bracelet"},
            { value: "Moulding a plate"},
            { value: "Moulding a cup"},
            { value: "Moulding a bowl"},
            { value: "Moulding a pot"},
            { value: "Moulding a bowl by wheel"},
            { value: "Moulding a pot by wheel"},
            { value: "Moulding a cup by wheel"},
            { value: "Classifying size of beads"},
            { value: "Applying a sorted type of beads colour"},
            { value: "Applying types of beads"},
            { value: "Applying types of bead shape"},
            { value: "Applying size of bead"},
            { value: "Preparing tools and equipment for beadwork"},
            { value: "Selecting materials for making beading thread"},
            { value: "Making beading thread"},
            { value: "Making capes"},
            { value: "Making traditional skirt"},
            { value: "Making vikoi clothes"},
            { value: "Making dress"},
            { value: "Making gown"},
            { value: "Making Maasai clothes"},
            { value: "Making decorated wooden bag"},
            { value: "Making bead bag"},
            { value: "Making crystal beads bag"},
            { value: "Making a decorated bag"},
            { value: "Making wood table mat"},
            { value: "Making beads table mat"},
            { value: "Making fabric table mat"},
            { value: "Making flower from recycled waste products"},
            { value: "Making picture frame"},
            { value: "Making a card"},
            { value: "Making paper basket"},
            { value: "Making plastic flowers"},
            { value: "Making plastic toys"},
            { value: "Making plastic flower vessels"},
            { value: "Making wooden earrings from wood waste"},
            { value: "Making wooden necklace from wood waste"},
            { value: "Making wooden hair clipper from wood waste"},
            { value: "Making glass candle holder"},
            { value: "Making a glass flower vase"},
            { value: "Making a decorative glass bottle"},
            { value: "Carving wooden spoon"},
            { value: "Carving kibao cha chapati"},
            { value: "Carving traditional stool"},
            { value: "Carving wooden bowl"},
            { value: "Carving serving spoon"},
            { value: "Carving wood comb"},
            { value: "Carving shield"},
            { value: "Carving fimbo ya babu"},
            { value: "Making carved wooden toys"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Creating informational signboards"},
            { value: "Creating directional signboards"},
            { value: "Creating safety signboards"},
            { value: "Creating commercial signboards"},
            { value: "Creating informational signs for the differently abled"},
            { value: "Constructing sculptures for different uses"},
            { value: "Making paper crafts"},
            { value: "Making candles"},
            { value: "Making soaps"},
            { value: "Making woodcrafts"},
            { value: "Making pottery"},
            { value: "Making printing on crafts surfaces"},
            { value: "Performing basket weaving"},
            { value: "Performing mats weaving"},
            { value: "Making ornaments"},
            { value: "Performing free hand moulding items"},
            { value: "Performing wheel moulding items"},
            { value: "Making beads classification"},
            { value: "Making beading thread"},
            { value: "Decorating traditional clothes"},
            { value: "Making a bag"},
            { value: "Making a tablemat"},
            { value: "Making wastepaper product"},
            { value: "Making waste plastic products"},
            { value: "Producing wood waste products"},
            { value: "Making glass waste product"},
            { value: "Carving kitchen utensils"},
            { value: "Carving decoration products"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Art and Design for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Performing sign boards"},
            { value: "Performing handicrafts"},
            { value: "Performing weaving"},
            { value: "Performing moulding"},
            { value: "Performing beads"},
            { value: "Performing recycled waste products"},
            { value: "Performing carving"},
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
        } else if (subject === "Auto Body Repair") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Performing welding of metal joints vertically"},
            { value: "Welding metal joints horizontally"},
            { value: "Welding panels by brazing"},
            { value: "Filling metal surface by brazing"},
            { value: "Welding copper and steel pipes"},
            { value: "Identifying the damaged parts"},
            { value: "Dismantling body parts"},
            { value: "Performing straightening"},
            { value: "Performing cold shrinking"},
            { value: "Performing hot shrinking"},
            { value: "Welding sheet metals using resistance welding (spots)"},
            { value: "Welding sheet metal by projection welding"},
            { value: "Welding sheet metal by high-frequency resistance welding"},
            { value: "Welding thin metals using resistance welding"},
            { value: "Welding thin metal by projection welding"},
            { value: "Welding metal rods using a percussion welding machine"},
            { value: "Welding thin metal by high-frequency resistance welding"},
            { value: "Dismantling the door from the frame and attachments"},
            { value: "Dismantling the interior components"},
            { value: "Performing glass and window machine removing"},
            { value: "Removing channels"},
            { value: "Removing hinges and locks"},
            { value: "Performing panel straightening by body jack"},
            { value: "Performing heating and welding on bent vehicle body"},
            { value: "Performing file beating"},
            { value: "Performing body plastic filler"},
            { value: "Performing patching"},
            { value: "Performing panel beating"},
            { value: "Performing body filler"},
            { value: "Performing sanding"},
            { value: "Performing arc cutting on dented frame"},
            { value: "Performing arc gouging"},
            { value: "Fixing the bonnet, boot and door"},
            { value: "Performing vehicle body panel alignment"},
            { value: "Tightening the attachments"},
            { value: "Sanding by disc sanding machine"},
            { value: "Checking for surface correctness"},
            { value: "Re-applying body filler"},
            { value: "Re-sanding"},
            { value: "Applying undercoat paint"},
            { value: "Performing metal selection"},
            { value: "Performing metal cutting"},
            { value: "Performing blow pipe pressure setting"},
            { value: "Performing preparation of surface and material"},
            { value: "Performing initial and final grinding"},
            { value: "Performing preparation of panel surface and material"},
            { value: "Performing fibre glass filling"},
            { value: "Performing initial and final fibre glass grinding/sanding"},
            { value: "Inspecting the exterior body"},
            { value: "Preparing the panel surface for painting"},
            { value: "Handling brush/spray paint"},
            { value: "Inspecting the interior body"},
            { value: "Preparing the surface for painting"},
            { value: "Inspecting catalytic converter"},
            { value: "Repairing catalytic converter"},
            { value: "Repairing exhaust system components"},
            { value: "Replacing exhaust system components"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Carrying out welding on ferrous metal body panels"},
            { value: "Carrying out welding on non-ferrous metal body panels"},
            { value: "Carrying out metal brazing and bronze welding of vehicle body panels"},
            { value: "Carrying out dismantling of body parts"},
            { value: "Carrying out straightening by cold and hot shrinking"},
            { value: "Carrying out resistance welding on sheet metals"},
            { value: "Carrying out resistance welding on thin metals"},
            { value: "Carrying out dismantling of body attachments"},
            { value: "Carrying out straightening of the bent vehicle frames"},
            { value: "Carrying out welding of rusted parts"},
            { value: "Carrying out mild steel arc cutting"},
            { value: "Carrying out the alignment of vehicle body panels"},
            { value: "Carrying out sanding of vehicle body panels"},
            { value: "Carrying out gas cutting on thin metal plates"},
            { value: "Carrying out gas cutting on thick metal plates"},
            { value: "Carrying out plastic filling on rigid body panel"},
            { value: "Carrying out fibre glass filling"},
            { value: "Carrying out painting on the exterior body panel"},
            { value: "Carrying out painting on the interior body panel"},
            { value: "Servicing catalytic converter"},
            { value: "Repairing leakage on exhaust pipe/muffler"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2025). Auto Body Repair for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Performing advanced gas welding on vehicle body panel"},
            { value: "Performing repair of accident body panel"},
            { value: "Performing resistance welding"},
            { value: "Performing straightening of bent body frame"},
            { value: "Performing repair of the rusted body part"},
            { value: "Performing alignment of vehicle body panels"},
            { value: "Performing thick metal cutting by gas flame"},
            { value: "Performing vehicle body plastic filling"},
            { value: "Performing painting on a vehicle body panel"},
            { value: "Maintaining emission control system"},
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
        } else if (subject === "Bible Knowledge") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Explain the term Gospel and Jewish institutions"},
            { value: "Discuss the authorship of the Gospel according to Luke (author, recipients and purpose)"},
            { value: "Discuss the themes of the Gospel according to Luke (salvation for all, the work of the Holy Spirit, worship and praise, the role of women, the Gospel of the lost and the Gospel of prayer)"},
            { value: "Identify the methods used by Jesus in his Ministry (parables and miracles)"},
            { value: "Use the Gospel according to Luke to defend human rights"},
            { value: "Discuss how the themes in the Gospel according to Luke relate to daily life (choose one theme for course work/project to be submitted in Form IV)"},
            { value: "Explain the concept of family"},
            { value: "Discuss the characteristics of the families found in the Gospel according to Luke"},
            { value: "Use the Gospel according to Luke to discuss good parental care"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of the Holy Scripture in the Gospel according to Luke"},
            { value: "Use the Gospel according to Luke to appreciate the importance of family life"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Bible Knowledge for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate an understanding of devotion to God as revealed in the Bible"},
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
            { value: "Describe coordination in plants (tropic responses) and animals (nervous coordination in human, structure of neurones, sense organs and endocrine system)"},
            { value: "Describe the mechanism of excretion in the human body (systems: organs, products)"},
            { value: "Describe the mechanism of regulation in the human body (temperature regulation, blood sugar regulation and osmoregulation)"},
            { value: "Investigate the process of nervous coordination (reflex arc and knee jerk)"},
            { value: "Investigate tropic responses in plants"},
            { value: "Develop and carry out a simple research project in Biology"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Describe the physiological, anatomical and ecological processes of living organisms"},
            { value: "Demonstrate mastery of basic skills for conducting biological investigations"},
            { value: "Carry out a biological project work using biological principles"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Biology for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the concepts, principles and processes of Biology"},
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
        } else if (subject === "Book-Keeping") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe control accounts"},
            { value: "Prepare Purchases and Sales Ledgers as further controls of the arithmetical accuracy of ledger accounts"},
            { value: "Describe the necessary adjustments needed in the preparation of financial statements (depreciation, bad debts and doubtful debts)"},
            { value: "Prepare a comprehensive income statement with adjustments"},
            { value: "Estimate profit or loss for the period from incomplete records"},
            { value: "Differentiate between capital and revenue expenditures and their effect on financial statements"},
            { value: "Prepare a comprehensive statement of financial position"},
            { value: "Describe For-Profit, Not-For Profit and Non-Profit organizations (motive, owners, management, sources of income, accounting etc.)"},
            { value: "Describe important items relating to the accounting of Not-For Profit organizations"},
            { value: "Prepare the relevant accounts for Not-For Profit organizations (receipts and payments accounts, Income and expenditure statements and a statement of financial position)"},
            { value: "Describe the basis of accounting (cash basis and accrual basis)"},
            { value: "Adjust various recorded business transactions in the financial statements based on appropriate accounting basis (accruals and pre-payments)"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Prepare a Trial balance"},
            { value: "Prepare basic profit or loss statements"},
            { value: "Prepare basic business financial position statements"},
            { value: "Demonstrate an understanding of commercial and non-commercial organisations"},
            { value: "Prepare financial statements of non-commercial organisations"},
            { value: "Adjust records in financial statements"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Book-Keeping for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the principles of Book-keeping"},
            { value: "Prepare basic financial statements"},
            { value: "Prepare financial statements for non-commercial institutions"},
            { value: "Demonstrate mastery of financial assets control"},
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
        } else if (subject === "Business Studies") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the basic aspects of marketing for small businesses (meaning and importance, product, price, place/distribution, promotion)"},
            { value: "Describe the basic aspects of e-marketing for small businesses (upload business biography in social media)"},
            { value: "Explore the basic aspects of the policy and regulatory environment governing small businesses in Tanzania (roles of government and non-governmental agencies, policies, laws and by-laws)"},
            { value: "Describe procedures for registering small businesses in Tanzania (types of licenses, importance of registration and sanctions for non-compliance)"},
            { value: "Develop a plan for a small business identified from the opportunities in Form II (identification, financing, production and distribution, and marketing)"},
            { value: "Describe the basic tenets of ethics for small businesses (meaning, norms, and values)"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of the concepts, theories and principles of Business Education"},
            { value: "Demonstrate mastery of the basic skills of operating a small-scale business"},
            { value: "Apply business theories into practice"},
            { value: "Demonstrate mastery of basic business ethics"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Business Studies for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of business knowledge"},
            { value: "Solve social challenges using business skills"},
            { value: "Apply business knowledge in various contexts"},
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
        } else if (subject === "Chemistry") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the mole concept (comparison of the mole with other units of measurements and molar quantities of substances)"},
            { value: "Explain Avogadro’s law in relation to molar quantities"},
            { value: "Explain the principles of volumetric analysis (preparation of standard solutions and volumetric calculations)"},
            { value: "Describe the applications of volumetric analysis in real life and industrial settings as in soft drinks and cocktail making, medicine and in agriculture"},
            { value: "Explore the basic tenets of ionic theory and electrolysis (ionic theory, mechanism of electrolysis and laws of electrolysis)"},
            { value: "Describe the preparation and properties of various compounds of metals (oxides, hydroxides, carbonates, hydrogen carbonates, nitrates, chlorides and sulphates of metals)"},
            { value: "Describe the oxidizing and displacement properties of non-metal compounds (oxygen, hydrogen, chlorine, hydrogen chloride, sulphur dioxide, nitrogen, ammonia, and carbon dioxide)"},
            { value: "Perform experiments on volumetric analysis"},
            { value: "Perform experiments on the applications of electrolysis in corrosion inhibition and purification of metals"},
            { value: "Use appropriate software to sketch the set-ups of experiments"},
            { value: "Prepare various compounds of metals (oxides, hydroxides, carbonates, hydrogen carbonates, nitrates, chlorides, and sulphates)"},
            { value: "Demonstrate oxidizing and displacement properties of non-metallic compounds (oxygen, hydrogen, chlorine, hydrogen chloride, sulphur dioxide, nitrogen, ammonia and carbon dioxide)"},
            { value: "Prepare sulphuric acid from sulphur dioxide"},
            { value: "Describe the extraction of iron from its ore (ores, stages, and methods of extraction)"},
            { value: "Design and carry-out a simple research project in Chemistry"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of concepts, theories and principles in Chemistry"},
            { value: "Conduct experiments in Chemistry"},
            { value: "Demonstrate mastery of the principles of extraction of metals"},
            { value: "Conduct a project in Chemistry"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Chemistry for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of basic concepts, theories and principles in Chemistry"},
            { value: "Conduct experiments in Chemistry"},
            { value: "Demonstrate mastery of basic principles of extraction of metals"},
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
        } else if (subject === "Chinese Language") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Listen to Chinese words in pinyin while observing appropriate sequencing of tones"},
            { value: "Participate in a conversation while observing appropriate sequencing of tones"},
            { value: "Write the Chinese character with 14-15 strokes"},
            { value: "Write new words associated with the market environment"},
            { value: "Construct simple oral sentences using new words associated with the market environment"},
            { value: "Write simple sentences using new words associated with the market environment"},
            { value: "Listen and respond to simple sentences"},
            { value: "Use different words to construct simple oral sentences"},
            { value: "Write simple sentences using different words"},
            { value: "Participate in a simple conversation in different communicative settings"},
            { value: "Listen to a simple text and identify new words used in it"},
            { value: "Read a simple text and summaries the main ideas from it"},
            { value: "Read a simple story and re-tell it using own words"},
            { value: "Listen and respond to complex orders in a market setting"},
            { value: "Read different posters in the market and react accordingly"},
            { value: "Read accurately complex sentences using standard speed, correct tone, pronunciation and punctuation marks"},
            { value: "Read aloud simple sentences in various contexts"},
            { value: "Participate in a conversation about family relationships and occupations"},
            { value: "Write simple guided paragraphs using appropriate punctuation marks"},
            { value: "Translate complex sentences"},
            { value: "Translate simple texts"},
            { value: "Translate simple sentences"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Develop awareness of Chinese phonemes, initial, final, tone and characters"},
            { value: "Master the correct Chinese vocabulary in various contexts"},
            { value: "Develop the use of appropriate grammar and vocabulary in conversation and writing"},
            { value: "Develop the ability to listen and understand information"},
            { value: "Develop the ability to read and understand various texts"},
            { value: "Show the right response in various communicative contexts"},
            { value: "Develop the ability to read correctly various texts"},
            { value: "Develop the ability to communicate orally"},
            { value: "Develop the ability to communicate accurately in writing in various contexts"},
            { value: "Provide simple and accurate translation"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Chinese Language for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Master basic Chinese language skills"},
            { value: "Demonstrate understanding of information in conversation and writing"},
            { value: "Communicate effectively in a variety of contexts"},
            { value: "Translate and interpret simple information"},
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
        } else if (subject === "Computer Application") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Performing document creation and formatting"},
            { value: "Performing image insertion, editing and use graphics and design elements"},
            { value: "Performing typography and font management"},
            { value: "Designing office and business products"},
            { value: "Conducting internet search"},
            { value: "Working with email application"},
            { value: "Administering social media accounts"},
            { value: "Administering webinars and virtual meetings"},
            { value: "Creating online forms and surveys"},
            { value: "Working with cloud storage and file sharing"},
            { value: "Recognising internet threats"},
            { value: "Using virtual private network (VPN) and proxy"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Working with desktop publishing"},
            { value: "Administering internet applications"},
            { value: "Administering internet safety"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2025). Computer Application for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Office application"},
            { value: "Implementing internet and digital marketing"},
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
        } else if (subject === "Computer Programming") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Collecting requirements"},
            { value: "Analysing requirements"},
            { value: "Modelling use cases"},
            { value: "Designing system architecture"},
            { value: "Designing data models"},
            { value: "Designing user interface"},
            { value: "Identifying web frameworks"},
            { value: "Setting up web development tools"},
            { value: "Performing installation and configuration of a framework"},
            { value: "Creating a basic project"},
            { value: "Implementing components and layouts"},
            { value: "Performing customisation of styles"},
            { value: "Implementing user interactions"},
            { value: "Implementing routing and handling of user requests"},
            { value: "Implementing interaction with databases"},
            { value: "Implementing authentication and authorisation"},
            { value: "Defining classes and creating objects"},
            { value: "Organising programs using constructors"},
            { value: "Constructing real-world models using classes and objects"},
            { value: "Implementing inheritance"},
            { value: "Implementing overriding parent class methods"},
            { value: "Implementing encapsulation of class attributes and methods"},
            { value: "Implementing abstraction of functionalities using abstract classes and method"},
            { value: "Designing abstract classes for common behaviour"},
            { value: "Implementing polymorphism with abstract classes or interfaces"},
            { value: "Performing overriding methods to implement polymorphic behaviour"},
            { value: "Performing exploration of features and tools of the event-driven language IDE"},
            { value: "Creating basic programs using event-driven language"},
            { value: "Constructing reusable functions"},
            { value: "Implementing single-dimensional and multi-dimensional arrays"},
            { value: "Using control structures to traverse and process arrays"},
            { value: "Designing forms with basic controls"},
            { value: "Incorporating menus to forms"},
            { value: "Implementing menu items to execute specific tasks"},
            { value: "Implementing event handling for controls"},
            { value: "Establishing a connection of event-driven programs to a database"},
            { value: "Performing basic CRUD operations using SQL queries"},
            { value: "Showing database records on forms"},
            { value: "Generating reports from database data"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Identifying and analysing software development requirements"},
            { value: "Building structures of the software"},
            { value: "Identifying and setting up a web development environment"},
            { value: "Building the front-end using a framework"},
            { value: "Building the back-end using a framework"},
            { value: "Creating basic programs using classes and objects"},
            { value: "Creating programs with inheritance and method overriding"},
            { value: "Implementing encapsulation and abstraction"},
            { value: "Implementing polymorphism with interfaces and abstract classes"},
            { value: "Working with IDE and event-driven language"},
            { value: "Developing programs using functions and arrays"},
            { value: "Designing form with menus controls"},
            { value: "Creating database connectivity options and reporting"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2025). Computer Programming for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "System analysis and design"},
            { value: "Web programming frameworks"},
            { value: "Basics of object-oriented programming"},
            { value: "Event-driven programming"},
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
            { value: "Describe the concept of data representation (digital data, number systems, data type, character coding (UNICODE and ASCII))"},
            { value: "Represent numbers in different number systems (binary, octal, decimal, and hexadecimal)"},
            { value: "Convert numbers from one system to another (binary, decimal, and hexadecimal)"},
            { value: "Perform arithmetic operations (addition and subtraction) using binary numbers"},
            { value: "Use the syntax and constructs of selected programming language to write program (iteration, functions, array, and string)"},
            { value: "Use scope of variable in a program"},
            { value: "Test and debug computer program that employs iteration, array, string, branching and functions"},
            { value: "Appraise the utility of the developed program"},
            { value: "Describe the concept of computer network (meaning, mode, media, components, etc.)"},
            { value: "Design a simple computer network involving a typical topology"},
            { value: "Create a computer network involving typical topology"},
            { value: "Describe the concept of data and information"},
            { value: "Manage simple data (create, store, retrieve, check data quality)"},
            { value: "Describe the concept of database and database management system"},
            { value: "Design a database"},
            { value: "Create a database using selected software (e.g., MS – Access)"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the basic principles of computer architecture"},
            { value: "Demonstrate an understanding of basic principles of computer programming (using an appropriate structured programming language such as C, python, etc.)"},
            { value: "Demonstrate an understanding of the basics of computer networks"},
            { value: "Demonstrate the mastery of basic principles of databases and database management systems"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Computer Science for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the basic Concepts of Computer Science"},
            { value: "Demonstrate mastery of the basic principles of Computer Science"},
            { value: "Demonstrate mastery of the basic principles of data management"},
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
        } else if (subject === "Costume and Makeup Design") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Construct costumes for theatrical production according to the demands of the production (measurements and materials)"},
            { value: "Perform costume fitting schedule (conduct fittings of costumes and costume rehearsal, perform adjustment as needed)"},
            { value: "Demonstrate mastery of hygiene and safety in costume production"},
            { value: "Develop appropriate costumes for television drama"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of the principles of costume and makeup design"},
            { value: "Adhere to health and safety principles in designing costumes and makeup"},
            { value: "Design costumes and makeup for a theatre artist"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Costume and Makeup Design for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Design costumes and makeup for a theatre artist"},
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
        } else if (subject === "Drawing and Painting") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Create observational drawing compositions of selected figures by using pencil, charcoal, pen and ink"},
            { value: "Create imaginative drawing compositions based on selected themes by using pencil, charcoal, pen and ink"},
            { value: "Create observational and imaginative drawing compositions of selected themes by using CAD software"},
            { value: "Create observational painting compositions of selected figures by using water and oil based colours painting compositions"},
            { value: "Create imaginative painting compositions based on selected themes by using water and oil based colours"},
            { value: "Create observational and imaginative painting compositions of selected themes by using CAD software"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Create drawings"},
            { value: "Create paintings"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Drawing and Painting for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Master Drawing and Painting"},
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
        } else if (subject === "Elimu ya Dini ya Kiislam") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Kuchambua nguzo ya kuamini malaika wa Allaah (S.W) (maana, umuhimu, sifa, kazi na athari ya kuamini malaika katika maisha ya kila siku)"},
            { value: "Kuchambua nguzo ya kuamini vitabu vya Allaah (S.W) (umuhimu wa kuamini vitabu vya Allaah (S.W), lengo la vitabu vya Allaah (S.W), tofauti ya Qur’an na vitabu vingine vya Allaah (S.W), Qur’an haipitwi na wakati, athari ya kuamini vitabu vya Allaah (S.W) katika maisha ya jamii)"},
            { value: "Kuchambua ufahamu wa kuamini mitume wa Allaah (S.W) (uwepo wa mitume, sifa zao, mafundisho yao, mwisho wa utume na taathira ya kuamini mitume katika maisha ya kila siku)"},
            { value: "Kuchambua ufahamu wa kuamini siku ya mwisho (mazingira ya siku ya mwisho, udhaifu wa madai ya makafiri dhidi ya siku ya mwisho, hoja za kuthibitisha kuwepo kwa siku ya mwisho, ufahamu wa shufaa, athari ya kuamini siku ya mwisho katika maisha ya kila siku)"},
            { value: "Kufafanua ufahamu wa kuamini Qadar ya Allaah (S.W) (maana, tofauti ya Qadar na Qudra, umuhimu, na athari ya kuamini Qadar katika maisha ya kila siku)"},
            { value: "Kuchambua ufahamu wa usomaji wa Qur’an (hukumu za lam, hukumu za qalqala, hukumu za mada, hukumu za waqfu)"},
            { value: "Kuchambua ithibati ya Qur’an (tofauti kati ya sura za Makka na sura za Madina, ufahamu wa sababu nuzuli)"},
            { value: "Kuchambua sura zilizoteuliwa: Quraysh (106), Fiil (105), Humazah (104), Asr (103) (kusoma kwa hukumu, kuhifadhi na kutoa mafunzo)"},
            { value: "Kuchambua sayansi ya Hadithi za Mtume Muhammad (S.A.W) (aina, tanzu na uhakiki wa Hadithi)"},
            { value: "Kuchambua Hadithi zilizoteuliwa kuhusu kujiepusha na ria na kujiona, kujiepusha na unafiki, kuwa mwenye huruma, kuwa na haya, kudhibiti hasira, kuwa mwenye subira na uvumilivu, kuwa mkarimu, kuepuka uchoyo na ubakhili, kuwa mwenye kutosheka, kuepuka husda (kusoma kwa kuhifadhi, kuandika, kutafsiri na kung’amua mafunzo)"},
            { value: "Kuchambua nguzo ya Hija (maana, aina, umuhimu, masharti, nguzo na sunnah)"},
            { value: "Kutathmini malengo ya nguzo za Uislamu (namna lengo la kila nguzo linavyofikiwa, sababu za baadhi ya Waislamu kutofikia malengo ya nguzo za Uislamu)"},
            { value: "Kuchanganua faida za utekelezaji wa nguzo za Uislamu"},
            { value: "Kufafanua ufahamu wa talaka na eda katika Uislamu (maana, hekima ya talaka, sulhu kati ya mume na mke, aina za talaka, taratibu za talaka, aina za eda)"},
            { value: "Kuchambua malezi ya watoto baada ya ndoa kuvunjika (mwenye haki na wajibu wa kulea, ukomo wa kulelewa watoto na haki zao)"},
            { value: "Kuchambua ufahamu wa wasia na mirathi katika Uislamu (maana, taratibu, masharti ya wasia na mirathi, kanuni za kugawa mirathi na kukokotoa mafungu ya mirathi kwa kufuata sharia ya Kiislamu)"},
            { value: "Kuchambua mipango katika Da`awah (maana, umuhimu, hatua, vigezo, mipango ya kistratejia)"},
            { value: "Kuchambua ufahamu wa uongozi bora katika kulingania (maana, umuhimu, aina na sifa za kiongozi wa Kiislamu)"},
            { value: "Kuchambua mafunzo na mazoezi ya kuwaandaa walinganiaji (kutoa elimu, kuilea nafsi, kujihusisha na masuala ya kijamii, kuandaa na kutoa ujumbe)"},
            { value: "Kuchambua hali ya Uislamu hivi leo (mtawanyo wa Waislamu na wasiokuwa Waislamu, mafanikio ya kielimu, kiuchumi, kisiasa na kijamii, vikwazo na utatuzi wake)"},
            { value: "Kuchambua uanzishwaji na uendeshaji wa dola ya Kiislamu Madina (hali ya Madina kabla ya kuhamia Mtume Muhammad (S.A.W) kiuchumi na kisiasa, hatua alizochukua Mtume Muhammad (S.A.W) katika uanzishaji dola, mifumo ya kiuchumi, kisiasa, usalama na diplomasia)"},
            { value: "Kuchambua upinzani dhidi ya Dola ya Kiislamu Madina (vita vya Badri, vita vya Uhud, vita vya Ahzab, uadui wa Mayahudi, vita vya Hunein, hatua zilizochukuliwa na Mtume Muhammad (S.A.W), mafunzo yatokanayo)"},
            { value: "Kubainisha ushindi wa Waislamu (Fat-hu Makkah) (mkataba wa Hudaybiyya, kukombolewa mji wa Makka, msafara wa Tabuuk, Hija ya kuaga na mafunzo yatokanayo)"},
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
            { value: "Taasisi ya Elimu Tanzania. (2023), Elimu Ya Dini Ya Kiislamu kitabu cha mwanafunzi kwa shule za sekondari kidato cha Tatu, Taasisi ya Elimu Tanzania."},
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
        } else if (subject === "Fasihi ya Kiswahili") {
            var mainOptions = [
            { value: "Chagua Shughuli Kuu"},
            { value: "Kufafanua dhana ya fasihi ya Kiswahili ya kitaifa"},
            { value: "Kuchambua sifa za fasihi ya Kiswahili ya kitaifa kwenye ‘Wimbo wa Taifa’, wimbo wa ‘Tanzania Tanzania’, wimbo wa ‘Tazama Ramani’ na wimbo wa ‘Mashujaa wa Zanzibar’"},
            { value: "Kujadili sifa za fasihi ya kitaifa kwenye fasihi ya watoto"},
            { value: "Kubainisha sifa za fasihi ya kitaifa kwenye ngano"},
            { value: "Kutunga shairi lenye sifa za fasihi ya kitaifa"},
            { value: "Kuhakiki fani na maudhui katika kazi za fasihi ya watoto"},
            { value: "Kuhakiki fani na maudhui ya kifasihi katika filamu za Kiswahili"},
            { value: "Kuhakiki fani na maudhui katika vichekesho"},
            { value: "Kufafanua dhana na vipengele vya ujumi na falsafa ya Kiafrika katika fasihi"},
            { value: "Kubainisha ujumi na falsafa ya Kiafrika katika methali za Kiswahili"},
            { value: "Kuhakiki tamthiliya zenye ujumi na falsafa ya Kiafrika"},
            { value: "Kuchanganua mambo ya kuzingatia wakati wa kujenga hoja kimantiki kutokana na kazi za fasihi"},
            { value: "Kuandika insha za kisanaa zenye hoja za kimantiki"},
            { value: "Kutumia fasihi kuwasilisha hoja kimantiki katika midahalo"},
            { value: "Kufafanua mbinu za kisanaa katika utungaji wa kazi za kifasihi"},
            { value: "Kulinganisha matumizi ya mbinu za kisanaa katika kazi mbalimbali za kifasihi"},
            { value: "Kujadili mbinu za kisanaa katika ngano"},
            { value: "Kufafanua kanuni za utunzi wa mashairi"},
            { value: "Kutunga mashairi sahili"},
            { value: "Kufafanua kanuni za utunzi wa kazi za fasihi ya watoto"},
            { value: "Kutunga kazi sahili za fasihi ya watoto"},
            ];

            var competenceOptions = [
            { value: "Chagua Umahiri Mahususi"},
            { value: "Kuonesha uelewa wa kazi za fasihi ya Kiswahili ya kitaifa"},
            { value: "Kuhakiki kazi mbalimbali za fasihi ya Kiswahili"},
            { value: "Kujenga ujumi na falsafa ya Kiafrika katika kazi za fasihi"},
            { value: "Kutumia kazi za fasihi katika kujenga hoja zenye mantiki"},
            { value: "Kutathmini mbinu za kisanaa za utunzi wa kazi za kifasihi"},
            { value: "Kutunga kazi sahili za kifasihi"},
            ];

            var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Taasisi ya Elimu Tanzania. (2023). Fasihi ya Kiswahili kitabu cha mwanafunzi kwa shule za sekondari kidato cha tatu. Taasisi ya Elimu Tanzania."},
            ];

            var topicsOptions = [
            { value: "Chagua Umahiri Mkuu"},
            { value: "Kuthamini kazi za fasihi ya Kiswahili"},
            { value: "Kujenga ujumi kutokana na kazi za fasihi"},
            { value: "Kubuni kazi za fasihi"},
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
        } else if (subject === "Fine Art") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the basic tenets of perspective composition"},
            { value: "Explain theories of imitationalism and emotionalism (meaning, purpose and uses)"},
            { value: "Create perspective drawings"},
            { value: "Create perspective paintings"},
            { value: "Create functional and decorative relief prints"},
            { value: "Create contemporary drawings by collaging"},
            { value: "Create contemporary paintings by collaging"},
            { value: "Create realistic two-dimensional drawings"},
            { value: "Create realistic two-dimensional paintings"},
            { value: "Describe the basic ethical norms and values governing creation of art works"},
            { value: "Describe aspects of the copyright laws of Tanzania dealing with artworks"},
            { value: "Describe the process of registering artworks according to the copyright laws of Tanzania"},
            { value: "Describe the basic strategies for marketing artworks (product, promotion, price and place)"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the concepts, theories and the principles of Fine Art"},
            { value: "Make decorations"},
            { value: "Use traditional and modern techniques to create works of art"},
            { value: "Create realistic art content"},
            { value: "Demonstrate an understanding of ethical conduct in Fine Art"},
            { value: "Use ICT to market works of Fine Art"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Fine Art for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of concepts, theories and principles of Fine Art"},
            { value: "Create simple works of Fine Art"},
            { value: "Demonstrate mastery of the principles of occupational health and environmental care in Fine Art"},
            { value: "Use ICT to market works of Fine Art"},
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
        } else if (subject === "Food and Human Nutrition") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe different types of food (eggs, fish, meat, milk and milk products)"},
            { value: "Describe different raising agents and their application in cookery"},
            { value: "Explore the effects of dietary habits on the nutritional status of different groups of people in the society"},
            { value: "Describe different methods of preparing eggs, fish, meat, milk and milk products, vegetables and fruits dishes"},
            { value: "Prepare eggs, fish, meat, milk and milk products, vegetables and fruits dishes"},
            { value: "Describe different methods of preparing bread, cakes, biscuits and buns"},
            { value: "Use raising agents in preparing different types of dishes (bread, cakes, biscuits and buns)"},
            { value: "Prepare balanced meals for people with different nutritional needs (children, expectant and lactating mothers, adolescents, invalids and convalescents, vegetarians and the elderly)"},
            { value: "Design and carry out a project in Food and Nutrition"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of the principles of cookery"},
            { value: "Demonstrate an understanding of the relationship between health and nutrition"},
            { value: "Prepare a balanced meal based on different foods"},
            { value: "Prepare a balanced meal for people with different nutritional needs"},
            { value: "Conduct a project in Food and Nutrition"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Food and Human Nutrition for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the basic principles of Food and Nutrition"},
            { value: "Demonstrate mastery of the relationship between health and nutrition"},
            { value: "Prepare different dishes"},
            { value: "Carry out a project in Food and Nutrition"},
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
        } else if (subject === "French") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Écouter un message et le paraphraser"},
            { value: "Lire les textes des sujets variés et faire la présentation"},
            { value: "Réagir de manière appropriée à des messages transmis oralement"},
            { value: "Réagir de manière appropriée à des messages transmis à l’écrit"},
            { value: "Utiliser des caractéristiques de la langue parlée et écrite (lexique, morphosyntaxe, accent, signes de ponctuation, signes orthographiques) pour s’exprimer"},
            { value: "Utiliser de manière appropriée la langue parlée et écrite dans des contextes variés"},
            { value: "Participer dans des dialogues/ conversations de sujets variés"},
            { value: "Rédiger des textes sur des sujets divers"},
            { value: "Rédiger des lettres formelles"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Développer la compréhension des informations présentées oralement"},
            { value: "Développer la compréhension des informations présentées à l’écrit"},
            { value: "Réagir de manière appropriée dans des contextes familiers de communication"},
            { value: "Maîtriser des caractéristiques de la langue parlée et écrite"},
            { value: "Communiquer oralement de manière appropriée dans divers contextes/ situations"},
            { value: "Communiquer à l’écrit de manière appropriée dans divers contextes"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). French for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Comprendre des informations orales et écrites"},
            { value: "Communiquer efficacement dans divers contextes/ situations"},
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
            { value: "Select Main Activity"},
            { value: "Describe the major climatic regions of the world (tropical, temperate, polar and sub-tropical)"},
            { value: "Describe the relationship between major features of the Earth’s surface, climate, and natural vegetation"},
            { value: "Explore the basic tenets of surveying (meaning, types, equipment, methods, and importance)"},
            { value: "Carry out simple tape/chain surveying"},
            { value: "Develop and carry out a simple research project in Geography"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the relationship between relief, climate and natural vegetation"},
            { value: "Demonstrate an understanding of the basic techniques in land surveying"},
            { value: "Carry out a project in Geography"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Geography for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of the structure of the Earth"},
            { value: "Demonstrate mastery of basic skills and techniques in Geography"},
            { value: "Demonstrate mastery of human geography"},
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
            { value: "Select Main Activity"},
            { value: "Kufafanua chimbuko la Muungano wa Tanganyika na Zanzibar"},
            { value: "Kueleza muundo na misingi ya Muungano wa Tanganyika na Zanzibar"},
            { value: "Kutathmini Muungano wa Tanganyika na Zanzibar katika kujenga umoja na maadili ya Kitaifa"},
            { value: "Kujadili chimbuko la Azimio la Arusha"},
            { value: "Kufafanua misingi na mchango wa Azimio la Arusha katika ujenzi wa Taifa kiuchumi, kisiasa, kijamii na kimaadili"},
            { value: "Kutathmini changamoto za Azimio la Arusha kiuchumi, kisiasa, kijamii na kimaadili"},
            { value: "Kufafanua dhana ya uhusiano wa kikanda na ujenzi wa Taifa"},
            { value: "Kueleza mchango wa Tanzania katika kukuza uhusiano wa kikanda na kujenga utaifa (EAC & SADC)"},
            { value: "Kubaini changamoto za uhusiano wa kikanda katika ujenzi wa Taifa"},
            { value: "Kubaini changamoto yoyote ya kihistoria iliyopo katika jamii, kisha kuandaa kazimradi ili kupata ufumbuzi"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Kumudu historia ya Muungano wa Tanganyika na Zanzibar"},
            { value: "Kuchambua chimbuko la Azimio la Arusha na matokeo yake kiuchumi, kisiasa, kiutamaduni na kimaadili"},
            { value: "Kueleza nafasi ya Tanzania katika kujenga uhusiano wa kikanda"},
            { value: "Kufanya kazimradi ya historia ya Tanzania na maadili"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Taasisi ya Elimu Tanzania. (2023). Historia Ya Tanzania na Maadili kitabu cha mwanafunzi kwa shule za sekondari kidato cha tatu. Taasisi ya Elimu Tanzania"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Kumudu historia ya ujenzi wa Taifa na maadili yake katika kipindi cha 1961-1966"},
            { value: "Kutathmini ujenzi wa Taifa na maadili wakati wa Azimio la Arusha, 1967-1985"},
            { value: "Kufanya kazimradi ya historia ya Tanzania na maadili"},
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
            { value: "Describe the development of capitalism in Europe and its impact on Africa"},
            { value: "Discuss colonial administrative systems in Africa (German, French, British and Portuguese)"},
            { value: "Discuss colonial economic systems in Africa (Establishment, characteristics, sectors, labour issues)"},
            { value: "Assess the nature and patterns of colonial social services in Africa"},
            { value: "Relate colonial economic, political, infrastructure, and education systems in Africa with the current African systems"},
            { value: "Describe nationalist movements in Africa"},
            { value: "Assess the rise of nationalist movements in Africa"},
            { value: "Appraise the lessons drawn from the nationalist movements in Africa"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the development of capitalism and its impact on Africa"},
            { value: "Demonstrate an understanding of colonial systems in Africa"},
            { value: "Demonstrate an understanding of the history of nationalist movements in Africa"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). History for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of the relationship between capitalism and Africa"},
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
        } else if (subject === "Kiarabu") {
            var mainOptions = [
            { value: "Chagua Shughuli Kuu"},
            { value: "Kuelezea kwa mdomo na kwa maandishi vitu vilivyomo kwenye mazingira ya karibu kwa kutumia msamiati stahiki"},
            { value: "Kusimulia kwa mdomo na kwa maandishi matukio yaliyotokea katika miktadha inayofahamika"},
            { value: "Kutumia herufi-maana (nawaasibu na jawaazim) katika matini"},
            { value: "Kusikiliza na kubainisha mawazo makuu kutokana na mahojiano mbalimbali"},
            { value: "Kutoa maoni katika miktadha ya mawasiliano isiyo rasmi"},
            { value: "Kuomba na kutoa huduma kwa kutumia lugha rahisi katika miktadha mbalimbali (ofisini, uhamiaji, dukani, ushauri na unasihi)"},
            { value: "Kusoma na kubainisha wazo kuu kutokana na matini sahili"},
            { value: "Kusoma na kufupisha matini sahili"},
            { value: "Kuandika nyaraka mbalimbali zisizo rasmi"},
            { value: "Kutafsiri aina mbalimbali za matini sahili"},
            { value: "Kukalimani ujumbe sahili kwenye mazingira yasiyo rasmi"},
            { value: "Kukalimani ujumbe sahili kwenye mazingira rasmi"},
            ];

            var competenceOptions = [
            { value: "Chagua Umahiri Mahususi"},
            { value: "Kumudu msamiati kutokana na mazungumzo na maandishi"},
            { value: "Kutumia msamiati na sarufi sahihi katika mazungumzo na maandishi"},
            { value: "Kukuza umahiri wa kusikiliza na kuelewa taarifa zinazowasilishwa kwa mdomo"},
            { value: "Kuonesha mwitiko sahihi katika miktadha mbalimbali ya kimawasiliano"},
            { value: "Kukuza umahiri wa kusoma na kuelewa matini mbalimbali kwa usahihi"},
            { value: "Kuunda matini fasaha katika miktadha mbalimbali"},
            { value: "Kutoa tafsiri sahili na sahihi"},
            { value: "Kumudu ukalimani sahili kwa usahihi"},
            ];

            var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Taasisi ya Elimu Tanzania. (2023). Kiarabu kitabu cha mwanafunzi kwa shule za sekondari kidato cha tatu. Taasisi ya Elimu Tanzania."},
            ];

            var topicsOptions = [
            { value: "Chagua Umahiri Mkuu"},
            { value: "Kuonesha uelewa wa stadi za msingi za lugha ya Kiarabu"},
            { value: "Kuonesha uelewa wa taarifa zilizowasilishwa kwa mdomo na kwa maandishi"},
            { value: "Kuwasiliana kwa ufanisi katika miktadha mbalimbali"},
            { value: "Kutafsiri, kuhariri na kukalimani taarifa sahili"},
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
        } else if (subject === "Life Skills") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the concept of career planning"},
            { value: "Develop health and wellbeing for career success"},
            { value: "Describe the relationship between education, skills, and career success"},
            { value: "Develop professional resume writing (Curriculum Vitae-CV)"},
            { value: "Understand personal branding"},
            { value: "Understand how to write a cover letter (application letter)"},
            { value: "Develop the concept of an interview"},
            { value: "Describe the concept of global citizenship"},
            { value: "Understand the relationship between social media and global citizenship"},
            { value: "Build civic engagement and global activities"},
            { value: "Describe global awareness"},
            { value: "Enhance the relationship between global education and career choice"},
            { value: "Understand the concept of human rights"},
            { value: "Understand the rights and responsibilities of human rights"},
            { value: "Understand global human rights challenges"},
            { value: "Advocate for human rights"},
            { value: "Describe the concept of public speaking"},
            { value: "Prepare for public speaking"},
            { value: "Overcome public speaking fear"},
            { value: "Master audience awareness"},
            { value: "Build and maintain connection with the audience during public speaking"},
            { value: "Handle a disengaged audience"},
            { value: "Develop a positive mindset"},
            { value: "Describe the concept of work habit"},
            { value: "Build positive work habits"},
            { value: "Develop a routine for increasing productivity"},
            { value: "Master self-control and willpower"},
            { value: "Overcome obstacles and setbacks"},
            { value: "Describe the concept of focus and concentration"},
            { value: "Describe single-tasking and multitasking in productivity"},
            { value: "Develop cognitive overload management"},
            { value: "Build emotional regulation in the workplace"},
            { value: "Develop continuous learning"},
            { value: "Describe formal and informal learning"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Introducing career planning"},
            { value: "Writing resume and personal branding"},
            { value: "Building the concept of global citizenship"},
            { value: "Enhancing social media and global citizenship"},
            { value: "Developing global awareness"},
            { value: "Introducing human rights"},
            { value: "Addressing global human rights challenges"},
            { value: "Enhancing public speaking"},
            { value: "Audience awareness and engagement"},
            { value: "Introducing work habit"},
            { value: "Enhancing discipline and consistency"},
            { value: "Building focus and concentration"},
            { value: "Enhancing continuous learning and improvement"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Life Skills for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Building career and professional skills"},
            { value: "Developing global citizenship"},
            { value: "Human rights"},
            { value: "Public speaking skills"},
            { value: "Work habit"},
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
        } else if (subject === "Literature In English") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Explain the concept of literature and its functions"},
            { value: "Explain the concepts of oral and written literature"},
            { value: "Relate people’s life experiences with folktales, songs, riddles, proverbs, fables and idioms from the Tanzanian context"},
            { value: "Reflect on the characters’ actions, attitudes and experiences in selected novels"},
            { value: "Explain the concepts of multiculturalism and self-consciousness in the context of literature"},
            { value: "Reflect on one’s cultural values against those depicted in selected novels"},
            { value: "Assess the development of the protagonist and antagonist characters in selected novels"},
            { value: "Explain the concepts of values, perspectives and identities"},
            { value: "Reflect on the characters’ perspectives, and values against one’s own"},
            { value: "Analyse narrative techniques and stylistic devices in selected literary texts"},
            { value: "Explain the significance of narrative techniques and stylistic devices in selected novels"},
            { value: "Discuss literary devices which evoke emotions in selected novels"},
            { value: "Discuss the roles of observation, analysis, inference, communication and problem-solving in literature"},
            { value: "Assess the relationship among characters in selected novels"},
            { value: "Discuss the lessons derived from the choices and decisions of characters in selected novels"},
            { value: "Identify major themes in the selected novels"},
            { value: "Analyse themes such as corruption and bribery in selected novels"},
            { value: "Justify the actions and context of characters in relation to themes in selected novels"},
            { value: "Discuss the relationship between the title and messages in selected novels"},
            { value: "Discuss the relevance of the novel to one’s society"},
            { value: "Discuss forms of poetry and figurative language"},
            { value: "Analyse themes portrayed in selected poems"},
            { value: "Discuss lessons derived from selected poems"},
            { value: "Apply literary skills to compose a poem"},
            { value: "Explain the concepts of antithesis, anticlimax, paradox, irony, unreliable narrator and suspense in literary works"},
            { value: "Discuss the relationship between the title and the content of selected plays"},
            { value: "Discuss the effect of ironical titles in selected plays"},
            { value: "Explain the concepts of creativity and visualization in literary composition"},
            { value: "Make a plan for composing a poem (decide what to write about, determine the best format, explore words, rhymes, and rhythm)"},
            { value: "Apply writing skills to compose a poem"},
            { value: "Apply ICT tools and digital platforms in writing and publishing a poem"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate empathy for other people’s experiences nationally and globally"},
            { value: "Appreciate multiculturalism and develop self-consciousness"},
            { value: "Reflect values, perspectives and identities, and the impact of beliefs and actions on society"},
            { value: "Appreciate the use of literary devices in the works of art"},
            { value: "Apply critical thinking when reading, discussing and writing about literary texts"},
            { value: "Justify interpretations based on evidence and logic"},
            { value: "Synthesize literary characteristics, themes, and/or approaches in several literary texts"},
            { value: "Recognise ambiguity and uncertainty as necessary in creating literary works"},
            { value: "Create imaginative and original literary works"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Literature in English for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Develop awareness of and empathy with national and global literary works"},
            { value: "Appreciate different implications and layers of meaning in literary works"},
            { value: "Compose literary works"},
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
            { value: "Describe the concepts of relations and functions (linear and quadratic) (types of relations, domain and range of relations, graphs of relations and functions, inverse of relations, and functions)"},
            { value: "Find the domain and range of relations and functions"},
            { value: "Find the inverses of relations and functions"},
            { value: "Draw graphs of relations and functions"},
            { value: "Explore the basic tenets of algebra (linear programming: constraints, objective functions, and optimal solution)"},
            { value: "Explore the basic tenets of sequences and series (Arithmetic progression AP, Geometric progression GP)"},
            { value: "Find the general term for AP and GP and use them to derive formulae for the sums of APs and GPs"},
            { value: "Calculate arithmetic mean, geometric mean, and compound interest"},
            { value: "Explore the basic tenets of a circle (angle properties, theorems, tangents, chords and radians)"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Use geometry, approximations, relations and functions in various contexts"},
            { value: "Use algebra and matrices in problem solving"},
            { value: "Use sets, sequences and series in problem solving"},
            { value: "Use basic skills of circles in daily life"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Mathematics for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select Main Competence"},
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
        } else if (subject === "Music") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the fundamentals of reading and writing music based on ABRSM Music Theory Grade III (rhythm, staff notation, melody and harmony, and musical terms and signs)"},
            { value: "Explain theories related to the existence of music in particular Tanzanian communities"},
            { value: "Compose short songs in two-part harmony in English"},
            { value: "Sing short songs in two-part harmony"},
            { value: "Play selected local and foreign string instruments to accompany short songs"},
            { value: "Describe the basic tenets of the ethics, norms and values governing the music industry in Tanzania"},
            { value: "Identify music notation software used in writing music"},
            { value: "Apply music notation software to write short songs in a single staff"},
            { value: "Analyse recording procedures in a music studio"},
            { value: "Describe the copyright laws of Tanzania pertaining to the music industry"},
            { value: "Archive simple works of music while observing copyright laws of Tanzania"},
            { value: "Use social media platforms to promote works of music"},
            { value: "Design and carry out a research project on business opportunities in music"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the principles of reading and writing music"},
            { value: "Demonstrate an understanding of the concepts, theories and principles of music"},
            { value: "Sing local and foreign songs"},
            { value: "Play local and foreign musical instruments"},
            { value: "Demonstrate an understanding of ethical conduct in the music industry"},
            { value: "Use ICT programmes to write music"},
            { value: "Use ICT in music production"},
            { value: "Use ICT to store works of music"},
            { value: "Use ICT to market works of music"},
            { value: "Conduct a research project on business opportunities in music"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Music for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of concepts, theories and principles of music"},
            { value: "Create and perform music"},
            { value: "Demonstrate mastery of the use of ICT in music"},
            { value: "Carry out a project in Music"},
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
        } else if (subject === "Pottery and Ceramics") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Produce clay objects using potter's wheel and glaze them"},
            { value: "Produce functional objects using cement plaster"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Create Pottery and Ceramics"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Pottery and Ceramics for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Master Pottery and Ceramics"},
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
        } else if (subject === "Sport Studies") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the basic norms and values in sports in the Tanzanian context"},
            { value: "Describe different skills, techniques, safety measures and rules in selected sports (basketball and table tennis; optional tennis or badminton)"},
            { value: "Play selected sports by observing skills, techniques, rules and safety principles (basketball and table tennis; optional tennis or badminton)"},
            { value: "Describe common risk behaviours and their effects and mitigation in sports (example: doping and substance abuse)"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of ethical conduct in sports"},
            { value: "Develop skills and techniques in sports"},
            { value: "Demonstrate an understanding of risky behaviour in sports"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Sport Studies for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the concepts, safety and ethical conduct in sports"},
            { value: "Play various sports"},
            { value: "Demonstrate mastery of the fundamentals of health and safety in sports"},
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
        } else if (subject === "Textile Design and Small-Scale Printing") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Create design layout for khanga"},
            { value: "Create design layout for curtains"},
            { value: "Print khanga"},
            { value: "Print curtains"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Create textile designs"},
            { value: "Print and dye fabrics"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Textile Design and Small-Scale Printing for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Master Textile Design and Small-Scale Printing"},
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
        } else if (subject === "Textiles Garment Construction") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe elements and principles of design in garment construction (line, balance, texture, shape, space, colour, emphasis and alignment)"},
            { value: "Prepare a portfolio of different garment designs"},
            { value: "Analyse effect of body figure in choosing the right fabric for garment construction (patterns, line, colour and texture)"},
            { value: "Prepare patterns for a dress, a pair of shorts or trousers (body measurements, drafting, adaption, lay and cut out)"},
            { value: "Make a dress, a pair of shorts or trousers"},
            { value: "Describe various practices for the care of clothes (daily, routine and preventative)"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the fundamentals of garment construction"},
            { value: "Choose the right fabric for different garments"},
            { value: "Make sewing patterns"},
            { value: "Sew simple styles of various garments"},
            { value: "Care for clothes"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Textiles Garment Construction for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the fundamentals of garment construction"},
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
        } else if (subject === "Theatre Arts") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the concept of stage plays (meaning, characteristics, elements and functions)"},
            { value: "Describe the basic theories and fundamental principles of written and improvised stage plays (Konstantin Stanislavsky, Augusto Boal and Aristotle)"},
            { value: "Discuss the contribution of theatrical forms (storytelling, rituals, dance, film, drama and recitations) to social development"},
            { value: "Perform written and improvised stage plays"},
            { value: "Organise theatre for social change addressing emerging social problems"},
            { value: "Analyse creative use of language in theatrical production and performance (written and improvised stage plays)"},
            { value: "Use language creatively in theatrical production and performance (written and improvised stage plays)"},
            { value: "Analyse the production cost of a stage play"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the concept and history of theatre arts"},
            { value: "Demonstrate an understanding of the theories and principles of theatre arts"},
            { value: "Demonstrate an understanding of the contribution of theatre arts to social development"},
            { value: "Perform theatre arts for different audiences based on audience types"},
            { value: "Organise theatre for social change"},
            { value: "Use creative language to prepare theatrical works"},
            { value: "Analyse the cost of producing and selling theatrical works"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Theatre Arts for secondary schools student's book, form three. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of concepts, theories and principles of theatre arts"},
            { value: "Perform theatre arts"},
            { value: "Demonstrate mastery of the use of creative language in theatre arts"},
            { value: "Demonstrate mastery of the application of business principles in theatre arts"},
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
        } else if (subject === "Engineering Science") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Explore basic concepts and principles of vectors (Vectors, resolving vectors by graphical and analytical methods, relative motion)"},
            { value: "Describe the concepts and principles of periodic motion (Periodic motion, oscillations, simple pendulum, importance of periodic motion)"},
            { value: "Explore the concepts and principles of angular motion (Angular motion, angular displacement, angular velocity, angular acceleration, equations of angular motion, circular motion, centripetal force and torque)"},
            { value: "Describe the concepts and principles of magnetism (Magnetism, magnets, magnetic fields, magnetisation and demagnetisation, applications of magnets)"},
            { value: "Explain the concepts and principles of basic digital electronics (Analogue vs digital signals, binary numbers, logic gates, applications of digital electronics)"},
            { value: "Explain the concepts and principles of sustainable energy sources (Sustainable energy sources, solar energy, wind energy, geothermal energy, hydropower)"},
            { value: "Relate measuring instruments to physical quantities corresponding to the concepts and principles of vectors, periodic motion, angular motion, magnetism, basic digital electronics and sustainable energy sources"},
            { value: "Perform measurements in vectors, periodic motion, angular motion, magnetism, basic digital electronics and sustainable energy sources"},
            { value: "Use mathematical knowledge to describe relationships between various physical quantities related to vectors, periodic motion, angular motion, magnetism, basic digital electronics and sustainable energy sources"},
            { value: "Use knowledge of vectors, periodic motion, angular motion, magnetism, basic digital electronics and sustainable energy sources in developing various engineering artefacts required by society"},
            { value: "Apply knowledge and skills of vectors, periodic motion, angular motion, magnetism, basic digital electronics and sustainable energy sources in maintaining and repairing engineering artefacts"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of basic concepts, principles and terminologies of Engineering Science"},
            { value: "Demonstrate mastery of measurements and symbols in Engineering Science"},
            { value: "Use mathematics to explain principles and phenomena in Engineering Science"},
            { value: "Demonstrate knowledge and skills of Engineering Science in developing various engineering artefacts required by society"},
            { value: "Demonstrate the use of knowledge and skills of Engineering Science in maintaining and repairing engineering artefacts"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Ministry of Education, Science and Technology (2024). Engineering Science Syllabus for Secondary Education Vocational Stream Form I-IV. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Apply knowledge and skills of Engineering Science in various contexts"},
            { value: "Deploy Engineering Science theories and principles to solve problems in different contexts"},
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
            { value: "Kuunda maneno kwa njia mbalimbali kutokana na habari alizozisoma au kuzisikiliza (mf. utohoaji, uradidi, uhulutishaji)"},
            { value: "Kuandika habari kwa kuzingatia maneno yaliyoundwa kwa njia mbalimbali"},
            { value: "Kujenga hoja za uga mahususi kwa kutumia miundo mbalimbali ya sentensi (mf. siasa, uchumi, kilimo na biashara)"},
            { value: "Kuandika matini ndefu na changamani kwa kutumia miundo mbalimbali ya sentensi"},
            { value: "Kusikiliza habari changamani kitunduizi na kuchangia au kutoa maoni mwafaka"},
            { value: "Kusikiliza habari na kuzielezea kwa maneno yake mwenyewe kwa kuzingatia stadi za mawasiliano (mf. uwazi, ukamilifu wa hoja, usahihi, muwala, uwekevu na staha)"},
            { value: "Kusoma matini ndefu changamani na kuelezea kwa maandishi mawazo makuu yaliyomo kwa kuzingatia stadi za mawasiliano (mf. uwazi, ukamilifu wa hoja, usahihi, muwala, uwekevu na staha)"},
            { value: "Kusoma matini ndefu changamani na kutathmini hoja zilizomo"},
            { value: "Kutumia lugha fasaha katika mazungumzo ya hadhara (mf. mikutano ya hadhara, uwasilishaji mbele ya halaiki na mijadala mbalimbali)"},
            { value: "Kuandika barua na makala za magazetini"},
            { value: "Kufafanua dhana ya fasihi na fasihi ya Kiswahili (maana, aina na dhima)"},
            { value: "Kuchambua tanzu za fasihi simulizi na andishi"},
            { value: "Kujadili dhana ya uhakiki wa kazi za fasihi (maana ya uhakiki, mhakiki na sifa za mhakiki)"},
            { value: "Kufafanua misingi ya uhakiki wa kazi za fasihi simulizi na fasihi andishi (vipengele vya fani na maudhui)"},
            { value: "Kuhakiki fani na maudhui katika kazi za fasihi simulizi (mashairi na maigizo)"},
            { value: "Kuhakiki fani na maudhui katika tamthiliya"},
            { value: "Kutathmini namna maudhui ya kazi alizozihakiki yanavyosadifu jamii inayomzunguka"},
            { value: "Kujadili kanuni za utunzi wa nyimbo, ngonjera na maigizo"},
            { value: "Kutunga nyimbo, ngonjera na maigizo"},
            { value: "Kuimba nyimbo na kutamba ngonjera"},
            { value: "Kuigiza maigizo"},
            { value: "Kujadili dhana, misingi, kanuni na hatua za tafsiri"},
            { value: "Kutafsiri matini fupi sahili"},
            { value: "Kutatua changamoto zinazojitokeza katika kutafsiri matini"},
            { value: "Kujadili dhana, kanuni na misingi ya uhariri"},
            { value: "Kuhariri matini fupi za Kiswahili"},
            ];

            var competenceOptions = [
            { value: "Chagua Umahiri Mahususi"},
            { value: "Kukuza uelewa wa sarufi ya Kiswahili"},
            { value: "Kusikiliza na kuelewa mazungumzo"},
            { value: "Kusoma matini kwa ufasaha na ufahamu"},
            { value: "Kuwasiliana kwa ufasaha kwa njia ya mazungumzo"},
            { value: "Kuwasiliana kwa njia ya maandishi katika miktadha mbalimbali"},
            { value: "Kukuza uelewa wa misingi ya fasihi ya Kiswahili"},
            { value: "Kuhakiki kazi za fasihi ya Kiswahili"},
            { value: "Kubuni kazi za fasihi ya Kiswahili"},
            { value: "Kufanya tafsiri sahili katika lugha ya Kiswahili"},
            { value: "Kuhariri matini mbalimbali za Kiswahili"},
            ];

            var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Wizara ya Elimu, Sayansi na Teknolojia. (2023). Muhtasari wa Kiswahili Elimu ya Sekondari Kidato cha I–IV. Taasisi ya Elimu Tanzania"},
            ];

            var topicsOptions = [
            { value: "Chagua Umahiri Mkuu"},
            { value: "Kumudu misingi ya Kiswahili"},
            { value: "Kumudu lugha ya mazungumzo na ya maandishi"},
            { value: "Kuwasiliana katika miktadha mbalimbali"},
            { value: "Kuthamini kazi za fasihi ya Kiswahili"},
            { value: "Kutoa huduma ya lugha ya Kiswahili katika jamii"},
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
        } else if (subject === "Acting") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Working with camera"},
            { value: "Mounting camera"},
            { value: "Recording videos using video camera"},
            { value: "Performing for basic types of shots"},
            { value: "Performing for camera angles"},
            { value: "Performing for camera movements"},
            { value: "Projecting voice"},
            { value: "Expressing emotions through facial expressions and body language"},
            { value: "Listening and reacting on film and TV drama"},
            { value: "Maintaining continuity"},
            { value: "Conducting screenplay analysis"},
            { value: "Auditioning character roles"},
            { value: "Rehearsing character roles"},
            { value: "Performing character roles for film and television"},
            { value: "Collaborating with director"},
            { value: "Collaborating with production management crew"},
            { value: "Collaborating with art and design crew"},
            { value: "Collaborating with technical crew"},
            { value: "Analysing character roles"},
            { value: "Developing casting briefs"},
            { value: "Conducting auditions"},
            { value: "Implementing ethics in casting"},
            { value: "Scouting for acting talents"},
            { value: "Preparing acting talents portfolios"},
            { value: "Negotiating for cost-effective contracts"},
            { value: "Presenting acting talents to creative personnel and agents"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Understanding basic parts of camera functioning"},
            { value: "Performing for shots, camera angles and camera movements"},
            { value: "Performing acting techniques for film and television drama"},
            { value: "Performing processes of acting for film and television drama"},
            { value: "Working with director and key production crew"},
            { value: "Executing the responsibilities of casting director"},
            { value: "Promoting acting talents"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Ministry of Education, Science and Technology. (2025). Acting Syllabus for Ordinary Secondary Education Vocational Stream Form I-IV. Vocational Education and Training Authority"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Applying principles of using camera in film and television drama"},
            { value: "Applying principles of acting for film and television drama"},
            { value: "Applying principles of casting acting talents for film and television drama"},
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
    else if (subClasses === "Form Four") {
        if (subject === "Additional Mathematics") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Explore the basic tenets of coordinate geometry (ratio theorem, perpendicular distance, angle between two intersecting lines, equation of a circle, locus of a moving point equidistant from a fixed point on a plane, locus of a moving point equidistant from two fixed points and locus of a moving point at a fixed distance from a fixed line on a plane)"},
            { value: "Explore the basic tenets of trigonometry (trigonometric identities, double angle and compound angle formulae and solving trigonometric equations)"},
            { value: "Explore the basic tenets of vectors in three dimensional space (components, representations, dot and cross products of two vectors)"},
            { value: "Apply the dot product of vectors to solve problems involving angles between two vectors and work done by a force on an object"},
            { value: "Apply the cross product of vectors to find a unit vector normal to a given plane and to find area of a plane figure"},
            { value: "Explore the basic tenets of statistics (measures of dispersion: range, variance and standard deviation)"},
            { value: "Explore the basic tenets of counting techniques (fundamental principle of counting, permutations, and combinations)"},
            { value: "Explore the basic tenets of probability (independent events and conditional probability)"},
            { value: "Explore the basic tenets of 3×3 matrices (operations, determinant, and inverse)"},
            { value: "Use 3×3 matrices to solve systems of linear simultaneous equations with three unknowns"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Use some advanced skills in coordinate geometry, Trigonometry and Vectors in daily life"},
            { value: "Apply statistical skills in the fields of business and economics"},
            { value: "Apply the basic skills of probability in daily life"},
            { value: "Use Algebra and Calculus to solve problems in different contexts"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Additional Mathematics for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Use advanced mathematical knowledge and skills in daily life"},
            { value: "Demonstrate mastery of some advanced concepts in Algebra and Calculus in problem solving"},
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
        } else if (subject === "Agriculture") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the principles and practices for the production of nut/oil seed crops (conceptualisation of nut/oil seed crops; principles and practices for production of sunflower, simsim and groundnut)"},
            { value: "Describe the principles and practices for aquaculture (conceptualisation of aquaculture; principles and practices for production of fish, sea cucumber and seaweed farming)"},
            { value: "Perform basic husbandry practices for the production of nut/oil seed crops (sunflower, simsim and groundnut)"},
            { value: "Perform husbandry practices in aquaculture (fish, sea cucumber and seaweed farming)"},
            { value: "Complete the crop/animal-based production project started in Form III and submit a report"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the principles of agriculture"},
            { value: "Apply basic principles of husbandry in crop production"},
            { value: "Apply basic principles of husbandry in aquaculture production"},
            { value: "Carry out a project in Agriculture"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Agriculture for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the principles of agriculture"},
            { value: "Use basic agricultural skills"},
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
        } else if (subject === "Animal Health and Production") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Managing poultry breeding flock"},
            { value: "Managing ruminant breeding stocks"},
            { value: "Managing non-ruminant breeding stocks"},
            { value: "Performing natural mating"},
            { value: "Practicing artificial insemination"},
            { value: "Maintaining hatchery hygiene"},
            { value: "Sorting and grading eggs"},
            { value: "Performing candling"},
            { value: "Operating hatchery and incubator"},
            { value: "Performing chick sexing"},
            { value: "Handling day old chicks"},
            { value: "Transporting day old chicks"},
            { value: "Performing clinical examination"},
            { value: "Collecting and submitting samples"},
            { value: "Handling samples"},
            { value: "Checking vital clinical signs"},
            { value: "Administering drug or supportive therapy"},
            { value: "Attending simple animal wounds"},
            { value: "Communicating with higher authority"},
            { value: "Applying acaricides or insecticides"},
            { value: "Performing deworming"},
            { value: "Vaccinating livestock"},
            { value: "Identifying tools and equipment"},
            { value: "Performing castration"},
            { value: "Performing dehorning or disbudding"},
            { value: "Performing de-beaking"},
            { value: "Performing hoof trimming"},
            { value: "Performing identification of different livestock species"},
            { value: "Performing teeth clipping"},
            { value: "Performing tail docking"},
            { value: "Performing dittoing"},
            { value: "Shearing sheep wool"},
            { value: "Preparing format for different farm records"},
            { value: "Preparing farm reports"},
            { value: "Planning farm activities"},
            { value: "Preparing farm budget"},
            { value: "Promoting farm products"},
            { value: "Evaluating farm performance"},
            { value: "Carrying out analysis of farm activities"},
            { value: "Interpreting production parameters"},
            { value: "Extracting information from relevant other stakeholders"},
            { value: "Formulating project proposal"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Managing breeding stock"},
            { value: "Maintaining hatchery"},
            { value: "Performing tentative diagnosis of livestock diseases"},
            { value: "Nursing diseased livestock"},
            { value: "Performing prevention and control of livestock diseases"},
            { value: "Performing herd management practice"},
            { value: "Managing various farm records"},
            { value: "Managing farm business"},
            { value: "Preparing farm project proposal"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Animal Health and Production for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Performing breeding of livestock"},
            { value: "Managing livestock disease"},
            { value: "Managing farm production activities"},
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
        } else if (subject === "Art and Design") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Controlling mechanical hazards"},
            { value: "Controlling chemical hazards"},
            { value: "Controlling risks"},
            { value: "Managing safety gears"},
            { value: "Managing workshop safety rules"},
            { value: "Managing air pollution"},
            { value: "Managing water pollution"},
            { value: "Managing land pollution"},
            { value: "Preparing schedules of preventive maintenance of tools, machines and equipment"},
            { value: "Preparing inspection check list of tools, equipment and machine"},
            { value: "Performing preventive maintenance of tools, equipment and machines"},
            { value: "Performing preventive maintenance of work environment"},
            { value: "Composing art curation theme"},
            { value: "Gathering artworks"},
            { value: "Creating curatorial statement"},
            { value: "Making arts installation"},
            { value: "Conducting art exhibition"},
            { value: "Conducting art fair"},
            { value: "Making national and international exhibition"},
            { value: "Making a craft fair"},
            { value: "Making a cultural festival"},
            { value: "Making art auctions"},
            { value: "Creating public art projects"},
            { value: "Preparing tools and materials for conducting crafts conservation"},
            { value: "Making surface cleaning and polishing"},
            { value: "Reassembling the craft object"},
            { value: "Making inpainting and retouching"},
            { value: "Making protective coatings"},
            { value: "Handling textiles crafts"},
            { value: "Handling paper crafts"},
            { value: "Handling ceramics and clay crafts"},
            { value: "Handling mixed media crafts"},
            { value: "Preparing material and tools for structural repair and stabilization"},
            { value: "Repairing cracks"},
            { value: "Repairing missing parts"},
            { value: "Repairing loose components"},
            { value: "Preparing materials and tools for making screen printing and surface design"},
            { value: "Making block printing"},
            { value: "Making batiks"},
            { value: "Making silk painting"},
            { value: "Preparing materials and tools for making dyeing and colour mixing"},
            { value: "Making immersion dyeing"},
            { value: "Making tie-dyeing"},
            { value: "Making resist dyeing"},
            { value: "Preparing material and tools for performing weaving and loom operation"},
            { value: "Weaving fabrics using floor looms"},
            { value: "Weaving fabric using table looms"},
            { value: "Weaving fabric using handlooms"},
            { value: "Preparing material and tools for making embroidery and needlework"},
            { value: "Making hand embroidery"},
            { value: "Making cross-stitch"},
            { value: "Making appliqué"},
            { value: "Making quilting"},
            { value: "Making manual embroidery machine"},
            { value: "Preparing materials and tools for making computerized embroidery"},
            { value: "Installing software"},
            { value: "Creating artwork"},
            { value: "Digitizing artwork"},
            { value: "Making digital embroidery"},
            { value: "Preparing material and tools for making pattern drafting and garment construction"},
            { value: "Drafting patterns"},
            { value: "Cutting patterns"},
            { value: "Sewing crafts-based garments"},
            { value: "Making scarves"},
            { value: "Making sweaters"},
            { value: "Making hats"},
            { value: "Making gloves"},
            { value: "Making shawls"},
            { value: "Making dresses"},
            { value: "Making handbags"},
            { value: "Making purses"},
            { value: "Making belts"},
            { value: "Making hair accessories"},
            { value: "Making throw pillows"},
            { value: "Making blankets"},
            { value: "Making quilts"},
            { value: "Making table runners"},
            { value: "Making rugs"},
            { value: "Making curtains"},
            { value: "Making doilies"},
            { value: "Making placemats"},
            { value: "Making coasters"},
            { value: "Making dishcloths"},
            { value: "Preparing material and tools for making macramé decor"},
            { value: "Making wall hangings"},
            { value: "Making plant hangers"},
            { value: "Making curtains"},
            { value: "Preparing material and tools for making tapestries and rugs"},
            { value: "Making woven tapestries"},
            { value: "Making rugs"},
            { value: "Making carpets"},
            { value: "Setting art and design studio/workshop"},
            { value: "Establishing tools and equipment profile"},
            { value: "Preparing work schedules"},
            { value: "Preparing organization charts"},
            { value: "Preparing motivation schemes"},
            { value: "Training work performance"},
            { value: "Training staff"},
            { value: "Assessing work performance"},
            { value: "Writing performance reports"},
            { value: "Performing labour cost"},
            { value: "Performing material cost"},
            { value: "Preparing budget"},
            { value: "Preparing price"},
            { value: "Preparing brochures for company/institutional promotion"},
            { value: "Performing marketing using digital media/platforms"},
            { value: "Performing packaging and labelling"},
            { value: "Performing storage"},
            { value: "Carrying out distribution"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Managing hazards"},
            { value: "Carrying out risk assessment"},
            { value: "Managing environment"},
            { value: "Planning preventive maintenance"},
            { value: "Supervising preventive maintenance"},
            { value: "Conducting art curation"},
            { value: "Conducting exhibition"},
            { value: "Conducting artistic events"},
            { value: "Conducting crafts conservation"},
            { value: "Handling and manipulating fragile materials"},
            { value: "Performing structural repair and stabilization"},
            { value: "Making screen printing and surface design"},
            { value: "Making dyeing and colour mixing"},
            { value: "Performing weaving and loom operation"},
            { value: "Making embroidery and needlework"},
            { value: "Making computerized embroidery"},
            { value: "Making pattern drafting and garment construction"},
            { value: "Making clothing and apparel"},
            { value: "Making fibre arts accessories"},
            { value: "Making home furnishings"},
            { value: "Making knitted and crocheted home decor"},
            { value: "Making macramé decor"},
            { value: "Making tapestries and rugs"},
            { value: "Establishing small-scale enterprise"},
            { value: "Supervising staff"},
            { value: "Performing cost estimates"},
            { value: "Performing marketing and advertising"},
            { value: "Carrying out quality control"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Art and Design for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Managing safe work environment"},
            { value: "Managing preventive maintenance"},
            { value: "Conducting art exhibition and event planning"},
            { value: "Performing crafts conservation and restoration"},
            { value: "Performing textile design and fabric arts"},
            { value: "Performing fibre arts products"},
            { value: "Managing production"},
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
        } else if (subject === "Auto Body Repair") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Inspecting the surface"},
            { value: "Performing primer painting"},
            { value: "Applying the first coat"},
            { value: "Applying final coat"},
            { value: "Performing paint mixing"},
            { value: "Applying paint on auto-body"},
            { value: "Performing arc welding on aluminium material parts"},
            { value: "Performing arc welding on copper material parts"},
            { value: "Performing MIG welding on mild steel plates"},
            { value: "Performing TIG welding on copper plates"},
            { value: "Performing TIG welding on aluminium plates"},
            { value: "Performing gas welding on ferrous metals"},
            { value: "Performing gas welding on non-ferrous metals"},
            { value: "Performing gas welding of copper and its alloys"},
            { value: "Cutting steel plate by automatic machine flame"},
            { value: "Cutting steel plate by stack cutting"},
            { value: "Controlling mechanical hazards"},
            { value: "Controlling chemical hazards"},
            { value: "Controlling physical hazards"},
            { value: "Controlling risk"},
            { value: "Managing safety gears"},
            { value: "Managing air pollution"},
            { value: "Managing water pollution"},
            { value: "Managing land pollution"},
            { value: "Preparing schedules for preventive maintenance of tools, machines and equipment"},
            { value: "Preparing inspection check list of tools, equipment and machine"},
            { value: "Performing preventive maintenance of tools, equipment and machines"},
            { value: "Performing preventive maintenance of working environment"},
            { value: "Making wing panels"},
            { value: "Making vehicle bonnets"},
            { value: "Producing door channel"},
            { value: "Restoring dented panel"},
            { value: "Making bumper using fibre glass"},
            { value: "Forming heavy brackets"},
            { value: "Welding thick chassis frame"},
            { value: "Welding spring hangers"},
            { value: "Welding spring"},
            { value: "Checking pole for straightness"},
            { value: "Checking windscreen frame for correct alignment and fitting a windscreen into the frame"},
            { value: "Fitting window machine and window glass"},
            { value: "Re-fitting vehicle lighting holders and exterior fixtures"},
            { value: "Fitting body grills and channels"},
            { value: "Fitting body decorators/mouldings"},
            { value: "Fixing interior fixtures/trimming"},
            { value: "Servicing charging system"},
            { value: "Servicing starting system"},
            { value: "Keeping tools and material ledger"},
            { value: "Preparing material profile"},
            { value: "Managing equipment and tools"},
            { value: "Establishing shop layout"},
            { value: "Establishing materials required"},
            { value: "Establishing price quotation and quality"},
            { value: "Establishing purchase procedure"},
            { value: "Establishing marketing procedures"},
            { value: "Preparing brochures"},
            { value: "Preparing tender documents"},
            { value: "Establishing on the job training schedule"},
            { value: "Conducting training needs assessment"},
            { value: "Arranging training for subordinates"},
            { value: "Establishing manpower level"},
            { value: "Advising the administration"},
            { value: "Planning work schedule"},
            { value: "Supervising a job"},
            { value: "Inspecting and checking the correctness"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Carrying out spray painting on vehicle body"},
            { value: "Carrying out metallic spray painting on vehicle body"},
            { value: "Carrying out arc welding on non-ferrous metals"},
            { value: "Carrying out welding on plates using MIG and TIG welding"},
            { value: "Carrying out gas welding on ferrous and non-ferrous metals"},
            { value: "Carrying out gas cutting on ferrous metals"},
            { value: "Managing hazards"},
            { value: "Carrying out risk assessment"},
            { value: "Managing environment"},
            { value: "Planning preventive maintenance"},
            { value: "Supervising preventive maintenance"},
            { value: "Carrying out fabrication of motor-vehicle body panel"},
            { value: "Carrying out heavy metal welding"},
            { value: "Carrying out installation of a windscreen and vent glass"},
            { value: "Carrying out installation of electrical and body surface fittings"},
            { value: "Establishing tools, equipment and materials profile"},
            { value: "Estimating material and labour costs"},
            { value: "Preparing a small-scale tender document"},
            { value: "Training subordinates on the job"},
            { value: "Supervising subordinates"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2025). Auto Body Repair for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Performing spray painting on vehicle body or panel"},
            { value: "Performing arc welding on various vehicle body parts"},
            { value: "Performing gas welding on vehicle body brackets"},
            { value: "Managing safe work environment"},
            { value: "Managing preventive maintenance"},
            { value: "Performing fabrication of vehicle body components"},
            { value: "Performing installation of vehicle body attachment"},
            { value: "Managing auto shop"},
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
        } else if (subject === "Bible Knowledge") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Discuss the authorship of the Book of the Acts of the Apostles (author, recipients and purpose)"},
            { value: "Discuss the themes appearing in the Book of the Acts of the Apostles"},
            { value: "Use the Book of the Acts of the Apostles to defend human rights"},
            { value: "Use the Book of the Acts of the Apostles to discuss the commission and order to spread the Gospel"},
            { value: "Explain the role of the Holy Spirit in spreading the Gospel"},
            { value: "Describe the life of the early Christian community and their role in spreading the Gospel"},
            { value: "Discuss the acts of courage as revealed in the Book of the Acts of the Apostles"},
            { value: "Discuss Saul’s conversion and his missionary journeys"},
            { value: "Determine the resolution of conflicts during the growth of the early Church"},
            { value: "Discuss the importance, functions and qualities of deacons used in the early Church"},
            { value: "Discuss the methods used by the Jerusalem Council to solve conflict and bring peace, equality and unity in the early Church"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of the Holy Scripture in the Book of Acts of the Apostles"},
            { value: "Demonstrate an appreciation of devotion to spreading the Gospel"},
            { value: "Use the Book of Acts of the Apostles to appreciate the importance of justice, peace and equality"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Bible Knowledge for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate an understanding of devotion to God as revealed in the Bible"},
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
            { value: "Describe reproduction in plants (concept of reproduction in plants, asexual and sexual reproduction, pollination and fertilization)"},
            { value: "Describe reproduction in humans (sexual reproduction in human, fertilization, pregnancy and child birth)"},
            { value: "Describe the mechanisms of growth in mammals and flowering plants (concept of growth, mitosis and growth, growth and developmental stages in human and seed germination)"},
            { value: "Explore the basic tenets of genetics (genetic materials, principles of inheritance, monohybrid, Mendelian and non-Mendelian inheritance; variation)"},
            { value: "Carry out investigation related to reproduction in flowering plants (flower structure and embryo)"},
            { value: "Investigate growth in flowering plants (hypogeal and epigeal germination)"},
            { value: "Complete and submit a report for the research project started in Form Three"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Describe the physiological, anatomical and ecological processes of living organisms"},
            { value: "Demonstrate mastery of basic skills for conducting biological investigations"},
            { value: "Carry out a biological project work using biological principles"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Biology for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the concepts, principles and processes of Biology"},
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
        } else if (subject === "Book-Keeping") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe various forms of business arrangements (manufacturing firms; consignment arrangement; partnership and joint venture agreement and departmental stores)"},
            { value: "Prepare relevant accounts to determine profit or loss for different forms of business (manufacturing firms; partnership firms-admission and retirement of a partner; joint venture; consignments and departmental stores)"},
            { value: "Prepare statements of financial position for different forms of business (manufacturing firms; partnership firms-admission and retirement of a partner, and departmental stores)"},
            { value: "Describe types of Cash Flows"},
            { value: "Prepare a basic Statements of Cash flows"},
            { value: "Prepare a basic set of financial statements for financial audit (Income Statement, Statement of Financial Position, Cash Flows and Notes to Financial Statements)"},
            { value: "Record business transactions by using basic accounting packages"},
            { value: "Analyse simple financial data by using accounting packages"},
            { value: "Apply basic accounting packages to produce financial statements"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Prepare basic profit or loss statements"},
            { value: "Prepare basic business financial position statements"},
            { value: "Prepare basic Statement of Cashflows"},
            { value: "Prepare basic financial statements for audit"},
            { value: "Use basic accounting packages"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Book-Keeping for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Prepare basic financial statements"},
            { value: "Demonstrate mastery of the use of ICT in Book-keeping"},
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
        } else if (subject === "Business Studies") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Explain the basic aspects of insurance for small businesses (meaning, principles, importance, choice of appropriate insurance plan and procedures of filing insurance claims)"},
            { value: "Describe business partnerships (meaning, types, features, advantages and disadvantages, formation and dissolution)"},
            { value: "Describe taxes and levies associated with small businesses in Tanzania (meaning, types, importance, and sanctions for non-compliance)"},
            { value: "Describe the basic principles of communication and networking for small businesses"},
            { value: "Use pricing techniques to determine appropriate prices of products"},
            { value: "Identify relevant procedures and practices for buying and selling products within and outside the country"},
            { value: "Use appropriate selling methods and techniques (branding, logos, packaging, after sales services, barcoding, direct mail and internet auctions) to facilitate trade"},
            { value: "Complete and present the business plan developed in Form Three"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of the concepts, theories and principles of Business Education"},
            { value: "Demonstrate mastery of the basic skills of operating a small-scale business"},
            { value: "Demonstrate mastery of the basic skills of trading locally and internationally"},
            { value: "Apply business theories into practice"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Business Studies for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of business knowledge"},
            { value: "Solve social challenges using business skills"},
            { value: "Apply business knowledge in various contexts"},
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
        } else if (subject === "Chemistry") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Explore the basic tenets of qualitative analysis (preliminary analysis, tests in solution and confirmatory test)"},
            { value: "Explore the basic tenets of Organic Chemistry (organic compounds; aliphatic hydrocarbons and alcohols)"},
            { value: "Use Chemistry software to draw organic structures of hydrocarbons and alcohols with 1 carbon to 10 carbon atoms"},
            { value: "Name aliphatic hydrocarbons and alcohols with 1 carbon to 10 carbon atoms using the IUPAC system and Chemistry software"},
            { value: "Describe the chemical reactions of aliphatic hydrocarbons and alcohols in relation to their structures"},
            { value: "Investigate the composition of chemical species in substances using systematic qualitative analysis"},
            { value: "Demonstrate the local and industrial preparations of aliphatic hydrocarbons and alcohols"},
            { value: "Complete and submit a report for the project started in Form Three"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of concepts, theories and principles in Chemistry"},
            { value: "Use the International Union of Pure and Applied Chemistry nomenclature to name chemical species"},
            { value: "Use chemical symbols, formulae and equations to represent chemical reactions"},
            { value: "Conduct experiments in Chemistry"},
            { value: "Conduct a project in Chemistry"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Chemistry for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of basic concepts, theories and principles in Chemistry"},
            { value: "Demonstrate mastery of basic terminologies in Chemistry"},
            { value: "Conduct experiments in Chemistry"},
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
        } else if (subject === "Chinese Language") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Read Chinese words in pinyin while observing appropriate sequencing of tones"},
            { value: "Write Chinese words in pinyin while observing appropriate sequencing of tones"},
            { value: "Write Chinese character with 16-17 strokes"},
            { value: "Write new words associated with the hospital environment"},
            { value: "Construct simple oral sentences using new words associated with the hospital environment"},
            { value: "Write simple sentences using new words associated with the hospital environment"},
            { value: "Listen and respond to complex sentences"},
            { value: "Use different words to construct complex oral sentences"},
            { value: "Write complex sentences using different words"},
            { value: "Identify the main ideas from a brief oral presentation"},
            { value: "Listen to a presentation and paraphrase its content"},
            { value: "Listen to a presentation and write a summary of its content"},
            { value: "Read a simple text and identify the intended message"},
            { value: "Read a simple text and write a summary of its content"},
            { value: "Listen and respond to complex orders in a hospital setting"},
            { value: "Read different directions given in a hospital and react accordingly"},
            { value: "Read accurately a simple text using standard speed, correct tone, pronunciation and punctuation marks"},
            { value: "Read aloud complex sentences in various contexts"},
            { value: "Respond to complements, apologies, wishes, and sympathy messages in different contexts"},
            { value: "Write short stories and conversations on familiar topics using appropriate punctuation marks"},
            { value: "Translate complex sentences"},
            { value: "Translate simple texts"},
            { value: "Interpret simple sentences"},
            { value: "Interpret complex sentences"},
            { value: "Interpret simple conversations"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Develop awareness of Chinese phonemes, initial, final, tone and characters"},
            { value: "Master the correct Chinese vocabulary in various contexts"},
            { value: "Develop the use of appropriate grammar and vocabulary in conversation and writing"},
            { value: "Develop the ability to listen and understand information"},
            { value: "Develop the ability to read and understand various texts"},
            { value: "Show the right response in various communicative contexts"},
            { value: "Develop the ability to read correctly various texts"},
            { value: "Develop the ability to communicate orally"},
            { value: "Develop the ability to communicate accurately in writing in various contexts"},
            { value: "Provide simple and accurate translation"},
            { value: "Provide simple and correct interpretation"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Chinese Language for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Master basic Chinese language skills"},
            { value: "Demonstrate understanding of information in conversation and writing"},
            { value: "Communicate effectively in a variety of contexts"},
            { value: "Translate and interpret simple information"},
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
        } else if (subject === "Computer Application") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Creating email marketing"},
            { value: "Creating digital contents"},
            { value: "Customizing blogs for publication"},
            { value: "Conducting online advertising"},
            { value: "Conducting market analytics and reporting"},
            { value: "Maintaining customer relationship (CRM) systems"},
            { value: "Working with artificial intelligence (AI)"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Administering digital marketing"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2025). Computer Application for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Implementing internet and digital marketing"},
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
        } else if (subject === "Computer Programming") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Setting up the development environment"},
            { value: "Performing exploration of basic mobile user interface components"},
            { value: "Using layouts, views, and containers"},
            { value: "Performing addition and customisation of basic user interface components"},
            { value: "Performing handling of user input"},
            { value: "Performing handling of events"},
            { value: "Performing validation and processing of user input"},
            { value: "Showing feedback to users"},
            { value: "Using local data storage"},
            { value: "Showing images and videos"},
            { value: "Performing optimisation of mobile app"},
            { value: "Deploying the mobile app"},
            { value: "Identifying common cybersecurity threats"},
            { value: "Controlling cybersecurity threats"},
            { value: "Performing sanitisation and validation of user inputs"},
            { value: "Performing prevention of injection attacks"},
            { value: "Implementing data encryption"},
            { value: "Implementing data decryption"},
            { value: "Implementing prevention of hardcoding sensitive information in source code"},
            { value: "Implementing protection of sensitive information in storage"},
            { value: "Performing exploration of basic programming constructs"},
            { value: "Implementing handling of user inputs and outputs"},
            { value: "Using basic libraries for data science"},
            { value: "Collecting data from multiple sources"},
            { value: "Implementing retrieval of data from files"},
            { value: "Implementing local data storage"},
            { value: "Performing connection to remote databases"},
            { value: "Performing basic data cleaning"},
            { value: "Performing basic data transformations"},
            { value: "Performing basic data normalisation and standardisation"},
            { value: "Using specialised libraries for data cleaning"},
            { value: "Performing basic statistical analysis"},
            { value: "Using specialised libraries to analyse data"},
            { value: "Creating basic plots using libraries"},
            { value: "Creating basic interactive visualisations"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Working with mobile apps and development platforms"},
            { value: "Handling user input and basic interactions"},
            { value: "Working with data and multimedia"},
            { value: "Optimising and deploying mobile apps"},
            { value: "Identifying and controlling cybersecurity threats"},
            { value: "Practising safe programming practices"},
            { value: "Encrypting and decrypting data"},
            { value: "Handling sensitive information in programming"},
            { value: "Creating basic programs"},
            { value: "Collecting and storing data"},
            { value: "Cleaning and organising data"},
            { value: "Analysing data"},
            { value: "Visualising data"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2025). Computer Programming for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Mobile application development"},
            { value: "Integrating cybersecurity measures into applications"},
            { value: "Integrating programming with data science"},
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
            { value: "Maintain computer systems – desktop, laptop, tablets, mobile (create, delete/disable user account, create, modify, and reset password, user support, peripherals)"},
            { value: "Apply troubleshooting tools and techniques"},
            { value: "Use selected OS to perform system administration tasks"},
            { value: "Describe the background of HTML and selected programming languages (CSS, JavaScript)"},
            { value: "Install and configure the CSS and JavaScript interpreter (e.g., a web browser)"},
            { value: "Create webpages using HTML, CSS and JavaScript"},
            { value: "Publish website"},
            { value: "Appraise the published website"},
            { value: "Create mobile App using the syntax of the selected program"},
            { value: "Publish Mobile Apps"},
            { value: "Appraise the efficacy of the published Mobile Apps"},
            { value: "Describe principles of data analysis (data collection, pre-processing, processing, visualization, interpretation)"},
            { value: "Analyse simple data using selected tools (e.g., SPSS, Excel, etc.)"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of basic of system administration"},
            { value: "Demonstrate mastery of basic principles of web development (HTML, CSS, and JavaScript)"},
            { value: "Demonstrate mastery of basic principles of mobile App"},
            { value: "Demonstrate the mastery of the basic principles of data analysis (data collection, pre-processing, processing, visualization, interpretation)"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Computer Science for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the basic Concepts of Computer Science"},
            { value: "Demonstrate mastery of the basic principles of Computer Science"},
            { value: "Demonstrate mastery of the basic principles of data management"},
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
        } else if (subject === "Costume and Makeup Design") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Apply makeup according to the demands of production (straight/character makeup)"},
            { value: "Use ICT to market makeup and costume designs"},
            { value: "Demonstrate mastery of hygiene and safety in applying makeup"},
            { value: "Evaluate the design and construction of costumes and application of makeup for film"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of the principles of costume and makeup design"},
            { value: "Use ICT to design costumes and makeup"},
            { value: "Adhere to health and safety principles in designing costumes and makeup"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Costume and Makeup Design for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Design costumes and makeup for a theatre artist"},
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
        } else if (subject === "Drawing and Painting") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Create advanced observational drawing compositions of selected figures by using crayons and coloured pencils"},
            { value: "Create advanced imaginative drawing compositions based on selected themes using crayons and coloured pencils"},
            { value: "Create advanced thematic drawing compositions by using CAD software"},
            { value: "Create advanced observational painting compositions based on selected figure by using water and oil based colours"},
            { value: "Create advanced imaginative painting compositions based on selected themes by using water and oil based colours"},
            { value: "Create advanced thematic painting compositions by using CAD software"},
            { value: "Preserve drawings and paintings through catalogues and portfolios"},
            { value: "Use social network platforms for marketing drawings and paintings"},
            { value: "Conduct exhibitions for drawings and paintings"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Create drawings"},
            { value: "Create paintings"},
            { value: "Preservation, marketing, networking and exhibition"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Drawing and Painting for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Master Drawing and Painting"},
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
        } else if (subject === "Elimu ya Dini ya Kiislam") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Kueleza itikadi, udhaifu na athari za dini zilizoundwa na watu (ukafiri, ushirikina-ukristo na uyahudi, na utawa-ubudha, uhindu)"},
            { value: "Kujadili vigezo vya dini sahihi anayostahiki mwanadamu"},
            { value: "Kufafanua ithibati ya Qur’an (hoja za kuthibitisha kuwa Qur’an ni Kitabu cha Allaah (S.W) na udhaifu wa madai ya wapinzani dhidi ya Qur’an)"},
            { value: "Kuchambua sura zilizoteuliwa: Tyn (95), Nashrah (94), Takaathur (102), Al-Bayyinah (98), Adh Dhuhaa (93), Al-A’alaa (87) (kusoma kwa kuhifadhi, kutafsiri, kutoa mafunzo yatokanayo)"},
            { value: "Kuchambua kukubalika kwa Hadithi (hoja za kukubalika na udhaifu wa hoja za wapinzani wa Hadithi)"},
            { value: "Kuchambua Hadithi zilizoteuliwa kuhusu kuwa na hekima, kuepuka tamaa na kuombaomba, kumtegemea Allaah (S.W), kuepuka kukata tamaa, kuwa na Istiqama (kusoma kwa kuhifadhi, kuandika, kutafsiri na kubaini mafunzo)"},
            { value: "Kuandaa na kutoa khutba za Ijumaa na Eid (maana, umuhimu, masharti, nguzo, sunnah na adabu)"},
            { value: "Kuandaa na kutoa khutba ya ndoa (maana, umuhimu, masharti, nguzo, sunnah na adabu)"},
            { value: "Kufafanua ufahamu wa kudhibiti uzazi katika Uislamu (maana, udhaifu wa hoja za wanaoendesha kampeni ya kudhibiti uzazi, mtazamo wa Uislamu juu ya kudhibiti uzazi)"},
            { value: "Kuchambua hadhi na haki za mwanamke katika Uislamu (tofauti ya hadhi na haki za mwanamke katika Uislamu na jamii za kijahili, hifadhi ya mwanamke katika Uislamu)"},
            { value: "Kuchambua ufahamu wa sharia za Kiislamu (maana ya sharia, tofauti kati ya sharia za Kiislamu na sheria za kikafiri, misingi ya halali na haramu katika Uislamu, makosa na adhabu katika sharia za Kiislamu)"},
            { value: "Kufafanua ufahamu wa siasa na uchumi katika Uislamu (tofauti kati ya Uislamu na ukafiri juu ya mtazamo wa siasa na dola, tofauti ya msonge wa uongozi wa Kiislamu na uongozi wa kikafiri, tofauti kati ya mfumo wa uchumi wa Kiislamu na mfumo wa uchumi wa kikafiri, uchumi halali na haramu, uharamu wa riba, misingi ya mifumo ya kifedha ya Kiislamu)"},
            { value: "Kuchambua nyanja za kulingania (uongozi, itikadi, tarbia, wito kwa wasiokuwa Waislamu na ulinzi)"},
            { value: "Kufafanua nyenzo za kulingania (Qur’an na Hadithi, vyombo vya habari, mitandao ya kijamii, vitabu, nk)"},
            { value: "Kuchambua njia na mbinu za kulingania (semina, itkaf, vituo vya elimu, vituo vya dhifa, mikutano)"},
            { value: "Kueleza mbinu zinazotumika kupiga vita Uislamu na namna Muislamu anavyotakiwa kuishi na wasiokuwa Waislamu (kiuchumi, kiutamaduni, kijamii, kisiasa na kielimu)"},
            { value: "Kutathmini uendeshaji wa Dola ya Kiislamu wakati wa Makhalifa (taratibu zilizotumika kuwapata makhalifa, sababu za kupanuka Dola ya Kiislamu, sababu za Riddah, mfumo wa uongozi, uchumi, ulinzi na mahusiano ya kimataifa, sababu za kuporomoka dola ya Kiislamu na mafunzo yatokanayo katika kuimarisha umma)"},
            { value: "Kutathmini harakati za kuendeleza Uislamu baada ya Makhalifa (Banu Umayya, Abasid, Uthmaniyya, Mughals: mbinu, mafanikio, changamoto, mafunzo)"},
            { value: "Kufafanua kuenea kwa Uislamu Tanzania (njia zilizotumika, dola ya Kilwa, dola ya Zanzibar, Uislamu wakati na baada ya ukoloni hadi hivi leo)"},
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
            { value: "Taasisi ya Elimu Tanzania. (2023), Elimu Ya Dini Ya Kiislamu kitabu cha mwanafunzi kwa shule za sekondari kidato cha Nne, Taasisi ya Elimu Tanzania."},
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
        } else if (subject === "Fasihi ya Kiswahili") {
            var mainOptions = [
            { value: "Chagua Shughuli Kuu"},
            { value: "Kuhakiki fani na maudhui katika nyimbo za zamani (kabla ya mwaka 1990) na za kisasa (baada ya mwaka 1990)"},
            { value: "Kuhakiki fani na maudhui katika nyimbo za taarabu za zamani (kabla ya mwaka 1990) na za kisasa (baada ya mwaka 1990)"},
            { value: "Kuhakiki fani na maudhui ya kifasihi katika filamu zilizotafsiriwa"},
            { value: "Kuhakiki riwaya zenye ujumi na falsafa ya Kiafrika"},
            { value: "Kuhakiki ngano zenye ujumi na falsafa ya Kiafrika"},
            { value: "Kuhakiki nyimbo za Kiswahili zenye ujumi na falsafa ya Kiafrika"},
            { value: "Kujadili nafasi ya ujumi na falsafa ya Kiafrika katika jamii"},
            { value: "Kutumia riwaya kuandika hotuba zenye hoja za kimantiki"},
            { value: "Kutumia maigizo kujenga hoja kimantiki katika usaili"},
            { value: "Kutumia ngonjera kujenga hoja kimantiki katika mawasiliano ya kitaaluma"},
            { value: "Kuchambua kanuni za utunzi wa tamthiliya"},
            { value: "Kutunga tamthiliya fupi"},
            { value: "Kuchambua kanuni za utunzi wa riwaya"},
            { value: "Kutunga riwaya sahili"},
            { value: "Kuchambua kanuni za utunzi wa vichekesho"},
            { value: "Kutunga vichekesho"},
            { value: "Kubaini fursa za utunzi wa kazi za kifasihi"},
            { value: "Kuchambua fursa za kutafsiri na kuhariri kazi za kifasihi"},
            { value: "Kuchambua fursa za kuandaa filamu zinazotokana na kazi za kifasihi"},
            { value: "Kuchambua fursa za uandishi wa vitabu vya fasihi ya watoto"},
            { value: "Kuchambua fursa za uchapishaji wa kazi za fasihi"},
            { value: "Kuhusianisha fursa za kazi za kifasihi na TEHAMA"},
            ];

            var competenceOptions = [
            { value: "Chagua Umahiri Mahususi"},
            { value: "Kuhakiki kazi mbalimbali za fasihi ya Kiswahili"},
            { value: "Kujenga ujumi na falsafa ya Kiafrika katika kazi za fasihi"},
            { value: "Kutumia kazi za fasihi katika kujenga hoja zenye mantiki"},
            { value: "Kutunga kazi sahili za kifasihi"},
            { value: "Kutambua fursa zinazotokana na fasihi ya Kiswahili"},
            ];

            var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Taasisi ya Elimu Tanzania. (2023). Fasihi ya Kiswahili kitabu cha mwanafunzi kwa shule za sekondari kidato cha nne. Taasisi ya Elimu Tanzania."},
            ];

            var topicsOptions = [
            { value: "Chagua Umahiri Mkuu"},
            { value: "Kuthamini kazi za fasihi ya Kiswahili"},
            { value: "Kujenga ujumi kutokana na kazi za fasihi"},
            { value: "Kubuni kazi za fasihi"},
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
        } else if (subject === "Fine Art") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the basic tenets of pictorial compositions"},
            { value: "Create drawing from pictorial compositions"},
            { value: "Create paintings from pictorial compositions"},
            { value: "Create monoprints and relief prints"},
            { value: "Create simple digital drawings"},
            { value: "Create simple digital paintings"},
            { value: "Create realistic three-dimensional drawings"},
            { value: "Create realistic three-dimensional paintings"},
            { value: "Describe the basic ethical considerations guiding the collection and display of artworks"},
            { value: "Describe the archiving of artworks while observing copyright laws of Tanzania"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the concepts, theories and the principles of Fine Art"},
            { value: "Make decorations"},
            { value: "Use traditional and modern techniques to create works of art"},
            { value: "Create realistic art content"},
            { value: "Demonstrate an understanding of ethical conduct in Fine Art"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Fine Art for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of concepts, theories and principles of Fine Art"},
            { value: "Create simple works of Fine Art"},
            { value: "Demonstrate mastery of the principles of occupational health and environmental care in Fine Art"},
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
        } else if (subject === "Food and Human Nutrition") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the concept of packed meals (meaning, factors to consider when planning packed meals, packaging materials)"},
            { value: "Describe pastries (meaning, types and uses)"},
            { value: "Describe the concept of convenience and leftover foods"},
            { value: "Prepare dishes suitable for packing"},
            { value: "Describe different methods of preparing pastries"},
            { value: "Prepare pastry dishes"},
            { value: "Prepare meals using convenience and leftover foods"},
            { value: "Describe the concept of catering (meaning, types, menu planning, economics of catering)"},
            { value: "Describe the concept of time plan in cookery (meaning, importance, points to consider when preparing time plan and parts of the time plan)"},
            { value: "Prepare a banquet according to a time plan"},
            { value: "Describe basic methods of storage and preservation of common foods (meaning, importance, principles, and common practices)"},
            { value: "Develop and use simple technologies for the storage and preservation of food"},
            { value: "Complete and submit a report for assessment of the project initiated in Form Three"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of the principles of cookery"},
            { value: "Prepare a balanced meal based on different foods"},
            { value: "Demonstrate mastery of cooking for large groups"},
            { value: "Design and use simple technologies to preserve different types of food"},
            { value: "Conduct a project in Food and Nutrition"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Food and Human Nutrition for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the basic principles of Food and Nutrition"},
            { value: "Prepare different dishes"},
            { value: "Demonstrate mastery of using technology to preserve food"},
            { value: "Carry out a project in Food and Nutrition"},
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
        } else if (subject === "French") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Écouter un message et donner son opinion/ point de vue"},
            { value: "Lire et comprendre les récits/ contes"},
            { value: "Raconter des événements"},
            { value: "Participer à des discussions/ débats sur des sujets variés"},
            { value: "Composer des textes variés"},
            { value: "Traduire des documents simples"},
            { value: "Interpréter des conversations simples"},
            { value: "Éditer des textes simples"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Développer la compréhension des informations présentées oralement"},
            { value: "Développer la compréhension des informations présentées à l’écrit"},
            { value: "Communiquer à l’oral de manière appropriée"},
            { value: "Communiquer à l’écrit de manière appropriée dans divers contextes"},
            { value: "Traduire des textes simples"},
            { value: "Interpréter"},
            { value: "Éditer des textes simples"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). French for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Comprendre des informations orales et écrites"},
            { value: "Communiquer efficacement dans divers contextes/ situations"},
            { value: "Traduire, éditer et interpréter des informations simples"},
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
            { value: "Select Main Activity"},
            { value: "Describe the geographical factors that influence the spatial distribution of population, human settlements and economic activities (climate, soil, relief, vegetation, transport and water supply)"},
            { value: "Examine the impacts of population distribution on economic activities and the environment (land use and settlement patterns changes)"},
            { value: "Complete and submit a report of the project started in Form Three"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the relationship between geography, environmental health, human settlement"},
            { value: "Carry out a project in Geography"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Geography for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of human geography"},
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
            { value: "Select Main Activity"},
            { value: "Kufafanua dhana ya uliberali na utandawazi"},
            { value: "Kubaini vichocheo vilivyosababisha Tanzania kuingia katika mfumo wa uliberali na utandawazi"},
            { value: "Kueleza athari za uliberali na utandawazi katika mifumo ya uchumi, utamaduni, siasa na maadili"},
            { value: "Kubaini jitihada zinazochukuliwa na Tanzania kudhibiti athari mbaya za uliberali na utandawazi"},
            { value: "Kujadili matendo ya uadilifu katika muktadha wa uliberali na utandawazi"},
            { value: "Kujadili mikakati mbalimbali ya kuhamasisha na kuelimisha jamii kuhusu maadili ya Kitanzania"},
            { value: "Kuelezea muundo wa Katiba ya Jamhuri ya Muungano wa Tanzania (sura kumi za katiba)"},
            { value: "Kubainisha haki na wajibu wa raia kwa mujibu wa Katiba ya JMT"},
            { value: "Kueleza misingi ya Katiba ya Jamhuri ya Muungano wa Tanzania"},
            { value: "Kubaini tunu za Taifa zilizotajwa katika Katiba ya JMT"},
            { value: "Kuelezea fursa za kiuchumi, kisiasa na kijamii zilizopo kwa mujibu wa Katiba ya JMT"},
            { value: "Kueleza dhana ya ulinzi wa rasilimali za Taifa (ukuu wa nchi, wajibu wa raia, umuhimu wa ulinzi na athari za kutolinda rasilimali)"},
            { value: "Kuchambua muundo na kazi za mhimili tendaji (Executive) wa Serikali ya Jamhuri ya Muungano wa Tanzania na Serikali ya Mapinduzi Zanzibar"},
            { value: "Kuchambua muundo na kazi za Bunge la Jamhuri na za Baraza la Wawakilishi Zanzibar"},
            { value: "Kuchambua muundo na kazi za Mahakama katika pande zote za Muungano"},
            { value: "Kueleza dhana na chimbuko la serikali za mitaa"},
            { value: "Kuchambua muundo na kazi za serikali za mitaa katika ngazi mbalimbali za Jamhuri ya Muungano"},
            { value: "Kukamilisha na kuwasilisha taarifa ya kazimradi kuhusu historia ya Tanzania na maadili iliyoanza kidato cha tatu"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Kuchambua chimbuko la uliberali na utandawazi"},
            { value: "Kuishi maadili mema ya Kitanzania wakati wa uliberali na utandawazi"},
            { value: "Kuchambua muundo wa Katiba ya Jamhuri ya Muungano wa Tanzania"},
            { value: "Kuchambua misingi ya Katiba ya JMT"},
            { value: "Kutumia maarifa ya Katiba ya JMT katika shughuli mbalimbali za jamii na za kimaadili"},
            { value: "Kueleza muundo na kazi za Serikali ya Jamhuri ya Muungano wa Tanzania na Serikali ya Mapinduzi ya Zanzibar"},
            { value: "Kubaini muundo na kazi za Serikali za Mitaa"},
            { value: "Kufanya kazimradi ya historia ya Tanzania na maadili"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Taasisi ya Elimu Tanzania. (2023). Historia Ya Tanzania na Maadili kitabu cha mwanafunzi kwa shule za sekondari kidato cha nne. Taasisi ya Elimu Tanzania"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Kutathmini historia ya Tanzania na maadili wakati wa uliberali, 1986 hadi sasa"},
            { value: "Kumudu Katiba ya Jamhuri ya Muungano wa Tanzania"},
            { value: "Kumudu muundo na kazi za Serikali ya Jamhuri ya Muungano wa Tanzania"},
            { value: "Kufanya kazimradi ya historia ya Tanzania na maadili"},
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
            { value: "Describe the concept and origin of nation-building in Africa"},
            { value: "Evaluate the strategies used in nation-building"},
            { value: "Appraise the achievements and challenges of nation-building in post-colonial Africa"},
            { value: "Design and carry out a project on nation-building between the 1960s and 1970s (use one African country as a case study)"},
            { value: "Describe the origin and development of the Organisation of African Unity (OAU)/African Union (AU) and economic regional groupings in Africa"},
            { value: "Assess the performance of continental and regional integration efforts in Africa"},
            { value: "Appraise African participation in the United Nations and its agencies"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of the history of nation-building in post-colonial Africa"},
            { value: "Demonstrate an understanding of the successes and challenges of nation-building in post-colonial Africa"},
            { value: "Demonstrate an understanding of the regional integration in Africa"},
            { value: "Demonstrate an understanding of the history of Africa’s participation in the United Nations Organisation"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). History for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of the history of nation-building in post-colonial Africa"},
            { value: "Demonstrate mastery of the history of Africa’s participation in regional and international affairs"},
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
        } else if (subject === "Kiarabu") {
            var mainOptions = [
            { value: "Chagua Shughuli Kuu"},
            { value: "Kutumia mtenda na mtendwa katika mazungumzo na maandishi"},
            { value: "Kushiriki kikamilifu katika majadiliano, midahalo na usaili"},
            { value: "Kusikiliza na kuhusianisha taarifa zilizowasilishwa katika matini sahili"},
            { value: "Kutoa maoni katika miktadha rasmi ya kimawasiliano"},
            { value: "Kusikiliza na kufuata maelekezo katika viwanja vya ndege"},
            { value: "Kusoma na kubainisha wazo kuu kutokana na matini changamani"},
            { value: "Kusoma na kufupisha matini changamani"},
            { value: "Kuandika nyaraka mbalimbali rasmi"},
            { value: "Kutafsiri aina mbalimbali za matini ndefu sahili"},
            { value: "Kuhariri matini ndefu katika mazingira ya nje ya shule"},
            ];

            var competenceOptions = [
            { value: "Chagua Umahiri Mahususi"},
            { value: "Kutumia msamiati na sarufi sahihi katika mazungumzo na maandishi"},
            { value: "Kukuza umahiri wa kusikiliza na kuelewa taarifa zinazowasilishwa kwa mdomo"},
            { value: "Kuonesha mwitiko sahihi katika miktadha mbalimbali ya kimawasiliano"},
            { value: "Kukuza umahiri wa kusoma na kuelewa matini mbalimbali kwa usahihi"},
            { value: "Kuunda matini fasaha katika miktadha mbalimbali"},
            { value: "Kutoa tafsiri sahili na sahihi"},
            { value: "Kumudu uhariri wa matini sahili"},
            ];

            var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Taasisi ya Elimu Tanzania. (2023). Kiarabu kitabu cha mwanafunzi kwa shule za sekondari kidato cha nne. Taasisi ya Elimu Tanzania."},
            ];

            var topicsOptions = [
            { value: "Chagua Umahiri Mkuu"},
            { value: "Kuonesha uelewa wa stadi za msingi za lugha ya Kiarabu"},
            { value: "Kuonesha uelewa wa taarifa zilizowasilishwa kwa mdomo na kwa maandishi"},
            { value: "Kuwasiliana kwa ufanisi katika miktadha mbalimbali"},
            { value: "Kutafsiri, kuhariri na kukalimani taarifa sahili"},
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
        } else if (subject === "Life Skills") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the concept of time management skills"},
            { value: "Explain the value of time"},
            { value: "Develop factors influencing time management skills"},
            { value: "Enhance goal-setting skills"},
            { value: "Develop a relationship between goal setting and time management"},
            { value: "Set priorities and resource allocation"},
            { value: "Enhance time estimation and task breakdown skills"},
            { value: "Build sequencing and deadline skills"},
            { value: "Monitor and adjust time management skills"},
            { value: "Develop work-life balance"},
            { value: "Build task management skills"},
            { value: "Describe task identification"},
            { value: "Establish time management tools and techniques"},
            { value: "Introduce leadership and management"},
            { value: "Develop leadership and management skills"},
            { value: "Describe the concept of teamwork"},
            { value: "Develop team roles and responsibilities"},
            { value: "Enhance conflict management in teams"},
            { value: "Build team performance and evaluation"},
            { value: "Describe the concept of networking"},
            { value: "Build effective networking skills"},
            { value: "Develop networking in a digital era"},
            { value: "Understand the concept of collaboration"},
            { value: "Establish roles and responsibilities in a collaboration setting"},
            { value: "Enhance consensus building"},
            { value: "Develop respect and inclusivity in a collaborative setting"},
            { value: "Describe the concept of civic engagement"},
            { value: "Get involved in civic engagement"},
            { value: "Enhance technology and civic engagement"},
            { value: "Describe the concepts of community services and volunteering"},
            { value: "Enhance community services"},
            { value: "Build volunteering"},
            { value: "Describe media literacy"},
            { value: "Develop media literacy in a digital era"},
            { value: "Enhance information engagement"},
            { value: "Develop information engagement in a digital era"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Understanding the concept of time management"},
            { value: "Planning for time management"},
            { value: "Managing tasks"},
            { value: "Enhancing time management tools and techniques"},
            { value: "Concept of leadership and management"},
            { value: "Building teamwork"},
            { value: "Networking skills"},
            { value: "Collaboration skills"},
            { value: "Concept of civic engagement"},
            { value: "Promoting community services and volunteerism"},
            { value: "Media literacy and information engagement"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Life Skills for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Managing time"},
            { value: "Building leadership and management skills"},
            { value: "Promoting networking and collaboration"},
            { value: "Civic engagement"},
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
        } else if (subject === "Literature In English") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Analyse themes depicted in selected plays"},
            { value: "Analyse conflicts portrayed in selected plays"},
            { value: "Relate personal experiences to themes in selected plays"},
            { value: "Discuss the motivations of characters’ choices and decisions in selected plays"},
            { value: "Suggest solutions to challenges depicted in selected plays"},
            { value: "Explain the concepts of character, plot, setting, stage direction and spectacle in a play"},
            { value: "Analyse stages of plot development (exposition, rising action, climax, falling action and resolution)"},
            { value: "Apply literary skills to compose a two-acts play"},
            { value: "Discuss dramatic and situational irony in selected plays"},
            { value: "Discuss the effectiveness of suspense in selected plays"},
            { value: "Explain how antithesis creates ambiguity in selected plays"},
            { value: "Make a plan for composing a play (plot, setting, characterisation and stage direction)"},
            { value: "Apply ICT tools and digital platforms in writing and publishing a play"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Apply critical thinking when reading, discussing and writing about literary texts"},
            { value: "Synthesize literary characteristics, themes, and/or approaches in several literary texts"},
            { value: "Recognise ambiguity and uncertainty as necessary in creating literary works"},
            { value: "Create imaginative and original literary works"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Literature in English for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Appreciate different implications and layers of meaning in literary works"},
            { value: "Compose literary works"},
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
            { value: "Explore the basic tenets of matrices (2×2 matrices: operations, determinant, inverse, and transformations)"},
            { value: "Apply matrices to solve simultaneous equations of two unknowns (matrix inversion method and Cramer’s rule)"},
            { value: "Explore the basic tenets of coordinate geometry (midpoint of a line segment, distance between two points on a line, parallel, and perpendicular lines)"},
            { value: "Apply sine and cosine rules to find distances or angles of elevation"},
            { value: "Derive and use compound angles to solve problems"},
            { value: "Explore the basic tenets of vectors (displacement and position vectors, magnitude and direction, sum and differences, multiplication of vectors by a scalar)"},
            { value: "Explore the basic tenets of probability of two events (probability of an event, mutually exclusive events, dependent events, combined events using tree diagrams, tables and formulae)"},
            { value: "Explore the basic tenets of statistics (frequency distribution, measures of central tendency, histogram, frequency polygon, and cumulative frequency curve ‘ogive’)"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Use algebra and matrices in problem solving"},
            { value: "Use basic coordinate geometry, trigonometry, and vectors skills in daily life"},
            { value: "Use probability in problem solving"},
            { value: "Use statistics in problem solving"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Mathematics for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select Main Competence"},
            { value: "Demonstrate mastery of basic concepts in geometry and algebra"},
            { value: "Demonstrate mastery of basic concepts in coordinate geometry, trigonometry, circles, vectors, probability, and statistics"},
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
        } else if (subject === "Music") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the fundamentals of reading and writing music based on ABRSM Music Theory Grade IV (rhythm, scales and key signatures, melody and harmony, and musical terms and signs)"},
            { value: "Compose short songs in three-part harmony in any language"},
            { value: "Compose short songs in four-part harmony in any language"},
            { value: "Sing short songs in three-part harmony"},
            { value: "Sing short songs in four-part harmony"},
            { value: "Play selected local and foreign wind instruments to accompany short songs"},
            { value: "Apply music notation software to write short songs in two staves"},
            { value: "Apply recording procedures to produce simple works of music"},
            { value: "Describe procedures of establishing a music production business"},
            { value: "Use online marketing strategies in the Tanzanian music industry (distribution, royalties and pricing)"},
            { value: "Complete and submit a report on the research project started in Form Three"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the principles of reading and writing music"},
            { value: "Sing local and foreign songs"},
            { value: "Play local and foreign musical instruments"},
            { value: "Use ICT programmes to write music"},
            { value: "Use ICT in music production"},
            { value: "Use ICT to market works of music"},
            { value: "Conduct a research project on business opportunities in music"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Music for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of concepts, theories and principles of music"},
            { value: "Create and perform music"},
            { value: "Demonstrate mastery of the use of ICT in music"},
            { value: "Carry out a project in Music"},
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
        } else if (subject === "Pottery and Ceramics") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Produce ceramic products based on specific themes"},
            { value: "Produce imaginative ceramic objects based on individual learner-generated themes"},
            { value: "Preserve Pottery and Ceramic objects"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Create Pottery and Ceramics"},
            { value: "Secure and promote Pottery and Ceramics products"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Pottery and Ceramics for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Master Pottery and Ceramics"},
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
        } else if (subject === "Sport Studies") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe different skills, techniques, safety measures and rules in selected sports (volleyball and handball; optional cricket or hockey)"},
            { value: "Play selected sports by observing skills, techniques, rules and safety principles (volleyball and handball; optional cricket or hockey)"},
            { value: "Relate nutrition, body composition and performance in different sports"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Develop skills and techniques in sports"},
            { value: "Demonstrate an understanding of the relationship between nutrition and health in sports"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Sport Studies for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Play various sports"},
            { value: "Demonstrate mastery of the fundamentals of health and safety in sports"},
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
        } else if (subject === "Textile Design and Small-Scale Printing") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Create design layout for kitenge"},
            { value: "Create design layout for general print patterns"},
            { value: "Print kitenge"},
            { value: "Print general print designs"},
            { value: "Archive textile designs"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Create textile designs"},
            { value: "Print and dye fabrics"},
            { value: "Secure and promote textile designs and products"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Textile Design and Small-Scale Printing for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Master Textile Design and Small-Scale Printing"},
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
        } else if (subject === "Textiles Garment Construction") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe principles for making decorative processes in garments (applique, scallops, smoking, faggoting, piping and binding)"},
            { value: "Make a portfolio of prototypes of decorative processes in garments for children (embroidery stitches, applique, smoking, faggoting, piping and binding)"},
            { value: "Describe factors to consider when choosing fabric for making garments for children"},
            { value: "Prepare patterns for a child’s garment"},
            { value: "Use decorative techniques in making a child’s garment"},
            { value: "Develop a personal wardrobe plan (meaning, personal wardrobe inventory and wardrobe plan chart)"},
            { value: "Describe the basic elements of professionalism, ethical conduct and customer care for the tailor"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the fundamentals of garment construction"},
            { value: "Choose the right fabric for different garments"},
            { value: "Make sewing patterns"},
            { value: "Sew simple styles of various garments"},
            { value: "Care for clothes"},
            { value: "Demonstrate an understanding of professionalism and ethics in tailoring"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Textiles Garment Construction for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of the fundamentals of garment construction"},
            { value: "Demonstrate mastery of professionalism and ethics in garment making"},
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
        } else if (subject === "Theatre Arts") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the origin of film, radio drama and television drama"},
            { value: "Describe basic theories and fundamental principles of radio drama, television drama and film"},
            { value: "Produce simple plot for film, radio drama and television drama"},
            { value: "Integrate ICT in the production of simple film, radio drama and television drama"},
            { value: "Use digital platforms to market and distribute theatrical works (film, radio and television drama)"},
            { value: "Analyse creative use of language in theatrical production and performance (film, radio drama and television drama)"},
            { value: "Use language creatively in theatrical production and performance (film, radio drama and television drama)"},
            { value: "Analyse and interpret scripted scenes to communicate with varied audiences"},
            { value: "Explore business opportunities in theatre locally and internationally (film, radio drama and television drama)"},
            { value: "Analyse the production cost of film, radio drama and television drama"},
            { value: "Design marketing strategies for theatre arts products"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate an understanding of the concept and history of theatre arts"},
            { value: "Demonstrate an understanding of the theories and principles of theatre arts"},
            { value: "Perform theatre arts for different audiences based on audience types"},
            { value: "Use ICT to produce simple film, television and radio drama"},
            { value: "Use creative language to prepare theatrical works"},
            { value: "Interpret theatrical works to suit different audiences"},
            { value: "Develop business ideas and opportunities in theatre arts"},
            { value: "Analyse the cost of producing and selling theatrical works"},
            { value: "Design strategies for marketing theatrical works"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Tanzania Institute of Education. (2023). Theatre Arts for secondary schools student's book, form four. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Demonstrate mastery of concepts, theories and principles of theatre arts"},
            { value: "Perform theatre arts"},
            { value: "Demonstrate mastery of the use of creative language in theatre arts"},
            { value: "Demonstrate mastery of the application of business principles in theatre arts"},
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
        } else if (subject === "Engineering Science") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Describe the concepts and principles of projectile motion (Projectile motion, equation of a projectile motion, projectile range and maximum height, time of flight of a projectile)"},
            { value: "Explore the concepts and principles of sound waves (Waves, sound, speed of sound in air, properties of sound, echo, musical sounds, resonance)"},
            { value: "Explain the concepts and principles of optics (Introduction to light, reflection of light, mirrors, refraction of light, lenses, total internal reflection, optical fibres, dispersion of light, colour, optical instruments)"},
            { value: "Describe the concepts and principles of electromagnetism (Concept of electromagnetism, magnetic field due to current-carrying conductor, electromagnetic induction, induced electromotive force, mode of operation of AC, DC and transformers)"},
            { value: "Relate measuring instruments used in engineering science to physical quantities corresponding to projectile motion, sound waves, optics and electromagnetism"},
            { value: "Perform measurements in engineering science"},
            { value: "Apply mathematical knowledge to describe the relationship between various physical quantities corresponding to different principles and phenomena (Projectile motion, sound waves, optics, electromagnetism)"},
            { value: "Apply the knowledge and skills of sound waves, optics and electromagnetism in developing various engineering artefacts required by society"},
            { value: "Use the knowledge and skills of sound waves, optics and electromagnetism in maintaining and repairing various engineering artefacts"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Demonstrate mastery of basic concepts, principles and terminologies of Engineering Science"},
            { value: "Demonstrate mastery of measurements and symbols in Engineering Science"},
            { value: "Use mathematics to explain principles and phenomena in Engineering Science"},
            { value: "Demonstrate knowledge and skills of Engineering Science in developing various engineering artefacts required by society"},
            { value: "Demonstrate the use of knowledge and skills of Engineering Science in maintaining and repairing engineering artefacts"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Ministry of Education, Science and Technology (2024). Engineering Science Syllabus for Secondary Education Vocational Stream Form I-IV. Tanzania Institute of Education"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Apply knowledge and skills of Engineering Science in various contexts"},
            { value: "Deploy Engineering Science theories and principles to solve problems in different contexts"},
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
            { value: "Kuigiza usaili kwa kuzungumza na kuandika"},
            { value: "Kuandika wasifukazi na tawasifu"},
            { value: "Kujadili dhana ya mashairi andishi"},
            { value: "Kuhakiki fani na maudhui katika mashairi andishi"},
            { value: "Kuhakiki fani na maudhui katika riwaya"},
            { value: "Kuhusianisha kazi za fasihi na maisha halisi"},
            { value: "Kujadili kanuni za utunzi wa hadithi fupi simulizi na andishi"},
            { value: "Kutunga hadithi fupi simulizi na andishi"},
            { value: "Kutamba hadithi"},
            { value: "Kutafsiri matini ndefu sahili"},
            { value: "Kutathmini matini zilizotafsiriwa"},
            { value: "Kuhariri matini ndefu za Kiswahili"},
            { value: "Kutathmini matini zilizohaririwa"},
            { value: "Kujadili dhana na misingi ya ukalimani"},
            { value: "Kueleza stadi muhimu katika ukalimani"},
            { value: "Kukalimani mazungumzo mafupi na sahili katika miktadha mbalimbali"},
            ];

            var competenceOptions = [
            { value: "Chagua Umahiri Mahususi"},
            { value: "Kuwasiliana kwa ufasaha kwa njia ya mazungumzo"},
            { value: "Kuwasiliana kwa njia ya maandishi katika miktadha mbalimbali"},
            { value: "Kuhakiki kazi za fasihi ya Kiswahili"},
            { value: "Kubuni kazi za fasihi ya Kiswahili"},
            { value: "Kufanya tafsiri sahili katika lugha ya Kiswahili"},
            { value: "Kuhariri matini mbalimbali za Kiswahili"},
            { value: "Kufanya ukalimani sahili kwa lugha ya Kiswahili"},
            ];

            var referenceOptions = [
            { value: "Chagua Rejea"},
            { value: "Wizara ya Elimu, Sayansi na Teknolojia. (2023). Muhtasari wa Kiswahili Elimu ya Sekondari Kidato cha I–IV. Taasisi ya Elimu Tanzania"},
            ];

            var topicsOptions = [
            { value: "Chagua Umahiri Mkuu"},
            { value: "Kuwasiliana katika miktadha mbalimbali"},
            { value: "Kuthamini kazi za fasihi ya Kiswahili"},
            { value: "Kutoa huduma ya lugha ya Kiswahili katika jamii"},
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
        } else if (subject === "Acting") {
            var mainOptions = [
            { value: "Select Main Activity"},
            { value: "Developing humorous topics and ideas"},
            { value: "Structuring punchlines"},
            { value: "Solidifying a routine or setlist"},
            { value: "Improvising content"},
            { value: "Practicing stand-up comedy"},
            { value: "Auditioning for stand-up comedy"},
            { value: "Rehearsing a stand-up comedy"},
            { value: "Staging a stand-up comedy"},
            { value: "Breaking down the script"},
            { value: "Scheduling for the production"},
            { value: "Communicating with cast and crew"},
            { value: "Organising production crew and equipment"},
            { value: "Supervising production schedule and call sheets"},
            { value: "Supervising shooting workflow"},
            { value: "Supervising script and continuity"},
            { value: "Maintaining director's vision"},
            { value: "Shooting simple video clips"},
            { value: "Editing simple video clips"},
            { value: "Recording audio clips"},
            { value: "Editing audio clips"},
            { value: "Designing banners"},
            { value: "Distributing video and audio clips on social media platforms"},
            { value: "Distributing promotion banners on social media"},
            { value: "Marketing yourself as an actor or actress"},
            { value: "Promoting stage, radio and screen contents and events"},
            ];

            var competenceOptions = [
            { value: "Select Specific Competence"},
            { value: "Creating content for stand-up comedy"},
            { value: "Performing techniques for stand-up comedy"},
            { value: "Executing the responsibilities of assistant director during pre-production"},
            { value: "Executing the responsibilities of assistant director during production"},
            { value: "Using available ICT resources for creation of stage, radio and screen contents"},
            { value: "Using social media platforms to distribute stage, radio and screen contents"},
            ];

            var referenceOptions = [
            { value: "Select Reference"},
            { value: "Ministry of Education, Science and Technology. (2025). Acting Syllabus for Ordinary Secondary Education Vocational Stream Form I-IV. Vocational Education and Training Authority"},
            ];

            var topicsOptions = [
            { value: "Select main competence"},
            { value: "Applying principles of acting for stand-up comedy"},
            { value: "Applying principles of assisting in directing actors and actresses"},
            { value: "Using ICT to market actor or actress"},
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
        

    } else if (subject === "Academic Communication") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Form words using word-formation processes that express clarity and fluency in oral and written communications"},
        { value: "Pronounce words correctly using stress and intonation in oral and written communications"},
        { value: "Interpret literal meanings of words and sentences in various contexts"},
        { value: "Evaluate the importance of stress and intonation in oral communications"},
        { value: "Write different sentences using appropriate punctuation marks"},
        { value: "Construct paragraphs using appropriate steps in writing texts"},
        { value: "Compose essays using appropriate structure"},
        { value: "Participate in dialogues and debates to discuss discipline-specific matters (e.g., markets, politics, education, health, etc.)"},
        { value: "Participate in formal and informal meetings (e.g., school, workplace, home, village, ward)"},
        { value: "Narrate diverse events/activities/stories orally and in written communication"},
        { value: "Prepare posters for academic presentations"},
        { value: "Search for academic information from physical and online sources"},
        { value: "Assess the importance of different basic databases in learning"},
        { value: "Participate in face-to-face research interviews to collect information"},
        { value: "Make classroom presentations"},
        { value: "Identify simple and complex illustrations from various documents"},
        { value: "Interpret simple illustrations used in documents"},
        { value: "Use simple illustrations to prepare academic documents"},
        
    ];

   

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Demonstrate the understanding of basic principles and usage of English language (e.g., syntax, pronunciation, grammar, etc.)"},
        { value: "Apply principles of language to construct sentences, paragraphs, and texts"},
        { value: "Demonstrate mastery of the use of English in academic communication"},
        { value: "Prepare different documents in English"},
        { value: "Use ICT to search for academic information"},
        { value: "Prepare and make academic presentations in English"},
        { value: "Demonstrate mastery of using illustrations in academic documents"},
        
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Academic Communication for Advanced Level secondary schools student's book, form Five. Tanzania Institute of Education"},
        
    ];
    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate mastery of the principles of English language"},
        { value: "Apply academic communication skills"},
       
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
            { value: "Describe the concept of the cell (cell theory, organelles and biological molecules)"},
            { value: "Explain the physiology of photosynthesis (mechanism of light reaction and dark reaction in C3 and C4 plants)"},
            { value: "Describe the structure of epithelial tissues in relation to its digestive role"},
            { value: "Describe the physiology of gaseous exchange and respiration in mammals (transportation of gases, aerobic and anaerobic respiration mechanisms)"},
            { value: "Explain the concept of gaseous exchange in plants (mechanism and theories of stomata opening and closing)" },
            { value: "Describe the physiology of coordination (mechanism of transmission of nerve impulse, seeing, hearing and body balance)"},
            { value: "Discribe the application or role of synthetic phytohormones"},
            { value: "Explain the concept of regulation in mammals (feedback mechanisms, urine formation and osmoregulation)"},
            { value: "Explain classification systems and taxonomic rank"},
            { value: "Describe principles of binomial nomenclature (rules of scientific naming, taxonomic and taxonomic hierarchy)"},
            { value: "Apply knowledge on binomial nomenclature in different fields (forestry, medicine and agriculture)"},
            { value: "Describe the distinctive characteristics of kingdoms, phyla/ divisions and class (Monera, Protoctista, Fungi, Plantae, and Animalia)"},
            { value: "Apply skills used in biological investigation (observation, measurement, data collection, and report writing skills)"},
            { value: "Plan and execute in an independent biological investigation"},
            { value: "Design and carry out anatomical and physiological investigations related to digestive and excretory systems, photosynthesis, and gas exchange in living organisms"},
            { value: "Design and carry out a project in Biology"},
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
            { value: "Tanzania Institute of Education. (2023). Biology for Advanced Level secondary schools student's book, form Five. Tanzania Institute of Education"},
            
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
 else if (subject === "Elimu ya Dini ya Kiislam") {
    
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
        

    } else if (subject === "Academic Communication") {
    
    var mainOptions = [
        { value: "Select Main Activity"},
        { value: "Construct sentences (complex, compound, etc.) by observing subject-verb agreement and appropriate word order in oral and written communications"},
        { value: "Justify the necessity of word order in sentence construction"},
        { value: "Use field-specific vocabularies (e.g., science, commerce, agriculture, etc.) in oral and written communication"},
        { value: "Interpret implied meanings of words and sentences in various contexts"},
        { value: "Write various reports using appropriate procedures"},
        { value: "Make presentations on diverse matters (e.g., health, death, celebration, etc.) and contexts (e.g., school, home, workplace, etc.) using informative skills"},
        { value: "Use e-mails, professional platforms (e.g., LinkedIn) and online portals (e.g., Ajira portal) to communicate information"},
        { value: "Write project proposals and project reports"},
        { value: "Write references and citations in academic documents manually and by using software (e.g., Mendeley, Endnote, etc.)"},
        { value: "Conduct online research interviews to collect information"},
        { value: "Assess the importance of different basic databases in learning"},
        { value: "Use multimedia devices (e.g., computer, projector, TV, etc.) in oral presentations"},
        { value: "Present project proposals and project reports"},
        { value: "Interpret complex illustrations used in various documents"},
        { value: "Use complex illustrations to prepare academic documents"}
    ];

    var competenceOptions = [
        { value: "Select Specific Competence"},
        { value: "Demonstrate understanding of the basic principles and usage of English language (e.g., syntax, pronunciation, grammar, etc.)"},
        { value: "Apply principles of language to construct sentences, paragraphs and texts"},
        { value: "Demonstrate mastery of the use of English in academic communication"},
        { value: "Prepare different documents in English"},
        { value: "Use ICT to search for academic information"},
        { value: "Prepare and make academic presentations in English"},
        { value: "Demonstrate mastery of using illustrations in academic documents"}
    ];  

    var referenceOptions = [
        { value: "Select Reference"},
        { value: "Tanzania Institute of Education. (2023). Academic Communication for Advanced Level secondary schools student's book, form Six. Tanzania Institute of Education"}
    ];

    var topicsOptions = [
        { value: "Select main competence"},
        { value: "Demonstrate mastery of principles of English language"},
        { value: "Apply academic communication skills"}
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
    } else if (subject === "Historia Ya Tanzania na Maadili") {
        
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
            { value: "Taasisi ya Elimu Tanzania. (2023). Historia Ya Tanzania na Maadili kitabu cha mwanafunzi kwa shule za sekondari kidato cha Sita. Taasisi ya Elimu Tanzania"},
            
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

(function () {
        function buildClassSubjectMap(fn) {
            var src = fn.toString();
            var map = {};

            var classRegex = /subClasses\s*===\s*"([^"]+)"\s*\)\s*\{/g;
            var classMatches = [];
            var m;
            while ((m = classRegex.exec(src)) !== null) {
                classMatches.push({ name: m[1], blockStart: classRegex.lastIndex });
            }

            for (var i = 0; i < classMatches.length; i++) {
                var start = classMatches[i].blockStart;
                var end = (i + 1 < classMatches.length)
                    ? src.indexOf('subClasses ===', start)
                    : src.length;
                if (end === -1) end = src.length;

                var block = src.slice(start, end);
                var subjRegex = /subject\s*===\s*"([^"]+)"/g;
                var subjects = [];
                var sm;
                while ((sm = subjRegex.exec(block)) !== null) {
                    if (subjects.indexOf(sm[1]) === -1) subjects.push(sm[1]);
                }
                map[classMatches[i].name] = subjects;
            }
            return map;
        }

        window.AXP_CLASS_SUBJECT_MAP = buildClassSubjectMap(createOptionElement);
    })();

    document.getElementById("classes").addEventListener("change", createOptionElement);
    document.getElementById("subject").addEventListener("change", createOptionElement);
    createOptionElement();
})();
