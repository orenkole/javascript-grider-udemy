fetch("https://swapi.dev/api/planets/")
  .then(res => {
    if(res.ok) {
      return res.json()
    } else {
      throw new Error("")
    }
  })
  .then(planetsData => {
    console.log(planetsData.results[0].films[0]);
    filmUrl = planetsData.results[0].films[0];
    return fetch(filmUrl);
  })
  .catch(err => {
    console.log(err);
  })
  .then(res => {
    if(res.ok) {
      return res.json()
    } else {
      throw new Error("")
    }
  })
  .then(filmData => {
    console.log(filmData);
  })
