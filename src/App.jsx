import { useEffect, useState } from 'react';
import { getClients } from './api/clients';
import Pill from './components/Pill';
import Avatar from './components/Avatar';
import UrgencyDots from './components/UrgencyDots';
import { th, td } from './components/Table/TableStyle';

function App() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getClients().then(setClients).finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ padding: '2rem', color: '#888' }}>Cargando clientes...</p>;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '20px', fontWeight: '500' }}>Clientes</h1>
        <span style={{ fontSize: '12px', color: '#888', background: '#f5f5f5', padding: '3px 10px', borderRadius: '8px', border: '1px solid #eee' }}>
          {clients.length} {clients.length === 1 ? 'cliente' : 'clientes'}
        </span>
      </div>

      <div style={{ border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden', background: '#fff' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed', minWidth: '900px' }}>
            <thead>
              <tr>
                <th style={{ ...th, width: '50px' }}>ID</th>
                <th style={{ ...th, width: '160px' }}>Nombre</th>
                <th style={{ ...th, width: '120px' }}>RUT</th>
                <th style={{ ...th, width: '80px' }}>Score</th>
                <th style={{ ...th, width: '120px' }}>Sueldo</th>
                <th style={{ ...th, width: '120px' }}>Ahorros</th>
                <th style={{ ...th, width: '90px' }}>Urgencia</th>
                <th style={{ ...th, width: '100px' }}>Propiedad</th>
                <th style={{ ...th, width: '140px' }}>Motivación</th>
                <th style={{ ...th, width: '110px' }}>Comuna</th>
                <th style={{ ...th, width: '80px' }}>Tamaño</th>
                <th style={{ ...th, width: '120px' }}>Compra</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id} style={{ cursor: 'default' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{ ...td, color: '#aaa' }}>{client.id}</td>
                  <td style={td}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar name={client.name} />
                      {client.name}
                    </div>
                  </td>
                  <td style={{ ...td, color: '#888' }}>{client.rut}</td>
                  <td style={{ ...td, color: client.score >= 700 ? '#0F6E56' : client.score >= 500 ? '#BA7517' : '#A32D2D', fontWeight: '500' }}>
                    {client.score ?? '-'}
                  </td>
                  <td style={td}>${client.salary?.toLocaleString('es-CL') ?? '-'}</td>
                  <td style={td}>${client.savings?.toLocaleString('es-CL') ?? '-'}</td>
                  <td style={td}><UrgencyDots level={client.urgencyLevel ?? 0} /></td>
                  <td style={td}><Pill value={client.propertyType} /></td>
                  <td style={{ ...td, color: '#888' }}>{client.purchaseMotivation ?? '-'}</td>
                  <td style={td}>{client.preferredLocation ?? '-'}</td>
                  <td style={{ ...td, color: '#888' }}>{client.propertySize ? `${client.propertySize} m²` : '-'}</td>
                  <td style={td}><Pill value={client.purchaseType} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;