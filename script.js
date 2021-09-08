const contentEl = document.getElementById('content');


function displayEpisodes(searchTerm) {
  contentEl.innerHTML = '';
  const allEpisodes = getAllEpisodes();
  

  const searchEsp = allEpisodes.filter(episode => {
    return (episode.name).toLowerCase().includes(searchTerm.toLowerCase()) || (episode.summary).toLowerCase().includes(searchTerm.toLowerCase());
  })


  for(numberOfLoop in searchEsp){

    const movieImg = searchEsp[numberOfLoop].image.medium;
    const movieTitle = searchEsp[numberOfLoop].name;
    const movieSummary = searchEsp[numberOfLoop].summary;
    const movieSeasonNumber = searchEsp[numberOfLoop].season;
    let movieEpisodesNumber = searchEsp[numberOfLoop].number;

    const movieCardUrl = searchEsp[numberOfLoop].url;
  


    if(movieEpisodesNumber < 10){
      movieEpisodesNumber = `0${movieEpisodesNumber}`
    }
    const episodeCode = `S0${movieSeasonNumber}E${movieEpisodesNumber}`;


    const movieEl = document.createElement('div');
    movieEl.innerHTML=
    `<div id="movieCard">
      <h1>${movieTitle} - ${episodeCode}</h1> 
      <img
            src="${movieImg}"
            alt="${movieTitle}"
      />

        <p>${movieSummary}</p>
    </div>`;



    contentEl.appendChild(movieEl);

  }


  
  makePageForEpisodes(allEpisodes);
}
const searchEl = document.getElementById('search');
searchEl.addEventListener('input',(event) =>{
  const searchTerm = event.target.value
  displayEpisodes(searchTerm);
})



function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}
window.onload = displayEpisodes;
