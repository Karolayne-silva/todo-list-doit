import imgLogoPreta from "../img/logo preta.svg";
import imgLogoBranca from "../img/logo branca.svg";
import sol from "../img/sol.png";
import lua from "../img/lua.png";

export default function header({ darkMode, setDarkMode }) {

  function toggleDarkMode() {
    setDarkMode((previousDarkMode) => !previousDarkMode);
  }
  
  return (
    <div className="header">
      <img
        src={darkMode ? imgLogoBranca : imgLogoPreta}
        alt="logo doit"
        className="img-logo"
      />
      <button onClick={toggleDarkMode}>
        <img
          src={darkMode ? sol : lua}
          alt="sol/lua"
          className="img-modo-claro"
        />
      </button>
    </div>
  );
}
