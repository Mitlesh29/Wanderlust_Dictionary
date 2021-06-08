import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import FavouritePage from "./pages/FavouritePage";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetups />
          </Route>
          <Route path="/new-meet-up">
            <NewMeetup />
          </Route>
          <Route path="/favourites">
            <FavouritePage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
