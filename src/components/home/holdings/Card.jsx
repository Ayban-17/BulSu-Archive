import Icon from "../reusable/Icon";
import Text from "../reusable/Text";
import PropTypes from "prop-types";
const Card = ({ text, icon, count }) => {
  return (
    <div className="min-h-card mb-5 w-card shadow-2xl  shadow-red/20 hover:shadow-none rounded-lg flex flex-col items-center justify-center gap-3 p-4 sm:min-h-cardmd sm:w-cardxl  ">
      <Icon
        icon={icon}
        style="text-3xl rounded-full p-4 m-2 text-red bg-bgIcon  "
      />
      <p className="font-bold text-xl">{count}</p>
      <Text text={text} style="text-center" />
    </div>
  );
};

Card.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.object,
  count: PropTypes.number,
};

export default Card;
