import React from "react";
//import './App.css'; // Import the CSS file

class PendingComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pending-container">
                <h1 className="pending-title">Pending Tasks</h1>
                {this.props.prop1.map((item) => (
                    <div key={item.id} className="pending-item">
                        <p className="item-title">{item.title}</p>
                        <p className="item-desc">{item.desc}</p>
                        <button onClick={() => this.props.prop2(item.id)} className="complete-button">Complete</button>
                    </div>
                ))}
            </div>
        );
    }
}

export default PendingComponent;
