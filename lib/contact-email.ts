export interface LeadPayload {
  name: string;
  email: string;
  company: string;
  budget: string;
  services: string[];
  message: string;
  submittedAt: string;
  source: string;
}

function escape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function leadEmailHtml(lead: LeadPayload) {
  const services = lead.services.length ? lead.services.join(", ") : "—";
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:14px 20px;border-bottom:1px solid #1f1c28;color:#8a8594;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;width:160px;vertical-align:top;">${label}</td>
      <td style="padding:14px 20px;border-bottom:1px solid #1f1c28;color:#ede7dc;font-size:15px;line-height:1.6;">${value}</td>
    </tr>`;

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#0a0a0b;font-family:'Helvetica Neue',Arial,sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="600" style="max-width:600px;margin:40px auto;background:linear-gradient(180deg,#141318,#0e0518);border:1px solid rgba(212,175,55,0.18);border-radius:18px;overflow:hidden;">
      <tr>
        <td style="padding:32px 28px 0 28px;">
          <div style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#d4af37;">New enquiry · Velvet Digital</div>
          <h1 style="margin:14px 0 6px 0;font-size:28px;line-height:1.2;color:#ede7dc;letter-spacing:-0.01em;font-weight:600;">
            ${escape(lead.name) || "New lead"} just reached out.
          </h1>
          <p style="margin:0;color:#8a8594;font-size:14px;">
            From <a href="mailto:${escape(lead.email)}" style="color:#f5d77a;text-decoration:none;">${escape(lead.email)}</a> · received ${escape(new Date(lead.submittedAt).toUTCString())}
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 28px 8px 28px;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background:rgba(255,255,255,0.02);border:1px solid #1f1c28;border-radius:14px;">
            ${row("Company", escape(lead.company) || "—")}
            ${row("Budget", escape(lead.budget) || "—")}
            ${row("Services", escape(services))}
            ${row("Source", escape(lead.source))}
            ${row("Message", `<div style="white-space:pre-wrap;">${escape(lead.message)}</div>`)}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 28px 32px 28px;">
          <a href="mailto:${escape(lead.email)}" style="display:inline-block;padding:12px 22px;background:linear-gradient(180deg,#f5d77a,#d4af37);color:#0a0a0b;text-decoration:none;border-radius:999px;font-size:13px;font-weight:600;letter-spacing:0.04em;">
            Reply to ${escape(lead.name || lead.email)}
          </a>
          <p style="margin:18px 0 0 0;color:#5f5b6b;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;">
            Velvet Digital · velvetdigital.io
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function leadEmailText(lead: LeadPayload) {
  return [
    `NEW ENQUIRY · VELVET DIGITAL`,
    `Received: ${new Date(lead.submittedAt).toUTCString()}`,
    `Source:   ${lead.source}`,
    ``,
    `Name:     ${lead.name || "—"}`,
    `Email:    ${lead.email}`,
    `Company:  ${lead.company || "—"}`,
    `Budget:   ${lead.budget || "—"}`,
    `Services: ${lead.services.length ? lead.services.join(", ") : "—"}`,
    ``,
    `Message:`,
    lead.message,
  ].join("\n");
}
