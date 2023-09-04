import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiRadio } from "react-icons/fi";
import { VscRadioTower } from "react-icons/vsc";
import {
  SiPytest,
  SiGoogleanalytics,
  SiBlockchaindotcom,
} from "react-icons/si";
import { GiHumanPyramid } from "react-icons/gi";
import {
  MdDesignServices,
  MdOutlineInventory2,
  MdAnalytics,
  MdSystemUpdateAlt,
  MdTrackChanges,
  MdSettingsSystemDaydream,
  MdMicrowave,
  MdClear,
} from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { AiCube } from "../assets";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isRFPowerAmp, setIsRFPowerAmp] = useState(false);
  const [isRFPassive, setIsRFPassive] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  // useEffect(() => {
  console.log(window.innerWidth);
  // }, [window.innerWidth]);

  return (
    <div
      onMouseLeave={() => setIsDropDownOpen(false)}
      className="z-50 bg-white sticky top-0 "
    >
      <nav className="relative shadow  ">
        <div className="container px-6 py-1 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <img
                className="w-auto h-10 sm:h-16 sm:w-auto"
                src={require("../assets/logo.png")}
                alt="linear-amptec-logo"
              />
            </NavLink>

            <div className="flex lg:hidden">
              <button
                onClick={() => handleClick()}
                type="button"
                className="text-gray-500 focus:outline-none duration-300  "
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={` absolute inset-x-0 z-20 w-full px-6 py-0 transition-all duration-300 ease-in-out  bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? " translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:mx-6  lg:text-[16px] text-base  gap-4">
              <NavLink
                className="my-1 text-blue-gray-900  transition-colors duration-300 transform  hover:text-[#0065ed]  md:mx-4 md:my-0"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="my-1 text-blue-gray-900  transition-colors duration-300 transform  hover:text-[#0065ed]  md:mx-4 md:my-0"
                to="/innovations"
              >
                Innovations
              </NavLink>

              <div
                onMouseEnter={() => setIsDropDownOpen(true)}
                // onMouseLeave={() => setIsDropDownOpen(false)}
                onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                className="my-1 text-blue-gray-900 transition-colors duration-300 z-10 transform md:mx-4 md:my-0 cursor-pointer hover:text-[#0065ed]"
                // to="/products"
              >
                Products
                {isDropDownOpen && (
                  <div className=" ease-in duration-1000 border lg:w-[78vw] 2xl:max-w-[1135px] xl:max-w-[1135px] flex flex-wrap items-start lg:justify-between justify-start gap-6 lg:gap-0 text-[#929292] absolute md:min-w-[768px] overflow-auto lg:h-[60vh] xl:h-[60vh] 2xl:h-[60vh] h-[80vh]   lg:left-64 md:left-[75%] left-[75%] -translate-x-[80%] translate-y-9 bg-white list-none shadow-xl rounded-xl px-10 py-12 ">
                    <div className="absolute w-[20px] right-4 top-4">
                      <MdClear
                        onClick={() => setIsDropDownOpen(false)}
                        className="text-[1.5rem]"
                      />
                    </div>
                    <div className="lg:min-w-[250px] min-w-[250px]  flex flex-col gap-6 ">
                      <h2 className="text-[1.2rem]  font-bold text-[#0346B5]">
                        Linear Amptech
                      </h2>
                      <p>
                        Creating Difference With <br /> Technology
                      </p>
                      <button className=" border-[2px] border-primary-color text-primary-color py-2 px-3 w-32  duration-300">
                        Learn more
                      </button>
                    </div>
                    <div className="lg:min-w-[250px] max-w-[300px]">
                      <NavLink to="/products/rf-design-and-signal-processing">
                        <h2 className="text-[1.1rem] font-bold text-black mb-6 hover:text-[#616161]">
                          Radio Frequency Design <br />
                          and Signal Processing
                        </h2>
                      </NavLink>
                      <ul className="flex flex-col gap-5">
                        <li
                          className="flex flex-col gap-4   items-start text-[0.95rem]"
                          onMouseLeave={() => setIsRFPowerAmp(false)}
                        >
                          <NavLink
                            to="/products/rf-power-amplifiers"
                            onMouseEnter={() => setIsRFPowerAmp(true)}
                          >
                            <div className="flex gap-4 items-center justify-start w-[100%] hover:text-[#616161">
                              <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                                <MdMicrowave className="text-[1.5rem]" />
                              </div>
                              <p className="hover:text-[#616161">
                                Radio Frequency Power <br /> Amplifier
                              </p>
                            </div>
                          </NavLink>
                          {isRFPowerAmp && (
                            <ul className="ml-14 text-[0.8rem]">
                              <NavLink to="/products/rf-amplifier/lamp-PACF1P9">
                                <li className="hover:text-[#616161]">
                                  LAMP-PACF1P9-10W
                                </li>
                              </NavLink>
                              <NavLink to="/products/rf-amplifier/lamp-PAMOCBJ">
                                <li className="hover:text-[#616161]">
                                  LAMP-PAMOCBJ-10W
                                </li>
                              </NavLink>
                              <NavLink to="/products/rf-amplifier/lamp-PAMOCCE">
                                <li className="hover:text-[#616161]">
                                  LAMP-PAMOCCE-10W
                                </li>
                              </NavLink>
                              <NavLink to="/products/rf-amplifier/lamp-PAMOCCF">
                                <li className="hover:text-[#616161]">
                                  LAMP-PAMOCCF-10W
                                </li>
                              </NavLink>
                            </ul>
                          )}
                        </li>
                        <li
                          className="flex flex-col gap-4   items-start text-[0.95rem]"
                          onMouseLeave={() => setIsRFPassive(false)}
                        >
                          <NavLink
                            to="/products/rf-passive-components"
                            onMouseEnter={() => setIsRFPassive(true)}
                          >
                            <div className="flex gap-4 items-center justify-start w-[100%] hover:text-[#616161">
                              <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                                <MdMicrowave className="text-[1.5rem]" />
                              </div>
                              <p className="hover:text-[#616161">
                                Radio Frequency Passive <br /> Components
                              </p>
                            </div>
                          </NavLink>
                          {isRFPassive && (
                            <ul className="ml-14 text-[0.8rem]">
                              <NavLink to="/products/rf-passive/KuPD-1">
                                <li className="hover:text-[#616161]">
                                  Power Divider-KuPD-1
                                </li>
                              </NavLink>
                              <NavLink to="/products/rf-passive/5GBPF-1">
                                <li className="hover:text-[#616161]">
                                  5G Base Station Filter : 5GBPF-1
                                </li>
                              </NavLink>
                              <NavLink to="/products/rf-passive/UHFPD-1">
                                <li className="hover:text-[#616161]">
                                  Power Splitter-UHFPD-1
                                </li>
                              </NavLink>
                              <NavLink to="/products/rf-passive/UHFPD-2">
                                <li className="hover:text-[#616161]">
                                  Power Splitter-UHFPD-2
                                </li>
                              </NavLink>
                            </ul>
                          )}
                        </li>
                        <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                          <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                            <MdDesignServices className="text-[1.5rem]" />
                          </div>
                          <NavLink to="/products/rf-passive/GaN-MMIC">
                            <p className="hover:text-[#616161]">
                              GaN MMIC Designs
                            </p>
                          </NavLink>
                        </li>
                        <NavLink to="/products/sdr-test-bed">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <SiPytest className="text-[1.2rem]" />
                            </div>
                            <p className="hover:text-[#616161]">
                              SDR Test-Beds
                            </p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/rf-design-and-signal-processing">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <SiGoogleanalytics className="text-[1.2rem]" />
                            </div>
                            <p className="hover:text-[#616161]">
                              Transmitter Linearization & Antenna Solutions
                            </p>
                          </li>
                        </NavLink>
                      </ul>
                    </div>

                    <div className="lg:min-w-[250px]  max-w-[300px]">
                      <NavLink to="/products/cyber-physical-system-and-signal-processing">
                        <h2 className="text-[1.1rem] font-bold text-black mb-6 hover:text-[#616161]">
                          Cyber Physical Systems <br />
                          and Artificial Intelligence
                        </h2>
                      </NavLink>
                      <ul className="flex flex-col gap-5">
                        <NavLink to="/products/cyber-physical-system-and-signal-processing">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <MdSystemUpdateAlt className="text-[1.4rem]" />
                            </div>
                            <p className="hover:text-[#616161]">WAIT System</p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/ai-qube-data-core">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <AiCube className="w-5 h-5" />
                            </div>
                            <p className="hover:text-[#616161]">
                              AI Qube Data Core
                            </p>
                          </li>
                        </NavLink>
                      </ul>
                    </div>

                    <div className="lg:min-w-[250px] max-w-[300px]">
                      <h2 className="text-[1.1rem] font-bold text-black mb-6 ">
                        Enterprise Software
                        <br />
                      </h2>

                      <ul className="flex flex-col gap-5">
                        <NavLink to="/products/blockchain">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <SiBlockchaindotcom className="w-5 h-5" />
                            </div>
                            <p className="hover:text-[#616161]">
                              Private Blockchain Network
                            </p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/inventory-system">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <MdOutlineInventory2 className="text-[1.4rem]" />
                            </div>
                            <p className="hover:text-[#616161]">
                              Inventory System
                            </p>
                          </li>
                        </NavLink>
                        <NavLink to="/products/hrms">
                          <li className="flex gap-4 justify-start items-center text-[0.95rem]">
                            <div className="w-8  h-8 flex justify-center items-center text-[#0208A4] bg-[#04DBF8] rounded-md">
                              <GiHumanPyramid className="w-5 h-5" />
                            </div>
                            <p className="hover:text-[#616161]">HRMS</p>
                          </li>
                        </NavLink>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                className="my-1 text-blue-gray-900 -z-1 transition-colors duration-300 transform  hover:text-[#0065ed]  md:mx-4 md:my-0"
                to="/news-and-events"
              >
                News & Events
              </NavLink>
              <NavLink
                className="my-1 text-blue-gray-900 transition-colors duration-300 transform  hover:text-[#0065ed]  md:mx-4 md:my-0"
                to="/team"
              >
                Team
              </NavLink>
              <NavLink
                className="my-1 text-blue-gray-900 transition-colors duration-300 transform  hover:text-[#0065ed]  md:mx-4 md:my-0"
                to="/about-us"
              >
                About us
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

// import React from "react";
// import {
//   Navbar,
//   Collapse,
//   Typography,
//   Button,
//   IconButton,
//   List,
//   ListItem,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Chip,
// } from "@material-tailwind/react";
// import {
//   ChevronDownIcon,
//   UserCircleIcon,
//   CubeTransparentIcon,
//   Bars3Icon,
//   XMarkIcon,
//   FlagIcon,
//   ChatBubbleOvalLeftIcon,
//   UsersIcon,
//   FolderIcon,
//   Square3Stack3DIcon,
//   RocketLaunchIcon,
//   FaceSmileIcon,
//   PuzzlePieceIcon,
//   GiftIcon,
// } from "@heroicons/react/24/outline";

// const colors = {
//   blue: "bg-blue-50 text-[#0065ed]",
//   orange: "bg-orange-50 text-orange-500",
//   green: "bg-green-50 text-green-500",
//   "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
//   purple: "bg-purple-50 text-purple-500",
//   teal: "bg-teal-50 text-teal-500",
//   cyan: "bg-cyan-50 text-cyan-500",
//   pink: "bg-pink-50 text-pink-500",
// };

// const navListMenuItems = [
//   {
//     color: "blue",
//     icon: FlagIcon,
//     title: "About us",
//     description: "Learn about our story and our mission statement.",
//   },
//   {
//     color: "orange",
//     icon: ChatBubbleOvalLeftIcon,
//     title: "Press",
//     description: "News and writings, press releases, and resources",
//   },
//   {
//     color: "green",
//     icon: UsersIcon,
//     title: (
//       <div className="flex items-center gap-1">
//         Careers{" "}
//         <Chip
//           size="sm"
//           color="green"
//           variant="ghost"
//           value="We're hiring!"
//           className="capitalize"
//         />
//       </div>
//     ),
//     description: "We are always looking for talented people. Join us!",
//   },
//   {
//     color: "blue-gray",
//     icon: FolderIcon,
//     title: "Legal",
//     description: "All the stuff that we dan from legal made us add.",
//   },
//   {
//     color: "purple",
//     icon: RocketLaunchIcon,
//     title: "Products",
//     description: "Checkout our products that helps a startup running.",
//   },
//   {
//     color: "teal",
//     icon: FaceSmileIcon,
//     title: "Icons",
//     description: "Set of beautiful icons that you can use in your project.",
//   },
//   {
//     color: "cyan",
//     icon: PuzzlePieceIcon,
//     title: "UI Kits",
//     description: "High quality UI Kits helps you to 2x faster.",
//   },
//   {
//     color: "pink",
//     icon: GiftIcon,
//     title: "Open Source",
//     description: "List of all our open-source projects, it's all free.",
//   },
// ];

// function NavListMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

//   const renderItems = navListMenuItems.map(
//     ({ icon, title, description, color }, key) => (
//       <a href="#" key={key}>
//         <MenuItem className="flex items-center gap-3 rounded-lg">
//           <div className={`rounded-lg p-5 ${colors[color]}`}>
//             {React.createElement(icon, {
//               strokeWidth: 2,
//               className: "h-6 w-6",
//             })}
//           </div>
//           <div>
//             <Typography
//               variant="h6"
//               color="blue-gray"
//               className="flex items-center text-sm"
//             >
//               {title}
//             </Typography>
//             <Typography variant="small" color="gray" className="font-normal">
//               {description}
//             </Typography>
//           </div>
//         </MenuItem>
//       </a>
//     )
//   );

//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography as="div" variant="small" className="font-normal">
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               <Square3Stack3DIcon className="h-[18px] w-[18px]" />
//               Resources
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//           <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//       </div>
//     </React.Fragment>
//   );
// }

// function NavList() {
//   return (
//     <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-normal"
//       >
//         <ListItem className="flex items-center gap-2 py-2 pr-4">
//           <CubeTransparentIcon className="h-[18px] w-[18px]" />
//           Blocks
//         </ListItem>
//       </Typography>
//       <NavListMenu />
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-normal"
//       >
//         <ListItem className="flex items-center gap-2 py-2 pr-4">
//           <UserCircleIcon className="h-[18px] w-[18px]" />
//           Account
//         </ListItem>
//       </Typography>
//     </List>
//   );
// }

// function Header() {
//   const [openNav, setOpenNav] = React.useState(false);

//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);

//   return (
//     <Navbar className="mx-auto max-w-full  px-4 py-2 sticky top-0 z-20 shadow-none">
//       <div className="flex items-center justify-between text-blue-gray-900">
//         <Typography
//           as="a"
//           href="#"
//           variant="h6"
//           className="mr-4 cursor-pointer py-1.5 lg:ml-2"
//         >
//           Material Tailwind
//         </Typography>
//         <div className="hidden lg:block">
//           <NavList />
//         </div>
//         {/* <div className="hidden gap-2 lg:flex">
//           <Button variant="text" size="sm" color="blue-gray">
//             Sign In
//           </Button>
//           <Button variant="gradient" size="sm">
//             Sign Up
//           </Button>
//         </div> */}
//         <IconButton
//           variant="text"
//           color="blue-gray"
//           className="lg:hidden"
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <XMarkIcon className="h-6 w-6" strokeWidth={2} />
//           ) : (
//             <Bars3Icon className="h-6 w-6" strokeWidth={2} />
//           )}
//         </IconButton>
//       </div>
//       <Collapse open={openNav}>
//         <NavList />
//         {/* <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
//           <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
//             Sign In
//           </Button>
//           <Button variant="gradient" size="sm" fullWidth>
//             Sign Up
//           </Button>
//         </div> */}
//       </Collapse>
//     </Navbar>
//   );
// }
// export default Header;
