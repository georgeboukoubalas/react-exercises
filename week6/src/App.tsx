import { DndContext, type DragEndEvent } from '@dnd-kit/core'; // <-- Added 'type' keyword inline
import { useMagnetStore } from './store/useMagnetStore';
import WordMagnet from './components/WordMagnet';
import FridgeDoor from './components/FridgeDoor';

export default function App() {
  const { magnets, updateMagnet, loadExpansionPack } = useMagnetStore();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && over.id === 'fridge') {
      const magnetRect = active.rect.current.translated;
      const fridgeRect = over.rect;

      if (magnetRect && fridgeRect) {
        const x = magnetRect.left - fridgeRect.left;
        const y = magnetRect.top - fridgeRect.top;

        updateMagnet(active.id as string, { status: 'fridge', x, y });
      }
    } else if (!over) {
      updateMagnet(active.id as string, { status: 'bank' });
    }
  };

  const bankMagnets = magnets.filter((m) => m.status === 'bank');
  const fridgeMagnets = magnets.filter((m) => m.status === 'fridge');

  return (
    <div className="min-h-screen bg-slate-100 font-sans p-6 md:p-10">
      
      {/* Header - Hidden on Print */}
      <div className="bg-white p-6 mb-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center shadow-sm border border-gray-100 print:hidden">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-black text-blue-600">Fridge poetry</h1>
          <p className="text-sm text-gray-500 mt-1">Drag words to fidge door and locate them freely.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={loadExpansionPack} 
            className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-5 py-2.5 rounded-xl font-bold transition-colors"
          >
            Load extra words 📦
          </button>
          <button 
            onClick={() => window.print()} 
            className="bg-[#222222] hover:bg-black text-white px-5 py-2.5 rounded-xl font-bold transition-colors"
          >
            Print the poem 🖨️
          </button>
        </div>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Word Bank Sidebar - Hidden on Print */}
          <div className="w-full md:w-80 min-h-[700px] bg-[#222222] rounded-2xl p-8 shadow-md print:hidden">
            <h2 className="text-xs font-bold text-gray-400 tracking-widest mb-6 uppercase border-b border-gray-600 pb-3">
              Word Bank
            </h2>
            <div className="flex flex-wrap gap-3 content-start">
              {bankMagnets.map((magnet) => (
                <WordMagnet key={magnet.id} magnet={magnet} />
              ))}
            </div>
          </div>

          {/* Fridge Door Area - Visible on Print */}
          <div className="flex-1 w-full">
            <FridgeDoor>
              {fridgeMagnets.map((magnet) => (
                <WordMagnet key={magnet.id} magnet={magnet} />
              ))}
            </FridgeDoor>
          </div>

        </div>
      </DndContext>
    </div>
  );
}