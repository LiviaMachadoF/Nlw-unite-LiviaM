/*const atualizarLista = () => {
  alert("dentro da função")
} // Arrow functions são uma maneira mais curta e concisa de escrever funções em JS. */

/*const participante = {
  nome: "Mayk Brito",
  email: "mayk@gmail.com",
  dataInscricao: new Date(2021, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
} //criando de objeto no js */

//array
let participantes = [
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2021, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Diego Fernandes",
    email: "diegofer@hotmail.com",
    dataInscricao: new Date(2023, 2, 01, 10, 27),
    dataCheckIn: new Date(2024, 2, 24, 09, 40)
  },
  {
    nome: "Ana Souza",
    email: "ana.souza@yahoo.com",
    dataInscricao: new Date(2020, 0, 15, 14, 10),
    dataCheckIn: new Date(2024, 3, 1, 18, 30)
  },
  {
    nome: "João Silva",
    email: "joaosilva@yahoo.com",
    dataInscricao: new Date(2024, 1, 10, 08, 45),
    dataCheckIn: new Date(2024, 2, 28, 14, 20)
  },
  {
    nome: "Carla Oliveira",
    email: "carla.oliveira@example.org",
    dataInscricao: new Date(2024, 3, 5, 17, 55),
    dataCheckIn: new Date(2024, 2, 23, 11, 10)
  },
  {
    nome: "Pedro Santos",
    email: "pedro.santos@example.net",
    dataInscricao: new Date(2010, 4, 20, 09, 30),
    dataCheckIn: new Date(2024, 3, 2, 08, 15)
  },
  {
    nome: "Juliana Lima",
    email: "julianalima@gmail.com",
    dataInscricao: new Date(2020, 5, 12, 13, 20),
    dataCheckIn: new Date(2024, 2, 26, 16, 45)
  },
  {
    nome: "Rafaela Costa",
    email: "rafaela.costa@example.org",
    dataInscricao: new Date(2017, 6, 30, 11, 40),
    dataCheckIn: new Date(2024, 2, 27, 10, 50)
  },
  {
    nome: "Lucas Pereira",
    email: "lucas.pereira@example.net",
    dataInscricao: new Date(2022, 7, 18, 20, 15),
    dataCheckIn: new Date(2024, 2, 29, 15, 25)
  },
  {
    nome: "Mariana Almeida",
    email: "mariana.almeida@gmail.com",
    dataInscricao: new Date(2021, 8, 5, 15, 05),
    dataCheckIn: new Date(2024, 2, 30, 09, 35)
  }
]


const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  //condicional
  if(participante.dataCheckIn == null) {
    dataCheckIn = 
     `<button data-email="${participante.email}" onclick="fazerCheckIn(event)">
        Confirmar Check-in
     </button>`
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  ` //interpolação de template string 
}

const atualizarLista = (participantes) => {
  let output = ""
  
  //estrutura de repetição - loop
  for(let participante of participantes) {
    //faça alguma coisa, enquanto tiver participantes nessa lista
  output = output + criarNovoParticipante(participante)
  }

  //substituir info do html
  document.querySelector('tbody').innerHTML = output
} 

atualizarLista(participantes)

/* document é um objeto que representa o documento HTML atual em um navegador e fornece métodos para interagir com elementos HTML, enquanto object é um tipo de dado em JavaScript que permite a criação de estruturas de dados complexas e flexíveis usando pares chave-valor.
um objeto em JavaScript é como uma caixa que pode conter diferentes tipos de dados e funções relacionadas, onde cada coisa dentro dessa caixa é uma propriedade representada por um par chave-valor, sendo a chave o nome da propriedade e o valor associado a essa chave.*/

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  //verificar se o participante ja existe, da forma abaixo fica mt longa, então se escreve assim tbm
  /*const participanteExistente = participantes.find(
      (p) => {
      return p.email == participante.email
    }
  ) */
  const participanteExistente = participantes.find(
      (p) => p.email == participante.email
  )

  if(participanteExistente) {
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]

  atualizarLista(participantes)

  //limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  //confirmação se a pessoa quer realmente o checkin
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  if(confirm(mensagemConfirmacao) == false) {
    return
  }
  //encontrar o parcitipante dentro da lista, atualizar o checkin e dps a lista de participantes

  //no js praticamente tudo é um objeto. cada um participante vai passar pela função p // resumindo
  /*const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })*/
  const participante = participantes.find((p) => p.email == event.target.dataset.email
  )

  participante.dataCheckIn = new Date()

  atualizarLista(participantes)
}

/*eventos são ações que ocorrem no navegador, como cliques de mouse, pressionamentos de tecla, carregamento de página, entre outros. Os eventos permitem que você responda a ações do usuário ou a mudanças no estado do documento.*/