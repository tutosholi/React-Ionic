import { IonButton, IonContent, IonIcon, IonSearchbar } from "@ionic/react";
import { useState } from "react";
import { createOutline } from 'ionicons/icons'


const Search = (props) => {
const [search, setserch] = useState ("") ;

const handlesearch = (value) =>{
    props.search(value);    
}

    return (
        <IonContent> 
            <IonSearchbar onIonChange={(e)=>{setserch(e.target.value)}}>         
                <IonButton onClick={()=>{handlesearch(search)}}><IonIcon icon={createOutline} href="/Prediction"/></IonButton>
            </IonSearchbar>    
        </IonContent>
    );
}


export default Search;