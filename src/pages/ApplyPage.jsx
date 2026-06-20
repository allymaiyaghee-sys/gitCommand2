
const ApplyPage = () => {
  console.log("apply page rendered")
  return (
    <div className="min-h-screen bg-slate-50 pt-45 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wider uppercase bg-blue-100 text-blue-950 rounded-full">
            Admissions Open 2028
          </span>
          <div className="w-24 h-1 bg-blue-950 mx-auto rounded-full"></div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl -mt-10 md:p-12">

          <form className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-medium text-blue-950">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-950"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-blue-950">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-950"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-blue-950">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-950"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-blue-950">
                  Course Interested In
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-950">
                  <option>B.Tech Computer Science</option>
                  <option>BBA</option>
                  <option>MBA</option>
                  <option>BCA</option>
                  <option>MCA</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium text-blue-950">
                  Highest Qualification
                </label>
                <input
                  type="text"
                  placeholder="12th / Graduation / Diploma"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-950"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-blue-950">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-950"
                />
              </div>

            </div>

            <div>
              <label className="block mb-2 font-medium text-blue-950">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell us about your academic interests..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-blue-950"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Submit Application
            </button>

          </form>

        </div>
        <div className="text-center mt-16 mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
            Begin Your Academic Journey
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-4 leading-8">
            Every great achievement starts with a single step. Complete your
            application today and unlock opportunities that will shape your
            future and help you achieve your goals.
          </p>
          <p className="mt-6 text-blue-950 font-medium place-self-end">
            Thank you for considering our institution as part of your future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
