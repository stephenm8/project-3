// jshint esversion: 6

//req 3d
let failHandler = () => {
  $(".photos")
    .empty()
    .html("<h3>Error -- breed not found<h3>");
};

//1 Define the onclick handler
let clickHandler = function() {
  let imgElem;
  let prefixURL = "https://dog.ceo/api/breed/";
  let suffixURL = "/images/random/6";
  let dogTag = document.querySelector('input[type = "text"]').value;
  let requestURL = prefixURL + dogTag + suffixURL;

  //clear old photos
  document.querySelector(".photos").innerHTML = "";

  $.getJSON(requestURL, function(dogResponse) {
    dogResponse.message.forEach(function(imgURL, index) {
      let imgElem = document.createElement("img");
      imgElem.hidden = true;

      imgElem.setAttribute("src", imgURL);
      imgElem.setAttribute("width", "100");

      document.querySelector(".photos").appendChild(imgElem);
      imgElem.hidden = false;
    });
  }).fail(failHandler);
};

window.addEventListener("load", () => {
  let buttonElem = document.querySelector("button");
  buttonElem.addEventListener("click", clickHandler);
});
