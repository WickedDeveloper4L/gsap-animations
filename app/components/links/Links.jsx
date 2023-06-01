import Link from "next/link";
export default function Links() {
  return (
    <div
      style={{
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        gap: "0.8rem",
      }}
    >
      <h3 style={{ fontSize: "1.3rem", padding: "20px" }}>
        <Link href="/hero">Hero Animation</Link>
      </h3>
      <h3 style={{ fontSize: "1.3rem", padding: "20px" }}>
        <Link href="/split-text">Split text Animation</Link>
      </h3>
      <h3 style={{ fontSize: "1.3rem", padding: "20px" }}>
        <Link href="/scroll-trigger">Scroll-trigger Animation</Link>
      </h3>
    </div>
  );
}
