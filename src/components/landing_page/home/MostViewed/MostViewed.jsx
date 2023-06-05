import Card from "./Cards";
import Title from "../reusable/Title";

//STYLES
const title = "p-5 text-center text-3xl font-poppins font-bold opacity-80";

//CONTENTS
const contents = [
  {
    titles: "The quick Brown fox jumps over the lazy dog",
    abstract:
      "Many students are assigned a capstone project at the end of theiMany students are assigned a capstone project at the end of thei",
    date: "November 2019",
    course: "BSBA",
  },
  {
    titles: "Lorem ipsum dolor keme emerut churva chenes",
    abstract:
      "Many students are assigned a capstone project at the end of theiMany students are assigned a capstone project at the end of thei",
    date: "October 2021",
    course: "BSIT",
  },
  {
    titles: "The quick Brown fox jumps over the lazy dog",
    abstract:
      "Many students are assigned a capstone project at the end of theiMany students are assigned a capstone project at the end of thei",
    date: "January 2021",
    course: "BSED",
  },
];

const MostViewed = () => {
  return (
    <section className="pb-32">
      <Title title="Most Veiwed Research" style={title} />

      <div className="max-w-sm p-5 my-0 mx-auto md:max-w-full md:flex md:justify-center">
        {contents.map((data, index) => {
          return <Card key={index} {...data} />;
        })}
      </div>
    </section>
  );
};

export default MostViewed;
