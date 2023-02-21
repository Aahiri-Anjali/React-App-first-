import React from "react";

class CustomerData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }

    this.callAPI = this.callAPI.bind(this)
    this.callAPI();
  }

  callAPI() {
    fetch("http://senseiv.in/api/customers/?format=json")
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((responseData) => {
        console.log(responseData);
      });
  }

  render(){
    return (
        <div>

        </div>
    )
  }


}

export default CustomerData;
