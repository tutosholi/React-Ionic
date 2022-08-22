import {IonContent, IonPage, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, IonToolbar, IonHeader } from '@ionic/react';
import { Route } from 'react-router-dom';

import './Home.css';
import Prediction from './Prediction';
import PredictionView from './PredictionView';




const Home = () => {
const nav = () =>{
  
}




  return (
    <IonPage>
      <IonContent>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/Prediction" component={Prediction}/>
            <Route path="/Pagina2" component={PredictionView}/>        
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tabPrediction" href="/Prediction">
              <IonLabel>Prediction</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tabPagina2" href="/Pagina2">
              <IonLabel>Pagina2</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
      
    </IonPage>
  );
};

export default Home;
