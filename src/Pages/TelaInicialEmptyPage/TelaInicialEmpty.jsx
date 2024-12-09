import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style.css";
import Voltar from "../../assets/voltar.png";
import Mais from "../../assets/mais.png";
import Triste from "../../assets/triste.png";
import Edificio from "../../assets/edificio.png";
import Calendario from "../../assets/calendario.png";
import Tabela from "../../assets/tabela.png";
import User from "../../assets/user.png";

function TelaInicialEmpty() {
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleClick = () => {
    navigate("/Formulario");
};

const handleBackClick = () => {
    setIsModalVisible(true);
};

const handleModalConfirm = () => {
    setIsModalVisible(false);
    navigate("/");
};

const handleModalCancel = () => {
    setIsModalVisible(false);
};

return (
    <div className="container">
        <form>
            <div className="header">
                <button className="voltar" type="button" onClick={handleBackClick}>
                    <img src={Voltar} alt="Voltar" />
                </button>
                <button className="botaoCadastrar" type="button" onClick={handleClick}>
                    <img src={Mais} alt="Cadastrar imóvel" />
                    <p>Cadastrar imóvel</p>
                </button>
            </div>

            <div className="filter-buttons">
                <h1 className="BemVindo">Bem-vindo, Raphael!</h1>
            </div>

            <div className="filter-buttons">
                <button className="filter-button">Todos os flats</button>
                <button className="filter-button">Indisponíveis</button>
            </div>

            <div className="empty-state">
                <img src={Triste} alt="Triste" />
                <p>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</p>
            </div>

            <button className="botao-cadastrar" type="button" onClick={handleClick}>
                Cadastrar meu primeiro imóvel
            </button>
        </form>

        <div className="navigation-bar">
            <div className="nav-icon"> <img src={Edificio}/> </div>
            <div className="nav-icon"> <img src={Calendario}/> </div>
            <div className="nav-icon"> <img src={Tabela}/> </div>
            <div className="nav-icon"> <img src={User}/> </div>
            <div className="nav-line"></div>
        </div>

        {isModalVisible && (
        <div className="modal">
            <div className="line"></div>
            <p>Você realmente deseja sair do Poundflats?</p>
            <button onClick={handleModalConfirm}>Sim, sair agora!</button>
            <button onClick={handleModalCancel}>Não, quero continuar</button>
        </div>
        )}
    </div>
    );
}

export default TelaInicialEmpty;
