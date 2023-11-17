import React, { useState } from 'react'
import Banner from '../img/background.jpg'

const Home = () => {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
        setIsOpen2(false);
        setIsOpen3(false);
    };

    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
        setIsOpen1(false);
        setIsOpen3(false);
    };

    const toggleAccordion3 = () => {
        setIsOpen3(!isOpen3);
        setIsOpen1(false);
        setIsOpen2(false);
    };

    const options1 = [
        "Coramc ard vitrified tiles in thc rangc ot basc rate INR 45-70 per sqtt",
        "Combination as per desgn of tiles and larninated wooder flooring in the base rato rangc ot INR 85-110 per sqft",
        "Combination as per design ot tiles, irnportod stones. cngneered wooden floor. LVT. in tho base ratc range ot INR 30C-500 per sqtt",
        "Combination as per desgn ot tiles, Imported stones, engrcored wooden tloor. LVT. in tho base rate rango of INR 2000+ por sqtt"
    ];
    const options2 = [
        "Coramc ard vitrified tiles in thc rangc ot basc rate INR 45-70 per sqtt",
        "Combination as per desgn of tiles and larninated wooder flooring in the base rato rangc ot INR 85-110 per sqft",
        "Combination as per design ot tiles, irnportod stones. cngneered wooden floor. LVT. in tho base ratc range ot INR 30C-500 per sqtt",
        "Combination as per desgn ot tiles, Imported stones, engrcored wooden tloor. LVT. in tho base rate rango of INR 2000+ por sqtt"
    ];
    const options3 = [
        "Coramc ard vitrified tiles in thc rangc ot basc rate INR 45-70 per sqtt",
        "Combination as per desgn of tiles and larninated wooder flooring in the base rato rangc ot INR 85-110 per sqft",
        "Combination as per design ot tiles, irnportod stones. cngneered wooden floor. LVT. in tho base ratc range ot INR 30C-500 per sqtt",
        "Combination as per desgn ot tiles, Imported stones, engrcored wooden tloor. LVT. in tho base rate rango of INR 2000+ por sqtt"
    ];

    return (
        <div className='bg-[#80808076]'>
            <div className="relative w-full">
                <img
                    className="w-full h-auto object-cover"
                    src={Banner}
                    alt="Banner Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Our Website</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-8">Discover amazing things here!</p>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <a href="/" className="btn text-lg md:text-xl lg:text-2xl md:mb-0 md:mr-4 bg-[orange] text-white mx-6 px-6 my-2">Explore</a>
                        <a href="/" className="btn text-lg md:text-xl lg:text-2xl bg-[orange] text-white mx-6 px-6 my-2">Learn More</a>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className="bg-white">
                    <div className="flex justify-around p-10 my-10">
                        <div>
                            <h1 className="text-[orange] font-bold">Steel (sariya)</h1>
                            <h1 className="text-[grey] font-bold">Rathi Kamdhenu or eq</h1>
                        </div>
                        {!isOpen1 ? (
                            <button onClick={toggleAccordion1} className="border-2 border-orange-500 p-2 rounded-xl mt-20">
                                Customize
                            </button>
                        ) : null}
                        <div>
                            <h1 className="text-[orange] font-bold">INR 150</h1>
                            <h1 className="text-[grey] font-bold">per sqft</h1>
                        </div>
                    </div>
                    {isOpen1 && (
                        <div className="flex flex-col  items-center">
                            <div className="px-4 md:px-10 lg:px-20">
                                <ul className="w-full lg:flex lg:flex-row lg:justify-around md:w-4/5  mx-auto">
                                    {options1.map((option, index) => (
                                        <li
                                            key={index}
                                            className="bg-[white] hover:bg-orange-100 p-5 m-2 border rounded-2xl transition duration-300 ease-in-out hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500 cursor-pointer"
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button onClick={toggleAccordion1} className="border-2 border-orange-500 p-2 rounded-xl mt-4">
                                Collapse
                            </button>
                        </div>
                    )}
                </div>


                <div className='bg-white'>
                    <div className="flex justify-around p-10 my-10">
                        <div>
                            <h1 className="text-[orange] font-bold">Steel (sariya)</h1>
                            <h1 className="text-[grey] font-bold">Rathi Kamdhenu or eq</h1>
                        </div>
                        {isOpen2 ? null : (
                            <button onClick={toggleAccordion2} className="border-2 border-orange-500 p-2 rounded-xl mt-20">
                                Customize
                            </button>
                        )}
                        <div>
                            <h1 className="text-[orange] font-bold">INR 150</h1>
                            <h1 className="text-[grey] font-bold">per sqft</h1>
                        </div>

                    </div>
                    {isOpen2 && (
                        <div className="flex flex-col  items-center">
                            <div className="px-4 md:px-10 lg:px-20">
                                <ul className="w-full lg:flex lg:flex-row lg:justify-around md:w-4/5  mx-auto">
                                    {options2.map((option, index) => (
                                        <li key={index} className="bg-[white] hover:bg-orange-100 p-5 m-2 border rounded-2xl transition duration-300 ease-in-out hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500 cursor-pointer ">
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button onClick={toggleAccordion2} className="border-2 border-orange-500 p-2 rounded-xl mt-4">
                                Collapse
                            </button>
                        </div>
                    )}
                </div>


                <div className='bg-white'>
                    <div className="flex justify-around p-10 my-10">
                        <div>
                            <h1 className="text-[orange] font-bold">Steel (sariya)</h1>
                            <h1 className="text-[grey] font-bold">Rathi Kamdhenu or eq</h1>
                        </div>
                        {isOpen3 ? null : (
                            <button onClick={toggleAccordion3} className="border-2 border-orange-500 p-2 rounded-xl mt-20">
                                Customize
                            </button>
                        )}
                        <div>
                            <h1 className="text-[orange] font-bold">INR 150</h1>
                            <h1 className="text-[grey] font-bold">per sqft</h1>
                        </div>

                    </div>
                    {isOpen3 && (
                        <div className="flex flex-col  items-center">
                            <div className="px-4 md:px-10 lg:px-20">
                                <ul className="w-full lg:flex lg:flex-row lg:justify-around md:w-4/5  mx-auto">
                                    {options3.map((option, index) => (
                                        <li key={index} className="bg-[white] hover:bg-orange-100 p-5 m-2 border rounded-2xl transition duration-300 ease-in-out hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500 cursor-pointer ">
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button onClick={toggleAccordion3} className="border-2 border-orange-500 p-2 rounded-xl mt-4">
                                Collapse
                            </button>
                        </div>
                    )}
                </div>

            </div>

            {/* <div className="accordion">
                <div className="section">
                    <button onClick={toggleAccordion1} className="accordion-header">
                        {isOpen1 ? 'Collapse' : 'Customize 1'}
                    </button>
                    {isOpen1 && (
                        <div className="accordion-content">
                            <ul className="flex flex-col items-center">
                                {options1.map((option, index) => (
                                    <li key={index} className="mb-2">
                                        {option}
                                    </li>
                                ))}
                                <button onClick={toggleAccordion1} className="btn mt-4">
                                    Collapse
                                </button>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="section">
                    <button onClick={toggleAccordion2} className="accordion-header">
                        {isOpen2 ? 'Collapse' : 'Customize 2'}
                    </button>
                    {isOpen2 && (
                        <div className="accordion-content">
                            <ul className="flex flex-col items-center">
                                {options2.map((option, index) => (
                                    <li key={index} className="mb-2">
                                        {option}
                                    </li>
                                ))}
                                <button onClick={toggleAccordion2} className="btn mt-4">
                                    Collapse
                                </button>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="section">
                    <button onClick={toggleAccordion3} className="accordion-header">
                        {isOpen3 ? 'Collapse' : 'Customize 3'}
                    </button>
                    {isOpen3 && (
                        <div className="accordion-content">
                            <ul className="flex flex-col items-center">
                                {options3.map((option, index) => (
                                    <li key={index} className="mb-2">
                                        {option}
                                    </li>
                                ))}
                                <button onClick={toggleAccordion3} className="btn mt-4">
                                    Collapse
                                </button>
                            </ul>
                        </div>
                    )}
                </div>
            </div> */}
        </div>
    )
}

export default Home