const contentEl = document.getElementById('content');
const headerEl = document.getElementById("headerBar");
const allEpisodes = getAllEpisodes();


/*----Function that is the page set up----*/
function setup() {
  contentEl.innerHTML = '';
  makePageCardForEpisodes(allEpisodes);
  // dropdownMenu(allEpisodes);
  dropdownMenu(allEpisodes);
}


/*--------------------------------------------------------------------------------*/


/*----Function in with a Loop in for making all the cards----*/
function makePageCardForEpisodes(episodeList){

  contentEl.innerHTML = "";

  episodeList.forEach((createEpisodeCard) => {
    const movieEl = document.createElement('main');
    const movieUrl = createEpisodeCard.url;
    const movieImg = createEpisodeCard.image.medium;
    const movieTitle = createEpisodeCard.name;
    const movieSummary = createEpisodeCard.summary;
    const movieSeasonNumber = createEpisodeCard.season;
    let movieEpisodesNumber = createEpisodeCard.number;
    if(movieEpisodesNumber < 10){
      movieEpisodesNumber = `0${movieEpisodesNumber}`
    }
    const episodeCode = `S0${movieSeasonNumber}E${movieEpisodesNumber}`;
    
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
  showEpisodes(episodeList)
}

/*---------------------------------Dropdown Menu----------------------------------*/


/*----Function with Map Function for Search bar----*/ 
function dropdownMenu(episodeList){
  const selectEl = document.createElement('select');
  const options = episodeList.map(movie => `<option value="${movie.name}">${movie.name}-${movie.name}</option>`);
  selectEl.innerHTML = options.join('');
  console.log(selectEl);
  document.getElementById('root').appendChild(selectEl);
}

/*-----------------------------------------Search Bar------------------------------*/

/*----Event listener for Function Search bar----*/
  const searchEl = document.getElementById('search');
  form.addEventListener("input", (e) => {
  e.preventDefault();
  const searchTerm = searchEl.value;
  console.log("search Episodes:", searchTerm);
  filterSearchResults(allEpisodes, searchTerm.toLowerCase());
});

/*----Fliter Function for Search bar----*/
function filterSearchResults(arrayOfEpisodes, searchInput) {
    filteredEpisodes = arrayOfEpisodes.filter((episode) => {
    return (
      episode.summary.toLowerCase().includes(searchInput) ||
      episode.name.toLowerCase().includes(searchInput)
    );
  })
  makePageCardForEpisodes(filteredEpisodes)
   console.log(filteredEpisodes)
}

  
/*--------------------------------------------------------------------------------*/



/*----Function that displays how many epsisodes are displaying on the webpage----*/  
function showEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

/*--------------------------------------------------------------------------------*/

window.onload = setup;




