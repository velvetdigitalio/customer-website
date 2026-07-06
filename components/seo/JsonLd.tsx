type JsonLdProps = {
  /** A single schema.org object, or an array of them. */
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Serialise a schema object and neutralise any sequence that could break out
 * of the surrounding <script> tag. Review/quote text is author-supplied, so a
 * stray `</script>` or an HTML-injection attempt would otherwise close the tag
 * early. Escaping `<`, `>` and `&` to their \uXXXX forms keeps the payload
 * valid JSON while making breakout impossible.
 */
function serialise(block: Record<string, unknown>): string {
  return JSON.stringify(block)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

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
          dangerouslySetInnerHTML={{ __html: serialise(block) }}
        />
      ))}
    </>
  );
}
