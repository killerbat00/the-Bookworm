$(document).ready(function () {
//	alert('Init function');	
	build_user();
	build_book_lists();
	build_feed();
	manage_feed();
	manage_lists();
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
	var helpful = $('<p id="helpful">(Click book for info)</p>');
	
	main_div.append(user_uname.append(user.username));
	main_div.append(user_avatar);
	main_div.append(user_location.append(user.locate));
	main_div.append(user_ranking.append('Ranking: <img class = "stars" src="images/Stars.png" alt="stars" title="stars"></p>'));
	main_div.append(add_book);
	main_div.append(helpful.hide());
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
	var root = $('.books');
	var helpful = $('<p>Click book for more info</p>');
	var negot_div = $('#negotiations');
	var avail_div = $('#available');
	var wish_div = $('#wishlist');
	var hist_div = $('#history');
	
	build_negot(negot_div);
	build_avail(avail_div);
	build_wish(wish_div);
	build_hist(hist_div);
	
}

/*
* builds negotiation list
*/
var build_negot = function(type_div) {
	var books = [];
	for (var i = 0; i < book.all.length; i++) {
		if (book.all[i].inNegotiation == true) { 
			var cur_book = book.all[i];
			books.push('<img id = "'+cur_book.title+'"class = "bookimg" src="'+cur_book.cover+'"alt = "'+cur_book.title+'" title = "'+cur_book.title+'">');
		}
	}
	for (i = 0; i < books.length; i++) {
		type_div.append(books[i]);	
	}
}

/*
* build available list
*/
var build_avail = function(type_div) {
	var books = [];
	for (var i = 0; i < User.all[0].booklist.length; i++) {
		var cur_book = User.all[0].booklist[i];
		books.push('<img id = "'+cur_book.title+'"class = "bookimg" src="'+cur_book.cover+'"alt = "'+cur_book.title+'" title = "'+cur_book.title+'">');
	}
	for (i = 0; i < books.length; i++) {
		type_div.append(books[i]);
	}
}

/*
* build wishlist
*/
var build_wish = function(type_div) {
	var books = [];
	for (var i = 0; i < User.all[0].wishlist.length; i++) {
		var cur_book = User.all[0].wishlist[i];
		books.push('<img id = "'+cur_book.title+'"class = "bookimg" src="'+cur_book.cover+'"alt = "'+cur_book.title+'" title = "'+cur_book.title+'">');
	}
	for (i = 0; i < books.length; i++) {
		type_div.append(books[i]);
	}
}

/*
* helper function
* to build history list
*/
var build_hist = function(type_div) {
	var books = [];
	for (var i = 0; i < book.all.length; i++) {
		if (book.all[i].inNegotiation == true) { 
			var cur_book = book.all[i];
			books.push('<img id = "'+cur_book.title+'"class = "bookimg" src="'+cur_book.cover+'"alt = "'+cur_book.title+'" title = "'+cur_book.title+'">');
		}
	}
	for (i = 0; i < books.length; i++) {
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
		var hideme = $('<p id="hide"><a href="#">Hide</a></p>');
		var news = News.all[i];
		var use_div = $('<div id='+news.user+'></div>');
		var content = $('<p><img class = "avatar" src = "'+news.avatar+'" alt="'+news.user+'" title="'+news.user+'"></p>');
		var story = String(" " + news.user + " " + news.story);	
		content.append(story);
		use_div.append(content);
		use_div.append(hideme.hide());
		root_div.append(use_div);
	}	
}

/*
* manage feed actions
*/
var manage_feed = function() {
	//Show hide option on mouseenter
	$("#feed div").mouseenter(function(e) {
		e.stopPropagation();	
		$(this).children('#hide').slideDown('fast');
	});
	//Hide hide option on mouseleave
	$("#feed div").mouseleave(function(e) {
		e.stopPropagation();
		e.preventDefault();
		$(this).children('#hide').slideUp('slow');
	});
	//hide story if requested	
	$("#feed a").click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		$(this).parent().parent().slideUp('slow');
	});
}

/*
* manage list actions
*/
var manage_lists = function() {
	$(".books").mouseenter(function(e) {
		$("#helpful").fadeIn();			
	});		
	$(".books").mouseleave(function(e) {
		$("#helpful").fadeOut('slow');

	});
	$(".books img").mouseenter(function(e) {
		$(this).css("border", "2px solid #556B25");
	});
	$(".books img").mouseleave(function(e) {
		$(this).css("border", "2px solid #ffffff");
	});
}	
/*TODO
* clean-up jquery code
* * make more readable
* * * learn about style rules for having html
* * * event-driven!
*/
