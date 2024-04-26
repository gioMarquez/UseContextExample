import { useUserContext, useUserToggleContext } from "./Providers/userProvider";




const Hijo = () => {

    const user = useUserContext();
    const cambiarLogin = useUserToggleContext();

    const handleClick = () => {
      cambiarLogin(); // Llamar a la función que cambia el estado del login
  };

    return (
      <div className='bg-fuchsia-900 bg-opacity-90 h-screen' >
          <p className='text-3xl'>Wola desde componente hijo</p>
          {user && <p className='text-white text-2xl'>Hola usuario: {user.name}</p>}
          <button className="btn-login" onClick={handleClick}>Cambia Login</button>

      </div>
    )
}

export default Hijo; 