import React from "react";
import {
  TextRow,
  RectShape,
  RoundShape,
} from "react-placeholder/lib/placeholders";

const VideoCardPlaceholder = (
  <div className="my-awesome-placeholder">
    <RectShape
      style={{ width: "100%", height: "7rem" }}
      className="bg-slate-500"
    />
    <div className="flex">
      <div className="w-6 h-6 mt-2 mr-1">
        <RoundShape className="bg-slate-500" />
      </div>
      <TextRow className="block bg-slate-500" />
    </div>
  </div>
);

export default VideoCardPlaceholder;
