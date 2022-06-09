//library
import { Stage, Layer,Circle,Rect } from 'react-konva';
import {useState} from "react";
//styles
import  "./App.css";

export  default  function App(){
    const [circle,setCircle]=useState(false);
    const [square,setSquare]=useState(false)

    function generateCircle(){
        setCircle((circle)=>!circle)
    }

    function  generateSquare(){
        setSquare((square)=>!square)

    }
    return(
        <div className={"container"}>
            <p>please click on button to create circle and square</p>
          <div className={"button_container"}>
              <button className={"circle"} onClick={generateCircle}>create circle</button>
              <button className={"square"} onClick={generateSquare}>create square</button></div>
        <Stage width={window.innerWidth} height={window.innerHeight}>

            <Layer>

                {circle?<Circle x={200} y={200} fill={"green"} radius={50} /> :null}
                {square? <Rect x={300} y={200} width={100} height={100} fill="red" />:null}
            </Layer>
        </Stage>
            </div>
    );
}