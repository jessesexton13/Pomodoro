import React, { useState } from "react";
import { minutesToDuration } from "../utils/duration/index";

function Focus({ session, focusDuration, setFocusDuration, disableButton }) {
  function handleDecreaseClick() {
    setFocusDuration(Math.max(focusDuration - 5, 5));
  }

  function handleIncreaseClick() {
    setFocusDuration(Math.min(focusDuration + 5, 60));
  }

  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        {/* TODO: Update this text to display the current focus session duration */}
        Focus Duration: {minutesToDuration(focusDuration)}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-focus"
          onClick={handleDecreaseClick}
          disabled={disableButton}
        >
          <span className="oi oi-minus" />
        </button>
        {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-focus"
          onClick={handleIncreaseClick}
          disabled={disableButton}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}
export default Focus;
