import Counter from "./assets/Components/RenderProps/Counter";
import ButtonCounter from "./assets/Components/RenderProps/ButtonCounter";
import React from "react";
import ThemeContext from "./assets/Components/ContextAPI/ThemeContext";
import Section from "./assets/Components/ContextAPI/Section";
class App extends React.Component {
  state = {
    theme : "light",
    
    switchTheme: () => {
      this.setState(({ theme }) => {
          if (theme === 'dark') {
              return {
                  theme: 'light',
              };
          }
          return {
              theme: 'dark',
          };
      });
    },
}

switchTheme = () => {
  this.setState(({ theme }) => {
      if (theme === 'dark') {
          return {
              theme: 'light',
          };
      }
      return {
          theme: 'dark',
      };
  });
}


render(){
 
  return (
    <div>
    <Counter>
      {(count,inCrementCount) => (
          <ButtonCounter count = {count} inCrementCount={inCrementCount}/>
      )}
    </Counter>
    <ThemeContext.Provider value={this.state}>
       <Section/>
    </ThemeContext.Provider>
    
  </div>
  );
}
  
}

export default App;
