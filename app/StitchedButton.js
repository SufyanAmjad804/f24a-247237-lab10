
"use client";

import { useState } from "react";

export default function StitchedButton() {
  const [stitched, setStitched] = useState(false);

  console.log("Stitched button rendered");

  return (
    <div className="stitchedSection">
      <h3>
        Status: {stitched ? "Stitched" : "Not stitched"}
      </h3>

      <button
        className="stitchedButton"
        onClick={() => setStitched(true)}
      >
        Stitched
      </button>
    </div>
  );
}
