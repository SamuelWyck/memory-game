import "../styles/card.css";


function Card({data}) {
    return (
        <div className="card" id={data.id}>
            <img src={data.imgSrc} alt={data.alt} />
        </div>
    );
};


export default Card;