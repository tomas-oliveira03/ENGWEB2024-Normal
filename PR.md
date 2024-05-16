# Persistência de dados e setup

Em primeiro lugar substituí o ficheiro csv para um json (ficheiro com nome `contratos2024.json`).

Dentro do projeto, considero que o id é o `idcontrato` mas o mongo cria também uma entrada `_id` que não é utilizada. Todas as buscas por id são feitas através `idcontrato`.


# Queries
Relativamente às queries, a sua resposta está dentro da diretoria `ex1` com o nome `queries.txt`.


# API

Para a API em primeiro lugar para conectar à mesma utilizo:
`mongodb://127.0.0.1:51810/contratos`

Faço isto porque não consigo conectar-me a porta 27017 por default. Por isso se pretender correr da maneira default troque para:
`mongodb://127.0.0.1/contratos`

Perguntei ao professor tiago e ele disse que não havia problema.


No comando: `GET /contratos?entidade=EEEE`, considerei que o EEEE é o parâmetro NIPC_entidade_comunicante. Fiz isto porque aquando a criação da interfaces podia assim utilizar essa mesma função.


# Interface

Para a interface foi utilizado views em PUG e não foi usado o mongoose, visto que apenas é necessário fazer a conexão à API através do `axios`.




## Não enviei o trabalho em docker!


