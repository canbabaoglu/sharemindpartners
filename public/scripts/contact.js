$(".contact-row form").submit(function(event) {
	event.preventDefault();

	//get input field values data to be sent to server
    postData = {
        'name'          : $('input[name=name]').val(), 
        'company'       : $('input[name=company]').val(), 
        'email'         : $('input[name=email]').val(), 
        'phoneNo'       : $('input[name=phoneNo]').val(),  
        'message_body'  : $('textarea[name=message-body]').val()
    };

    $('.contact-row .btn-submit').attr('disabled', 'disabled');

    var base_url = 'http://localhost'
    
    $.ajax({
		type: "POST",
		url: base_url+"/leads",
		data: postData,
		dataType: "json",
		success: processJson, 
		error: connectionError 
	});

	function processJson(response) {

		console.log('Success');

		/*
		if (response.type == "success") {
			hideShow(".contact-form-row", ".contact-row .confirmation-row");	
		} else if (response.type == "error") {
			hideShow(".contact-form-row", ".contact-row .error-row");
		}	
		*/
	}; 

	
	function connectionError() {
		console.log('error');
		//hideShow(".contact-form-row", ".contact-row .error-row");
	};

	
	function hideShow(hideDiv, showDiv) {
		$(hideDiv).fadeOut(1000);
		setTimeout( function(){
			$(showDiv).fadeIn(1000);
		},1000);
	}
	
	
	
});  