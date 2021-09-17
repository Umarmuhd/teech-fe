export default function AboutChildLast() {
  return (
    <div className="form">
      <h2 className="text-center text-2xl font-semibold mb-4">
        Tell us about your child's need
      </h2>
      <p className="text-center text-lg mb-5">
        What's your goal and what subjects do your kids need help with?
      </p>

      <div className="container border px-4 py-4 rounded w-11/12 mx-auto mb-5">
        <h3 className="text-lg mb-4">For Child 1 in Nursery 2</h3>
        <div className="flex justify-between">
          <div className="w-9/20">
            <div className="mb-6">
              <label className="text-base font-medium text-gray-900 block mb-2 text-left">
                What's your goal for this child?
              </label>
              <select className="form-select block w-full mt-1 py-2 px-4 rounded border">
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>{" "}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-base font-medium text-gray-900 block mb-2 text-left"
              >
                What subjects?
              </label>
              <select className="form-select block w-full mt-1 py-2 px-4 rounded border">
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>
          <label className="block w-9/20">
            <span className="text-gray-700 mb-4">
              Tell us a bit about this child
            </span>
            <textarea
              className="form-textarea mt-1 block w-full border rounded px-4 py-3"
              rows="5"
              placeholder="Enter some long form content."
            ></textarea>
          </label>
        </div>
      </div>
      <div className="block w-11/12 mx-auto px-4 mb-5">
        <span className="text-gray-900 text-base">
          Do you prefer a male or female tutor?
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
              <span className="ml-2">Male</span>
            </label>
          </div>
          <div className="ml-5">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="radio"
                value="1"
                checked
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
          <div className="ml-5">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="radio"
                value="1"
                checked
              />
              <span className="ml-2">Any gender is fine</span>
            </label>
          </div>
        </div>
      </div>
      <div className="block w-11/12 mx-auto px-4">
        <span className="text-gray-900">
          What curriculum is used at your child's school?
        </span>
        <div className="mt-2 flex">
          <div className="mr-3">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" checked />
              <span className="ml-2">Nigerian</span>
            </label>
          </div>
          <div className="mr-3">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">British</span>
            </label>
          </div>
          <div className="mr-3">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">American</span>
            </label>
          </div>
          <div className="mr-3">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">IPC</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Not sure</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
