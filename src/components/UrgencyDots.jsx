const UrgencyDots = ({ level }) => (
  <div style={{ display: 'flex', gap: '3px' }}>
    {[1,2,3,4,5].map(i => (
      <div key={i} style={{
        width: '7px', height: '7px', borderRadius: '50%',
        background: i <= level ? '#0F6E56' : '#e0e0e0'
      }} />
    ))}
  </div>
);

export default UrgencyDots