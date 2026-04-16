const Pill = ({ value }) => {
  const styles = {
    casa:           { background: '#E1F5EE', color: '#085041' },
    departamento:   { background: '#E6F1FB', color: '#0C447C' },
    compra_pie:     { background: '#FAEEDA', color: '#633806' },
    compra_contado: { background: '#FAEEDA', color: '#633806' },
    arriendo:       { background: '#FAECE7', color: '#712B13' },
  };
  const labels = {
    casa: 'Casa',
    departamento: 'Depto',
    compra_pie: 'Compra pie',
    compra_contado: 'Al contado',
    arriendo: 'Arriendo',
  };
  const s = styles[value] || { background: '#f0f0f0', color: '#555' };
  return (
    <span style={{ ...s, padding: '2px 8px', borderRadius: '20px', fontSize: '11px', fontWeight: '500' }}>
      {labels[value] || value}
    </span>
  );
};

export default Pill