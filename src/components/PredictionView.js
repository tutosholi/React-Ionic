import { IonCard, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/react';
import './PredictionView.css'


const PredictionsView = (props) => {
    const predic = props.predic;
    const fiveDays = props.fiveDays;



        return ( 
            <IonContent>   

        <IonHeader>
            <IonToolbar>
                <IonTitle>Today</IonTitle>
                <IonItem>
                <IonLabel>
                    {predic.desc}<br></br> 
                </IonLabel>
                <IonLabel>
                    {predic.temp} ºC
                </IonLabel>
            </IonItem>
            </IonToolbar>
        </IonHeader>
       
            
                {fiveDays.map((day) => {
                    return (

                        
                        <IonCard>
                        <IonItem key={day.dt}>
                            <IonTitle>{day.dt_txt}</IonTitle>
                            <IonLabel>{day.weather[0].description}ºF</IonLabel>
                            <IonLabel>{day.main.temp} ºF</IonLabel>
                            <IonImg src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>
                        </IonItem> 
                        </IonCard>
                        )
                    })
                }
            
        </IonContent>
          
    );
}
 
export default PredictionsView;