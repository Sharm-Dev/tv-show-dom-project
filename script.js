const contentEl = document.getElementById('content');
const headerEl = document.getElementById("headerBar");
const formEl = document.getElementById("form")
const selectEl = document.createElement('select');
const searchEl = document.getElementById('search');
const allEpisodes = getAllEpisodes();


/*----Function that is the page set up----*/
function setup() {
  contentEl.innerHTML = '';
  makePageCardForEpisodes(allEpisodes);
  dropdownMenu(allEpisodes);
}


/*----------------------Season and episode code-----------------------------------*/

function getEpisodeCode(createEpisodeCard){
  const movieSeasonNumber = createEpisodeCard.season;
  let movieEpisodesNumber = createEpisodeCard.number;
    if(movieEpisodesNumber < 10){
      movieEpisodesNumber = `0${movieEpisodesNumber}`
    }
    const episodeCode = `S0${movieSeasonNumber}E${movieEpisodesNumber}`;
    return episodeCode
};



/*----Function in with a Loop in for making all the cards----*/
function makePageCardForEpisodes(episodeList){

  contentEl.innerHTML = "";

  episodeList.forEach((createEpisodeCard) => {
    const movieEl = document.createElement('main');
    const movieUrl = createEpisodeCard.url;
    const movieImg = createEpisodeCard.image.medium;
    const movieTitle = createEpisodeCard.name;
    const movieSummary = createEpisodeCard.summary;

    const episodeCode = getEpisodeCode(createEpisodeCard);


    movieEl.innerHTML=
    `<div id="movieCard">
    <button><a href="${movieUrl}" target="_blank">
      <h2>${movieTitle} - ${episodeCode}</h2> 
    </a></button>
      <img
            src="${movieImg}"
            alt="${movieTitle}"
      />

        <div id="cardSummary">${movieSummary}</div>
    </div>`;
    contentEl.appendChild(movieEl);
  });
}

/*---------------------------------Dropdown Menu----------------------------------*/


/*----Function with Map Function for Dropdown Menu----*/ 

function dropdownMenu(episodeList){
  selectEl.innerHTML = '';
  let options =  episodeList.map((episode) => {
  
  const dropdownEpisodeCode = getEpisodeCode(episode);

    return`<option value="${episode.name}">${dropdownEpisodeCode} - ${episode.name}</option>`;  
  }); 
selectEl.innerHTML =options.join('')
document.getElementById('root').appendChild(selectEl);
};
selectEl.addEventListener("change",(e)=>{
  console.log(e.target.value);
  let filteredArray = filterSearchResults(allEpisodes, e.target.value);
  makePageCardForEpisodes(filteredArray);
});


/*-----------------------------------------Search Bar------------------------------*/


/*----Fliter Function for Search bar----*/
function filterSearchResults(arrayOfEpisodes, searchInput) {
  searchInput = searchInput.toLowerCase();
   filteredEpisodes = arrayOfEpisodes.filter((episode) => {
    return (
      episode.summary.toLowerCase().includes(searchInput) ||
      episode.name.toLowerCase().includes(searchInput)
    );
  })
  return filteredEpisodes;
}
formEl.addEventListener("input", (e) => {
  e.preventDefault();
  const searchTerm = searchEl.value;
  let filteredArray = filterSearchResults(allEpisodes, searchTerm.toLowerCase());
  makePageCardForEpisodes(filteredEpisodes);
  dropdownMenu(filteredEpisodes);
  showEpisodes(filteredArray);
});

  
/*--------------------------------------------------------------------------------*/

/*----Function that displays how many epsisodes are displaying on the webpage----*/  
function showEpisodes(episodeList) {
  const rootElem = document.getElementById("rootGotNumEpisodeText");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

/*--------------------------------------------------------------------------------*/

window.onload = setup;




