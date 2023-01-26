/*********INITIALIZE***********/

function getAll(elem) {
	return document.querySelectorAll(elem);
}

document.addEventListener('DOMContentLoaded', function() {
	M.Sidenav.init(getAll('.sidenav'), { inDuration: 500, draggable: true });
	M.Carousel.init(getAll('#homeCarousel'), { indicators: true, fullWidth: true, onCycleTo: playTextAnimation2 });
	M.Carousel.init(getAll('#brandCarousel'), { numVisible: 6, padding: 200, duration: 400, transition: 800 });
	M.Carousel.init(getAll('#featureCarousel'), { numVisible: 3, padding: 200 });
	M.Parallax.init(getAll('.parallax'), { responsiveThreshold: 0 });
	M.Dropdown.init(getAll('.dropdown-trigger'), { coverTrigger: false, hover: true, closeOnClick: false });
	M.TapTarget.init(getAll('.tap-target'), {});
	M.FloatingActionButton.init('.fixed-action-btn', {});
	M.Pushpin.init(getAll('.pushpin'), { top: 117 });
	M.Pushpin.init(getAll('.nav-pushpin'), { top: 68 });
	M.ScrollSpy.init(getAll('.scrollspy'), { activeClass: "active-scrollspy" });
	M.Modal.init(getAll('.modal'), {});
	M.Collapsible.init(getAll('.collapsible'), {});
	M.FormSelect.init(getAll('select'), {});
	

});


var provision = document.querySelectorAll(".provision");
var bodyBg = document.querySelector("#scrollBackground");

	provision[0].addEventListener("mouseover", function() {
		bodyBg.classList.remove("cloudBg")
		bodyBg.classList.remove("connectionBg")
		bodyBg.classList.remove("gearBg")
	})
	provision[1].addEventListener("mouseover", function() {
		bodyBg.classList.remove("cloudBg")
		bodyBg.classList.remove("connectionBg")
		bodyBg.classList.add("gearBg")
	})
	provision[2].addEventListener("mouseover", function() {
		bodyBg.classList.remove("gearBg")
		bodyBg.classList.remove("cloudBg")
		bodyBg.classList.add("connectionBg")
	})
	provision[3].addEventListener("mouseover", function() {
		bodyBg.classList.remove("gearBg")
		bodyBg.classList.remove("connectionBg")
		bodyBg.classList.add("cloudBg")
	})


/********************CAROUSEL*******************/

anime({
	targets: document.querySelector('#brandCarousel .carousel-item img'),
	duration: 2500,
	loop: true,
	autoplay: true,
	loopBegin: function(anim) {
		var bCarousel = M.Carousel.getInstance(document.querySelector('#brandCarousel'));
		var press = false;
		
		if (bCarousel.pressed) {
			press = true;
		}
		if (!press) {
			bCarousel.next();	
		}
		else {
			press = false;	
		}
		setInterval(() => {
			press = true;
		}, 10000);
	}
})

anime({
	targets:document.querySelector('#brandCarousel .carousel-item.active'),
	scaleX: 1.2,
	scaleY: 1.2,
	duration: 200,
	easing: 'easeInOutSine'
})



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

/***********HOME LOGO ANIMATION***********/

anime({
	targets: '.logoCircle',
	scale: [{
		value: 0
	}, {
		value: 1,
		delay: 500,
		duration: 1500
	}]
})

function playLogoAnimation() {
	var logoTimeline = anime.timeline();
	logoTimeline
		.add({
			targets: '.logoSvg path',
			strokeDasharray: {
				value: function(el) {
					return el.getTotalLength() + ' ' + el.getTotalLength();
				}
			},
			strokeDashoffset: {
				value: function(el) {
					return el.getTotalLength();
				}
			}
		})
		.add({
			targets: '.logoSvg path',
			delay: 500,
			strokeDashoffset: {
				value: 0,
				duration: 1200,
				easing: 'easeInQuad'
			}
		})
		.add({
			targets: '.logoSvg path',
			delay: 700,
			strokeDashoffset: {
				value: function(el) {
					return el.getTotalLength();
				},
				duration: 1800,
				easing: 'easeOutQuad'
			}
		})
		.add({
			targets: '#logo-container',
			duration: 1000,
			zIndex: 0
		})
		.add({
			targets: '.logoCircle',
			translateX: {
				value: -340,
				duration: 800,
				easing: 'easeInOutSine'
			},
			scaleX: {
				value: [1, 0],
				duration: 500,
				delay: 800,
				easing: 'easeInOutSine'
			},
			scaleY: {
				value: [1, 0],
				duration: 500,
				delay: 800,
				easing: 'easeInOutSine'
			},
			backgroundColor: [
				{ value: '#FFF', easing: 'easeInOutSine' }, // Or #FFFFFF
				{ value: '#42a5f5', easing: 'easeInOutSine' },
				{ value: 'rgb(149,229,249)', easing: 'easeInOutSine' }
			],

		}, '-=2000')
}

