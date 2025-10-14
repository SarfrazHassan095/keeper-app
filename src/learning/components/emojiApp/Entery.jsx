export default function Entery(props) {
  return (
    <div className="bg-white col-span-4 text-center p-4 shadow-lg rounded-md">
      <dt>
        <span className="text-6xl block mb-2">{props.emoji}</span>
        <span className="text-xl block font-bold mb-4">{props.name}</span>
      </dt>
      <dd>
        <span className="text-sm">{props.description}</span>
      </dd>
    </div>
  );
}
