export default function LessonSchedule() {
  return (
    <div className="form">
      <div className="mx-auto px-2 md:px-0 w-full md:w-11/12">
        <h2 className="text-2xl font-semibold mb-4 text-primary font-head">
          Lesson schedule
        </h2>
        <p className="text-lg mb-5 text-midBlack">
          How long you need a tutor for and what time?
        </p>
      </div>

      <div className="container px-2 py-4 md:w-11/12 mx-auto mb-5 flex flex-col justify-between md:flex-row">
        <div className="md:w-3/5 w-full">
          <div className="block">
            <span className="text-base font-medium text-gray-900 block mb-2 text-left">
              What days do you want lessons to hold?
            </span>
            <div className="flex flex-wrap -mx-3 overflow-hidden sm:-mx-2 md:-mx-3 lg:-mx-2 xl:-mx-2 mt-2">
              <div className="my-3 px-3 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-3 md:px-3 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
                <div className="mr-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" checked />
                    <span className="ml-2">Monday</span>
                  </label>
                </div>
              </div>

              <div className="my-3 px-3 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-3 md:px-3 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
                <div className="mr-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Tuesday</span>
                  </label>
                </div>
              </div>

              <div className="my-3 px-3 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-3 md:px-3 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
                <div className="mr-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Wednesday</span>
                  </label>
                </div>
              </div>

              <div className="my-3 px-3 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-3 md:px-3 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
                <div className="mr-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Thursday</span>
                  </label>
                </div>
              </div>

              <div className="my-3 px-3 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-3 md:px-3 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
                <div className="mr-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Friday</span>
                  </label>
                </div>
              </div>

              <div className="my-3 px-3 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-3 md:px-3 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
                <div className="mr-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Saturday</span>
                  </label>
                </div>
              </div>

              <div className="my-3 px-3 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/4 md:my-3 md:px-3 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
                <div className="mr-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Sunday</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-col mt-5 md:flex-row">
            <div className="md:w-9/20 w-full">
              <div className="mb-4 md:mb-6">
                <label
                  htmlFor="startDate"
                  className="text-base font-medium text-gray-900 block mb-2 text-left"
                >
                  When do you want to start?
                </label>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-blue-200 focus:border-blue-400 block w-full p-2.5 focus:outline-none focus:ring"
                  placeholder="Start Date"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>{" "}
              <div className="mb-4 md:mb-6">
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900 block mb-2 text-left"
                >
                  How many hours per day?
                </label>
                <select className="form-select block w-full mt-1 py-3 px-2 rounded border">
                  <option>select</option>
                  <option>1 hour</option>
                  <option>2 hours</option>
                  <option>3 hours</option>
                  <option>4 hours</option>
                  <option>5 hours</option>
                </select>
              </div>{" "}
            </div>
            <div className="md:w-9/20 w-full">
              <div className="mb-4 md:mb-6">
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900 block mb-2 text-left"
                >
                  For how long?
                </label>
                <select className="form-select block w-full mt-1 py-3 px-2 rounded border">
                  <option>Select</option>
                  <option>One Week</option>
                  <option>Two Weeks</option>
                  <option>Three Weeks</option>
                  <option>One Month</option>
                  <option>Two Months</option>
                  <option>Three Months</option>
                </select>
              </div>{" "}
              <div className="mb-4 md:mb-6">
                <label
                  htmlFor="referral"
                  className="text-base font-medium text-gray-900 block mb-2 text-left"
                >
                  From what time?
                </label>
                <input
                  type="text"
                  name="referral"
                  id="referral"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-blue-200 focus:border-blue-400 block w-full p-2.5 focus:outline-none focus:ring"
                  placeholder=""
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="md:w-2/6 w-full md:border md:rounded md:px-4 py-5">
          <p className="text-base font-medium text-blackText block mb-5 text-left">
            Tuition Fee
          </p>

          <hr />

          <div className="mt-5">
            <div className="w-10/12">
              <div className="flex justify-between mb-4">
                <span className="text-lightBlack">
                  ₦2,871 × 1.5 hrs × 2 lessons
                </span>
                <span className="text-lightBlack">₦8,613</span>
              </div>
              <div className="flex justify-between mb-5">
                <div className="flex flex-col">
                  <span>Service fee</span>
                  <span>One-time payment</span>
                </div>
                <span className="text-lightBlack">₦3,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blackText font-bold">Payments</span>
                <span className="text-blackText font-bold">₦11,613</span>
              </div>
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="py-3 px-4 w-full bg-primary text-white rounded"
              >
                Place request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
