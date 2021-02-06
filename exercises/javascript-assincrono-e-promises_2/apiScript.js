const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};
fetch(API_URL, myObject)
.then((response) => {
  response.json().then((data) => {    
    document.getElementById('jokeContainer').innerHTML = data.joke;
  })
})
};

const sumRandomNumbers = () => {
  const myArray = Array.from(
    { length: 10 },
    () =>  Math.floor(Math.random() * 50) + 1
  );
  const sum = myArray.map(number => number * number)
                     .reduce((number, acc) => number + acc, 0);

  if (sum > 8000) throw new Error();

  return sum;
};

const generateArrayFromSum = sum => [2, 3, 5, 10].map(number => sum / number);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const array = await generateArrayFromSum(sum);

    console.log(array);
  } catch(e) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();
