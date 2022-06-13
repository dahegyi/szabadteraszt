import { useEffect, useState } from "react";
import { PrismicRichText } from "@prismicio/react";

import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";

const Home = (props: { cmsData: any }) => {
  const { cmsData } = props;

  const [rangeValue, setRangeValue] = useState("500");

  useEffect(() => {
    if (cmsData) {
      document.title = cmsData.app_title;
    }
  });

  const compareStyle = {
    width: `${parseInt(rangeValue, 10) / 10}%`,
  };

  return (
    <>
      <div className="text-center font-compactca">
        <PrismicRichText field={cmsData?.heading} />
        <div className="slider-container">
          <figure>
            <div id="compare" style={compareStyle}></div>
          </figure>
          <input
            id="slider"
            type="range"
            min="0"
            max="1000"
            value={rangeValue}
            onChange={(e: any) => setRangeValue(e.target.value)}
          />
        </div>
        <Container>
          <PrismicRichText field={cmsData?.content} />
        </Container>
      </div>

      <Container>
        <iframe
          className="mt-3"
          src="https://www.google.com/maps/d/u/4/embed?mid=1Tc9EFi2PHzEVI_ahJx4PGobgiISR6Zs&ehbc=2E312F"
        />

        <Accordion className="mt-4">
          {cmsData?.qna.map((qna: any, index: string) => (
            <Accordion.Item key={index} eventKey={index}>
              <Accordion.Header className="font-compactca">
                {qna.question}
              </Accordion.Header>
              <Accordion.Body>
                <PrismicRichText field={qna.answer} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <p className="email font-compactca">
          <a href={`mailto:${cmsData?.email}`}>{cmsData?.email}</a>
        </p>
      </Container>
    </>
  );
};

export default Home;
