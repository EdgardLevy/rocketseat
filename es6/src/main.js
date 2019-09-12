//funcionamento assync com promise
const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });

// minhaPromise()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.error(err);
//   });

//usando async/await

async function executaPromise() {
  //const response = await minhaPromise();
  //console.log(response);
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

executaPromise();
