import React from "react";


const Card = (props) => {
  return<div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row', justifyContent:"center",alignContent:'center'}}> <div className="h-[600px] w-[550px]  p-8 rounded-2xl relative border">{props.children}</div></div>;
};

export default Card;
