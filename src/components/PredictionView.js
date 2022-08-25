import { IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonRow, IonTitle, IonToolbar, IonVirtualScroll } from '@ionic/react';
import './PredictionView.css'


const PredictionsView = (props) => {
    const predic = props.predic;
    
        return ( 
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>        
                        <IonItem>
                        <IonTitle>Today</IonTitle>
                        <IonLabel>
                            {predic.desc}<br></br> 
                        </IonLabel>
                        <IonLabel>
                            {predic.temp} ºC
                        </IonLabel>
                            <IonImg src={`http://openweathermap.org/img/wn/${predic.icon}@2x.png`}/>
                        </IonItem>
                        </IonCol>      
                    </IonRow>   
                </IonGrid>                                
        </IonContent>          
    );
}
 
export default PredictionsView;