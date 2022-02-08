<?php
    include_once '../conexao.php';

   $conn = new Database();  
   $conn = $conn->db_mysql();

  $sql = $conn->prepare(
      "SELECT * FROM cadastroadocao"
      );
  $sql->execute();  
  $a=$sql->fetchAll(\PDO::FETCH_ASSOC); 
  echo '<pre>';
  print_r($a);
  echo '</pre>';

  echo $a[0]['NOME'];
  

?>
<html>
    <head>
       <link rel="stylesheet" href="css/bootstrap.css">
       <script src="js/js.js"></script>
    </head>
    <body>
        <div class='row'>
            <div class='col-md-12 bg-info'>
                <h1>SOLICITÇÕES DE ADOÇÃO</h1><br>

                <input type="button" class='btn btn-ligth' id='listar' onclick="listar()" value="Solicitções de adoção">
                <input type="button" class='btn btn-ligth' id='post' onclick="artigos()" value="Postar artigos">  
                <input type="button" class='btn btn-ligth' id='criar' onclick="usuarios()" value="Criar usuário">
         
            </div>
        </div><br><br>

    </body>
</html>