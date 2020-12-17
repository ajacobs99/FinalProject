import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2'; 
// import axios from 'axios';
var name = window.prompt("name your budget");

var chartLabel1 = window.prompt("enter Label 1/3");
var chartLabel2 = window.prompt("enter Label 2/3");
var chartLabel3 = window.prompt("enter Label 3/3");
  
var chartval1 = window.prompt("enter value 1/3");
var chartval2 = window.prompt("enter value 2/3");
var chartval3 = window.prompt("enter value 3/3");
  
class BudgetPage extends Component {

  constructor (props){
    super(props);
    this.state = {
      chartData: {
            labels: [chartLabel1, chartLabel2 ,chartLabel3], 
            datasets: [
                  {
                    label: name, 
                    data: [chartval1, chartval2, chartval3], 
                    backgroundColor: [
                      'rgba(162, 222, 208, 1)', 
                      'rgba(153, 102, 255, 0.6)', 
                      'rgba(255, 236, 139, 1)', 
                    ]
                  }
              ]
      }
    } 

  }
    render(){
      return(
        <div className="contianer center">
            <h2>My Budget</h2>
            <p>Hover over each bar to see label information and value</p>    
            <div className="text-box">
                  <Bar 
                        data ={this.state.chartData}
                        options={{}}/>
            </div>

        </div>
      )
    }

} export default BudgetPage;  
// function BudgetPage() {

//   return (
//     <div >
//           <div className="container center">
//                   
//                   <div className="text-box">
//                           <h1>Chart</h1>
//                           <p>
//                               <canvas id="myChart" width="400" height="400"></canvas>
//                           </p>
//                   </div> 
            
//                   <div>
//                         <Pie data={this.state.data} />
//                   </div> 
    
//           </div>
//     </div>

//   );
// }

// export default BudgetPage;


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