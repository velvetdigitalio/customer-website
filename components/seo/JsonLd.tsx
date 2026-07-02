type JsonLdProps = {
  /** A single schema.org object, or an array of them. */
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Renders one or more schema.org JSON-LD blocks. Server-safe; the payload is
 * serialised once and injected via dangerouslySetInnerHTML so it lands in the
 * static HTML for crawlers.
 */
export function JsonLd({ data }: JsonLdProps) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
