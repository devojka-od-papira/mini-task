import React from "react";
import Galery from "./components/galery";
import "./App.scss"
import Carousel from "./components/carousel";
import {Grid, useBreakpoint} from "light-react-grid";
import photography from "./assets/images/photography.jpeg";
import david from "./assets/images/david.jpeg";
import linocut from "./assets/images/linocut.jpeg";
import drawingpainting from "./assets/images/drawing&painting.jpeg";

const data = [
  {
    src: photography,
    alt: 'photography',
    headline: 'Photography',
    subheadline: 'Photography',
    link: 'https://en.wikipedia.org/wiki/Photography',
    isLarge: true,
  },
  {
    src: david,
    alt: 'david',
    headline: 'David',
    subheadline: 'David',
    link: 'https://en.wikipedia.org/wiki/David',
    isLarge: true,
  },
  {
    src: linocut,
    alt: 'linocut',
    headline: 'Linocut',
    subheadline: 'Linocut',
    link: 'https://en.wikipedia.org/wiki/Linocut',
    isLarge: true,
  },
  {
    src: drawingpainting,
    alt: 'drawing',
    headline: 'Drawing',
    subheadline: 'Drawing',
    link: 'https://en.wikipedia.org/wiki/Rome',
    isLarge: true,
  },
  {
    src: photography,
    alt: 'photography',
    headline: 'Photography',
    subheadline: 'Photography',
    link: 'https://en.wikipedia.org/wiki/Photography',
    isLarge: true,
  },
  {
    src: david,
    alt: 'david',
    headline: 'David',
    subheadline: 'David',
    link: 'https://en.wikipedia.org/wiki/David',
    isLarge: true,
  },
];

const App =()=> {
  const breakpoint = useBreakpoint();
  return (
      <Grid>
        {breakpoint === 'lg' ? <Galery data={data} /> : <Carousel data={data} />}
      </Grid>
  );
}

export default App;
