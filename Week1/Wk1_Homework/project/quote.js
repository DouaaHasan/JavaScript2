const quotes = [
  "Some are born great, some achieve greatness, and some have greatness thrust upon them. -William Shakespeare",
  "Nothing beats a great smile. -Karen Urban",
  "It always seems impossible until it’s done. -Nelson Mandela",
  "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
  "It does not matter how slowly you go so long as you do not stop. -Confucius",
  "That which does not kill us makes us stronger. -Friedrich Nietzsche"
];

document.getElementById("quoteDisplay").textContent = quotes[0];

const newQuote = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").textContent = quotes[randomNumber];
};
