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
var Quote = function(quote, author, allQuotes) {
	this.quote = quote;
	this.author = author;
};

	var allQuotes = [];


///////////////////
// Test Examples //
/////////////////// 
// var vitoQuote = new Quote ('Make him an offer he can\'t refuse.', 'The Godfather');
// var terminatorQuote = new Quote ('I\'ll be back.', 'The Terminator');



/**
 * Render a DOM element for a quote
 * @return {jQuery} DOM element that represents
 * the quote
 */
Quote.prototype.render = function() {
	if(this.element) return this.element;

	this.element = $('<ul>');
	this.element
		.addClass('quote-item')
		.append('<li>' + this.quote + '</li>')
		.append('<li>' + this.author + '</li>');

	return this.element;
};

$(document).on('ready', function() {

	$('#form').on('submit', function(e) {
		e.preventDefault();
		var form = $('#form')
		var quote = form.find('[name=quote]').val();
		// console.log(quote);
		var author = form.find('[name=author]').val();

		form.find('[name=quote]').val('');
		// console.log(quote);
		form.find('[name=author]').val('');
		// console.log(author);
		var thisQuote = new Quote(quote, author);
		allQuotes.push(thisQuote);
		// console.log(allQuotes);
		$('.library').append(thisQuote.render());
	});

});