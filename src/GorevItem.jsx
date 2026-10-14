export default function GorevItem ({gorev, tamamla, sil}){
    return(
            <li>
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
    );
}