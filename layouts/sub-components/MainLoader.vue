<template>
  <div class="loader-main">
    <span class="loader"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loader-main{
    height: 100vh;
    // background-color:#263038 ;
}
.loader {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%,-50%);
    width:  100px;
    height: 100px;
    background: #263038;
    transform: rotateX(65deg) rotate(45deg);
    // remove bellows command for perspective change
    //transform: perspective(200px) rotateX(65deg) rotate(45deg); 
    color: var(--tertiary-text-color);
    animation: layers1 1s linear infinite alternate;
  }
  .loader:after {
    content: '';
    position: absolute;
    inset: 0;
   
    background: #de3500;
    animation: layerTr 1s linear infinite alternate;
  }

  @keyframes layers1 {
    0% { box-shadow: 0px 0px 0 0px  }
   90% , 100% { box-shadow: 20px 20px 0 -4px  }
  }
  @keyframes layerTr {
    0% { transform:  translate(0, 0) scale(1) }
    100% {  transform: translate(-25px, -25px) scale(1) }
  }
      
</style>
