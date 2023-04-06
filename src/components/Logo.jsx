import React from "react";
import "./style.css";
import { useState } from "react";
import { PersonOutline, VisibilityOff } from "@material-ui/icons";
import { Input,InputAdornment } from "@mui/material";
function Logo() {
  const [setName] = useState("");
  const [input,setInput] = useState("");
  const[errorMessage]=useState("");
 const [passwordError,setPasswordError] = useState("");
return(
    <>
    <div className="container">
    <div className="card">
        <div className="card-body" >
        <div
              className="form-group logogroup"
              style={{ display: "inline-block", fontWeight: "bold" }}
            >
              <span className="logo">SuaLogo</span>

              <span
                style={{
                  color: "gold",
                  fontSize: "50px",
                  width:"70px"
                }}
              >
                #
              </span>
               </div>
            <div>
              <div className="username">
                <Input
                  id="inputForm"
                  type="text"
                  placeholder=" username"
                  onChange={(e) => setName(e.source.value)}
                  required
                  endAdornment={
                    <InputAdornment position="end">
                      <PersonOutline />
                    </InputAdornment>
            
                  }
                />

                {errorMessage && <div className="error">{errorMessage}</div>}
              </div>
            </div>
            <div className="password">
              <Input
                id="passwordForm"
                placeholder=" password"
                endAdornment={
                  <InputAdornment position="end">
                    <VisibilityOff />
                  </InputAdornment>
                }
                type="password"
                value={input}
                onChange={(e) => setInput(e.source.value)}
                onBlur={() => {
                  if (input=== "") {
                    setPasswordError("Password");
                  } else {
                    setPasswordError("");
                  }
                }}
                required
              />
              {passwordError && <div className="error">{passwordError}</div>}
            </div>

            <button
              id="submit_button"
              className="btn btn-dark form-control"
              type="submit"
            >
              Enter
            </button>
        
        </div>
</div>
</div>
</>
  )             }
export default Logo;

