"use client";

import { useState, useEffect } from "react";

function crearTablero() {
  const valores = [1, 2, 3, 4, 5, 6, 7, 8];
  const duplicados = [...valores, ...valores];
  const mezclado = duplicados.sort(() => Math.random() - 0.5);

  return mezclado.map((valor, index) => ({
    id: index,
    valor,
    dadaVuelta: false,
    encontrada: false,
  }));
}

function formatearTiempo(totalSegundos) {
  const minutos = Math.floor(totalSegundos / 60);
  const segs = totalSegundos % 60;
  return `${minutos}:${segs.toString().padStart(2, "0")}`;
}

export default function Home() {
  const [tablero, setTablero] = useState(crearTablero);
  const [evaluando, setEvaluando] = useState(false);
  const [movimientos, setMovimientos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [jugando, setJugando] = useState(false);
  const gano = tablero.every((f) => f.encontrada);

  useEffect(() => {
    if (!jugando || gano) return;

    const intervalo = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [jugando, gano]);

  function darVuelta(id) {
    setJugando(true);
    setTablero((prev) =>
      prev.map((ficha) =>
        ficha.id === id ? { ...ficha, dadaVuelta: true } : ficha
      )
    );
  }

  function nuevaPartida() {
    setTablero(crearTablero());
    setMovimientos(0);
    setSegundos(0);
    setJugando(false);
    setEvaluando(false);
  }

  useEffect(() => {
    const volteadas = tablero.filter((f) => f.dadaVuelta && !f.encontrada);

    if (volteadas.length === 2) {
      setMovimientos((prev) => prev + 1);
      setEvaluando(true);
      const [a, b] = volteadas;
      if (a.valor === b.valor) {
        setTablero((prev) =>
          prev.map((f) =>
            f.id === a.id || f.id === b.id
              ? { ...f, encontrada: true, dadaVuelta: false }
              : f
          )
        );
        setEvaluando(false);
      } else {
        setTimeout(() => {
          setTablero((prev) =>
            prev.map((f) =>
              f.id === a.id || f.id === b.id ? { ...f, dadaVuelta: false } : f
            )
          );
          setEvaluando(false);
        }, 1000);
      }
    }
  }, [tablero]);

  return (
    <main>
      <header>
        <h1>memory</h1>
        <button onClick={nuevaPartida}>Nueva partida</button>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        {tablero.map((ficha) => (
          <button
            key={ficha.id}
            onClick={() => {
              if (ficha.dadaVuelta || ficha.encontrada || evaluando) return;
              darVuelta(ficha.id);
            }}
            style={{
              aspectRatio: "1",
              borderRadius: "50%",
              fontSize: "24px",
              backgroundColor: ficha.dadaVuelta || ficha.encontrada ? "#fff" : "#333",
              color: ficha.dadaVuelta || ficha.encontrada ? "#000" : "#333",
            }}
          >
            {ficha.dadaVuelta || ficha.encontrada ? ficha.valor : ""}
          </button>
        ))}
      </section>

      {gano && (
        <div>
          <h2>¡Lo lograste!</h2>
          <p>Tiempo: {formatearTiempo(segundos)}</p>
          <p>Movimientos: {movimientos}</p>
          <button onClick={nuevaPartida}>Jugar de nuevo</button>
        </div>
      )}

      <footer>
        <div>Tiempo: {formatearTiempo(segundos)}</div>
        <div>Movimientos: {movimientos}</div>
      </footer>
    </main>
  );
}