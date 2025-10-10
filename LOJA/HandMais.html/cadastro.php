<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cadastro - HandMais</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <h1>Cadastro de Usuário</h1>
    <form action="cadastro.php" method="POST">
      <label for="nome">Nome completo:</label>
      <input type="text" id="nome" name="nome" required>

      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required>

      <label for="senha">Senha:</label>
      <input type="password" id="senha" name="senha" required>

      <button type="submit">Cadastrar</button>
    </form>

   
  </div>

  <?php
  if ($_SERVER["REQUEST_METHOD"] === "POST") {
      $nome = htmlspecialchars($_POST["nome"]);
      $email = htmlspecialchars($_POST["email"]);
      $senha = htmlspecialchars($_POST["senha"]);

      echo "<div class='mensagem-sucesso'>";
      echo "<h2>Cadastro realizado com sucesso!</h2>";
      echo "<p><strong>Nome:</strong> $nome</p>";
      echo "<p><strong>E-mail:</strong> $email</p>";
      echo "</div>";
  }
  ?>

</body>
</html>
