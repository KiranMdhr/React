import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";
function App() {
  const [CalVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText == "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(CalVal);
      setCalVal(result);
    } else {
      const newDisplayValue = CalVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display showValue={CalVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
