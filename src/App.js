// Using props

import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div className="app">
      <Counter
        render={(counter, incrementCount) => (
          <ClickCounter count={counter} incrementCount={incrementCount} />
        )}
      ></Counter>
      <Counter
        render={(counter, incrementCount) => (
          <HoverCounter count={counter} incrementCount={incrementCount} />
        )}
      ></Counter>
    </div>
  );
}

export default App;

// Using children

// import ClickCounter from "./components/ClickCounter";
// import Counter from "./components/Counter";
// import HoverCounter from "./components/HoverCounter";

// function App() {
//   return (
//     <div className="app">
//       <Counter>
//         {(counter, incrementCount) => (
//           <ClickCounter count={counter} incrementCount={incrementCount} />
//         )}
//       </Counter>
//       <Counter>
//         {(counter, incrementCount) => (
//           <HoverCounter count={counter} incrementCount={incrementCount} />
//         )}
//       </Counter>
//     </div>
//   );
// }

// export default App;
