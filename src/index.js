import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const Person = ({img,name,job,children}) =>{
    const url=`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
   

    return(
        <article className="person">
            <img src= {url}
            alt="person"/>

            <h4>{name}</h4>
            <h4>{job}</h4>
            {children}
        </article>
    );
};




const PersonList = () =>{
    return(
        <section className="personList">
           <Person img="31" name="bob" job="developer" />
           <Person img="32" name="harry" job="designer">
               <p> 
                dfghj gshbndm twgdhmf
               </p>
           </Person>
          
           
         
           <Person img="33" name="starly" job="marketing expert" />
        </section>
    );
};





ReactDom.render (<PersonList></PersonList>,
document.getElementById('root'))
