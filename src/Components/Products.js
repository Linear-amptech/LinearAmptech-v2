import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import p1 from "../assets/RFPowerAmp/p1.png";
import aiqube from "../assets/AIQube/1.jpg";
import wait from "../assets/WaitSystem/1.png";
import rfpassive from "../assets/RFPassive/UHFPD-1/p1.jpg";
import blockchain from "../assets/blockchain.png";
import sdr from "../assets/SDR/4.png";
export default function Products() {
  return (
    <div className="flex gap-12 flex-wrap justify-center ">
      <Card className=" w-[500px] px-0 rounded-sm shadow-none">
        <CardHeader
          color="blue-gray"
          className="relative h-72 mt-0 px-0 w-full mx-auto rounded-sm shadow-none bg-blue-gray-200"
        >
          <img
            src={aiqube}
            alt="card-image"
            className="w-full h-full object-cover mx-auto "
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" className="mb-2 text-blue-gray-800">
            AI Qube Data Core
          </Typography>
          <Typography>
            AiQube was founded with a mission to make data science accessible
            and actionable for every business. Our hybrid platform provide
            comprehensive analytics,...
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <NavLink
            to="/products/ai-qube-data-core"
            className="align-middle select-none  font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-sm capitalize"
          >
            Read More
          </NavLink>
        </CardFooter>
      </Card>
      <Card className=" w-[500px] px-0 rounded-sm shadow-none">
        <CardHeader
          color="blue-gray"
          className="relative h-72 mt-0 px-0 w-full mx-auto rounded-sm shadow-none bg-blue-gray-200"
        >
          <img
            src={wait}
            alt="card-image"
            className="w-full h-full object-cover mx-auto "
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" className="mb-2 text-blue-gray-800">
            WAIT System
          </Typography>
          <Typography>
            The WAIT an acronym here for Warning Ahead of Intersection & Turns
            is a product suitable for early warning in blind turns and highlyway
            intersections with rural roads...
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <NavLink
            to="/products/cyber-physical-system-and-signal-processing"
            className="align-middle select-none  font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-sm capitalize"
          >
            Read More
          </NavLink>
        </CardFooter>
      </Card>
      <Card className=" w-[500px] px-0 rounded-sm shadow-none">
        <CardHeader
          color="blue-gray"
          className="relative h-72 mt-0 px-0 w-full mx-auto rounded-sm shadow-none bg-blue-gray-200"
        >
          <img
            src={blockchain}
            alt="card-image"
            className="w-full h-full object-cover mx-auto "
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" className="mb-2 text-blue-gray-800">
            Private Blockchain Network
          </Typography>
          <Typography>
            The blockchain-based management system offers a range of
            applications across various industries. In the military and defense
            sector, it ensures accurate tracking and...
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <NavLink
            to="/products/blockchain"
            className="align-middle select-none  font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-sm capitalize"
          >
            Read More
          </NavLink>
        </CardFooter>
      </Card>
      <Card className=" w-[500px] px-0 rounded-sm shadow-none">
        <CardHeader
          color="blue-gray"
          className="relative h-72 mt-0 px-0 w-full mx-auto rounded-sm shadow-none bg-blue-gray-200"
        >
          <img
            src={p1}
            alt="card-image"
            className="w-full h-full object-cover mx-auto "
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" className="mb-2 text-blue-gray-800">
            Radio Frequency Power Amplifier
          </Typography>
          <Typography>
            The company has varieties of Radio Frequency Power Amplifiers for L,
            S and C band in their product line. These Amplifiers are power
            stages as well as complete unit with DC/DC converters.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <NavLink
            to="/products/rf-power-amplifiers"
            className="align-middle select-none  font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-sm capitalize"
          >
            Read More
          </NavLink>
        </CardFooter>
      </Card>
      <Card className=" w-[500px] px-0 rounded-sm shadow-none">
        <CardHeader
          color="blue-gray"
          className="relative h-72 mt-0 px-0 w-full mx-auto rounded-sm shadow-none bg-blue-gray-200"
        >
          <img
            src={rfpassive}
            alt="card-image"
            className="w-full h-full object-cover mx-auto "
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" className="mb-2 text-blue-gray-800">
            Radio Frequency Passive Components
          </Typography>
          <Typography>
            These RF passive components have unique design topologies enabling
            low loss and high selectivity in case of filters and excellent
            combining efficiency (more than 90%)...
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <NavLink
            to="/products/rf-passive-components"
            className="align-middle select-none  font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-sm capitalize"
          >
            Read More
          </NavLink>
        </CardFooter>
      </Card>
      <Card className=" w-[500px] px-0 rounded-sm shadow-none">
        <CardHeader
          color="blue-gray"
          className="relative h-72 mt-0 px-0 w-full mx-auto rounded-sm shadow-none bg-blue-gray-200"
        >
          <img
            src={sdr}
            alt="card-image"
            className="w-full h-full object-cover mx-auto "
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" className="mb-2 text-blue-gray-800">
            SDR Test-Beds
          </Typography>
          <Typography>
            With the advent of Software Defined Radio (SDR) the radio hardware
            scaled down to software and most of the features is pushed into
            software. In the scenario of war...
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <NavLink
            to="/products/sdr-test-bed"
            className="align-middle select-none  font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-sm capitalize"
          >
            Read More
          </NavLink>
        </CardFooter>
      </Card>
    </div>
  );
}
