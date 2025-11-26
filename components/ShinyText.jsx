const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#ffffff50] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, black 30%, white 50%, black 70%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
