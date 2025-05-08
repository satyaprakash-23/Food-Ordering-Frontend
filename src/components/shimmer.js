import React from 'react'

const arrayOfDiv = Array.from({length:10}).map((e,i)=>{
    return <div key={i} className="w-44 h-52 bg-slate-400 mt-3 "></div>
})

// console.log(arrayOfDiv);


const BlankBox = ()=>{
   return (
    <div className="flex flex-wrap gap-4 justify-center max-h-full max-w-full">
        {
            arrayOfDiv
        }

    </div>
   )
}

export default BlankBox;