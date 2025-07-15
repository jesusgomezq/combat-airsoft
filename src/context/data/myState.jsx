import MyContext from "./myContext";

const myState = (props) => {
    const state = {
        name: 'Jesus',
        edad: 34
    }
  return <MyContext.Provider value={state}>{props.children}</MyContext.Provider>;
};

export default myState;
