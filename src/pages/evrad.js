import React, { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import "../components/base.css";

const IndexPage = () => {
  useEffect(function () {
    window.location = "https://navek.com.tr/evrad";
  });
  return <CircularProgress />;
};

export default IndexPage;
