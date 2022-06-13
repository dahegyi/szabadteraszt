import { useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";

import Container from "react-bootstrap/Container";

const App = (props: { cmsData: any }) => {
  const { cmsData } = props;

  useEffect(() => {
    if (cmsData) {
      document.title = cmsData.kt_title;
    }
  });

  return (
    <Container className="text-center mb-5">
      <img
        src={cmsData?.kt_banner.url}
        alt={cmsData?.kt_banner.alt}
        className="w-100 my-5"
      />
      <PrismicRichText field={cmsData?.kt_content} />
    </Container>
  );
};

export default App;
