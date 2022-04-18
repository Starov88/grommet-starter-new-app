import React from "react";
import { ResponsiveContext } from "grommet";

const withResponsiveContext = (Wrapped) => {
    return (props) => {
        return (
            <ResponsiveContext.Consumer>
                {
                    (size) => {
                        return (
                            <Wrapped {...props} size={size} />
                        )
                    }
                }
            </ResponsiveContext.Consumer>
        );
    }
};

export default withResponsiveContext;