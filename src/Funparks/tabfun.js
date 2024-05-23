import React from 'react'

const Tabfun = ({category,filterItem}) => {
  return (
    <>
        <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around ">
                    {
                        category.map((curr,index)=>{
                            return  <button className="btn btn-warning " onClick={() => filterItem(curr)} key={index} >{curr}</button>
                        })
                    }
                </div>
            </div>
    </>
  )
}

export default Tabfun;