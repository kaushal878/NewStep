/* import { useState } from 'react' */
/* import reactLogo from './assets/react.svg' */
/* import viteLogo from '/vite.svg' */
/* import './App.css' */
/* import Sidebar from './component/sidebar' */
/* import AddBook from './component/addbook' */
/*  */
/* function App() { */
/*   const [count, setCount] = useState(0) */
/*  */
/*   return ( */
/*     <> */
{/*     <div className='container'> */ }
{/*       <div style={{ width:20%}}> */ }
{/*         <Sidebar/> */ }
{/*       </div> */ }
{/*       <div className='content'> */ }
{/*         <h1>Book Management System</h1> */ }
{/*         <AddBook/> */ }
{/*     </div> */ }
{/*     </div> */ }
{/*     <Sidebar/> */ }
{/*     </> */ }
/*   ) */
/* } */
/*  */
/* export default App */
/*  */

import React from 'react';
import Sidebar from './component/sidebar';
import AddBook from './component/addbook';
import AddUser from './component/adduser';
import './App.css';

 
function App() {
  return (
    <>
      <div className='container'>
        <div style={{ width: '20%' }}>
          <Sidebar />
        </div>
        <div style={{ width: '80%' }} className='content'>
          {/* <h1>Book Management System</h1> */}
          <AddBook/>
        </div>
        <AddUser/>
      </div>

    </>
  );
}

export default App;