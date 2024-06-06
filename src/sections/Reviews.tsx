import Carousel from "../common/Carousel";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import kacyber2 from "../assets/reviews/image4.jpg";
import kacyber3 from "../assets/reviews/img54.jpg"
import kacyber4 from "../assets/reviews/img.jpg";

function Reviews() {
  const slides = [
    {
      src: kacyber3,
      text: '"Kobodrop has been a game changer for my daily financial dealings. It allows for quick and secure money transfers, which saves me a lot of time and effort."',
      name: "Thomas Morgan",
      country: "USA",
    },
    {
      src: "https://kacyber.africa/wp-content/uploads/2023/11/335A90361-scaled.jpg",
      text: '"Kobodrop has helped me send and receive money with little to no complications. It´s what everyone who wants to be on top of their money needs!"',
      name: "Haruka Sato",
      country: "Japan",
    },
    {
      src: kacyber2,
      text: '"Using Kobodrop has streamlined my financial transactions like never before. Highly recommended for anyone looking to simplify their finances!"',
      name: "Elena Rodriguez",
      country: "Spain",
    },
    {
      src: kacyber4,
      text: '"Kobodrop has been a game changer for my daily financial dealings. It allows for quick and secure money transfers, which saves me a lot of time and effort."',
      name: "Thomas Morgan",
      country: "USA",
    }
  ];
  return (
    <section
      id="reviews"
      className="flex max-w-7xl flex-col items-center justify-between px-8 py-20 lg:m-auto lg:flex-row lg:px-12"
    >
      <article className="mb-10 flex flex-col items-center justify-center lg:w-1/2 lg:items-start">
        <h2 className="mb-4 max-w-[16ch] text-center text-4xl font-semibold text-gray-800 lg:w-full lg:text-left">
          Join other thousands  with KaCyber Go App
        </h2>
        <StoreLinks type={BtnTypes.Standard} />
      </article>
      <Carousel slides={slides} />
    </section>
  );
}

export default Reviews;
