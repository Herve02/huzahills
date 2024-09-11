import { Link } from "react-router-dom";
import "./tyle.css";
const Links = (Props) => {
  return (
    <>
      <Link to={Props.to} className={Props.cName}>
        {Props.text}
      </Link>
    </>
  );
};

export default Links;
