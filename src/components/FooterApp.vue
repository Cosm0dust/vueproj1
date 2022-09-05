<template>
  <footer class="footer">
    <div class="footer__social">
      <div  :key="idx" class="img-box" v-for="(item, idx) in socials">
        <img :src="item">
      </div>
    </div>
    <div class="footer__terms">
      <div :key="idx" v-for="(item, idx) in links">
        <a :href="item.path">{{item.term}}</a>
      </div>
    </div>

    <h3>2021 Digital animals</h3>
  </footer>
</template>

<script>
export default {
  name: "FooterApp",
  data(){
    return{
      socials:[require('@/assets/footer1.png'), require('@/assets/footer2.png'), require('@/assets/footer3.png'), ],
      links:[
        {
          term: 'Soul',
          path: '/'
        },
        {
          term: 'Atributes',
          path: '/'
        },
        {
          term: 'Game',
          path: '/'
        },
        {
          term: 'Team',
          path: '/'
        },
        {
          term: 'Roadmap',
          path: '/'
        },
        {
          term: 'Mint(soon)',
          path: '/'
        },
        {
          term: 'Terms and Conditions',
          path: '/'
        },
        {
          term: 'Smart contact',
          path: '/'
        },
        {
          term: 'Open Sea',
          path: '/'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer{
  width: 100%;
  padding: 7%;
  position: relative;




  &__social{
    display: flex;
    padding-left: 15%;
    gap: 3em;
    align-items: center;
    &::after{
      content: '';
      top: 5%;
      left: 14%;
      position: absolute;
      display: block;
      width: 76%;
      height: 1px;
      background: white;
      z-index: 10;
    }

  }

  &__terms{
    display: grid;
    padding-left: 15%;
    padding-top: 3em;
    grid-template: 1fr/ 1fr 1fr 1fr;

    @media (max-width: 767px) {
      grid-template: 1fr/ 1fr 1fr;
    }
    & > *{
      padding-top: 1em;
    }

    & a{

      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 500;
      font-size: calc(12px + 2 * (100vw / 1920));
      line-height: 17px;

      color: #CECECE;
    }

  }
}

h3{
  color: #888888;
  padding-top: 3em;
  padding-left: 15%;

  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: calc(12px + 2 * (100vw / 1920));
  line-height: 17px;
  /* identical to box height */

  color: #D8D8D8;
}
</style>