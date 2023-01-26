/*********INITIALIZE***********/

function getAll(elem) {
	return document.querySelectorAll(elem);
}

document.addEventListener('DOMContentLoaded', function() {
	M.Carousel.init(getAll('#homeCarousel'), { indicators: true, fullWidth: true, onCycleTo: playTextAnimation2 });
	if(isMobileDevice()) {
		M.Carousel.init(getAll('#brandCarousel'), { numVisible: 6, padding: 50, duration: 400, transition: 800 });
	} else {
		M.Carousel.init(getAll('#brandCarousel'), { numVisible: 6, padding: 200, duration: 400, transition: 800 });
	}
	
});

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

var provision = document.querySelectorAll(".provision");
var bodyBg = document.querySelector("#scrollBackground");

	// provision[0].addEventListener("mouseover", function() {
	// 	bodyBg.classList.remove("cloudBg")
	// 	bodyBg.classList.remove("connectionBg")
	// 	bodyBg.classList.remove("gearBg")
	// })
	// provision[1].addEventListener("mouseover", function() {
	// 	bodyBg.classList.remove("cloudBg")
	// 	bodyBg.classList.remove("connectionBg")
	// 	bodyBg.classList.add("gearBg")
	// })
	// provision[2].addEventListener("mouseover", function() {
	// 	bodyBg.classList.remove("gearBg")
	// 	bodyBg.classList.remove("cloudBg")
	// 	bodyBg.classList.add("connectionBg")
	// })
	// provision[3].addEventListener("mouseover", function() {
	// 	bodyBg.classList.remove("gearBg")
	// 	bodyBg.classList.remove("connectionBg")
	// 	bodyBg.classList.add("cloudBg")
    // })
    
    /********************CAROUSEL*******************/
	document.addEventListener('DOMContentLoaded', function() {
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
		
	});

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

function playTextAnimation(delay) {

	var textAnimation = anime.timeline();
	textAnimation
		.add({
			targets: '.letter',
			opacity: 1,
			duration: 400,
			color: { value: '#42a5f5' },
			delay: anime.stagger(100, { direction: 'reverse' }),
			easing: 'easeOutExpo',
		}, delay)
		.add({
			targets: '.letter',
			color: '#FFF',
			duration: 500,
			delay: anime.stagger(110, { direction: 'reverse' }),
			easing: 'easeOutExpo'
		}, delay)
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

if(isMobileDevice()) {
	playTextAnimation(100);
} else {
	playLogoAnimation();
	playTextAnimation(2200);
}




/************ABOUT ANIM ************/

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

var aboutHome = document.querySelector("#about-home");

window.onscroll = function() { scrollFunctionHome() };
var hAPlayed = false;

function scrollFunctionHome() {
    if (currentYPosition() > 600 && hAPlayed == false) {
        homeAboutAnim();
        hAPlayed = true;
    }
}

/**************PROVISION SVG ANIMATION****************/


// var provisionContainer = document.querySelectorAll('.provision')
// var svgSS = document.querySelectorAll('.shapeshifter');
// var loopCompleted = false;

// var animation = anime({
// 	targets: svgSS,
// 	backgroundPosition: '0px 0px',
// 	translateY: [
// 		{ value: -50, duration: 220 },
// 		{ value: 0, duration: 230 }
// 	],
// 	easing: 'easeInQuad',
// 	delay: anime.stagger(250, { easing: 'linear', start: 1400 }),
// 	loop: true,
// 	loopComplete: function(anim) {
// 		loopCompleted = anim.loopCompleted;
// 	}
// })



// svgSS.forEach(function(svg, index) {

// 	var timeLine = anime.timeline();
// 	timeLine
// 		.add({
// 			targets: svg,
// 			backgroundPosition: ['0px 0px', '-5560px 0px'],
// 			easing: 'steps(30)',
// 			opacity: [1],
// 			duration: 500,
// 		}, 0)

// 	function enterButton() {
// 		if (timeLine.reversed) timeLine.reverse();
// 		timeLine.add({
// 			targets: svg,
// 			backgroundPosition: ['0px 0px'],
// 			opacity: [1],
// 			duration: 1,
// 		}, '-=501')
// 		timeLine.play();
// 		animation.finished.then(animation.pause());
// 	}

// 	function leaveButton() {

// 		if (!timeLine.reversed) timeLine.reverse();
// 		timeLine.add({
// 			targets: svg,
// 			backgroundPosition: ['-5560px 0px'],
// 			opacity: [1],
// 			duration: 1,
// 		}, '-=501')
// 		timeLine.play();
// 	}

// 	provisionContainer[index].addEventListener('mouseenter', enterButton, false);
// 	provisionContainer[index].addEventListener('mouseleave', leaveButton, false);

// })

