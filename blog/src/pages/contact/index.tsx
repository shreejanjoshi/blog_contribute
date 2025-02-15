import { GetStaticProps } from "next";
import { Address, getAddress } from "../api/contact";
import Hero from "@/components/hero";
import GoogleMap from "@/components/googleMap";

interface ConatctProps {
  address: Address;
}

export const getStaticProps: GetStaticProps<ConatctProps> = async () => {
  let address = await getAddress();

  return {
    props: {
      address: address,
    },
  };
};

const Contact = ({ address }: ConatctProps) => {
  return (
    <>
      <main className="flex flex-col items-center justify-center mb-52">
        {/* hero section */}
        <Hero
          title="Contact"
          description="Heb je vragen over mijn stage, projecten of mijn leerproces? Aarzel niet om contact met mij op te nemen! Ik sta open voor feedback, samenwerking en interessante gesprekken."
          img="https://res.cloudinary.com/dl3qqfbrh/image/upload/v1702218390/contact_96c7f85315.png"
          link=""
          button="Home"
        />

        <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col  items-center justify-center">
          <div className="w-full border-dark rounded-full bg-myOrange/80 backdrop-blur-sm">
            <div className="m-20 font-medium dark:font-bold text-center capitalize ">
              {address.address.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* google map */}
      <GoogleMap link={address.mapUrl} />
    </>
  );
};

export default Contact;
