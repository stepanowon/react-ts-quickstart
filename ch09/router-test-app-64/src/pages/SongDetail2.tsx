import React, { Component } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { SongType } from "../App";

type SongParam = { id?: string };
type Props = { songs: Array<SongType> };
type SongDetailProps = { navigate: Function; params: SongParam; songs: Array<SongType> };
type SongDetailState = { title: string; musician: string; link: string };

//고차 함수
const withSongParams = (Component: React.ComponentType<SongDetailProps>) => {
  return (props: Props) => <Component {...props} params={useParams<SongParam>()} navigate={useNavigate()} />;
};
const YOUTUBE_LINK = "https://m.youtube.com/watch?v=";

class SongDetail2 extends Component<SongDetailProps, SongDetailState> {
  constructor(props: SongDetailProps) {
    super(props);
    this.state = { title: "", link: "", musician: "" };
  }
  componentDidMount() {
    const id = this.props.params.id;
    const song = this.props.songs.find((song) => song.id === parseInt(id ? id : ""));
    if (song) {
      this.setState({
        link: song?.youtube_link ? YOUTUBE_LINK + song?.youtube_link : "",
        musician: song?.musician ? song.musician : "",
        title: song?.title ? song.title : "",
      });
    } else {
      this.props.navigate("/songs");
    }
  }
  render() {
    return (
      <div className="mt-5">
        <h2>{this.state.title}</h2>
        <p>Original Musician : {this.state.musician}</p>
        <p>
          <a href={this.state.link} target="new">
            View Youtube
          </a>
        </p>
        <Link to="/songs">Return SongList</Link>
      </div>
    );
  }
}

export default withSongParams(SongDetail2);
