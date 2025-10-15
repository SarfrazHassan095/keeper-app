import Button from "./Button";
import Input from "./Input";

export default function LoginForm(props) {
  return (
    <form className="flex flex-col gap-3" onSubmit={props.handleSubmit}>
      <Input
        type={"text"}
        placeholder={"Username"}
        value={props.username}
        onchange={props.setUsername}
      />
      <Input
        type={"password"}
        placeholder={"Password"}
        value={props.password}
        onchange={props.setPassword}
      />
      {!props.isRegistered && (
        <Input
          type={"password"}
          placeholder={"Confirm Password"}
          value={props.confirmPassword}
          onchange={props.setConfirmPassword}
        />
      )}

      <Button
        type={"submit"}
        value={props.isRegistered ? "Login" : "Register"}
      />
    </form>
  );
}
