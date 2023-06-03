export default function Card({ name, dni }) {
  return (
    <div className="card">
      <h4>Nombre: {name}</h4>
      <h4>DNI: {dni}</h4>
    </div>
  );
}
