import { notFound } from "next/navigation";

// Catch-all for URLs under a valid locale that match no real route, so
// visitors get the localized 404 page instead of the framework default.
export default function CatchAllNotFound() {
  notFound();
}
