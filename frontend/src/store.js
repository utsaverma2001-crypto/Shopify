import {applyMiddleware, createStore,compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";
import { userSigninReducer } from "./reducers/userReducer";

 //to create store we require first initstate and reducer
 const initialState={
    userSignin:{
      userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
    } ,
    cart:{
     cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
 }};
 const reducer= combineReducers({
     productList: productListReducer,
     productDetails:productDetailsReducer,
     cart:cartReducer,
     userSignin:userSigninReducer
 })

 //to show redux store on inspect->redux devtools thats why we use redux-thunk
 //to connect to chrome developer tools
 const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 //store created using createStore
 const store= createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
 export default store;