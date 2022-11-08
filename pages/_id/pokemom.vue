<template>
  <div
    class="w-full h-100 bg-gray-700 flex justify-center items-center  mx-auto py-40"
  >
    <div class="w-5/6 h-100 bg-gray-500 rounded-3xl">
      <p class="my-4 font-sans font-bold text-3xl text-white text-center">
        {{ dadosPokemom.name }}
      </p>

      <div class="w-100 bg-gray-300 rounded-3xl rounded-t-none py-12 px-8">
        <div class="flex itens-center justify-between ">
          <div class="flex flex-col self-center">
            <img width="200px" :src="imagem" />
          </div>
          <div class=" flex flex-col self-center">
            <div class="mt-8" v-for="(item, i) in dadosPokemom.types" :key="i">
              <div class="flex align-center justify-center">
                <p class="mt-4 mr-2 font-sans font-bold text-2xl">
                  {{ TraducaoTipo(item.type.name) }}
                </p>

                <ImagemTipoPokemom
                  :tipo="item.type.name"
                  width="70px"
                  height="160px"
                />
              </div>
            </div>
          </div>

          <div
            class="grid grid-cols-2  flex flex-col self-center justify-center text-center"
          >
            <div
              class="mt-8 text-center"
              v-for="(item, i) in dadosPokemom.stats"
              :key="i"
            >
              <p class="font-sans font-bold text-2xl">
                {{ TraducaoAtributos(item.stat.name) }}
              </p>
              <p class="text-lg">{{ item.base_stat }}</p>
            </div>
          </div>
        </div>

        <div class=" flex justify-between mt-20">
          <div class="mt-14  flex-grow">
            <p class="font-sans font-bold text-2xl">Habilidades</p>
            <div v-for="(item, i) in dadosPokemom.abilities" :key="i">
              <p>{{ item.ability.name }}</p>
            </div>
          </div>
          <div class=" flex-grow">
            <p class="font-sans font-bold text-2xl">Experiencia Base</p>
            <p>{{ dadosPokemom.base_experience }}</p>
          </div>
        </div>

        <div class="mt-8">
          <p class=" font-sans font-bold text-2xl">Jogos</p>
          <div class="d-flex">
            <span v-for="(item, i) in dadosPokemom.game_indices" :key="i">
              {{ item.version.name
              }}{{ i != dadosPokemom.game_indices.length - 1 ? "," : "." }}
            </span>
          </div>
        </div>

        <div class="mt-8" v-if="dadosCidades.length != 0">
          <p class=" font-sans font-bold text-2xl">Cidades</p>
          <div>
            <span v-for="(item, i) in dadosCidades" :key="i"
              >{{ item.location_area.name
              }}{{ i != dadosCidades.length - 1 ? ", " : "." }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import http from "../../services/http.services";
import { traducaoTipos, traducaoAtributos } from "../../utils/utils";

@Component({})
export default class Pokemom extends Vue {
  private dadosPokemom = {};
  private dadosCidades = {};
  private loading = false;

  private imagem = "";

  private TraducaoTipo(value: any) {
    return traducaoTipos(value);
  }

  private TraducaoAtributos(value: any) {
    return traducaoAtributos(value);
  }

  created() {
    http.get(`${this.$route.params.id}`).then(res => {
      this.imagem = res.data.sprites.other["official-artwork"].front_default;
      this.dadosPokemom = res.data;
    });

    http.get(`${this.$route.params.id}/encounters`).then(res => {
      this.dadosCidades = res.data;
    });
  }
}
</script>
