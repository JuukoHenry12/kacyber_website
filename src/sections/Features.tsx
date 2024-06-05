import React, { useState, useEffect } from "react";

function Features() {
  const [users, setUsers] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [bookings, setBookings] = useState(0);
  const [appDownloads, setAppDownloads] = useState(0);

  useEffect(() => {
    const increment = 1;
    const duration = 2000;
    const steps = duration / increment;
    const targetUsers = 100;
    const targetTransactions = 10;
    const targetActiveUsers = 30;
    const targetBookings = 10;
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
      <section
        id="features"
        className="flex max-w-full flex-col gap-10 px-8 pt-10 lg:px-12 xl:m-auto xl:pt-20"
      >
        <article className="m-auto w-full text-center text-gray-500 md:m-0 md:w-full">
          <h2 className="mb-4 text-4xl font-semibold text-gray-800">
            Make every Booking Count
          </h2>
          <p>
            Book smarter, Pay for bus trips, other transport fees and daily commodities,
          </p>
        </article>
      </section>
      <div className="bg-blue-50">
        <div className="counter-section">
          <div className="counter-item">
            <p>{users.toFixed(1)}k</p>
            <h3>Users</h3>
          </div>
          <div className="counter-item">
            <p>{transactions.toFixed(1)}M</p>
            <h3>Transactions</h3>
          </div>
          <div className="counter-item">
            <p>{bookings.toFixed(1)}M</p>
            <h3>Bookings</h3>
          </div>
          <div className="counter-item">
            <p>{activeUsers.toFixed(1)}M</p>
            <h3>Active Users</h3>
          </div>
          <div className="counter-item">
            <p>{appDownloads.toFixed(1)}K</p>
            <h3>App Downloads</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
