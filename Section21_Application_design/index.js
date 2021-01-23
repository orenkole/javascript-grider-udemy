// 6146d12e

const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "6146d12e",
      s: "avengers"
    }
  })
  console.log(response.data);
}

fetchData();
