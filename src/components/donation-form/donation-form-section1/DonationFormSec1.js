import React, { useState } from "react";
import styles from "../DonationForm.module.scss";
import { useMediaQuery } from "react-responsive";
import TextField from "../../textfield/TextField";
import InputArea from "../../input-area/InputArea";
import AmexIcon from "../../../assets/images/icon-simple-americanexpress.png";
import VisaIcon from "../../../assets/images/icon-awesome-cc-visa.png";
import MCardIcon from "../../../assets/images/icon-awesome-cc-mastercard.png";
import PayPalIcon from "../../../assets/images/icon-awesome-cc-paypal.png";
import ObyteIcon from "../../../assets/images/obyte-icon.png";

export default function DonationFormSec1(props) {
  const isTablet = useMediaQuery({ query: "(min-width: 767.98px)" });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 991.98px)" });
  const responsiveInputs = {
    width: isTablet ? "90%" : "max-content",
    justifyContent: "flex-start",
  };

  //Common box for payment methods
  const PaymentMethods = ({ methodLabel, children, onClick, style }) => {
    return (
      <div className={styles.paymentMethods} onClick={onClick}>
        <p className={styles.methodsLabel}>{methodLabel}</p>
        <div className={styles.paymentImg} style={style}>
          {children}
        </div>
      </div>
    );
  };

  //Highlight a payment box
  const clickOnePayment = (e) => {
    e.target.style.borderWidth = "2px";
    e.target.firstChild.style.fontWeight = "800";
  };

  return (
    <>
      <li className={styles.step1}>Select your payment method *</li>
      <fieldset className={styles.step1Container}>
        <PaymentMethods
          methodLabel="PayPal/Creditcard"
          onClick={clickOnePayment}
          style={{
            display: "grid",
            gap: "1vw",
            gridTemplateColumns: "repeat(2, 50px)",
            justifyContent: "center",
            //center imags vertically
            position: "relative",
            top: "-5px",
          }}
        >
          <img src={PayPalIcon} alt="PayPal method" />
          <img src={VisaIcon} alt="Visa method" />
          <img src={MCardIcon} alt="MasterCard method" />
          <img src={AmexIcon} alt="Amex method" />
        </PaymentMethods>
        <PaymentMethods
          methodLabel="Obyte"
          onClick={clickOnePayment}
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
          }}
        >
          <a href="https://obyte.org">
            <img src={ObyteIcon} alt="Obyte method" />
          </a>
        </PaymentMethods>
      </fieldset>
      <li className={styles.step1}>Personal information</li>
      <fieldset className={styles.eachStep}>
        <TextField
          className="input-primary"
          labelFor="first-name"
          label="First name"
          name="firstname"
          inputSize={isTablet ? "30" : "20"}
          inputPlaceHolder="Enter your first name here"
          inputValue={props.personalInputs.firstname}
          onChange={props.onFistNameChange}
          textFieldStyle={responsiveInputs}
          style={responsiveInputs}
        />
        <TextField
          className="input-primary"
          labelFor="last-name"
          label="Last name"
          name="lastname"
          inputSize={isTablet ? "30" : "20"}
          inputPlaceHolder="Enter your last name here"
          inputValue={props.personalInputs.lastname}
          onChange={props.onLastNameChange}
          textFieldStyle={responsiveInputs}
          style={responsiveInputs}
        />
        <TextField
          className="input-primary"
          labelFor="email"
          label="Email"
          name="email"
          inputSize={isTablet ? "30" : "20"}
          inputPlaceHolder="Enter your email here"
          inputValue={props.personalInputs.email}
          onChange={props.onEmailChange}
          textFieldStyle={responsiveInputs}
          style={responsiveInputs}
        />
        <InputArea
          className="textarea-primary"
          labelFor="message"
          label="Leave a message"
          inputPlaceHolder="Leave a message to Rafael"
          cols={isTablet ? "27" : "19"}
          rows="5"
          inputValue={props.personalInputs.message}
          onChange={props.onMessageChange}
          inputAreaStyle={responsiveInputs}
          style={responsiveInputs}
        />
        <div className={styles.checkBoxContainer}>
          {/* <div className={styles.roundCheckBox}> */}
          <input type="checkbox" />
          {/* <label for="checkbox" className={styles.checkBoxLabel}></label> */}
          {/* </div> */}
          <p> I'd like to be informed about the donation</p>
        </div>
        <button
          className="btn rounded btn-donate"
          style={{ alignSelf: "center" }}
          onClick={props.next}
          disabled={props.isLast()}
        >
          Proceed
        </button>
      </fieldset>
    </>
  );
}
