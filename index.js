// Synchronous!
console.log(2 + 2);

// Asynchronous, iets gaat even duren, dus we moeten er opwachten!
async function getUser() {
  return { name: "rein" };
}

// MAG NIET: await gebruiken terwijl je niet in een async function zit!
// const user = await getUser();

// console.log(user); // what krijgen we nu?

async function logUser() {
  const user = await getUser();
  console.log(user.name);
}

logUser();
