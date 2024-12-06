`use server`;

export async function getRestaurants() {
  try {
    const response = await fetch(process.env.API_URL);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
