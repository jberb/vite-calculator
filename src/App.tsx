import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './component/Button'


function App() {
  const [value, setValue] = useState("0");
  const [preState, setPrestate] = useState("");
 
  const [operator, setOperator] = useState("");
  const [total, setTotal] = useState("0");



  

  const handleButtonClick = useCallback(
      (buttonValue: string) => {
        const utility = parseInt(buttonValue, 10);
        switch (buttonValue) {
          case "C":
            setValue("0");
            setPrestate("");
            setOperator("");
            break;
          case "+-":
            setValue((-1 * parseInt(value)).toString());
            break;
          case "%":
            setValue((parseInt(value) / 100).toString());
            break;
          case ".":
            !value.includes(".") ? setValue(value + buttonValue) : null;
            break;
          case "=":
            handleEqual();
            break;
          case "+":
          case "-":
          case "x":
          case "/":
            handleOperator(buttonValue);
            break;
          default:
            if (!isNaN(utility)) {
              value !== "0" ? setValue(value + buttonValue) : setValue(buttonValue);
            }
            break;
        }
      },
      [value,preState,operator]
    );

    function handleOperator(buttonValue: string ){
      setOperator(buttonValue)
      
      if (preState !==""){
        handleEqual();
        setPrestate(total);
      } else {
        setPrestate(value);
        
      }
      setValue(" ");
    }

    function handleEqual(){
      let numPrevValue = parseFloat(preState);
      let numValue = parseFloat(value);
      let equal = 0;
      if (operator === "+") {
        equal = numPrevValue + numValue;
      } else if (operator === "-") {
        equal = numPrevValue - numValue;
      } else if (operator === "x") {
        equal = numPrevValue * numValue;
      } else if (operator === "/") {
        equal = numPrevValue / numValue;
      } else {
        return;
      }
      setTotal(equal.toString());
      setPrestate(total);
      setValue(equal.toString());
      setOperator("");
    }

    useEffect(() => {
      setTotal(value);
    }, [value]);

    console.log(preState);


  

  return (
    <div className='bg-yellow-300 flex justify-center h-screen w-screen'>
      <div className='flex flex-col  bg-gray-700 rounded-md gap-1 p-2 item-center justify-center m-24'>
      <input
        type="text"
        value={total ? total : preState}
        disabled
        className="bg-gray-600 h-14 rounded-md w-72 text-right px-0.5 py-1 text-white text-4xl"
      ></input>

    <div className="grid grid-cols-4 grid-rows-5 gap-2 w-72 py-1">
    {[  
      "C" ,
     "+-" ,
     "%" ,
     "/" ,
     "7" ,
     "8" ,
     "9" ,
     "x" ,
     "4" ,
     "5" ,
     "6" ,
     "-" ,
     "1" ,
     "2" ,
     "3" ,
     "+" ,
     "0" ,
     "." ,
     "=" ].map((button, index) => (
          <Button
            key={index}
            text={button}
            onClick={() => handleButtonClick(button)}
          />
        ))}
    </div>
      </div>
    </div>
  )
}

export default App
