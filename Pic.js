import React, { useState,useRef, useReducer } from 'react'
import {Image} from 'react-bootstrap'
import './pic.css'


let  Pic = (props) => {
  const {
    id = true
  } = props
  
  const ref = useRef()
  const [state, blockUpdate] = useReducer(s => s + 1, 1)
  const pL= useRef([])
  const setpL = (v) => {
    pL.current = v
    blockUpdate()
  }
  const [tag, setTag] = useState([])

  const pickPicture = (e) => {
    const files = document.getElementById(props.id).files

    const tempList = []


    Array.from(files).forEach(element=> {
      const key = element.name + element.lastModified.toString()
   
        tempList.push(
        {
          name: element.name,
          key: key
        }
        )
        setpL(tempList)
        setTag(tempList.map(n => ''))
        const index = tempList.length - 1
        const read = new FileReader()
        read.readAsDataURL(element)
        read.onload = function () 
        {
          const tmpList = pL.current
          tmpList[index].src = this.result
          setpL(tmpList)
        }
      
    })
  }



  const objPicture = {
    id,    
    onChange: pickPicture
  }



  const fileUpload =
   <div>
    <input type="file" accept="image/*"{...objPicture} />
  </div>



  const picShow = <div className="picBox">
    {
      pL.current.map((p, index) => (
        <div>
          {p.src ?
            <React.Fragment>
              <Image src={p.src} thumbnail className="pic" />
            </React.Fragment>
            : <div ></div>}
        </div>
      ))
    }
  </div>



  return {
    fileUpload:  fileUpload,
    picShow: picShow,
    tag
  }
}
export default Pic