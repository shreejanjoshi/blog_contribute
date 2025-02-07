import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Hero from "@/components/hero";
import HomeLayout from "@/components/home/homeLayout";
import { Blog, BlogApiAllList } from "@/types";

const loadBlog = async () => {
  const token = process.env.TOKEN;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const responseData: BlogApiAllList = await response.json();

  const blogs = responseData.data.map((blog) => {
    return {
      id: blog.id,
      title: blog.attributes.title,
      image: blog.attributes.image,
      createdAt: blog.attributes.createdAt,
    };
  });

  return blogs;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let blogs = await loadBlog();

  // blogs = blogs.map((blog) => ({
  //   ...blog,
  //   date: new Date(blog.date).toLocaleDateString("nl-BE"),
  // }));

  return {
    props: {
      blogs: blogs,
    },
  };
};

interface HomeProps {
  blogs: Blog[];
}

const Home = ({ blogs }: HomeProps) => {
  // const router = useRouter();

  // let newBlogFirst: Blog[] = [...blogs];
  // newBlogFirst.reverse();

  return (
    <main className="flex flex-col items-center justify-center mb-52">
      {/* hero section */}
      <Hero
        title="Shreejan Joshi"
        description="I am a final-year programming student at AP Hogeschool, currently doing a 4-month internship at Contribute. Follow my blog for weekly updates on my experiences, challenges, and learning journey!"
        img="https://res.cloudinary.com/dl3qqfbrh/image/upload/v1738959786/bl010liqokzgrkeexkke.jpg"
        link="blogs"
        button="Blog"
      />

      {/* recent post */}
      <HomeLayout title="Recent Blogs" link="/blogs" blogs={blogs} />
    </main>
  );
};

export default Home;
