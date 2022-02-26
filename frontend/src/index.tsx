import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './lib/utils/reportWebVitals';
import customTheme from './lib/utils/theme';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

console.log("%c" + "Hold Up!", "color: red; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;");
console.log("%c" + "Pasting anything in here could give attackers access to your account!", "color: blue; -webkit-text-stroke: 2px black; font-size: 20px; font-weight: bold;");
console.log("%c" + "Hold Up!", "color: red; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;");
console.log("%c" + "Pasting anything in here could give attackers access to your account!", "color: blue; -webkit-text-stroke: 2px black; font-size: 20px; font-weight: bold;");
console.log("%c" + "Hold Up!", "color: red; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;");

reportWebVitals();
