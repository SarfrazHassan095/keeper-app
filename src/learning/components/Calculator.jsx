import { add, subtraction, multiply, divid } from "../utils/math";

export default function Calculator() {
  return (
    <ul>
      <li>Addition: {add(10, 20)}</li>
      <li>subtraction: {subtraction(10, 20)}</li>
      <li>Multiplication: {multiply(10, 20)}</li>
      <li>Division: {divid(10, 20)}</li>
    </ul>
  );
}
