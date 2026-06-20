import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logoblue.png";
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { useFormState } from "react-dom";
import { MdSnippetFolder } from "react-icons/md";
import { useEffectEvent } from "react";
import SearchPanel from "./SearchPanel";
import React, { useEffect, useState, useRef, usS } from "react";

const Navbar = () => {
    const [isScroled, setIsScroled] = useState(false);  //scrol navbar//
    const [open, setOpen] = useState(null);
    const timeoutRef = useRef(null);                      // navbar mouse timeout//
    const [isSearchOpen, setIsSearchOpen] = useState(null);  //searchbar//
    const location = useLocation();

    const handleHomeClick = () => {
        if (location.pathname === "/") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };



        const handleMouseEnter = (menu) => {
            clearTimeout(timeoutRef.current);
            setOpen(menu);
        };
        const handleMouseLeave = () => {
            timeoutRef.current = setTimeout(() => {
                setOpen(null);
            }, 200);
        };

        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    setIsScroled(true)
                }
                else {
                    setIsScroled(false)
                }
            }
            window.addEventListener("scroll", handleScroll)
        }, [])




        return (

            <div className="fixed top-0 left-0 w-full z-50">
                <div className={`overflow-hidden transition-all duration-500 ${isScroled ? "max-h-0" : "max-h-40"} w-full bg-gray-50 px-12 py-0 flex items-center justify-between `}>
                    {/* Left */}
                    <div className="overflow-hidden whitespace-nowrap">

                    </div>
                    {/* Right */}
                    <div className="flex items-center gap-6 text-[11px] uppercase tracking-[1px] text-[#866d4b]">
                        <p>+91 9876543210</p>
                        <p>info@sgtu.edu</p>

                        <div className="pl-10 bg-gray-50 px-0 py-2 flex justify-end">
                            <ul className="flex items-center gap-1 text-[12px] uppercase tracking-[1.8px] text-[BLACK] translate-x-8">
                                <li className="px-1 border-r border-[#866d4b] cursor-pointer">INDUSTRY COLLABORATION</li>
                                <li className=" px-1 border-r border-[#866d4b] cursor-pointer">PCI</li>
                                <li className="px-1 border-r border-[#866d4b] cursor-pointer">BCI</li>
                                <li className="px-1 border-r border-[#866d4b] cursor-pointer">AYUSH</li>
                                <li className="px-1 border-r border-[#866d4b] cursor-pointer">INC</li>
                                <li className="px-1 border-r border-[#866d4b] cursor-pointer">RTI</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className="bg-white h-80"> */}
                <nav className={`${isScroled ? "h-18" : "h-28"} relative transition-all duration-500 w-full bg-[white] text-[#222222] px-12 py-1 flex items-center justify-between`}>
                    {/* Logo */}

                    <div className="flex-shrink-0 -ml-12 leading-none">
                        <img src={logo} alt="sgtu logo" className={`${isScroled ? "w-14" : "w-28"} object-contain transition-all duration-500 ease-in-out" `} />
                    </div>
                    <div className={`${isScroled ? "text-xl" : "text-2xl"} transition-all duration-300 flex flex-col leading-none   w-fit whitespace-nowrap ml-0`}>
                        <div className="text-[26px] text-blue-950 font-bold tracking-[1px]">
                            SIKKIM GLOBAL
                        </div>
                        <div className="text-[18px] text-yellow-600 font-medium tracking-[0px] mt-[2px]">
                            TECHNICAL UNIVERSITY
                        </div>
                    </div>

                    {/* navbar link */}



                    <ul onMouseLeave={handleMouseLeave} className={`${isScroled ? "-translate-x-12" : "translate-x-0"} ${isScroled ? "gap-8" : "gap-5"} transition-all duration-500 flex-1 justify-center flex items-center  gap-5 text-[15px] uppercase tracking-[1.8px] text-[black] font-normal ml-14`}>

                        <li onMouseEnter={() => handleMouseEnter("programmes")}
                            className="relative group w-fit cursor-pointer 
                      after:content-['']
                       after:absolute
                       after:left-0
                       after:-bottom-[1px]
                       after:h-[2px]
                       after:w-full
                       after:bg-blue-950 
                       after:scale-x-0
                       after:origin-center
                       after:transition-transform
                       after:duration-500
                       hover:after:scale-x-100">
                            PROGRAMMES

                        </li>

                        <li onMouseEnter={() => handleMouseEnter("research")}

                            className="relative group w-fit cursor-pointer 
                       after:content-['']
                       after:absolute
                       after:left-0
                       after:-bottom-[1px]
                       after:h-[2px]
                       after:w-full
                       after:bg-blue-950
                       after:scale-x-0
                       after:origin-center
                       after:transition-transform
                       after:duration-500
                       hover:after:scale-x-100">
                            RESEARCH

                        </li>
                        <li onMouseEnter={() => handleMouseEnter("pharmacy")}

                            className="relative group w-fit cursor-pointer
                       after:content-['']
                       after:absolute
                       after:left-0
                       after:-bottom-[1px]
                       after:h-[2px]
                       after:w-full
                       after:bg-blue-950
                       after:scale-x-0
                       after:origin-center
                       after:transition-transform
                       after:duration-500
                       hover:after:scale-x-100 ">
                            PHARMACY

                        </li>
                        <li onMouseEnter={() => handleMouseEnter("student zone")}

                            className="relative group w-fit cursor-pointer 
                       after:content-['']
                       after:absolute
                       after:left-0
                       after:-bottom-[1px]
                       after:h-[2px]
                       after:w-full
                       after:bg-blue-950
                       after:scale-x-0
                       after:origin-center
                       after:transition-transform
                       after:duration-500
                       hover:after:scale-x-100">
                            STUDENT ZONE

                        </li>
                        <li onMouseEnter={() => handleMouseEnter("admission 2026")}

                            className="relative group w-fit cursor-pointer 
                       after:content-['']
                       after:absolute
                       after:left-0
                       after:-bottom-[1px]
                       after:h-[2px]
                       after:w-full
                       after:bg-blue-950
                       after:scale-x-0
                       after:origin-center
                       after:transition-transform
                       after:duration-500
                       hover:after:scale-x-100">
                            ADMISSION 2026

                        </li>
                    </ul>




                    {/* drop down start */}
                    {/* 1 */}


                    {open === "programmes" && (
                        <div onMouseLeave={handleMouseLeave}
                            onMouseEnter={() => clearTimeout(timeoutRef.current)}
                            className={`${isScroled ? "-mt-3" : "-mt-7"} flex gap-10 absolute top-full left-104 bg-gray-100  normal-case p-0 rounded-md 
                              w-[992px]
                              min-h-[220px]
                              shadow-lg
                              z-50`}>

                            <div className="w-1/3 bg-gray-50 flex flex-col items-stretch pl-2 shadow-xl shadow-black/30 ">
                                <div className="relative w-75 mt-2 h-60 rounded-4xl overflow-hidden">
                                    <img className=" h-60 object-cover rounded-4xl" src="/image/dropdownZoom.png" alt="" />
                                    <div className="absolute inset-0 bg-black/60"></div>
                                    <div className="absolute inset-0 flex item-center justify-center mt-6 px-8">
                                        <h2 className="text-2xl font-bold text-white text-center tracking-[3px]">
                                            Studying On <br /> Campus
                                        </h2>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center mt-20">
                                        <div className="bg-gray-900 w-50 h-25 flex items-center justify-center text-[16px] tracking-[2px] font-bold text-center text-white cursor-pointer group ">
                                            <div className="flex">
                                                <span className="inline-block transition-transform duration-300 group-hover:-translate-x-2">
                                                    Explore In-
                                                    <br />
                                                    Classroom
                                                    <br />
                                                    Learning
                                                </span>
                                                <span className="  mt-12 -ml-6
                                                translate-y-[2px]
                                                opacity-0
                                                -translate-x-3
                                                transition-all
                                                duration-300
                                                group-hover:opacity-100
                                                group-hover:translate-x-2">
                                                    &gt;&gt;
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-75 mt-2 h-40 rounded-4xl overflow-hidden mb-2">
                                    <img className=" object-cover rounded-4xl" src="/image/dropdownzoom2.jpg" alt="" />
                                    <div className="absolute inset-0 bg-black/60"></div>
                                    <div className="absolute inset-0 flex item-center justify-center mt-6 px-8">
                                        <h2 className="text-2xl font-bold text-white text-center tracking-[3px]">
                                            Studying Online
                                        </h2>
                                    </div>
                                    <div className=" absolute inset-0 flex items-center justify-center mt-14  ">
                                        <div className=" bg-gray-900 w-50 h-18 flex items-center justify-center text-[16px] tracking-[2px] font-bold text-center text-white cursor-pointer group">
                                            <div className="flex items-end">
                                                <span className="inline-block transition-transform duration-300 group-hover:-translate-x-2">
                                                    Explore Virtual
                                                    <br />
                                                    Learning
                                                </span>
                                                <span className="  -ml-10
                                                translate-y-[2px]
                                                opacity-0
                                                -translate-x-3
                                                transition-all
                                                duration-300
                                                group-hover:opacity-100
                                                group-hover:translate-x-2">
                                                    &gt;&gt;
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" absolute
                                   -top-[10px]
                                   left-5
                                   w-0
                                   h-0
                                   border-l-[10px]
                                   border-r-[10px]
                                   border-b-[10px]
                                   border-l-transparent
                                   border-r-transparent
                                 border-b-blue-950"></div>
                            <ul className="w-2/3 pt-2 list-none  tracking-tigh " >
                                <h1 className="w-fit text-[19px] font-semibold tracking-[1px] text-blue-950 mb-1 font-mono cursor-pointer">Our Programme</h1>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer transition-all duration-300 hover:-translate-x-2">School of Computer Science & Information Technology</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer transition-all duration-300 hover:-translate-x-2">School of Commerce & Management</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer transition-all duration-300 hover:-translate-x-2">School of Arts, Humanities and Social Science</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer transition-all duration-300 hover:-translate-x-2">School of Science</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer transition-all duration-300 hover:-translate-x-2">School of Vocational Studies</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer transition-all duration-300 hover:-translate-x-2">School of Agriculture</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer transition-all duration-300 hover:-translate-x-2">School of Library and Information Sciences</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer transition-all duration-300 hover:-translate-x-2">School of Hotel Management</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer transition-all duration-300 hover:-translate-x-2">School of Engineering and Technology</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer transition-all duration-300 hover:-translate-x-2">School of Allied Health Sciences</li>
                            </ul>
                        </div>)}



                    {/* drop down */}
                    {/* 2*/}



                    {open === "research" && (
                        <div onMouseLeave={handleMouseLeave}
                            onMouseEnter={() => clearTimeout(timeoutRef.current)}
                            className={`${isScroled ? "-mt-3" : "-mt-7"} flex gap-10 absolute top-full left-104
                        bg-gray-100 normal-case p-0 rounded-md 
                              w-[992px]
                              min-h-[220px]
                              shadow-lg
                              z-50`}>
                            <div className="w-1/3 bg-gray-50 flex flex-col items-stretch pl-9 shadow-xl shadow-black/30">
                                <img className="w-75 mt-7 h-45 object-cover rounded-4xl" src="/image/dropdown1.webp" alt="" />
                                <div className="mt-5 px-0 text-left">
                                    <h2 className="text-[18px] font-semibold text-gray-800">
                                        Research & Innovation
                                    </h2>

                                    <p className="text-[12px] text-gray-500 text-left mt-1 mb-4">
                                        Advancing knowledge through impactful research, discovery, and academic excellence.
                                    </p>
                                </div>
                            </div>
                            <div className=" absolute
                                   -top-[10px]
                                   left-41
                                   w-0
                                   h-0
                                   border-l-[10px]
                                   border-r-[10px]
                                   border-b-[10px]
                                   border-l-transparent
                                   border-r-transparent
                                 border-b-blue-950"></div>
                            <ul className="w-2/3 pt-2 list-none  tracking-tight">
                                <h1 className="w-fit text-[19px] font-semibold tracking-[1px] text-blue-950 mb-0 font-mono cursor-pointer">Research</h1>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">School of Research</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Research Handbook</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Register for Entrance</li>
                            </ul>

                        </div>)}



                    {/* drop down  */}
                    {/* 3 */}



                    {open === "pharmacy" && (
                        <div onMouseLeave={handleMouseLeave}
                            onMouseEnter={() => clearTimeout(timeoutRef.current)}
                            className={`${isScroled ? "-mt-3" : "-mt-7"} flex gap-10 absolute top-full left-104 bg-gray-100  normal-case p-0 rounded-md 
                              w-[992px]
                              min-h-[220px]
                              shadow-lg
                              z-50`}>
                            <div className="w-1/3 bg-gray-50 flex flex-col items-stretch pl-9 shadow-xl shadow-black/30">
                                <img className="w-75 mt-7 h-45 object-cover rounded-4xl" src="/image/dropdown3nopublic.jpg" alt="" />
                                <div className="mt-5 px-0 text-left">
                                    <h2 className="text-[18px] font-semibold text-gray-800">
                                        Advancing Healthcare Education
                                    </h2>

                                    <p className="text-[12px] text-gray-500 text-left mt-1 mb-4">
                                        Discover academic excellence across multiple disciplinesEmpowering students with the knowledge and skills to contribute to modern healthcare and pharmaceutical industries.
                                    </p>
                                </div>
                            </div>
                            <div className=" absolute
                                   -top-[10px]
                                   left-70
                                   w-0
                                   h-0
                                   border-l-[10px]
                                   border-r-[10px]
                                   border-b-[10px]
                                   border-l-transparent
                                   border-r-transparent
                                 border-b-blue-950"></div>
                            <ul className="w-2/3 pt-2 list-none  tracking-tight" >
                                <h1 className="w-fit text-[19px] font-semibold tracking-[1px] text-blue-950 mb-0 font-mono cursor-pointer">Pharmacy</h1>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">School of Pharmacy, SGTU</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">School of Pharmacy, Prospectus</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">CCDDH Campus</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">CCDDH Prospectus</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Apply Now</li>
                            </ul>
                        </div>)}



                    {/* drop down */}
                    {/* 4 */}



                    {open === "student zone" && (
                        <div onMouseLeave={handleMouseLeave}
                            onMouseEnter={() => clearTimeout(timeoutRef.current)}
                            className={`${isScroled ? "-mt-3" : "-mt-7"} flex gap-10 absolute top-full left-104 bg-gray-100  normal-case p-0 rounded-md 
                              w-[992px]
                              min-h-[220px]
                              shadow-lg
                              z-50`}>
                            <div className="w-1/3 bg-gray-50 flex flex-col items-stretch pl-9 shadow-xl shadow-black/30">
                                <img className="w-75 mt-7 h-45 object-cover rounded-4xl" src="/image/programmes.jpg" alt="" />
                                <div className="mt-5 px-0 text-left">
                                    <h1 className="text-[18px] font-semibold text-gray-800">
                                        Beyond the Classroom
                                    </h1>

                                    <p className="text-[12px] text-gray-500 text-left mt-1 mb-4">
                                        Engage with campus activities, student support initiatives, and opportunities that enrich university life.
                                    </p>
                                </div>
                            </div>
                            <div className=" absolute
                                   -top-[10px]
                                   left-100
                                   w-0
                                   h-0
                                   border-l-[10px]
                                   border-r-[10px]
                                   border-b-[10px]
                                   border-l-transparent
                                   border-r-transparent
                                 border-b-blue-950"></div>
                            <ul className="w-2/3 pt-2 list-none  tracking-tight">
                                <h1 className="w-fit text-[19px] font-semibold tracking-[1px] text-blue-950 mb-0 font-mono cursor-pointer">Important links</h1>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Testimonials</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Student Grievence Redressal Cell</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Allumini Association</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Allumini Association</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Socio-Economic Disadvantage Group (SEDG)</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Facilities for Differently-abled</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Examination Policy</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Sports Activity</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Downloads</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Gallery</li>
                            </ul>
                        </div>)}




                    {/* drop down */}
                    {/* 5 */}



                    {open === "admission 2026" && (
                        <div onMouseLeave={handleMouseLeave} onMouseEnter={() => clearTimeout(timeoutRef.current)}
                            className={`${isScroled ? "-mt-3" : "-mt-7"} flex gap-10 absolute top-full left-104 bg-gray-100  normal-case p-0 rounded-md 
                              w-[992px]
                              min-h-[220px]
                              shadow-lg
                              z-50`}>
                            <div className=" bg-gray-50 w-1/3  flex flex-col items-stretch pl-9 shadow-xl shadow-black/30">
                                <img className="w-75 mt-7 h-45 object-cover rounded-4xl" src="/image/dropdown4nopublic.jpg" alt="" />
                                <div className="mt-5 px-0 text-left">
                                    <h1 className="text-[18px] font-semibold text-gray-800">
                                        Connect with an Advisor
                                    </h1>

                                    <p className="text-[15px] text-gray-500 text-left mt-1 mb-4">
                                        Get your appllication questions answered by one of our student Advisors today!
                                    </p>
                                </div>
                            </div>
                            <div className=" absolute
                                   -top-[10px]
                                   left-140
                                   w-0
                                   h-0
                                   border-l-[10px]
                                   border-r-[10px]
                                   border-b-[10px]
                                   border-l-transparent
                                   border-r-transparent
                                 border-b-blue-950"></div>
                            <ul className="w-2/3 pt-2 list-none  tracking-tight">
                                <h1 className="w-fit text-[19px] font-semibold tracking-[1px] text-blue-950 mb-0 font-mono cursor-pointer">Admission</h1>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Prospectus</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Application Form</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Employee Login</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Faculty Login</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Student Login</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Academic Calendar</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Security & Discipline</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Admission Procedure</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Verify Enrollment</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Verify Academic Documents</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Scholarships</li>
                                <li className="w-fit text-[14px] font-normal tracking-[1px] cursor-pointer">Reservation</li>
                            </ul>

                        </div>)}


                    {/* apply button navbar */}
                    <div className={`${isScroled ? "-translate-x-14" : "translate-x-0"} transition-all duration-500 flex items-center `}>
                        <div className=" ml-auto flex items-center space-x-1">
                            <Link to="/apply">
                                <button className="text-[black] text-[12px] uppercase tracking-[0.7px] rounded-md border border-[black] px-2 py-2 mr-2  bg-gray-200 hover:bg-gray-300 hover:text-black transition-all duration-300 cursor-pointer">
                                    Apply Now
                                </button>
                            </Link>

                            {/* search button */}
                            <div onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className=" flex items-center ml-4 mr-2 relative w-fit cursor-pointer">

                                <lord-icon
                                    src="https://cdn.lordicon.com/wjyqkiew.json"
                                    stroke="bold"
                                    trigger="hover"
                                    // stroke="light"   
                                    colors="primary:#000000,secondary:#172554">
                                </lord-icon>

                            </div>
                            <SearchPanel isOpen={isSearchOpen} />
                        </div>

                        {/* burgemenu   */}
                        <div className="flex flex-col gap-[8px] cursor-pointer group -mr-9 ml-3">
                            <div className="w-8 h-[2px] bg-black group-hover:animate-[slide_0.6s_ease-in-out]"></div>

                            <div className="w-8 h-[2px] bg-black group-hover:animate-[slide_0.6s_ease-in-out_0.1s]"></div>

                            <div className="w-8 h-[2px] bg-black group-hover:animate-[slide_0.6s_ease-in-out_0.2s]"></div>
                        </div>
                    </div>
                    {/* home button */}
                    <div className={`${isScroled ? "mt-4" : "mt-0"} translate-all duration-900 absolute top-1 right-3`}>
                        <Link to="/" onClick={handleHomeClick}>
                            <lord-icon
                                src="https://cdn.lordicon.com/jeuxydnh.json"
                                // stroke="bold"
                                trigger="loop"
                                delay="2000"
                                colors="primary:#000000,secondary:#172554"
                            >
                            </lord-icon>
                        </Link>
                    </div>
                </nav>
            </div>
        );
    };

    export default Navbar;