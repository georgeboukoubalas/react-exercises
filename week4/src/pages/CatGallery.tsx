import { useEffect, useState } from "react";

export function CatGallery() {
  const [cats, setCats] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => res.json())
      .then((data) => setCats(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Cat Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cats.map((cat) => (
          <img
            key={cat.id}
            src={cat.url}
            alt="cat"
            className="rounded-xl shadow-lg w-full h-64 object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default CatGallery;