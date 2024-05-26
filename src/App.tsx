import "./App.css";
import DeclareRouter from "./router/index.tsx";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    // return <ProductView />;
    return (
        <Router>
            <DeclareRouter />
        </Router>
    );
};

export default App;
