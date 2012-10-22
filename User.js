/* User
 *
 * Object for user who makes a profile on the BookWorm.
 * Contains: Profile information (name, username, location etc), Book wishlist, Available books
 *
 * Methods: return users information, method to change rating, array or hash of past transaction objects associated with each user.
 * Array of available book objects for wishlist and available book objects for available books
 */

var User = function(first, last, username, locate, school, date, avatar, rating) {
	this.indicator = 'user';
	this.rating;
	this.first = first;
	this.last = last;
	this.username = username;
	this.locate = locate;
	this.school = school;
	this.date = date;
	this.avatar = avatar;
	this.rating = rating;

	this.wishlist = [];
	this.booklist = [];
//history of past transactions. May need to be its own object
	this.history = [];
//keep track of other users that will rate this user
	this.ratings = [];
}
User.UNRATED = true;



/*rating()
 *returns the User's rating
 */
User.prototype.rating = function() {
	if (this.ratings.length == 0)
		return User.UNRATED;
	return user.rating;
}

/*name()
 *returns the User's name as a string with last name first
 */
User.prototype.name = function(){
	return this.last + this.first;
}

/*username()
 *returns the User's username
 */
User.prototype.username = function(){
	return this.username;
}

/*location()
 *returns the User's school if it has a school listed and location otherwise
 *NOTE: it may be in our best interested to make location an object so that it has 
 *information such as zipcode, city, state, country, etc.
 */
User.prototype.location = function(){
	if (this.school){
		return this.school;
	}
	return this.locate;
}


/*school()
 *returns the User's school
 */
User.prototype.school = function(){
	return this.school();
}

/*rating(rating)
 *Adds a rating to the user and returns the average of all the ratings in User.ratings
 */
User.prototype.rating = function(rate){
	this.rating.push(rate);
	if (this.ratings.length = 1){
		this.rating = rate;
		return this.rating;
	}else{
	rating_tmp = 0;
	num_ratings = this.ratings.length;
	for(index = 0; index < num_ratings; index++){
		rating_tmp = this.ratings[index] + rating_tmp;
	}
	this.rating = rating_tmp/(num_ratings);
	}
	return this.rating;
}

/*addbook()
 *This adds a book to the User's booklist
 *//*
User.prototype.addbook =function(book){
	if(booklist.indexOf(book)== -1)
		return false;
	else
		this.booklist.push(book);
	return true;
}

/*addwish()
 *This adds a wish to the User's wishlist
 *//*
User.prototype.addwish = function(wish){
	if(wishlist.indexOf(wish) == -1)
		return false;
	else
		this.wishlist.push(wish);
}

/*removebook()
 *This removes a book to the User's booklist
 *NOTE: I did not put in a condition for if the book is not there assuming that delete with be something where the person can click and x at the book and delete
 *it so the user will never be able to delete a nonexistant book
*//*
User.prototype.removebook = function(book){
	var delete = this.booklist.indexOf(book);
	this.booklist.splice(delete,1);
	return this.booklist.toString();
}

/*removewish()
 *The removes a wish from the User's wishlist
 *NOTE: I did not put in a condition for if the wish is not there assuming that delete with be something where the person can click and x at the book and delete
 *it so the user will never be able to delete a nonexistant book
 *//*
 User.prototype.removewish = function(wish){
	var delete = this.wishlist.indexOf(wish);
	this.wishlist.splice(delete,1);
	return this.wishlist.toString();
 }*/
