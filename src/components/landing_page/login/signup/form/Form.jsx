import { useState } from "react";
import Label from "../../reusable/Label";
import Input from "./Input";
import SelectUserType from "./SelectUserType";
import SelectDepartment from "./SelectDepartment";
import SelectCourse from "./SelectCourse";
import GoToAction from "../../reusable/GoToAction";
import Submit from "../../reusable/Submit";

//CONTENT
const userTypes = ["Faculty", "Focal Person", "Student"];
const inputs = [
  { label: "First Name", type: "text" },
  { label: "Middle Name", type: "text" },
  { label: "Last Name", type: "text" },
  { label: "School ID", type: "text" },
  { label: "BulSU Email", type: "email" },
  { label: "Create a Password", type: "password" },
  { label: "Confirm Password", type: "password" },
];

const programs = [
  {
    department: [
      { abbr: "Industrial and Information Technology", acro: "IIT" },
    ],
    courses: [
      {
        abbr: "Bachelor of Science in Information Technology",
        acro: "BSIT",
      },
      {
        abbr: "Bachelor of Industrial Technology major in Computer",
        acro: "BIT-Comp",
      },
      {
        abbr: "Bachelor of Industrial Technology major in Drafting and Digital Arts",
        acro: "BIT-DDA",
      },
      {
        abbr: "Bachelor of Industrial Technology major in Foods and Service Management",
        acro: "BIT-Foods",
      },
      {
        abbr: "Bachelor of Industrial Technology major in Electronics",
        acro: "BIT-EXT",
      },
    ],
  },
  {
    department: [{ abbr: "Business and Management", acro: "BAM" }],
    courses: [
      {
        abbr: "Bachelor of Science in Business Administration Major in Business Economics",
        acro: "BSBA-Economics",
      },
      {
        abbr: "Bachelor of Science in Business Administration Major in Financial Management",
        acro: "BSBA-FM",
      },
      {
        abbr: "Bachelor of Science in Business Administration Major in Marketing Management",
        acro: "BSBA-MM",
      },
      {
        abbr: "Bachelor of Science in Entrepreneurship",
        acro: "BS-Entrep",
      },
      {
        abbr: "Bachelor of Science in Hospitality Managment",
        acro: "BSHM",
      },
      {
        abbr: "Bachelor of Science in Tourism Managment",
        acro: "BSTM",
      },
    ],
  },
  {
    department: [
      {
        abbr: "General Academics and Teacher Education",
        acro: "GATE",
      },
    ],
    courses: [
      {
        abbr: "Bachelor of Elementary Education",
        acro: "BEED",
      },

      {
        abbr: "Bachelor of Secondary Education major in English minor in Mandarin",
        acro: "BSED-ENG",
      },
      {
        abbr: "Bachelor of Secondary Education major in Filipino",
        acro: "BSED-FIL",
      },
      {
        abbr: "Bachelor of Secondary Education major in Science",
        acro: "BSED-SCI",
      },
      {
        abbr: "Bachelor of Secondary Education major in Mathematics",
        acro: "BSED-MATH",
      },
      {
        abbr: "Bachelor of Secondary Education major in Social Sciences",
        acro: "BSED-Soc-Sci",
      },
    ],
  },
];

const Form = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [courses, setCourses] = useState([]);

  const findCourses = (value) => {
    const searchCource = programs.find((program) =>
      program.department.find((department) => department.abbr === value)
    );
    setCourses(searchCource.courses);
  };

  const handleSelectOnChange = (e) => {
    if (e.target.value.length > 15) {
      findCourses(e.target.value);
    }
    setIsDisabled(true);
  };

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <form className="register-form flex flex-col gap-5">
      <Label label="Register" />
      <div className="flex flex-col gap-5 md:flex-row md:gap-0">
        <div className="w-full text-xs px-6 py-2 rounded-lg flex flex-col gap-4">
          <SelectUserType
            contents={userTypes}
            label="User Type"
            disabled={isDisabled}
            onChange={handleSelectOnChange}
          />

          {/*INPUTS FNAME, MNAME, LNAME*/}
          {inputs.slice(0, 3).map((input, index) => {
            return <Input key={index} {...input} />;
          })}

          <SelectDepartment
            contents={programs}
            label="Department"
            disabled={isDisabled}
            onChange={handleSelectOnChange}
          />
        </div>
        <div className="w-full md:text-lg  text-xs px-6 py-2 rounded-lg flex flex-col gap-4">
          <SelectCourse
            contents={courses}
            label="Courses"
            disabled={!isDisabled}
          />

          {inputs.slice(-4).map((input, index) => {
            return <Input key={index} {...input} />;
          })}
        </div>
      </div>
      <div className="w-full px-2 flex flex-col sm:flex-row">
        <div className="w-full flex justify-center ">
          <input type="checkbox" onChange={handleCheckBox} />

          <GoToAction
            text="I accept all"
            action="Terms and Conditions"
            link="/signin"
            style="text-xs  whitespace-nowrap"
          />
        </div>
        <div className="w-full sm:px-4 sm:ml-9 ">
          <Submit action="Sign Up" disabled={!isChecked} />
        </div>
      </div>
      <GoToAction
        text="Already a member?"
        action="Sign In Now"
        link="/signin"
        style="text-xs"
      />
    </form>
  );
};

export default Form;
