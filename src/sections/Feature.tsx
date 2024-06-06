import React from 'react';
import kacyber from "../assets/juko.png"
import kacyber2 from "../assets/reviews/image5.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Feature = () => {
    const [activeTab, setActiveTab] =React.useState('dashboard');

    const handleTabClick = (tab:any) => {
        setActiveTab(tab);
    };

    return (
        <div className="max-w-7xl mx-auto mt-2 md:px-[50px] ">
            <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
                <ul className="flex justify-center flex-wrap -mb-px" id="myTab" role="tablist">
                    <li className="mr-12" role="presentation">
                        <button
                            className={`inline-block text-gray-900 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 ${activeTab === 'profile' ? 'active' : ''}`}
                            id="profile-tab"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected={activeTab === 'profile'}
                            onClick={() => handleTabClick('profile')}
                        >
                            Card Payments
                        </button>
                    </li>
                    <li className="mr-8" role="presentation">
                        <button
                            className={`inline-block text-gray-900 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 ${activeTab === 'dashboard' ? 'active' : ''}`}
                            id="dashboard-tab"
                            type="button"
                            role="tab"
                            aria-controls="dashboard"
                            aria-selected={activeTab === 'dashboard'}
                            onClick={() => handleTabClick('dashboard')}
                        >
                            Card Top Up Using USSD
                        </button>
                    </li>
                    <li className="mr-8" role="presentation">
                        <button
                            className={`inline-block text-gray-900 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 ${activeTab === 'settings' ? 'active' : ''}`}
                            id="settings-tab"
                            type="button"
                            role="tab"
                            aria-controls="settings"
                            aria-selected={activeTab === 'settings'}
                            onClick={() => handleTabClick('settings')}
                        >
                            Receive Payments
                        </button>
                    </li>
                    <li role="presentation">
                        <button
                            className={`inline-block text-gray-900 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 ${activeTab === 'contacts' ? 'active' : ''}`}
                            id="contacts-tab"
                            type="button"
                            role="tab"
                            aria-controls="contacts"
                            aria-selected={activeTab === 'contacts'}
                            onClick={() => handleTabClick('contacts')}
                        >
                            Transfer
                        </button>
                    </li>
                </ul>
            </div>
            <div id="myTabContent">
                <div
                    className={`bg-gray-50 p-4 rounded-lg ${activeTab === 'profile' ? '' : 'hidden'}`}
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                >
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-1 p-4">
                            <img src={kacyber2} alt="Kacyber app" width={800} height={800} />
                        </div>
                        <div className="flex-1 p-4">
                            <h2 className="text-2xl font-bold mb-4">Board Buses with Kacyber Card</h2>
                            <p className="mb-4">
                                Beat the hassle of waiting to board buses when traveling to different cities. Book trips originating from City Square, Jinja Town, and Namboole right from the Kacyber app.
                            </p>
                            <ul className="list-none ml-5 text-black-500">
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 1: Open the Kacyber app on your device and click on the menu.
                                </li>
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 2: Click on the travel card, select the card you want to top up with.
                                </li>
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 3: Select amount to top up
                                </li>
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 4: proceed to enter pin number when card is load,
                                </li>
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 5: Tap on the validator for payment verification
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className={`bg-gray-50 p-4 rounded-lg ${activeTab === 'dashboard' ? '' : 'hidden'}`}
                    id="dashboard"
                    role="tabpanel"
                    aria-labelledby="dashboard-tab"
                >
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-1 p-4">
                            <img src={kacyber} alt="Kacyber app" width={500} height={500} />
                        </div>
                        <div className="flex-1 p-4">
                            <h2 className="text-2xl font-bold mb-4">Load your Card</h2>
                            <p className="mb-4">
                                Loading your card using the USSD App
                            </p>
                            <ul className="list-none ml-5 text-black-500">
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 1: Dial *217*88# wait for the menu to load
                                </li>
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 2:  Select Top Up your Card and Wait for Card List to Appear
                                </li>
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 3: Select  a Card number you want to load money to
                                </li>
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 4: Select amounts
                                </li>
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 5: Proceed to enter your PIN
                                </li>
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 6:Update the card to pending card payments to complete
                                </li>
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 7: Tap on the validator for payment verification
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className={`bg-gray-50 p-4 rounded-lg ${activeTab === 'settings' ? '' : 'hidden'}`}
                    id="settings"
                    role="tabpanel"
                    aria-labelledby="settings-tab"
                >
                    <p>recieve payments</p>
                </div>
                <div
                    className={`bg-gray-50 p-4 rounded-lg ${activeTab === 'contacts' ? '' : 'hidden'}`}
                    id="contacts"
                    role="tabpanel"
                    aria-labelledby="contacts-tab"
                >
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-1 p-4">
                            <img src={kacyber} alt="Kacyber app" width={400} height={400} />
                        </div>
                        <div className="flex-1 p-4">
                            <h2 className="text-2xl font-bold mb-4">Load your Card</h2>
                            <p className="mb-4">
                                Loading your card using the USSD App
                            </p>
                            <ul className="list-none ml-5 text-black-500">
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 1: Dial *217*88# wait for the menu to load
                                </li>
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 2:  Select Top Up your Card and Wait for Card List to Appear
                                </li>
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 3: Select  a Card number you want to load money to
                                </li>
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 4: Select amounts
                                </li>
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 5: Proceed to enter your PIN
                                </li>
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 6:
                                </li>
                                <li className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                                    Step 7: Tap on the validator for payment verification
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;
