<template>
  <div
    v-if="state.isActive"
    class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-1"
    @click.stop
  >
    <div class="fixed mx-10 w-3/4" @click.stop>
      <div
        class="flex flex-col overflow-hidden bg-white rounded-lg animate__animated animate__fadeInDown animate__faster"
      >
        <component :is="state.component" :pokemon="state.props" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import useModal from "../../utils/useModal";

@Component({})
export default class Modal extends Vue {
  private modal = "ModalInfoPokemom";

  private UseModal = useModal();
  private state = {
    isActive: false,
    component: {},
    props: {}
  };

  private created() {
    this.UseModal.listen(this.handleModalToogle);
  }

  private destroyed() {
    this.UseModal.off(this.handleModalToogle);
  }

  private handleModalToogle(payload: any) {
    if (payload.status) {
      this.state.component = payload.component;
      this.state.props = payload.props;
    } else {
      this.state.component = {};
      this.state.props = {};
    }

    this.state.isActive = payload.status;
  }

  private closeModal() {
    this.UseModal.close({});
  }
}
</script>
