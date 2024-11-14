import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Hero() {
  return (
    <section className="relative w-full" id="hero">
      {/* Full-width Carousel */}
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
        showStatus={false}
        swipeable
        stopOnHover={false}
        dynamicHeight={false}
        showIndicators={false}
        className="w-full"
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <button
              onClick={clickHandler}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black"
            >
              ❮
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <button
              onClick={clickHandler}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black"
            >
              ❯
            </button>
          )
        }
      >
        {/* Slide 1 */}
        <div className="flex h-[85vh] items-center justify-center ">
          <div className="text-center ">
            <h4 className="mb-4 text-5xl font-semibold text-yellow-600 animate-slideDown">PayBills Uganda</h4>
            <h5 className="text-xl text-white">Pay Bills From Anywhere To Anyone In Africa.</h5>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-white  delay-100">
              We’re on a mission to build the de-facto intra-Africa payment network with
              real-time payments infrastructure that connects African economies.
            </p>
            <button className="bg-yellow-600 p-4 m-4 rounded-full">
              Discover PayBill
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex h-[85vh] items-center justify-center animate-slideDown ">
          <div className="text-center ">
            <h4 className="mb-4 text-5xl font-semibold text-yellow-600 animate">Seamless Payments</h4>
            <h5 className="text-xl text-white delay-100">Fast, secure, and reliable payment solutions.</h5>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto  delay-100">
              Our platform ensures your transactions are completed in real-time, with
              transparency and efficiency across Africa.
            </p>
              <button className="bg-yellow-600 p-4 m-4 rounded-full">
                Discover PayBill
              </button>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default Hero;
