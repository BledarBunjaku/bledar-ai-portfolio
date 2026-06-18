"use client";

import { FormEvent, useState } from "react";

export function MatchClient() {
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!jobDescription.trim() || isLoading) return;

    setError("");
    setResult("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Could not analyze this job description.");
      setResult(payload.result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected match analyzer error.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <label htmlFor="job-description" className="text-sm font-semibold text-slate-950">
          Job description
        </label>
        <textarea
          id="job-description"
          value={jobDescription}
          onChange={(event) => setJobDescription(event.target.value)}
          placeholder="Paste the role requirements, stack and responsibilities..."
          className="mt-3 min-h-[360px] w-full rounded-md border border-slate-300 p-3 text-sm leading-6 outline-none ring-[#1E3A8A] focus:ring-2"
        />
        <button
          type="submit"
          disabled={isLoading || !jobDescription.trim()}
          className="mt-4 min-h-11 rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Analyzing" : "Analyze match"}
        </button>
      </form>
      <section className="rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-6">
        <h2 className="text-lg font-semibold text-slate-950">Result</h2>
        {error && <p className="mt-4 rounded-md border border-red-100 bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        {result ? (
          <div className="prose prose-slate mt-4 max-w-none whitespace-pre-wrap text-sm leading-6 text-slate-700">{result}</div>
        ) : (
          <p className="mt-4 text-sm leading-6 text-slate-600">
            The analyzer will return a score, strong matches, partial matches, missing areas, relevant projects and a short application message.
          </p>
        )}
      </section>
    </div>
  );
}
