import ButtonLink from "@/components/ButtonLink";
import React from "react";

export const metadata = {
  title: "Home page",
  description: "generated with Next",
};

const Home = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold uppercase">
        Jesús Quintana
      </h1>
      <p className="mb-8 text-center text-gray-700">Backend Developer</p>
      <p className="mb-8 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis
        impedit eum quas reprehenderit, blanditiis eveniet iure aliquam fugit
        minus, illum quos soluta. Architecto quasi perspiciatis eos rerum vero
        non?
      </p>

      <div className="text-center">
        <ButtonLink href="/blog">Ir al blog</ButtonLink>
      </div>
    </>
  );
};

export default Home;
