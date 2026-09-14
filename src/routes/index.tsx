import { createFileRoute } from "@tanstack/react-router";
import { AlAnjumSite } from "@/components/al-anjum-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Accounting & Bookkeeping UAE | AL ANJUM" },
      { name: "description", content: "UAE accounting, bookkeeping, VAT, corporate tax and CFO support for ambitious businesses. Book a free consultation with AL ANJUM." },
      { property: "og:title", content: "Accounting & Bookkeeping UAE | AL ANJUM" },
      { property: "og:description", content: "Clear books, confident compliance and practical financial guidance for UAE businesses." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <AlAnjumSite />;
}
