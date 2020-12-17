import { Component } from "react";
import { withRouter } from "react-router-dom";
import UpdatePage from "../CRU/UpdatePage";

class PlayerEdit extends Component {
  render() {
    return (
      <UpdatePage
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
        pageName="players"
        title="Player"
      />
    );
  }
}
export default withRouter(PlayerEdit);
