import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./AML.css"; // Assuming you have a CSS file for styles
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

const AML = () => {
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
        text: "LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED is committed to preventing money laundering and the financing of terrorism. This Anti-Money Laundering (AML) Policy outlines our commitment to comply with all applicable laws and regulations, and to implement effective measures to detect and deter suspicious activities.",
      },
      {
        id: 2,
        title: "2. Compliance Framework",
        text: "2.1. Legal and Regulatory Compliance: LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED will comply with the Prevention of Money Laundering Act, 2002 (PMLA), the rules issued thereunder, and other relevant guidelines from regulatory bodies such as RBI, SEBI, and IRDAI.  ",
      },
      {
        id: 3,
        title: "",
        text: "2.2. Designated Compliance Officer: The Board of Directors has appointed Mr. Vivek Sharma as the designated AML Compliance Officer, responsible for overseeing the implementation and enforcement of this policy.",
      },
      {
        id: 4,
        title: "",
        text: "2.3. Training and Awareness: LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED will provide regular training to employees on AML policies, procedures, and their obligations under applicable laws and regulations. Employees will be required to certify their understanding and compliance with the AML policy annually.",
      },
      {
        id: 3,
        title: "3. Customer Due Diligence (CDD)",
        text: "3.1. Customer Identification: Given the business model of LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED, which currently utilizes only proprietary funds, the focus will be on internal controls. Should LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED engage external clients in the future, rigorous procedures will be implemented to verify the identities of customers and conduct enhanced due diligence on high-risk customers.",
      },
      {
        id: 4,
        title: "",
        text: "3.2. Ongoing Monitoring: Transaction monitoring systems will be used to detect and report suspicious behavior potentially indicating money laundering or terrorist financing activities.",
      },
    ],

    [
      {
        id: 4,
        title: "4. Transaction Monitoring",
        text: "4.1. Transaction Monitoring Systems: LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED will implement transaction monitoring systems to detect and investigate unusual or suspicious transactions, including but not limited to large transactions, unusual patterns, and transactions involving high-risk jurisdictions or counterparties. Systems will be put in place to detect unusual or suspicious transactions including large transactions and those involving high-risk jurisdictions or counterparties. ",
      },
      {
        id: 5,
        title: "",
        text: "4.2. Thresholds and Reporting: Thresholds will be established for triggering further investigation of transactions. Any transactions that meet or exceed these thresholds will be reported to the designated AML Compliance Officer for review and potential reporting to the appropriate authorities.",
      },
      {
        id: 5,
        title: "5. Record Keeping",
        text: "5.1. Record Retention: LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED will maintain accurate and up-to-date records of customer due diligence, transactions, and AML compliance efforts in accordance with applicable laws and regulations. Records will be retained for the required retention periods as per regulatory requirements.",
      },
      {
        id: 6,
        title: "6. Reporting Obligations",
        text: "6.1. Suspicious Activity Reporting: Any suspicious activities identified by employees must be promptly reported to the AML Compliance Officer for evaluation and potential reporting to the relevant authorities.",
      },
      {
        id: 7,
        title: "7. Third-Party Relationships",
        text: "7.1. Due Diligence: LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED will conduct due diligence on third-party relationships, including vendors, partners, and agents, to assess AML risks associated with these relationships. Contracts with third parties will include provisions requiring compliance with AML laws and regulations.",
      },
    ],

    [
      {
        id: 8,
        title: "8. Internal Controls and Governance",
        text: "8.1. Internal Controls: LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED will establish internal LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED controls and procedures to mitigate AML risks, including segregation of duties, regular reviews, and audits of AML compliance processes.",
      },
      {
        id: 9,
        title: "9. Technology and Automation",
        text: "9.1. Technology Solutions: We will leverage technology solutions, including AML software, to enhance our ability to detect and prevent money laundering and terrorist financing activities.",
      },
      {
        id: 10,
        title: "10. Enforcement and Penalties",
        text: "10.1. Consequences of Non-Compliance: Non-compliance with this AML policy may result in disciplinary action, including but not limited to termination of employment or contractual relationships, in accordance with XYZ Ltd's disciplinary procedures.",
      },
      {
        id: 11,
        title: "11. Review and Updates",
        text: "11.1. Regular Review: This AML policy will be reviewed and updated as necessary to reflect changes in laws, regulations, industry standards, and best practices.",
      },
      {
        id: 12,
        title: "12. Conclusion",
        text: "LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED is committed to maintaining the highest standards of integrity and compliance with anti-money laundering laws and regulations. All employees are expected to adhere to this policy and actively participate in our efforts to combat money laundering and terrorist financing.",
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
              <h1 className="text-4xl font-bold">
                Anti-Money Laundering Policy
              </h1>
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

export default AML;
// this is working
// import React, { useState, useEffect, useRef } from "react";
// import HTMLFlipBook from "react-pageflip";

// const PageCover = React.forwardRef((props, ref) => {
//   return (
//     <div className="page page-cover" ref={ref} data-density="hard">
//       <div className="page-content">
//         <h2>{props.children}</h2>
//       </div>
//     </div>
//   );
// });

// const Page = React.forwardRef((props, ref) => {
//   return (
//     <div className="page" ref={ref}>
//       <div className="page-content">
//         <h2 className="page-header">Page {props.number}</h2>
//         <div className="page-text">{props.children}</div>
//       </div>
//     </div>
//   );
// });

// const AML = () => {
//   const [page, setPage] = useState(0);
//   const [totalPage, setTotalPage] = useState(0);
//   const flipBook = useRef(null);

//   const nextButtonClick = () => {
//     // flipBook.current.getPageFlip().flipNext();
//   };

//   const prevButtonClick = () => {
//     // flipBook.current.getPageFlip().flipPrev();
//   };

//   const onPage = (e) => {
//     setPage(e.data);
//   };

//   useEffect(() => {
//     // setTotalPage(flipBook.current.getPageFlip().getPageCount());
//   }, []);

//   const text = `******LINEARIZED AMPLIFIER TECHNOLOGIESANDSERVICES
//  PRIVATELIMITEDAnti-MoneyLaunderingPolicy*****
//  **1. Introduction**
//  LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED is
//  committed to preventing money laundering and the financing of terrorism. This
//  Anti-Money Laundering (AML) Policy outlines our commitment to comply with all
//  applicable laws and regulations, and to implement effective measures to detect and
//  deter suspicious activities.
//  **2. Compliance Framework**
//  2.1. Legal and Regulatory Compliance:
//  LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED
//  will comply with the Prevention of Money Laundering Act, 2002 (PMLA), the rules
//  issued thereunder, and other relevant guidelines from regulatory bodies such as
//  RBI, SEBI, and IRDAI.
//  2.2. Designated Compliance Officer:
//  The Board of Directors has appointed Mr. Vivek Sharma as the designated AML
//  Compliance Officer, responsible for overseeing the implementation and
//  enforcement of this policy.
//  2.3. Training and Awareness:
//  LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED
//  will provide regular training to employees on AML policies, procedures, and their
//  obligations under applicable laws and regulations. Employees will be required to
//  certify their understanding and compliance with the AML policy annually.
//  **3. Customer DueDiligence (CDD)**
//  3.1. Customer Identification:
//  Given the business model of LINEARIZED AMPLIFIER TECHNOLOGIES AND
//  SERVICES PRIVATE LIMITED, which currently utilizes only proprietary funds, the
//  focus will be on internal controls. Should LINEARIZED AMPLIFIER TECHNOLOGIES
//  AND SERVICES PRIVATE LIMITED engage external clients in the future, rigorous
//  procedures will be implemented to verify the identities of customers and conduct
//  enhanced due diligence on high-risk customers.
//  3.2. Ongoing Monitoring:
//  Transaction monitoring systems will be used to detect and report suspicious
//  behavior potentially indicating money laundering or terrorist fishing activities
//  **4. Transaction Monitoring**
//  4.1. Transaction Monitoring Systems:
//  LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED
//  will implement transaction monitoring systems to detect and investigate unusual
//  or suspicious transactions, including but not limited to large transactions, unusual
//  patterns, and transactions involving high-risk jurisdictions or counterparties.
//  Systems will be put in place to detect unusual or suspicious transactions including
//  large transactions and those involving high-risk jurisdictions or counterparties
//  4.2. Thresholds and Reporting:
//  Thresholds will be established for triggering further investigation of transactions.
//  Any transactions that meet or exceed these thresholds will be reported to the
//  designated AML Compliance Officer for review and potential reporting to the
//  appropriate authorities.
//  **5. Record Keeping**
//  5.1. Record Retention:
//  LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED
//  will maintain accurate and up-to-date records of customer due diligence,
//  transactions, and AML compliance efforts in accordance with applicable laws and
//  regulations. Records will be retained for the required retention periods as per
//  regulatory requirements.
//  **6. Reporting Obligations**
//  6.1. Suspicious Activity Reporting:
//  Any suspicious activities identified by employees must be promptly reported to the
//  AML Compliance Officer for evaluation and potential reporting to the relevant
//  authorities.
//  **7. Third-Party Relationships**
//  7.1. Due Diligence:
//  LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED
//  will conduct due diligence on third-party relationships, including vendors,
//  partners, and agents, to assess AML risks associated with these relationships.
//  Contracts with third parties will include provisions requiring compliance with AML
//  laws and regulations.
//  **8. Internal Controls and Governance**
//  8.1. Internal Controls:
//  LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED
//  will establish internal LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES
//  PRIVATE LIMITED controls and procedures to mitigate AML risks, including
//  segregation of duties, regular reviews, and audits of AML compliance processes.
//  **9. Technology and Automation**
//  9.1. Technology Solutions:
//  We will leverage technology solutions, including AML software, to enhance our
//  ability to detect and prevent money laundering and terrorist financing activities.
//  **10. Enforcement and Penalties**
//  10.1. Consequences of Non-Compliance:
//  Non-compliance with this AML policy may result in disciplinary action, including
//  but not limited to termination of employment or contractual relationships, in
//  accordance with XYZ Ltd's disciplinary procedures.
//  **11. Review andUpdates**
//  11.1. Regular Review:
//  This AML policy will be reviewed and updated as necessary to reflect changes in
//  laws, regulations, industry standards, and best practices.
//  **12. Conclusion**
//  LINEARIZED AMPLIFIER TECHNOLOGIES AND SERVICES PRIVATE LIMITED is
//  committed to maintaining the highest standards of integrity and compliance with
//  anti-money laundering laws and regulations. All employees are expected to adhere
//  to this policy and actively participate in our efforts to combat money laundering
//  and terrorist financing`;

//   const pages = text.split("**").map((pageText, index) => (
//     <Page number={index + 1} key={index}>
//       {pageText}
//     </Page>
//   ));

//   return (
//     <div>
//       <HTMLFlipBook
//         width={550}
//         height={733}
//         size="stretch"
//         minWidth={315}
//         maxWidth={1000}
//         minHeight={400}
//         maxHeight={1533}
//         maxShadowOpacity={0.5}
//         showCover={true}
//         mobileScrollSupport={true}
//         onFlip={onPage}
//         className="demo-book"
//         ref={flipBook}
//       >
//         <PageCover>BOOK TITLE</PageCover>
//         {pages}
//         <PageCover>THE END</PageCover>
//       </HTMLFlipBook>

//       <div className="container">
//         <div>
//           <button type="button" onClick={prevButtonClick}>
//             Previous page
//           </button>
//           [<span>{page}</span> of <span>{totalPage}</span>]
//           <button type="button" onClick={nextButtonClick}>
//             Next page
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AML;
// import React, { useState, useEffect, useRef } from "react";
// import HTMLFlipBook from "react-pageflip";

// const PageCover = React.forwardRef((props, ref) => {
//   return (
//     <div className="page page-cover" ref={ref} data-density="hard">
//       <div className="page-content">
//         <h2>{props.children}</h2>
//       </div>
//     </div>
//   );
// });

// const Page = React.forwardRef((props, ref) => {
//   return (
//     <div className="page" ref={ref}>
//       <div className="page-content">
//         <h2 className="page-header">Page {props.number}</h2>
//         <div className="page-text">{props.children}</div>
//       </div>
//     </div>
//   );
// });

// const AML = () => {
//   const [page, setPage] = useState(0);
//   const [totalPage, setTotalPage] = useState(0);
//   const flipBook = useRef(null);

//   const nextButtonClick = () => {
//     if (flipBook.current) {
//       flipBook.current.getPageFlip().flipNext();
//     }
//   };

//   const prevButtonClick = () => {
//     if (flipBook.current) {
//       flipBook.current.getPageFlip().flipPrev();
//     }
//   };

//   const onPage = (e) => {
//     setPage(e.data);
//   };

//   useEffect(() => {
//     if (flipBook.current) {
//       setTotalPage(flipBook.current.getPageFlip().getPageCount());
//     }
//   }, [flipBook.current]); // Depend on flipBook.current to re-run when it's initialized

//   const text = `******LINEARIZED AMPLIFIER TECHNOLOGIES...`;
//   const pages = text.split("**").map((pageText, index) => (
//     <Page number={index + 1} key={index}>
//       {pageText}
//     </Page>
//   ));

//   return (
//     <div>
//       <HTMLFlipBook
//         width={550}
//         height={733}
//         size="stretch"
//         minWidth={315}
//         maxWidth={1000}
//         minHeight={400}
//         maxHeight={1533}
//         maxShadowOpacity={0.5}
//         showCover={true}
//         mobileScrollSupport={true}
//         onFlip={onPage}
//         className="demo-book"
//         ref={flipBook}
//       >
//         <PageCover>BOOK TITLE</PageCover>
//         {pages}
//         <PageCover>THE END</PageCover>
//       </HTMLFlipBook>

//       <div className="container">
//         <div>
//           <button type="button" onClick={prevButtonClick}>
//             Previous page
//           </button>
//           [<span>{page}</span> of <span>{totalPage}</span>]
//           <button type="button" onClick={nextButtonClick}>
//             Next page
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AML;
