import Hijo from "./components/Hijo";
import { UserProvider } from "./components/Providers/userProvider"; // Asegúrate de importar UserProvider correctamente

const App = () => {
    return (
        <UserProvider>
            <div className="text-center text-3xl">
                <Hijo />
            </div>
        </UserProvider>
    );
};

export default App;
