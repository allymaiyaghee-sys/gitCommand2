import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaRss,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import logo from "../assets/logoblue.png";


const Social_Link = [
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaRss,
]

const Array1 = ["Campus Tour", "Directions & Location Map", "Chat with Student Ambassadors"
]

const ImportantInfo =[
  "MandatDisclosureory ","Academic Calendar" ,"Student Grievances Redressal","Ombudsperson","IQAC","NIRF"
]

const ExploreFlame = ["Student Life","Infrastructure","Notable Guests","The Spir"

]


const Footer = () => {
  return (
    <footer className="bg-[#021d3a] text-white px-8 md:px-16 py-14">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-5 gap-10">

          {/* Left Info Section */}
          <div className="md:col-span-1">
            <img
              src={logo}
              alt="University Logo"
              className="w-40 mb-6 pl-10"
            />

            <div className="space-y-5 text-sm leading-8">

              <p className="flex gap-3 items-start">
                <FaUniversity className="text-yellow-400 mt-2 flex-shrink-0" />
                Gat No. 1270, Lavale, Off. Pune Bengaluru Highway,
                Pune - 412115, Maharashtra, India.
              </p>

              <p className="flex gap-3 items-center">
                <FaPhone className="text-yellow-400" />
                Toll-free: 1-800-209-4567
              </p>

              <p className="flex gap-3 items-center">
                <FaEnvelope className="text-yellow-400" />
                Email: enquiry@SGTU.edu.in
              </p>

              <p className="leading-7">
                Sponsoring Body: Foundation for Liberal And Management
                Education Society.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:col-span-4">

            {/* Social Media */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              {Social_Link.map((Icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition"
                >
                  <Icon />
                </div>
              ))}

              <span className="text-xl font-medium ml-3">
                All Social Media
              </span>
            </div>

            {/* Footer Links */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">

              {/* Column 1 */}
              <div>
                <h3 className="text-yellow-400 font-bold uppercase mb-5 border-b border-gray-500 pb-2">
                  Come Say Hello
                </h3>

                <ul className="space-y-4 text-sm">
                  {
                    Array1.map((item, i) => {
                      
                     return <li className="hover:text-yellow-400 cursor-pointert">{item}{i}</li>
                    })
                  }

                  {/* <li className="hover:text-yellow-400 cursor-pointer">Campus Tour</li>
                  <li className="hover:text-yellow-400 cursor-pointer">Directions & Location Map</li>
                  <li className="hover:text-yellow-400 cursor-pointer">1Chat with Student Ambassadors</li> */}
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="text-yellow-400 font-bold uppercase mb-5 border-b border-gray-500 pb-2">
                  Important Info
                </h3>
       

                <ul className="space-y-4 text-sm">
                    {
          ImportantInfo.map((item,index) =>{
            return <li className="hover:text-yellow-400 cursor-pointert">{item}</li>
          }
        )
         }
                  {/* <li>MandatDisclosureory </li>
                  <li>Academic Calendar</li>
                  <li>Student Grievances Redressal</li>
                  <li>Ombudsperson</li>
                  <li>IQAC</li>
                  <li>NIRF</li> */}
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="text-yellow-400 font-bold uppercase mb-5 border-b border-gray-500 pb-2">
                  Explore Flame
                </h3>

                <ul className="space-y-4 text-sm">
                  <li>Student Life</li>
                  <li>Infrastructure</li>
                  <li>Notable Guests</li>
                  <li>The Spirit of Everlasting</li>
                  <li>University Viewbook</li>
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h3 className="text-yellow-400 font-bold uppercase mb-5 border-b border-gray-500 pb-2">
                  Press / Media
                </h3>

                <ul className="space-y-4 text-sm">
                  <li>Newsroom</li>
                  <li>Event Calendar</li>
                  <li>In the Media</li>
                  <li>Newsletters</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer;