import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenericInput from "../../Components/GenericInput/GenericInput";
import apiHandlers from "../../apiHandlers/apiHandlers";
import GenericButton from "../../Components/GenericButton/GenericButton";
import Navbar from "../../Components/Navbar/Navbar";
import GenericStatusMessage from "../../Components/GenericStatusMessage/GenericStatusMessage";
import "./OpenBalance.css";

//TODO Every Balance Tier Should show a popup hint to guide users to the difference
//TODO Show Proper Error Msgs when facing Errors

function OpenBalance() {
  const [accountTier, setAccountTier] = useState("");
  const [amount, setAmount] = useState("");
  const [requestInProgress, setRequestInProgress] = useState(false);
  const [showStatusMsg, setShowStatusMsg] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  // organize state setters for one time addition through a forEach function
  const stateSetters = [setAccountTier, setAmount];

  const navigate = useNavigate();

  // Access User Balance Creation required Data from Redux
  const createBalanceData = useSelector(
    (state) => state.createBalanceData.balanceData
  );

  // Access Current Session User Account Number
  const currentUserAccountNumber = useSelector(
    (state) => state.currentSessionData.userData.accountNumber
  );

  // OpenBalance function Groups Form Data and makes a "OpenBalance" request through apiHandlers
  const openBalance = async (e) => {
    e.preventDefault();
    setRequestInProgress(true);

    const balanceFormData = {
      accountNumber: currentUserAccountNumber,
      type: accountTier,
      amount: amount,
    };

    console.log(balanceFormData);

    const response = await apiHandlers.OpenBalance(balanceFormData);
    console.log(response);

    if (response.status === 200) {
      navigate("/home");
    } else if (response.status === 500) {
      if (response.data.didAnErrorOccur) {
        setIsStatusError(true);
        setStatusMsg(response.data.msg);
        setShowStatusMsg(true);
      }
    }

    setRequestInProgress(false);
  };

  return (
    <>
      <Navbar />
      <div className="openBalancePage">
        <div className="openBalanceContainer">
          <h2 className="openBalanceDescription">
            Open A New Spire Treasury Balance
          </h2>

          <form onSubmit={openBalance} className="openBalanceForm">
            {createBalanceData.map((Data, index) => (
              <GenericInput
                key={Data.fieldName}
                onChange={
                  Data.inputType === "Normal"
                    ? (e) => {
                        stateSetters[index](e.target.value);
                      }
                    : Data.inputType === "Radio"
                    ? (value) => {
                        stateSetters[index](value);
                      }
                    : ""
                }
                {...Data}
              />
            ))}
            <GenericButton text={"Open Balance"} loading={requestInProgress} />
          </form>
          {showStatusMsg ? (
            <GenericStatusMessage
              isError={isStatusError}
              statusText={statusMsg}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default OpenBalance;
