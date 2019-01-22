import React from "react";

import SharedNav from "../SharedNav";

export default ({ current }) => (
  <footer>
    <div />
    <div className="container py-3">
      <div className="row">
        <div className="col-12 flex-md-grow-1 pb-2 pb-sm-0">
          <nav>
            <SharedNav flatten current={current} />
          </nav>
        </div>
        <div className="col-12 flex-md-shrink-1 pb-2 pb-sm-0">
          <span>&copy; Siverio Stunts, All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
);
