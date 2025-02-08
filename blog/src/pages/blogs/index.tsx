import { GetStaticProps } from "next";
import HashtagHeader from "@/components/hashtagHeader";
import Card from "@/components/Card";
// import { Blog, BlogApiAllList } from "@/types";
import { getBlogs } from "../api/dummyData/indexBlog";
import { Blog } from "../api/dummyData/indexBlog";

const BlogPosts = () => {
  // Get the blogs from the hardcoded data
  const blogs = getBlogs();

  let newBlogFirst: Blog[] = [...blogs]; // Copy the blogs array
  newBlogFirst.reverse(); // Reverse the order of blogs to show the latest one first

  return (
    <>
      <article className="mt-12 flex flex-col text-dark mb-52">
        {/* header title */}
        <HashtagHeader
          title="All blog posts"
          description="Feel free to discover and expand your knowledge!"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
          {newBlogFirst.map((blog) => (
            <Card
              key={blog.id}
              id={blog.id}
              image={blog.image}
              link="/blogs/"
              title={blog.title}
              subTitle={new Date(blog.createdAt).toLocaleDateString("nl-BE")}
            />
          ))}
        </div>
      </article>
    </>
  );
};

export default BlogPosts;
