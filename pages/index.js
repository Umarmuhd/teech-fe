import Head from "next/head";
import Link from "next/link";

//components
import Navbar from "@/components/Navbars";
import TestimonialCard from "@/components/Cards/TestimonialCard";
import Accordion from "@/components/Accordion";
import Footer from "@/components/Footers";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero relative pt-16 pb-14 flex content-center justify-center min-h-screen bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:px-10">
            <div className="flex flex-col md:flex-row">
              <div className="left w-full lg:w-6/12 pt-6 text-center md:text-left md:py-16">
                <h1 className="text-blackText font-semibold font-head text-4xl">
                  Hire Expert Homeschooling Service
                </h1>
                <p className="mt-4 font-head text-lightBlack mb-7 text-xl">
                  Keep your kids learning at home with an online or in person
                  lessons taught by exceptional teachers
                </p>
                <div className="flex flex-col w-full md:flex-row md:w-5/6">
                  <Link href="/tutoring/request-tutor">
                    <a className="text-lg bg-primary px-7 py-4 text-white font-semibold rounded-lg md:mr-10 font-head mb-4 md:mb-0">
                      Hire home tutor
                    </a>
                  </Link>
                  <Link href="/auth/signup">
                    <a className="text-lg border border-primary px-7 py-4 text-primary font-semibold rounded-lg font-head">
                      Become a tutor
                    </a>
                  </Link>
                </div>
              </div>
              <div className="right md:pl-12 relative">
                <div className="hidden md:block absolute -left-10 top-2/4">
                  <TestimonialCard />
                </div>
                <div className="hidden md:block absolute -right-12 top-5">
                  <TestimonialCard />
                </div>
                <div className="hidden md:block absolute -right-12 -bottom-10">
                  <TestimonialCard />
                </div>

                <img
                  src="/images/hero.png"
                  alt="hero"
                  className="mx-auto w-full md:w-2/3"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="in-news font-head pb-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-midBlack text-center mb-2">
              Trusted by Our Awesome partners
            </h2>
            <p className="text-lightBlack text-center md:w-1/3 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ipsum sed dolor nobis sunt?
            </p>
            <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-4 xl:-mx-4 mt-6 md:mt-12 justify-center">
              <div className="my-2 px-2 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/5 xl:my-4 xl:px-4 xl:w-1/5">
                <img
                  src="/icons/brands/Google.svg"
                  alt="Google"
                  className="md:mr-20"
                />
              </div>

              <div className="my-2 px-2 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/5 xl:my-4 xl:px-4 xl:w-1/5">
                <img
                  src="/icons/brands/Amazon.svg"
                  alt="Amazon"
                  className="md:mr-20"
                />
              </div>

              <div className="my-2 px-2 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/5 xl:my-4 xl:px-4 xl:w-1/5">
                <img
                  src="/icons/brands/Facebook.svg"
                  alt="Facebook"
                  className="md:mr-20"
                />
              </div>

              <div className="my-2 px-2 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/5 xl:my-4 xl:px-4 xl:w-1/5">
                <img
                  src="/icons/brands/Netflix.svg"
                  alt="Netflix"
                  className="md:mr-20"
                />
              </div>

              <div className="my-2 px-2 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/5 xl:my-4 xl:px-4 xl:w-1/5">
                <img
                  src="/icons/brands/Mastercard.svg"
                  alt="Mastercard"
                  className=""
                />
              </div>

              <div className="my-2 px-2 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/5 xl:my-4 xl:px-4 xl:w-1/5">
                <img
                  src="/icons/brands/Whatsapp.svg"
                  alt="Whatsapp"
                  className="md:mr-20"
                />
              </div>

              <div className="my-2 px-2 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/5 xl:my-4 xl:px-4 xl:w-1/5">
                <img
                  src="/icons/brands/duet.svg"
                  alt="duet"
                  className="md:mr-20"
                />
              </div>

              <div className="my-2 px-2 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/5 xl:my-4 xl:px-4 xl:w-1/5">
                <img
                  src="/icons/brands/Walmart.svg"
                  alt="Walmart"
                  className="md:mr-20"
                />
              </div>

              <div className="my-2 px-2 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/5 xl:my-4 xl:px-4 xl:w-1/5">
                <img src="/icons/brands/Imck.svg" alt="Imck" className="" />
              </div>
            </div>
          </div>
        </section>
        <section className="why-us pt-10 pb-10 md:pt-20 md:pb-16 font-head">
          <div className="hidden md:block relative">
            <img
              src="/icons/bg-element.svg"
              alt="background"
              className="absolute -top-16"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="left mb-7 text-center md:w-9/20 md:py-20 md:mb-0 md:text-left">
                <h2 className="text-3xl font-semibold text-midBlack mb-2">
                  Why Choose Us?
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  distinctio vero ex quas impedit, delectus adipisci? Incidunt
                  laboriosam nostrum hic eum maxime, obcaecati officiis ducimus
                  similique, adipisci animi ad aut? lorem ipsum dolor sit amen
                  consector
                </p>
                <div className="pt-6">
                  <Link href="/tutoring/request-tutor">
                    <a className="text-lg bg-primary px-7 py-4 text-white font-semibold rounded-lg md:mr-10 font-head">
                      Hire home tutor
                    </a>
                  </Link>
                </div>
              </div>
              <div className="right md:w-1/2">
                <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
                  <div className="my-2 w-full text-center md:text-left overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-3 md:w-1/2 lg:my-2 lg:px-3 lg:w-1/2 xl:my-2 xl:px-3 xl:w-1/2 shadow-sm py-3 px-3">
                    <div className="flex justify-center mb-2 md:block md:mb-0">
                      <img
                        src="/icons/professional.svg"
                        alt="professionals tutor"
                      />
                    </div>
                    <h3 className="text-xl mb-2 font-semibold">
                      Highly Qualified Tutors
                    </h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nostrum ex dolore natus ratione cumque, modi quasi!
                      Minima, non!
                    </p>
                  </div>

                  <div className="my-2 w-full text-center md:text-left overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-3 md:w-1/2 lg:my-2 lg:px-3 lg:w-1/2 xl:my-2 xl:px-3 xl:w-1/2 shadow-sm py-3 px-3">
                    <div className="flex justify-center mb-2 md:block md:mb-0">
                      <img src="/icons/safeguard.svg" alt="safe and secure" />
                    </div>

                    <h3 className="text-xl mb-2 font-semibold">
                      Safe and Secured
                    </h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nostrum ex dolore natus ratione cumque, modi quasi!
                      Minima, non!
                    </p>
                  </div>

                  <div className="my-2 w-full text-center md:text-left overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-3 md:w-1/2 lg:my-2 lg:px-3 lg:w-1/2 xl:my-2 xl:px-3 xl:w-1/2 shadow-sm py-3 px-3">
                    <div className="flex justify-center mb-2 md:block md:mb-0">
                      <img
                        src="/icons/tailored.svg"
                        alt="tailored for your child"
                      />
                    </div>

                    <h3 className="text-xl mb-2 font-semibold">
                      Tailored for your child
                    </h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nostrum ex dolore natus ratione cumque, modi quasi!
                      Minima, non!
                    </p>
                  </div>

                  <div className="my-2 w-full text-center md:text-left overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-3 md:w-1/2 lg:my-2 lg:px-3 lg:w-1/2 xl:my-2 xl:px-3 xl:w-1/2 shadow-sm py-3 px-3">
                    <div className="flex justify-center mb-2 md:block md:mb-0">
                      <img
                        src="/icons/satisfaction.svg"
                        alt="satisfaction Guaranteed"
                      />
                    </div>

                    <h3 className="text-xl mb-2 font-semibold">
                      100% Satisfaction Guaranteed
                    </h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nostrum ex dolore natus ratione cumque, modi quasi!
                      Minima, non!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative">
            <img
              src="/icons/bg-element.svg"
              alt="background"
              className="absolute right-0 -bottom-32"
            />
          </div>
        </section>
        <section className="how pt-10 pb-10 md:pt-20 md:pb-16 font-head">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-midBlack mb-2 text-center">
              How it Works
            </h2>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 min-h-48 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-brBg w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="flex justify-center mb-2">
                      <img src="/icons/01.svg" alt="step 1" />
                    </div>
                    <h6 className="text-xl font-semibold">Place a request</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 min-h-48 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-brBg w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="flex justify-center mb-2">
                      <img src="/icons/02.svg" alt="step 2" />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Get most qualified tutor
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 min-h-48 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-brBg w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto text-center">
                    <div className="flex justify-center mb-2">
                      <img src="/icons/03.svg" alt="step 3" />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Watch your kids improved
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="more pt-10 pb-10 md:pt-20 md:pb-16 font-head">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:w-9/12 mx-auto justify-between md:flex-row">
              <div className="left md:w-12/25 relative z-10">
                <img
                  src="/images/woman.jpg"
                  alt="happy mother"
                  className="relative z-10"
                />
                <img
                  src="/icons/blue-square.svg"
                  alt="square"
                  className="w-40 absolute -left-16 -bottom-16 z-0"
                />
              </div>
              <div className="right mt-20 md:mt-0 md:w-12/25">
                <h2 className="text-3xl font-semibold text-midBlack mb-2">
                  We help your kids achieve unbelievable results
                </h2>
                <p className="text-lightBlack">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                  quidem distinctio voluptatum nesciunt quia doloremque id velit
                  esse, ipsa animi odio mollitia? Mollitia, officiis minima?
                </p>
                <div className="pt-6">
                  <Link href="/tutoring/request-tutor">
                    <a className="text-lg bg-primary px-7 py-4 text-white font-semibold rounded-lg md:mr-10 font-head">
                      Hire home tutor
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative">
            <img
              src="/icons/bg-element.svg"
              alt="background"
              className="absolute right-0 -bottom-32"
            />
          </div>
        </section>
        <section className="faq pt-10 pb-10 md:pt-20 md:pb-16 font-head">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between md:flex-row">
              <div className="left md:w-12/25 pb-5">
                <h2 className="text-3xl text-center font-semibold text-midBlack mb-2 md:text-left">
                  Frequently Asked Questions
                </h2>
                <p className="text-lightBlack">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                  quidem distinctio voluptatum nesciunt quia doloremque id velit
                  esse, ipsa animi odio mollitia? Mollitia, officiis minima?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vero unde sint!
                </p>
              </div>
              <div className="right md:w-1/2">
                <ul className=" list-disc pl-4">
                  <li className="mb-3">
                    <Accordion
                      title="Lorem ipsum dolor sit amet consectetur."
                      info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                exercitationem, provident quidem molestias repudiandae nobis
                facere autem itaque eius aliquam."
                    />
                  </li>
                  <li className="mb-3">
                    <Accordion
                      title="Lorem ipsum dolor sit amet consectetur."
                      info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                exercitationem, provident quidem molestias repudiandae nobis
                facere autem itaque eius aliquam."
                    />
                  </li>
                  <li className="mb-3">
                    <Accordion
                      title="Lorem ipsum dolor sit amet consectetur."
                      info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                exercitationem, provident quidem molestias repudiandae nobis
                facere autem itaque eius aliquam."
                    />
                  </li>
                  <li className="mb-3">
                    <Accordion
                      title="Lorem ipsum dolor sit amet consectetur."
                      info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                exercitationem, provident quidem molestias repudiandae nobis
                facere autem itaque eius aliquam."
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="banner bg-blackText font-head py-14 md:py-24 mb-10 md:mb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-2 md:w-2/4 mx-auto text-white text-center">
              Over 2900 Parents trust Teech and have seen improvement in there
              kids
            </h2>
            <div className="pt-6 text-center">
              <Link href="/tutoring/request-tutor">
                <a className="text-lg bg-primary px-7 py-4 text-white font-semibold rounded-lg md:mr-10 font-head">
                  Hire home tutor
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
