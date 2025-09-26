import React from 'react';

const WhatsAppChatBtn = () => {
  const handleClick = () => {
    const phoneNumber = '+919876543210'; // Replace with actual number if needed
    const message = encodeURIComponent('how can i help you');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '65px',
        right: '20px',
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        zIndex: 1000,
        transition: 'transform 0.2s',
      }}
      onClick={handleClick}
      onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
    >
      <i
        className="fab fa-whatsapp"
        style={{
          color: 'white',
          fontSize: '30px',
        }}
      ></i>
    </div>
  );
};

export default WhatsAppChatBtn;
