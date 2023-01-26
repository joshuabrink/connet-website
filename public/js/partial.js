/*********INITIALIZE***********/

function getAll(elem) {
	return document.querySelectorAll(elem);
}

document.addEventListener('DOMContentLoaded', function() {
	M.Sidenav.init(getAll('.sidenav'), { inDuration: 500, draggable: true });
	M.Dropdown.init(getAll('.dropdown-trigger'), { coverTrigger: false, hover: true, closeOnClick: false });
	M.FloatingActionButton.init('.fixed-action-btn', {});
	M.Pushpin.init(getAll('.nav-pushpin'), { top: 68 });
	M.Modal.init(getAll('.modal'), {});
	M.FormSelect.init(getAll('select'), {});

});

/****************PRE-LOADER ANIMATION*********************/


document.addEventListener("DOMContentLoaded", function() {
	var preBackground = document.querySelectorAll('.preloader-background');
	var preWrapper = document.querySelectorAll('.preloader-wrapper');

	anime.timeline()
		.add({
			targets: preBackground,
			opacity: [1, 0],
			zIndex: -10,
			duration: 400,
			easing: 'easeInOutSine'
		})
		.add({
			targets: preWrapper,
			opacity: [1, 0],
			zIndex: -10,
			duration: 400,
			easing: 'easeInOutSine'
		})

});

/**************CREATE SINGLE LETTERS****************/


var letterContainer = document.querySelectorAll('.caption');
var wordOne = document.querySelectorAll('.letters');

function createLetters(word, container) {
	for (let letter of word.innerText) {
		var newSpan = document.createElement("h1");
		var newContent = document.createTextNode(letter);
		newSpan.appendChild(newContent);
		newSpan.className = 'letter';
		container.insertBefore(newSpan, word);
	}
}

for (var i = 0; i < wordOne.length; i++) {
	createLetters(wordOne[i], letterContainer[i]);
}

/*********SCROLL FUNCTION*********/

var navLogos = document.querySelectorAll(".nav-logo");
var scrollButton = document.getElementById("myBtn");

var miniLogoAnim = anime({
	targets: navLogos,
	opacity: {
		value: [0, 1],
		duration: 300,
		easing: 'easeOutQuad'
	},
	rotate: {
		value: 360,
		duration: 600,
		easing: 'easeInOutSine'
	},
	filter: {
		value: 'drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.15))',
		duration: 300,
		easing: 'easeInOutSine',
		delay: 500
	},
	autoplay: false,
	duration: 1200

})

var scrollBtnAnim = anime({
	targets: scrollButton,
	opacity: [0, 1],
	easing: 'easeInOutSine',
	autoplay: false,
	duration: 500
})


window.onscroll = function() { scrollFunction() };

function scrollFunction() {

	scrollBtnAnim.seek(currentYPosition());
	miniLogoAnim.seek(currentYPosition());
	//aboutSvgAnim();

}

function currentYPosition() {
	// Firefox, Chrome, Opera, Safari
	if (self.pageYOffset) return self.pageYOffset;
	// Internet Explorer 6 - standards mode
	if (document.documentElement && document.documentElement.scrollTop)
		return document.documentElement.scrollTop;
	// Internet Explorer 6, 7 and 8
	if (document.body.scrollTop) return document.body.scrollTop;
	return 0;
}


function elmYPosition(eID) {
	var elm = document.getElementById(eID);
	var y = elm.offsetTop;
	var node = elm;
	while (node.offsetParent && node.offsetParent != document.body) {
		node = node.offsetParent;
		y += node.offsetTop;
	}
	return y;
}




function smoothScroll(eID) {
	var startY = currentYPosition();
	var stopY = elmYPosition(eID);
	var distance = stopY > startY ? stopY - startY : startY - stopY;
	if (distance < 100) {
		scrollTo(0, stopY);
		return;
	}
	var speed = Math.round(distance / 80);
	if (speed >= 20) speed = 20;
	var step = Math.round(distance / 25);
	var leapY = stopY > startY ? startY + step : startY - step;
	var timer = 0;
	if (stopY > startY) {
		for (var i = startY; i < stopY; i += step) {
			setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
			leapY += step;
			if (leapY > stopY) leapY = stopY;
			timer++;
		}
		return;
	}
	for (var i = startY; i > stopY; i -= step) {
		setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
		leapY -= step;
		if (leapY < stopY) leapY = stopY;
		timer++;
	}
}

