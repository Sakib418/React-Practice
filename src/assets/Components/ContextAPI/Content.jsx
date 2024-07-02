import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import Counter from '../RenderProps/Counter';
import HoverCounter from '../RenderProps/HoverCounter';
export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;

   
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(count, inCrementCount) => (
                    <HoverCounter
                        count={count}
                        inCrementCount={inCrementCount}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
}