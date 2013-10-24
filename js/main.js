$(function() {
	
	// Load movies
	var loadMovies = function(moviesURL) {
		
		// Add "loading" spinner while fetching content
		$('.main-cnt').addClass('cnt-loading');
		
		$.ajax({ 
			type: "GET",
			dataType: "JSON",
			url: moviesURL,
			success: function(data){
				var movieList = '';
				for (var i = 0; i < data.length; i++) {
					var movieItem = '';
					movieItem += '<li class="cnt-list-item">';
					movieItem += '<span class="list-item-handler"><i class="icon-ellipsis-vertical"></i></span>';
					movieItem += '<img class="movie-img" src="' + data[i].Image + '" width="50" height="75" />';
					movieItem += '<div class="movie-info">';
					movieItem += '<h3>' + data[i].Name + '</h3>';
					movieItem += '<p><small><span class="movie-genre">' + data[i].Genre + '</span>, ';
					movieItem += '<span class="movie-time">' + data[i].Length + ' min</span> ';
					movieItem += '<span class="movie-rate">' + data[i].Rating + '</span></small>'
					movieItem += data[i].LeadStars + '</p>';
					movieItem += '</div><i class="icon-chevron-right"></i></li>';

					// Add movie to movieList set
					movieList += movieItem;
				};
				$('.cnt-list').html(movieList);

				// Remove "loading" spinner when content is already in place
				$('.main-cnt').removeClass('cnt-loading');

				// Reset scroll to top of the page
				window.scrollTo(0,0);
			}
		});
	}

	// Load movies for default tab
	loadMovies($('.tab-btn.tab-default').attr('href'));
	
	// Change active tab and load new movies list
	$('.tab-btn').on('click', function(e){
		e.preventDefault();
		$('.tab-btn').removeClass('tab-active');
		$(this).addClass('tab-active');
		loadMovies($(this).attr('href'));
	})

	// jQuery UI Sortable list
	$( ".cnt-list").sortable({
		revert: true,
		handle: ".list-item-handler",
		opacity: 0.85
	});
	$( ".cnt-list" ).disableSelection();
	
});
