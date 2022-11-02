import React from "react";
import "./Sell.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { RiAppleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const Sell = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="sell-block container-fluid nopadding">
      <div className="section-header">
        <h3>Explore Available Selling Options</h3>
        <p>
          Wherever you are in the selling journey, our hassle-free tools and
          guides will help you make the right move.
        </p>
      </div>
      <div className="section-bg">
        <h3>Enter Your Address to Unlock Your Owner Dashboard</h3>
        <div className="section-listing">
          <div className="section-one">
            <div className="sell-image">
              <img src="./assets/sell-one.jpeg" alt="sell" />
            </div>
            <h5>See Your StreetEasy Valuation</h5>
            <p>
              Get an instant, hassle-free estimate of your home’s value, powered
              by the most expansive real estate database in NYC.
            </p>
          </div>
          <div className="section-one">
            <div className="sell-image">
              <img src="./assets/sell-two.jpeg" alt="sell" />
            </div>
            <h5>Get Matched With a Trusted Agent</h5>
            <p>
              Ready to sell? Just have questions? We can recommend listing
              agents who’ve closed on homes just like yours.
            </p>
          </div>
        </div>
        <div className="dragon-dance">
          <div className="header-put-one">
            <input
              className="input-fire"
              type="text"
              placeholder="445 STREET NAME, NAIROBI, NRB 234"
            />
          </div>
          <div className="header-put-two">
            <input
              className="input-fire"
              type="text"
              placeholder="UNIT NUMBER"
            />
          </div>
          <div className="push-on">
            <h6>Get Started</h6>
          </div>{" "}
        </div>{" "}
        <div>
          <p>
            Are you a returning home owner?
            <Button onClick={handleOpen}>Register</Button> or
            <Button onClick={handleOpen}>log in</Button> to view your Owner
            Dashboard.
          </p>{" "}
          <div className="modal-small">
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box className="box-style">
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <div className="log-out">
                      <h4>Login</h4>
                    </div>
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <div className="log-in">
                      <input
                        className="input-fire"
                        type="text"
                        placeholder=" Email"
                      />
                    </div>
                    <div className="winterfell">
                      <a href="#button">
                        <h6>SUBMIT</h6>
                      </a>
                    </div>
                    <div className="or">
                      <h6>or</h6>
                    </div>
                    <div className="apple">
                      <h6>
                        <RiAppleFill />
                        continue with Apple
                      </h6>
                    </div>
                    <div className="google">
                      <h6>
                        <FcGoogle /> continue with Google
                      </h6>
                    </div>
                  </Typography>
                </Box>
              </Fade>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
