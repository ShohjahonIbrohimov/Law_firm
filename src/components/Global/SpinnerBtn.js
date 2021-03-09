import React from "react";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

const SpinnerBtn = ({ text, loading }) => {
  return (
    <div>
      <button type='submit' className='glb_btn'>
        {!loading && text}
        <BeatLoader color='white' loading={loading} size={10} />
      </button>
    </div>
  );
};

export default SpinnerBtn;
