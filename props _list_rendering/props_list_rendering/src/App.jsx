// import React from 'react'
// import Students from "./Students";

// // const s1="uma maheshwari"
// // const s2={
// //   name:"Swapna",
// //   age:18
// // };

// const App = () => {
//   // const s1={
//   //   name:"uma maheshwari",
//   //   age:21
//   // }
//   const s1="uma maheshwari"
//   const s2={
//     name:"Swapna",
//     age:18
//   };
//   const dayDetails={
//    degree:"45c",
//    day:"MONDAY"
//   }
// const Fruits={
//   name:"mango",
//   yeildSeason:"summer"
// }
//   // const s3={
//   //   name:"alivelu",
//   //   age:40
//   // }
//   // const s4={
//   //   name:"ammulu",
//   //   age:"7"
//   // }
//   const childrens=45
//   return (
//     <div>
//       {/* <childprop>
//           {age} 
//       </childprop>
//    <Students   student1={s1}  student2={s2}/>
//   <Temp tempDetails={dayDetails} ></Temp>
//   <Fruit fruitDetails={fruit}/> */}

//   {/* <Fruits fruitDetails={fruit} /> */}

//       {/* <h1>hello my age is {s1.name} and my age is {s1.age}</h1>
//       <h2>hello my age is {s2.name} and my age is {s2.age}</h2>
//       <h3>hello my age is {s3.name} and my age is {s3.age}</h3>
//       <h4>hello my age is {s4.name} and my age is {s4.age}</h4> */}
//     </div>
//   )
// }

// export default App

import React from 'react'
import StrArray from './ListRendering/NumArray'
import NumArray from './ListRendering/NumArray'
import ObjectsArray from './ListRendering/ObjectsArray'
import FakeData from './ListRendering/fakeData'
import Dummy from './ListRendering/Dummy'


const App = () => {
  return (
    <div>
      <Dummy/>
      <FakeData />
      <StrArray />
       <NumArray />
      <ObjectsArray />
    </div>
  )
}

export default App;
