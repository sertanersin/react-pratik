    export default function Yapilacaklar() {
        const gorevler = ["Spor", "React Çalış", "Su iç"];

        return (
            <div>
                <h2>Yapılacaklar</h2>
                <ul>
                    {gorevler.map((x) => <li key={x}>{x}</li>)}
                </ul>
            </div>
        )
    }