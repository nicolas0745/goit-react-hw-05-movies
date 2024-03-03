import Header from 'components/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div
            style={{
              display: 'grid',
              placeContent: 'center',
            }}
          >
            Loading Page...
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export { SharedLayout };
