import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{background:"#0a0a0a", color:"white", minHeight:"100vh", textAlign:"center", padding:"40px"}}>
      <h1 style={{fontSize:"60px", color:"transparent", WebkitTextStroke:"2px purple"}}>
        MAGIC GEN
      </h1>

      <p><b>Kurucu:</b> Kemal6271</p>
      <p><b>Yardımcılar:</b> Cagancatubo3941 ve Cancraft247</p>

      <div style={{marginTop:"20px"}}>
        <button onClick={()=>setPage("home")}>Ana Sayfa</button>
        <button onClick={()=>setPage("join")} style={{marginLeft:"10px"}}>Katılın</button>
        <button onClick={()=>setPage("realms")} style={{marginLeft:"10px"}}>Realms</button>
      </div>

      {page === "join" && (
        <p style={{marginTop:"20px"}}>
          MagicGen'e katılmak için Kemal6271, Cagancatubo3941 veya Cancraft247'i ekleyin
        </p>
      )}

      {page === "realms" && (
        <p style={{marginTop:"20px", fontSize:"20px"}}>
          XxTyRgHdLyYqNcA
        </p>
      )}
    </div>
  );
}
