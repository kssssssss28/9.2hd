import React from 'react'
import Pic from './Pic'
import Tag from './Tag'
let Setting =(propos)=>
{
    
    const {fileUpload, picShow} = Pic({ id: 'PictureUpload' })
    var setting =" "
     setting = propos.type
    


return(

<div className="picBox" >
<div className="content3">
{picShow}
{fileUpload}
</div>
<div className="content2">
<Tag />
</div>

</div>

)




}

export default Setting