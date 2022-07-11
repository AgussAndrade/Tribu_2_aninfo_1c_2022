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
import {GetOrSetItem} from "../../utils/GetOrSetItem";

export const Support = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [productos, setProductos] = useState([]);
    const [versionId, setVersionId] = useState(1);

    function getUrl(url) {
        return SOPORTE_URL + url;
    }

    const config = {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    };

    //GetOrSetItem("clientes");
    //GetOrSetItem("empleados");

    useEffect(() => {
        fetch(getUrl("soporte/productos"), config)
            .then((res) => res.json())
            .then((result) => {
                setProductos(getFormattedObject(result));
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
                <Cards/>
                <GenericModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    form={<TicketCreateForm versionId={versionId}/>}
                    title={"Crear ticket"}
                />
            </BodyContainer>
        </PrincipalContainer>
    );
};