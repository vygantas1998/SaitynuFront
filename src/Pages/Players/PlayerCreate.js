import { Component } from "react";
import { withRouter } from "react-router-dom";
import CreatePage from "../CRU/CreatePage";

class PlayerCreate extends Component {
  render() {
    return (
      <CreatePage
      fields={[
        { varName: "name", placeholder: "Name", type: "text" },
        { varName: "surname", placeholder: "Surname", type: "text" },
        {
          varName: "nickName",
          placeholder: "Nickname",
          type: "text",
        },
        {
          varName: "pictureURL",
          placeholder: "Picture URL",
          type: "text",
        },
      ]}
      a
      pageName={"matches/" + this.props.match.params.matchId + "/players"}
      title="Player"
      />
    );
  }
}
export default withRouter(PlayerCreate);
