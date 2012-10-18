$(document).ready(function () {
	alert('Init function');	
		
	build_user();
	build_book_lists();
});			


var build_user = function() {
	var main_div = $('#user');
	var user = User[0];
	alert(String(user));
	var user_uname = $('<p id="username"></p>');
	var user_avatar = $('<img id = "usrimg" src="avatar.gif" alt="username" title="username"></img>');
	var user_location = $('<p id="location"></p>');
	var user_ranking = $('<p id="ranking"></p>');
	

	//user_uname.append(User[0].username());	
	user_uname.append('killerbat00');
	user_location.append('UNC');
	user_ranking.append('Ranking: <img class = "stars" src="Stars.png" alt="stars" title="stars"></p>');
	
	main_div.append(user_uname);
	main_div.append(user_avatar);
	main_div.append(user_location);
	main_div.append(user_ranking);
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
	}			
	for(var i = 0; i < books.length; i++) {
		type_div.append(books[i]);	
	}
}	