function playTextAnimation() {

	var textAnimation = anime.timeline();
	textAnimation
		.add({
			targets: '.letter',
			opacity: 1,
			duration: 400,
			color: { value: '#42a5f5' },
			delay: anime.stagger(100, { direction: 'reverse' }),
			easing: 'easeOutExpo',
		}, 2200)
		.add({
			targets: '.letter',
			color: '#FFF',
			duration: 500,
			delay: anime.stagger(110, { direction: 'reverse' }),
			easing: 'easeOutExpo'
		}, 2200)
		.add({
			targets: '.sub-text',
			translateY: [-70, 0],
			opacity: [0, 1],
			duration: 600,
			easing: 'easeOutExpo',

		}, '-=1200')

}

function playTextAnimation2() {
	anime.timeline()
		.add({
			targets: '.afterFirst .letter',
			scale: [0.3, 1],
			opacity: [0, 1],
			translateZ: 0,
			easing: "easeOutExpo",
			duration: 600,
			delay: anime.stagger(100)
		}).add({
			targets: '.ml1 .line',
			scaleX: [0, 1],
			opacity: [0.5, 1],
			easing: "easeOutExpo",
			duration: 700,
			offset: '-=875',
			delay: anime.stagger(100)
		}).add({
			targets: '.afterFirst .sub-text',
			translateY: [-70, 0],
			opacity: [0, 1],
			duration: 600,
			easing: 'easeOutExpo',
		}, 1000)
		.add({
			targets: '.afterFirst .caption',
			opacity: 0,
			duration: 1
		}, '-=1301')
}

playLogoAnimation();
playTextAnimation();


/****************About Us Animation*****************/

// document.addEventListener('DOMContentLoaded', function() { 
// 	var title = document.querySelector('#about-title');
// 	var titleSub = document.querySelector('#title-sub')

// 	anime({
// 		targets: title,
// 		translateY: {
// 			value: [-2000, 36],
// 			duration: 1400,
// 			easing: 'easeOutExpo',
// 		},
// 		complete: function(anim) {
// 				title.classList.add("dropShadow");
// 				titleSub.classList.add("dropShadow");
// 			}
// 	})

// })


function homeAboutAnim() {
	var aCHeaders = document.querySelectorAll(".about-row h4");
	var aCContents = document.querySelectorAll(".about-row h5");

	var homeAboutAnime = anime.timeline();
	homeAboutAnime
		.add({
			targets: '.aboutCircle',
			scale: [
				{ value: 0 },
				{ value: 1.1 },
				{ value: 1 }
			],
			opacity: [0, 1],
			delay: function(el, i) {
				return (i * 200);
			},
			duration: 1000,
			easing: 'easeInOutSine'
		})
		.add({
			targets: aCHeaders,
			translateX: [-80, 20],
			duration: 360,
			delay: function(el, i) {
				return (i * 150);
			},
			easing: 'easeOutQuad',
		}, '-=980')
		.add({
			targets: aCContents,
			opacity: [0, 1],
			duration: 500,
			easing: 'easeOutQuad',
		}, '-=500')


}



/*********DISPLAY PRODUCTS ANIMATION**********/


function viewProducts(brand, type) {
	var productType = document.querySelectorAll(".product-type");
	var productBrand = document.querySelectorAll(".product-brand");
	var displayProduct = document.querySelectorAll(".productDisplay");

	for (var i = 0; i < displayProduct.length; i++) {
		if (brand === productBrand[i].innerText && type === productType[i].innerText) {
			console.log(productType + ' ' + productBrand)
			displayProduct[i].style.display = "block";
			displayProduct[i].style.animation = "nav-spinIn 1.5s ease forwards";
		}
		else {
			console.log(productType + ' ' + productBrand)
			displayProduct[i].style.display = "none";
		}
	}

}


var productListItems = document.querySelectorAll(".collapsible-body li a");

for (var i = 0; i < productListItems.length; i++) {
	productListItems[i].addEventListener("click", function() {

	})
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


var aboutHome = document.querySelector("#about-home");

window.onscroll = function() { scrollFunction() };
var hAPlayed = false;
function scrollFunction() {

	scrollBtnAnim.seek(currentYPosition());
	miniLogoAnim.seek(currentYPosition());
	//aboutSvgAnim();
	
	if (currentYPosition() > 600 && hAPlayed == false) {
		homeAboutAnim();
		hAPlayed = true;
	}

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




