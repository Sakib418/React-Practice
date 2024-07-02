import React from "react";
import Button from "./Button";
class Clock extends React.Component {
    state = { date: new Date(), locale: "bn-BD" };


    componentDidMount() {
        this.clockTimer = setInterval(() => { this.tick() }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
 
    tick = () => {
        this.setState({
            date: new Date()
        });
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    }

    render() {
        const {date,locale} = this.state;
        let button;
        //let clickName;
        button = locale === "en-US" ? "bn-BD" : "en-US";
        //clickName = locale === "en-US" ? "BD" : "US";
        return (
            <div>
                <h1 className="heading">
                    <span className="text">Hello {date
                        .toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handleClick} locale= {button} >
                    
                </Button>
            </div>
         );
    }
}

export default Clock;
