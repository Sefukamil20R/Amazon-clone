import { useEffect, useContext } from "react";
import Routing from "./Router.jsx";
import { DataContext } from "./Components/DataProvider/DataProvider.jsx";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  return <Routing />;
}

export default App;
