// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p>study and take quiz</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
         { // Question 1 - Multiple Choice, Single True Answer
            "q": "Under fluidized condition, pressure drop across the bed ---------------------- with the superficial velocity.?",
            "a": [
                {"option": "increases",      "correct": false},
                {"option": "decreases",     "correct": true},
                {"option": "	remains constant",      "correct": false}
               // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:remains constant</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:remains constant</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " For calculation of particle Reynolds number  ---------- is the characteristic dimension used?",
            "a": [
                {"option": "		equivalent diameter of the particle",               "correct": false},
                {"option": "		diameter of the column",   "correct": true},
               {"option": "none",               "correct": false}	
               // {"option": "0.2", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:equivalent diameter of the particle</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:equivalent diameter of the particle</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " 	Minimum fluidization velocity for a fluidized bed system depends on",
            "a": [
                {"option": "		size,shape and density of particles alone",           "correct": false},
                {"option": "		density and viscosity of fluid",                  "correct": false},
                { "option": "		Both size,shape and density of particles alone and density and viscosity of fluid", "correct": true }	
               // {"option": "5",          "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both size,shape and density of particles alone and density and viscosity of fluid</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Both size,shape and density of particles alone and density and viscosity of fluid</p>" // no comma here
        },
        { // Question 4
            "q": " The height of a fluidized bed at incipient fluidization is 0.075 m, and the corresponding voidage is 0.38.  If the voidage of the bed increases to 0.5, then the height of the bed would be",
            "a": [
                {"option": "		0.058 m",    "correct": true},
                {"option": "		0.061 m",     "correct": false},
		 {"option": "		0.075 m",     "correct": false},
		 {"option": "			0.093 m",     "correct": false}
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:0.093 m</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:0.093 m</p>"  // no comma here
        },
         { // Question 5
            "q": "A 1 m high bed made up of 2 mm particles is to be fluidised by an oil (density 900 kg/m3; viscosity 0.01 Pa s).  If at the point of incipient fluidisation, the bed voidage is 39% and the pressure drop across the bed is 10 kPa, then the density of particles is",
            "a": [
                {"option": "		2571 kg/m3",    "correct": true},
                {"option": "		3514 kg/m3",     "correct": false},
		 {"option": "			4000 kg/m3",  "correct": false},
		  {"option": "4350 kg/m3",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:2571 kg/m3</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:2571 kg/m3</p>"  // no comma here
        } // no comma here
    ]
};
