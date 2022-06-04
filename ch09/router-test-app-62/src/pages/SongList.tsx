import { Link, Outlet, useMatch } from "react-router-dom";
import { SongType } from "../App";

type Props = { songs: Array<SongType> };
const SongList = (props: Props) => {
  const pathMatch = useMatch("/songs/:id");
  let param_id: number = pathMatch?.params?.id ? parseInt(pathMatch.params.id, 10) : -1;

  let list = props.songs.map((song) => {
    let cn = "list-group-item";
    cn += param_id === song.id ? " list-group-item-secondary" : "";

    return (
      <li className={cn} key={song.id}>
        <Link to={`/songs/${song.id}`} style={{ textDecoration: "none" }}>
          {song.title} ( {song.musician} )
          <span className="float-end badge bg-secondary">
            <i className="fa fa-play"></i>
          </span>
        </Link>
      </li>
    );
  });
  return (
    <div>
      <h2 className="m-5">Song List</h2>
      <ul className="list-group">{list}</ul>
      <Outlet />
    </div>
  );
};
export default SongList;
