import React from 'react'
import './IntroPics.css'
import data from "./TemplateData.json";





const IntroPics = ({searchTerm, setSearchTerm}) => {
  return (
      <div className='gallery'>
          
 {/* The Search Filter Work Start */}
 {data.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else {
            const titleMatch = val.title && val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase());
            const dateMatch = val.date && val.date.toLowerCase().includes(searchTerm.toLocaleLowerCase());
            return titleMatch || dateMatch;
          }
      }).map((val) => (
        <div key={val.id}>
          <div className="gallerybox">
              <img src={val.image} alt="" className='pictures'/>
              <h4>{val.title}</h4>
              <p>{val.date}</p>
              </div>
               </div>
      ))}
    </div>
  )
}

export default IntroPics