import Logo from "../../header/Logo";
import Title from "../reusable/Title";
import Text from "../reusable/Text";
import Icon from "../reusable/Icon";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faUserClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

//STYLES
const iconStyle =
  "text-footerText1 m-2 text-3xl md:text-xl cursor-pointer hover:transform hover:scale-125 lg:m-0 lg:mr-2";
const title = "text-footerText2";
const logo = "text-white";

//CONTENTS
const icons = [faFacebook, faTwitter, faInstagram];
const informations = [
  {
    icon: faEnvelope,
    text: "bulsuarchive@gmail.com",
    link: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new",
  },
  { icon: faPhone, text: "(+123) 123 456 7890", link: "" },
  {
    icon: faUserClock,
    text: "9:00 AM - 5:00 PM",
    link: "",
  },
  {
    icon: faLocationDot,
    text: "R374+7VP, Kaypian Rd, San Jose Del Monte City, Bulacan",
    link: "https://www.google.com/maps/place/Bulacan+State+University+-+Sarmiento+Campus/@14.8132224,121.0407273,15z/data=!4m7!3m6!1s0x3397af72d79b3177:0x226158a75fd9e553!8m2!3d14.8132953!4d121.0571761!15sCilidWxhY2FuIHN0YXRlIHVuaXZlcnNpdHkgc2FybWllbnRvIGNhbXB1c5IBBnNjaG9vbOABAA!16s%2Fg%2F11c2kfj_k1?coh=164777&entry=tt&shorturl=1",
  },
];

const Footer = () => {
  return (
    <section className="font-poppins">
      <div className="bg-footerbg1  lg:grid lg:grid-cols-2 lg:px-32">
        <div className=" flex flex-col items-center p-4 gap-4 lg:items-start">
          <Logo style={logo} />
          <div className="text-center lg:text-left">
            <Title title="Your Online " style={title} />
            <Title title="Literature Library" style={title} />
          </div>
          <div className="text-center sm:flex">
            <div className="m-2 lg:m-0">
              {icons.map((icon, index) => {
                return <Icon key={index} icon={icon} style={iconStyle} />;
              })}
            </div>
            <div className="flex gap-5 m-4 sm:mx-2 sm:mb-8 items-center  lg:hidden">
              {informations.map((info, index) => {
                const { icon, link } = info;
                return (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    <Icon
                      icon={icon}
                      style="text-footerText1 text-2xl  cursor-pointer hover:transform hover:scale-125 sm:text-3xl md:text-xl"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:p-4 ">
          {informations.map((info, index) => {
            const { icon, text, link } = info;
            return (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <Icon
                  icon={icon}
                  style="text-footerText1 text-2xl  cursor-pointer hover:transform hover:scale-125 sm:text-3xl md:text-xl  p-2"
                />
                <Text text={text} style="text-footerText1" />
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center p-4 bg-footerbg2">
        <p className="text-footerText1">
          © 2022 BulSU Archive. All Right Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
