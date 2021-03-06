// 6146d12e
const input = document.querySelector("input");

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

onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  for(let movie of movies) {
    const div = document.createElement("div")
    div.innerHTML = `
      <img src="${movie.Poster}" />
      <h1>${movie.Title}</h1>
    `;
    document.querySelector("#target").appendChild(div);
  }
}

input.addEventListener("input", debounce(onInput, 1000))
