export default function FiltreButonlari ({filtre, setFiltre}) {

    return (
        <>
        <button onClick={() => setFiltre("tumu")}>Tümü</button>
      <button onClick={() => setFiltre("aktif")}>Aktif</button>
      <button onClick={() => setFiltre("tamamlanan")}>Tamamlanan</button>
      <p>Seçili: {filtre}</p>
</>
    )
}