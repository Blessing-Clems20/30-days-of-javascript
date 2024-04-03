//Callback
const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback("It did not go well", skills);
  }, 2000);
};

const callback = (err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
};

doSomething(callback);

// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

const url = "https://restcountries.com/v2/all";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));

const countriesAPI = "https://restcountries.com/v2/all";

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject(new Error("Network response was not ok"));
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

fetchData(countriesAPI)
  .then((data) => {
    data.forEach((country) => {
      console.log("Country Name:", country.name);
      console.log("Capital:", country.capital || "N/A");
      console.log(
        "Languages:",
        country.languages.map((lang) => lang.name).join(", ")
      );
      console.log("Population:", country.population.toLocaleString());
      console.log(
        "Area:",
        country.area ? `${country.area.toLocaleString()} sq.km` : "N/A"
      );
      console.log("-----------------------------");
    });
  })
  .catch((error) => {
    console.log("There was a problem with the fetch operation:", error.message);
  });
