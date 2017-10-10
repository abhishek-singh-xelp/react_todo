import React from "react";
import Input from "./input";
import InputPassword from "./inputPassword";
import TextArea from "./textArea";
import Label from "./label";
import Test from "./test";
import Try from "./try";
export default class Body extends React.Component{
    render(){
        return <div>
                <Test/>
                <Try/>
                <Input />
                <Label  data={"Label"} />
                <InputPassword />
                <TextArea />
            </div>;
    }
}