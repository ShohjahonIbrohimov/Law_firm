import React from "react";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

const SpinnerBtn = ({ text, loading, onClick }) => {
  return (
    <div>
      <button type='submit' className='glb_btn' onClick={onClick}>
        {!loading && text}
        <BeatLoader color='white' loading={loading} size={10} />
      </button>
    </div>
  );
};

export default SpinnerBtn;
