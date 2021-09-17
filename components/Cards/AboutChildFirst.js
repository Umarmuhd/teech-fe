export default function AboutChildFirst() {
  return (
    <div className="form md:px-2">
      <div className="mx-auto w-full md:w-11/12">
        <h2 className="text-2xl font-semibold mb-4 text-primary font-head">
          Let's get a good tutor for your child
        </h2>
        <p className="text-lg mb-5 text-midBlack">Tell us your child.</p>
      </div>

      <div className="flex justify-between w-full md:w-11/12 mx-auto mb-5">
        <div className="mb-6 w-9/20">
          <label
            htmlFor="email"
            className="text-base font-medium text-gray-900 block mb-2 text-left"
          >
            Child name
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
        <div className="mb-6 w-9/20">
          <label
            htmlFor="age"
            className="text-base font-medium text-gray-900 block mb-2 text-left"
          >
            Child age
          </label>
          <input
            type="number"
            name="age"
            id="age"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-blue-200 focus:border-blue-400 block w-full p-2.5 focus:outline-none focus:ring"
            placeholder="8 years old"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex justify-between w-full md:w-11/12 mx-auto mb-5">
        <div className="mb-6 w-9/20">
          <label
            htmlFor="class"
            className="text-base font-medium text-gray-900 block mb-2 text-left"
          >
            Child class
          </label>
          <input
            type="text"
            name="class"
            id="class"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-blue-200 focus:border-blue-400 block w-full p-2.5 focus:outline-none focus:ring"
            placeholder="Primary Two"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>{" "}
        <div className="mb-6 w-9/20">
          <label
            htmlFor="gender"
            className="text-base font-medium text-gray-900 block mb-2 text-left"
          >
            Child gender
          </label>
          <select className="form-select block w-full mt-1 py-2 px-3 rounded border">
            <option className="px-2">Select</option>
            <option className="px-2">Male</option>
            <option className="px-2">Female</option>
            <option className="px-2">Prefer not to select</option>
          </select>
        </div>
      </div>
      <div className="block w-full md:w-11/12 mx-auto">
        <span className="text-gray-900">
          Do you prefer in person or online lessons?
        </span>
        <div className="mt-2 flex">
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="radio"
                value="1"
                checked
              />
              <span className="ml-2">Physical lesson</span>
            </label>
          </div>
          <div className="ml-5">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="radio"
                value="1"
                defaultChecked
              />
              <span className="ml-2">Online lesson</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
