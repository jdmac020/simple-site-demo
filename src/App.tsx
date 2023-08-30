import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { CssBaseline } from '@mui/material';
import { Home } from './components/Home';

export function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}