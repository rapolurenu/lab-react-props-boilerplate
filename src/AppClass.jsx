import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  // code here
  render(){
    const images = this.imageData();
    return (
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
}
class Props extends Component {
  render() {
    const { id, img } = this.img_Comp;
    return (
      <img key={id} src={img} alt={`Elephant ${id}`} />
    );
  }
}
