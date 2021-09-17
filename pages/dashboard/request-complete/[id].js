//page layout
import Dashboard from "@/layouts/Dashboard";

export default function RequestCompleted() {
  return (
    <>
      <div className="pt-16 md:pt-24 font-head">
        <h1 className="text-4xl mb-6 text-center text-primary font-extrabold">
          TEECH
        </h1>
        <div className="grid place-content-center mb-14">
          <div className="success px-4 md:px-8 md:w-8/12 mx-auto shadow-lg py-5">
            <h2 className="text-center mb-4 text-blackText font-semibold text-2xl">
              Thank you for placing a request!
            </h2>
            <p className="text-center text-midBlack text-xl mb-10 w-9/12 mx-auto">
              I'm Joan, a Customer Service Agent at Teech. I’m here to ensure
              you get the best experience working with us
            </p>
            <hr />
            <h3 className="text-2xl text-blackText font-bold mt-8 mb-5">
              What Next?
            </h3>

            <div className="flex justify-between mb-8">
              <div className="md:w-31/100 w-full py-5">
                <span className="rounded-full border-solid border-4 flex justify-center items-center w-10 h-10 mb-4">
                  1
                </span>
                <h4 className="text-midBlack font-semibold mb-4 text-lg">
                  Call from Me
                </h4>
                <p className="text-lightBlack">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                  incidunt, error porro cum tempora, perspiciatis.
                </p>
              </div>

              <div className="md:w-31/100 w-full py-5">
                <span className="rounded-full border-solid border-4 flex justify-center items-center w-10 h-10 mb-4">
                  2
                </span>
                <h4 className="text-midBlack font-semibold mb-4 text-lg">
                  Get a list of Tutors
                </h4>
                <p className="text-lightBlack">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                  incidunt, error porro cum tempora, perspiciatis.
                </p>
              </div>
              <div className="md:w-31/100 w-full py-5">
                <span className="rounded-full border-solid border-4 flex justify-center items-center w-10 h-10 mb-4">
                  3
                </span>
                <h4 className="text-midBlack font-semibold mb-4 text-lg">
                  Pay and Begin Lessons
                </h4>
                <p className="text-lightBlack">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                  incidunt, error porro cum tempora, perspiciatis.
                </p>
              </div>
            </div>
            <hr />

            <h3 className="text-2xl text-blackText font-bold mt-8 mb-5">
              Have questions? Feel free to reach out to me
            </h3>
            <div className="flex mb-4">
              <p className="font-medium mr-5 flex">
                <img src="/icons/mail.svg" alt="..." className="mr-2" />
                <span className="text-midBlack">info@teech.com</span>
              </p>
              <p className="font-medium mr-5 flex">
                <img src="/icons/phone.svg" alt="..." className="mr-2" />
                <span className="text-midBlack">info@teech.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

RequestCompleted.layout = Dashboard;
