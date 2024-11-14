import React from 'react';
import phone from '../../assets/paybills.png';
import './product.css';
import { TiTick } from "react-icons/ti";
const Product = () => {
  return (
    <div className="product mt-10" id='products'>
      <p className="text-center">Brij Technologies Inc.</p>
      <h2 className="text-center text-3xl">Game Changing Financial Products</h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img src={phone} className="productimage" alt="PayBills.Africa" />
        </div>
        <div>
          <h3>PayBills.Africa</h3>
          <p>
            PayBills.Africa: This platform combines the networks of the continent’s leading telcos,
            banks, and fintechs to form the largest merchant repository in Africa,
            categorized by country and industry for global ease of access.<br/>
            The platform allows African and global users to make payments to any merchant within the ecosystem with one
            touch ease on its web or mobile app while avoiding currency conversion fees.
            Payments are made through the PayBills.Africa portal and automatically processed by Brij’s telco partners.
          </p>
          <h5 className='mt-4'>Key Services</h5>
            <div className='flex flex-rows mt-4  gap-8'>
            <ul >
                <li className='flex m-2'><TiTick  style={{color:'green'}}/>Bill Payment</li>
                <li className='flex m-2'><TiTick  style={{color:'green'}}/>Request Payment</li>
                <li className='flex m-2'><TiTick  style={{color:'green'}}/>Send money</li>
                <li className='flex m-2'><TiTick  style={{color:'green'}}/>Api Integration </li>
            </ul>
             <ul>
                <li className='flex m-2'><TiTick  style={{color:'green'}}/>Accept Global Payments</li>
                <li className='flex m-2'><TiTick  style={{color:'green'}}/>Business Invoicing</li>
                <li className='flex m-2'><TiTick  style={{color:'green'}}/>e-Commerce</li>
                <li className='flex m-2'><TiTick  style={{color:'green'}}/>Merchant Portal</li>
             </ul>
            </div>
            
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img src={phone} className="productimage" alt="PayBills.Africa" />
        </div>
        <div>
          <h3>BrijX.Africa</h3>
          <p>
          BrijX: The company’s proprietary BrijX platform is a digital marketplace which enables Africans to swap currencies in real time, letting them access currency needed to pay bills or transfer money abroad while setting their own conversion rates. 
          Users conducting cross-border transactions in separate currencies would maintain a multiple currency digital wallet allowing them to conduct simplified exchanges with other users. Crucially, 
          person-to-person exchanges help Africans to circumvent the need for Forex, 
          allowing Africans to swap currencies at reduced transaction costs without the need for USD, 
          which is very scarce in most markets. 
          Africans using Paybills.Africa will have access to this platform.
          </p>
          <h5 className='mt-4'>Key Services</h5>
            <div className='flex flex-rows mt-4  gap-8'>
            <ul >
                <li className='flex m-2'><TiTick  style={{color:'green'}}/>Pay Bills</li>
                <li className='flex m-2'><TiTick  style={{color:'green'}}/>Send money</li>
                <li className='flex m-2'><TiTick  style={{color:'green'}}/>Swap African Currencies</li>
            </ul>
             <ul>
                <li className='flex m-2'><TiTick  style={{color:'green'}}/>Multi Currency Wallet</li>
                <li className='flex m-2'><TiTick  style={{color:'green'}}/>e-Commerce </li>
                <li className='flex m-2'><TiTick  style={{color:'green'}}/>Merchant Portal</li>
             </ul>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Product;
