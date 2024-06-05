import yopayments from "../assets/logo-wall/yo.png";
import Mtn from "../assets/logo-wall/mtn.png";
import Airtel from "../assets/logo-wall/airtel.png";
import NCBA from "../assets/logo-wall/ncba.png";
import LogoWall from "../common/LogoWall";
function Partners() {
  return (
    <div id="partners" className="flex flex-col bg-gray-50 py-10">
      <article className="mb-10 w-full px-8 text-center lg:px-12">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Our Partners
        </h2>
        <p>
          Connect your other accounts to Kacyber seamlessly. KaCyber supports
          4+
          <br />
          integrations with other payment platforms like MTN, Yopayments,
          NCBA bank and others
        </p>
      </article>
      <div className="xl:flex xl:justify-center">
        <LogoWall
          src1={Airtel}
          src2={yopayments}
          src3={Mtn}
          alt1="Airtel logo"
          alt2="Mastercard logo"
          alt3="Mtn logo"
        />
        <img
          src={NCBA}
          alt="Airtel logo"
          width={150}
          height={150}
        />
        <br />
      </div>
    </div>
  );
}

export default Partners;
