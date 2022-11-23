import React from "react";
import "./Profile3.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IoMdStar } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "#455A64 2px solid",
  boxShadow: 24,
  p: 4,
};
const Profile3 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="profile-container container">
      <div className="agent-profile">
        <div className="agent-name">
          <div className="name-image">
            <img src="./assets/agent5.jpeg" alt="agent" />
          </div>
          <div className="name-text">
            <h2>Amarillo Real Estate Group</h2>
            <h6>Karen Masterson</h6>
            <div className="sats">
              <div className="sats-one">
                <h6>
                  <IoMdStar />
                </h6>
                <h6>
                  <IoMdStar />
                </h6>
                <h6>
                  <IoMdStar />
                </h6>
                <h6>
                  <IoMdStar />
                </h6>
                <h6>
                  <IoMdStar />
                </h6>
              </div>
              <div className="sat-two">
                <h6>5.0</h6>
                <h5>
                  <BsDot />
                </h5>
                <h6>15 Reviews</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="agent-about">
          <h3>About Me</h3>
          <h4>
            Specialties: Buyer's agent, Listing agent, Relocation, Foreclosure
          </h4>
          <p>
            Over the past six years, Karen, who has won numerous "Top Agent"
            honors with Amarillo Real Estate Group, has established a solid
            reputation as a devoted, trustworthy, and knowledgeable real estate
            agent. Winston is a skilled communicator and listener who has held
            numerous leadership positions throughout his time as a Department of
            the Army Civilian and active duty military member. He has lived in
            the Augusta region for about 15 years, so his insight and
            understanding of the real estate market are quite outstanding.{" "}
          </p>
        </div>
        <div className="listing-sales">
          <div className="for-sale">
            <h3>For Sale(1)</h3>
            <table className="table-one">
              <tr className="joe">
                <th> Address</th>

                <th>Listing Price</th>
              </tr>
              <tr className="table-two">
                <td className="anchor">
                  <div className="anchor-img">
                    {" "}
                    <img src="./assets/buffalo1.webp" alt="buffalo-houses" />
                  </div>
                  <div className="ancho-text">
                    <Link to="/House9">
                      <h6>5884 Gudme 5MHV+6Q7 Gudme, Denmark</h6>
                    </Link>
                  </div>
                </td>

                <td>$8000 per month</td>
              </tr>
            </table>
          </div>
          <div className="for-sold">
            <h4>Sold (15)</h4>
            <table className="table-0ne">
              <tr className="joe">
                <th> Address</th>
                <th>Date Sold</th>
              </tr>
              <tr>
                <td className="anchor">
                  <div className="anchor-img">
                    {" "}
                    <img src="./assets/castle1.webp" alt="buffalo-houses" />
                  </div>
                  <div className="ancho-text">
                    <Link to="/House10">
                      <h6>1839 Honey Spring Place</h6>
                    </Link>
                  </div>
                </td>
                <td>12/07/2021</td>
              </tr>{" "}
              <tr>
                <td className="anchor">
                  <div className="anchor-img">
                    {" "}
                    <img src="./assets/horse1.webp" alt="buffalo-houses" />
                  </div>
                  <div className="ancho-text">
                    <Link to="/House11">
                      <h6>5225 Greenwhich Pike</h6>
                    </Link>
                  </div>
                </td>
                <td>12/07/2021</td>
              </tr>{" "}
              <tr>
                <td className="anchor">
                  <div className="anchor-img">
                    {" "}
                    <img src="./assets/malibu1.webp" alt="buffalo-houses" />
                  </div>
                  <div className="ancho-text">
                    <Link to="/House12">
                      <h6>5225 Haceinda Oriental</h6>
                    </Link>
                  </div>
                </td>
                <td>12/07/2021</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="prof-rev">
          <h4>Review</h4>{" "}
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
              <Box sx={style} className="inner-box">
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  <h4>Write a Review</h4>
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  <div className="review-desk">
                    <div className="small-desk">
                      {" "}
                      <div className="rev-image">
                        <img src="./assets/agent1.jpeg" alt="agent" />
                      </div>
                      <div className="desk-one">
                        <p>How do you rate Karen Masterson?</p>
                        <Stack spacing={1}>
                          <h2>
                            <Rating
                              name="size-large"
                              defaultValue={2}
                              size="large"
                            />
                          </h2>
                        </Stack>
                      </div>
                    </div>
                    <div className="talk-area">
                      <label htmlFor="Title">Describe your experience</label>
                      <textarea
                        name="textarea"
                        id="text-talk"
                        cols="30"
                        rows="5"
                        placeholder="leave review"
                      ></textarea>
                      <p>
                        <Checkbox
                          checked={checked}
                          onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                        />{" "}
                        <span>I provided truthful and honest review</span>
                      </p>{" "}
                    </div>

                    <div className="talk-submit">
                      <h5>Submit Review</h5>
                    </div>
                  </div>
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </div>{" "}
        <div className="button-open">
          <Button onClick={handleOpen}>
            <h4>Write a Review</h4>
          </Button>
        </div>
        <div className="prof-comment">
          <h5>I Highly Recommend</h5>
          <div className="comment-one">
            {" "}
            <small>04/14/2022 - eachiaochieng'</small>
          </div>
          <span>Sold a Single Family home in 2022 in Grovetown, GA.</span>{" "}
          <Stack spacing={1}>
            <h2>
              <Rating name="size-large" defaultValue={2} size="large" />
            </h2>
          </Stack>
          <p>
            Karen and her colleagues worked tirelessly to deliver the highest
            level of satisfaction in selling my home. I'd give her a million
            stars instead of just five. Christine and her colleagues kept me
            updated throughout the selling process. Thank you so much, Karen,
            and God bless you.{" "}
          </p>
        </div>
        <div className="prof-comment">
          <h5>I Highly Recommend</h5>
          <div className="comment-one">
            <small>04/14/2022 - eachiaochieng'</small>
          </div>
          <span>Sold a Single Family home in 2022 in Grovetown, GA.</span>{" "}
          <Stack spacing={1}>
            <h2>
              <Rating name="size-large" defaultValue={2} size="large" />
            </h2>
          </Stack>
          <p>
            Karen and her colleagues worked tirelessly to deliver the highest
            level of satisfaction in selling my home. I'd give her a million
            stars instead of just five. Christine and her colleagues kept me
            updated throughout the selling process. Thank you so much, Karen,
            and God bless you.{" "}
          </p>
        </div>
        <div className="prof-comment">
          <h5>I Highly Recommend</h5>
          <div className="comment-one">
            <small>04/14/2022 - eachiaochieng'</small>
          </div>
          <span>Sold a Single Family home in 2022 in Grovetown, GA.</span>{" "}
          <Stack spacing={1}>
            <h2>
              <Rating name="size-large" defaultValue={2} size="large" />
            </h2>
          </Stack>
          <p>
            Karen and her colleagues worked tirelessly to deliver the highest
            level of satisfaction in selling my home. I'd give her a million
            stars instead of just five. Christine and her colleagues kept me
            updated throughout the selling process. Thank you so much, Karen,
            and God bless you.{" "}
          </p>
        </div>
        <div className="prof-comment">
          <h5>I Highly Recommend</h5>
          <div className="comment-one">
            <small>04/14/2022 - eachiaochieng'</small>
          </div>
          <span>Sold a Single Family home in 2022 in Grovetown, GA.</span>{" "}
          <Stack spacing={1}>
            <h2>
              <Rating name="size-large" defaultValue={2} size="large" />
            </h2>
          </Stack>
          <p>
            Karen and her colleagues worked tirelessly to deliver the highest
            level of satisfaction in selling my home. I'd give her a million
            stars instead of just five. Christine and her colleagues kept me
            updated throughout the selling process. Thank you so much, Karen,
            and God bless you.{" "}
          </p>
        </div>
      </div>
      <div className="agent-eye">
        <div className="phone-us">
          <h4>Contact Us</h4>{" "}
          <div className="phone-label">
            <label htmlFor="">Name</label>
            <input type="text" className="phone-us-one" required />
          </div>
          <div className="phone-label">
            <label htmlFor="">phone</label>
            <input type="text" className="phone-us-one" required />
          </div>{" "}
          <div className="phone-label">
            <label htmlFor="">Email</label>
            <input type="text" className="phone-us-one" required />
          </div>
          <div className="phone-label">
            <label htmlFor="">phone</label>
            <textarea
              className="phone-texta"
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="eye-pone">
            <h4>Contact Us</h4>
          </div>
        </div>
        <div className="phone-them">
          <h4>Professional Information</h4>
          <table>
            <tr>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td> Broker address:</td>
              <td>RE/MAX True Advantage 677 Kemper</td>
            </tr>
          </table>
          <table>
            <tr>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td> Cell Phone:</td>
              <td>(000)23490</td>
            </tr>
          </table>
          <table>
            <tr>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td> Websites:</td>
              <td>LinkedIn, Twitter, Instagram</td>
            </tr>
          </table>
          <table>
            <tr>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td> Screenname:</td>
              <td>karenmasterson</td>
            </tr>
          </table>
          <table>
            <tr>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td> Reg. Date :</td>
              <td>20/11/2022</td>
            </tr>
          </table>
          <table>
            <tr>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td> License:</td>
              <td>345786000</td>
            </tr>
          </table>
          <table>
            <tr>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td> Other Licenses:</td>
              <td>647888647474</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile3;
