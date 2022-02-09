<?php 
  //FAZ A CONEXÃO COM BANCO DE DADOS
  include_once 'conexao.php';


  //ENVIAR EMAIL
  header('Access-Control-Allow-Origin: *');
  
  //Variáveis do formulário.
  $nome = $_POST['txtNome'];
  $datadenasc = $_POST['txtDataNascimento'];
  $cep = $_POST['numberCEP'];
  $endereco = $_POST['txtEndereco'];
  $bairro = $_POST['txtBairro'];
  $cidade = $_POST['txtCidade'];
  $contato = $_POST['txtContato'];
  $seuemail = $_POST['txtEmail'];
  $profissao = $_POST['txtProfissao'];
  $empresa = $_POST['txtEmpresa'];
  $qntfilhos = $_POST['txtFilhos'];
  $qntpessoas = $_POST['txtPessoasResidencia'];
  $contato1= $_POST['txtCtt1'];
  $contato2 = $_POST['txtCtt2'];
  $nomeanimal = $_POST['txtNomeAnimal'];
  $verificacao = $_POST['txtRespVerificacao'];
  $facebook = $_POST['txtLinkFacebook'];
  $instagram = $_POST['txtLinkInstagram'];
  $data_envio = date('d/m/Y');
  $hora_envio = date('H:i:s');

    //Pegando o e-mail e senha de forma segura.
  $json = file_get_contents("../credentials.json");
  $data = json_decode($json);
  
  $myemail = $data->EMAIL;
  $mysenha =  $data->EMAIL_PASSWORD;

  //Chamando a função PHPMailer.
  require_once('PHPMailer/PHPMailerAutoload.php');

  $email = new PHPMailer();
  $email->isSMTP();

  $email->Host = 'smtp.gmail.com';
  $email->Port = '587';
  $email->SMTPSecure = 'tls';
  $email->SMTPAuth = 'true';
  $email->Username = $myemail; //E-mail que vai enviar.
  $email->Password = $mysenha; //Senha do e-mail.

  $email->setFrom($email->Username, $nome);
  $email->AddAddress('alimenteumpetdw@gmail.com'); //E-mail do destino.
  $email->Subject = "Inscricao de adocao."; //Assunto do e-mail.

  $email->Body = "
    <html>
      <p><b>Nome: </b> $nome </p>
      <p><b>Data de nascimento: </b> $datadenasc </p>
      <p><b>CEP: </b> $cep </p>
      <p><b>Endereço: </b> $endereco </p>
      <p><b>Bairro: </b> $bairro </p>
      <p><b>Cidade: </b> $cidade </p>
      <p><b>Contato: </b> $contato </p>
      <p><b>E-mail: </b> $seuemail </p>
      <p><b>Profissão: </b> $profissao </p>
      <p><b>Empresa: </b> $empresa </p>
      <p><b>Quantidade de filhos: </b> $qntfilhos </p>
      <p><b>Quantidade de pessoas na casa: </b> $qntpessoas </p>
      <p><b>Contatos 1: </b> $contato1 </p>
      <p><b>Contatos 2: </b> $contato2 </p>
      <p><b>Nome do animal: </b> $nomeanimal </p>
      <p><b>Verificação: </b> $verificacao </p>
      <p><b>Facebook: </b> $facebook </p>
      <p><b>Instagram: </b> $instagram </p>

      <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
    </html>"; //Corpo de mensagem do -email.
  $email->IsHtml(true); //Transforma o texto acima em tipo HTML.

   //ENVIAR PARA O BANCO DE DADOS

  $conn = new Database();
  $conn = $conn->db_mysql();

    $sql = $conn->prepare(
        "INSERT INTO cadastroadocao(NOME, DT_NASCIMENTO, CEP, ENDERECO, BAIRRO, CIDADE, CELULAR, EMAIL, PROFISSAO, EMPRESA, FILHOS, QTD_PESSOAS,CTT1, CTT2, NOME_ANIMAL,CIENTE, FACEBOOK,INSTAGRAM)
        VALUES('$_POST[txtNome]','$_POST[txtDataNascimento]','$_POST[numberCEP]','$_POST[txtEndereco]','$_POST[txtBairro]','$_POST[txtCidade]','$_POST[txtContato]', '$_POST[txtEmail]','$_POST[txtProfissao]','$_POST[txtEmpresa]','$_POST[txtFilhos]','$_POST[txtPessoasResidencia]','$_POST[txtCtt1]','$_POST[txtCtt2]','$_POST[txtNomeAnimal]','$_POST[txtRespVerificacao]','$_POST[txtLinkFacebook]','$_POST[txtLinkInstagram]')"
        );
    $sql->execute();
    $a = $sql->setFetchMode(\PDO::FETCH_ASSOC);

  if ($email->Send() && $a == true){ //Testa o envio do e-mail.
    // echo 'CADASTRO FEITO COM SUCESSO';
    header('Location: http://localhost:3000/adotar?mssg=true');
  } else{
    // echo 'Falha ao enviar: ' . $email->ErrorInfo;
    header('Location: http://localhost:3000/adotar?mssg=false');

  }

  //ENVIAR PARA O BANCO DE DADOS




  // echo "<meta http-equiv='refresh' content='1;URL=http://localhost:3000/adotar'>"; //Redireciona a página de contato.
?>