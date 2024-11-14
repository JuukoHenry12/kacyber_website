import logo from '../../assets/brij-logo-round.png'
const Contact = () => {
  return (
    <div id="contact">
        <img src={logo} width={300} height={300} className='mx-auto' />
         <p className='text-center'>Brij Technologies Inc.</p>
        <h2 className='text-center text-2xl'>
        Contact :Brij</h2>
        <h3 className='text-center'>HEAD OFFICEE</h3>
        <p className='text-center'>Address: Brij Technologies Inc. , Kofisi Building, 105 Riverside Drive 11th Floor,<br/>
        Riverside Square, Nairobi. KENYA</p>
        <p className='text-center m-2 p-2'>Phone: +254 020 213 1729<br/>
         Email: info@brij.africa</p>
         <p className='text-center m-2 p-2'>OFFICE LOCATIONS<br/>
         Botswana | Ghana | Kenya . | Nigeria | Rwanda | Tanzania | Uganda | United States </p>
    </div>
  )
}

export default Contact