export default function Card({ image, name, phone, email }) {
  return (
    <div className="w-60 rounded-md shadow-lg bg-white p-2">
      <h2 className="font-bold">{name}</h2>
      <img src={image} alt={name} className="h-60 mx-auto" />
      <p className="font-light"> {phone}</p>
      <p className="font-light"> {email}</p>
    </div>
  );
}
