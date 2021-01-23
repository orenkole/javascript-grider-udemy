function checkStatusandParse(res) {
  if(res.ok) {
    return res.json()
  } else {
    throw new Error("")
  }
}

// to be able to chain, we must return Promise
const printPlanets = planetsData => {
  console.log("fetched first 10 planets");
  for(let planet of planetsData.results){
    console.log(planet.name);
  }
  // return new Promies((res, rej) => res(planetsData)) is like:
  return Promise.resolve(planetsData.next);
}

const fetchNextPlanets = (url) => {
  return fetch(url);
}

fetch("https://swapi.dev/api/planets/")
  .then(checkStatusandParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusandParse)
  .then(printPlanets)
  .catch(err => {console.log(err);});
