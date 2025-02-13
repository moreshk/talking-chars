import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import ViewMessage from "./pages/ViewMessage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/font.css";
import "./theme/loader.css";
import Menu from "./pages/menu/menu";
import Piper from "./pages/speak/piper";
import Pete from "./pages/speak/pete";
import Penny from "./pages/speak/penny";
import Eric from "./pages/speak/eric";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" exact={true}>
          <Redirect to="/menu" />
        </Route>
        <Route path="/home" exact={true}>
          <Home />
        </Route>
        <Route path="/menu" exact={true}>
          <Menu />
        </Route>
        <Route path="/speak/piper" exact={true}>
          <Piper />
        </Route>
        <Route path="/speak/pete" exact={true}>
          <Pete />
        </Route>
        <Route path="/speak/penny" exact={true}>
          <Penny />
        </Route>
        <Route path="/speak/eric" exact={true}>
          <Eric />
        </Route>
        <Route path="/message/:id">
          <ViewMessage />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
