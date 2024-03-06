# Summarize IA app

Uma api para **resumir textos**😮(direta ou indiretamente por meio dos seus links), utilizando a **IA do google**, [Gemini](https://gemini.google.com/app).

Você pode chamar a api com a rota: https://summarize-ia-app.vercel.app/resumo, só não esqueça de que se for utilizar em **algum projeto, dar os devidos créditos** 😉


## Método:

**Post**
```
http://localhost:3000/resumo
```
**Body** (obrigatório)

Você pode adicionar o texto "corrido" diretamente ou apenas o link do texto.

Exemplo de body:
```
{
  "prompt": "https://www.treinaweb.com.br/blog/o-que-e-e-como-comecar-com-golang"
}
```
#### Resposta:

Exemplo de resposta:

```json
{
  "resumo": "**O que é Go?**\n\n* Linguagem de programação moderna e de código aberto projetada pelo Google.\n* Focada em concorrência, escalabilidade e eficiência.\n* É uma linguagem compilada, o que a torna rápida e eficiente.\n\n**Como começar com Go:**\n\n* **Instale o Go:** Acesse o site oficial (golang.org) e baixe a versão mais recente.\n* **Configure o ambiente:** Adicione o caminho do Go ao PATH do sistema operacional.\n* **Crie um arquivo Go:** Crie um arquivo com extensão \".go\".\n* **Escreva seu código:** Use a sintaxe simples e intuitiva do Go para escrever seu programa.\n* **Compile e execute seu código:** Use o comando \"go run\" para compilar e executar seu programa.\n\n**Recursos importantes:**\n\n* **Gerenciamento de concorrência:** Usa goroutines e canais para executar tarefas concorrentes.\n* **Tipagem estática:** Garante a segurança do tipo durante a compilação.\n* **Coleta de lixo:** Gerencia a memória automaticamente, evitando vazamentos.\n* **Biblitecas extensas:** Fornece uma ampla gama de bibliotecas para diversos propósitos.\n* **Suporte para multiplataforma:** Pode ser executado em vários sistemas operacionais, incluindo Windows, Mac e Linux."
}
```



## Instruções para rodar

Há a necessidade do **NodeJS**. Com ele instalado basta seguir os seguintes passos.

1. No terminal, clone o projeto:

```
git clone
```

2. Crie um arquivo chamado **config.js** na raíz do projeto com o conteúdo:

```
module.exports = {
  API_KEY: SUA_CHAVE_DA_API_DO_GEMINI,
};
```

3. Troque **SUA_CHAVE_DA_API_DO_GEMINI** por sua sua chave Gemini, que pode ser obtida **[aqui](https://aistudio.google.com/app/apikey?hl=pt-br)**

  
4. Instale as dependências:

```
npm install
```

5. Execute a aplicação:

```
node app.js
```


#### Author 👷

<img src="https://user-images.githubusercontent.com/97068163/149033991-781bf8b6-4beb-445a-913c-f05a76a28bfc.png" width="5%" alt="caricatura do autor desse repositório"/>

[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/araujocode/)
