$(document).ready(function () {
	alert('Init function');	
	build_user();
	build_book_lists();
	build_feed();
});			

var build_user = function() {
	var main_div = $('#user');
	var user_uname = $('<p id="username"></p>');
	var user_avatar = $('<img id = "usrimg" src="avatar.gif" alt="username" title="username"></img>');
	var user_location = $('<p id="location"></p>');
	var user_ranking = $('<p id="ranking"></p>');
	

	//user_uname.append(User[0].username());	
	main_div.append(user_uname.append('killerbat00'));
	main_div.append(user_avatar);
	main_div.append(user_location.append('UNC'));
	main_div.append(user_ranking.append('Ranking: <img class = "stars" src="Stars.png" alt="stars" title="stars"></p>'));
}

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

var build_list = function(type_div) {
	var books = [];
	for(var i = 0; i < 20; i++) {
		books.push('<img class="book" src="samplebook.png" alt="book title" title="book title">');
		type_div.append(books[i]);	
	}
}

var build_feed = function() {
	var feed_div = $('#feed');
	
//	var user_div = $('<div id="user1"></div>');
//	var user2_div = $('<div id="user2"></div>');
//	var user3_div = $('<div id="user3"></div>');
//	var user4_div = $('<div id="user4"></div>');
//	var user5_div = $('<div id="user5"></div>');
//	var user6_div = $('<div id="user6"></div>');
//	var user7_div = $('<div id="user7"></div>');
//
//	feed_div.append(user_div.append('<p><img class="avatar" src="avatar.gif" alt="username" title="username"> *Username* just joined the bookworm!</p>');
}	

