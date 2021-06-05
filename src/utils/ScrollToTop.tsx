import React, { useEffect, Fragment } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface PropTypes {
  history: any;
  children: React.ReactNode;
}

const ScrollToTop: React.FC<PropTypes & RouteComponentProps> = ({
  history,
  children,
}) => {
  useEffect(() => {
    const unlisiten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisiten();
    };
  });

  return <Fragment>{children}</Fragment>;
};

export default withRouter(ScrollToTop);