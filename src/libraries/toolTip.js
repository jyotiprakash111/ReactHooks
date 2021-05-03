import React, { forwardRef } from "react";
import Tippy from "@tippyjs/react";
import "../App.css";
import "tippy.js/dist/tippy.css";

const ColouredToolTip = () => {
  return <span style={{ color: "yellow" }}>Coloured Component</span>;
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First Line</div>
      <div>Second Line</div>
    </div>
  );
});

function TippyComp(props) {
  return (
    <div>
      <div className='App'>
        <div style={{ paddingBottom: "20px" }}>
          <Tippy
            arrow={false}
            delay={1000}
            placement='right'
            content='Basic ToolTip'
          >
            <button>hover</button>
          </Tippy>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <Tippy content={<span style={{ color: "orange" }}>Coloured</span>}>
            <button>hove2</button>
          </Tippy>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <Tippy content={<ColouredToolTip />}>
            <button>hove2</button>
          </Tippy>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <Tippy content={<ColouredToolTip />}>
            <CustomChild></CustomChild>
          </Tippy>
        </div>
      </div>
    </div>
  );
}

export default TippyComp;
