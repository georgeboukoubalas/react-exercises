import { useDroppable } from '@dnd-kit/core';

export default function FridgeDoor({ children }: { children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({ id: 'fridge' });

  return (
    <div
      ref={setNodeRef}
      className={`relative w-full h-[700px] rounded-2xl shadow-sm transition-colors duration-200 overflow-hidden ${
        isOver ? 'bg-blue-50 border-2 border-blue-400' : 'bg-white border-2 border-transparent'
      }`}
    >
      {/* Visual fridge handle for aesthetics (hidden when printing) */}
      <div className="absolute left-6 top-24 w-4 h-48 bg-slate-200 rounded-full shadow-inner print:hidden" />
      {children}
    </div>
  );
}