import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const UsersPage = React.lazy(() => import("usersApp/UsersPage"));
const ProductsPage = React.lazy(() => import("productsApp/ProductsPage"));

function App() {
  return (
    <Router>
      <nav>
        <Link to="/users">Users</Link> | <Link to="/products">Products</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/" element={<h2>Welcome to Host App</h2>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
