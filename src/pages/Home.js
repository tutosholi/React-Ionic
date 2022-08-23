import {IonContent, IonPage, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, IonToolbar, IonHeader, IonIcon, IonImg } from '@ionic/react';
import { Route } from 'react-router-dom';
import { calendar,search } from 'ionicons/icons';
import './Home.css';
import Prediction from './Prediction';
import PredictionView from './PredictionView';




const Home = () => {





  return (
    <IonPage>
      <IonContent>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/Prediction" component={Prediction}/>
            <Route path="/Pagina2" component={PredictionView}/>        
          </IonRouterOutlet>
          <IonTabBar slot="bottom" >
            <IonTabButton tab="tabPrediction" href="/Prediction">
              <IonIcon icon={search} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tabPagina2" href="/Pagina2">
            <IonIcon icon={calendar} />
              <IonLabel>View</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>      
    </IonPage>
  );
};

export default Home;
