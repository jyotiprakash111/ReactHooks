import CountUp from "react-countup";
import React from "react";

function Countup(props) {
  return (
    <div className='App'>
      <h1>
        <CountUp end={200} />
      </h1>
      <br />
      <h1>
        <CountUp end={200} duration={5} />
      </h1>
      <br />
      <h1>
        <CountUp start={500} end={1000} duration={5} prefix='$' decimals={2} />
      </h1>
      <br />
      <h1>
        <CountUp
          start={500}
          end={1000}
          duration={5}
          suffix='USD'
          decimals={2}
        />
      </h1>
    </div>
  );
}

export default Countup;
