import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";
function App() {
  return (
    <>
      <Provider store={appStore}>
        <Body></Body>
      </Provider>
    </>
  );
}

export default App;
