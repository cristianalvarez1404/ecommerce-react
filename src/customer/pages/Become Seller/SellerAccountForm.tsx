import { Button, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import BecomeSellerFromStep1 from "./BecomeSellerFromStep1";
import { useFormik } from "formik";
import BecomeSellerFormStep2 from "./BecomeSellerFormStep2";
import BecomeSellerFormStep3 from "./BecomeSellerFormStep3";
import BecomeSellerFormStep4 from "./BecomeSellerFormStep4";

const steps = [
  "Tax Details & Mobile",
  "Pickup Address",
  "Bank Details",
  "Supplier Details",
];

const SellerAccountForm = () => {
  const [activateStep, setActivateStep] = useState(1);

  const handleStep = (value: any) => {
    return () => {
      (activateStep < steps.length - 1 || (activateStep > 0 && value === -1)) &&
        setActivateStep(activateStep + value);

      activateStep === steps.length - 1 && handleCreateAccount();
    };
  };

  const handleCreateAccount = () => {};

  const formik = useFormik({
    initialValues: {
      mobile: "",
      otp: "",
      gstin: "",
      pickupAddress: {
        name: "",
        mobile: "",
        pincode: "",
        address: "",
        locality: "",
        city: "",
        state: "",
      },
      bankDetails: {
        accountNumber: "",
        ifscCode: "",
        accountHolderName: "",
      },
      sellerName: "",
      email: "",
      businessDetails: {
        businessName: "",
        businessEmail: "",
        businessMobile: "",
        logo: "",
        banner: "",
        businessAddress: "",
      },
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Stepper activeStep={activateStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <section className="mt-20 space-y-10">
        <div>
          {activateStep == 0 ? (
            <BecomeSellerFromStep1 formik={formik} />
          ) : activateStep == 1 ? (
            <BecomeSellerFormStep2 formik={formik} />
          ) : activateStep == 2 ? (
            <BecomeSellerFormStep3 formik={formik} />
          ) : (
            <BecomeSellerFormStep4 formik={formik} />
          )}
        </div>
        <div className="flex items-center justify-between">
          <Button
            onClick={handleStep(-1)}
            variant="contained"
            disabled={activateStep === 0}
          >
            Back
          </Button>
          <Button
            onClick={handleStep(1)}
            variant="contained"
            // disabled={steps.length === activateStep - 1}
          >
            {activateStep === steps.length - 1 ? "Create Account" : "Continue"}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SellerAccountForm;
