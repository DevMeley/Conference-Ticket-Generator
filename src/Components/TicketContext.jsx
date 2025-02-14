import { createContext, useContext, useState } from 'react';

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState({});
  
  const ticketTypes = [
    {
      id: 1,
      price: 'Free',
      type: 'Regualer Access',
      spots: '20/52'
    },
    {
      id: 2,
      price: '$150',
      type: 'VIP Access',
      spots: '20/52'
    },
    {
      id: 3,
      price: '$150',
      type: 'VVIP Access',
      spots: '20/52'
    }
  ];

  return (
    <TicketContext.Provider value={{ selectedCard, setSelectedCard, ticketTypes }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => useContext(TicketContext);