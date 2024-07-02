import withCounter from "./HOC/withCounter";

// eslint-disable-next-line react-refresh/only-export-components
const ButtonClickCounter = (props) => {
    const {count,inCrementCount} = props;
    return (
        <div>
    <button type="button" onClick={inCrementCount} > Total count : {count} </button>
    </div>
    );
    
}
// eslint-disable-next-line react-refresh/only-export-components
export default withCounter(ButtonClickCounter);