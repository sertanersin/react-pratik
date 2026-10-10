import { useState } from "react";

export default function App() {
  const [sayi, setSayi] = useState(0);

  const [adim, setAdim] = useState(1);

  const durum = sayi % 2 === 0 ? "Çift" : "Tek" ;

  return (
    <div>
      <h1>{sayi}</h1>
      <p>{durum}</p>
      <br />
      <input type="number" min="1" onChange={(e)=>setAdim(Number(e.target.value))} value={adim}/>
      <button onClick={() => setSayi(sayi - adim)} disabled={sayi - adim < 0 }>Azalt</button>
      <button onClick={() => setSayi(sayi + adim)} disabled={sayi + adim > 10}>Artır</button>
      <button onClick={() => setSayi(0)}>Sıfırla</button>
    </div>

  );
}