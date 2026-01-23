import { supabase } from "@/src/lib/supabase";
import Link from "next/link"

type Pet = {
    id: number;
    name: string;
    image: string | null;
    age: string;
    sexo: string;
}
export default async function Pets() {
    const { data, error } = await supabase
    .from<'Registro_de_pets', Pet>('Registro_de_pets')
    .select('*')

    if (error) return <div> Erro: {error.message} </div>

    return (
        <section className="pets">
            {data.map(pet => (
                    <Link key={pet.id} href={`/miaujuda/details/${pet.id}`}>
                        <img src="./imgs/miaudota/pata1.png" className="pata1" alt="Pata"/>
                            <div>
                                <img src={pet.image} alt="Imagem do Pet"/>
                                <p className="name">{pet.name}</p>
                                <p className="infos-pet ">{pet.age} | {pet.sexo}</p>
                            </div>
                    </Link>
            ))}
        </section>
    )
}