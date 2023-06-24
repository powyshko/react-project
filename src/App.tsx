import React, { Suspense, useState } from 'react';
import './styles/index.scss'
import { Route, Routes, Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { classNames } from './helpers/classNames/classNames';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggleTheme = () => {
    const currentTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme(currentTheme);
  }

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>

      <Link to={'/'}>Главная</Link>

      <Link to={'/about'}>О сайте</Link>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />

          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;