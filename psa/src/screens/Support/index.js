import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
    PrincipalContainer,
    OptionsContainer,
    BodyContainer,
    Input,
    InputContainer,
} from "./styled";
import {TopBar} from "../../components/TopBar";
import {useState} from "react";
import {SupportCard} from "./components/SupportCard";
import {GenericModal} from "./components/GenericModal";
import {TicketCreateForm} from "./components/TicketCreateForm";
import {SOPORTE_URL} from "../../utils/apiUrls";
import {getFormattedObject} from "../../utils/getClients";
import {useLocalStorage} from "../../utils/useLocalStorage";

export const Support = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [esperandoProductos, setEsperandoProductos] = useState(false);
    const [productos, setProductos] = useState([]);
    const [versionId, setVersionId] = useState(1);
    const {data: empleados, isPending: esperandoEmpleados} = useLocalStorage("empleados");
    const {data: clientes, isPending: esperandoClientes} = useLocalStorage("clientes");

    function getUrl(url) {
        return SOPORTE_URL + url;
    }

    const config = {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    };
    console.log(esperandoProductos);
    useEffect(() => {
        setEsperandoProductos(true)
        fetch(getUrl("soporte/productos"), config)
            .then((res) => res.json())
            .then((result) => {
                setProductos(getFormattedObject(result));
                setEsperandoProductos(false)
            })
            .catch(() => navigate("/error"))

    }, [])

    const Cards = () => {
        return productos
            .filter((val) => {
                if (searchTerm === "") return val;
                else if (
                    val.nombre.toLocaleLowerCase().includes(searchTerm.toLowerCase())
                )
                    return val;
            })
            .map((producto) => {
                return producto.versiones.map((dataVersion) => {
                    return (
                        <SupportCard
                            nombreProducto={producto.nombre}
                            descripcionProducto={producto.fase}
                            idProducto={producto.id}
                            versionProducto={dataVersion.numero_version}
                            versionId={dataVersion.id}
                            key={dataVersion.numero_version}
                            onClick={() => {
                                setVersionId(dataVersion.id)
                                setModalShow(true);
                            }}
                        />
                    )
                })
            });

    };

    const navigate = useNavigate();
    return (
        <PrincipalContainer>
            <TopBar buttonSelected={"Soporte"}/>
            <OptionsContainer>
                <InputContainer>
                    <Input
                        type="text"
                        placeholder="Buscar..."
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />
                </InputContainer>
            </OptionsContainer>
            <BodyContainer>
                {!esperandoClientes && !esperandoProductos && !esperandoEmpleados  && <Cards/> }
                <GenericModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    form={<TicketCreateForm empleados = {empleados} clientes={clientes} versionId={versionId}/>}
                    title={"Crear ticket"}
                />

                {(esperandoEmpleados || esperandoClientes || esperandoProductos) && ( <h2> Cargando información </h2>)}
            </BodyContainer>
        </PrincipalContainer>
    );
};