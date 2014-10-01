/////////////////////////////////////
///////////// VARIABLES /////////////
/////////////////////////////////////

/**
 * Quote base class for all quotes, which will
 * store common elements between each quote instance
 * that is created.
 * @param {string} quote  The quotation
 * @param {string} author The author's name
 */
var Quote = function(quote, author) {
	this.quote = quote;
	this.author = author;
};

// Test Examples
var myQuote = new Quote ('I came. I saw. I kicked its ass!', 'Roy McFarland');
var vitoQuote = new Quote ('Make him an offer he can\'t refuse.', 'The Godfather');
var terminatorQuote = new Quote ('I\'ll be back.', 'The Terminator');
var leeQuote = new Quote ('Yay for quotes!', 'Lee Acker'); 







$(document).on('ready', function() {


});