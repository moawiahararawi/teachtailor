import logo from "./logo.png"

export default function Logo() {
    return (
      <div className="logo">
        <img style={{height:"200px", display:"flex", margin:"auto", marginTop:"20px"}} src={logo} alt="" />
      </div>
    );
  }