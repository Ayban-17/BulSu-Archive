import gate from "../../../assets/gate.png";
// import Fade from "react-reveal/Fade";
import Title from "../reusable/Title";

const styles = "text-xl font-bold text-red  md:text-3xl lg:text-4xl";
const Hero = () => {
  // const [isVisible, setIsVisible] = useState(true);
  // const handleButtonClick = () => {
  //   setIsVisible(!isVisible);
  // };
  return (
    <div className="relative">
      {/* <Fade bottom distance="3em" duration={2000}> */}
      <img className="h-64 min-w-bgImg sm:h-auto " src={gate} alt="gate" />

      <div className=" absolute left-16 top-7 flex flex-col  justify-center gap-5 p-4 w-72 bg-white rounded-xl sm:top-7 md:w-search lg:w-search lg:h-64 lg:left-40 lg:top-20 lg:px-10 lg:gap-10 xl:left-60 xl:top-40">
        <div className="flex flex-col gap-4">
          <Title title="Your Online " style={styles} />
          <Title title="Literature Library" style={styles} />
        </div>
        <form className="bg-bgSearch flex justify-between ">
          <input
            type="text"
            className="bg-bgSearch text-xs px-2 py-2 outline-none flex-1 md:p-3 lg:py-3 lg:px-5"
            placeholder="What are you looking for?"
          />
          <button className="bg-red font-poppins text-white text-xs p-2 rounded-lg m-1 md:p-3 lg:py-3 lg:px-5">
            Search
          </button>
        </form>
      </div>
      {/* </Fade> */}
    </div>
  );
};

export default Hero;
