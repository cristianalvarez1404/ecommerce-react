import { Button, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";

const steps = [
  "Tax Details & Mobile",
  "Pickup Address",
  "Bank Details",
  "Supplier Details",
];

const SellerAccountForm = () => {
  const [activateStep, setActivateStep] = useState(1);

  const handleStep = (value) => {
    return () => {
      (activateStep < steps.length - 1 || (activateStep > 0 && value === -1)) &&
        setActivateStep(activateStep + value);

      activateStep === steps.length - 1 && handleCreateAccount();
    };
  };

  const handleCreateAccount = () => {};

  return (
    <div>
      <Stepper activeStep={activateStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <section></section>
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
    </div>
  );
};

export default SellerAccountForm;
