import React, { useState } from 'react'

let ta

let Tag =(e)=>
{

    let [text,setText]=useState()    
    
    let handlechange =(e)=>
    {
    ta=e.target.value
    }

    let handlesubmit=(e)=>
    {
        e.preventDefault()

        setText(ta)
        return(text)
    }


    let meta = new FormData()



   function piclist(picture ){
    meta.append("pictures", picture)
    meta.append('tags',ta)
    }

    const PictureStore = () => {
       
        const pictures = Array.from(document.getElementById('PictureUpload').files)
        
        pictures.forEach(piclist)
        
        fetch("http://localhost:3006/", {
          method: "POST",
          body: meta
        })
      .then((res)=>{console.log(res)})

      }




  return (
<div className="tag">
<h1></h1>
    <form onSubmit={handlesubmit}>
      <input type="text" onChange={handlechange}>
   </input>   
   <input type="submit" value="submit"  onSubmit={handlesubmit} onClick={PictureStore}>
   </input>  
    </form>
    <h2>
    Tag:
    </h2>
    <h2 > {text}</h2>
</div>

    )
}
export default Tag