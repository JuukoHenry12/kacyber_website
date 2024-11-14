import logo from '../../../src/assets/3phones.jpg';
import './aboutus.css'
const AboutUs = () => {
  return (
    <section className="flex flex-row gap-4 px-4 pt-10 h-screen" id='aboutus'>
      {/* Image Container */}
      <div className="flex justify-center w-2/4">
        <img
          src={logo}
          alt="Brij Phones"
          className='phoneimag'
        />
      </div>
      <div className="max-w-full w-2/4">
        <h2 className="text-3xl font-bold mt-8 ">About Us</h2>
         <div className='content'>
          <p className="mt-6 text-sm text-gray-600">
            Brij specializes in consumer aggregation and financial intermediation,
            providing cross-border bill payment and International Money Transfer Operator services. Its infrastructure is built on partnerships with the continent’s leading telcos, banks, fintechs, and other aggregators. These providers grant Brij exclusive access to the merchants and individuals that comprise their networks of subscribers, allowing Brij to create digital “highways” connecting their merchants and enabling full interoperability between networks.
          </p>
          <p className="mt-6 text-sm text-gray-600">
            The Brij solutions include a unified merchant repository and a proprietary currency swap marketplace. Users will be able to pay their bills to merchants across the continent on a single platform, as easily as they would send a text message. Partner telcos and financial intermediaries profit from its revenue sharing system, which offers a collective return for each transaction on the Brij platform. Additionally, the currency swap function will help ease demand for Forex reserves, reducing the pressure on limited supplies of hard currency, including U.S. dollars (USD).
          </p>
         </div>
      </div>
    </section>
  );
};

export default AboutUs;
