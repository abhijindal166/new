import logo from './logo.svg';
import './App.css';

import React,{ useEffect,useState} from 'react'
import axios from 'axios';

function App() {
  const [text,settext]=useState("");
  const [text1,settext1]=useState("");
  const url="http://localhost:8000";
  const publish=async()=>{
    try{
      console.log(text);
        // const data= await axios.post(`${url}/send`,"text");
       
        const res=await fetch(`${url}/send`,{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
  
          },
          body:JSON.stringify({
              file1:text,
              file2:text1

              
          })

      });
      const data=await res.json();
      console.log(data.output);
      // console.log(data.output.substring(1, 4));
      
       }
catch(err){
    console.log(err);
    
}
  }

//   const callaboutpage=async()=>{

// 		try{
// const res=await fetch(`${url}/`,{
//          method:"GET",
// 		 headers:{
// 			 Accept:"application/json",
// 			 "Content-Type":"application/json"
// 		 },
// 		 credentials:"include"
// });
// const d=await res.json();
// console.log(d+"fe");}
// catch(err){
//   console.log(err);}
// }
//   useEffect(() => {
//     callaboutpage();
    
//     },[] );
    const showFile = (e) => {
      e.preventDefault();
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result);
       settext(e.target.result);

        console.log(text);
      };
      reader.readAsText(e.target.files[0]);
    };
    const showFile1 = (e) => {
      e.preventDefault();
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result);
       settext1(e.target.result);

        console.log(text1);
      };
      reader.readAsText(e.target.files[0]);
    };
    return (
<>
      
      {/* <div>
        <input type="file" onChange={showFile} />
        <button className="newsletter-btn" onClick={publish} >publish</button>
      </div> */}

<div className="wrapper">
<div className="form">
  <div className="pageTitle title">Sign Up </div>
  <div className="secondaryTitle title">Please fill this form to sign up.</div>
  <input type="file" className="name formEntry"  onChange={showFile}  placeholder="choose a file" />
  <input type="file" className="email formEntry"  onChange={showFile1}  placeholder="choose a file"/>
  
  
  
  <button className="submit formEntry" onClick={publish}>compare</button>
</div>
</div>

</>
    );
}

export default App;
