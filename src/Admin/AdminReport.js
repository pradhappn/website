import React from "react";
import "../styles/adminReport.css";

const AdminReport = () => {
  return (
    <div className="report-grid">

      <div className="box">
        <h4>USER</h4>
        TOTAL USER : <br />
        ACTIVE USER : <br />
        IN ACTIVE USER :
      </div>

      <div className="box">
        <h4>DEPOSIT</h4>
        DEPOSIT AMOUNT TOTAL : <br />
        OPBNB AMOUNT TOTAL : <br />
        OPDRN AMOUNT TOTAL :
      </div>

      <div className="box">
        <h4>TOTAL USER</h4>
        TOTAL STAKING USER : <br />
        STAKING AMOUNT TOTAL : <br />
        STAKING WITHDAWEL :
      </div>

      <div className="box">
        <h4>WITHDAWEL</h4>
        TOTAL WITHDAWEL : <br />
        OPBNB WITHDAWEL : <br />
        OPDRN WITHDAWEL :
      </div>

      <div className="box big">
        <h4>TOTAL REPORT</h4>
        Activation income : 10 <br />
        Activation level income : 30 <br />
        Trade income : 200 <br />
        Trade level income : 100 <br />
        Package staking income : 53 <br />
        Autofull income : 72 <br />
        Referral coin income : 400 <br />
        Dally coin collect income : 36 <br />
        TOTAL : 3000
      </div>

      <div className="box">
        <h4>TODAY DEPOSIT / WITHDRAWAL</h4>
        OPBNB 5000 / 3000 <br />
        OPDRN 4000 / 6000 <br />
        STAKING 1000000 / 9800
      </div>

    </div>
  );
};

export default AdminReport;
