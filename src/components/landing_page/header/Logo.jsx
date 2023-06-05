import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Logo = ({ style, font }) => {
  return (
    <Link to="/">
      <div className="flex w-fit cursor-pointer gap-2 font-bold font-poppins text-2xl sm:text-3xl ">
        <div>
          <span className={`text-red ${font}`}>Bul</span>
          <span className={`text-yellow ${font}`}>SU</span>
        </div>
        <span className={style + " " + font}>Archive</span>
      </div>
    </Link>
  );
};

Logo.propTypes = {
  style: PropTypes.string,
  font: PropTypes.string,
};

export default Logo;
