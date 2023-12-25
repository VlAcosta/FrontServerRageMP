var title = '';
var duration = 5000;
var closeOnClick = false;
var displayClose = false;
var position = 'Top Right';


// Written using ES5 JS for browser support
window.addEventListener('DOMContentLoaded', function () {
	var form = document.querySelector('form');

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		// Form elements
		
		var message = form.querySelector('#message').value;
		var position = form.querySelector('#position').value;
		var theme = form.querySelector('#theme').value;

		if(!message) {
			message = 'You did not enter a message...';
		}

		window.createNotification({
			closeOnClick: closeOnClick,
			displayCloseButton: displayClose,
			positionClass: position,
			showDuration: duration,
			theme: theme
		})({
			title: title,
			message: message
		});
	});
});



function showNotify(message, theme) {

	if (theme == 'red') {
		theme = 'error'
	} else if (theme == 'green') {
		theme = 'success'
	} else if (theme == 'blue') {
		theme = 'info'
	} else if (theme == 'yellow') {
		theme = 'warning'
	}

	if(!message) {
		message = 'You did not enter a message...';
	}

	window.createNotification({
		closeOnClick: closeOnClick,
		displayCloseButton: displayClose,
		positionClass: position,
		showDuration: duration,
		theme: theme
	})({
		title: title,
		message: message
	});
}

//showNotify('Отображение ESP машин выключено', "green")