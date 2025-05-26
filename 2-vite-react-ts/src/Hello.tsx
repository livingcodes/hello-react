type HelloProps = {
  name: string
}
export default function Hello({ name }: HelloProps) {
  return (
    <h1
      style={{
        background: "linear-gradient(150deg, teal, purple)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text", // for Firefox
        color: "#333", // fallback color
        display: "inline-block",
      }}
    >
      Hello {name}
    </h1>
  );
}