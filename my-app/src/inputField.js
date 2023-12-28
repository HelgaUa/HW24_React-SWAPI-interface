import React from "react";
import "./style.css";
class InputField extends React.Component {

  render() {
    return (
            <div className="input-container">
              <input
                  type="text"
              />
              <button className="btn">Get info</button>
            </div>
        )
  }
}

export default InputField;
