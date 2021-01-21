import React from "react";
import { UserContext, ChannelContext } from "../../App";

function componentF(props) {
    // Multiple Context Value
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User context value {user}, Channel Context Value{channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
      <h2>ComponentF</h2>
    </div>
  );
}

export default componentF;

// Context

/**
 * Context Provides a way to pass data Through
 * the component tree having to pass props down manually at every level
 * 
 */