/*	Books
*	This file creates a Book object for each book on the BookWorm.
*	Each Book object has attributes for ISBN number, Title, Author,
*	Keywords (genre, etc - to facilitate searching), Type (tradeable/
*	buyable), Textbook (boolean), Price (if applicable), School and
*	Course (if applicable).
*
*	It also has methods to return any of these various attributes
*
*/

var book = function(isbn, title, author, genre, trade, sell, textbook, price, cover, rating, school, course, inNegotiation){
	this.indicator = 'book';
	this.isbn = isbn;
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.trade = trade;
	this.sell = sell;
	this.textbook = textbook;
	this.price = price;
	this.rating = rating;
	this.school = school;
	this.course = course;
	this.cover = cover;
	this.inNegotiation = false;
}
/*	addKeyword()
*	add's keywords to an array associated.
*/
book.prototype.addKeyword = function(keyword) {
	if (this.keywords.indexOf(this.keyword) != -1)
		return;	
	else 
		this.keywords.push(keyword);
}

/*	returnKeywords()
*	returns Keywords as a string with each keyword seperated
*	by comma
*/
book.prototype.returnKeywords = function() {
	return this.keywords.toString();
}


/*	price()
*	returns book's price (if applicable)
*/
book.prototype.price = function() {
	if (this.trade == true && this.sell == false) {
		return;
	} else if (this.trade == false && this.sell == false) {
		return;
	} else {
		return this.price;
	}
}
/*	school()
*	returns the school (or schools) the book is associated with
*/
book.prototype.school = function() {
	if (this.school.length == 1) {
		return this.school[0];
	} else {
		return this.school.toString();
	}
}
/*	course()
*	returns the course (or courses) this book is used in
*/
book.prototype.course = function() {
	if (this.course.length == 1) {
		return this.course[0];
	} else {
		return this.course.toString();
	}
}
