const App = () => {
  // non paramerized function
  const handleClick = () => {
    alert("you clicked button");
  };
  // parameterized function
  const hancleParameter = (msg) => {
    alert(msg);
  };

  // const wrapperhandler = () => hancleParameter("clicked with parameter"

  return (
    <>
      <div>App </div>
      {/* non parameterized function calling */}
      <button onClick={handleClick}>Click</button>
      {/* parameterized function calling */}
      <button onClick={() => hancleParameter("clicked with parameter")}>
        Click(Param)
      </button>
    </>
  );
};

export default App;

// function call is replaced by it's return value
// we cannot write anything after return statement
// we can only return single value data/entity/variable/value.
// there must be single return in a function and that must be last statement 

// eventListener -- sunne wala 
// eventHandler -- sunkar act karne wala  

// btn.addEventListener("click", (e) {})
                      //  ^       ^
                      //  |       |
             // eventListener  eventHandler

// onClick={}  // eventListener


// <></> - this is called fragement 