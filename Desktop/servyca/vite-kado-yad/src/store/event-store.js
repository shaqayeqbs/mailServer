import create from "zustand";

const useEventsStore = create((set) => ({
  events: [],
  setInitialEvents: (initialEvents) => set({ events: initialEvents }),
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  updateEvent: (eventId, updatedEvent) =>
    set((state) => ({
      events: state.events.map((event) =>
        event.id === eventId ? updatedEvent : event
      ),
    })),
  removeEvent: (eventId) =>
    set((state) => ({
      events: state.events.filter((event) => event.id !== eventId),
    })),
}));

export default useEventsStore;
