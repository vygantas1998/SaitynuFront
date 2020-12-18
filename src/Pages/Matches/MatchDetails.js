import { Component } from "react";
import Message from "../../Components/Message";
import { deleteData, getData } from "../../helpers";
import { apiUrl } from "../../config";
import { Link, withRouter } from "react-router-dom";
import Player from "../../Components/Player";

class MatchDetails extends Component {
  state = {
    data: {},
    playersData: [],
    error: "",
  };
  getMatchData = () => {
    getData(apiUrl + "/matches/" + this.props.match.params.id).then((res) => {
      if (res.error) {
        this.setState({ ...this.state, error: res.error.message });
      } else {
        this.setState({ ...this.state, data: res });
      }
    });
  };

  getPlayersData = () => {
    getData(
      apiUrl + "/matches/" + this.props.match.params.id + "/players"
    ).then((res) => {
      if (res.error) {
        this.setState({ ...this.state, error: res.error.message });
      } else {
        this.setState({ ...this.state, playersData: res });
      }
    });
  };

  onEdit = (id) => {
    this.props.history.push("/players/edit/" + id);
  };
  onDelete = (id) => {
    deleteData(apiUrl + "/players/" + id);
    this.getPlayersData();
  };

  onStatDelete = (id) => {
    deleteData(apiUrl + "/player-stats/" + id);
    this.getPlayersData();
  };

  componentDidMount() {
    this.getMatchData();
    this.getPlayersData();
  }

  getPlayers = (from = 0, to = 99) => {
    let players = [];
    let i = 0;
    this.state.playersData.forEach((e) => {
      if (i >= from && i < to) {
        players.push(
          <Player
            isAdmin={this.props.isAdmin}
            key={i}
            id={e.id}
            nickName={e.nickName}
            pictureURL={e.pictureURL}
            onStatDelete={this.onStatDelete}
            onDetails={this.onDetails}
            onEdit={this.onEdit}
            onDelete={this.onDelete}
          />
        );
      }
      i++;
    });
    return players;
  };

  render() {
    return (
      <div className="masthead text-white">
        <div className="container pt-5">
          <br />
          {this.state.error ? (
            <Message type="danger" message={this.state.error} />
          ) : (
            <div className="card bg-dark">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 text-center">
                    <h3 className="text-white">
                      {this.state.data.team1Title} {this.state.data.team1Score}{" "}
                      VS {this.state.data.team2Score}{" "}
                      {this.state.data.team2Title}
                    </h3>
                  </div>
                </div>
                {this.props.isAdmin ? (
                  <Link
                    to={
                      "/matches/" +
                      this.props.match.params.id +
                      "/players/create"
                    }
                    className="btn btn-primary p-3 mb-2"
                  >
                    Add new player
                  </Link>
                ) : (
                  ""
                )}

                <div className="row">{this.getPlayers()}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(MatchDetails);
