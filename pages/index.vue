<template>
  <div
    class="w-full h-100 bg-gray-700 flex justify-center items-center text-center mx-auto py-20"
  >
    <div class="w-5/6 h-100 bg-gray-500 rounded-3xl">
      <p class="my-4 font-sans font-bold text-3xl text-white">Pokedex</p>
      <div class="w-100 bg-gray-300 rounded-3xl rounded-t-none py-12">
        <div class="grid grid-cols-3">
          <div v-for="(item, i) in dados.results" :key="i">
            <div class="m-8">
              <CardPokemom
                :item="item"
                :urlPokemom="item.url"
                :codigoPokemom="i + 1"
              />
            </div>
          </div>
        </div>
        <button
          v-if="!loading"
          @click="quantidadeListados += 10"
          class="text-4xl text-gray-600 focus:outline-none"
        >
          Carregar mais
        </button>
        <div v-else class="flex justify-center">
          <img class="spinner" src="../assets/pokeball_gray.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import http from "../services/http.services";

@Component({})
export default class Home extends Vue {
  private dados = {};
  private quantidadeListados = 21;
  private loading = false;

  created() {
    http.get(`?limit=${this.quantidadeListados}`).then(res => {
      this.dados = res.data;
    });
  }

  @Watch("quantidadeListados")
  OnChangeWithoutGroup() {
    this.loading = true;
    http.get(`?limit=${this.quantidadeListados}`).then(res => {
      this.dados = res.data;
      this.loading = false;
    });
  }
}
</script>

<style scoped>
.spinner {
  animation: donut-spin 0.7s linear infinite;
}

@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
