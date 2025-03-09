import { GetStaticProps } from "next";
import HashtagHeader from "@/components/hashtagHeader";
import Card from "@/components/Card";
// import { Blog, BlogApiAllList } from "@/types";
import { getBlogs } from "../api/dummyData/indexBlog";
import { Blog } from "../api/dummyData/indexBlog";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon

const BlogPosts = () => {
  // Get the blogs from the hardcoded data
  const blogs = getBlogs();

  let newBlogFirst: Blog[] = [...blogs]; // Copy the blogs array
  newBlogFirst.reverse(); // Reverse the order of blogs to show the latest one first

  // Extract unique categories
  const allCategories = [
    "All",
    ...Array.from(new Set(blogs.flatMap((blog) => blog.categories))),
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  // Filter blogs based on selected category
  const filteredBlogs =
    selectedCategory === "All"
      ? newBlogFirst
      : newBlogFirst.filter((blog) =>
          blog.categories.includes(selectedCategory)
        );

  return (
    <>
      <article className="mt-12 flex flex-col text-dark mb-52">
        {/* header title */}
        <HashtagHeader
          title="All blog posts"
          description="Feel free to discover and expand your knowledge!"
        />

        {/* Category Filter Buttons */}
        {/* <div className="flex flex-wrap justify-center gap-2 sm:gap-4 my-6 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 overflow-x-auto">
          {allCategories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md font-medium transition whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-myOrange text-white" // Selected: Orange background, white text
                  : "bg-gray-200 text-gray-700 hover:text-myOrangeDark hover:bg-gray-300" // Default: Gray, on hover text changes to dark orange
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* 🔹 Category Filter (Buttons on Large Screens, Dropdown on Small Screens) */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-4 my-6 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 overflow-x-auto">
          {/* Dropdown on Small Screens */}
          <div className="relative sm:hidden w-64">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium flex justify-between items-center"
            >
              {selectedCategory}
              <FaChevronDown className="ml-2 text-gray-500" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg">
                {allCategories.map((category) => (
                  <li
                    key={category}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-300 ${
                      selectedCategory === category
                        ? "bg-myOrange text-white"
                        : "text-gray-700"
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Buttons on Large Screens */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-4">
            {allCategories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md font-medium transition whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-myOrange text-white"
                    : "bg-gray-200 text-gray-700 hover:text-myOrangeDark hover:bg-gray-300"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
          {filteredBlogs.map((blog) => (
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
