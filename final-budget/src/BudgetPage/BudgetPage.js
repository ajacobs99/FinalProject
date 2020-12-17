import React, { Component } from 'react';
// import { Pie } from 'react-chartjs-2'; 
// import axios from 'axios'; 

function BudgetPage() {

  return (
    <div >
          <div className="container center">
                  <h2>My Budget</h2>
                  
                  <p>Let's build your budget</p>

                  <div className="text-box">
                          <h1>Chart</h1>
                          <p>
                              <canvas id="myChart" width="400" height="400"></canvas>
                          </p>
                  </div> 
            
                  <div>
                        {/* <Pie data={this.state.data} /> */}
                  </div> 
    
          </div>
    </div>

  );
}

export default BudgetPage;


//   state = {
//     data : {
//         datasets: [
//             {
//             data: [], 
//             backgroundColor: [
//                 '#ffcd56',
//                 '#fd6b19',
//                 '#36a2eb',
//                 '#b4f0be',
//                 '#963793',
//                 '#e0d11a',
//                 '#ffc0cb',
//             ]
//             }
//         ],
//         labels: []
//     }

// }
// async componentDidMount()=>{
//     const res = await axios.get('http://localhost:3000/budget'); 
//     console.log(res);
//     let temp = this.state.data; 
//     for(let i=0; i<res.data.myBudget.length; i++){
//         temp.datasets[0].data[i] = res.data.myBudget[i].budget; 
//         temp.labels[i] = res.data.myBudget[i].title

//     } 
    
//    this.setState({
//        data: Object.assign({}, this.state.data, {
//            data: temp
//        })
//    }); 

// }