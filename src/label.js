import React from 'react';


export default class Label extends React.Component{
   render(){
       return <div>
           {this.props.data}
       </div>
   }
}