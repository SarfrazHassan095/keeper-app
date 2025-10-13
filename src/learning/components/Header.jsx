const currentDate = new Date();
const currentHour = currentDate.getHours();

let greetings = "";
let customStyle = {
  color: "",
};

if (currentHour < 12) {
  greetings = "good morning";
  customStyle.color = "red";
} else if (currentHour < 18) {
  greetings = "good afternoon";
  customStyle.color = "green";
} else {
  greetings = "good night";
  customStyle.color = "blue";
}
export default function Header() {
  return <h1 style={customStyle}>{greetings}</h1>;
}
