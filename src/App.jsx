import { useState } from 'react';
import './App.css';
import Header from './components/header.jsx';
import Board from './components/board.jsx';
import defaultData from './defaultPics.js';


function App() {
	const picAPIKey = "7c3ntBcQtpYfaylcsqUfE04D4vEjtkowgP5AcSVOjECiKNeT1EQldZBV";
  	const [photoData, setPhotoData] = useState(defaultData);


	async function getData(url, options) {
		const response = await fetch(url, options);
		const responseJSON = await response.json();
		return responseJSON;
	};


	async function artClickHandler() {
		const querys = [
			"renaissance", "renaissance%20paintings",
			"renaissance%20artwork", "cathedral%20exterior"
		];
		const query = getRandomQuery(querys);

		const url = `https://api.pexels.com/v1/search?query=${query}&per_page=12`;
		const options = {mode: "cors", headers: {"Authorization": picAPIKey}};

		try {
			const data = await getData(url, options);
			const photoData = parseData(data);
			setPhotoData(photoData);
		} catch {
			setPhotoData(defaultData);
		}
	};

	
	async function picClickHandler() {
		const querys = [
			"wild&20animals", "nature%20wallpaper", "cities",
			"landscape", "fish", "africa%20wildlife",
			"china%20landscape", "food", "abstract",
			"medieval&20castle", "horse", "bird"
		];
		const query = getRandomQuery(querys);

		const url = `https://api.pexels.com/v1/search?query=${query}&per_page=12`;
		const options = {mode: "cors", headers: {"Authorization": picAPIKey}};
		
		try {
			const data = await getData(url, options);
			const photoData = parseData(data);
			setPhotoData(photoData);
		} catch {
			setPhotoData(defaultData);
		}
	};


	function parseData(data) {
		const parsedData = [];
		for (let photoInfo of data.photos) {
			const photoObject = {};

			photoObject["alt"] = photoInfo.alt;
			photoObject["author"] = photoInfo.photographer;
			photoObject["imgSrc"] = photoInfo.src.landscape;
			photoObject["id"] = photoInfo.id;
			parsedData.push(photoObject);
		}
		return parsedData;
	};


	function getRandomQuery(querys) {
		const randIdx = randInt(0, querys.length - 1);
		return querys[randIdx];
	};


	function randInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};





	return (
		<>
		<Header 
			artClickHandler={artClickHandler} 
			picClickHandler={picClickHandler}
		/>
		<Board photoData={photoData}/>
		</>
	);
}

export default App
