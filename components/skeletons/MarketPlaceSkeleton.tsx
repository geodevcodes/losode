export default function MarketplaceSkeleton() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="border-b border-gray-200 pb-8">
          <div className="h-4 w-40 animate-pulse rounded bg-gray-200" />

          <div className="mt-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="h-10 w-64 animate-pulse rounded bg-gray-200" />
              <div className="mt-3 h-4 w-96 max-w-full animate-pulse rounded bg-gray-200" />
            </div>

            <div className="h-10 w-full animate-pulse rounded bg-gray-200 md:w-64" />
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                <div className="mt-4 h-10 w-full animate-pulse rounded bg-gray-200" />
              </div>

              <div>
                <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
                <div className="mt-6 h-3 w-full animate-pulse rounded bg-gray-200" />

                <div className="mt-4 flex justify-between">
                  <div className="h-4 w-10 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-12 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
            </div>
          </aside>

          <section>
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="h-4 w-40 animate-pulse rounded bg-gray-200" />
              <div className="h-10 w-full animate-pulse rounded bg-gray-200 sm:w-52" />
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="group block">
                  <div className="relative aspect-[3/4] animate-pulse overflow-hidden rounded-md bg-gray-200" />

                  <div className="mt-4">
                    <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
                    <div className="mt-2 h-4 w-full animate-pulse rounded bg-gray-200" />
                    <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-gray-200" />

                    <div className="mt-3 flex items-center justify-between">
                      <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                      <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
