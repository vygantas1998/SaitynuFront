import { Component } from "react";
import { withRouter } from "react-router-dom";
import UpdatePage from "../CRU/UpdatePage";

class PlayerStatEdit extends Component {
  render() {
    return (
      <UpdatePage
        fields={[
          { varName: "title", placeholder: "Title", type: "text" },
          { varName: "value", placeholder: "Value", type: "number" },
        ]}
        a
        pageName="player-stats"
        title="Player Stat"
      />
    );
  }
}
export default withRouter(PlayerStatEdit);
