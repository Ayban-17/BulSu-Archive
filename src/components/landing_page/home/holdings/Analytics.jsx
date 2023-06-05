import Card from "./Card";
import {
  faThumbsUp,
  faArrowTrendUp,
  faFileCircleCheck,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const repositories = [
  {
    icon: faThumbsUp,
    count: 192,
    text: "Total Repository holdings of Capstone and Theses as a whole ",
  },
  {
    icon: faArrowTrendUp,
    count: 107,
    text: "Total theses holdings in all departments of the campus  ",
  },
  {
    icon: faFileCircleCheck,
    count: 202,
    text: "Total theses holdings in all departments of the campus  ",
  },
  {
    icon: faDatabase,
    count: 302,
    text: "Average Visitors of this website ",
  },
];

const Analytics = () => {
  return (
    <div className="flex flex-wrap p-4 gap-5 justify-center">
      <div className="flex flex-col gap-5 sm:mt-10">
        {repositories.slice(0, -2).map((data, index) => {
          const { icon, count, text } = data;
          return <Card key={index} icon={icon} count={count} text={text} />;
        })}
      </div>
      <div className="flex flex-col gap-5">
        {repositories.slice(-2).map((data, index) => {
          const { icon, count, text } = data;
          return <Card key={index} icon={icon} count={count} text={text} />;
        })}
      </div>
    </div>
  );
};

export default Analytics;
