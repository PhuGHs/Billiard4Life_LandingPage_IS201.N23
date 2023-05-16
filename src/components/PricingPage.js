import React from "react";

const PricingPage = () => {
  return (
    <section id="PricingPage" className="w-screen h-screen bg-gray-100 mt-100">
      <div className="container my-24 px-6 mx-auto pt-20">
        <section className="mb-32 text-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-12 pb-4 text-center">Prices</h2>
          <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            <div className="mb-6 lg:mb-0">
              <div className="relative block bg-white rounded-lg shadow-lg">
                <div className="flex">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://www.shooterspool.net/img/brands/gabriels-billiards/gabriels-billiards-01.webp"
                      className="w-full"
                      alt="img"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="font-bold text-lg mb-3">Carom Table</h5>
                  <p className="text-gray-500 mb-4">
                    <small>
                    Published <u>16.05.2023</u> by
                      <p className="text-gray-900">Le Van Phu</p>
                    </small>
                  </p>
                  <p className="mb-4 pb-2">
                    30.000 VNĐ per hour.
                  </p>
                  <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-6 lg:mb-0">
              <div className="relative block bg-white rounded-lg shadow-lg">
                <div className="flex">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1535066925810-38b22c6b8255?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
                      className="w-full"
                      alt="img"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="font-bold text-lg mb-3">Snooker Table</h5>
                  <p className="text-gray-500 mb-4">
                    <small>
                      Published <u>16.05.2023</u> by
                      <p className="text-gray-900">Le Van Phu</p>
                    </small>
                  </p>
                  <p className="mb-4 pb-2">
                    70.000 VNĐ per hour.
                  </p>
                  <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-0">
              <div className="relative block bg-white rounded-lg shadow-lg">
                <div className="flex">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1575553939928-d03b21323afe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      className="w-full"
                      alt="img"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="font-bold text-lg mb-3">Pool Table</h5>
                  <p className="text-gray-500 mb-4">
                    <small>
                    Published <u>16.05.2023</u> by
                      <p className="text-gray-900">Le Van Phu</p>
                    </small>
                  </p>
                  <p className="mb-4 pb-2">
                    50.000 VNĐ per hour.
                  </p>
                  <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default PricingPage;
