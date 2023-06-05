import { faCube } from "@fortawesome/free-solid-svg-icons";
// import { Fade } from "react-reveal";
import Title from "../reusable/Title";
import Description from "../reusable/Description";
import LearnMore from "../reusable/LearnMore";
import Icon from "../reusable/Icon";

const learnMore =
  "font-bold border-2 border-red py-4 px-6 hover:bg-red hover:text-white transition ease-in duration-300 xl:self-start font-poppins ";
const title = "text-2xl font-bold xl:self-start ";
const description = " text-center text-lg px-8 opacity-50 xl:text-left xl:px-0";

const Introduction = () => {
  return (
    <div>
      {/* <Fade bottom distance="3em" duration={2000}> */}
      <div className="flex flex-col items-center gap-5 px-6 ">
        <Icon
          icon={faCube}
          style="text-5xl rounded-lg p-2 text-red bg-bgIcon  "
        />

        <Title title="What is BulSU Archive ?" style={title} />

        <Description
          description="The BulSU Archive preserves and disseminates a variety of academic works, including research papers and theses written by Bulacan State University—Sarmiento Campus students. "
          style={description}
        />
        <LearnMore name="Learn More" style={learnMore} />
      </div>
      {/* </Fade> */}
    </div>
  );
};

export default Introduction;
