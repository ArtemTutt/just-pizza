import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="120" cy="120" r="120" />
    <rect x="11" y="267" rx="10" ry="10" width="215" height="37" />
    <rect x="12" y="317" rx="10" ry="10" width="215" height="42" />
  </ContentLoader>
);

export default Skeleton;
