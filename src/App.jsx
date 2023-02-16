import './App.css'


function App() {

  return (
    <form className="login">
      <h2>Iniciar sesión</h2>
      <h3>Bienvenido</h3>
      <div className="login-form">
          <div className="textbox">
            <input placeholder='Usuario'/>
            <span className='material-symbols-outlined'>account_circle</span>
          </div>
          <div className="textbox">
            <input type='Password' placeholder='Contraseña'/>
            <span className='material-symbols-outlined'>lock</span>
          </div>
          <button> Entrar</button>
      </div>
    </form>
  )
}

export default App
