import { store } from "./index";
import {FetchedSuccess, FetchedFail} from './Redux/Actions/fetchDataAction'


export function fetchData(){
    fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          console.log(res);
          store.dispatch(FetchedSuccess(res))
        }).catch(er =>{
            console.log(er);
            store.dispatch(FetchedFail())
          })
}


