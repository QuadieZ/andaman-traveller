import { Route, Switch } from "react-router-dom";

import { Home, Places } from "./pages";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/places" component={Places} />
    </Switch>
  );
}

export default App;
