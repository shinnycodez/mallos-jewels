const QuantitySelector = ({ quantity, setQuantity, maxQuantity }) => {
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (!maxQuantity || quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      // Apply max quantity limit if provided
      if (maxQuantity && value > maxQuantity) {
        setQuantity(maxQuantity);
      } else {
        setQuantity(value);
      }
    } else {
      setQuantity(1);
    }
  };

  return (
    <>
      <h3 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Quantity
      </h3>
      <div className="flex items-center gap- bg-[#fefaf9] px-4 min-h-14  justify-between rounded-xl">
        <p className="text-[#141414] text-base font-normal leading-normal flex-1 truncate">
          Quantity:
        </p>
        <div className="shrink-0">
          <div className="flex items-center gap-2 text-[#141414]">
            <button
              onClick={handleDecrement}
              disabled={quantity <= 1}
              className={`text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#fefaf9] ${
                quantity <= 1 ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              −
            </button>
            <input
              className="text-base font-medium leading-normal w-12 text-center bg-transparent focus:outline-none border border-[#e0e0e0] rounded"
              type="number"
              value={quantity}
              onChange={handleChange}
              min="1"
              max={maxQuantity || undefined}
            />
            <button
              onClick={handleIncrement}
              disabled={maxQuantity && quantity >= maxQuantity}
              className={`text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#fefaf9] ${
                (maxQuantity && quantity >= maxQuantity) ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              +
            </button>
          </div>
        </div>
        {maxQuantity && (
          <p className="text-sm text-gray-500 ml-2">
            Max: {maxQuantity}
          </p>
        )}
      </div>
    </>
  );
};

export default QuantitySelector;