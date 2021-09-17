export default function ContactInfoFirst() {
  return (
    <div className="form">
      <div className="mx-auto w-full md:w-11/12 px-2 md:px-0">
        <h2 className="text-2xl font-semibold mb-4 text-primary font-head">
          Where do you stay?
        </h2>
        <p className="text-lg mb-5 text-midBlack">
          This helps us get the best tutors close to you
        </p>
      </div>

      <div className="container px-2 py-4 w-full md:w-11/12 mx-auto mb-5">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="w-full md:w-3/5">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-base font-medium text-gray-900 block mb-2 text-left"
              >
                Street address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-blue-200 focus:border-blue-400 block w-full p-2.5 focus:outline-none focus:ring"
                placeholder=""
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* start */}
            <div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-3 lg:-mx-3 xl:-mx-3">
              <div class="my-2 px-2 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3">
                <div className="mb-4 md:mb-0">
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900 block mb-2 text-left"
                  >
                    State
                  </label>
                  <select className="form-select block w-full mt-1 py-2 px-4 rounded border">
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
              </div>

              <div class="my-2 px-2 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3">
                <div className="mb-4 md:mb-0">
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900 block mb-2 text-left"
                  >
                    City
                  </label>
                  <select className="form-select block w-full mt-1 py-2 px-4 rounded border">
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
              </div>

              <div class="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-3 md:px-3 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3">
                <div className="mb-4 md:mb-0">
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900 block mb-2 text-left"
                  >
                    Nearest Landmark
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-blue-200 focus:border-blue-400 block w-full p-2.5 focus:outline-none focus:ring"
                    placeholder="Firstname Lastname"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            {/* end */}
          </div>
          <label className="w-full md:w-4/12 bg-gray-500 h-36 md:h-auto"></label>
        </div>
      </div>
    </div>
  );
}
