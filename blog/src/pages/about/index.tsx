import Hero from "@/components/hero";
import Link from "next/link";

const About = () => {
  return (
    <main className="flex flex-col items-center justify-center mb-52">
      {/* hero section */}
      <Hero
        title="About"
        description="Ik ben Shreejan Joshi, een enthousiaste programmeerstudent aan AP Hogeschool en momenteel stagiair bij Contribute. Op deze blog deel ik mijn ervaringen en groei als softwareontwikkelaar."
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
            {/* Hi! I’m Shreejan Joshi, a final-year programming student at AP
            Hogeschool. Since February 2025, I have been doing a 4-month
            internship at Contribute, a company specializing in Oracle
            technologies, APEX, SQL, PL/SQL, cloud development, and digital
            transformation. */}
            Hoi! Ik ben Shreejan Joshi, een laatstejaars student programmeren
            aan AP Hogeschool. Sinds februari 2025 loop ik een vier maanden
            durende stage bij Contribute, een bedrijf dat gespecialiseerd is in
            Oracle-technologieën, APEX, SQL, PL/SQL, cloud development en
            digitale transformatie.
          </p>
          <br></br>
          <p>
            {/* With this internship, I aim to gain hands-on experience in software
            development and IT solutions. I will work with modern technologies
            and learn how a professional IT company operates. */}
            Met deze stage wil ik praktische ervaring opdoen in
            softwareontwikkeling en IT-oplossingen. Ik zal werken met moderne
            technologieën en leren hoe een professioneel IT-bedrijf opereert.
          </p>
        </div>

        {/* <div className="w-full flex  justify-between mt-16">
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
        </div> */}

        <div className="w-full flex  justify-between mt-16">
          <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark">
            Contribute NV
          </h2>
        </div>

        <div className="w-full mt-16">
          <p>
            <strong>
              Over Contribute – Innovatie en Expertise in Oracle Technologie
            </strong>
          </p>
          <br></br>
          <p>
            Al jarenlang is Contribute een vertrouwde partner in het ontwikkelen
            van maatwerkoplossingen met Oracle-tools en platformen. De ervaring
            en diepgaande kennis van Oracle-technologieën stellen het bedrijf in
            staat om efficiënte en schaalbare oplossingen te leveren voor
            bedrijven in diverse sectoren.
          </p>
          <br></br>
          <p>
            Hoewel de expertise in Oracle centraal staat, heeft Contribute de
            afgelopen jaren zijn kennis verder uitgebreid met aanvullende
            technologieën en innovatieve concepten. Dit stelt het bedrijf in
            staat om moderne, flexibele en toekomstbestendige applicaties te
            ontwikkelen.
          </p>
          <br></br>
          <p>
            Technologieën en concepten waar Contribute mee werkt: <br></br>✔️
            Oracle JET (JavaScript) <br></br>✔️ Oracle ADF (Java) <br></br>✔️
            Oracle APEX
            <br></br>
            ✔️ SQL en PL/SQL
            <br></br>
            ✔️ Cloud development
            <br></br>
            ✔️ Digital Assistants
          </p>
          <br></br>
          <p>
            {" "}
            Dankzij deze combinatie van technologieën bouwt Contribute niet
            alleen krachtige back-end oplossingen, maar ook intuïtieve en
            gebruiksvriendelijke interfaces. Innovatie staat centraal binnen het
            bedrijf, en Contribute blijft voortdurend investeren in de nieuwste
            technologische ontwikkelingen.
          </p>
          <br />
          <p>
            Het team van ervaren ontwikkelaars en consultants werkt nauw samen
            met klanten om op maat gemaakte oplossingen te leveren die voldoen
            aan specifieke bedrijfsbehoeften. Contribute gelooft in
            kennisdeling, continue verbetering en het creëren van duurzame,
            kwalitatieve IT-oplossingen. Laat het weten als je nog aanpassingen
            wilt! 🚀
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
