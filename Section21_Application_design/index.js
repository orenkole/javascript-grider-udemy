// 6146d12e


const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "6146d12e",
      s: searchTerm
    }
  })
  if(response.data.Error) {
    return [];
  }
  return response.data.Search;
}

const root = document.querySelector(".autocomplete");
root.innerHTML = `
  <label for=""><b>Search For a Movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;
const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  if(!movies.length) {
    dropdown.classList.remove("is-active");
    return;
  }
  resultsWrapper.innerHTML = "";
  dropdown.classList.add("is-active");
  for(let movie of movies) {
    const option = document.createElement("a");
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster
    option.classList.add("dropdown-item");
    option.innerHTML = `
      <img src="${imgSrc}" />
      ${movie.Title}
    `;
    option.addEventListener("click", () => {
      // update input and close dropdown
      dropdown.classList.remove("is-active");
      input.value = movie.Title;
      onMovieSelect(movie);
    })
    resultsWrapper.append(option);
  }
}

input.addEventListener("input", debounce(onInput, 1000))

document.addEventListener("click", (e) => {
  if(!root.contains(e.target)) {
    dropdown.classList.remove("is-active");
  }
})

const onMovieSelect = async (movie) => {
  const reponse = await axios.get(`http://www.omdbapi.com/`, {
    params: {
      apikey: "6146d12e",
      i: movie.imdbID,
    }
  })
  document.querySelector("#summary").innerHTML = movieTemplate(reponse.data)
}

const movieTemplate = (movieDetail) => {
  return `
    <article class="media">
    <figure class="media-left">
      <p class="image"><img src=${movieDetail.Poster} alt=""></p>
    </figure>
    <div class="media-content">
      <content>
        <h1>${movieDetail.Title}</h1>
        <h4>${movieDetail.Genre}</h4>
        <p>${movieDetail.Plot}</p>
      </content>
    </div>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.Awards}</p>
      <p class="subtitle">Awards</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.BoxOffice}</p>
      <p class="subtitle">Box Office</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.Metascore}</p>
      <p class="subtitle">Metascore</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.imdbRating}</p>
      <p class="subtitle">IMDB rating</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.imdbVotes}</p>
      <p class="subtitle">IMDB votes</p>
    </article>
  `;
}
