import React from 'react';

class LogOutPage extends React.Component {
    refresh =() => {
      window.location.reload({});
    }; 

    render() {
        return(
        <div>
            <div className="contianer center">
              <h1>Bye Bye! See you Next Time!</h1>
              <h2>P.I.N.K.</h2>
              <button className="button" onClick={ this.refresh }>Press to Logout</button>
              <br/> <br/>
            </div>

        </div>
        ); 
    }

}

export default LogOutPage;
