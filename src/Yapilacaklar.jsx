    import { useState } from "react";
    
    export default function Yapilacaklar() {
        const [gorevler, setGorevler] = useState([
            { id: 1, metin: "Spor"},
            { id: 2, metin: "React Çalış"},
            { id: 3, metin: "Su İç"}
        ]);
        const [yeniMetin, setYeniMetin] = useState("");

        const ekle = () => {
            setGorevler([...gorevler, {id: Date.now(), metin: yeniMetin.trim()}]);
             setYeniMetin("");
        }

        const sil = (id) => {
            setGorevler(gorevler.filter((gorev) => gorev.id !==id ));
        
        };

        return (
            <div>
                <h2>Yapılacaklar</h2>
                <input type="text" onChange={(e)=>setYeniMetin((e.target.value))} value={yeniMetin}/>
                <button onClick={ekle} disabled = {yeniMetin.trim() === ""}>Ekle</button>

                <ul>
                    {gorevler.map((gorev) => <li key={gorev.id}>{gorev.metin}<button onClick={() => sil(gorev.id)}>Sil</button></li>)}
                </ul>
            </div>
        )
    }