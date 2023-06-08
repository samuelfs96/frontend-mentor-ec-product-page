import Product from "./components/pages/Product";
import Layout from "./components/templates/Layout";
import { InitialState, globalState } from "./store/reducers/globalState";
import { useReducer } from "react";
import GlobalStateContext from "./store/context/GlobalStateContext";

function App() {
  const store = useReducer(globalState, InitialState);
  return (
    <GlobalStateContext.Provider value={store}>
      <Layout>
        <Product />
      </Layout>
    </GlobalStateContext.Provider>
  );
}

export default App;
