import withCounter from "./HOC/withCounter";

const HoverCounter = (props) => {
    const {count,inCrementCount} = props;
    return <>
    <h1 onMouseOver={inCrementCount}> Total count : {count} </h1>
    </>
}

export default withCounter(HoverCounter);