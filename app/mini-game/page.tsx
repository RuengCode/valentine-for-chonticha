import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function MiniGame() {

    const [cards, setCards] = useState(() => {
        const cardValues = [
            { value: "❤️", flipped: false, matched: false },
            { value: "❤️", flipped: false, matched: false },
            { value: "🤗", flipped: false, matched: false },
            { value: "🤗", flipped: false, matched: false },
            { value: "😄", flipped: false, matched: false },
            { value: "😄", flipped: false, matched: false },
            { value: "🤗", flipped: false, matched: false },
            { value: "🤗", flipped: false, matched: false },
        ];
        return cardValues
            .sort(() => Math.random() - 0.5)
            .map((card, index) => ({ ...card, id: index + 1 }));
    });
  const [flipped, setFlipped] = useState<number[]>([]);
  const [message, setMessage] = useState<{
    type: "success" | "error" | "info" | null;
    text: string;
  }>({
    type: " ",
    text: " ",
  });

  function handleCardClick(index: number) {
    if (cards[index].flipped || cards[index].matched) return;
    const updated = [...cards];
    updated[index].flipped = true;
    setCards(updated);
    setFlipped([...flipped, index]);
  }

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first].value === cards[second].value) {
        const updated = [...cards];
        updated[first].matched = true;
        updated[second].matched = true;
        setCards(updated);
        setMessage({ type: "success", text: "Match found! 🎉" });
        setTimeout(() => {
          window.location.href = "gallerymemory";
        }, 1000);
      } else {
        setMessage({ type: "error", text: "No match! Try again! 🤔" });
        setTimeout(() => {
          setMessage({ type: null, text: "" });
        }, 800);
        setTimeout(() => {
          const updated = [...cards];
          updated[first].flipped = false;
          updated[second].flipped = false;
          setCards(updated);
        }, 1000);
      }
      setFlipped([]);
    }
  }, [flipped, cards]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col space-y-4 text-center"
    >
      <h3 className="font-bold">Memory Game</h3>
      <p>Match the cards to win!</p>
      <div className="grid grid-cols-4 gap-4 align-center">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            onClick={() => handleCardClick(i)}
            className="w-16 h-24 flex items-center justify-center cursor-pointer border-1 border-solid rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              rotateY: card.flipped || card.matched ? 180 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {card.flipped || card.matched ? card.value : ''}
          </motion.div>
        ))}
      </div>
      <div role="alert" className={`alert alert-${message.type} alert-soft`}>
        <span>{message.text}</span>
      </div>
    </motion.div>
  );
}
