import "./listItem.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";


function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, SetMovie] = useState({});

  useEffect(() => {
    const getMovie = async (item) => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API}movies/${item}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            token:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDM0ZGNhM2I5ZWJlYzBlOTQ5N2QwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjcwNTU3MSwiZXhwIjoxNjgzMTM3NTcxfQ.dpKzUs7bw62-QHVxxQufWQqDB_yEXSF10npxyGgkYZI",
          },
        });
        const data = await res.json();
        SetMovie(data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie(item);
  }, []);

  return (
    <Link to="/watch " state={movie}>
    <div
      className="ListItem"
      style={{ left: isHovered && index * 210 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.imgSm} alt="" />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay loop />
          <div className="itemInfo">
            <div className="icons">
                <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOffAltOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1hr 14mins</span>
              <span className="limit">{`+${movie.limit}`}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">{movie.description}</div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
      
    </div>
      </Link>
  );
}

export default ListItem;
