import useEffect from "react";
import {useDispatch, useSelector} from 'react-redux';
import PredictionsView from "../components/PredictionView";
import { getPredictionsAction } from '../reducers/PredictionReducer'





const Prediction = () => {
    const dispatch = useDispatch()
    const prediction = useSelector(state => state.prediction);
    const predicrtionList = prediction.predicrtionList;
    

    useEffect(() => {
        dispatch(getPredictionsAction(-34.9058916,-56.1913095))
    }, [])


    return ( 
        <div>           
            <h5>Lista de Predicciones</h5>
            <PredictionsView pList={predicrtionList}/>
        </div>
     );
}
 
export default Prediction;