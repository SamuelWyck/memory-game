import "../styles/board.css";


function Board({photoData, cardClickHandler}) {
    function shuffleArray(array) {
        for (let i = array.length - 1; i >= 1; i -= 1) {
            const idx = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[idx];
            array[idx] = temp;
        }
    };
    
    shuffleArray(photoData);

    return (
        <>
        </>
    );
};


export default Board;