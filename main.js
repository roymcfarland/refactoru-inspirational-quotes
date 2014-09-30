/////////////////////////////////////
///////////// VARIABLES /////////////
/////////////////////////////////////

/**
 * Quote base class for all quotes, which will
 * store common elements between each quote instance
 * that is created.
 * @param {string} quote  The quote itself
 * @param {string} author The author's name
 */
var Quote = function(quote, author) {
	this.quote = quote;
	this.author = author;
};

/**
 * A library class for containing quotes
 * submitted by users
 * @param {string} quote  The quote itself
 * @param {string} author The author's name
 */
var QuoteLibrary = function(quote, author) {
	Quote.call(this, quote, author);
};

var testQuote = new Quote ('The dude abides', 'The Dude');



/////////////////////////////////////
////////// HELPER FUNCTIONS /////////
/////////////////////////////////////

Quote.prototype.create = function() {
	if (this.element) return this.element;
	this.element = $('<div>');
	this.element
		.append('<p>' + this.quote + '</p>')
		.append('<p>' + this.author + '</p>')
	return this.element;
};

QuoteLibrary.prototype.render = function() {
	if (this.element) return (this.element);
	
	var form = $('#quote-form').clone();
	form
		.attr('id', '') // Reset the ID from the template
		.addClass('quote-form') // Add a class for identification

	form.on('submit', this.formSubmit.bind(this));

	this.element = $('<li>');
	this.element
		.addClass('quote-library')
		.append('<p>' + this.quote + '</p>')
		.append('<p>' + this.author + '</p>')
		.append(form);

	return this.element;
};

QuoteLibrary.prototype.formSubmit = function(e) {
	e.preventDefault();
	var quoteLibrary = this;
	var form = $(e.target);
	var text = form.find('[name=quote]').val();
	var author = form.find('[name=author]').val();
	var quote = new Quote(text, author);
	quoteLibrary.addItem(quote);
};


































$(document).on('ready', function() {
  
// $('body').append(testQuote.create())



});







