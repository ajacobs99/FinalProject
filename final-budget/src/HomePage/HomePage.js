import React, { Component } from 'react';
// import { Pie } from 'react-chartjs-2'; 
import axios from 'axios'; 

class HomePage extends Component {
    state = {
        data : {
            datasets: [
                {
                data: [], 
                backgroundColor: [
                    '#ffcd56',
                    '#fd6b19',
                    '#36a2eb',
                    '#b4f0be',
                    '#963793',
                    '#e0d11a',
                    '#ffc0cb',
                ]
                }
            ],
            labels: []
        }
     
        
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/budget'); 
        console.log(res);
        let temp = this.state.data; 
        for(let i=0; i<res.data.myBudget.length; i++){
            temp.datasets[0].data[i] = res.data.myBudget[i].budget; 
            temp.labels[i] = res.data.myBudget[i].title

        } 
        
       this.setState({
           data: Object.assign({}, this.state.data, {
               data: temp
           })
       }); 

    }
    render(){
        return (
            <div>
                <div className="container center">

    <div className="page-area">

    <div className="text-box">
        <h1 id="change">What is P.I.N.K. ?</h1>
        <p>
            P.I.N.K. is a web application that helps you create and manage your personal finances. 
            Whether it be home, auto, insurance, entertainment, loans, etc. P.I.N.K. is made to help you 
            see how much you're spending in each category you set.
        </p>
    </div>
    
    <div className="text-box">
        <h1>Results</h1>
        <p>
            Want to know where all your money is going? Track it with P.I.N.K.!
            Based off of your input P.I.N.K. will generate a report of your results
            in the form of a pie chart ! 
        </p>
    </div>

    <div className="text-box">
        <h1>Getting Started</h1>
        <p>
            Are you ready to get tracking?! Navigate to the budget tab to get started on your personal budget pie chart! 
        </p>
    </div>

    <div className="text-box">
        <h1 id="main">Did someone say Free?!</h1>
        <p>
            Yes, you read it correctly! This app is 100% free!!! And you are the only one holding your data!
        </p>
    </div>
{/* 
    <div className="text-box">
        <h1>Chart</h1>
        <p>
            <canvas id="myChart" width="400" height="400"></canvas>
        </p>
    </div> */}

    </div>

    </div>
                {/* <div>
                    <Pie data={this.state.data} />
                </div> */}
            </div>
        )
    }

}
   

export default HomePage;
