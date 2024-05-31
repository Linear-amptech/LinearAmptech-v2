import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "../AML/AML.css"; // Assuming you have a CSS file for styles
import { Header } from "../../../Components";
import { Footer } from "../../../Components";
import logo from "../../../assets/logo.png";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content cover-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page {props.number}</h2>
        <div className="page-text">{props.children}</div>
      </div>
    </div>
  );
});

const KYC = () => {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const flipBook = useRef(null);

  const nextButtonClick = () => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flipNext();
    }
  };

  const prevButtonClick = () => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flipPrev();
    }
  };

  const onPage = (e) => {
    setPage(e.data);
  };

  useEffect(() => {
    if (flipBook.current) {
      // setTotalPage(flipBook.current.pageFlip().data);
    }
  }, [flipBook.current]);

  const bookData = [
    [
      {
        id: 1,
        title: "1. Introduction",
        text: "LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED is committed to preventing money laundering and the financing of terrorism through effective Know Your Customer (KYC) procedures. This KYC Policy outlines our commitment to complying with all applicable laws and regulations and implementing robust measures to identify and verify our customers, ensuring alignment with industry standards and regulatory expectations.",
      },
      {
        id: 2,
        title: "2. Customer Identification",
        text: "2.1. Customer Categories: LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED will categorize customers into individuals and entities and apply appropriate KYC procedures based on the risk assessment of each category.",
      },
      {
        id: 3,
        title: "",
        text: "2.2. Customer Due Diligence (CDD): We will conduct CDD on all customers to verify their identity and assess the risks associated with the business relationship.",
      },
      {
        id: 4,
        title: "",
        text: "2.3. Identification Documents: Customers will be required to provide valid identification documents, such as government-issued IDs, passports, or corporate registration documents, as part of the verification process.",
      },
      {
        id: 5,
        title: "3. Enhanced Due Diligence (EDD)",
        text: "3.1. High-Risk Customers: LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED will conduct enhanced due diligence on high-risk customers, including politically exposed persons (PEPs), customers from high-risk jurisdictions, and customers with complex ownership structures.",
      },
      {
        id: 6,
        title: "",
        text: "3.2. Additional Information: For high-risk customers, we will obtain additional information and documentation to mitigate the heightened risks associated with the business relationship.",
      },
    ],
    [
      {
        id: 7,
        title: "4. Ongoing Monitoring",
        text: "4.1. Transaction Monitoring: Our transaction monitoring systems are designed to detect patterns of activity that may indicate money laundering or terrorist financing, with automatic alerts set up to flag these activities for review.",
      },
      {
        id: 8,
        title: "",
        text: "4.2. Periodic Reviews: LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED will conduct periodic reviews of customer information and documentation to ensure that it remains accurate and up-to-date.",
      },
      {
        id: 9,
        title: "5. Customer Risk Assessment",
        text: "5.1. Risk-Based Approach: We will assess the risk associated with each customer based on factors such as their geographic location, business activities, transaction patterns, and reputation.",
      },
      {
        id: 10,
        title: "",
        text: "5.2. Risk Rating: Customers will be assigned a risk rating based on the outcome of the risk assessment, and appropriate KYC procedures will be applied accordingly.",
      },
      {
        id: 11,
        title: "6. Record Keeping",
        text: "6.1. Record Retention: LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED will maintain records of customer due diligence, including identification documents, transaction records, and risk assessments, in accordance with applicable laws and regulations.",
      },
      {
        id: 12,
        title: "",
        text: "6.2. Data Security: Customer information will be securely stored and protected from unauthorized access or disclosure.",
      },
      {
        id: 13,
        title: "7. Reporting Obligations",
        text: "7.1. Suspicious Activity Reporting: Employees are required to promptly report any suspicious activities or transactions to the designated AML Compliance Officer. The Compliance Officer will assess the reported activity and file Suspicious Activity Reports (SARs) with the appropriate regulatory authorities as necessary.",
      },
    ],
    [
      {
        id: 14,
        title: "8. Training and Awareness",
        text: "8.1. Employee Training: LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED will provide comprehensive training to employees on KYC procedures, AML laws and regulations, and their responsibilities in identifying and reporting suspicious activities.",
      },
      {
        id: 15,
        title: "9. Compliance Oversight",
        text: "9.1. Compliance Monitoring: The designated AML Compliance Officer will oversee the implementation of this KYC Policy and conduct regular reviews to ensure compliance with applicable laws and regulations.",
      },
      {
        id: 16,
        title: "10. Review and Updates",
        text: "10.1. Regular Review: This KYC Policy will be reviewed and updated as necessary to reflect changes in laws, regulations, industry standards, and best practices.",
      },
      {
        id: 17,
        title: "11. Conclusion",
        text: "LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED is committed to maintaining the highest standards of integrity and compliance with KYC procedures and AML laws and regulations. All employees are expected to adhere to this policy and actively participate in our efforts to combat money laundering and terrorist financing.",
      },
    ],
  ];

  const pages = bookData.map((data, index) => (
    <Page number={index + 1} key={index}>
      <div>
        <img src={logo} alt="logo" className="w-16 absolute top-4 " />
        {data.map((data, index) => (
          <div key={index} className="mt-2">
            <h2 className="text-xl font-bold">{data.title}</h2>
            <p className="text-base pl-2">{data.text}</p>
          </div>
        ))}
      </div>
    </Page>
  ));

  return (
    <div className="bg-gray-100">
      <Header />
      <div className="container mx-20 mt-4">
        <HTMLFlipBook
          width={550}
          height={733}
          size="stretch"
          minWidth={550}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onPage}
          className="demo-book"
          ref={flipBook}
        >
          <PageCover>
            <div className="flex flex-col items-center justify-center h-full">
              <img src={logo} alt="logo" className="w-36 absolute top-4 " />
              <h1 className="text-4xl font-bold">Know Your Customer Policy</h1>
            </div>
          </PageCover>
          {pages}
          <PageCover>THE END</PageCover>
        </HTMLFlipBook>
      </div>

      <div className="container mx-auto flex justify-center mt-4 mb-10">
        <div>
          <button
            type="button"
            onClick={prevButtonClick}
            className="bg-gray-300 p-1 px-3 rounded-md mr-2 shadow-md"
          >
            Previous page
          </button>
          [<span>{page}</span> of <span>{bookData.length}</span>]
          <button
            type="button"
            onClick={nextButtonClick}
            className="bg-gray-300 p-1 px-3 rounded-md ml-2 shadow-md"
          >
            Next page
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KYC;
