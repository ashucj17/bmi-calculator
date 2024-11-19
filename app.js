const form = document.querySelector("form");
// It will provide an empty value
// const weight = parseInt(document.querySelector("#weight").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter valid weight ${weight}`;
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi <= 18.6) {
      results.innerHTML = `<p>${bmi} You are under weight</p>`;
      console.log(`You are under weight ${bmi}`);
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `<p>${bmi} Your weight is normal</p>`;
      console.log(`Your weight is normal ${bmi}`);
    } else if (bmi >= 25) {
      results.innerHTML = `<p>${bmi} You are overweight</p>`;
      console.log(`You are overweight ${bmi}`);
    }
  }
});
