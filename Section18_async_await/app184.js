async function getPlanets() {
  try {
    const res = await axios.get("https://swapi.dev/api/planets/")
    console.log(res.data);
  } catch (error) {
    console.log("In catch");
    console.log(error.message);
  }
}
