import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import type { Magnet } from '../type'; // <-- Added 'type' and fixed folder name

interface Props {
  magnet: Magnet;
}

export default function WordMagnet({ magnet }: Props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: magnet.id,
    data: magnet,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    position: magnet.status === 'fridge' ? ('absolute' as const) : ('relative' as const),
    left: magnet.status === 'fridge' ? `${magnet.x}px` : undefined,
    top: magnet.status === 'fridge' ? `${magnet.y}px` : undefined,
    zIndex: isDragging ? 50 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`inline-flex items-center justify-center bg-white text-slate-900 font-bold px-4 py-2 shadow-sm border border-gray-200 cursor-grab active:cursor-grabbing select-none ${
        isDragging ? 'opacity-70 shadow-xl scale-105' : 'opacity-100'
      }`}
    >
      {magnet.word}
    </div>
  );
}