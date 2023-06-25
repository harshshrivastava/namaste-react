import React from "react"
import ReactDOM from "react-dom/client"


var Title = () =>(
    <h1 className="head" tabIndex="5">
       I am from Title
    </h1>
)

var HeadingFunctionalComponent = () => (
    <div id="container">
        <Title/>
        <h1>React Functional Component.</h1>
    </div>
)


var root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingFunctionalComponent />)