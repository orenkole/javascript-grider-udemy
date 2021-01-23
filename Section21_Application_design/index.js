// 6146d12e
const input = document.querySelector("input");

const debounce = (func, delay = 500) => {
  let timeoutId;
  return (...args) => {
    if(timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  }
}

const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "6146d12e",
      s: searchTerm
    }
  })
  console.log(response.data);
}

onInput = (event) => {
  fetchData(event.target.value)
}

input.addEventListener("input", debounce(onInput, 500))
