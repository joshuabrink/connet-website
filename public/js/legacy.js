/* SNAP SVG */

var svg = document.getElementById("cups");
var s = Snap(svg);
var circuit = Snap.select('#circuitBg');
var gears = Snap.select('#gearsBg');
var circuitPoints = circuit.node.getAttribute('d');
var gearsPoints = gears.node.getAttribute('d');
var toFancy = function(){
  circuit.animate({ d: gearsPoints }, 3000, mina.backout, toSimple);  
}
var toSimple = function(){
  circuit.animate({ d: circuitPoints }, 3000, mina.backout, toFancy); 
}
toSimple();

/************SVG PRE-LOADER************/

  // 	var preBackground = document.querySelectorAll('.preloader-background');
  // 	var preWrapper = document.querySelectorAll('.preloader-wrapper');

	// preBackground.style.animation = 'appearIn 2s ease reverse forwards';
	// preWrapper.style.animation = 'appearIn 2s ease reverse forwards';
	
/*	
	
	for(var i = 0; i< path.length;i++) {
		var length = path[i].getTotalLength();
		// Clear any previous transition
		path[i].style.transition = path[i].style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path[i].style.strokeDasharray = length + ' ' + length;
		path[i].style.strokeDashoffset = length;
		console.log(length)
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path[i].getBoundingClientRect();
		// Define our transition
		path[i].style.transition = path[i].style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path[i].style.strokeDashoffset = '0';
		
		}*/
		
/**********LOGO ANIMTAION***********/

/*        	for(var i = 0; i < 3; i++) {
	        	circleContent[i].style.animation = 'appear 1.2s ease-out 0.' + i*2 + 's reverse';
	        	aboutCircles[i].style.animation = 'grow 1s ease-in-out 0.' + i*2 + 's forwards';
	        	aboutCircles[i].style.animation = 'growCircle 1s ease-out 0.' + i*2 + 's forwards';
	        	aCContent[i].style.animation ='appear 0.76s ease-out 0.' + i*2 + 's forwards';
	        	aCContent[i].style.animation ='appearIn 0.76s ease-out 0.' + i*2 + 's forwards';
	        	aCHeader[i].style.animation = 'slideRight 0.7s ease 0.' + i*2 + 's forwards';
	        	aCHeader[i].style.animation = 'slideRight2 0.7s ease 0.' + i*2 + 's forwards';
        	}*/
        	
        	        /*	for(var i = aboutCircles.length - 1; i >= 0; i--) {
	        	circleContent[i].style.animation = 'appear 1.15s ease-out forwards';
	        	circleContent[i].style.animation = 'appearIn 1.15s ease-out forwards';
	        	aboutCircles[i].style.animation = 'appear 1.2s ease-in -0.' + i +'s reverse';
	        	aCContent[i].style.animation ='appear 1.2s ease -0.' + i + 's reverse';
	        	aCHeader[i].style.animation = 'slideRight 0.9s ease-out -0.' + i + 's reverse';
					}*/

					
/***********LOGIN ANIMATION************/


// var current = null;
// var loginText = document.querySelector('#login-text');
// var loginContent = document.querySelectorAll('#login-text div');
// var loginIcon = document.querySelector('.login i');

// document.querySelector('#email').addEventListener('focus', function(e) {

// 	loginIcon.style.animation = 'flash 1.2s ease-out -0.5s forwards';
// 	loginIcon.style.animation = 'flashIn 1.2s ease-out -0.5s forwards';
// 	loginIcon.innerText = 'mail_outline';

//   if (current) current.pause();
//   current = anime({
//     targets: '.tap-target-content path',
//     strokeDashoffset: {
//       value: 0,
//       duration: 700,
//       easing: 'easeOutQuart'
//     },
//     strokeDasharray: {
//       value: '240 1386',
//       duration: 700,
//       easing: 'easeOutQuart'
//     }
//   });
// });

// document.querySelector('#password').addEventListener('focus', function(e) {

// 	loginIcon.style.animation = 'flash 1.2s ease-out -0.82s forwards';
// 	loginIcon.innerText = 'lock_outline';

//   if (current) current.pause();
//   current = anime({
//     targets: '.tap-target-content path',
//     strokeDashoffset: {
//       value: -336,
//       duration: 700,
//       easing: 'easeOutQuart'
//     },
//     strokeDasharray: {
//       value: '240 1386',
//       duration: 700,
//       easing: 'easeOutQuart'
//     }
//   });
// });

// document.querySelector('#submit').addEventListener('focus', function(e) {
// 	loginIcon.style.animation = 'appear 1.2s ease-out -0.5s forwards';
// 		loginIcon.style.animation = 'appearIn 1.2s ease-out -0.5s forwards';
// 	loginIcon.innerText = 'input';
//   if (current) current.pause();
//   current = anime({
//     targets: '.tap-target-content path',
//     strokeDashoffset: {
//       value: -730,
//       duration: 700,
//       easing: 'easeOutQuart'
//     },
//     strokeDasharray: {
//       value: '530 1386',
//       duration: 700,
//       easing: 'easeOutQuart'
//     }
//   });
// });

		
		
		

		
		