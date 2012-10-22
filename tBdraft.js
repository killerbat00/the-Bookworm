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
	$("#killerbat00").delay().slideUp('slow');
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
	var user_avatar = $('<img id = "usrimg" src="'+user.avatar+'" alt="'+user.username+'" title="'+user.username+'"></img>');
	var user_location = $('<p id="location"></p>');
	var user_ranking = $('<p id="ranking"></p>');
	var add_book = $('<p><a href="#" class ="addbook" >Add/Delete Book</a></p>');	
	
	main_div.append(user_uname.append(user.username));
	main_div.append(user_avatar);
	main_div.append(user_location.append(user.locate));
	main_div.append(user_ranking.append('Ranking: <img class = "stars" src="images/Stars.png" alt="stars" title="stars"></p>'));
	main_div.append(add_book);
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
	var books2 = [];
	for(var i = 0; i < book.all.length; i++){
		books.push('<img id = "book" class = "bookimg" src = "'+book.all[i].cover+'" alt = "'+book.all[i].title+'" title = "'+book.all[i].title+'">');
		type_div.append(books[i]);
		type_div.append(books[i]);	
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
		var content = $('<p><img class = "avatar" src = "'+news.avatar+'" alt="username" title="username"></p>');
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
