import React, { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import "../components/base.css";

const IndexPage = () => {
  useEffect(function () {
    window.location = "https://test.kariyer.decathlon.com.tr";
  }, []);
  return <CircularProgress />;
};

export default IndexPage;
