User.all = [];
News.all = [];
book.all = [];
Genre = ['Fiction', 'Nonfiction', 'Textbook', 'Scifi', 'Horror', 'Fantasy', 'Mystery', 'Biographical', 'Children'];
School = ['UNC-Chapel Hill', 'ETSU'];
Courses = ['COMP 550'];
Stories = ['joined the bookworm!', 'sold a book!', 'bought a book!'];

/*
* Create some users
* and store into array
*/
User.all.push(new User('Brian', 'Morrow', 'killerbat00', 'Chapel Hill', School[0], '10182012', 'images/killerbat00.png', 0));
User.all.push(new User('Phil', 'Delvecchio', 'pdelvec', 'Chapel Hill', School[0], '10202012', 'images/pdelvec.png', 0));
User.all.push(new User('Ashleigh', 'Lambert', 'aironrailroad', 'Chapel Hill', School[1], '10202012', 'images/aironrailroad.png', 0));
User.all.push(new User('Kyle', 'Sebastian', 'RevoltSheWrote', 'Chapel Hill', School[0], '10202012', 'images/revoltshewrote.png', 0));
User.all.push(new User('Logan', 'Vess', 'takeapartyrhead', 'Chapel Hill', School[1], '10202012', 'images/takeapartyrhead.png', 0));
User.all.push(new User('Mandy', 'Melton', 'mmelton', 'Chapel Hill', School[0], '10202012', 'images/avatar.png', 0));
User.all.push(new User('Sam', 'Jones', 'satansaysdance', 'Chapel Hill', School[1], '10202012', 'images/satansaysdance.png', 0));
User.all.push(new User('Rahul', 'Smith', 'rahulsays', 'Chapel Hill', School[0], '10202012', 'images/avatar.png', 0));

/* 
* Randomly build News
* and store stories into array
*/
for (var i = 0; i < User.all.length; i++) {
	var user = User.all[i];
	News.all.push(new News(user, Stories[random(0, Stories.length)]));	
}
/* 
* Helper function to 
* build news.
*/
function random(from, to){
       return Math.floor(Math.random() * (to - from) + from);
}

/* 
* Creates some books
* and stores them into an array
*/
book.all.push(new book('0671027344','The Perks of Being a Wallflower','Stephen Chbosky',[Genre[8],Genre[0]],true,false,false,0,'images/perkswallflower.png',0,[],[]));
book.all.push(new book('0553573403','A Game of Thrones','George RR Martin',[Genre[5],Genre[0]],true,true,false,10.00,'images/gamethrones.png',0,[],[]));
book.all.push(new book('0345535413', 'A Clash of Kings', 'George RR Martin', [Genre[5], Genre[0]], true, true, false, 10.34, 'images/clashofkings.png', 0, [], []));
book.all.push(new book('0553381709', 'A Storm of Swords', 'George RR Martin', [Genre[5], Genre[0]], true, true, false, 9.98, 'images/stormofswords.png', 0, [], []));
book.all.push(new book('0553582038', 'A Feast for Crows', 'George RR Martin', [Genre[5], Genre[0]], true, true, false, 9.98, 'images/feastforcrows.png', 0, [], []));
book.all.push(new book('055338595X', 'A Dance with Dragons', 'George RR Martin', [Genre[5], Genre[0]], true, true, false, 9.98, 'images/dancewithdragons.png', 0, [], []));
book.all.push(new book('9780262033848','Introduction to Algorithms','Thomas H. Cormen',[Genre[2],Genre[1]],true,true,true,80.00,'images/introductionalgorithms.png',0,[School[0]],[Courses[0]]));
book.all.push(new book('9780261102354','Lord of the Rings: The Fellowship of The Ring','J. R. R. Tolkien',[Genre[5],Genre[0]],false,true,false,5.00,'images/fellowshipring.png',0,[],[]));
book.all.push(new book('074753269','Harry Potter and the Sorcerers Stone','J. K. Rowling',[Genre[5],Genre[0]],true,true,false,8.99,'images/sorcerersstone.png',0,[],[]));
book.all.push(new book('0439064872', 'Harry Potter and the Chamber of Secrets', 'J. K. Rowling', [Genre[5], Genre[0]], true, true, false, 8.79, 'images/chamberofsecrets.png', 0, [], []));
book.all.push(new book('0439136369', 'Harry Potter and the Prisoner of Azkaban', 'J. K. Rowling', [Genre[5], Genre[0]], true, true, false, 8.79, 'images/prisonerofazkaban.png', 0, [], []));
book.all.push(new book('0439139600', 'Harry Potter and the Goblet of Fire', 'J. K. Rowling', [Genre[5], Genre[0]], true, true, false, 8.79, 'images/gobletoffire.png', 0, [], []));
book.all.push(new book('0439136369', 'Harry Potter and the Order of the Phoenix', 'J. K. Rowling', [Genre[5], Genre[0]], true, true, false, 8.79, 'images/orderofthephoenix.png', 0, [], []));
book.all.push(new book('0439785960', 'Harry Potter and the Half-Blood Prince', 'J.K. Rowling', [Genre[5], Genre[0]], true, true, false, 10.39, 'images/halfbloodprince.png', 0, [], []));
book.all.push(new book('0545139708', 'Harry Potter and the Deathly Hallows', 'J. K. Rowling', [Genre[5], Genre[0]], true, true, false, 10.19, 'images/deathlyhallows.png', 0, [], []));
