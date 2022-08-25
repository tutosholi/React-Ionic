import { IonCard, IonCardContent, IonCardHeader, IonImg, IonLabel, IonTitle } from "@ionic/react";







const FiveDaysView = (props) =>{
    const fiveDays = props.fiveDays;
    return(
        fiveDays.map((day) => {
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
    );      

}
export default FiveDaysView;