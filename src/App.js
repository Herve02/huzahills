import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Product from "./component/Product";
import ProductDetail from "./component/ProductDetails";
import Subscription from "./component/Subscription";
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
