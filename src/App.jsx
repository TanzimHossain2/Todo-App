import Page from "./Page";
import {Provider} from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Page />
      </Provider>
    </div>
  );
};

export default App;
