import React from 'react'
import ReactDOM from 'react-dom'
import WebFontLoader from "webfontloader"
import dayjs from "dayjs"

import './index.css'
import App from './App'

WebFontLoader.load({
  google: {
    families: ["Open Sans:300,400,700"],
  },
})

dayjs.locale("ru");

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
