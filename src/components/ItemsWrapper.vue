<template>
  <div class="item-wrapper">
    <h1>{{title}}</h1>
    <div class="img-box-wrapper">
    <div  :key="idx" class="img-box" v-for="(item, idx) in items">
        <img :src="item.images.imageDef"
              v-on:mouseover="item.images.imageDef = item.images.withoutMen"
              v-on:mouseleave="item.images.imageDef = item.images.withMen "></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemsWrapper",
  props: {
    title:{
      type: String,
      requied: true,
    },
    items: {
      type: Array,
      requied: true,
    }
  }
}
</script>

<style lang = "scss" scoped>
.item-wrapper{
  padding-bottom: 4em;
}

h1{
  color: #FFFFFF;
  padding: 1em 0;
  @media (max-width: 767px) {
    display: none;
  }
}

.img-box-wrapper{
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  @media (max-width: 767px) {
   gap: 11px;
  }
}

.img-box{


  padding: 0 0 58% 30%;
  position: relative;
  overflow: hidden;

  @media (max-width: 767px) {
    width: 168px;
    height: 250px;
    padding: 0;

  }

  & img{
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    top:0;
    left: 0;
  }
}
</style>