<template>
  <div class="flex flex-col px-12 py-10 bg-white">
    <div class="flex justify-between" id="modal-create-account">
      <h1 class="text-4xl font-black text-gray-800">
        {{ pokemon.name }}
      </h1>

      <button
        @click="closeModal"
        class="text-4xl text-gray-600 focus:outline-none"
      >
        &times;
      </button>
    </div>

    <div class=" flex flex-col self-center">
      <div class="mt-8" v-for="(item, i) in pokemon.types" :key="i">
        <div class="flex align-center justify-center">
          <p class="mt-4 mr-2 font-sans font-bold text-2xl">
            {{ TraducaoTipos(item.type.name) }}
          </p>

          <ImagemTipoPokemom
            :tipo="item.type.name"
            width="70px"
            height="160px"
          />
        </div>
      </div>
    </div>

    <div class="mt-8">
      <p class=" font-sans font-bold text-2xl">Jogos</p>
      <div class="d-flex">
        <span v-for="(item, i) in pokemon.game_indices" :key="i">
          {{ item.version.name
          }}{{ i != pokemon.game_indices.length - 1 ? "," : "." }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import http from "../../services/http.services";
import { traducaoTipos } from "../../utils/utils";
import useModal from "../../utils/useModal";

@Component({})
export default class ModalInfoPokemom extends Vue {
  @Prop({ required: true }) public pokemon!: boolean;

  private modal = useModal();

  private TraducaoTipos(value: any) {
    return traducaoTipos(value);
  }

  private closeModal() {
    this.modal.close({});
  }
}
</script>
