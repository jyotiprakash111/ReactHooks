// Context Provides a way to pass data through the component
// tree without having to pass props down manually at every level
import ComponentE from './componentE'
import React from 'react';

function Componentc() {
    return (
        <div>
            <ComponentE/>
        </div>
    );
}

export default Componentc;