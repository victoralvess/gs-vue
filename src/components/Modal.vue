<template>
  <transition name="modal-transition">
    <div class="modal-mask" @click="cancel">
      <div id="modal-wrapper">
        <div id="modal">
          <h1 id="title">{{title}}</h1>
          <p id="text">{{text}}</p>
          <button @click="cancel" :style="cancelButtonStyle">{{cancelText}}</button>
          <button @click="action" :style="actionButtonStyle">{{actionText}}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="css" scoped>
  .modal-mask {
    display: table;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  #modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  #modal {
    display: flow-root;

    max-width: 700px;
    margin: 0 auto;

    background: #fff;

    border-radius: 2px;

    transition: all .3s ease;
  }

  button {
    border: none;
    border-radius: 2px;
    
    padding: 18px 22px;
    margin: 2em;

    text-transform: uppercase;
    font-weight: 700;
  }

  .modal-transition-enter,
  .modal-transition-leave-active {
    opacity: 0;
  }

  .modal-transition-enter #modal,
  .modal-transition-leave-active #modal {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>

<script>
export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    actionText: {
      type: String,
      required: true,
    },
    actionBgColor: {
      type: String,
      required: true,
      default: '#111',
    },
    actionColor: {
      type: String,
      required: true,
      default: '#eee',
    },
    cancelText: {
      type: String,
      required: true,
    },
    cancelBgColor: {
      type: String,
      required: true,
      default: '#111',
    },
    cancelColor: {
      type: String,
      required: true,
      default: '#fff',
    },
  },
  methods: {
    cancel(e) {
      this.$emit('cancel', e);
      this.$emit('close');
    },
    action(e) {
      this.$emit('action', e);
      this.$emit('close');
    },
  },
  computed: {
    cancelButtonStyle() {
      return {
        color: this.cancelColor,
        backgroundColor: this.cancelBgColor,
      };
    },
    actionButtonStyle() {
      return {
        color: this.actionColor,
        backgroundColor: this.actionBgColor,
      };
    },
  }
};
</script>

