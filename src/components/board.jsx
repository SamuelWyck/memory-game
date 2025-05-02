import { useState } from "react";
import "../styles/board.css";
import Card from "./card.jsx";


function Board({photoData}) {
    const [cardList, setCardList] = useState(getCardArray(photoData));
    const [clickedCardIdsList, setClickedCardIdsList] = useState([]);
    const [bestScore, setBestScore] = useState(0);


    function shuffleArray(array) {
        for (let i = array.length - 1; i >= 1; i -= 1) {
            const idx = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[idx];
            array[idx] = temp;
        }
    };


    function getCardArray(array) {
        const cardArray = [];
        for (let item of array) {
            cardArray.push(
                <Card 
                    key={item.id} data={item} 
                    clickHandler={cardClickHandler}
                />
            );
        }
        return cardArray;
    };


    function cardClickHandler(event) {
        const id = Number(event.target.id);
        if (clickedCardIdsList.includes(id)) {
            setClickedCardIdsList([]);
        } else {
            const newClickedCardIdsList = [...clickedCardIdsList, id];
            setClickedCardIdsList(newClickedCardIdsList);
            if (newClickedCardIdsList.length > bestScore) {
                setBestScore(bestScore + 1);
            }
        }
    };

    
    shuffleArray(cardList);

    return (
        <div className="board">
            {cardList}
        </div>
    );
};


export default Board;