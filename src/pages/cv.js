import React, { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import "../components/base.css";

const IndexPage = () => {
  useEffect(function () {
    window.location =
      "https://drive.google.com/file/d/1sJ7mqezYFAxs2YtHcR_IQXiyJ_1pbh6L/view";
  }, []);
  return <CircularProgress />;
};

export default IndexPage;
