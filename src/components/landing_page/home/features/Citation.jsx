import PropTypes from "prop-types";
import Title from "../reusable/Title";
import Description from "../reusable/Description";
import Text from "../reusable/Text";
import LearnMore from "../reusable/LearnMore";

//STYLES
const titles = "text-red text-lg";
const texts = "text-lg";
const descriptions = "text-lg max-w-citation";
const learnMore =
  "font-bold font-poppins max-w-button border-2 border-red bg-red text-white py-4 px-6 hover:bg-white hover:text-black transition ease-in duration-300 xl:self-start mt-10";

const Citation = ({ image, content, style }) => {
  const { title, text, description, abbr, acro } = content;

  return (
    <div className={style}>
      <img src={image} alt="girl" className="max-w-citation " />
      <div className="flex flex-col gap-4 p-10 max-w-citation ">
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-red">
            auto_awesome
          </span>
          <Title title={title} style={titles} />
        </div>
        <Text text={text} style={texts} />
        <Description description={description} style={descriptions} />
        <div className="flex gap-4">
          <span className="material-symbols-outlined ">layers</span>
          <Text text={acro} style={texts} />
        </div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined ">campaign</span>
          <Text text={abbr} style={texts} />
        </div>
        <LearnMore name="Learn More" style={learnMore} />
      </div>
    </div>
  );
};

Citation.propTypes = {
  image: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  style: PropTypes.string,
};

export default Citation;