elmYPosition("top");

/******************Passed Or Failed Login************/

if(document.querySelector('.failedLogin')) {
	M.toast({html: 'Incorrect Email or Password', classes: 'red'})	
} else if (document.querySelector('.captchaFail')) {
	M.toast({html: 'You failed to verify captcha.', classes: 'red'})
} else if (document.querySelector('.passedLogin')) {
	M.toast({html: 'You are signed in!', classes: 'green'})
} else if (document.querySelector('.loggedOut')) {
	M.toast({html: 'You need to be signed in.', classes: 'yellow'})
} 

var recaptchaResponse = '';
function recaptchaCallback() {
	recaptchaResponse = 'solved';
	return 'Solved';
	
}

/* ----------------------------

	CustomValidation prototype

	- Keeps track of the list of invalidity messages for this input
	- Keeps track of what validity checks need to be performed for this input
	- Performs the validity checks and sends feedback to the front end
	
---------------------------- */

function CustomValidation(input) {
	this.invalidities = [];
	this.validityChecks = [];
	
		//add reference to the input node
	this.inputNode = input;

	//trigger method to attach the listener
	this.registerListener();
}

CustomValidation.prototype = {
	addInvalidity: function(message) {
		this.invalidities.push(message);
	},
	getInvalidities: function() {
		return this.invalidities.join('. \n');
	},
	checkValidity: function(input) {
		for ( var i = 0; i < this.validityChecks.length; i++ ) {

			var isInvalid = this.validityChecks[i].isInvalid(input);
			if (isInvalid) {
				this.addInvalidity(this.validityChecks[i].invalidityMessage);
			} 

			var requirementElement = this.validityChecks[i].element;
			if (requirementElement) {
				if (isInvalid) {
					requirementElement.classList.add('invalid');
					requirementElement.classList.remove('valid');
				} else {
					requirementElement.classList.remove('invalid');
					requirementElement.classList.add('valid');
				}

			} // end if requirementElement
		} // end for
	},
	
	checkInput: function() { // checkInput now encapsulated

		this.inputNode.CustomValidation.invalidities = [];
		this.checkValidity(this.inputNode);

		if ( this.inputNode.CustomValidation.invalidities.length === 0 && this.inputNode.value !== '' ) {
			this.inputNode.setCustomValidity('');
		} else {
			var message = this.inputNode.CustomValidation.getInvalidities();
			this.inputNode.setCustomValidity(message);
		}
	},
	

	
	registerListener: function() { //register the listener here

		var CustomValidation = this;
		this.inputNode.addEventListener('keyup', function() {
			CustomValidation.checkInput();
		});
		

	}
	
};



/* ----------------------------

	Validity Checks

	The arrays of validity checks for each input
	Comprised of three things
		1. isInvalid() - the function to determine if the input fulfills a particular requirement
		2. invalidityMessage - the error message to display if the field is invalid
		3. element - The element that states the requirement
	
---------------------------- */

var usernameValidityChecks = [
	{
		isInvalid: function(input) {
			return input.value.length < 6;
		},
		invalidityMessage: 'This input needs to be at least 6 characters',
		element: document.querySelector('#signup_name + .input-requirements li:nth-child(1)')
	},
	{
		isInvalid: function(input) {
			if (input.value.length <= 0) {
				return true;
			}
				var illegalCharacters = input.value.match(/[^a-zA-Z0-9]/g);
				return illegalCharacters ? true : false;
		},
		invalidityMessage: 'Only letters and numbers are allowed',
		element: document.querySelector('#signup_name + .input-requirements li:nth-child(2)')
	}
];

var emailValidityChecks = [
		{
		isInvalid: function(input) {
			return !input.value.match(/\S+@\S+\.\S+/);
		},
		invalidityMessage: 'Please include an \u0040 character followed by the email website',
		element: document.querySelector('#email + .input-requirements li:nth-child(1)')
	}
	
];

