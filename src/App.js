// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NavBar from "./components/common/NavBar";
// import HomePage from "./components/pages/HomePage";
// import LoginPage from "./components/pages/LoginPage";
// import BlogCreationPage from "./components/pages/BlogCreationPage";
// import ProfilePage from "./components/pages/ProfilePage";
// import MyBlogsPage from "./components/pages/MyBlogsPage";
// import PageNotFound from "./components/pages/PageNotFound";
// import ProtectedRoute from "./components/common/ProtectedRoute";
// import { ContextProvider } from "./context/Context";

// const App = () => {
//   return (
//     <ContextProvider>
//       <Router>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/create-blog" element={<ProtectedRoute><BlogCreationPage /></ProtectedRoute>} />
//           <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
//           <Route path="/my-blogs" element={<ProtectedRoute><MyBlogsPage /></ProtectedRoute>} />
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </Router>
//     </ContextProvider>
//   );
// };

// export default App;














// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import BlogCreationPage from "./components/pages/BlogCreationPage";
import ProfilePage from "./components/pages/ProfilePage";
import MyBlogsPage from "./components/pages/MyBlogsPage";
import PageNotFound from "./components/pages/PageNotFound";
import ProtectedRoute from "./components/common/ProtectedRoute";
import { ContextProvider } from "./context/Context";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-blog" element={<ProtectedRoute><BlogCreationPage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/my-blogs" element={<ProtectedRoute><MyBlogsPage /></ProtectedRoute>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
