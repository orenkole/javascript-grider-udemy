axios
  .get("https://swapi.dev/api/planets/")
  .then(res => {console.log(res);})
  .catch(err => {console.log(err);})
