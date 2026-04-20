import { create } from 'zustand';
import type { Magnet } from '../type'; // <-- Added 'type' and fixed folder name

interface MagnetStore {
  magnets: Magnet[];
  updateMagnet: (id: string, updates: Partial<Magnet>) => void;
  loadExpansionPack: () => void;
}

const initialMagnets: Magnet[] = [
  { id: '1', word: 'summer', status: 'bank', x: 0, y: 0 },
  { id: '2', word: 'night', status: 'bank', x: 0, y: 0 },
  { id: '3', word: 'is', status: 'bank', x: 0, y: 0 },
  { id: '4', word: 'hot', status: 'bank', x: 0, y: 0 },
  { id: '5', word: 'and', status: 'bank', x: 0, y: 0 },
  { id: '6', word: 'code', status: 'bank', x: 0, y: 0 },
  { id: '7', word: 'bug', status: 'bank', x: 0, y: 0 },
  { id: '8', word: 'beautiful', status: 'fridge', x: 300, y: 250 },
];

export const useMagnetStore = create<MagnetStore>((set) => ({
  magnets: initialMagnets,
  updateMagnet: (id, updates) =>
    set((state) => ({
      magnets: state.magnets.map((m) => (m.id === id ? { ...m, ...updates } : m)),
    })),
  loadExpansionPack: () =>
    set((state) => ({
      magnets: [
        ...state.magnets,
        { id: '9', word: 'coffee', status: 'bank', x: 0, y: 0 },
        { id: '10', word: 'error', status: 'bank', x: 0, y: 0 },
        { id: '11', word: 'sleep', status: 'bank', x: 0, y: 0 },
        { id: '12', word: 'fix', status: 'bank', x: 0, y: 0 },
      ],
    })),
}));