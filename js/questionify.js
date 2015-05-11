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
		$.each(questiondata, function(q, data) {

			var htmlstring = "";

			//question header
			htmlstring = htmlstring + '<div question" style="display: none;" id="' + q + '"><span class="question">' + data.question + '</span><ul>';
				
				//question options/answers
				$.each(data.options, function(i, a) {
					htmlstring = htmlstring + '<li class="questionAnswer" data-id="' + q + '" data-answer="' + i + '" data-next="' + a + '">' + i + '</li>';
				});

			//finish the HTML
			htmlstring = htmlstring + '</ul></div>'
			$('#container').append(htmlstring);
		});

		$("#container").find("#q1").show(200);

		$(document.body).on('click', '.questionAnswer' ,function(){

			var next = $(this).data('next');
			var current = $(this).data('id');
			

			$.each(questiondata, function(q, data) {
				var qid = q.substr(1);
				var qnext = next.substr(1);
				var qcurrent = current.substr(1);
 
				if(parseInt(qid) > parseInt(qcurrent)) {

					$("#container").find("#q" + qid).hide(200);

				}

			});

			$('#' + $(this).data('next')).show(200);
		});

		//debug
		/*
		$.each(questiondata, function(k, data) {
			console.log(k + ":" + data.question);
			$.each(data.options, function(i, a) {
				console.log(i + ":" + a);
			});
		});
		*/
	});
