import { useState } from "react";

export default function Yapilacaklar() {
  const [gorevler, setGorevler] = useState([
    { id: 1, metin: "Spor", tamamlandi: false },
    { id: 2, metin: "React Çalış", tamamlandi: false },
    { id: 3, metin: "Su İç", tamamlandi: false },
  ]);
  const [yeniMetin, setYeniMetin] = useState("");

  const ekle = () => {
    setGorevler([
      ...gorevler,
      { id: Date.now(), metin: yeniMetin.trim(), tamamlandi: false },
    ]);
    setYeniMetin("");
  };

  const sil = (id) => {
    setGorevler(gorevler.filter((gorev) => gorev.id !== id));
  };

  const tamamla = (id) => {
    setGorevler(
      gorevler.map((gorev) =>
        gorev.id === id ? { ...gorev, tamamlandi: !gorev.tamamlandi } : gorev,
      ),
    );
  };

  return (
    <div>
      <h2>Yapılacaklar</h2>
      <input
        type="text"
        onChange={(e) => setYeniMetin(e.target.value)}
        value={yeniMetin}
      />
      <button onClick={ekle} disabled={yeniMetin.trim() === ""}>
        Ekle
      </button>

      <ul>
        {gorevler.map((gorev) => (
          <li key={gorev.id}>
            <span
              style={{
                textDecoration: gorev.tamamlandi ? "line-through" : "none",
              }}
            >
              {gorev.metin}
            </span>
            <button onClick={() => tamamla(gorev.id)}>
              {gorev.tamamlandi ? "Geri Al" : "Tamamla"}
            </button>
            <button onClick={() => sil(gorev.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
