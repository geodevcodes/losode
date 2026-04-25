export default function NewestSkeleton() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-8 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <div className="h-6 w-48 animate-pulse rounded bg-gray-200" />

          <div className="flex items-center gap-x-1">
            <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="group relative">
              <div className="aspect-square w-full animate-pulse overflow-hidden rounded-md bg-gray-200 lg:h-80" />

              <div className="mt-4 flex justify-between">
                <div>
                  <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                  <div className="mt-2 h-4 w-20 animate-pulse rounded bg-gray-200" />
                </div>

                <div className="h-4 w-12 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
