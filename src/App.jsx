import { useContext, useEffect } from "react";
import "./App.css";
import Routing from "./Router";
import { Type } from "./Utility/actionType";
import { DataContext } from "./components/DataProvider/DataProvider";
import { auth } from "./Utility/firebase";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
