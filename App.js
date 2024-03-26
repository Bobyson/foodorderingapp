/**
 * <div id="parent">
 * * <div id=child>
 * *   <h1>Im h1</h1>
 * *   <h2>Im h1</h2>
 * * </div>
 * <div>
 * * <div id=child2>
 * *   <h1>Im h1</h1>
 * *   <h2>Im h1</h2>
 * * </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im h1"),
    React.createElement("h2", {}, "Im h2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im h1"),
    React.createElement("h2", {}, "Im h2"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
