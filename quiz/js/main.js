//no need for main.js here
//QUIZ PAPER PROTOTYPE

//HTML

	//vague
	//questions
	//EX:
		//var questions = [
			//{
			//	question: "what is 2 + 2?",
				//answer: 4
			//}
		//]
		//loop through each question
		//for(var i = 0; i < questions.length; i ++){

		///	var question = questions[i].question;
		//store each question value
		//	var el = document.getElementById('question' + [i]);
		//store each element to add question to
		//check element and question being selected
		//	console.log(question, el);
		//update text content of each element
		//	el.textContent = question;
		//}
//empty div in html
		//questions and answers will be strings
		///each question set can be different unique function
	//text tags for "?questions"
		//feeedback instant choice
			//color change?
			//sound?
			//shake?
		//or after submit all
			//alert message that pops up in center screen and can be x out ewith choice to try again?
			//
	//ways to take answers (typing, multiple choice)
		//select tags in html
		//radeo tags for check boxes
		//can create multiple html pages to go to other pages
		//^create a list
			//input box
			//multiple choice-buttons?
			//radeos input

	//do we want to keep score
		//^ h1 correct
		//^h1 incorrect
//JAVASCRIPT
	//create array of object pair
		//q & a for each
	//find user input values
		//value of check box, button, radeo, etc
	//for loops for each array grouping
		//how do we make sure were on the right question?
		//function that takes user input of exact ?
		// and compares to answer
	//get elements by class name or id for array


let quizArr = [
	{
		//this is q0
		question: "what did the fox say?",
		answer: "dingdingding"
	},
	{
		//this is q1
		question: "how many cookies does it take to build NYC?",
		answer: "500",
	},
	{
		//this is q2
		question: "how do we live?",
		answer: "by chance",
	},
	{
		//this is q3
		question: "how do you like your coffee?",
		answer: "dark as your souls",
	},
	{
		//this is q4
		question: "what is the answer to life?",
		answer: "42",
	}
];
//this for loop puts the questions from the array into respective h1 on html
for(let i = 0; i < quizArr.length; i ++){
	//target corresponding h1
	let thisHeader = document.getElementById("q"+i)
	//target corresponding object in question
	let thisQuestion = quizArr[i].question //this is looking at one object "dot notation"
	//put question in h1
	thisHeader.textContent = thisQuestion
}

function checkAnswers(){
	//check score
	let score = document.getElementById('score');
	score.innerHTML = "";
	let correct = 0; //variable is correct [set it to 0 first(this becomes an object)
	let incorrect = 0;
	//userGuess will be class for input
	//take user input and check it vs their corresponding questions
	let userGuess = document.getElementsByClassName('userGuess');
	console.log(userGuess)
	for(let i = 0; i < quizArr.length; i ++){
		if(userGuess[i].value == quizArr[i].answer){
			//^what they type in / ^what the answer is
			document.getElementById('q'+i).style = "color:green;"
			correct++;
		}else{
			document.getElementById('q'+i).style = "color:tomatoe;"
			incorrect++;
		}
	}
		
			//.style changes css of element
		//userGuess[i].value; //this checks all 3 input tags one at a time
		//.value saves each question one at a time
	
	//creat elements for score
	let correctBox = document.createElement("h6")

	let incorrectBox = document.createElement("h1")

	//put text into new elements
	correctBox.innerHTML = "Correct:" + correct;
	incorrectBox.innerHTML = "Incorrect:" + incorrect;


	//send elements to #score div
	score.appendChild(correctBox);
	score.appendChild(incorrectBox);

	score.style ="display:block;"
}
	//change display of #score div to block