import { useState } from "react";
import "../styles/board.css";


function Board({photoData}) {
    const [clickedCardsList, setClickedCardsList] = useState([]);
    const [bestScore, setBestScore] = useState(0);


    function shuffleArray(array) {
        for (let i = array.length - 1; i >= 1; i -= 1) {
            const idx = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[idx];
            array[idx] = temp;
        }
    };


    function cardClickHandler(event) {
        const id = Number(event.target.id);
        if (clickedCardsList.includes(id)) {
            setClickedCardsList([]);
        } else {
            const newClickedCardsList = [...clickedCardsList, id];
            setClickedCardsList(newClickedCardsList);
            if (newClickedCardsList.length > bestScore) {
                setBestScore(bestScore + 1);
            }
        }
    };

    
    shuffleArray(photoData);

    return (
        <>
        </>
    );
};


export default Board;