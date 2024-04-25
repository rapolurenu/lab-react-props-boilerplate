import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const images =imageData();
  return(
    <div className="gallary">
      <h2>Kalvium gallary</h2>
      <div className="img_row">
        {images.map(image => (
          <img src={image.img} alt={`Image ${image.id}`} className="size"/>
        ))}
      </div>
    </div>
  );
}

export default App;
