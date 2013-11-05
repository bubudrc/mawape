$(function() {

	var modalWrapper = $(".modal-wrapper");
	var modalContent = $(".modal-cnt");

	// Change active tab and load new movies list
	$('.btn-contact').on('click', function(e){
		e.preventDefault();
		$(this).addClass('active');
		modalWrapper.addClass('modal-open');
	})

	$(document).mouseup(function (e) {

		// if the target of the click isn't the container nor a descendant of the container
		if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
			modalWrapper.removeClass('modal-open');
			$('.btn-contact').removeClass('active');
		}
	});
	
});
