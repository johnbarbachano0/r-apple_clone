import { IconContext } from "react-icons";
import { BsBag, BsSearch } from "react-icons/bs";

export const BagIcon = (props) => {
  return (
    <IconContext.Provider value={props.style} size="50px" color="white">
      <div>
        <BsBag style={props.style} />
      </div>
    </IconContext.Provider>
  );
};

export const SearchIcon = (props) => {
  return (
    <IconContext.Provider value={props.style} size="50px" color="white">
      <div>
        <BsSearch />
      </div>
    </IconContext.Provider>
  );
};
