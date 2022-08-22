import {useDispatch, useSelector} from 'react-redux';
import { GetByCity, GetByCords } from '../reducers/PredictionReducer';
import Search from '../components/Search';
import { IonPage } from '@ionic/react';






const Prediction = () => {
    const dispatch = useDispatch();
    const cords = useSelector(state => state.predictionReducer.cords);



    const getPredic = () =>{           
        dispatch(GetByCords(cords.lat,cords.lon));
    }


    const handleSearch = (city,country) => {  
        const c = city[0].toUpperCase() + city.slice(1);    

        dispatch(GetByCity(c,country));        
            getPredic();
    }

    return(
        <IonPage>
            <Search search={handleSearch}/>                       
        </IonPage>
    );
}
 
export default Prediction;