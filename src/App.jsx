import React, { useState, useEffect } from 'react';
import { db, APP_URL } from './firebaseConfig';
import { collection, doc, setDoc, getDoc, onSnapshot, updateDoc, addDoc } from 'firebase/firestore';

export default function App() {
  const [view, setView] = useState('home');
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [jornadaActiva, setJornadaActiva] = useState(false);
  const [kmHoy, setKmHoy] = useState(0);
  const [bateria, setBateria] = useState(100);

  // Vista de Mensajero o Administrador básica y funcional
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ color: '#2563eb' }}>Rastreo de Mensajeros GPS</h2>
      <hr style={{ margin: '15px 0' }} />
      
      {view === 'home' && (
        <div>
          <p>Selecciona tu rol para comenzar:</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button 
              onClick={() => setView('mensajero')}
              style={{ background: '#2563eb', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}
            >
              Soy Mensajero
            </button>
            <button 
              onClick={() => setView('admin')}
              style={{ background: '#059669', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}
            >
              Modo Administrador
            </button>
          </div>
        </div>
      )}

      {view === 'mensajero' && (
        <div>
          <h3>Panel del Mensajero</h3>
          <p>Estado: <strong>{jornadaActiva ? '🟢 Jornada Activa' : '🔴 Jornada Detenida'}</strong></p>
          <p>Kilómetros recorridos hoy: <strong>{kmHoy.toFixed(2)} km</strong></p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button 
              onClick={() => setJornadaActiva(!jornadaActiva)}
              style={{ background: jornadaActiva ? '#dc2626' : '#16a34a', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}
            >
              {jornadaActiva ? 'Detener Jornada' : 'Iniciar Jornada'}
            </button>
            <button 
              onClick={() => setView('home')}
              style={{ background: '#6b7280', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            >
              Volver
            </button>
          </div>
        </div>
      )}

      {view === 'admin' && (
        <div>
          <h3>Panel del Administrador</h3>
          <p>Monitoreo de mensajeros en tiempo real y generación de códigos.</p>
          <button 
            onClick={() => setView('home')}
            style={{ background: '#6b7280', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '8px', cursor: 'pointer', marginTop: '20px' }}
          >
            Volver
          </button>
        </div>
      )}
    </div>
  );
}
