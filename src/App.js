import "./styles.css";
let name = "Syed";
let hours;
let date = new Date();
let x = prompt("Enter Your Name");
hours = date.toLocaleString("en-US", { hour: "numeric", hour12: false });
// hours = 11;
console.log(hours);
export default function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      {hours >= 12 ? (
        hours >= 16 ? (
          <h1 className="dinner">Dinner</h1>
        ) : (
          <h1 className="break">Lunch Break</h1>
        )
      ) : (
        <h1 className="lunch">Break Fast time, Hurry {x}!</h1>
      )}
      {console.log(hours)}

      <h2>This Helps to remind that u haven't done with your food yet!</h2>
    </div>
  );
}
