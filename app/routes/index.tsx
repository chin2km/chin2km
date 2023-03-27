import type { V2_MetaFunction } from "@remix-run/cloudflare";

export const meta: V2_MetaFunction = () => [{ title: "Home Sweet Home" }];

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
            </div>
            <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
              <div className="mt-6 flex flex-wrap justify-center gap-8">
                {[
                  {
                    src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
                    alt: "Prettier",
                  },
                ].map((img) => (
                  <img
                    key={1}
                    alt={img.alt}
                    src={img.src}
                    className="flex justify-center object-contain p-1 grayscale transition hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
