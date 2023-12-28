import React from "react";
import "./style.css";
class TextField extends React.Component {

    render() {
        return (
            <div className="text-field">
                <div>
                    <div className="info controller">Controller</div>
                    <div className="info id">Id</div>
                </div>
                <p className="text-field_info">
                        "name": "Luke Skywalker"
                </p>
            </div>
        )
    }
}

export default TextField;
