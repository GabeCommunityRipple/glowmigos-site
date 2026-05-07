import { Star } from "lucide-react";
import { brand } from "@/lib/brand";
import { reviews, type Review } from "@/lib/reviews";

export function ReviewsSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
            Our Reviews
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            What Castle Rock Homeowners Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center text-center">
          <p className="max-w-2xl text-sm text-slate-600">
            Glowmigos is a Nextdoor Neighborhood Favorite in The Village at Castle Pines and Ryder Cup at Plum Creek.
          </p>
          <a
            href={brand.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:border-slate-400 hover:bg-slate-50"
          >
            <GoogleG className="h-4 w-4" />
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      {review.source === "google" && (
        <span
          className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200"
          aria-label="Review from Google"
        >
          <GoogleG className="h-4 w-4" />
        </span>
      )}

      <div className="flex items-center gap-3 pr-8">
        <div
          className={`flex h-10 w-10 flex-none items-center justify-center rounded-full text-sm font-bold text-white ${
            review.avatarColor ?? "bg-slate-700"
          }`}
          aria-hidden="true"
        >
          {review.initial}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900">{review.name}</p>
          <p className="text-xs text-slate-500">{review.date}</p>
        </div>
      </div>

      <div className="mt-3 flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < review.rating
                ? "fill-amber-400 text-amber-400"
                : "fill-slate-200 text-slate-200"
            }`}
          />
        ))}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-700">{review.text}</p>
    </div>
  );
}

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC04"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}