var passwordValidityChecks = [
	{
		isInvalid: function(input) {
			return input.value.length < 8 | input.value.length > 100;
		},
		invalidityMessage: 'This input needs to be between 8 and 100 characters',
		element: document.querySelector('#password + .input-requirements li:nth-child(1)')
	},
	{
		isInvalid: function(input) {
			return !input.value.match(/[0-9]/g);
		},
		invalidityMessage: 'At least 1 number is required',
		element: document.querySelector('#signup_pass + .input-requirements li:nth-child(2)')
	},
	{
		isInvalid: function(input) {
			return !input.value.match(/[a-z]/g);
		},
		invalidityMessage: 'At least 1 lowercase letter is required',
		element: document.querySelector('#signup_pass + .input-requirements li:nth-child(3)')
	},
	{
		isInvalid: function(input) {
			return !input.value.match(/[A-Z]/g);
		},
		invalidityMessage: 'At least 1 uppercase letter is required',
		element: document.querySelector('#signup_pass + .input-requirements li:nth-child(4)')
	}
	,
	// {
	// 	isInvalid: function(input) {
	// 		return !input.value.match(/[\!\@\#\$\%\^\&\*]/g);
	// 	},
	// 	invalidityMessage: 'You need one of the required special characters',
	// 	element: document.querySelector('#signup_pass + .input-requirements li:nth-child(5)')
	// }
];

// var passwordRepeatValidityChecks = [
// 	{
// 		isInvalid: function() {
// 			return passwordRepeatInput.value != passwordInput.value;
// 		},
// 		invalidityMessage: 'This password needs to match the first one',
// 		element: document.querySelector('#pass_repeat + .input-requirements li:nth-child(1)')
// 	}
// ];

var recaptchaValidityChecks = [
	{
		isInvalid: function(input) {
			return recaptchaResponse.length === 0;
		},
		invalidityMessage: 'This box needs to be checked.',
		element: document.querySelector('#password + .input-requirements li:nth-child(1)')
	}
];



/* ----------------------------

	Setup CustomValidation

	Setup the CustomValidation prototype for each input
	Also sets which array of validity checks to use for that input

---------------------------- */
var usernameInput = document.getElementById('username');
// var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('pass');
var loginCaptcha = document.getElementById('loginCaptcha');
var emailCaptcha = document.getElementById('emailCaptcha');

// var passwordRepeatInput = document.getElementById('pass_repeat');

usernameInput.CustomValidation = new CustomValidation(usernameInput);
usernameInput.CustomValidation.validityChecks = usernameValidityChecks;

// emailInput.CustomValidation = new CustomValidation(emailInput);
// emailInput.CustomValidation.validityChecks = emailValidityChecks;

passwordInput.CustomValidation = new CustomValidation(passwordInput);
passwordInput.CustomValidation.validityChecks = passwordValidityChecks;
	
loginCaptcha.CustomValidation = new CustomValidation(loginCaptcha);
loginCaptcha.CustomValidation.validityChecks = recaptchaValidityChecks;

emailCaptcha.CustomValidation = new CustomValidation(emailCaptcha);
emailCaptcha.CustomValidation.validityChecks = recaptchaValidityChecks;




// passwordRepeatInput.CustomValidation = new CustomValidation(passwordRepeatInput);
// passwordRepeatInput.CustomValidation.validityChecks = passwordRepeatValidityChecks;


/* ----------------------------

	Event Listeners

---------------------------- */

var inputs = document.querySelectorAll('input:not([type="submit"])');
var submit = document.querySelector('.submit');
var send = document.querySelector('#send');
// var form = document.getElementById('register');

function validate() {
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].CustomValidation.checkInput();
		
	}
//	 recaptchaInput.CustomValidation.checkCaptcha();
}

submit.addEventListener('click', validate);
send.addEventListener('click', validate);
// form.addEventListener('submit', validate);

var coll = document.querySelectorAll('input:not([type="submit"])');


for (var i = 0; i < coll.length; i++) {
  coll[i].onfocus = function() {
    var content = this.nextElementSibling;
	hideAll();
    content.style.maxHeight = content.scrollHeight + "px";
  };
}


function hideAll() {
    for (i = 0; i < coll.length; i++) {
        coll[i].nextElementSibling.style.maxHeight = null;
    }
}


