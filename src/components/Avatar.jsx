const Avatar = ({ name }) => {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase();
  return (
    <div style={{
      width: '28px', height: '28px', borderRadius: '50%',
      background: '#EEEDFE', color: '#3C3489',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '11px', fontWeight: '500', marginRight: '8px', flexShrink: 0
    }}>{initials}</div>
  );
};

export default Avatar;