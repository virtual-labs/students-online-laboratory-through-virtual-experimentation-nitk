// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": " 	

For a plug flow reactor?",
            "a": [
                {"option": "axial diffusivity is infinite, radial diffusivity is zero",      "correct": true},
                {"option": "		axial diffusivity is zero, radial diffusivity is zero",     "correct": false},
                {"option": "		axial diffusivity is zero, radial diffusivity is infinite",      "correct": false},
                {"option": "		axial diffusivity is infinite, radial diffusivity is infinite ",      "correct": false}		// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:empty tower velocity in packed bed</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:empty tower velocity in packed bed</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " A “space time” of 5 minutes means?",
            "a": [
                {"option": "		100% conversion of the reactant is achieved in 5 minutes",               "correct": false},
                {"option": "One reactor volume of feed at specified conditions is processed in 5 minutes",   "correct": false},
                {"option": "		5% conversion is achieved in one minute",               "correct": false},
               {"option": "		none of these", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:Ergun equation</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Ergun equation</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " For a tubular reactor with space time τ  and residence time τ  , the following statement holds",
            "a": [
                {"option": "		τ and θ always equal,",           "correct": true},
                {"option": "		τ = θ when the fluid density changes in the reactor",                  "correct": false},
                {"option": "		τ = θ for an isothermal tubular reactor in which the density of the process fluid is constant,",  "correct": false},		
                {"option": "τ = θ for a non-isothermal reactor",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:same as</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:same as</p>" // no comma here
        },
        { // Question 4
            "q": " A homogeneous zero-order reaction is conducted in a PFR at 1000C and a reactor volume of V lit is required for realizing a specified conversion. If the same reaction is conducted at1100C, what will be the required reactor volume for the same conversion level as above under otherwise uniform conditions? The activation energy of the reaction is 84 KJ/mole. ",
            "a": [
                {"option": "		V lit",    "correct": false},
                {"option": "		V/2 lit",     "correct": true},
		 {"option": "V/4 lit",     "correct": false},
		 {"option": "			V/6 lit",     "correct": false}
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:proportional to the velocity</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:proportional to the velocity</p>"  // no comma here
        },
       { // Question 5
            "q": "At present a zero order reaction is being conducted in a PFR of volume V and a fractional conversion of 0.50 is realized. If a 2nd PF reactor of volume V is now added to the first reactor, the reactant concentration in the fluid exiting the battery of two PFRs will be",
            "a": [
                {"option": "zero",    "correct": false},
                {"option": "25% of the reactant concentration in the fluid entering the first reactor",     "correct": true},
		 {"option": "50% of the reactant concentration in the fluid entering the second reactor",  "correct": false},

                {"option": "either (a) or (b)",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:nonlinear</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:nonlinear</p>"  // no comma here
        } // no comma here
    ]
};
