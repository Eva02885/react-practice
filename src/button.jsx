function Button({ text = "Login", color = "pink" }) {
  const colors = {
    pink: "bg-pink-500 text-white hover:bg-pink-400",
    blue: "bg-blue-600 text-white hover:bg-blue-500",
    green: "bg-green-600 text-white hover:bg-green-500",
    white: "bg-white text-black ring-1 ring-gray-300 hover:bg-gray-100",
  };

  return (
    <button
      type="button"
      className={`rounded-md ${colors[color] || colors.pink} px-3.5 py-2.5 text-sm font-semibold shadow-xs`}
    >
      {text}
    </button>
  );
}

export default Button;