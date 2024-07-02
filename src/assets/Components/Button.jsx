import React from "react";


class Button extends React.Component{
shouldComponentUpdate(nextProps){
    const {change: currentChange,locale: currentLocale} = this.props;
    const {change: nextChange,locale: nextLocale} = nextProps;
    if(currentChange === nextChange && currentLocale === nextLocale){
        return false;
    }
    else{
        return true;
    }

}

render(){
    const {change,locale} = this.props;
    return(

        <button type="button" onClick={ () => change(locale)}>
            {locale === "en-US" ? 'English clock' : 'Bangla clock'}
        </button>
    )
}
}

export default Button;