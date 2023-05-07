import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id: "heading"}, "Namaste JavaScript");

const jsxHeading = <h1 id='heading'>Namaste React</h1>;

// const jsxHeading2 = <h2 id= 'heading2'>Namaste React2</h2>;


// const root2 = ReactDOM.createRoot(document.getElementById("root2"));

//Functional Component

const TitleComponent = () => <h1>Title Component</h1>
const number = 1000;
const TitleObj = (
    <h1>"Hello Object"</h1>
)

const HeadingComponent = () => (
    <React.Fragment>
        <div>
            {TitleObj}
        </div>
        <div>
            {TitleObj}
            {TitleComponent()}
            <h2>{number}</h2>
            <h3>{console.log("Hello React")}</h3>
            <TitleComponent />
            <h1 id='heading2'>Hello React2</h1>
        </div>
    </React.Fragment>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)

