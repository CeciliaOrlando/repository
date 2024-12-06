import {RestaurantsGrid} from "@/components/RestaurantsGrid";

import {getRestaurants} from "./actions.js"
export default async function Home() {
  const restaurants = await getRestaurants();

  console.log(restaurants)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Welcome to my Restaurants- App with Next.js</h1>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            </div>
        ))}

        {/* <RestaurantsGrid restaurants={restaurants} /> */}

      </main>
    </div>
  );
}
