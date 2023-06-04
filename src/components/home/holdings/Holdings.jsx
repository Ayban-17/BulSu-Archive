import Analytics from "./Analytics";
import Introduction from "./Introduction";

const Holdings = () => {
  return (
    <section className="pt-28 font-poppins md:grid xl:grid-cols-holdings xl:items-center xl:justify-center xl:p-24">
      <Introduction />
      <Analytics />
    </section>
  );
};

export default Holdings;
