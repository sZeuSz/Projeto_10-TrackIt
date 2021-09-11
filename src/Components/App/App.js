
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "../../GlobalStyle/GlobalStyle";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/registration" exact>
          <Registration />
        </Route>
        <Route path="/nohabits" exact>
          {/* <NoHabits /> */}
        </Route>
        <Route path="/habits" exact>
          {/* <Habits /> */}
        </Route>
        <Route path="/with-habits" exact>
          {/* <WithHabits /> */}
        </Route>
        <Route path="/today">
          {/* <Today /> */}
        </Route>
        <Route path="/today2">
          {/* <Today2 /> */}
        </Route>
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
    
  );
}

export default App;