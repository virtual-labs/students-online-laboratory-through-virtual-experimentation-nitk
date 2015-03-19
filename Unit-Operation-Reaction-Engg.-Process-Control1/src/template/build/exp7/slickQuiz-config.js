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
            "q": " A  second  order reaction is  taking place in a constant volume batch reactor of 5 lit volume at a temperature of 30°C [case( i)] . The rate constant was found to be 5lit/mol/min. Same reaction was carried out in a 2lit volume batch reactor at 30° C( case ii). The rate constant obtained with case (ii) is?",
            "a": [
                {"option": "		Higher that that in case(i)",      "correct": false},
                {"option": "Lower than that in case (i)",     "correct": true},
                {"option": "	Equal to case (i)",      "correct": false},
              {"option": "Cannot predict ",      "correct": false}		// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Equal to case (i)</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Equal to case (i)</p>" // no comma here
        },
          { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In a batch reactor an; irreversible first order reaction A  R takes place. The reaction rate constant (k) = 0.2 sec-1, and the initial concentration of A (CAo) = 0.1 mol/m3. Find the conversion of the reaction after 2 seconds?",
            "a": [
                {"option": "		70%",               "correct": false},
                {"option": "				32.7%",   "correct": true},
               {"option": "		30%",               "correct": false},	
               {"option": "		67.3%", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:32.7%</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:32.7%</p>" // no comma here
        },
          { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " Liquid A decomposes in a batch reactor by a second order kinetics.  If 50% of A is converted in a five minute run, how long would it take to reach 75% conversion",
            "a": [
                {"option": "				7.5 min",           "correct": false},
                {"option": "		15min",                  "correct": false},
                {"option": "		30min",  "correct": true},	
              {"option": "		10min",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:30min</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:30min</p>" // no comma here
        },
       { // Question 4
            "q": "Rate constant  ‘k’, absolute temperature ‘T’ are related by  Arrhenius equation as",
            "a": [
                {"option": "			k proportional T^1.5",    "correct": true},
                {"option": "			k proportional exp (-E/RT)",     "correct": false},
		 {"option": "				k proportional sqrt(T)",     "correct": false},
		 {"option": "				k proportional T",     "correct": false}
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:k proportional exp (-E/RT)</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:k proportional exp (-E/RT)</p>"  // no comma here
        },
         { // Question 5
            "q": "A second; order reaction is  taking place in a constant volume batch reactor of 5 lit volume at a temperature of 30°C [case( i)] . The rate constant was found to be 5lit/mol/min. Same reaction was carried out in a 2lit volume batch reactor at 30° C( case ii). The rate constant obtained with case (ii) is",
            "a": [
                {"option": "		Higher that that in case(i)",    "correct": true},
                {"option": "		Lower than that in case (i)",     "correct": false},
		 {"option": "				Equal to case (i)",  "correct": false},

                {"option": "		Cannot predict",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Equal to case (i)</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Equal to case (i)</p>"  // no comma here
        }// no comma here
    ]
};
