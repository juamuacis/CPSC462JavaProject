import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      display: 'flex',
      justifyContent: 'end',
      margin: 15
    }}>
      <Link href="/credits">Credits</Link>
    </footer>
  );
}