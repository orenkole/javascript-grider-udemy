const createAutoComplete = ({root, renderOption, onOptionSelect}) => {
  // const root = document.querySelector(".autocomplete");
  root.innerHTML = `
    <label for=""><b>Search For a Movie</b></label>
    <input class="input" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  `;
  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");

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
      option.classList.add("dropdown-item");
      option.innerHTML = renderOption(movie);
      option.addEventListener("click", () => {
        // update input and close dropdown
        dropdown.classList.remove("is-active");
        input.value = movie.Title;
        onOptionSelect(movie);
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
}
