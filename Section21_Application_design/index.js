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
