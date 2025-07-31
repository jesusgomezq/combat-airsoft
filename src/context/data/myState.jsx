import { useState } from "react";
import MyContext from "./myContext";

const myState = (props) => {
  const [loading, setLoading] = useState(false)
  return <MyContext.Provider value={{loading, setLoading}}>{props.children}</MyContext.Provider>;
};

export default myState;
