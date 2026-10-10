import { useState } from "react";

export default function App() {
  const [sayi, setSayi] = useState(0);

  const durum = sayi % 2 === 0 ? "Çift" : "Tek" ;

  return (
    <div>
      <h1>{sayi}</h1>
      <p>{durum}</p>
      <button onClick={() => setSayi(sayi + 1)} disabled={sayi === 10}>Artır</button>
      <button onClick={() => setSayi(sayi - 1)} disabled={sayi === 0 }>Azalt</button>
    </div>

  );
}