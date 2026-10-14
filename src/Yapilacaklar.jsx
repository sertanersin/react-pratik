import { useState } from "react";
import GorevItem from "./GorevItem";
import FiltreButonlari from "./FiltreButonlari";

export default function Yapilacaklar() {
  const [gorevler, setGorevler] = useState([
    { id: 1, metin: "Spor", tamamlandi: false },
    { id: 2, metin: "React Çalış", tamamlandi: false },
    { id: 3, metin: "Su İç", tamamlandi: false },
  ]);
  const [yeniMetin, setYeniMetin] = useState("");

  const [filtre, setFiltre] = useState("tumu");

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
  const tamamlananSayisi = gorevler.filter((gorev) => gorev.tamamlandi).length;

  const gosterilenGorevler = gorevler.filter((gorev) => {
    if (filtre === "aktif") return !gorev.tamamlandi;
    if (filtre === "tamamlanan") return gorev.tamamlandi;
    return true;
  });

  return (
    <div>
      <h2>Yapılacaklar</h2>
      <br />
      <p>
        {tamamlananSayisi} / {gorevler.length} Tamamlandı
      </p>
      <br />
      <input
        type="text"
        onChange={(e) => setYeniMetin(e.target.value)}
        value={yeniMetin}
      />
      <button onClick={ekle} disabled={yeniMetin.trim() === ""}>
        Ekle
      </button>
      <br />
      <FiltreButonlari filtre={filtre} setFiltre={setFiltre}/>

      <ul>
        {gosterilenGorevler.map((gorev) => (
          <GorevItem key={gorev.id} gorev={gorev} tamamla={tamamla} sil={sil} />
        ))}
      </ul>
    </div>
  );
}
