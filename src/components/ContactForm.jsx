import { useState } from "react";

// Create a free form at https://formspree.io, then paste your form ID here.
// Dashboard -> your form -> "Integration" tab shows a URL like
// https://formspree.io/f/abcdwxyz — copy just the "abcdwxyz" part.
const FORMSPREE_ID = "YOUR_FORM_ID";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();

    if (FORMSPREE_ID === "YOUR_FORM_ID") {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-approved/30 bg-approved/10 p-6 text-sm">
        <p className="font-medium text-approved">Message sent.</p>
        <p className="mt-1 text-muted-foreground">
          We'll get back to you shortly — or call 0724 725 676 if it's urgent.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2.5 text-base focus:border-signal focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="contact" className="text-sm font-medium">
          Phone or email
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2.5 text-base focus:border-signal focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          What do you need?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="e.g. Looking for an eTIMS device for a new shop"
          className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2.5 text-base focus:border-signal focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Couldn't send that — call 0724 725 676 or email scottech02@gmail.com instead.
        </p>
      )}
    </form>
  );
}
