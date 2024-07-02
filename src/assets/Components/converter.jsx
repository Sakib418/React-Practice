export function toCelcious(fahrenheit){
    return ((fahrenheit - 32) * 5)/9;
}

export function toFahrenheit(celcious){
    return (celcious *9)/5 + 32;
}

export function convert (tempreture,convertTo){
    const input = parseFloat(tempreture);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convertTo(input);
    const rounded = Math.round(output *1000) /1000;
    return rounded.toString();
}