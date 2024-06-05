import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import HeroImage from "../assets/hero.png";
import phone2 from "../assets/iphone.png"
function Hero() {
  return (
    <section className="relative mt-4 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 sm:gap-16 md:my-0 md:h-[84.9vh] md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
      <div className="sm:w-full md:w-3/6">
        <h1 className="mx-auto mb-8 w-[12ch] text-center text-4xl font-semibold text-gray-800 sm:text-5xl md:mx-0 md:text-left">
          Book your Travel in a Digital way
        </h1>
        <p className="m-auto w-[34ch] text-center text-gray-500 md:m-0 md:text-left">
          Take Control of Your travel bookings, Anywhere with Kacyber Go App.
          Discover the smart way to travel Bus,Train and Ferry!
        </p>
        <StoreLinks type={BtnTypes.Standard} />
      </div>
      <div className="md:w-3/6 xl:mb-12 xl:overflow-hidden">
        <img
          className="right-0 m-auto w-72 xl:absolute xl:left-6 xl:right-0 xl:mt-32 xl:w-80"
          src={phone2}
          alt="Kobodrop app frame"
        />
        <img
          className="hidden rounded-2xl xl:flex"
          src={HeroImage}
          alt="A woman happily using Kobodrop"
        />
      </div>
    </section>
  );
}

export default Hero;