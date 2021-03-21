
import {app} from './App.module.css';
import {useAuth0} from "@auth0/auth0-react";
import HomePage from "../HomePage"
import MovieApp from "../MovieApp"

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <div className={app}>
      {!isAuthenticated ?
        <MovieApp/>
      :
      <HomePage/>
      }
    </div>
  );
}

export default App;
