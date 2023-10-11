export const dataTransacoes = {
  usuarios: [
    {
      id: 'a57501f9407c2174825bb862860ec23a',
      email: 'admin@gmail.com',
      senha: '123456',
      nome: 'admin',
      sobrenome: 'silva',
      transacoes: [
        {
          id: 'ad5b159154586c6b2a9dafe8d5451e40',
          descricao: 'vendi o pc',
          categoria: 'eletrônicos',
          valor: '1500',
          data: '15/09/2023',
          tipo: 'entrada',
        },
        {
          id: '29de5d7cf164c46690b40d5fe9e4fd3a',
          descricao: 'asdasd',
          categoria: 'transporte',
          valor: '250',
          data: '15/09/2023',
          tipo: 'saída',
        },
        {
          id: '08566a7e4accbe173e54c0bfaba2d1c9',
          descricao: 'asdgahsdgh',
          categoria: 'salário',
          valor: '1500',
          data: '19/09/2023',
          tipo: 'saída',
        },
      ],
    },
    {
      id: '9d193a6679dbb85d867140ce2f0faa71',
      email: 'teste_usuario@gmail.com',
      senha: '123456789',
      nome: 'usuario',
      sobrenome: 'teste',
      transacoes: [
        {
          id: 'c5bca242f0279f447ea4903419a5f8d9',
          descricao: 'recebi o aluguel da casa',
          categoria: 'aluguel',
          valor: '1500',
          data: '19/09/2023',
          tipo: 'entrada',
        },
      ],
    },
    {
      id: '4d9558d4560f89e87c998f22cf8a2c10',
      email: 'usuarioteste@gmail.com',
      senha: '123456789',
      nome: 'teste',
      sobrenome: 'usuario',
      transacoes: [],
    },
    {
      id: '175fabe9e3d03d464d2d5a748aef7b89',
      email: 'leandrolara@gmail.com',
      senha: 'senhasecreta1',
      nome: 'Lara',
      sobrenome: 'Leandro',
      transacoes: [
        {
          id: '5bcfd0e9f96ff9592f60024921706c86',
          descricao: 'cuidar da juju',
          categoria: 'freelancer',
          valor: '1500',
          data: '19/09/2023',
          tipo: 'entrada',
        },
        {
          id: '4fa09ccc2e3697f9c6c3195ed2460283',
          descricao: 'rendimento do cdb',
          categoria: 'investimentos',
          valor: '5000',
          data: '19/09/2023',
          tipo: 'entrada',
        },
      ],
    },
    {
      id: 'b5f6ac934e2fe58110f5d1dc2633e7c8',
      email: 'inaraalmeida@gmail.com',
      senha: '123456',
      nome: 'inara',
      sobrenome: 'almeida',
      transacoes: [],
    },
    {
      id: 'b87329cc0a758876328f76fa3f9282f2',
      email: 'inaralmeida@gmail.com',
      senha: '1234578',
      nome: 'inara',
      sobrenome: 'almeida',
      transacoes: [
        {
          id: '5015d4f2c035143c25e4275b777b9a15',
          descricao: 'restituição',
          categoria: 'impostos',
          valor: '700',
          data: '21/09/2023',
          tipo: 'entrada',
        },
      ],
    },
  ],
  categorias: [
    {
      nome: 'alimentação',
      id: 0,
    },
    {
      nome: 'aluguel',
      id: 1,
    },
    {
      nome: 'bônus',
      id: 2,
    },
    {
      nome: 'carro',
      id: 3,
    },
    {
      nome: 'contas de casa',
      id: 4,
    },
    {
      nome: 'doações',
      id: 5,
    },
    {
      nome: 'economias',
      id: 6,
    },
    {
      nome: 'educação',
      id: 7,
    },
    {
      nome: 'eletrônicos',
      id: 8,
    },
    {
      nome: 'freelancer',
      id: 9,
    },
    {
      nome: 'hobbies',
      id: 10,
    },
    {
      nome: 'impostos',
      id: 11,
    },
    {
      nome: 'investimentos',
      id: 12,
    },
    {
      nome: 'lazer',
      id: 13,
    },
    {
      nome: 'moradia',
      id: 14,
    },
    {
      nome: 'roupas',
      id: 15,
    },
    {
      nome: 'saúde',
      id: 16,
    },
    {
      nome: 'salário',
      id: 17,
    },
    {
      nome: 'seguros',
      id: 18,
    },
    {
      nome: 'transporte',
      id: 19,
    },
    {
      nome: 'viagens',
      id: 20,
    },
  ],
}
