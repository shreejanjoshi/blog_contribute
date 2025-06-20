import Link from "next/link";
import Card from "../Card";
// import { Blog, Menu } from "@/types";
import { Blog } from "@/pages/api/dummyData/indexBlog";

const HomeLayout2 = () => {
  return (
    <>
      {/* 🔹 Internship Info Section */}
      <section className="w-full mt-16 px-5 sm:px-10 md:px-24 sxl:px-32 ">
        <h2 className="text-2xl md:text-4xl font-bold text-dark mb-4">
          Mijn Stage-Ervaring
        </h2>
        <p className="sm:inline-block mt-4 md:text-lg lg:text-xl font-in">
          Gedurende mijn stage bij Contribute heb ik mijn vaardigheden verder
          ontwikkeld door mee te werken aan echte projecten binnen een
          professionele werkomgeving. Op deze blog vind je een overzicht van
          mijn ervaringen, uitdagingen en successen.
        </p>
        <p className="sm:inline-block mt-4 md:text-lg lg:text-xl font-in">
          Contribute is een gespecialiseerd Oracle APEX-bedrijf binnen de
          Fieldside-cluster, dat op zijn beurt deel uitmaakt van de grotere
          Belgische IT-groep Cronos. Elke organisatie heeft zijn eigen focus en
          expertisegebied, wat bijdraagt aan een sterke samenwerking en
          kennisdeling tussen de teams.
        </p>
      </section>

      {/* 🔹 Companies Logo Section */}
      <section className="w-full mt-12 px-5 sm:px-10 md:px-24 sxl:px-32">
        <h3 className="text-xl md:text-3xl font-semibold text-center text-dark mb-6">
          Samenwerkende Bedrijven
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
          {/* Contribute */}
          <div className="w-36 h-24 flex items-center justify-center p-2">
            <img
              src="https://res.cloudinary.com/dl3qqfbrh/image/upload/v1748259074/Contribute-NewLogo_qzc2ax.png"
              alt="Contribute Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Cronos */}
          <div className="w-36 h-24 flex items-center justify-center p-2">
            <img
              src="https://res.cloudinary.com/dl3qqfbrh/image/upload/v1748259074/Cronos-Logo_ivp6o7.avif"
              alt="Cronos Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Fieldside */}
          <div className="w-36 h-24 flex items-center justify-center p-2">
            <img
              src="https://res.cloudinary.com/dl3qqfbrh/image/upload/v1748259074/Fieldside-Logo_noyooa.png"
              alt="Fieldside Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeLayout2;
