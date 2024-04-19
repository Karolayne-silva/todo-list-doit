import imgLogoPreta from "../img/logo preta.svg";
import imgLogoBranca from "../img/logo branca.svg";
import sol from "../img/claro.svg";
import lua from "../img/lua.svg";

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
          src={darkMode ? lua : sol}
          alt="sol/lua"
          className="img-modo-claro"
        />
      </button>
    </div>
  );
}
