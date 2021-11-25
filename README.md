# Usage example

Setup.

First create a container and add the "initial board".

```
<div id="board" class="full-height">
	<div class="card card-enabled full-height">
		<h1>This is my app's main screen.</h1>
    <p><button onclick="app.showLanguages();">Show languages screen</button></p>
	</div>
</div>
```

Show and hide boards.

```
app.showLanguages = function () {
	var card_id = 'languages';
	var card = jsBoard.getCard(card_id);
	if (card.length === 0) {
		jsBoard.addCard(card_id);
	}
	card = jsBoard.getCard(card_id);
	$.fancybox.showLoading();
	$.ajax({
		type: "GET",
		url: jsUrls.languages,
		cache: false
	}).done(function (response) {

		card.html(response);

		jsBoard.showCard(card_id);

		$.fancybox.hideLoading();

	}).fail(function (jqXHR, textStatus, errorThrown) {

	});
};

app.closeLanguages = function () {
	var card_id = 'languages';
	jsBoard.removeCard(card_id);
	jsBoard.displayLastCard();
};
```
