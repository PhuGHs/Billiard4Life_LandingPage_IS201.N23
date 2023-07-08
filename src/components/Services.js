import React from "react";

const Services = () => {
  return (
    <section id="ServicesPage" className="w-screen h-screen flex flex-col">
      <h2 className="text-3xl font-bold mb-12 pb-4 text-center pt-10">Services</h2>
      <div className="flex flex-col items-center border-gray-200 mx-auto w-full h-full  ">
        <div className="flex flex-row w-2/3">
          <div className="max-w-lg mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"
              alt=""
              className="width-full"
            />
          </div>
          <div className="flex flex-col text-left ml-20">
            <h1 className="font-bold text-2xl subpixel-antialiased">
              We serve many kinds of food while you're in game
            </h1>
            <p className="font-sans antialiased leading-7 mt-16">
              Indulge in our mouthwatering menu crafted by our talented chefs.
              From appetizers to main courses and desserts, we offer a diverse
              range of culinary delights that cater to all preferences. Whether
              you're craving classic comfort food or seeking bold and
              adventurous flavors, our menu has something for everyone.
            </p>
          </div>
        </div>
        <div className="flex flex-row w-2/3 mt-20">
          <div className="flex flex-col text-left mr-20">
            <h1 className="font-bold text-2xl subpixel-antialiased text-left">
              Feel satisfied with facilities here
            </h1>
            <p className="font-sans antialiased leading-7 mt-16">
              Experience the thrill of billiards at our state-of-the-art
              billiard hall. With well-maintained tables, comfortable seating,
              and a lively atmosphere, we provide the perfect setting for
              friendly games or competitive tournaments. Our knowledgeable staff
              is always on hand to assist you, whether you're a seasoned player
              or new to the game. Challenge your friends, show off your skills,
              or simply relax and enjoy the camaraderie that billiards brings.
            </p>
          </div>
          <div className="max-w-lg mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
            <img
              src="billiard.png"
              alt=""
              className="width-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
