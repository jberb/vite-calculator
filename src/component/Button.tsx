interface Ibutton {
    text: string;
    onClick?: () => void;
  }

function Button({text, onClick}:Ibutton) {
  return (
    <button 
    className={`${
        text === "="
          ? "col-span-2 bg-red-600 text-white h-16  rounded-lg"
          : "bg-blue-700 text-white h-16 col-span-1 w-16 rounded-lg"
      }`}
      onClick={onClick}>{text}</button>
  );
}

export default Button