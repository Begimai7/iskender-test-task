import React from "react";
import ContentLoader from "react-content-loader";

const SketolonLoader = (props) => (
  <ContentLoader
    speed={3}
    width={600}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="172" y="131" rx="0" ry="0" width="104" height="16" />
    <circle cx="223" cy="61" r="59" />
    <circle cx="131" cy="34" r="2" />
  </ContentLoader>
);

export default SketolonLoader;
