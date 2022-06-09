import { Stage, Layer, Rect } from 'react-konva';
export default function DrawSquare(){
    return(
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Rect
                    x={200}
                    y={250}
                    width={100}
                    height={100}
                    fill="red"
                    shadowBlur={10}
                />

            </Layer>
        </Stage>

    );
}
