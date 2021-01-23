// 6146d12e
console.log("hello time");
const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "6146d12e",
      s: searchTerm
    }
  })
  console.log(response.data);
}

let timeoutId;
onInput = (event) => {
  if(timeoutId) {
    console.log(timeoutId);
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    fetchData(event.target.value)
  }, 2000);
}

const input = document.querySelector("input");
input.addEventListener("input", onInput)
