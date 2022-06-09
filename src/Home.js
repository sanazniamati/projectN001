import  "./Home.css"
export default  function Home(){
    const handelDrawCircle=(e)=>{
        e.draw()
        console.log("this button is clicked")
    }
    const handelDrawSquare=()=>{
        console.log("this button is clicked")
    }
    return(
        <div className="container">
            <button className="circle button-tree" onClick={handelDrawCircle}>Create Circle</button>
            <button className="square button-tree" onClick={handelDrawSquare}>Create Square</button>
        </div>
    );
}