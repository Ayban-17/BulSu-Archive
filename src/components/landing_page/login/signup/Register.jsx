import { useEffect, useState } from "react";
import Logo from "../../header/Logo";
import "../index.css";
import Submit from "../reusable/Submit";
import GoToAction from "../reusable/GoToAction";

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

const logo = " text-4xl sm:text-5xl letter-shadow ";

const Register = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [deptSelected, setDeptSelected] = useState("0");
  const [courses, setCourses] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const findCourses = programs.find(
    (program, index) => index.toString() === deptSelected
  );

  const handleDeptSelected = (e) => {
    setDeptSelected(e.target.value);
    e.target.value === "" ? setIsDisabled(true) : setIsDisabled(false);
  };

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setCourses(findCourses.courses);
  }, [findCourses]);

  return (
    <main className="gate-bg-sign-in-register font-poppins justify-center gap-5 ">
      <h1 className="z-10 ">
        <Logo font={logo} />
      </h1>
      <div className="z-10 register-container p-6">
        <form className="register-form flex flex-col gap-5">
          <h1 className="w-full rounded-lg text-3xl text-white font-semibold register-label ml-5">
            Register
          </h1>

          <div className="flex flex-col gap-5 md:flex-row md:gap-0">
            <div className="w-full text-xs px-6 py-2 rounded-lg flex flex-col gap-4">
              <select
                required
                className="w-full md:text-lg  text-xs px-6 py-2 rounded-lg "
              >
                <option value="">User Type</option>
                {userTypes.sort().map((userType, index) => {
                  return (
                    <option key={index} value={userType}>
                      {userType}
                    </option>
                  );
                })}
              </select>

              {inputs.slice(0, 3).map((input, index) => {
                return (
                  <input
                    key={index}
                    type={input.type}
                    placeholder={input.label}
                    name={input.label}
                    required
                    className="w-full md:text-lg  text-xs px-6 py-2 rounded-lg"
                  />
                );
              })}

              <select
                required
                onChange={handleDeptSelected}
                className="w-full md:text-lg  text-xs px-6 py-2 rounded-lg"
              >
                <option value="" disabled={!isDisabled}>
                  Department
                </option>
                {programs.map((program, id) => {
                  return program.department.map((dept, index) => {
                    return (
                      <option key={index} value={id}>
                        {`${dept.abbr} (${dept.acro})`}
                      </option>
                    );
                  });
                })}
              </select>
            </div>

            <div className="w-full md:text-lg  text-xs px-6 py-2 rounded-lg flex flex-col gap-4">
              <select
                required
                disabled={isDisabled}
                className="w-full md:text-lg  text-xs px-6 py-2 rounded-lg"
              >
                <option value="" disabled={!isDisabled}>
                  Course
                </option>
                {courses.map((course, index) => {
                  return (
                    <option
                      key={index}
                      value={course.abbr}
                    >{`${course.abbr} (${course.acro})`}</option>
                  );
                })}
              </select>

              {inputs.slice(-4).map((input, index) => {
                return (
                  <input
                    key={index}
                    placeholder={input.label}
                    type={input.type}
                    required
                    className="w-full md:text-lg  text-xs px-6 py-2 rounded-lg"
                  />
                );
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
      </div>
    </main>
  );
};

export default Register;
