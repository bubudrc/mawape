$(function() {

	// Initialize placeholer plugin
	$('input, textarea').placeholder();

	//  Toggle slide form through the "contact us" button
	$('#contact-trigger').on('click', function(e){
		e.preventDefault();
		slideContent(this);
	})

	// Toggle slide form through the SUBMIT input
	$('#contact-submit').on('click', function(e){
		e.preventDefault();
		slideContent(this);
	});

	// Validate and send the contact email
	var inputsElements = getAllInputsElements();
	sendEmail(inputsElements);
	
});

// Handles the slide
var slideContent = function (trigger) {
	var contentTrigger = $(trigger);
	var contentWrapper = $('#' + $(trigger).attr('data-content-wrapper'));

	contentTrigger.addClass('active');
	contentWrapper.slideDown();
	contentWrapper.addClass('open');
	$('body').scrollTo(contentWrapper);
}

var getAllInputsElements = function(){
	var formElements = new Array();
	$("#contact-data :input").each(function(){
	    formElements.push($(this));
	});

	return formElements;
}

var sendEmail = function(formElements){
	$('#contact-data').validate({
        submitHandler: function(form) {
            var parametros = {
	                "contact-name" : $('#contact-name').val(),
	                "contact-mail" : $('#contact-mail').val(),
	                "contact-phone" : $('#contact-phone').val(),
	                "contact-msj" : $('#contact-msj').val()
	        };
	        $.ajax({
	                data:  parametros,
	                url:   'sendmail.php',
	                type:  'post',
	                beforeSend: function () {
	                	$('#result-form').height($('#contact-data').outerHeight(true));
	                	
	                	$("#result-form").show();
	                    $("#result-process").html("Sending, please wait...");
	                },
	                success:  function (response) {
	                    $("#result-process").html('Great. Your email was sent. Thanks');

	                    setTimeout(function(){
	                    		$("#result-form").hide();
	                    		$('.btn').removeClass('active');
								$('#contact-wrapper').slideUp('slow').removeClass('open');
								$('body').scrollTop(300);

								$.each(formElements, function(key, value) {
									if(value.val() != 'Send message'){
										value.val('');
									}
								});
	                    	},3000
	                    );
	                }
	        });

        }
    });
}

//  Animate the scroll
$.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}