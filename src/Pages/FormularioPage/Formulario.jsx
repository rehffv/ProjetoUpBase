import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style.css";
import Voltar from "../../assets/voltar.png";

function Formulario() {

  const [formData, setFormData] = useState({
    uf: "",
  });

  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.uf === "") {
      alert("Por favor, selecione uma UF válida.");
    } else {
      console.log("Formulário enviado com sucesso!", formData);
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

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
        <form onSubmit={handleSubmit}>
          <button className="voltar" type="button" onClick={handleBackClick}>
            <img src={Voltar} alt="Voltar" />
          </button>
    
          <h2>Para começarmos, precisamos de alguns dados</h2>
    
          <div className="form-group">
            <input placeholder="Nome do Imóvel" name="nome" type="text" />
            <p>O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede</p>
          </div>
    
          <div className="form-group">
            <textarea placeholder="Descrição" name="descricao" maxLength="250"></textarea>
            <p className="contador">0/250</p>
          </div>
    
          <input placeholder="CEP" name="cep" type="text" />
          <input placeholder="Endereço" name="endereco" type="text" />
    
          <div className="row">
            <input placeholder="Número" name="numero" type="text" />
            <input placeholder="Complemento" name="complemento" type="text" />
          </div>
    
          <div className="row">
            <input placeholder="Cidade" name="cidade" type="text" />
    
            <select
              name="uf"
              value={formData.uf}
              onChange={handleSelectChange}
              className={formData.uf === "" ? "placeholder" : ""}
            >
              <option value="">UF</option>
              <option value="SP">SP</option>
              <option value="RJ">RJ</option>
            </select>
          </div>
    
          <button className="botao" type="submit">
            Continuar
          </button>
        </form>
  
        {isModalVisible && (
          <div className="modal">
            <div className="line"></div>
            <p>Deseja abandonar o cadastro do imóvel? Esta operação não será salva.</p>
            <button onClick={handleModalConfirm}>Sim, sair agora!</button>
            <button onClick={handleModalCancel}>Não, quero continuar</button>
        </div>
      )}
    </div>
  );
  
}

export default Formulario;