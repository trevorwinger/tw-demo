import React from 'react';

const Test = ({name, body, image}) => {
  return(
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl margin-10 md:flex" >
      <div className="ml-6 pt-1 md:flex-shrink-0">
        <img class="object-contain h-48 w-full md:w-48" src={image}></img>
        <h1 className="text-2xl text-green-700 leading-tight">
          {name}
        </h1>
        <p className="text-base text-gray-700 leading-normal">
            {body}
        </p>
      </div>
  </div>
  )
}

export default Test;
