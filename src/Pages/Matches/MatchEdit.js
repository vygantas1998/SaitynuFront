import { Component } from "react";
import { withRouter } from "react-router-dom";
import UpdatePage from "../CRU/UpdatePage";

class MatchEdit extends Component {
  render() {
    return (
      <UpdatePage
        fields={[
          { varName: "team1Title", placeholder: "Team 1 Title", type: "text" },
          { varName: "team2Title", placeholder: "Team 2 Title", type: "text" },
          {
            varName: "team1Score",
            placeholder: "Team 1 Score",
            type: "number",
          },
          {
            varName: "team2Score",
            placeholder: "Team 2 Score",
            type: "number",
          },
        ]}a
        pageName="matches"
        title="Match"
      />
    );
  }
}
export default withRouter(MatchEdit);
