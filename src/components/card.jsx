import "../styles/card.css";


function Card({data, clickHandler}) {
    return (
        <div className="card" id={data.id} onClick={clickHandler}>
            <img src={data.imgSrc} alt={data.alt} />
        </div>
    );
};


export default Card;