import { Provider } from "react-redux";
import Collection from "./components/collectionResults";
import CollectionInfo from "./components/collectionInfo";
import generateStore from "./redux/store"
import {BrowserRouter as Router,  Switch,  Route, Redirect} from "react-router-dom";
import './App.css';

function App() {

  const store = generateStore()

  return (
      <Router>
        <Switch>
          <Route path="/Album/:id"> 
            <Provider store={store} >
              <CollectionInfo/>
            </Provider>
          </Route>
          <Route path="/Lista">
            <Provider store={store} >
              <Collection/>
            </Provider>
          </Route>
          <Route path="/">
              <Redirect to="/Lista"/>
          </Route>
        </Switch>
      </Router>
      
  );
}

export default App;
