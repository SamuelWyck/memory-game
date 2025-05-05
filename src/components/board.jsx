import { useState } from "react";
import "../styles/board.css";
import Card from "./card.jsx";
import ScoreTracker from "./scoreTracker.jsx";


function Board({photoData}) {
    const [cardList, setCardList] = useState(getCardArray(photoData));
    const [clickedCardIdsList, setClickedCardIdsList] = useState([]);
    const [bestScore, setBestScore] = useState(0);


    function shuffleArray(array) {
        const shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i >= 1; i -= 1) {
            const idx = Math.floor(Math.random() * (i + 1));
            const temp = shuffledArray[i];
            shuffledArray[i] = shuffledArray[idx];
            shuffledArray[idx] = temp;
        }
        return shuffledArray;
    };


    function getCardArray(array) {
        const cardArray = [];
        for (let item of array) {
            cardArray.push(
                <Card 
                    key={item.id} data={item} 
                />
            );
        }
        return cardArray;
    };


    function cardClickHandler(event) {
        const target = event.target;
        if (!target.matches(".card") && !target.matches("img")) {
            return;
        }

        const id = (event.target.matches(".card")) ? 
            Number(event.target.id) : 
            Number(event.target.parentElement.id);
        
        if (clickedCardIdsList.includes(id)) {
            setClickedCardIdsList([]);
        } else {
            setClickedCardIdsList(prev => [...prev, id]);
            if (clickedCardIdsList.length + 1 > bestScore) {
                setBestScore(prev => prev + 1);
            }
        }
    };

    
    const shuffledCardArray = shuffleArray(cardList);

    return (
        <>
        <div className="board" onClick={cardClickHandler}>
            {shuffledCardArray}
        </div>
        <ScoreTracker
            currentScore={clickedCardIdsList.length}
            bestScore={bestScore}
        />
        </>
    );
};


export default Board;