import React from 'react';
import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const SearchBox=()=>{

    const initstate=["shivam","singh","random","noone","nigam","rajneesh","patanhi"];
    const[userData,setData]=useState();
    const[person,setPerson]=useState(initstate);
    const[output,setoutput]=useState(initstate);

    const eventt=(e)=>{
        storeInfo(e.target.value);
        console.log(e.target.value);
    }
    
    const storeInfo=(e)=>{
        setData(e);
    console.log(e);
    // let tempData=person.filter(data=>data.includes(e))
    // setoutput(tempData);  
    let tempData=person.filter((data,index)=>{return data.includes(e);
    console.log(index)})
    setoutput(tempData);  

};





    return(<>
    <div className=" m-auto d-flex justify-content-center flex-wrap">

        <input  placeholder="search" 
        //  onChange={(e)=>{
            // storeInfo(e.target.value);}} />

            onChange={eventt}/>

        
            <button className="btn btn-primary  p-1"   >Search</button>
            </div>
            <div className="mt-5">

        {
            output.map((data,index)=>{
                return<div className="mt-2 offset-6">{data}</div>
            })


        }


            </div>      


        </>

    )
}
export default SearchBox;