import {useReducer} from 'react';
import "./style.css";

function reducer(state, action) {

}
function App() {
    return (
        <div className="grid">
            <div className="output">
                
                <div className="previous-operand">{previousOperand} {operation}</div>
                <div className="current-operand">{currentOperand}</div>
            </div>

        <button className="css-span-two">Clear</button>
        <button>DEL</button>
        <button>+</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>*</button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>÷</button>

        <button>0</button>
        <button>.</button>
        <button className="css-span-two">=</button>
        </div>
    )
}

export default App;