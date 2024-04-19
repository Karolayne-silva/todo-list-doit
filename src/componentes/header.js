import imgLogoPreta from "../img/logo preta.svg";
import imgLogoBranca from "../img/logo branca.svg";
import sol from "../img/claro.svg";
import lua from "../img/lua.svg";

export default function header({ dark, setDarkMode }) {
  function toggleDarkMode() {
    setDarkMode(!dark);
  }
  return (
    <div className="header">
      <img src={ dark ? imgLogoBranca : imgLogoPreta} alt="logo doit" className="img-logo" />
      <button onClick={toggleDarkMode}>
        <img src={dark ? lua : sol} alt="sol/lua" className="img-modo-claro" />
      </button>
    </div>
  );
}