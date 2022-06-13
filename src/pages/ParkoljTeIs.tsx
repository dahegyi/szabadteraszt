import { useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";

import Container from "react-bootstrap/Container";

const App = (props: { cmsData: any }) => {
  const { cmsData } = props;

  useEffect(() => {
    if (cmsData) {
      document.title = cmsData.pti_title;
    }
  });

  return (
    <Container className="text-center mb-5">
      <img
        src={cmsData?.pti_banner.url}
        alt={cmsData?.pti_banner.alt}
        className="w-100 my-5"
      />
      <PrismicRichText field={cmsData?.pti_content} />
    </Container>
  );
};

export default App;
