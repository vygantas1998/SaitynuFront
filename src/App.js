import { Component } from "react";
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import PageWithNavigation from "./Components/PageWithNavigation";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MatchCreate from "./Pages/Matches/MatchCreate";
import MatchDetails from "./Pages/Matches/MatchDetails";
import MatchEdit from "./Pages/Matches/MatchEdit";
import MatchList from "./Pages/Matches/MatchList";
import PlayerCreate from "./Pages/Players/PlayerCreate";
import PlayerEdit from "./Pages/Players/PlayerEdit";
import PlayerStatCreate from "./Pages/PlayerStats/PlayerStatCreate";
import PlayerStatEdit from "./Pages/PlayerStats/PlayerStatEdit";
import JWT from "jsonwebtoken";
import { getCookie } from "./helpers";

class App extends Component {
  state = { isAdmin: false };
  logout = () => {
    document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    this.forceUpdate();
    this.props.history.push("/");
  };
  componentDidMount() {
    this.recheckForAdmin();
  }
  recheckForAdmin = () => {
    let token = getCookie("token");
    if (token) {
      let data = JWT.decode(token);
      if (data.role === "ADMIN") {
        this.setState({ ...this.state, isAdmin: true });
      } else {
        this.setState({ ...this.state, isAdmin: false });
      }
    }
  };
  render() {
    return (
      <Switch>
        <Route path="/player-stats/edit/:id">
          <PageWithNavigation page={<PlayerStatEdit />} logout={this.logout} />
        </Route>
        <Route path="/players/:playerId/player-stats/create">
          <PageWithNavigation
            page={<PlayerStatCreate />}
            logout={this.logout}
          />
        </Route>
        <Route path="/players/edit/:id">
          <PageWithNavigation page={<PlayerEdit />} logout={this.logout} />
        </Route>
        <Route path="/matches/:matchId/players/create">
          <PageWithNavigation page={<PlayerCreate />} logout={this.logout} />
        </Route>
        <Route path="/matches/edit/:id">
          <PageWithNavigation page={<MatchEdit />} logout={this.logout} />
        </Route>
        <Route path="/matches/create">
          <PageWithNavigation page={<MatchCreate />} logout={this.logout} />
        </Route>
        <Route path="/matches/:id">
          <PageWithNavigation
            page={<MatchDetails isAdmin={this.state.isAdmin} />}
            logout={this.logout}
          />
        </Route>
        <Route path="/matches">
          <PageWithNavigation
            page={<MatchList isAdmin={this.state.isAdmin} />}
            logout={this.logout}
          />
        </Route>
        <Route path="/login">
          <Login recheckForAdmin={this.recheckForAdmin} />
        </Route>
        <Route path="/">
          <PageWithNavigation page={<Home />} logout={this.logout} />
        </Route>
      </Switch>
    );
  }
}
export default withRouter(App);
