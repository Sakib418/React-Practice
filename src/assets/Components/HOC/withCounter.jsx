import React from "react";

const withCounter = (OriginalComponent) => {
   class NewComponent extends React.Component {
    state = {
        count : 0,
    }

    inCrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    };
     render(){
        const {count} = this.state;
        return <OriginalComponent  count={count} inCrementCount = {this.inCrementCount}/>
     }

   }
   return NewComponent;
}

export default withCounter;