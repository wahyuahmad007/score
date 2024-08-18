// const buttonp1 = document.querySelector('#button-p1');
// const buttonp2 = document.querySelector('#button-p2');
// const display1 = document.querySelector('#display1');
// const display2 = document.querySelector('#display2');
// const resetButton = document.querySelector('#reset');
// const maxpoint = document.querySelector("#winpoint");


// let p1Score = 0;
// let p2Score = 0;
// let winPoint = 5;
// let gameOver = false


// function reset(){
//     gameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     display1.textContent = 0;
//     display2.textContent =0;
// }

// resetButton.addEventListener('click',reset);
// maxpoint.addEventListener('change',function(){
//     winPoint = parseInt(this.value);
//     reset();
// });


// buttonp1.addEventListener('click',function(){
// if (!gameOver){
//     p1Score +=1;

// if (p1Score=== winPoint){
//     gameOver = true;
// }

//     display1.textContent = p1Score;
// }
// })


// buttonp2.addEventListener('click',function(){
// if (!gameOver){
//     p2Score +=1;

// if (p2Score=== winPoint){
//     gameOver = true;
// }

//     display2.textContent = p2Score;
// }
// })
// const hello = async () => {
// 	// throw 'Maaf gak kenal';
// 	return 'Hello World';
// };

// hello()
// 	.then((res) => {
// 		console.log('response', res);
// 	})
// 	.catch((err) => {
// 		console.log('error', err);
// 	});

// const req = new XMLHttpRequest();

// let data;
// req.onload = function(){

// 	data = JSON.parse(this.responseText);
// 	console.log(data);
// };

// req.onerror = function (){
// 	console.log('Error',this);
// };

// req.open('GET','https://swapi.dev/api/people/1');
// req.send();

// const loadPeople = async()=>{
// 	try {
// 		const res  = await fetch('https://swapi.dev/api/peodfple/1');
// 		const data = await res.json();
// 		console.log(data);
// 	}catch(err){
// 		console.log('error',err);
// 	}
// };
// loadPeople();

// axios.get('https://swapi.dev/api/people/1').then((res)=>{
// 	console.log(res);
// }).catch((res)=>{
// 	console.log(err);
// })

// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');

// const addJoke = async ()=>{
// 	const jokeText = await getJokes();
// 	const newLi = document.createElement('LI');
// 	newLi.append(jokeText);
// 	jokes.append(newLi);
// }

// const getJokes = async()=>{
// try {
// 		const config = {
// 			headers: {
// 				Accept: 'application/json',
// 			},
// 		};
// 		const res = await axios.get('https://icanhazdadjoke.com/', config);
// 		return res.data.joke;
// 	} catch (error) {
// 		return 'No Jokes Available!';
// 	}
// };
// button.addEventListener('click',addJoke);
const form = document.querySelector('#search-form');

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	document.querySelectorAll('img').forEach((img) => img.remove());

	const keyword = form.elements.query.value;
	const config = {
		params: { q: keyword },
	};
	const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
	getImages(res.data);
	form.elements.query.value = '';
});

const getImages = (shows) => {
	for (let result of shows) {
		if (result.show.image) {
			const img = document.createElement('img');
			img.src = result.show.image.medium;
			document.body.append(img);
		}
	}
};