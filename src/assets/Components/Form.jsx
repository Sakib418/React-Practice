import React from "react";




export default class Form extends React.Component{
   state={
     title:"",
     text: "Text Area",
     library: "React",
     isAwesome: true,
   };


   handleChange = (e) => {
    if(e.target.type === "text"){
        this.setState({
            title: e.target.value,
        });
    }else if(e.target.type === "textarea"){
        this.setState({
            text: e.target.value,
        });
        
    }else if(e.target.type === "select-one"){
        this.setState({
            library: e.target.value,
        });
    }
    else if(e.target.type === "checkbox"){
        this.setState({
            isAwesome: e.target.checked,
        });
    }
    else{
        console.log("Nothing Here");
        console.log(e.target.type);
    }
    
   }
    
   submitHandle = (e) => {
    const {title,text,library,isAwesome} = this.state;
    e.preventDefault();
    console.log(title,text,library,isAwesome);
   }
    render(){
        const {title,text,library,isAwesome} = this.state;
        return(
            <div>
                <form onSubmit={this.submitHandle}>
                    <input type="text" placeholder="Enter title"
                    value={title} onChange={this.handleChange} />
                 <br/>
                 <br/>
                 <textarea name="text" value = {text} onChange = {this.handleChange} />
                 <br/>
                 <br/>
                 <select value={library} onChange={this.handleChange}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                 </select>
                 <br/>
                 <br/>
                 <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
                 <br/>
                 <br/>
                 <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}