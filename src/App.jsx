import './App.css';
import elephant from "./images/elephant.jpeg";

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
function Props(img_Comp) {
  return (
    <img key={img_Comp.id} src={img_Comp.img} alt={`Elephant ${img_Comp.id}`} />
  );
}
export default App;
