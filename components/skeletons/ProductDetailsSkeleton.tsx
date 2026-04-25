export default function ProductDetailsSkeleton() {
  return (
    <div className="bg-white mb-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-24 w-24 animate-pulse rounded-lg bg-gray-200 lg:h-28 lg:w-full"
                />
              ))}
            </div>

            <div className="h-[420px] animate-pulse rounded-lg bg-gray-200 lg:col-span-4" />
          </div>

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <div className="mb-3 h-4 w-24 animate-pulse rounded bg-gray-200" />
              <div className="h-8 w-3/4 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <div className="h-10 w-20 animate-pulse rounded-full bg-gray-200" />
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <div className="h-8 w-24 animate-pulse rounded bg-gray-200" />
                <div className="h-5 w-20 animate-pulse rounded bg-gray-200" />
              </div>

              <div className="mt-2 h-4 w-40 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="mb-6 flex items-center gap-2">
              <div className="h-6 w-6 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="flex gap-2.5">
              <div className="h-11 w-32 animate-pulse rounded-md bg-gray-200" />
              <div className="h-11 w-32 animate-pulse rounded-md bg-gray-200" />
            </div>

            <div className="mt-12 space-y-3">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-11/12 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
