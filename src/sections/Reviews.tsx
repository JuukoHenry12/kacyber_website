import Carousel from "../common/Carousel";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import kacyber2 from "../assets/reviews/image4.jpg";
import kacyber3 from "../assets/reviews/img54.jpg"
import kacyber4 from "../assets/reviews/img.jpg";
// import huawei from '../assets/huawei.png'
function Reviews() {
  const slides = [
    {
      src: kacyber3,
      text: '"KaCyber has been a game changer for my daily financial dealings. It allows for quick and secure money transfers, which saves me a lot of time and effort."',
      name: "Thomas Morgan",
     
    },
    {
      src: "https://kacyber.africa/wp-content/uploads/2023/11/335A90361-scaled.jpg",
      text: '"KaCyber has helped  paying for bus trips using the kacyber Card. It´s what everyone who wants to be on top of their money needs!"',
      name: "Haruka Sato",
    },
    {
      src: kacyber2,
      text: '"Using Kacyber has streamlined the  transport sector like never before. Highly recommended for anyone looking to simplify tranport travels"',
      name: "Elena Rodriguez",
    
    },
    {
      src: kacyber4,
      text: '"KaCyber has been a game changer for my daily financial dealings. It allows for quick and secure money transfers, which saves me a lot of time and effort."',
      name: "Thomas Morgan",
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
        <div className="flex flex-row items-center">
          <StoreLinks type={BtnTypes.Standard} />
        </div>
       </article>
      <Carousel slides={slides} />
    </section>
  );
}

export default Reviews;
