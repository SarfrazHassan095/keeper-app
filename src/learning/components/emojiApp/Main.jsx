import emojies from "./emojies";
import Entery from "./Entery";

export default function EmojiPediaApp() {
  return (
    <dl className="grid grid-cols-12 gap-3">
      {emojies.map((emoji) => (
        <Entery
          key={emoji.id}
          name={emoji.name}
          emoji={emoji.emoji}
          description={emoji.meaning}
        />
      ))}
    </dl>
  );
}
