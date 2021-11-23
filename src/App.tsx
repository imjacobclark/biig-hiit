// import { createGlobalStyle } from 'styled-components';

import { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import Home from './pages/Home';
// import ViewMessage from './pages/ViewMessage';
import Timer from './components/Timer';
import Start from './components/Start';

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

import './theme/fonts.css';

// const DURATIONS = {
//   work: 40,
//   rest: 20,
//   break: 60,
// }

// const TOTAL_STEPS = 6;
// const TOTAL_REPS = 2;

const App: React.FC = () => {
  const [steps, setSteps] = useState(6);
  const [reps, setReps] = useState(2);
  const [work, setWork] = useState(40);
  const [rest, setRest] = useState(20);
  const [breakk, setBreakk] = useState(60);

  return (
    <>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/" exact={true}>
              <Redirect to="/start" />
            </Route>

            <Route path="/start" exact={true}>
              <Start 
                steps={steps} 
                setSteps={setSteps} 
                reps={reps} 
                setReps={setReps} 
                work={work} 
                setWork={setWork} 
                rest={rest} 
                setRest={setRest} 
                breakk={breakk} 
                setBreakk={setBreakk}  
              />
            </Route>            

            <Route path="/running" exact={true}>
              <Timer 
                steps={steps} 
                reps={reps} 
                durations={{ work, rest, break: breakk }} 
              />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </>
  );
};

export default App;
