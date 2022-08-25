import { IonContent, IonPage } from "@ionic/react";
import { useSelector } from "react-redux";
import FiveDaysView from "../components/5DaysView";
import PredictionsView from "../components/PredictionView";





const PredictionView = () => {
    const predic = useSelector(state => state.predictionReducer.predic);
    const fiveDays = useSelector(state => state.predictionReducer.fiveDays);

    return ( 
        <IonContent>
        <PredictionsView predic={predic}/>
        <FiveDaysView fiveDays={fiveDays}/> 
        </IonContent>
    );
}
 
export default PredictionView;