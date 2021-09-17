export default function ContactInfoFirst() {
  return (
    <div className="form">
      <h2 className="text-center text-2xl font-semibold mb-4">
        Where do you stay?
      </h2>
      <p className="text-center text-lg mb-5">
        This helps us get the best tutors close to you
      </p>

      <div className="container px-2 py-4 w-11/12 mx-auto mb-5">
        <div className="flex justify-between">
          <div className="w-3/5">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-base font-medium text-gray-900 block mb-2 text-left"
              >
                Street address
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
            </div>{" "}
            <div className="flex justify-between">
              <div className="mb-6 w-31/100">
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
              <div className="mb-6 w-31/100">
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
              <div className="mb-6 w-31/100">
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
              </div>{" "}
            </div>
          </div>
          <label className=" w-4/12 bg-gray-500"></label>
        </div>
      </div>
    </div>
  );
}
