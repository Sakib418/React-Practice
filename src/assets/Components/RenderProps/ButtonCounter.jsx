
const ButtonCounter = ({count,inCrementCount}) => {
    return (
        <div>
    <button type="button" onClick={inCrementCount} > Total count : {count} </button>
    </div>
    );
    
}

export default ButtonCounter;
