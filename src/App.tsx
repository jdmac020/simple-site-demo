import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Main } from './components/Main';
import { CssBaseline } from '@mui/material';
import { Home } from './components/Home';

export function App() {
  console.log('thing');
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Main />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}