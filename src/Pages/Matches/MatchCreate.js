import { Component } from "react";
import { withRouter } from "react-router-dom";
import CreatePage from "../CRU/CreatePage";

class MatchCreate extends Component {
  render() {
    return (
      <CreatePage fields={ [
        { varName: "team1Title", placeholder: "Team 1 Title", type: "text" },
        { varName: "team2Title", placeholder: "Team 2 Title", type: "text" },
        { varName: "team1Score", placeholder: "Team 1 Score", type: "number" },
        { varName: "team2Score", placeholder: "Team 2 Score", type: "number" },
      ]}
      pageName="matches"
      title="Match"/>
    );
  }
}
export default withRouter(MatchCreate);
