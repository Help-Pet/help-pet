<?php
    session_start();
    include_once '../conexao.php';

    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    $conn = new Database();  
    $conn = $conn->db_mysql();

    $sql = $conn->prepare(
      "SELECT ID_USUARIO FROM login
      WHERE USUARIO = '$usuario' and SENHA = '$senha'"
      );
    $sql->execute();  
    

    if($sql->fetchAll(\PDO::FETCH_ASSOC) == true){
        $_SESSION['login'] = 'logado';
	    header('Location: listar.php');
    }else{
        $_SESSION['login'] = 'nao logado';
        header('Location: listar.php');
    }
?>