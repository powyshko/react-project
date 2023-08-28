import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={(
              <Suspense>
                <div className='page-wrapper'>
                  {element}
                </div>
              </Suspense>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
