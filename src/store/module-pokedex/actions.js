import { httpClient } from "../../plugins/axios";

export async function fetchPokedex(context, payload) {
  try {
    const { data } = await httpClient.get("/pokedex", {
      params: {
        region: "national",
        page: !payload ? 1 : payload.page,
      },
    });
    context.commit("setPokedex", data.pokemons.data);
  } catch (e) {
    console.log("error", e);
  }
}
