import { FaArrowDown, FaArrowUp, FaArrowRight, FaWallet, FaMoneyBill, FaPhone } from "react-icons/fa";

function Features() {
  return (
    <div className="h-screen">
      <section className="flex flex-col gap-10 px-4 pt-10 sm:px-6 md:px-8 lg:px-12 xl:m-auto xl:pt-20 ">
        <article className="m-auto w-full text-center text-gray-500 md:m-0 md:w-full">
          <span className="title">Brij Technologies Inc.</span>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 sm:text-3xl md:text-4xl">
            Connecting African Businesses With the World
          </h2>
        </article>
      </section>
      <div className="bg-white  mx-auto">
        <div className="counter-section grid grid-cols-2 grid-rows-2 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          <div className="counter-item text-black flex flex-col items-center text-center">
            <FaArrowUp style={{ color: '#F7A916' }} size={60} className="mb-2" />
            <h3 className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">
              Pay Bills Across Africa
            </h3>
            <p className="text-sm mt-2">
              Seamlessly create a multi-currency wallet and <br /> swap different currencies at
              the convenience of <br /> your laptop or mobile phone.
            </p>
          </div>

          <div className="counter-item text-black flex flex-col items-center text-center">
            <FaArrowDown style={{ color: '#F7A916' }} size={60} />
            <h3 className="text-xs text-black font-medium sm:text-sm md:text-base lg:text-lg">Request Payments</h3>
            <p>
              Using PayBills.Africa you can easily request <br /> payments from anyone, anywhere in the world <br />
              and get paid directly into your bank account.
            </p>
          </div>

          <div className="counter-item text-black flex flex-col items-center text-center">
            <FaArrowRight style={{ color: '#F7A916' }} size={60} />
            <h3 className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Send Money</h3>
            <p>Send and request local currency swaps easily and <br /> securely with a simple Tap-Tap-Go.</p>
          </div>
        </div>

        <div className="counter-section grid grid-cols-3 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
          <div className="counter-item text-black flex flex-col items-center text-center">
            <FaWallet style={{ color: '#F7A916' }} size={60} />
            <h3 className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Multi-currency Wallets to Power
              <br /> Currency Barter
            </h3>
            <p>
              Seamlessly create a multi-currency wallet and <br /> Break free from the need to access Forex for every
              <br /> cross-border transaction. Get greater access to <br/> intra-Africa payments.
            </p>
          </div>

          <div className="counter-item text-black flex flex-col items-center text-center">
            <FaMoneyBill style={{ color: '#F7A916' }} size={60} className="mb-4" />
            <h3 className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">From local to global</h3>
            <p className="text-sm mt-2">
              Grow your business with customers globally and <br />
              get paid in your local currency. No need for FX.
            </p>
          </div>

          <div className="counter-item text-black flex flex-col items-center text-center">
            <FaPhone style={{ color: '#F7A916' }} size={60} className="mb-4" />
            <h3 className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Easy Access</h3>
            <p className="text-sm mt-2">
              Our platform has been designed to make paying bills, <br />
              requesting payments, and sending money <br />
              simple, safe & secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
