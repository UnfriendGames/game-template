<template>
  <div class="w-36 h-52 rounded-xl relative">
    <span class="absolute left-4 top-4 text-3xl font-bold">U</span>
    <div class="flex justify-center items-center">
      <div class="lds-ellipsis w-full m-auto">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <span
      class="absolute bottom-4 right-4 text-3xl font-bold transform rotate-180"
      >U</span
    >
  </div>
</template>
<style scoped>
.lds-ellipsis {
  display: inline-block;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  margin-left: 2px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>