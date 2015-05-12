var questionify = {
	questionadata : {},
	debug : false,
	container : 'container',

	setQuestionData : function(q) {
		this.questiondata = q;
	},
	showQuestionHtml : function() {
		$.each(this.questiondata, function(q, data) {

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

		$(parent.container).find("#q1").show(200);
	},
	questionClick : function(q) {
		

		var next = q.data('next');
			var current = q.data('id');
			

			$.each(this.questiondata, function(question, data) {
				var qid = question.substr(1);
				var qnext = next.substr(1);
				var qcurrent = current.substr(1);

				if(parseInt(qid) > parseInt(qcurrent)) {
					$(parent.container).find("#q" + qid).hide(200);
				}

			});

			$('#' + next).show(200);
	},
	setContainer : function(c) {
		this.container = c;
	},
	flowify : function(q, container, debug) {
		
		this.setQuestionData(q);
		this.container = container || this.container;
		this.debug = debug || this.debug;
		this.showQuestionHtml();
	},
	getQuestions : function() {
		return this.questiondata;
	},
	getQuestionAnswers : function(qid) {
		return $this.questiondata.qid;
	}
}