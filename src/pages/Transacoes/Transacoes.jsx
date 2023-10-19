import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../components/common/Button/Button'
import Modal from '../../components/common/Modal/Modal'
import Notificacao from '../../components/common/Notificacao/Notificacao'
import Layout from '../../components/shared/Layout/Layout'
import Transacao from '../../components/views/Dashboard/Transacao/Transacao'
import { deleteTransacao, getCategorias, getTransacoes, postTransacao, putTransacao } from '../../service/api'
import { StylesTransacoes } from './transacoes.styles'

const Transacoes = () => {
  const params = useParams()
  const [listaTransacoes, setListaTransacoes] = useState([])
  const [modalTaAberto, setModalTaAberto] = useState(false)
  const [categorias, setCategorias] = useState([])

  const [valorTransacao, setValorTransacao] = useState('')
  const [descricaoTransacao, setDescricaoTransacao] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('')
  const [dataTrasacao, setDataTrasacao] = useState('')
  const [idTransacao, setIdTransacao] = useState('')

  const [modalDelete, setModalDelete] = useState(true)

  const [infosNotificacao, setInfosNotificacao] = useState({
    tipo: '',
    texto: ''
  })

  const [eEdicao, setEEdicao] = useState(false)

  const [abrirNotificacao, setAbrirNotificacao] = useState(false)


  function handleEditarTransacao(transacao) {
    setEEdicao(true)
    setValorTransacao(transacao.valor)
    setDescricaoTransacao(transacao.descricao)
    setCategoriaSelecionada(transacao.categoria)
    setDataTrasacao(transacao.data)
    setIdTransacao(transacao.id)
    console.log(transacao)
    setModalTaAberto(true)
  }

  async function handlePutTransacao() {
    const body = {
      valor: valorTransacao,
      categoria: categoriaSelecionada,
      descricao: descricaoTransacao,
      data: dataTrasacao,
      tipo: params.tipo
    }
    const resposta = await putTransacao(idTransacao, body, 'a57501f9407c2174825bb862860ec23a')
    console.log(resposta)
    setModalTaAberto(false)

    setInfosNotificacao({
      texto: resposta.success ? 'transacao editada com sucesso' : 'erro ao editar transacao',
      tipo: resposta.success ? 'sucesso' : 'falha'
    })

    setAbrirNotificacao(true)
    handleBuscarTransacoes()
    setEEdicao(false)
  }

  async function handleBuscarTransacoes() {
    const resposta = await getTransacoes('a57501f9407c2174825bb862860ec23a', params.tipo)
    setListaTransacoes(resposta.data)
  }

  async function hendleBuscaCategorias() {
    const resposta = await getCategorias()
    setCategorias(resposta.data)
  }

  async function handleSalvarTransacao() {
    const body = {
      valor: valorTransacao, categoria: categoriaSelecionada, descricao: descricaoTransacao, tipo: params.tipo
    }

    const resposta = await postTransacao(body, 'a57501f9407c2174825bb862860ec23a')
    if (resposta.success) {

      handleBuscarTransacoes()
    }
    setInfosNotificacao({
      tipo: resposta.success ? 'sucesso' : 'falha',
      texto: resposta.success ? 'Transacao adicionada com sucesso' : 'Erro ao adicionar transacao'
    })
    setAbrirNotificacao(true)
    setModalTaAberto(false)
  }

  async function handleDeleteTransacao() {
    const resposta = await deleteTransacao(idTransacao, 'a57501f9407c2174825bb862860ec23a')
    setModalDelete(false)

    handleBuscarTransacoes()

    setInfosNotificacao({
      texto: resposta.success ? 'Transacao excluida com sucesso' : 'Falha ao excluir transação',
      tipo: resposta.success ? 'sucesso' : 'falha'
    })

    setAbrirNotificacao(true)
  }

  function handleAbrirModalDelete(idTransacao) {
    setIdTransacao(idTransacao)
    setModalDelete(true)
  }

  useEffect(() => {
    handleBuscarTransacoes()
  }, [params])

  useEffect(() => {
    if (modalTaAberto) {
      hendleBuscaCategorias()
    }

  }, [modalTaAberto])

  return (
    <>
      <Layout >
        <StylesTransacoes>

          <section>

            <h2>{params.tipo.toLocaleUpperCase()}S</h2>
            <Button
              onClick={() => setModalTaAberto(true)}
              texto={"Adicionar transação"}
              variant='primary' />
          </section>
          <ul>

            {listaTransacoes.map((transacao) => {
              return (
                <Transacao
                  key={transacao.id}
                  id={transacao.id}
                  valor={transacao.valor}
                  categoria={transacao.categoria}
                  data={transacao.data}
                  tipo={transacao.tipo}
                  descricao={transacao.descricao}
                  handleEditarTransacao={handleEditarTransacao}
                  handleAbrirModalDelete={handleAbrirModalDelete}
                />
              )
            })}
          </ul>
        </StylesTransacoes>

      </Layout>
      {/* MODAL DE CRIAR E EDITAR A TRANSAÇÃO  */}
      <Modal title={params.tipo} open={modalTaAberto} fechaModal={() => setModalTaAberto(false)}>

        <label htmlFor="">valor</label>
        <input type="text" value={valorTransacao} onChange={(evento) => setValorTransacao(evento.target.value)} />

        <label htmlFor="">categoria</label>
        <select value={categoriaSelecionada} onChange={(evento) => setCategoriaSelecionada(evento.target.value)}>
          {categorias.map((categoria) => {
            return (
              <option key={categoria.id} value={categoria.nome}>{categoria.nome}</option>
            )
          })}

        </select>

        <label htmlFor="">Descrição</label>
        <textarea name="" id="" cols="30" rows="10" value={descricaoTransacao} onChange={(evento) => setDescricaoTransacao(evento.target.value)} ></textarea>

        <button onClick={eEdicao ? handlePutTransacao : handleSalvarTransacao}>{eEdicao ? 'Salvar alterações' : 'ADICIONAR'}</button>
      </Modal>

      {/* MODAL - EXCLUIR A TRANSACAO */}

      <Modal open={modalDelete} title={'Excluir'} fechaModal={() => setModalDelete(false)}>
        <h3>Você deseja realmente excluir essa transação?</h3>
        <Button texto={'sim'} variant={'primary'} onClick={handleDeleteTransacao} />
      </Modal>

      {
        abrirNotificacao && <Notificacao
          texto={infosNotificacao.texto}
          tipo={infosNotificacao.tipo}
          fecharNotificacao={() => setAbrirNotificacao(false)}
          open={abrirNotificacao}
        />
      }
    </>
  )
}

export default Transacoes


// 1 - ter um estado de controle aberto/fechado (boolean)
// 2 - importar o modalimport Button from './../../components/common/Button/Button';
