import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const UsersPage = React.lazy(() => import("usersApp/UsersPage"));
const ProductsPage = React.lazy(() => import("productsApp/ProductsPage"));
const UserDetailPage = React.lazy(() => import("usersApp/UserDetailPage"));

// Wrapper component to pass props to microfrontend
const UserDetailPageWrapper = () => {
  const { id } = useParams();
  return <UserDetailPage userId={id} />;
};

function App() {
  return (
    <Router>
      <nav>
        <Link to="/users">Users</Link> | <Link to="/products">Products</Link> | <Link to="/users/4">User Detail</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/users/:id" element={<UserDetailPageWrapper />} />
          <Route path="/" element={<h2>Welcome to Host App</h2>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
