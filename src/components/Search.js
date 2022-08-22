import { IonButton, IonContent, IonSearchbar } from "@ionic/react";
import { useState } from "react";


const Search = (props) => {
const [search, setserch] = useState ("") ;


const handlesearch = (value) =>{
    props.search(value);
}
    return (
        <IonContent>
            <IonSearchbar onIonChange={(e)=>{setserch(e.target.value)}}>
            </IonSearchbar>
            <IonButton onClick={()=>{handlesearch(search)}}>Buscar</IonButton>
        </IonContent>
    );
}


export default Search;