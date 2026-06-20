import React from 'react'

function Hero() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">

        {/* VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/university2.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">

          <h1 className="text-6xl font-bold">
            Shape Your Future
          </h1>

          <p className="mt-4 text-lg">
            Excellence in Education & Innovation
          </p>

          <button className="mt-6 border border-white px-6 py-3 uppercase tracking-[2px]">
            Explore More
          </button>

        </div>
      </div>




      <div className="relative flex items-center justify-between mt-5 ml-65 mb-20 px-">

        {/* Left Content */}
        <div className="justify-between flex w-[110%] min-h-[700px] border-t-[14px] border-l-[14px] border-blue-950 pl-6 pt-6">

          <div className="w-[55%]">
            <p className="text-3xl mb-4 ">
              Please review the following information prior to submitting your
              application to Sikkim Global University.
            </p>
            <p className="border-l-6 text-2xl pl-6 border-gray-500">Please review the following information prior to submitting your application to Columbia College.</p>
            <p className="text-gray-600 leading-7 mt-10">
              Welcome to Sikkim Global University, a premier institution dedicated
              to academic excellence, innovation, and holistic development.
              Located in the beautiful state of Tripura, our university provides a
              dynamic learning environment that empowers students with knowledge,
            </p>
          </div>
          <div className="self-start mt-0 mr-0">
            <img className="w-100 object-cover"
              src="/image/sikkimphoto2.png" alt="" />
          </div>
        </div>

      </div>
    </>

  );
};

export default Hero;