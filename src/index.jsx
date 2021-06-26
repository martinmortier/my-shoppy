import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import MainTheme from "./components/mainTheme/MainTheme";
import { Switch, Route } from "react-router-dom";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import Login from "./components/login/Login";
import ProductList from "./components/productList/ProductList";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
		<MainTheme>
			<Switch>
				<Route path="/shoppingCart">
					<ShoppingCart />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/productList">
					<ProductList />
				</Route>
				<Route path="/">
					<App />
				</Route>
			</Switch>
		</MainTheme>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
