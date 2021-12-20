import { httpClient } from "../../plugins/axios";
import EventBus from "../../helpers/eventBus";

export async function fetchPokedex(context, payload) {
  try {
    EventBus.$emit("showOrHideLoading", { show: true });
    const { data } = await httpClient.get("/pokedex", {
      params: {
        region: "national",
        page: !payload ? 1 : payload.page,
      },
    });
    context.commit("setPokedex", data.pokemons.data);
    context.commit("setTotalPokemons", data.pokemons.totalPokemons);
  } catch (e) {
    console.log("Error! ", e);
  } finally {
    EventBus.$emit("showOrHideLoading", { show: false });
  }
}

export async function fetchPokemonsName(context) {
  try {
    EventBus.$emit("showOrHideLoading", { show: true });
    const { data } = await httpClient.get("/pokemons");
    context.commit("setPokemonsName", data);
  } catch (e) {
    console.log("Error! ", e);
  } finally {
    EventBus.$emit("showOrHideLoading", { show: false });
  }
}

export async function fetchPokemonAbout(context, payload) {
  try {
    EventBus.$emit("showOrHideLoading", { show: true });
    const { data } = await httpClient.get("/pokemon-detail/about", {
      params: {
        pokemonName: payload.name,
      },
    });
    context.commit("setPokemonAbout", data.about);
    console.log(data.about);
  } catch (e) {
    console.log("Error! ", e);
  } finally {
    EventBus.$emit("showOrHideLoading", { show: false });
  }
}
