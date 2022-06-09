import { Stage, Layer, Rect, Circle } from 'react-konva';
import DrawCircle from "./DrawCircle";
import  Home from "./Home";
// Stage - is a div wrapper
// Layer - is an actual 2d canvas element, so you can have several layers inside the stage
// Rect and Circle are not DOM elements. They are 2d shapes on canvas

export default function App() {
    return (

<div>
<Home/>
        <Stage width={window.innerWidth} height={window.innerHeight}>

            <Layer>
                <Rect x={50} y={50} width={150} height={150} fill="red"  shadowBlur={5}/>
                <Circle
                    x={400}
                    y={100}
                    width={100}
                    height={100}
                    fill="red"
                    shadowBlur={5}

                />


            </Layer>
        </Stage>
</div>

    );
}