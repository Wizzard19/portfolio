import React from 'react';
import Login from '../Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Other from '../Pages/Other';

function Public() {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
    </Routes>
  );
}

export default Public;
