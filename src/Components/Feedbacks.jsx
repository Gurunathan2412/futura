import React from "react";
import { SectionWrapper } from "../hoc";

import "../index.css"


const Feedback = () => {
    return (
      <>



<div class="card">
    <div class="circle">
        <div className="content">
        <h2>
            EVENTS
        </h2>
        </div>
    </div>
    <img src={"src/assets/logo1.png"}/>
</div>
</>
  );
};

export default SectionWrapper(Feedback, "feedback");