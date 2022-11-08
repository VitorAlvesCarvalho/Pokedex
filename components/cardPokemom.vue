<template>
  <div class="bg-white w-100 rounded-3xl cursor-pointer" @click="viewPokemom">
    <div v-if="loading">
      <loader
        class="flex flex-col items-center rounded"
        width="100%"
        height="360px"
        animation-duration="1.5s"
      >
      </loader>
    </div>
    <div v-else class="p-6">
      <div class="flex items-center justify-center">
        <p class="font-sans font-bold text-3xl mb-2 mr-2">
          {{ item.name[0].toUpperCase() + item.name.substr(1) }}
        </p>
        <svg
          @click.stop="handleLogin"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="#DBE1EC"
          viewBox="0 0 48 48"
        >
          <path
            d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
          />
        </svg>
      </div>
      <img :src="imagem" />
    </div>
    <Modal />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import http from "../services/http.services";
import useModal from "../utils/useModal";

@Component({})
export default class CardPokemom extends Vue {
  @Prop({ required: true }) public item!: boolean;
  @Prop({ required: true }) public urlPokemom!: boolean;
  @Prop({ required: true }) public codigoPokemom!: boolean;

  private imagem = "";
  private isOpenModal = false;
  private dados = {};
  private loading = false;
  private modal = useModal();

  viewPokemom() {
    this.$router.push(`/${this.codigoPokemom}/pokemom`);
  }

  handleLogin() {
    this.modal.open({
      component: "ModalInfoPokemom",
      props: this.dados
    });
  }

  created() {
    this.loading = true;
    http.get(`${this.urlPokemom}`).then(res => {
      this.dados = res.data;
      this.imagem = res.data.sprites.other["official-artwork"].front_default;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  }
}
</script>
