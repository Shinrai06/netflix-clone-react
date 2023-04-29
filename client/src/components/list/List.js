import "./list.css";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

function List({ list }) {
  const [slideNo, setSlideNo] = useState(0);
  const listRef = useRef();

  const handleClick = (dir) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (dir === "left" && slideNo > 0) {
      setSlideNo(slideNo - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (dir === "right" && slideNo < 3) {
      setSlideNo(slideNo + 1);
      listRef.current.style.transform = `translateX(${-230 + distance + 50}px)`;
    }
  };
  return (
    <div className="List">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <KeyboardDoubleArrowLeftIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: slideNo === 0 && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, i) => {
            return <ListItem key={i} index={i} item={item} />;
          })}
        </div>
        <KeyboardDoubleArrowRightIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
          style={{ display: slideNo === 3 && "none" }}
        />
      </div>
    </div>
  );
}

export default List;
