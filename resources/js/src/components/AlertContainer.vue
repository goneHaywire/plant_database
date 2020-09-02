<template>
  <div class="alert-container">
    <transition-group name="alert" mode="out-in">
      <div
        class="alert"
        v-for="alert in alerts"
        :key="alert.id"
        :class="'alert-' + alert.type"
        role="alert"
      >
        {{ alert.message }}
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AlertContainer",
  computed: {
    ...mapGetters({
      alerts: "getAlerts",
    }),
  },
};
</script>

<style>
.alert-container {
  position: fixed;
  z-index: 20;
  width: 40%;
  top: 10px;
  padding: 0 10px;
  left: 60%;
  pointer-events: none;
  margin-bottom: 0;
}

.alert-enter-active {
  transition: all 0.5s ease-in-out;
}

.alert-leave-active {
  transition: all 0.5s cubic-bezier(1, -0.06, 0.98, 0.49);
}

.alert-leave-to,
.alert-enter {
  transform: translateX(200%);
}
</style>