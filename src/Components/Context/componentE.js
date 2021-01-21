import React, { useContext } from 'react';
import ComponentF from './componentF';
import { UserContext, ChannelContext } from '../../App';
// Use of UseContext Hook

function ComponentE() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div>
           {/* <ComponentF/> */}
           {user} - {channel}
        </div>
    );
}

export default ComponentE;