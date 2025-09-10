import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// Import local CSS
import "./index.css";

// Lazy load remote components with error handling
const UsersPage = React.lazy(() => 
  import("usersApp/UsersPage").catch(() => ({
    default: () => <div>Users App is not available</div>
  }))
);
const ProductsPage = React.lazy(() => 
  import("productsApp/ProductsPage").catch(() => ({
    default: () => <div>Products App is not available</div>
  }))
);
const UserDetailPage = React.lazy(() => 
  import("usersApp/UserDetailPage").catch(() => ({
    default: () => <div>User Detail App is not available</div>
  }))
);

// Wrapper component to pass props to microfrontend
const UserDetailPageWrapper = () => {
  const { id } = useParams();
  return <UserDetailPage userId={id} />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md p-4 mb-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-teal-500 mb-4">Host App</h2>
            <div className="space-x-4">
              <Link to="/users" className="text-blue-600 hover:text-blue-800 font-medium">Users</Link>
              <Link to="/products" className="text-blue-600 hover:text-blue-800 font-medium">Products</Link>
              <Link to="/users/4" className="text-blue-600 hover:text-blue-800 font-medium">User Detail</Link>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4">
          <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
            <Routes>
              <Route path="/users" element={<UsersPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/users/:id" element={<UserDetailPageWrapper />} />
              <Route path="/" element={<h2 className="text-3xl font-bold text-gray-800 text-center py-8">Welcome to Host App</h2>} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
