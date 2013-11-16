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