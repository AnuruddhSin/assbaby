const QuantitySelector = ({ value, onChange, min = 1 }) => {
  const dec = () => value > min && onChange(value - 1);
  const inc = () => onChange(value + 1);

  return (
    <div className="inline-flex items-center border rounded-full px-2 py-1 text-xs">
      <button onClick={dec} className="px-2">
        -
      </button>
      <span className="px-2">{value}</span>
      <button onClick={inc} className="px-2">
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
