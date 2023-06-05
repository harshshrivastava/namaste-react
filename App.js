
/**
 * <div id="parent">
 *  <div id="child">
 *      <h1></h1>
 *      <h2></h2>
 *  </div>
 * <div id="child2">
 *      <h1></h1>
 *      <h2></h2>
 *  </div>
 * </div>
 */
var divParent = React.createElement(
    "div", 
    { id: "parent" },
    [
        React.createElement
        (
            "div",
            {id:"child"},
            [
                React.createElement("h1",{},"H1 from child"),
                React.createElement("h2",{},"H2 from child")
            ]
        ),
        React.createElement
        (
            "div",
            {id:"child2"},
            [
                React.createElement("h1",{},"H1 from child2"),
                React.createElement("h2",{},"H2 from child2")
            ]
        )
    ]
)
var root = ReactDOM.createRoot(document.getElementById("root"))

root.render(divParent)