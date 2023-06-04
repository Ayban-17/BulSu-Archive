import Description from "../reusable/Description";
import Title from "../reusable/Title";
import Citation from "./Citation";

//IMAGES
import mla from "../../../assets/mla.png";
import apa from "../../../assets/apa.png";

//STYLES
const title = "text-3xl font-bold text-center";
const description = "text-center text-lg px-10 py-6";
const styleApa =
  "flex flex-col justify-center gap-5  p-4 sm:py-14  md:flex-row md:flex-wrap md:items-center";
const styleMla =
  "flex flex-col justify-center gap-5 p-4 sm:py-14  md:flex-row-reverse md:flex-wrap md:items-center";

//Contents
const content = {
  apa: {
    title: "LEARN HOW TO CITATE A PAPER",
    text: "Write your citation in APA format",
    description:
      "The APA style manual outlines the formatting and indication requirements for references in research papers. To make sure that your research paper is easy to read and has all of the crucial information, APA provides style and writing guidelines.",
    abbr: "American Psychological Association",
    acro: "APA",
    display: "flex-row",
  },
  mla: {
    title: "LEARN HOW TO CITATE A PAPER",
    text: "Write your citation in MLA format",
    description:
      "MLA offers writers with a technique for citing their sources in their essays and Works Cited pages using parenthetical citation. MLA enhances writers' legitimacy by highlighting their adherence to their sources.",
    abbr: "Modern Language Association",
    acro: "MLA",
    display: "flex-row-reverse",
  },
};

const Features = () => {
  return (
    <section className="py-5">
      <div>
        <Title title="Awesome Features" style={title} />
        <Description
          description="Integrated features like history, saved papers, and dark or light mode will make it easier for you to navigate our website."
          style={description}
        />
      </div>
      <Citation image={apa} content={content.apa} style={styleApa} />
      <Citation image={mla} content={content.mla} style={styleMla} />
    </section>
  );
};

export default Features;
