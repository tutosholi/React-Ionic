import './PredictionView.css'


const PredictionsView = ({prop}) => {
    
    return ( 
        <div>
            <div className="table">
                {prop.pList.map(predic => {
                    return (
                        <div>
                        <div className="predic" key={predic.weather.description}><h1>{predic.weather.description}</h1></div>
                        </div>                        
                    )
                })}                 
            </div>
        </div>
    );
}
 
export default PredictionsView;