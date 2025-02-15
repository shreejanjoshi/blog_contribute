import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Hero from "@/components/hero";
import HomeLayout from "@/components/home/homeLayout";
// import { Blog, BlogApiAllList } from "@/types";
import { getBlogs, Blog } from "./api/dummyData/indexBlog";

// Directly use the hardcoded data without getStaticProps
const Home = () => {
  const blogs = getBlogs(); // Get blogs from the hardcoded data

  return (
    <main className="flex flex-col items-center justify-center mb-52">
      {/* hero section */}
      <Hero
        title="Shreejan Joshi"
        description="Ik ben een laatstejaars programmeerstudent aan AP Hogeschool en loop momenteel een vier maanden durende stage bij Contribute. Volg mijn blog voor wekelijkse updates over mijn ervaringen, uitdagingen en leerproces!"
        img="https://res.cloudinary.com/dl3qqfbrh/image/upload/v1738959786/bl010liqokzgrkeexkke.jpg"
        link="blogs"
        button="Blog"
      />

      {/* recent posts */}
      <HomeLayout title="Recent Blogs" link="/blogs" blogs={blogs} />
    </main>
  );
};

export default Home;
