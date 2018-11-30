import React, { Component } from "react";
import NProgress from "nprogress";
NProgress.configure({
  showSpinner: false
});

export const withNProgress = TargetComponent =>
  class WithNProgress extends Component {
    constructor() {
      super();
      NProgress.start();
    }
    componentDidMount() {
      NProgress.done();
    }
    componentWillUnmount() {
      NProgress.done();
    }
    render() {
      return <TargetComponent />;
    }
  };
