import React, { useEffect } from "react";
import SEO from "../components/seo";
import { CircularProgress, colors, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { IconContext } from "react-icons";
import { FaChartBar, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {OutboundLink} from "gatsby-plugin-google-analytics";

import profilePhoto from "../images/profile.jpg";
import saa from "../images/aws_saa.png";
import Avatar from "@material-ui/core/Avatar";
import "../components/base.css";

const IndexPage = () => {
  useEffect(function() {
    window.location = "https://drive.google.com/file/d/1IwpAU9ZxNArOjr13d5nNTtZvlrvwAN8y/view"
  },[]);
  return (
    <CircularProgress/>
  );
};

export default IndexPage;
