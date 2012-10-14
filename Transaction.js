/* Transaction
 *
 * Object for a transaction between users on the BookWorm.
 * Contains: 
 *
 * Methods: return user1 username, return user2 username, 
 * return user1 books, return user2 books, return type of trade,
 * add object to trade, remove object from trade, accept trade,
 * decline trade,
 * 
 */

var transaction = function(user1, user2, date, money) {
	this.user1 = user1;
	this.user2 = user2;
	this.date = date;
	this.money = money;	// if money is involved in the transaction, the value is here, otherwise it is 0

	this.accept1 = false;
	this.accept2 = false;
	this.decline1 = false;
	this.decline2= false;

	this.user1books = []; // user1's list of objects to trade
	this.user2books = []; // user2's list of objects to trade
}


/*user1()
 *returns the initial user's username, the one who starts the transaction
 */
Transaction.prototype.user1 = function(){
	return this.user1;
}


/*addUser1Books()
 *This adds a book to user1's trade list
 */
Transaction.prototype.addUser1Books = function(book){
	if($.inArray(book, this.user1books)
		return false;
	else{
		this.user1books.push(book);
	}
	return true;
}


/*removeUser1Books()
 *This removes a book to user1's trade list
 */
Transaction.prototype.removeUser1Books = function(book){
	if($.inArray(book, user1books) {
		for (var i = user1books.length -1; i>=0; i--)
			if (user1books[i] == book) {
				user1books.splice(i,1);
			}
		}
	return true;
	}
	else {
		return false;
	}
}

/*seeUser1Books()
 *This lists all of the books for user1
 */
Transaction.prototype.seeUser1Books() = function() {
	return this.user1books;
		
}



/*user2()
 *returns the recieving user's username, the one who did not start the transaction
 */
Transaction.prototype.user2 = function(){
	return this.user2;
}

/*addUser2Books()
 *This adds a book to user2's trade list
 */
Transaction.prototype.addUser2Books = function(book){
	if($.inArray(book, this.user2books)
		return false;
		
	else{
		this.user2books.push(book);
	}
	return true;
}

/*removeUser2Books()
 *This removes a book to user2's trade list
 */
Transaction.prototype.removeUser2 = function(book){
	if($.inArray(book, this.user2books) {
		for (var i = this.user2books.length -1; i>=0; i--)
			if (this.user2books[i] == book) {
				this.user2books.splice(i,1);
			}
		}
	return true;
	}
	else {
		return false;
	}
}

/*seeUser2Books()
 *This lists all of the books for user2
 */
Transaction.prototype.seeUser2Books() = function() {
	return this.user2books;
		
}


/*money()
 *This allows user to pay for the books instead or in addition to trading
 */

Transaction.prototype.money = function(money) {
	return this.money;
}



/*	accepted()
*	returns True if both users accept the trade, otherwise returns false
*/
Transaction.prototype.accepted = function() {
	if (this.accept1 && this.accept2 == true) {
		return true;
	} else {
		return false;
	}
}

/*	declinded()
*	returns True if one user declines the trade, otherwise returns false
*/
Transaction.prototype.declined = function() {
	if (this.decline1 || this.decline2 == true) {
		return true;
	} else {
		return false;
	}
}


