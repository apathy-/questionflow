var questionify = {
	questiondata : {},
	debug : false,
	debugData : [],
	container : 'container',
	hideafter : false,

	setQuestionData : function(q) {
		questionify.questiondata = q;
		if(questionify.debug) {
			console.log("QuestionData Added");
		}
	},
	showQuestionHtml : function() {
		$.each(questionify.questiondata, function(q, data) {

			var htmlstring = "";

			//question header
			htmlstring = htmlstring + '<div question" style="display: none;" id="' + q + '"><span class="question">' + data.question + '</span><ul>';
				
				//question options/answers
				$.each(data.options, function(i, a) {
					htmlstring = htmlstring + '<li class="questionAnswer" data-id="' + q + '" data-answer="' + i + '" data-next="' + a + '">' + i + '</li>';
				});

			//finish the HTML
			htmlstring = htmlstring + '</ul></div>'
			$(parent.container).append(htmlstring);	
		});

		
		if(questionify.debug) {
			console.log("QuestionHTML Appended");
		}

		$(parent.container).find("#q1").show(200);
	},
	questionClick : function(q) {
		if(questionify.debug) {
			console.log("Question Clicked: " + q.data('id')); ///todo breakdown obj
		}

		var next = q.data('next');
		var current = q.data('id');
		

		$.each(questionify.questiondata, function(question, data) {
			var qid = question.substr(1);
			var qnext = next.substr(1);
			var qcurrent = current.substr(1);

			if(parseInt(qid) > parseInt(qcurrent) && $(parent.container).find("#q" + qid).prop('visible')) {
				$(parent.container).find("#q" + qid).hide(200);

				if(questionify.debug) {
					console.log("Question Hidden: " + qid); ///todo breakdown obj
				}
			}

		});

		if(questionify.hideafter == true) {
			$('#' + current).hide(200);
		}

		$('#' + next).show(200);


	},
	setContainer : function(c) {
		questionify.container = c;
		if(questionify.debug) {
			console.log("Container Set: " + c); ///todo breakdown obj
		}
	},
	flowify : function(q, container, debug, hideafter) {
		
		questionify.debug = debug || questionify.debug;
		questionify.hideafter = hideafter || questionify.hideafter;
		questionify.setContainer(container || questionify.container);
		questionify.setQuestionData(q);
		questionify.showQuestionHtml();
	},
	getQuestions : function() {
		return questionify.questiondata;
	},
	getQuestionAnswers : function(qid) {
		return questionify.questiondata.qid;
	}
}