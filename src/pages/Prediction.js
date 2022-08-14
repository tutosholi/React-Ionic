import PredictionsList from "../components/PredictionList";
import useEffect from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getPredictionsAction } from '../reducers/Prediction'
import Search from "../components/Search";




const [city, setcity] = useState();


const handleSearch = (citi) => {
    getPredictions(citi).then(
        response =>{
            setcity(response.data.results || []);
        }
    )
}





const Prediction = () => {
    const dispatch = useDispatch()
    const prediction = useSelector(state => state.prediction);
    const predicList = prediction.predicList

    useEffect(() => {
        dispatch(getPredictionsAction())
    }, [])

    return ( 
        <div>
            <Search search={handleSearch}/>
            <h5>Lista de Predicciones</h5>
            <PredictionsList list={predicList} />
        </div>
     );
}
 
export default Prediction;