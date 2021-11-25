/**
 * Class to manage opening multiple layer of app screens on top of each other
 * todo finish later
 */
jsBoard = {
	boardContainer: null
};
jsBoard.init = function () {
	jsBoard.boardContainer = $('#board');
};
jsBoard.init();

// TODO: prevent multiple fast clicks duplicating same card
jsBoard.addCard = function (id) {
	jsBoard.boardContainer.append('<div data-card-id="' + id + '" class="card card-enabled full-height dynamic-content" style="display:none;"></div>');
};
jsBoard.getCard = function (id) {
	var card = $('[data-card-id=' + id + ']', jsBoard.boardContainer);
	return card;
};
jsBoard.removeCard = function (id) {
	var card = $('[data-card-id=' + id + ']', jsBoard.boardContainer);
	card.remove();
};
jsBoard.disableCard = function (id) {
	var card = $('[data-card-id=' + id + ']', jsBoard.boardContainer);
	card.hide();
	card.removeClass('card-enabled');
};
jsBoard.showCard = function (id) {
	$('.card', jsBoard.boardContainer).hide(); // hide all cards
	var card = jsBoard.getCard(id);
	card.addClass('card-enabled');
	card.show();
};
jsBoard.displayLastCard = function () {
	var card = $('.card-enabled:last', jsBoard.boardContainer);
	card.show();
};
