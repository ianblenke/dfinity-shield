console.log("Loading user dashboard");

import * as React from "react";

export const HelperDashboard = ({ makeMap, state }) => {
  // Show a map with the helper's position
  after_load(() => {
    makeMap(state.me.helper[0].location, [state.me.helper[0].location]);
  });

  return (
    <div style={{ "font-size": "30px" }}>
      <div style={{ "background-color": "yellow" }}>
        <p>SHIELD HELPER DASHBOARD</p>
      </div>

      <div
        id="map-bar"
        style={{
          margin: "30px",
          display: "grid",
          "grid-template-columns": "200px auto",
        }}
      >
        <div>
          <div>Hello {state.me.helper[0].name.first}.</div>
          <div>Thank you for helping</div>
        </div>
        <div id="mapid" style={{ height: "180px" }}></div>
      </div>

      <div
        id="accepted-tasks"
        style={{
          margin: "30px",
          display: "grid",
          "grid-template-columns": "auto",
        }}
      >
        {state.requests.length ? (
          state.requests.map((request) => {
            return <div>{JSON.stringify(request)}</div>;
          })
        ) : (
          <div>You have accepted no requests</div>
        )}
      </div>
    </div>
  );
};

function after_load(delayed_action) {
  setTimeout(delayed_action, 200); // horrible hack
}
