/** The faint fixed CSS grid used across the site over the ink background. */
export default function GridBackground() {
  return (
    <div
      aria-hidden="true"
      data-print="hide"
      className="pointer-events-none fixed inset-0 -z-10 bg-[size:40px_40px]"
      style={{
        backgroundImage:
          "linear-gradient(to right,#4f4f4f2e 1px,transparent 1px),linear-gradient(to bottom,#4f4f4f2e 1px,transparent 1px),radial-gradient(55rem 40rem at 50% -12%,rgba(34,211,238,0.08),transparent 60%),radial-gradient(48rem 38rem at 100% 8%,rgba(168,85,247,0.07),transparent 60%)",
        backgroundSize: "40px 40px,40px 40px,100% 100%,100% 100%",
      }}
    />
  );
}
