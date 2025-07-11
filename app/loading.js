export default function HomeLoadingSkeleton() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <section className="min-h-[80vh] flex items-center justify-center px-6 text-center bg-white">
        <div className="max-w-3xl w-full animate-pulse space-y-4">
          <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto" />
          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto" />
          <div className="h-10 bg-gray-300 w-40 mx-auto rounded-full" />
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="h-8 bg-gray-300 w-1/2 mx-auto mb-10 rounded" />
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="p-6 bg-white shadow rounded-xl animate-pulse space-y-3"
              >
                <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto" />
                <div className="h-4 bg-gray-200 rounded w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 px-6 text-center animate-pulse">
        <div className="space-y-4 max-w-xl mx-auto">
          <div className="h-6 bg-gray-700 rounded w-2/3 mx-auto" />
          <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto" />
          <div className="h-10 bg-gray-600 rounded-full w-40 mx-auto" />
        </div>
      </section>
    </div>
  );
}
