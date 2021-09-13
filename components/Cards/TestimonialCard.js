export default function TestimonialCard() {
  return (
    <div className="bg-midBlack rounded-lg md:w-72 font-head">
      <div className="py-6 px-4">
        <div className="profile flex mb-2">
          <img src="/images/testimonial.png" alt="parent" />
          <div className="name-n-role pl-2">
            <p className="name font-semibold text-white mb-2 text-xs">
              Helen Kenneth
            </p>
            <p className="role text-xxs text-white">Parent - 40 Lessons</p>
          </div>
        </div>
        <div className="test-text mb-2">
          <p className="text-white text-xxs leading-4 font-semibold">
            Teech is very good and reliable educational organization that works
            remotely and ensure adequate customer satisfaction
          </p>
        </div>
        <div className="rating flex">
          <img src="/icons/star.svg" alt="rate" className="mr-2" />
          <img src="/icons/star.svg" alt="rate" className="mr-2" />
          <img src="/icons/star.svg" alt="rate" className="mr-2" />
          <img src="/icons/star.svg" alt="rate" className="mr-2" />
          <img src="/icons/star.svg" alt="rate" className="mr-2" />
        </div>
      </div>
    </div>
  );
}
