import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import PredictionsView from "../components/PredictionView";
import { getPredictionsAction } from '../reducers/PredictionReducer'





const Prediction = () => {
    const dispatch = useDispatch()
    const prediction = useSelector(state => state.predictionReducer);
    const predictionList = prediction.predic;
    {console.log("###### predictionlistresult" +  prediction.predic)}

    useEffect(() => {
        dispatch(getPredictionsAction(-34.9058916,-56.1913095))
    }, [dispatch])
    
    {console.log("###### plist" + predictionList)}
    
    return ( 
        <div>           
            <h5>Lista de Predicciones</h5>
            <PredictionsView pObject={predictionList}/>
        </div>
     );
    }
 
export default Prediction;