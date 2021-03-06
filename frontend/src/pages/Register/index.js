import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Container } from './styles'
import { ButtonD, Lin } from '../../global'

import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  async function handleRegister(e) {
    e.preventDefault()
    const data = {
      city,
      uf,
      email,
      whatsapp,
      name
    }
    try {
      const response = await api.post('ongs', data)
    
      alert(`Sua ID de acesso: ${response.data.id}`)
      history.push('/')
    } catch(err) {
      alert('falhou')
    }
  }

  return (
    <Container>
      <div className="content">
        <section>
          <img src={logoImg} alt="logo" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          
          <Lin>
            <Link className="back-link" to="/">
              <FiArrowLeft size={16} color="#e02041" />
              Já tenho cadastro
            </Link>
          </Lin>
        </section>

        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)}/>
          <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
          <div className="input-group">
            <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
            <input placeholder="UF" style={{ width: 80 }} value={uf} onChange={e => setUf(e.target.value)} />
          </div>
          <ButtonD type="submit" className="button">Cadastrar</ButtonD>
        </form>
      </div>
    </Container>
  )
}
