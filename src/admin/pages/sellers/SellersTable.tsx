import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const accountStat = [
  {
    status:"PENDING_VERIFICATION",
    title:"Pending Verification",
    description:""
  },
  {
    status:"ACTIVE",
    title:"Active",
    description:"Account is"
  },
  {
    status:"SUSPENDED",
    title:"Suspended",
    description:"Account is"
  },
  {
    status:"DEACTIVATED",
    title:"Deactivated",
    description:"Account is"
  },
  {
    status:"BANNED",
    title:"Banned",
    description:"Account is"
  },
  {
    status:"CLOSED",
    title:"Closed",
    description:"Account is"
  },
]


export default function SellersTable() {
  const [accountStatus, setAccountStatus] = useState("ACTIVE");

  const handleChange = (e:any) => {
    setAccountStatus(e.target.value)
  }

  return (
    <div className="pb-5 w-60">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Account Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={accountStatus}
          label="Account Status"
          onChange={handleChange}
        >
          {accountStat.map((item:any) => (
            <MenuItem value={item.status}>{item.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
