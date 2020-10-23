import React from 'react';

const Header = React.lazy(() => import("header/Header"));
console.log(Header);
function App() {
  return (
    <div>
      <p>Chloe</p>
      <React.Suspense fallback="Loading puppies">
        <Header>puppy</Header>
      </React.Suspense>
    </div>
  );
}

export default App;
