import { useLocation } from "react-router-dom";
import "./watch.css";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import { Link } from "react-router-dom";

function Watch() {
  const loc = useLocation();
  console.log(loc);
  return (
    <div className="Watch">
      <Link to="/">
        <div className="back">
          <ArrowBackTwoToneIcon />
          <span>Home</span>
        </div>
      </Link>
      <video src={loc.state.video} autoPlay progress controls />
    </div>
  );
}

export default Watch;
