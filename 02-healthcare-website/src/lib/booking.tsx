import { createContext, useContext, useState, type ReactNode } from 'react';

interface BookingContextValue {
  isOpen: boolean;
  openBooking: (prefillDepartment?: string) => void;
  closeBooking: () => void;
  prefillDepartment: string | undefined;
}

const BookingContext = createContext<BookingContextValue | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefillDepartment, setPrefillDepartment] = useState<string | undefined>(undefined);

  const openBooking = (dept?: string) => {
    setPrefillDepartment(dept);
    setIsOpen(true);
  };
  const closeBooking = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ isOpen, openBooking, closeBooking, prefillDepartment }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
}
