import { Box } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";

import { Home, Places, Profile, Login, Pins, Point } from "./pages";

function App() {
  return (
    <Box w="100%" h="100vh" bgGradient="linear(#C0E1FF 30%, #E79BDF )">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/places" component={Places} />
        <Route exact path="/pins" component={Pins} />
        <Route exact path="/point" component={Point} />
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/" component={Login} />
      </Switch>
    </Box>
  );
}

export default App;
