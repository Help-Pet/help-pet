import React from 'react';

import { useLocation } from "react-router-dom";


import styles from "../styles/Adotar.module.css";
import Input from "../../project/structure/Input";

const location = userLocation();
if(location.pathname('mssg=')[1] == 'true'){
    alert('CADASTRO FEITO COM SUSCESSO')
}

export default function Adotar(){
    return(
        <main>
            <div>
                <h1>Formulário de Adoção</h1>
                <p>Obrigado por chegar até aqui. Seu formulário será avaliado por nossa equipe o mais rápido possível.</p>
                <p>Fique atento a página do animal que gostaria de adotar para saber das novidades do processo de escolha do adotante. A nossa intenção e desafio é manter a taxa de devolução de animais em 0%. Pois é enormemente traumático para um animal voltar para o abrigo depois de ter experimentado um novo lar. Espero que entenda o nosso cuidado, contamos com você para tornar essa decisão de adotar um passo responsável e de muito amor.</p> <p>Todas as informações abaixo são confidenciais e de uso exclusivo para o processo de adoção.</p>
            </div>
            <form action="http://localhost/help-pet/src/components/pages/scripts/adotar_sendemail.php" method="POST" enctype="multipart/form-data">
                <Input text="Nome" type="text" name="txtNome" placeH="Digite seu nome"/>
                <Input text="Data de nascimento" type="date" name="txtDataNascimento" placeH="dd/mm/aaaa" />
                <Input text="CEP" type="text" name="numberCEP"/>
                <Input text="Endereço" type="text" name="txtEndereco" placeH="Informe seu endereço (RUA, NÚMERO DA CASA)" />
                <Input text="Bairro" type="text" name="txtBairro" placeH="Informe seu bairro" />
                <Input text="Cidade" type="text" name="txtCidade" placeH="Informe seu cidade" />
                <Input text="Celular" type="text" name="txtContato" placeH="(XX) 9XXXX-XXXX" />
                <Input text="Email" type="email" name="txtEmail" placeH="example@gmail.com" />
                <Input text="Profissão" type="text" name="txtProfissao" placeH="Informe sua profissão" />
                <Input text="Empresa" type="text" name="txtEmpresa" placeH="Nome da empresa/local de trabalho" />
                <Input text="Caso possua filhos, indicar quantos e suas idade" type="text" name="txtFilhos" placeH="Número de filhos e suas idades" />
                <Input text="Quantas pessoas moram na sua residência?" type="number" name="txtPessoasResidencia" />
                <label>Nome e contato de duas pessoas:</label>
                <Input text="Contato 1" type="text" name="txtCtt1" />
                <Input text="contato 2" type="text" name="txtCtt2" />
                <Input text="Nome do animal de interesse para adoção" type="text" name="txtNomeAnimal" placeH="Informe o nome do animal" />
                {/* <Input text="Está ciente de que será feitas visitas e averiguações?" type="text" name="txtRespVerificacao" /> */}
                <label for="cars">Está ciente de que será feitas visitas e averiguações?</label>
                <select name="txtRespVerificacao">
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select> <br></br>
                <Input text="Facebook" type="text" name="txtLinkFacebook" placeH="Link do facebook" />
                <Input text="Instagram" type="text" name="txtLinkInstagram" placeH="Link do instagram" />
                <div className={styles.button}> 
                    <input className={styles.btn__enviar} type="submit" value="ENVIAR" />
                </div>
            </form>
        </main>
    );
}