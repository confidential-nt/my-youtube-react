import React from "react";
import {
  TextRow,
  RectShape,
  RoundShape,
} from "react-placeholder/lib/placeholders";

const VideoCardPlaceholder = (
  <div className="my-awesome-placeholder">
    <div className="w-full h-24">
      <RectShape className=" bg-slate-500" />
    </div>
    <div className="flex">
      <div className="w-6 h-6 mt-2 mr-1">
        <RoundShape className="bg-slate-500" />
      </div>
      <TextRow className="bg-slate-500" />
    </div>
  </div>
);

export default VideoCardPlaceholder;
