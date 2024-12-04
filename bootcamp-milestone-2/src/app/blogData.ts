export type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
  };
  
  // Create a list of blogs
  export const blogs: Blog[] = [
    {
      title: "How to Build a React Application in 2024",
      date: "2024-01-01",
      description: "A complete guide to building a React app.",
      image: "./images/react2024.png",
      imageAlt: "React Application Image",
      slug: "how-to-build-a-react-application-in-2024",
    },
    {
      title: "Understanding TypeScript",
      date: "2024-02-01",
      description: "Learn the fundamentals of TypeScript.",
      image: "./images/typescript.png",
      imageAlt: "TypeScript Logo",
      slug: "understanding-typescript",
    },
  ];
  