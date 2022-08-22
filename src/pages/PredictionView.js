import { IonPage } from "@ionic/react";
import { useSelector } from "react-redux";
import PredictionsView from "../components/PredictionView";


const PredictionView = () => {
    const predic = useSelector(state => state.predictionReducer.predic);
    
    return ( 
    <IonPage>
        <PredictionsView predic={predic}/>
    </IonPage> );
}
 
export default PredictionView;