import React from "react";
import SEO from "../components/seo";
import { colors, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { IconContext } from "react-icons";
import { FaChartBar, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profilePhoto from "../images/profile_crop_1024.jpg";
import Avatar from "@material-ui/core/Avatar";
import "../components/base.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100vw",
    textAlign: "center",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blueGrey["800"],
    color: colors.blueGrey[100]
  },
  iconBar: {
    marginTop: "5vh"
  },
  social: {
    display: "inline",
    color: colors.blueGrey["100"],
    transition: "color 1s ease",
    marginLeft: "1rem",
    width: "2rem",
    height: "2rem",

    "&:hover": {
      color: "white",
      cursor: "pointer"
    }
  },
  avatar: {
    width: "12rem",
    height: "12rem",
    marginBottom: "5vh"
  }
});

const IndexPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <SEO title="Mustafa Ekrem KENTER"/>

      <Avatar alt="Mustafa Ekrem KENTER" src={profilePhoto} className={classes.avatar}/>
      <Typography gutterBottom variant="h3">Hello, I'm Ekrem</Typography>
      <Typography gutterBottom variant="h4">An experienced software craftsman</Typography>

      <div className={classes.iconBar}>
        <IconContext.Provider value={{ className: classes.social }}>
          <a
            href="https://linkedin.com/in/ekremkenter"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin/>
          </a>
          <a
            href="https://github.com/ekremkenter"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub/>
          </a>
          <a
            href="https://twitter.com/ekremkenter"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTwitter/>
          </a>
          <a
            href="https://profile.codersrank.io/user/ekremkenter"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Tooltip title="codersrank.io">
              <FaChartBar/>
            </Tooltip>
          </a>
        </IconContext.Provider>
      </div>

    </div>
  );
};

export default IndexPage;
