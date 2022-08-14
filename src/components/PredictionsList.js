import './predictionsList.css'


const PredictionsList = ({list}) => {
    
    return ( 
        <div>
            <div className="table">
                {list.map(predic => {
                    return (
                        <div>
                        <div className="predic" key={predic.name}>{predic.name}</div>
                        </div>                        
                    )
                })}
            </div>
        </div>
    );
}
 
export default PredictionsList;