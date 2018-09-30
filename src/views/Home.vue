<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Modal
      v-if="modalVisibility"
      title="Delete repository"
      text="Are you sure that you are going to delete 'your-company/no-backups-repo'?"
      actionText="Delete"
      actionBgColor="#ff6161"
      actionColor="#fff"
      @action="action"
      cancelText="Cancel"
      cancelBgColor="#fbfbfb"
      cancelColor="#3e3d3d"
      @cancel="cancel"
      @close="modalVisibility = false"
    />
    <button @click="toggleModal">Toggle Modal</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Modal
  },
  data() {
    return {
      modalVisibility: false
    };
  },
  methods: {
    action(e) {
      console.log("---ACTION---");
      console.log(e);
      console.log("----ENDA----");
    },
    cancel(e) {
      console.log("---CANCEL---");
      console.log(e);
      console.log("----ENDC----");
    },
    toggleModal(e) {
      console.log("---TOGGLE---");
      console.log(e);
      this.modalVisibility = !this.modalVisibility;
      console.log("----ENDT----");
    },
    track () {
      this.$ga.page('/')
    },
  },
};
</script>
