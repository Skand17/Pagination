import React, { useState } from 'react'

function Pagination({
    totalPost,
    postNumber,
    paginate
}) {

    const [active, setActive] = useState(1)

    let postFreq = []

    for(var i=1;i<Math.ceil(totalPost/postNumber + 1);i++){
        postFreq.push(i)
    }
    
    return (
        <div className="pagination-wrapper">
            <ul>
                <li className={active == 'first' && "active"} onClick={ () => {
                    paginate(1)
                    setActive('first')
                }}
                >First</li>
                {
                    postFreq.map( (item,index) => {
                        return <li className={active == item && "active"} onClick={ () =>  {
                            paginate(item)
                            setActive(item)
                        } } >{item}</li>
                    })
                }
                <li className={active == 'last' && "active"} onClick={ () => {
                        paginate(postFreq.length)                      
                        setActive('last')
                }}>Last</li>
            </ul>
        </div>
    )

}

export default Pagination
