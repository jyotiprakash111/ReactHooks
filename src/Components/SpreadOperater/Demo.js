import React from 'react';
import PropTypes from 'prop-types';


var a = 21;

var b = function () {
    console.log(a);
    var a = 20;
}
b();

function Demo() {
    return (
        <div>
            Hello
        </div>
    )
}

export default Demo;
