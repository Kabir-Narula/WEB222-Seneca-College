/* ********* 

  BTI225 – Assignment 05

  I declare that this assignment is my own work in accordance with
  Seneca Academic Policy. No part of this assignment has been
  copied manually or electronically from any other source
  (including web sites) or distributed to other students.

  Please update the following with your information:

  Name:       Kabir Narula 
  Student ID: 127962223
  Date:       27 July 2023
 
********* */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
//console.log({ artists, songs }, "App Data");

function buildMenu() {
  for (
    let i = 0;
    i < artists.length;
    i++ //function loops through all the artists.
  ) {
    //adds the following into the HTML document in the element with the menu id.
    menu.innerHTML += `<span onclick='showSelectedArtist("${artists[i].id}")' class="artists">${artists[i].name}</span>&nbsp;`;
  }
}

function showSelectedArtist(artistID) {
  //console.log("TODO: Show Artist with ID: " + artistID)

  let selectedArtistContainer = document.getElementById("selected-artist");

  let selectedArtist = artists.find((artist) => artist.id == artistID);

  selectedArtistContainer.innerHTML = `<span class="display-artist">${selectedArtist.name}</span>`;

  for (let i = 0; i < selectedArtist.links.length; i++) {
    const link = selectedArtist.links[i];
    selectedArtistContainer.innerHTML += `<br><a href="${link.url}" target="_blank" class="links">${link.name}</a>`;
  }

  showCardsByArtist(artistID);
}

function showCardsByArtist(artistID) {
  let artistsSongs = songs.filter((song) => song.artistId == artistID);
  let cardContainer = document.getElementById("card-container");

  cardContainer.innerHTML = ""; // clear out the card container

  //cardContainer.innerHTML=`<section class="container">`;
  for (let i = 0; i < artistsSongs.length; i++) {
    const album = artistsSongs[i].album;
    cardContainer.innerHTML += `
      <article class="card"> 
        <img class="image" src="${album.imageURL}" width="200"> 
        <div class="content"> 
          <p>
          <p>${artistsSongs[i].title}</p><br>
            Year: ${artistsSongs[i].year} <br>
            Duration: ${artistsSongs[i].duration} <br>
            Album: ${album.name}
          </p>
        </div>   
      </article> 
    `;
  }
  // cardContainer.innerHTML+= `</section>`
}

document.addEventListener("DOMContentLoaded", function () {
  buildMenu();
  showSelectedArtist(artists[0].id);
  showCardsByArtist(artists[0].id);
});
