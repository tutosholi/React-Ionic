import { IonContent, IonLabel, IonTitle } from '@ionic/react';
import { useSelector } from 'react-redux';
import './PredictionView.css'


const PredictionsView = (props) => {
    const predic = props.predic;
        return ( 

        <IonContent>
            <IonTitle>Wheather</IonTitle>
            <IonLabel>
                Description: {predic.desc}<br></br> 
            </IonLabel>
            <IonLabel>
                Temp: {predic.temp} 
            </IonLabel>
        </IonContent>
    );
}
 
export default PredictionsView;