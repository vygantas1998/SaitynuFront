import { Component } from "react";
import ListPage from "../CRU/ListPage";

class PlayerList extends Component {
  
  render() {
    return (
      <ListPage columns={{
        name: "Name",
        surname: "Surname",
        nickName: "Nickname",
        pictureURL: "Picture URL",
      }} pageName="players"/>
    );
  }
}
export default PlayerList;
