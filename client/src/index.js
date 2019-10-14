import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Router} from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
