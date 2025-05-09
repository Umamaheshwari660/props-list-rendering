import React from "react";


const Temp = (details) => {
    console.log(details)
    // const detailsMain=details;
    return(
        <div>
            <h1>{details.tempDetails.day}</h1>
            {/* <h1>{detailsMain.Day}</h1> */}
        </div>
    )
}
export default Temp;



// function temp(temp){
//     console.log(temp)
//     return(
//        <div>
//         <h1>Umamaheshwari</h1>
//         <h1>{temp.temperature.day}</h1>
//        </div>
//     )
// }
// export default temp