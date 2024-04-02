import imgLogo from "../img/logo.svg";

export default function header(){
   return(
      <div className="header">
        <img src={imgLogo} alt="logo doit"/>
      </div>
   )
}