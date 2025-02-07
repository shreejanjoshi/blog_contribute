import Hero from "@/components/hero";
import Link from "next/link";

const About = () => {
  return (
    <main className="flex flex-col items-center justify-center mb-52">
      {/* hero section */}
      <Hero
        title="About"
        description="I’m Shreejan Joshi, an enthusiastic programming student at AP Hogeschool, currently interning at Contribute. On this blog, I share my experiences and growth as a software developer."
        img="https://res.cloudinary.com/dl3qqfbrh/image/upload/v1738959785/vlzicvuwvzryzoujvuvx.jpg"
        link="blogs"
        button="Blog"
      />

      <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col  items-center justify-center">
        <div className="w-full flex  justify-between">
          <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark">
            About me
          </h2>
        </div>

        <div className="w-full mt-16">
          <p>
            Hi! I’m Shreejan Joshi, a final-year programming student at AP
            Hogeschool. Since February 2025, I have been doing a 4-month
            internship at Contribute, a company specializing in Oracle
            technologies, APEX, SQL, PL/SQL, cloud development, and digital
            transformation.
          </p>
          <br></br>
          <p>
            With this internship, I aim to gain hands-on experience in software
            development and IT solutions. I will work with modern technologies
            and learn how a professional IT company operates.
          </p>
        </div>

        <div className="w-full flex  justify-between mt-16">
          <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark">
            Why This Blog?
          </h2>
        </div>

        <div className="w-full mt-16">
          <p>
            This blog serves as my personal internship journal, where I:{" "}
            <br></br>✔️ Share my weekly progress <br></br>✔️ Discuss my
            challenges and solutions <br></br>✔️ Explore new technologies and
            skills <br></br>✔️ Provide insights into the IT world
          </p>
          <br></br>
          <p>
            {" "}
            I hope my journey inspires others who are looking to start a career
            in IT!
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
