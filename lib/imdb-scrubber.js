var imdbRows = [].slice.call(
  document
    .getElementById("filmography")
    .querySelectorAll(".filmo-row > b a:first-of-type")
); // returns row of HTML elements containing film data

// future array of films
var exportedData = [];

// map over HTML elements containing film data
imdbRows.map(film => {
  // throw away unneeded rows
  if (exportedData[film.attributes.href.value.split("/")[2]]) {
    return;
  }

  // each film will have multiple captions
  var captionBits = [];

  captionBits = film.parentNode.parentNode.childNodes[4].nodeValue // get the text from the element that contains the captions
    .trim() // remove unneeded spaces
    .replace(/\) \/? \(/g, ", ") // replace ") (" or ") / (" with ", "
    .split(", ") // convert to array of dirty caption bits
    .map(bit => {
      return bit.replace(")", "").replace("(", "");
    }) // convert dirty bits to clean bits 🛀
    .filter(Boolean); // filter out empty strings

  exportedData.push({
    id: film.attributes.href.value.split("/")[2], // dig into the <a> tag and get the films ID from the anchor tag
    name: film.innerHTML, // get text of the <a> tag
    link: "https://www.imdb.com" + film.attributes.href.value, // convert relative link to absolute link
    year: film.parentNode.parentNode // get the <a> tag's grandparent
      .querySelector(".year_column") // finding year column within grandparent
      .innerText.trim() // remove unneeded spaces
      .slice(0, 4), // return only first 4 digits a.k.a "2009"
    captions: captionBits
  });
});

JSON.stringify(exportedData, null, 2); // stringify data with tabs that equal two spaces
