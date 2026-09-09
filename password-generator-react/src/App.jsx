import { useState } from 'react'
import './App.css'

function App() {
  const [longitud, setLongitud] = useState(10)
  const [conMayusculas, setConMayusculas] = useState(true)
  const [conMinusculas, setConMinusculas] = useState(true)
  const [conNumeros, setConNumeros] = useState(true)
  const [conSimbolos, setConSimbolos] = useState(true)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [fortaleza, setFortaleza] = useState('')
  const [copiado, setCopiado] = useState(false)

function copiarPassword() {
    if (!password) return
    navigator.clipboard.writeText(password)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 2000)
  }  
function generarPassword() {
    let permitidos = ''
    if (conMayusculas) permitidos += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (conMinusculas) permitidos += 'abcdefghijklmnopqrstuvwxyz'
    if (conNumeros) permitidos += '0123456789'
    if (conSimbolos) permitidos += '!@#$%^&*'

    if (permitidos === '' || longitud == 0) {
      setError('Marcá al menos una opción')
      return
    }
    setError('')

    let resultado = ''
    for (let i = 0; i < longitud; i++) {
      resultado += permitidos[Math.floor(Math.random() * permitidos.length)]
    }
    setPassword(resultado)

        let puntos = 0
    if (conMayusculas) puntos++
    if (conMinusculas) puntos++
    if (conNumeros) puntos++
    if (conSimbolos) puntos++

    if (longitud < 6) {
      setFortaleza('Muy débil')
    } else if (longitud < 8) {
      setFortaleza(puntos >= 3 ? 'Débil' : 'Muy débil')
    } else if (longitud < 12) {
      setFortaleza(puntos >= 3 ? 'Media' : 'Débil')
    } else {
      setFortaleza(puntos >= 3 ? 'Fuerte' : 'Media')
    }
 }
  return (
    <main>
      <h1>Generador de contraseñas</h1>
      <section>
        <div>
          <input type="text" readOnly placeholder="P4$5W0rD!" value={password} />
          <button onClick={copiarPassword}>{copiado ? 'Copiado!' : 'Copiar'}</button>
        </div>

        <div>
          <label>Longitud</label>
          <span>{longitud}</span>
          <input
            type="range"
            min="0"
            max="20"
            value={longitud}
            onChange={(e) => setLongitud(e.target.value)}
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={conMayusculas}
              onChange={(e) => setConMayusculas(e.target.checked)}
            />
            Incluir mayúsculas
          </label>

          <label>
            <input
              type="checkbox"
              checked={conMinusculas}
              onChange={(e) => setConMinusculas(e.target.checked)}
            />
            Incluir minúsculas
          </label>

          <label>
            <input
              type="checkbox"
              checked={conNumeros}
              onChange={(e) => setConNumeros(e.target.checked)}
            />
            Incluir números
          </label>

          <label>
            <input
              type="checkbox"
              checked={conSimbolos}
              onChange={(e) => setConSimbolos(e.target.checked)}
            />
            Incluir símbolos
          </label>
        </div>
                <div>
          <label>FORTALEZA</label>
          <span>{fortaleza}</span>
        </div>

        <button onClick={generarPassword}>GENERAR →</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
      </section>
    </main>
  )
}

export default App
