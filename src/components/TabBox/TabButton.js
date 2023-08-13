const TabButton = ({ isActive, onClick, children }) => {
  const conditionalClasses = `${
    isActive ? 'text-fuchsia-700' : 'text-gray-300'
  }`;
  const styles = isActive ? { boxShadow: '0 6px rgb(162, 28, 175)' } : {};

  return (
    <button
      className={`uppercase font-bold transition duration-300 ${conditionalClasses}`}
      style={styles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TabButton;
