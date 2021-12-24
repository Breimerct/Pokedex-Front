import { httpClient } from "../../plugins/axios";
import EventBus from "../../helpers/eventBus";

export async function fetchPokedex(context, payload) {
  try {
    EventBus.$emit("showOrHideLoading", { show: true });
    const { data } = await httpClient.get("/pokedex", {
      params: {
        region: !payload.region ? "national" : payload.region,
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
  } catch (e) {
    console.log("Error! ", e);
  } finally {
    EventBus.$emit("showOrHideLoading", { show: false });
  }
}

export async function fetchPokemonVarieties(context, payload) {
  try {
    EventBus.$emit("showOrHideLoading", { show: true });
    const { data } = await httpClient.get("/pokemon-detail/varieties", {
      params: {
        pokemonName: payload.name,
      },
    });
    context.commit("setPokemonVarieties", data.Pokemon.varieties);
  } catch (e) {
    console.log("Error! ", e);
  } finally {
    EventBus.$emit("showOrHideLoading", { show: false });
  }
}

export async function fetchPokemonStats(context, payload) {
  try {
    EventBus.$emit("showOrHideLoading", { show: true });
    const { data } = await httpClient.get("/pokemon-detail/stats", {
      params: {
        pokeUrl: payload.url,
      },
    });
    context.commit("setPokemonStats", data.pokemon.stats);
  } catch (e) {
    console.log("Error! ", e);
  } finally {
    EventBus.$emit("showOrHideLoading", { show: false });
  }
}

export async function fetchPokemonEvolutions(context, payload) {
  try {
    EventBus.$emit("showOrHideLoading", { show: true });
    const { data } = await httpClient.get("/pokemon-detail/evolutions", {
      params: {
        pokemonName: payload.name,
      },
    });
    context.commit("setPokemonEvolutions", data.evolutions);
  } catch (e) {
    console.log("Error! ", e);
  } finally {
    EventBus.$emit("showOrHideLoading", { show: false });
  }
}

export async function fetchRegions(context) {
  try {
    EventBus.$emit("showOrHideLoading", { show: true });
    const { data } = await httpClient.get("/filters/regions");
    context.commit("setRegions", []);
    context.commit("setRegions", ["all", ...data.regions]);
  } catch (e) {
    console.log("Error! ", e);
  } finally {
    EventBus.$emit("showOrHideLoading", { show: false });
  }
}

export async function fetchPokedexes(context, payload) {
  try {
    EventBus.$emit("showOrHideLoading", { show: true });
    const { data } = await httpClient.get("/filters/pokedexes", {
      params: {
        region: payload.region,
      },
    });
    context.commit("setPokedexes", []);
    context.commit("setPokedexes", data.pokedexes);
  } catch (e) {
    console.log("Error! ", e);
  } finally {
    EventBus.$emit("showOrHideLoading", { show: false });
  }
}
