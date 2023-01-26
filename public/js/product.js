/*********INITIALIZE***********/

function getAll(elem) {
	return document.querySelectorAll(elem);
}

document.addEventListener('DOMContentLoaded', function() {
	M.Carousel.init(getAll('#featureCarousel'), { numVisible: 3, padding: 200 });
	M.Parallax.init(getAll('.parallax'), { responsiveThreshold: 0 });
    M.Pushpin.init(getAll('.pushpin'), { top: 117 });
    M.ScrollSpy.init(getAll('.scrollspy'), { activeClass: "active-scrollspy" });

});

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