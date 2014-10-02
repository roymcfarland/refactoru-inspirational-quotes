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
		.append('<li>"' + this.quote + '"</li>')
		.append('<li>' + '- ' + this.author + '</li>')
		.append('<i class="fa fa-star-o"></i><br>' +
				'<i class="fa fa-star-o"></i><br>' +
				'<i class="fa fa-star-o"></i><br>' +
				'<i class="fa fa-star-o"></i><br>' +
				'<i class="fa fa-star-o"></i><br>')
		.append('<button class="removeButton">Remove</button>');

	return this.element;
};

$(document).on('ready', function() {

	// Appends a DOM element containing the quote and
	// author to the page in the div (class: library)
	$('#form').on('submit', function(e) {
		e.preventDefault();
		var form = $('#form');
		var quote = form.find('[name=quote]').val();
		var author = form.find('[name=author]').val();
		form.find('[name=quote]').val('');
		form.find('[name=author]').val('');
		var thisQuote = new Quote(quote, author);
		allQuotes.push(thisQuote);
		$('#library').append(thisQuote.render());
		thisQuote.element.find('.removeButton').click(function() {
			console.log("hey")
			$(this).closest('.quote-item').remove();
			allQuotes = _.without(allQuotes, thisQuote);


		});
	});










});