import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';

const images = [
  {
  original: 'images\Doodle1.png',
  thumbnail: 'images\Doodle1=thumb.png'
  },
  {
    original: 'images\Doodle2.png',
    thumbnail: 'images\doodle2-thumb.png'
  },
  {
    original: 'images\Doodle3.png',
    thumbnail: 'images\Doodle3-thumb.png'
  },
  {
    original: 'images\Doodle4.png',
    thumbnail: 'images\Doodle4-thumb.png'
  },
  {
    original: 'images\Doodle5.png',
    thumbnail: 'images\Doodle5-thumb.png'
  }
];

class Art extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

function App() {
  return (
    ReactDOM.render(<Art />, document.getElementById("root"))
  );
}





export default App;
