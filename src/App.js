import React from "react";
import ReactDOM from "react-dom/client";

// What is a react Emlement
const Title1 = () => React.createElement("h1", {id:"heading"},"Namaste React")
const Title = () => {
    return (<h1 className="namaste"> 
        Namaste React using jsx
        </h1>
    );
}
// React Element =>  Object => After Rendering It becomes HTML

// React functional component
// This is component composition
const HeadingComponent = () => {
return (<div id="container">
    <Title/>
    <h1>Namaste React Functional Component</h1></div>);
};

const HeadingComponent1 = () => <h1>Namaste React Functional Component 1</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))
// Root is same as id of div in html
root.render(<HeadingComponent/>)
// It will replace everything in root

