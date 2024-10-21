import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import { AboutUs, Home, Team, Innovations, NewsEvents } from "./Pages";
import {
  AiCube,
  GanMMIC,
  RFPassive,
  RFPowerAmp,
  SDR,
  ShotScope,
} from "./Pages/products";
import InventorySystem from "./Pages/products/InventorySystem";
import Hrms from "./Pages/products/HRMS";
import Blockchain from "./Pages/products/Blockchain";
import AIandML from "./Pages/products/AIandML";
import CyberSystem from "./Pages/products/CyberSystem";
import { LAMP1, LAMP2, LAMP3, LAMP4 } from "./Pages/products/RFAmplifier";
import TempProduct from "./Pages/products/TempProduct";
import InvestorRelations from "./Pages/InvestorRelations";
import AML from "./Pages/policies/AML/AML";
import KYC from "./Pages/policies/KYC/KYC";
import {
  PassiveA,
  PassiveB,
  PassiveC,
  PassiveD,
} from "./Pages/products/RFPassiveComp";
import WaitSystem from "./Pages/waitSystem/WaitSystem";

function App() {
  return (
    <div className="App mx-auto">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/innovations" exact element={<Innovations />} />
          <Route path="/news-and-events" exact element={<NewsEvents />} />
          <Route path="/about-us" exact element={<AboutUs />} />

          {/* ************PRODUCT*********************** */}

          {/* ************LAMP series******************* */}
          <Route
            path="/products/rf-amplifier/lamp-PACF1P9"
            exact
            element={<LAMP1 />}
          />
          <Route
            path="/products/rf-amplifier/lamp-PAMOCBJ"
            exact
            element={<LAMP2 />}
          />
          <Route
            path="/products/rf-amplifier/lamp-PAMOCCE"
            exact
            element={<LAMP3 />}
          />
          <Route
            path="/products/rf-amplifier/lamp-PAMOCCF"
            exact
            element={<LAMP4 />}
          />
          {/* ****************************************** */}

          {/* ************LAMP series******************* */}

          <Route
            path="/products/rf-passive/KuPD-1"
            exact
            element={<PassiveB />}
          />
          <Route
            path="/products/rf-passive/5GBPF-1"
            exact
            element={<PassiveA />}
          />
          <Route
            path="/products/rf-passive/UHFPD-1"
            exact
            element={<PassiveC />}
          />
          <Route
            path="/products/rf-passive/UHFPD-2"
            exact
            element={<PassiveD />}
          />

          {/* ****************************************** */}
          <Route
            path="/products/ai-qube-data-core"
            exact
            element={<AiCube />}
          />
          <Route path="/products/sdr-test-bed" exact element={<SDR />} />
          <Route
            path="/products/rf-passive/GaN-MMIC"
            exact
            element={<GanMMIC />}
          />
          <Route
            path="/products/rf-design-and-signal-processing"
            exact
            element={<TempProduct />}
          />
          <Route path="/products/wait-system" exact element={<WaitSystem />} />
          <Route path="/products/ai-and-ml" exact element={<AIandML />} />
          <Route path="/products/shotscope" exact element={<ShotScope />} />

          <Route
            path="/products/rf-power-amplifiers"
            exact
            element={<RFPowerAmp />}
          />
          <Route
            path="/products/rf-passive-components"
            exact
            element={<RFPassive />}
          />
          <Route
            path="/products/inventory-system"
            exact
            element={<InventorySystem />}
          />
          <Route path="/products/hrms" exact element={<Hrms />} />
          <Route path="/products/blockchain" exact element={<Blockchain />} />

          {/* ******************unsued ************************ */}
          {/* <Route
            path="/products/software-defined-radio"
            exact
            element={<SDR />}
          />
          <Route
            path="/products/rf-linear-nonlinear-characterization"
            exact
            element={<RFlinear />}
          />
          <Route
            path="/products/power-amplifier-linearization"
            exact
            element={<PowerAmp />}
          /> */}
          {/* ****************************************** */}

          <Route path="/team" exact element={<Team />} />
          {/*   <Route
            path="/investor-relations"
            exact
            element={<InvestorRelations />}
          />
          <Route path="/policies/AML" exact element={<AML />} />
          <Route path="/policies/KYC" exact element={<KYC />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
