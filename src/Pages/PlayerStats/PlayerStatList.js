import { Component } from "react";
import ListPage from "../CRU/ListPage";

class PlayerStatList extends Component {
  
  render() {
    return (
      <ListPage columns={{
        title: "Title",
        value: "Value",
      }} pageName="player-stats"/>
    );
  }
}
export default PlayerStatList;
