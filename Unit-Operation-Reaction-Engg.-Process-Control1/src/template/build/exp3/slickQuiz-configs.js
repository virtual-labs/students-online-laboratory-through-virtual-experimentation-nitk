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
            "q": "Pressure recovery in the case of orificemeter is ------------- that for venturimeter?",
            "a": [
                {"option": "more than",      "correct": false},
                {"option": "less than",     "correct": true},
                {"option": "equal to",      "correct": false},
                {"option": "cannot say",      "correct": false}		// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:less than</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:less than</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " Orificemeter is -------------------------- type of flowmeter?",
            "a": [
                {"option": "variable area",               "correct": false},
                {"option": "variable head",   "correct": true},
                {"option": "Mass flow",               "correct": false},
               {"option": "velocity meter", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:variable head</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:variable head</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " Coefficient of discharge for  orificemeter is",
            "a": [
                {"option": "always less than 1,",           "correct": true},
                {"option": "always greater than 1",                  "correct": false},
                {"option": "always equal to 1,",  "correct": false},		
                {"option": "can be less than, greater than or equal to 1",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:always less than 1</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:always less than 1</p>" // no comma here
        },
        { // Question 4
            "q": "  For an orifice meter,if you plot log( flow rate) vs log(pressure drop),the slope of the straight  line is ",
            "a": [
                {"option": "	0.2",    "correct": false},
                {"option": "	2",     "correct": false},
		 {"option": "0.5",     "correct": true},
		 {"option": "	5",     "correct": false}
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:0.5</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:0.5</p>"  // no comma here
        },
       { // Question 5
            "q": "Coefficient of discharge is the",
            "a": [
                {"option": "ratio of actual flow rate to theoretical flow rate",    "correct": true},
                {"option": "ratio of theoretical flow rate to actual flow rate",     "correct": false},
		 {"option": "ratio of velocity at the orifice or throat to the velocity at the pipe",  "correct": false},

                {"option": "ratio of velocity at pipe to the velocity at the orifice or throat",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:ratio of actual flow rate to theoretical flow rate</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:ratio of actual flow rate to theoretical flow rate</p>"  // no comma here
        } // no comma here
    ]
};
