//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  for(episodes in allEpisodes){
    console.log(allEpisodes[episodes].name);
  }
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}







window.onload = setup;
