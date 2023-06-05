import PropTypes from "prop-types";
const Logo = ({ style }) => {
  return (
    <div className="flex w-fit cursor-pointer gap-2 font-bold font-poppins text-2xl sm:text-3xl ">
      <div>
        <span className="text-red">Bul</span>
        <span className="text-yellow">Su</span>
      </div>
      <span className={style}>Archive</span>
    </div>
  );
};

Logo.propTypes = {
  style: PropTypes.string,
};

export default Logo;
