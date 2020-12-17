import { Component } from "react";
import ListPage from "../CRU/ListPage";

class MatchList extends Component {
  
  render() {
    return (
      <ListPage columns={{
        team1Title: "Team 1 Title",
        team2Title: "Team 2 Title",
        team1Score: "Team 1 Score",
        team2Score: "Team 2 Score",
      }} pageName="matches"
      controls={this.props.isAdmin}/>
    );
  }
}
export default MatchList;
