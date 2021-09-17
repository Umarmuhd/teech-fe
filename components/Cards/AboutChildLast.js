export default function AboutChildLast() {
  return (
    <div className="form px-2">
      <div className="mx-auto w-full md:w-11/12">
        <h2 className="text-2xl font-semibold mb-4 text-primary font-head">
          Tell us about your child's need
        </h2>
        <p className="text-lg mb-5 text-midBlack">
          What's your goal and what subjects do your kids need help with?
        </p>
      </div>

      <div className="container md:border md:px-4 md:py-4 md:rounded w-full md:w-11/12 mx-auto mb-5">
        <h3 className="text-lg mb-4">For Child 1 in Nursery 2</h3>
        <div className="flex justify-between flex-col md:flex-row">
          <div className="w-full md:w-9/20">
            <div className="mb-4 md:mb-6">
              <label className="text-base font-medium text-gray-900 block mb-2 text-left">
                What's your goal for this child?
              </label>
              <select className="form-select block w-full mt-1 py-3 px-2 rounded border">
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-base font-medium text-gray-900 block mb-2 text-left"
              >
                What subjects?
              </label>
              <select className="form-select block w-full mt-1 py-3 px-2 rounded border">
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>
          <label className="block w-full md:w-9/20">
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
      <div className="block w-full md:w-11/12 mx-auto md:px-4 mb-5">
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
      <div className="block w-full md:w-11/12 mx-auto md:px-4">
        <span className="text-blackText">
          What curriculum is used at your child's school?
        </span>

        <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1 mt-2">
          <div class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/6 lg:my-1 lg:px-1 lg:w-1/5 xl:my-1 xl:px-1 xl:w-1/5">
            <div className="mr-3">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" checked />
                <span className="ml-2 text-midBlack">Nigerian</span>
              </label>
            </div>
          </div>

          <div class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/6 lg:my-1 lg:px-1 lg:w-1/5 xl:my-1 xl:px-1 xl:w-1/5">
            <div className="mr-3">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-midBlack">British</span>
              </label>
            </div>
          </div>

          <div class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/6 lg:my-1 lg:px-1 lg:w-1/5 xl:my-1 xl:px-1 xl:w-1/5">
            <div className="mr-3">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-midBlack">American</span>
              </label>
            </div>
          </div>

          <div class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/6 lg:my-1 lg:px-1 lg:w-1/5 xl:my-1 xl:px-1 xl:w-1/5">
            <div className="mr-3">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-midBlack">IPC</span>
              </label>
            </div>
          </div>

          <div class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/6 lg:my-1 lg:px-1 lg:w-1/5 xl:my-1 xl:px-1 xl:w-1/5">
            <div>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-midBlack">Not sure</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
