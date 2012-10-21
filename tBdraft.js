$(document).ready(function () {
//	alert('Init function');	
	build_user();
	build_book_lists();
	build_feed();


/*
* Playing with animation
* effects for hiding
* news stories
*/
	$("#pdelvec").delay(3100).slideUp('slow');	
	$("#aironrailroad").delay(6200).slideUp('slow');
	$("#RevoltSheWrote").delay(9300).slideUp('slow');
	$("#takeapartyrhead").delay(12400).slideUp('slow');
	$("#mmelton").delay(15500).slideUp('slow');
	$("#satansaysdance").delay(18600).slideUp('slow');
	$("#rahulsays").delay(21700).slideUp('slow');

});

/*
* build's user's profile
*
*/ 
var build_user = function() {
	var user = User.all[0];
	var main_div = $('#user');
	var user_uname = $('<p id="username"></p>');
	var user_avatar = $('<img id = "usrimg" src="avatar.gif" alt="username" title="username"></img>');
	var user_location = $('<p id="location"></p>');
	var user_ranking = $('<p id="ranking"></p>');
	
	main_div.append(user_uname.append(user.username));
	main_div.append(user_avatar);
	main_div.append(user_location.append(user.locate));
	main_div.append(user_ranking.append('Ranking: <img class = "stars" src="Stars.png" alt="stars" title="stars"></p>'));
}

/*
* Builds book lists with bogus data
* Needs to populate lists
* with books from User's respective
* lists.
* Also needs to be able to add/remove books
* from various lists
* popup for adding? 
*/
var build_book_lists = function() {
	var negot_div = $('#negotiations');
	var avail_div = $('#available');
	var wish_div = $('#wishlist');
	var hist_div = $('#history');

	build_list(negot_div);
	build_list(avail_div);
	build_list(wish_div);
	build_list(hist_div);		
}

/*
* helper function
* to build list
*/
var build_list = function(type_div) {
	var books = [];
	for(var i = 0; i < 20; i++) {
		books.push('<img class="book" src="samplebook.png" alt="book title" title="book title">');
		type_div.append(books[i]);	
	}
}

/* Builds a feed
* needs to be event-driven
* to hide news stories
*/
var build_feed = function() {
	var root_div = $('#feed');
		
	for(var i = 0; i < News.all.length; i++) {
		var hideme = $('<p><a href="#">Hide</a></p>');
		var news = News.all[i];
		var use_div = $('<div id='+news.user+'></div>');
		var content = $('<p><img clas = "avatar" src = "avatar.gif" alt="username" title="username"></p>');
		var story = String(" " + news.user + " " + news.story);	
		content.append(story);
		use_div.append(content);
		use_div.append(hideme);
		root_div.append(use_div);
	}	
}

/*TODO
* add ranking system
* clean-up jquery code
* * make more readable
* * * learn about style rules for having html
* * * event-driven!
*/
