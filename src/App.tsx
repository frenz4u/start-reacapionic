import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonPage,
  IonRouterOutlet,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, share, square, triangle } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import IntroPage from './pages/intro';
import SettingPage from './pages/mypage/setting';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    {/* <IonPage>
      <IonContent>
        <IonModal isOpen={modalOpen} class="modaaal" className="modaaal" onDidDismiss={handleModalClose}>
          <SelectransactionModal onClose={() => setModalOpen(false)}
          />
        </IonModal>
      </IonContent>
    </IonPage> */}
    <IonReactRouter>
      <IonRouterOutlet>
        {/* <Route path="/tabs" render={() => <MainTabs />} /> */}
        <Route exact path="/intro">
          <IntroPage />
        </Route>
        <Route exact path="/setting">
          <SettingPage />
        </Route>
        {/* <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/request">
          <Request />
        </Route>

        <Route exact path="/requestmoney">
          <Requestmoney />
        </Route>

        <Route exact path="/send">
          <Send />
        </Route>
        <Route exact path="/sendmoney">
          <Sendmoney />
        </Route>

        <Route path="/requestreview" component={Requestreview}></Route>

        <Route path="/reviewandsend" component={Reviewandsend}></Route>

        <Route exact path="/successmodal">
          <Successmodal />
        </Route>

        <Route exact path="/notifications">
          <Notifications />
        </Route>

        <Route path="/addincome" component={Addincome}></Route> */}

        <Route exact path="/">
          <Redirect to="/intro" />
        </Route>
      </IonRouterOutlet>

      {/* <IonFab
        onClick={() => setModalOpen(true)}
        style={fabButtonStyle}
        vertical="bottom"
        horizontal="center"
        slot="fixed"
      >
        <IonFabButton>
          <IonIcon icon={share} />
        </IonFabButton>
      </IonFab> */}
    </IonReactRouter>
  </IonApp>
);

export default App;
