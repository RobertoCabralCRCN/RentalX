# Cadastro de carro

**RF** => Requisitos funcionais
Deve ser possível cadastrar um novo carro
Deve ser possível listar todas as categorias

**RNF** => Requisitos não funcionais

**RN** => Regras de Negócio
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro ja cadastrada.
O carro de ser cadastrado, por padrão, com disponibllidade.
O usuario responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF** => Requisitos funcionais
Deve ser possível listar todos os carros disponiveis
Deve ser possível listar toddos os carros disponiveis pelo nome da categoria
Deve ser possível listar toddos os carros disponiveis pelo nome da marca
Deve ser possível listar toddos os carros disponiveis pelo nome do carro

**RN** => Regras de Negócio
O usuario não precisa estar logado no sistema.

# Cadstro de especificação no carro

**RF** => Requisitos funcionais
Deve ser possível cadastrar uma especificação para um carro
Deve ser possível listar todas as especificações
Deve ser possível listar todos os carros

**RN** => Regras de Negócio
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação ja existente para o mesmo carro.
O usuario responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de Imagem do carro

**RF** => Requisitos funcionais
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**RNF** => Requisitos não funcionais
Utilizar o multer para upload dos arquivos

**RN** => Regras de Negócio
O usuario pode cadastrar mais de uma imagem para o mesmo carro.
O usuario responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carros

**RF** => Requisitos funcionais
Deve ser possível cadastrar um aluguel.

**RN** => Regras de Negócio
O aluguel deve ter duração minima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso exista um abertopara o mesmo usuario.
Não deve ser possível cadastrar um novo aluguel caso exista um abertopara o mesmo carro.
