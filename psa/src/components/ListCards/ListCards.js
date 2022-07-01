import {useFetch} from "../UseFetch/UseFetch";

export default function ListCards() {
    const url = "http://localhost:3004/proyectos"
    const {data: proyectos, isPending, error} = useFetch(url);

    return (
        <div className={"list-cards-container"}>
            {proyectos && proyectos.map((proyecto) =>
                (
                    <div key={proyecto.id}>
                        {proyecto.title}, cantidad ticket abiertos {proyecto.tickets_abiertos}, cerrados {proyecto.tickets_cerrados}
                    </div>
                )
            )}
        </div>
    )
}