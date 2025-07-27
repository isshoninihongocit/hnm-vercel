"use client";

export default function EventsSection() {
  const events = Array.from({ length: 23 }).map((_, i) => ({
    title: `Event ${i + 1}`,
    description: `Description for Event ${
      i + 1
    }. Workshops, cultural showcases, performances.`,
    date: `2025-08-${(i % 30) + 1}`,
  }));

  return (
    <section className="py-16 px-4 bg-white dark:bg-black text-center">
      <h2 className="text-4xl font-bold mb-8 text-black dark:text-white">
        Events & Workshops
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow hover:shadow-xl transition dark:bg-gray-900 dark:border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
            <p className="mb-2">{event.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {event.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
