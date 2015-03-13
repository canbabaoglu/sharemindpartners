$(".contact-row form").submit(function(event) {
	event.preventDefault();

	hideShow(".contact-row form", ".contact-row .alert-success");

	//get input field values data to be sent to server
    postData = {
        'name'          : $('input[name=name]').val(), 
        'company'       : $('input[name=company]').val(), 
        'email'         : $('input[name=email]').val(), 
        'phoneNo'       : $('input[name=phoneNo]').val(),  
        'message_body'  : $('textarea[name=message-body]').val()
    };

    $('.contact-row .btn-submit').attr('disabled', 'disabled');

    var localUrl      = "http://sharemindpartners.app/leads";
    var productionUrl = "http://sharemindpartners.com/leads";
    
    $.ajax({
		type      : "POST",
		url       : localUrl,
		data      : postData,
		dataType  : "json",
		success   : processJson, 
		error     : connectionError 
	});

	function processJson(response) {

		console.log(response);

		if (response.type == "error") {
			hideShow(".contact-row form", ".contact-row .alert-danger");
		}	
	}; 

	
	function connectionError() {
		console.log('error');
		hideShow(".contact-row form", ".contact-row .alert-danger");
	};

	
	function hideShow(hideDiv, showDiv) {
		$(hideDiv).fadeOut(1000);
		setTimeout( function(){
			$(showDiv).fadeIn(1000);
		},1000);
	}
	
	
	
});  