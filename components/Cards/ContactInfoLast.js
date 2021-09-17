export default function ContactInfoLast() {
  return (
    <div className="form">
      <div className="mx-auto w-full px-2 md:px-0 md:w-11/12">
        <h2 className="text-2xl font-semibold mb-4 text-primary font-head">
          Personal Information
        </h2>
        <p className="text-lg mb-5 text-midBlack">
          This is used to contact you about your lessons
        </p>
      </div>

      <div className="container px-2 py-4 w-full md:w-11/12 mx-auto mb-5">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="w-full md:w-9/20">
            <div className="mb-4 md:mb-6">
              <label
                htmlFor="firstName"
                className="text-base font-medium text-gray-900 block mb-2 text-left"
              >
                First name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-blue-200 focus:border-blue-400 block w-full p-2.5 focus:outline-none focus:ring"
                placeholder="First Name"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>{" "}
            <div className="mb-4 md:mb-6">
              <label
                htmlFor="phone"
                className="text-base font-medium text-gray-900 block mb-2 text-left"
              >
                Active Phone number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-blue-200 focus:border-blue-400 block w-full p-2.5 focus:outline-none focus:ring"
                placeholder="080123456789"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>{" "}
          </div>
          <div className="w-full md:w-9/20">
            <div className="mb-4 md:mb-6">
              <label
                htmlFor="lastName"
                className="text-base font-medium text-gray-900 block mb-2 text-left"
              >
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-blue-200 focus:border-blue-400 block w-full p-2.5 focus:outline-none focus:ring"
                placeholder="Last name"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 md:mb-6">
              <label
                htmlFor="referral"
                className="text-base font-medium text-gray-900 block mb-2 text-left"
              >
                How did you hear about us?
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
    </div>
  );
}
