// fetch("https://icanhazdadjoke.com/23/2", {
//   headers: {
//     Accept: "application/json"
//   }
// })
//   .then(res => res.json())
//   .then(data => {console.log(data);})
//   .catch(function (err) {
//     console.log((err));
//   })


fetch("https://swapi.dev/api/planets404")
  .catch(err => {console.log("fetch planet failed");})
  .then(planetsResponse => {
    if(planetsResponse && planetsResponse.ok) {
      planetsResponse.json()
    } else {
      throw new Error("planets response error")
    }
  })
  .then(planetsData => {
    if(planetsData) {
      const filmUrl = planetsData.results[0].films[0];
      return fetch(filmUrl);
    } else {
      throw new Error("no planets data")
    }
  })
  .catch(err => {console.log(`fetch film failed`);})
  .then(filmResponse => {
    if(filmResponse && filmResponse.ok) {
      filmResponse.json()
    } else {
      throw new Error("film reposponse error")
    }
  })
  .then(filmData => {console.log(filmData);})
