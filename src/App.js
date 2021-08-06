import { Box } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";

import { Home, Places } from "./pages";

function App() {
  return (
    <Box w="100%" h="100vh" bgGradient="linear(#C0E1FF 30%, #E79BDF )">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/places" component={Places} />
      </Switch>
    </Box>
  );
}

export default App;
