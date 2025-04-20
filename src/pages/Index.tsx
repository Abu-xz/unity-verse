import { Navigate } from "react-router-dom";

// Redirect to home
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
