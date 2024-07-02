export default function TempretureVerdict({celcious = 0}){

    if(celcious >= 100){
      return  <p>Water will boil!!!</p>;
    }
    return <p>Water will not boil!!!</p>;
}