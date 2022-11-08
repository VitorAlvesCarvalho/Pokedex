<template>
  <img
    :width="width"
    :height="height"
    :src="require(`../assets/tiposPokemom/${tipo}.png`)"
  />
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({})
export default class ModalInfoPokemom extends Vue {
  @Prop({ required: true }) public tipo!: boolean;
  @Prop({ required: true }) public height!: boolean;
  @Prop({ required: true }) public width!: boolean;
}
</script>
