import Searchcontainer from "./Searchcontainer";
import {useState } from "react";
import ohio from '../ohio.gif';
import jio from '../jio.gif'
import odisej from "../odisej.gif"
import WorkCards from "./WorkCards";
import firstgif from '../firstgif.gif';
import rocket from "../rocket.gif";
import "./Cards.css"
function SearchCards() {

  const chunckSize = 2;
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [cards,setCards] = useState(items.slice(0,chunckSize));
  const navigateNext = (idx) => {
    
    console.log(idx);
    let sidx = ((chunckSize*(idx-1)))%items.length;
    let eidx = Math.min(items.length-1,sidx + chunckSize-1);

    const splicedArray = items.slice(sidx,eidx+1);
    console.log(splicedArray);
    setCards(splicedArray);
  }
  const styles = { width: 300, display: 'block', marginBottom: 10, border: "10px solid green" };
  return (
    <div className="App-header">
   <Searchcontainer></Searchcontainer>
      <div className="projects-card-container">
        <div className="skill-card-show">
        <div class="container">
        
              <WorkCards title="Awwards" para="awwwards clone." imageurl={firstgif} cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla natus nam alias tempore beatae cum sapiente, facilis illum nobis, nisi doloribus sequi, nostrum saepe fuga ex harum? Porro, quo optio?" backcolor="#f53232"/>
              <WorkCards title="Veneria" para="Veneria clone." imageurl={ohio} cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla natus nam alias tempore beatae cum sapiente, facilis illum nobis, nisi doloribus sequi, nostrum saepe fuga ex harum? Porro, quo optio?" backcolor="#ff5e00"/>
              <WorkCards title="Infos" para="infos clone." imageurl={jio} cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla natus nam alias tempore beatae cum sapiente, facilis illum nobis, nisi doloribus sequi, nostrum saepe fuga ex harum? Porro, quo optio?" backcolor="#2b26c3"/>
              <WorkCards title="Rocket" para="RocketAir clone." imageurl={rocket} cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla natus nam alias tempore beatae cum sapiente, facilis illum nobis, nisi doloribus sequi, nostrum saepe fuga ex harum? Porro, quo optio?" backcolor="#0091ff"/>
              <WorkCards title="odisej" para="Hotel odisej clone." imageurl={odisej} cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla natus nam alias tempore beatae cum sapiente, facilis illum nobis, nisi doloribus sequi, nostrum saepe fuga ex harum? Porro, quo optio?" backcolor="#366622"/>
            
         </div>

        </div>

      </div>

      {/* <div className="pages-item-scroll">
        <div className="pagination">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(idx => {
            return (
              <>
                <input id={`dotted-${idx}`} type="radio" name="dotteds" onClick={()=>navigateNext(idx)}/>
                <label htmlFor={`dotted-${idx}`} />
              </>
            )
          })}
          <div className="pacman" />
        </div>

      </div> */}
    </div>
  );
}

export default SearchCards;
