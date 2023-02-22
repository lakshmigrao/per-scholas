function Scores({scores}){

    return(
        <div className="App">
        {
        scores.map((score,index) =>
            <div key={index}>
               <p>Date : {score.date}</p> 
               <p>Score : {score.score}</p> 
            </div>
                )
        }
        </div>
    //     <>
    //     <p>Scores : {scores}</p>
    //     </>
    )
}

export default Scores;