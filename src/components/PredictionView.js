import { IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './PredictionView.css'


const PredictionsView = (props) => {
    const predic = props.predic;
    const fiveDays = props.fiveDays;



        return ( 
            <IonContent>   
                <IonGrid>                
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
            </IonGrid>
            
            
            <IonGrid>
            <IonRow>
                <IonCol size='7' offset='3'>
            
            
                {fiveDays.map((day) => {
                    return (

                        
                        <IonCard key={day.dt}>
                            <IonCardHeader>     
                            <IonTitle>{day.dt_txt}</IonTitle> 
                            </IonCardHeader>
                            <IonImg src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>
                            <IonCardContent>
                            <IonLabel>{day.weather[0].description}</IonLabel><br/>                                                      
                            <IonLabel>{day.main.temp} ºC</IonLabel>
                            </IonCardContent>                   
                        </IonCard>
                        
                        )
                    })
                }
            
            </IonCol>
            </IonRow>
            </IonGrid>
            
        </IonContent>
          
    );
}
 
export default PredictionsView;