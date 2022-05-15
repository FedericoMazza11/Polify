import React, {useState} from 'react'
import Categories from './Categories'
import { Routes as Switch, Route, useLocation, NavLink } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import MusicPage from './MusicId'
import Search from './Search'
import Login from './Login';
import LoginTrue from './LoginTrue';


const Main = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const location = useLocation();

	return (
    <div className="Main">
      <div className="upperNav">
              <Switch location={location}>
              <Route  exact path="/" element={
<div>         <NavLink to="/LoginTrue" >
          <p> Login </p>
        </NavLink>
        <NavLink to="/Login">
          <p> Registro </p>
        </NavLink></div>
              }> </Route>
              <Route  path="/Buscar" element={      

                <input class="searchBar" type="text" name="name" maxLength="80" autoCorrect="off" autocomplete="off"  autoCapitalize="off" spellCheck="false" placeholder="Artistas, canciones o pódcasts" 
                onChange={event => {setSearchTerm(event.target.value)}}/>

}> 
 </Route>
              <Route  path="/Biblioteca" element={ <p>Test</p>}> </Route>
              </Switch>
      </div>
      <div className="mainContent">

          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
              <Switch location={location}>
              
              <Route  exact path="/" element={<Categories/>}> </Route>
              <Route  path="/Buscar" element={<Search dataInput={searchTerm}/>}>  </Route>
              <Route  path="/Biblioteca" element={<p>BIBLIOTECA!</p>}> </Route>
              <Route path="/Musica/:id" element={<MusicPage/>}></Route>
              <Route path="/Login" element={<Login/>}></Route>
              <Route path="/LoginTrue" element={<LoginTrue/>}></Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>

      </div>
    </div>
	)
};

export default Main