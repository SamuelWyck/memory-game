import "../styles/scoreTracker.css";


function ScoreTracker({currentScore, bestScore}) {
    return (
        <div className="score-tracker">
           <p>Score: {currentScore}</p>
           <p>Best score: {bestScore}</p> 
        </div>
    );
};


export default ScoreTracker;