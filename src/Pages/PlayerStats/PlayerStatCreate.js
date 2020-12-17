import { Component } from "react";
import { withRouter } from "react-router-dom";
import CreatePage from "../CRU/CreatePage";

class PlayerStatCreate extends Component {
  render() {
    return (
      <CreatePage
      fields={[
        { varName: "title", placeholder: "Title", type: "text" },
        { varName: "value", placeholder: "Value", type: "number" },
      ]}
      a
      pageName={"/players/" + this.props.match.params.playerId + "/player-stats"}
      title="Player Stat"
      />
    );
  }
}
export default withRouter(PlayerStatCreate);
