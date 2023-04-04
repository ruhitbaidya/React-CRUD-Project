import React from "react";
// import Card from "./component/card"
// import Data from "./data.json"
// import Card2 from "./component/card2"
// import State from "./component/state"
// import InputControl from "./component/event_handel"
// import State_Menage from "./component/hook_state"
// import Edling from "./component/edubing"
// import { v4 as uuidv4 } from 'uuid';
// import FindOut from "./component/SendData"
// import Forms from "./component/form"
// import Home from "./component/todoApp/home"
import Home from "./component/todoProject/Home"
function App(){
    // const WorldThis = (peramsthis)=>{
    //     console.log(peramsthis)
    // }
    return <div>
        <Home />
        {/* <Home /> */}
        {/* <FindOut pass={WorldThis} /> */}
        {/* <Forms /> */}
    {/* <Edling />
    <State_Menage />
    <InputControl />
    <State />
    {Data.map((user)=> <div key={uuidv4()}><Card cardTitle={user.title} cardDesc={user.body} cardBtn="Send"  /></div>)}
    {Data.map((user)=> <div key={user.id}><Card2 id={user.id} title={user.title} desc={user.body}  /></div>)} */}
    </div>
}


export default App;