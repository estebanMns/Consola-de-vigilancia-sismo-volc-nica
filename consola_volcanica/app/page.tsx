'use client';
import { useState, useEffect } from 'react';

export default function ConsolaBasicaEscolar() {
  // Variables de estado básicas estilo principiante
  const [estadoAlerta, setEstadoAlerta] = useState('NORMAL');
  const [valorStaLta, setValorStaLta] = useState(0);
  const [tramaId, setTramaId] = useState(1);
  const [historialMuestras, setHistorialMuestras] = useState<number[]>([]);

  
  useEffect(() => {
    const intervalo = setInterval(() => {
      
      setTramaId((prev) => prev + 1);

      
      let muestraAleatoria = (Math.random() - 0.5) * 4;

      
      let staSimulado = Math.abs(muestraAleatoria) * 2;
      let ltaSimulado = 1.0; 
      let relacion = staSimulado / ltaSimulado;

      setValorStaLta(Number(relacion.toFixed(2)));

      
      if (relacion >= 4.0) {
        setEstadoAlerta('¡DISPARO / ALERTA SÍSMICA ACTIVADA!');
      } else if (relacion <= 1.5) {
        setEstadoAlerta('NORMAL');
      }

      
      setHistorialMuestras((prev) => {
        const nuevoHistorial = [...prev, Number(muestraAleatoria.toFixed(2))];
        if (nuevoHistorial.length > 15) {
          nuevoHistorial.shift(); 
        }
        return nuevoHistorial;
      });

    }, 1000); 

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Courier New, monospace', backgroundColor: '#f0f0f0', color: '#000' }}>
      <h2>Consola de Vigilancia Sismo-Volcánica (Versión Básica Escolar)</h2>
      <p><i>Basado en Caso de Estudio 1 - Ingeniería de Software</i></p>

      <hr />

      
      <div style={{ border: '1px solid black', padding: '10px', background: '#fff', width: '350px' }}>
        <p><strong>Trama actual ID:</strong> {tramaId}</p>
        <p><strong>Estado del Sistema:</strong> 
          <span style={{ color: estadoAlerta.includes('ALERTA') ? 'red' : 'green', fontWeight: 'bold' }}>
             {estadoAlerta}
          </span>
        </p>
        <p><strong>Relación STA/LTA (RF-2):</strong> {valorStaLta}</p>
      </div>

      <br />

      
      <h3>Sismograma en Vivo (Canal N-S Estación 1)</h3>
      <div style={{ 
        width: '500px', 
        height: '120px', 
        border: '2px solid #333', 
        background: '#000', 
        color: '#00ff00', 
        padding: '10px',
        overflow: 'hidden',
        fontFamily: 'monospace'
      }}>
        <p style={{ margin: 0, fontSize: '12px' }}>&gt;&gt; Flujo de muestras recientes:</p>
        <p style={{ margin: '10px 0', fontSize: '14px', wordBreak: 'break-all' }}>
          {historialMuestras.map((m, index) => (
            <span key={index} style={{ marginRight: '5px' }}>
              [{m}]
            </span>
          ))}
        </p>
      </div>

      <br />

      
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => alert('Exportando datos a CSV (Simulado)...')} style={{ padding: '5px 10px' }}>
          Exportar CSV (RF-7)
        </button>
      </div>
    </div>
  );
}
