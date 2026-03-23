import { TeamCard } from "./components/TeamCard";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex gap-4 justify-center">
      
      <TeamCard name="Alice" role="Frontend Dev" />
      <TeamCard name="Bob" role="Backend Dev" />
      <TeamCard name="Charlie" role="UI Designer" />

    </div>
  );
}