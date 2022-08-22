import { IonPage } from "@ionic/react";
import { useSelector } from "react-redux";
import PredictionsView from "../components/PredictionView";


const PredictionView = () => {
    const predic = useSelector(state => state.predictionReducer.predic);
    const fiveDays = useSelector(state => state.predictionReducer.fiveDays);

    return ( 
        <IonPage>
            <PredictionsView predic={predic} fiveDays={fiveDays}/>
        </IonPage> );
}
 
export default PredictionView;