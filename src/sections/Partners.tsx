import parnter from '../assets/partners.png'
function Partners() {
  return (
    <div id="partners" className="flex flex-col bg-gray-50 py-10">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800 text-center">
          Our Partners
        </h2>
        <img src={parnter} width={900} height={800} className='mx-auto' />
        <button className="p-4 bg-yellow-500 mx-auto w-[200px] text-white rounded-full mt-4 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Become a Partner
        </button>
    </div>
  ); 
}

export default Partners;
