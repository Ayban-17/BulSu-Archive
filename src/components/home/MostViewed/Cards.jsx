import {
  faCalendarDays,
  faUser,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Icon from "../reusable/Icon";
import Title from "../reusable/Title";
import Description from "../reusable/Description";
import LearnMore from "../reusable/LearnMore";

//STYLES
const icon = "text-red ml-2";
const title = "line-clamp-1 font-bold my-4 ";
const description = "line-clamp-3";
const learnMore = "text-red py-2 ";

const Cards = ({ titles, abstract, date, course }) => {
  return (
    <div className="max-w-full p-4 m-7 font-poppins rounded-xl shadow-2xl  shadow-red/20 md:max-w-card">
      <div className="flex justify-between flex-wrap ">
        <div className="flex items-center gap-2 text-lg">
          <Icon icon={faCalendarDays} />
          <p>{date}</p>
        </div>
        <div className="flex items-center gap-2">
          <Icon icon={faUser} />
          <p>{course}</p>
        </div>
      </div>
      <div>
        <Title title={titles} style={title} />
        <Description description={abstract} style={description} />
        <div className=" max-w-button cursor-pointer hover:translate-x-7 transition ease-in duration-500">
          <LearnMore name="Learn More" style={learnMore} />
          <Icon icon={faAngleRight} style={icon} />
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  titles: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
};

export default Cards;
