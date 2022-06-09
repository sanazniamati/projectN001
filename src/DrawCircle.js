import { Stage, Layer, Circle } from 'react-konva';

export default function DrawCircle(){
    return(
        <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
            <Circle
                x={100}
                y={100}
                width={100}
                height={100}
                fill="red"
                shadowBlur={5}
            />

        </Layer>
    </Stage>
    );



}