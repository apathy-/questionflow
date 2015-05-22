	var questiondata = {
		q1 : { 
			question : 'Is this question one?', 
			options : { yes : 'q2', no : 'q3'},
			visible : true
		},
		q2 : {
			question : 'Correct. Shall we go to The next question?',
			options : { yes : 'q4', no : 'q5'},
			visible : false
		},
		q3 : {
			question : 'Wrong. Shall we go to The next question?',
			options : { yes : 'q5', no : 'q6'},
			visible : false
		},
		q4 : {
			question : 'Question FOUR, but you should only see fewer',
			options : { yes : 'q5', no : 'q6'},
			visible : false
		},
		q5 : {
			question : 'Question FIVE, but you should only see fewer',
			options : { yes : 'q6', no : 'q6'},
			visible : false
		},
		q6 : {
			question : 'Question SIX',
			options : { 'You have ended the list' : '' },
			visible : false
		}
	}

	$( document ).ready(function() {
		questionify.flowify(questiondata, 'container', true, true);

		$(document.body).on('click', '.questionAnswer' ,function(){

			questionify.questionClick($(this));

		});


	});
