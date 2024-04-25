import React, { Component } from 'react';
import DataComponent from './components/DataComponent';
import './App.css'; // Importing CSS file

class AppClass extends Component {
    render() {
        const data = DataComponent();
        return (
            <div>
                <h1 className="center">Kalvium gallary</h1>
                <div className="grid-container">
                    {data.map(item => (
                        <div key={item.id} className="grid-item">
                            <img src={item.img} alt={`Image ${item.id}`} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default AppClass;
