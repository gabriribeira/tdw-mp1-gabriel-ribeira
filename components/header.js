import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" legacyBehavior>
        <a className="hover:underline">Blog do Gabriel Ribeira</a>
      </Link>
      .
    </h2>
  );
}
