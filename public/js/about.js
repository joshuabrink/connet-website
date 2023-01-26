function getAll(elem) {
	return document.querySelectorAll(elem);
}

document.addEventListener('DOMContentLoaded', function() {
	
	M.Parallax.init(getAll('.parallax'), { responsiveThreshold: 0 });
	M.Pushpin.init(getAll('.pushpin'), { top: 117 });
	M.ScrollSpy.init(getAll('.scrollspy'), { activeClass: "active-scrollspy" });
	M.Collapsible.init(getAll('.collapsible'), {});
	M.Tabs.init(getAll('.tabs'), {});

});

var card_image= document.querySelector("#card_img")
var dual_image = document.querySelectorAll(".dual-img")

for(var i = 0; i < dual_image.length; i++) {
	dual_image[i].style.height = card_image.style.height;
}

var played = false;

function aboutSvgAnim() {
	var aboutSvgs = document.querySelectorAll('.about-svg');
	var aboutCircles = document.querySelectorAll('.circleBg');
	var aboutAnimation = anime.timeline();
	if (played == true) {
		return;
	}

	aboutAnimation
		.add({
			targets: aboutSvgs,
			opacity: [0, 1],
			easing: 'linear',
			duration: 100
		})
		.add({
			targets: aboutSvgs,
			backgroundPosition: ['0px 0px', '-5560px 0px'],
			easing: 'steps(30)',
			duration: 1000,
			delay: anime.stagger(600, { easing: 'linear', start: 100 }),

			complete: function(anim) {
				aboutCircles.forEach(function(circle) {
					circle.classList.add("dropShadow");
				})

			}
		})

	if (played == false) {
		aboutAnimation.play()
	}
	played = true;
}