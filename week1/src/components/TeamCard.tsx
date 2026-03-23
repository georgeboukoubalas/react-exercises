import { useState } from "react";

interface CardProps {
  name: string;
  role: string;
}

export function TeamCard({ name, role }: CardProps) {
  const [votes, setVotes] = useState(0);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-60">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-500 mb-4">{role}</p>

      <button
        onClick={() => setVotes((prev) => prev + 1)}
        className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold"
      >
        Vote 👍 {votes}
      </button>
    </div>
  );
}