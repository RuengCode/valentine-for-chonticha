'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type CardType = {
    id: number;
    pairId: string;
    isFlipped: boolean;
    isMatched: boolean;
};

const generateDeck = () => {
    const icons = ['❤️', '😊', '🌟', '🎮', '🎨', '🎵', '🌈', '🎪'];
    let deck: CardType[] = [];
    let id = 0;
    
    // Take first 8 icons and create pairs
    for (let i = 0; i < 2; i++) {
        deck.push({ id: id++, pairId: icons[i], isFlipped: false, isMatched: false });
        deck.push({ id: id++, pairId: icons[i], isFlipped: false, isMatched: false });
    }
    // Shuffle deck
    deck = deck.sort(() => Math.random() - 0.5);
    return deck;
};


export default function Page() {
    const [cards, setCards] = useState<CardType[]>(generateDeck());
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [disabled, setDisabled] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error" | "info" | null; text: string; }>({ type: null, text: '' });

    const flipCard = (index: number) => {
        if (disabled) return;
        const card = cards[index];
        if (card.isFlipped || card.isMatched) return;

        const newCards = [...cards];
        newCards[index] = { ...card, isFlipped: true };
        setCards(newCards);

        const newFlipped = [...flippedCards, index];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            setDisabled(true);
        }
    };

    useEffect(() => {
        if (flippedCards.length === 2) {
            const [firstIndex, secondIndex] = flippedCards;
            const firstCard = cards[firstIndex];
            const secondCard = cards[secondIndex];

            if (firstCard.pairId === secondCard.pairId) {
                // Mark as matched
                const newCards = [...cards];
                newCards[firstIndex] = { ...firstCard, isMatched: true };
                newCards[secondIndex] = { ...secondCard, isMatched: true };
                setCards(newCards);
                setFlippedCards([]);
                setDisabled(false);

                // Check if all cards are matched
                const allMatched = newCards.every(card => card.isMatched);
                
                if (allMatched) {
                    // Redirect to valentinemail page after a short delay
                    setMessage({ type: "success", text: "Match found! 🎉" });
                    setTimeout(() => {
                        window.location.href = "ValentineBook";
                      }, 1000);
                    
                }
            } else {
                // Flip back after a delay
                setTimeout(() => {
                    const newCards = [...cards];
                    newCards[firstIndex] = { ...firstCard, isFlipped: false };
                    newCards[secondIndex] = { ...secondCard, isFlipped: false };
                    setCards(newCards);
                    setFlippedCards([]);
                    setDisabled(false);
                }, 1000);
            }
        }
    }, [flippedCards, cards]);

    const resetGame = () => {
        setCards(generateDeck());
        setFlippedCards([]);
        setDisabled(false);
    };

    return (
        <div className="flex flex-col items-center p-8 font-sans">
            <h1 className="text-2xl font-bold mb-4">Memory Game</h1>
           
            <div className="grid grid-cols-4 gap-3">
                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        className={`
                            w-16 h-16 rounded-lg flex items-center justify-center text-3xl
                            ${card.isFlipped || card.isMatched 
                                ? 'bg-base-200' 
                                : 'bg-gray-400 cursor-pointer'
                            }
                        `}
                        onClick={() => flipCard(index)}
                        initial={{ rotateY: 0 }}
                        animate={{ 
                            rotateY: card.isFlipped || card.isMatched ? 180 : 0
                        }}
                        transition={{ duration: 0.6 }}
                        style={{ perspective: 1000 }}
                    >
                        <motion.div
                            style={{ 
                                rotateY: card.isFlipped || card.isMatched ? 180 : 0
                            }}
                        >
                            {(card.isFlipped || card.isMatched) && (
                                <span>{card.pairId}</span>
                            )}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
            <div className="w-full max-w-xs mt-4">
                <motion.div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                        className="bg-primary h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ 
                            width: `${(cards.filter(card => card.isMatched).length / cards.length) * 100}%` 
                        }}
                        transition={{ duration: 0.5 }}
                    />
                </motion.div>
            </div>
            
            <button 
                className="btn btn-error mb-4 mt-4"
                onClick={resetGame}
            >
                Reset Game
            </button>
            {message.type && (
                <div className={`alert alert-${message.type} mt-4`}>
                    <span>{message.text}</span>
                </div>
            )}
            
      </div>
    );
}
