import { Button } from "./Button";

interface GenrerProps {
  id: number;
  title: string;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
}

interface SideBarProps {
  title: string;
  genres: Array<GenrerProps>;
  selectedGenreId: number;
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>;
}

export function SideBar({
  title,
  genres,
  setSelectedGenreId,
  selectedGenreId,
}: SideBarProps) {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>{title}</span>
      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
