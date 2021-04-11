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
			["Drink #1", `Magnificent aromas and a favourable flavour delieverd from galaxy, mosaic and citra hops.`],
			["Grease Remover", `Made with our amazingly clean techniques.`],
			["Incredible Flavour", `Light malt body offers a crisp but not bitter drink.`],
			["Iconic Design", `Beautiful art made to inspire!`]
		];

		const productText = [
			["Drink #1", `Dry Hops: Citra, Galaxy, Mosaic, Simcoe.`],
			["Drink #2", `Dry Hops: Citra, Mosiac, Amarillo, Simcoe.`],
			["Drink #3", `Dry Hops: El Dorado, Azacca, Chinook.`],
			["Drink #4", `Dry Hops: Citra, Azacca, Chinook, Simcoe.`]
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
