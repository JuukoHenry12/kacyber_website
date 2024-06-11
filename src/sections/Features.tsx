import React, { useEffect } from "react";

function Features() {
  const [users, setUsers] = React.useState(0);
  const [transactions, setTransactions] = React.useState(0);
  const [activeUsers, setActiveUsers] = React.useState(0);
  const [bookings, setBookings] = React.useState(0);
  const [appDownloads, setAppDownloads] = React.useState(0);

  useEffect(() => {
    const increment = 1;
    const duration = 2000;
    const steps = duration / increment;
    const targetUsers = 11;
    const targetTransactions = 54.5;
    const targetActiveUsers = 150;
    const targetBookings = 1.1;
    const targetAppDownloads = 200;

    const incrementUsers = targetUsers / steps;
    const incrementTransactions = targetTransactions / steps;
    const incrementActiveUsers = targetActiveUsers / steps;
    const incrementBookings = targetBookings / steps;
    const incrementAppDownloads = targetAppDownloads / steps;

    let counter = 0;

    const interval = setInterval(() => {
      counter++;
      setUsers((prev) => Math.min(prev + incrementUsers, targetUsers));
      setTransactions((prev) => Math.min(prev + incrementTransactions, targetTransactions));
      setActiveUsers((prev) => Math.min(prev + incrementActiveUsers, targetActiveUsers));
      setBookings((prev) => Math.min(prev + incrementBookings, targetBookings));
      setAppDownloads((prev) => Math.min(prev + incrementAppDownloads, targetAppDownloads));

      if (counter >= steps) {
        clearInterval(interval);
      }
    }, increment);

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <section className="flex flex-col gap-10 px-4 pt-10 sm:px-6 md:px-8 lg:px-12 xl:m-auto xl:pt-20">
        <article className="m-auto w-full text-center text-gray-500 md:m-0 md:w-full">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 sm:text-3xl md:text-4xl">
            Make every Booking Count
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            Book smarter, Pay for bus trips using the KaCyer Go Card, other transport fees, and daily commodities.
          </p>
        </article>
      </section>
      <div className="bg-blue-50 py-8">
        <div className="counter-section grid grid-cols-2 gap-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="counter-item">
            <p className="text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">{users.toFixed(1)}M</p>
            <h3 className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Tickets Processed</h3>
          </div>
          <div className="counter-item">
            <p className="text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">{transactions.toFixed(1)}M</p>
            <h3 className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Transaction Value</h3>
          </div>
          <div className="counter-item">
            <p className="text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">{bookings.toFixed(1)}K</p>
            <h3 className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Routes Covered</h3>
          </div>
          <div className="counter-item">
            <p className="text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">{activeUsers.toFixed(1)}</p>
            <h3 className="text-xs font-medium sm:text-sm md:text-base lg:text-lg">Bus Coaches</h3>
          </div>
      
        </div>
      </div>
    </div>


  );
}

export default Features;
