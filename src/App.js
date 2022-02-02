import SimpleInput from "./components/SimpleInput";
import Exitpage from "./components/Exitpage";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="app">
        <SimpleInput />
      </div>
      <Exitpage />
    </Fragment>
  );
}

export default App;
