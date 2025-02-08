import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import HashtagHeader from "@/components/hashtagHeader";
// import { Blog, BlogApiAllList, BlogApiSingleList } from "@/types";
import HomeLayout from "@/components/home/homeLayout";
import BlogDetailsLayout from "@/components/Blog/blogDetailsLayout";
import { Blog } from "../api/dummyData/indexBlog";
import { getBlogs, getBlogById } from "../api/dummyData/indexBlog";

interface Paths extends ParsedUrlQuery {
  id: string;
}

// Get Static Paths (For dynamic routes like /blogs/[id])
export const getStaticPaths: GetStaticPaths<Paths> = async () => {
  const blogs = getBlogs();

  const paths = blogs.map((blog) => ({
    params: { id: blog.id.toString() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

// Get Static Props for each blog post (For static pages)
export const getStaticProps: GetStaticProps<BlogProps, Paths> = async (
  context
) => {
  const id = parseInt(context.params?.id as string);
  const blog = getBlogById(id);
  const blogs = getBlogs();

  if (!blog) {
    return {
      notFound: true, // In case the blog ID doesn't exist
    };
  }

  return {
    props: {
      blog: blog,
      blogs: blogs,
    },
  };
};

interface BlogProps {
  blog: Blog;
  blogs: Blog[];
}

const BlogPost = ({ blog, blogs }: BlogProps) => {
  // Filter out the current blog post from the list to show other posts
  const otherBlogs = blogs.filter((otherBlog) => otherBlog.id !== blog.id);

  return (
    <>
      <article className="mt-12 flex flex-col text-dark mb-52">
        {/* header title */}
        <HashtagHeader
          title="Blog"
          description="Feel free to discover and expand your knowledge!"
        />

        <BlogDetailsLayout blog={blog} />

        <HomeLayout
          title="Recent Blogs"
          link="/blogs"
          blogs={otherBlogs} // Passing other blogs to the HomeLayout component
        />
      </article>
    </>
  );
};

export default BlogPost;
