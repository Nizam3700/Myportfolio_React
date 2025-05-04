import React from 'react';
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import Projectoverview from './Projectoverview'; // Your Project overview component

function Projectdetailsdata() {
  return (
    <Router>
      <Routes>
         {/* <Route path="/procard" element={<ProCard />} />  */}
        
        <Route path="/document/:id" element={<Projectoverview/>} />

      </Routes>
    </Router>
  );
}

export default Projectdetailsdata;
