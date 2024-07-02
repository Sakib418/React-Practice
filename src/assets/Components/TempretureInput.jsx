


const scaleName = {
    c:'celcious',
    f:'fahrenheit'
};


// tempretureChange = (e,scale) => {
//     this.setState({
//      tempreture: e.target.value,
//      scale,
//     });
//  };
export default function TempretureInput ({scale,tempreture,tempretureChange}){
    
        return(
    <>
        <fieldset>
            <legend>Enter tempreture in {scaleName[scale]}</legend>
            <input type="text" value={tempreture}  onChange={(e) => tempretureChange(e,scale)}/>
        </fieldset>
        {/* <TempretureVerdict celcious={parseFloat(tempreture)} /> */}
        </>
        );

    }