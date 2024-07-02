const HoverCounter = ({count,inCrementCount,theme,switchTheme}) => {
    
    const style = theme === 'dark'? {backgroundColor : '#000000', color: '#ffffff'} : null;
    
    return (
        <div>
    <h1  onMouseOver={inCrementCount} style={style} > Total count : {count} </h1>

    <button type="button" onClick={switchTheme}>
        Change Theme
    </button>
    </div>
    );
}

export default HoverCounter;