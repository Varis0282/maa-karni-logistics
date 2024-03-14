import { RouterProvider } from 'react-router-dom';
import routes from "./routes/route";

function App() {
    return (
        <div className="App h-screen max-h-screen w-screen overflow-x-hidden">
            <RouterProvider router={routes} />
        </div>
    );
}

export default App;
