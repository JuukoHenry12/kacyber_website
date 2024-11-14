import africa from '../../src/assets/map.png'
function Reviews() {

  return (
    <section
      id="reviews"
      className="flex flex-col mx-auto "
    > 
      <p className="text-center">Brij Technologies Inc.</p>
      <h2 className="text-2xl text-center"><br/>
      :brij Across Africa</h2>
      <img src={africa} width={800} height={600} className='mx-auto' alt='not found' />
      <p className='text-center'>Our solutions are recognition that the African continent must embrace all the possibilities offered by digital technology for driving societal transformations in a <br/>globalized world where information is the currency of exchange. More importantly, these solutions represent powerful tools of empowerment for local <br/> entrepreneurs.
      </p>
    </section>
  );
}

export default Reviews;
