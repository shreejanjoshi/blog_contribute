import Link from "next/link";
import Card from "../Card";
// import { Blog, Menu } from "@/types";
import { Blog } from "@/pages/api/dummyData/indexBlog";

interface HomeLayoutProps {
  title: string;
  link: string;
  blogs?: Blog[];
}

const HomeLayout = ({ title, link, blogs }: HomeLayoutProps) => {
  return (
    <>

      <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col  items-center justify-center">
        <div className="w-full flex  justify-between">
          <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark">
            {title}
          </h2>
          <Link
            href={link}
            className="inline-block font-medium text-myOrange underline underline-offset-2 text-base md:text-lg hover:text-myOrangeDark"
          >
            view all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
          {/* need map here */}

          {link.includes("blogs") &&
            blogs
              ?.slice(-6)
              .reverse()
              .map((blog) => (
                <Card
                  key={blog.id}
                  id={blog.id!}
                  image={blog.image}
                  link="/blogs/"
                  title={blog.title}
                  subTitle={new Date(blog.createdAt).toLocaleDateString(
                    "nl-BE"
                  )}
                />
              ))}
        </div>
      </section>
    </>
  );
};

export default HomeLayout;
