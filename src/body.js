import React from "react";
import Input from "./input";
import Test from "./test";
import Try from "./try";
export default class Body extends React.Component{
    render(){
        return <div>
                <Input/>
                <Test/>
                <Try/>
            </div>;
    }
}