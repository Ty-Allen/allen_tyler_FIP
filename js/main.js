(function(){
	"use strict";
		console.log("fired");

		const button = document.querySelector("#button"),
		 			burgerCon = document.querySelector("#burgerCon"),
					prodDescription = document.querySelector(".productDescription"),
					prodName = document.querySelector(".productName"),
 					prodButton = document.querySelector("#products"),
					imageNameChange = document.querySelector(".productTitle"),
					imageDescChange = document.querySelector(".productMainDesc"),
					imageSections = document.querySelector(".productImage");

		const imageText = [
			["Product #1", `Description of product.`],
			["Change 2", `Cool Description2`],
			["Change 3", `Cool Description3`],
			["Change 4", `Cool Description4`]
		];

		const productText = [
			["Product 1", `Product 1 Description`],
			["Product 2", `Product 2 Description`],
			["Product 3", `Product 3 Description`],
			["Product 4", `Product 4 Description`]
		];

		function hamburgerMenu() {
			button.classList.toggle("expanded");
			burgerCon.classList.toggle("slideToggle")
		}

		function setProdInfo(name, desc) {
	    prodName.textContent = `${name}`;
	    prodDescription.textContent = desc;
	  }

		function displayProdInfo(event) {
			if (event.target.className.includes('infoButton')) {
				setProdInfo(productText[event.target.dataset.offset][0], productText[event.target.dataset.offset][1]);
			}
		}

		function setImageText(name, desc) {
			imageNameChange.textContent = `${name}`;
	    imageDescChange.textContent = desc;
		}

		function displayTextChange(event) {
			if (event.target.className.includes('imageSection')) {
				setImageText(imageText[event.target.dataset.offset][0], imageText[event.target.dataset.offset][1]);
			}
		}

		button.addEventListener("click", hamburgerMenu);

		prodButton.addEventListener("click", displayProdInfo);

		imageSections.addEventListener("mouseover", displayTextChange);
})();
