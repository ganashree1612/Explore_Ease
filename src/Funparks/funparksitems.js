import React from 'react';
import { Link} from "react-router-dom";
const Funparksitems = ({items,handleItemClick}) => {
  return (
    <>
        <div className="menu-items container-fluid mt-5 ">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            
                            {
                                items.map((elem) => {
                                    const { id, name, image, link,Address,price,description } = elem;

                                    return (
                                    
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 mb-5 border bg-red-300 mx-[110px] border-gray-300 rounded p-3" key={id} onClick={() => handleItemClick(name)}>
                                            <div className="row Item-inside">
                                                {/* for images */}
                                                <div className="col-12 col-md-12 col-lg-4 img-div">
  <img src={image} alt={name} className="img-fit border rounded object-cover" />
</div>


                                                {/* menu items description */}
                                                <div className="col-12 col-md-12 col-lg-8 ">
                                                    <div className="main-title pt-4 pb-3">
                                                        <h1 className="text-2xl font-bold">{name}</h1>
                                                        <hr className=' dark:bg-gray-700' />
                                                        <a href={link} className='text-blue-500'>{link}</a>
                                                        <hr className=' dark:bg-gray-700' />
                                                        <p>{Address}</p>
                        
                                                        <hr className=' dark:bg-gray-700'/>
                                                         <p>{description}</p>
                                                    </div>
                                                    <div className="menu-price-book">
                                                        {/* <div className="price-book-divide d-flex justify-content-between ">
                                                            <h2>Price : {price}</h2>
                                                            <Link to="/Review">
                                                                <button className="btn btn-primary">See Reviews</button>
                                                            </Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }

                             
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Funparksitems;