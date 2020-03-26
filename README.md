# bethehero-api

Aplicação desenvolvida no decorrer da semana OmniStack 11.0

### Clonando a aplicação

Clone a aplicação através do comando:

> git clone https://github.com/adailsonaguiar/bethehero-api.git

### Instalar as dependências da aplicação

> yarn install / npm i

### Rotas

**1.** localhost:3333/ongs (POST).

> **Cadastrar uma ONG na API**
> Exemplo de requisição enviada no **body**.

```json
{
  "name": "APAE",
  "email": "teste.com",
  "city": "Palmas",
  "whatsapp": "002365",
  "uf": "TO"
}
```

**2.** localhost:3333/ongs (GET)

> **Listar todas as ONGS da API**

**3.** localhost:3333/profile (GET)

> **Listar os incidentes de uma ONG**
> Deve-se passar o id da ONG no header como **Authorization**.

```json
 Authorization: a97bb39d
```

> Pode-se passar ainda a quantidade de páginas nas **Query Params**.

```json
localhost:3333/profile?pages=2
```

**4.**localhost:3333/sessions (POST)

> **Rota de login**
> Deve-se enviar o id da ONG no **body**.

```json
{
  "id": "a97bb39d"
}
```

**5.** localhost:3333/incidents (POST)

> **Criar um incidente**
> Deve-se passar o id da ONG no header como **Authorization**.

```json
 Authorization: a97bb39d
```

> Exemplo de requisição enviada no **body**.

```json
{
  "title": "Caso 1",
  "description": "Destalhes do caso",
  "value": 120
}
```

**6.** localhost:3333/incidents/1 (DELETE)

> **Excluir um incidente**
> Deve-se passar o id da ONG no header como **Authorization**.

```json
 Authorization: a97bb39d
```

> O id do incidente deve ser passado na **rota**.
