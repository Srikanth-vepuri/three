import React from "react";
//import './App.css'; // Import the CSS file

class CompletedComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="completed-container">
                <h1 className="completed-title">Completed Tasks</h1>
                {this.props.prop1.map((item) => (
                    <div key={item.id} className="completed-item">
                        <p className="item-title">{item.title}</p>
                        <p className="item-desc">{item.desc}</p>
                        <button onClick={() => this.props.prop2(item.id)} className="undo-button">Undo</button>
                    </div>
                ))}
            </div>
        );
    }
}

export default CompletedComponent;
