import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, rem
          accusantium? Omnis tempore accusamus eaque nemo cumque quam fuga
          dolorem sunt velit. Illum, harum odit magnam molestias est cumque hic
          repudiandae eveniet expedita officia. Sed, nam ex nulla recusandae
          unde fuga officia, repellat dolorem porro quod similique amet, iste
          assumenda!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          natus unde officia animi, voluptas rerum necessitatibus nemo molestiae
          minima. Explicabo, eligendi deleniti? Dolore nostrum iusto rerum quis
          dolorem a officia ratione! Omnis, consequuntur? Numquam nam possimus
          sed fugiat atque aspernatur, iste, inventore aliquam nemo rem
          obcaecati illo vero labore ipsa.
        </p>
      </div>
    </div>
  );
};

export default About;
