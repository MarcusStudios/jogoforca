const words = [
  { word: "praia", clue: "Tropical, letra inicial P" },
  { word: "maça", clue: "Adão e Eva, letra inicial M" },
  { word: "açai", clue: "Nossa cidade, letra inicial A" },
  { word: "pera", clue: "Letra inicial P" },
  { word: "azul", clue: "Cor, letra inicial A" },
  { word: "caju", clue: "Letra inicial C" },
  { word: "tigre", clue: "Felino selvagem" },
  { word: "gato", clue: "Inimigo de cachorro, letra incial G" },
  { word: "navio", clue: "Embarcação no mar" },
  { word: "wifi", clue: "internet, letra inicial W" },
  
];

export default function getWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
