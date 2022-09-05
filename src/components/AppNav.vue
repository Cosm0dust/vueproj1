<template>
  <div class="head">
    <div class="head__title">
    <div class="head__title_icon-wrap">
      <img src="@/assets/icon.png" alt="">
    </div>
    <h1>Digital Animals</h1>
    </div>
     <div class="head__links">
       <router-link class="head__links_link"  to="/">Reapers</router-link>
       <router-link class="head__links_link" to="/">Soul</router-link>
       <router-link class="head__links_link" to="/">Game</router-link>
       <router-link class="head__links_link" to="/">Team</router-link>
       <router-link class="head__links_link" to="/">Roadmap</router-link>
       <router-link class="head__links_link" to="/shop">Shop</router-link>
       <router-link class="head__links_link" to="/">Join Discord</router-link>
       <router-link class="head__links_link" to="/">OpenSea</router-link>
     </div>
       <router-link class="account" to="/">Account</router-link>
   </div>
</template>

<script>
export default {
  name: "AppNav"
}
</script>

<style lang="scss" scoped>

.head{
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  padding: 0 7%;
  flex-wrap: nowrap;
  justify-content: space-between;


  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(50px);
  z-index: 2;

  @media (max-width: 767px) {
    width: 100vw;
    position: sticky;
    top:0;
  }

  &__title{
    display: flex;
    @media (max-width: 767px) {
      align-items: center;
      gap: 10px;
      width: 100%;
    }

    &_icon-wrap{
      display: none;

      @media (max-width: 767px) {
        display: block;
      }
    }

    & h1{
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 700;
      font-size: calc(15px + 15 * (100vw / 1920)) ;
      line-height: 37px;
      color: #FFFFFF;
    }

  }


  &__links{
    display: flex;
    width: 70%;
    text-align: center;

    @media (max-width: 767px) {
      display: none;
    }

    &_link{
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;


      letter-spacing: 1px;

      color: #EEEEEE;

      padding: 0px 5px;
      flex: 1 1 100%;
    }
  }


  & .account{
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 700;
    font-size: calc(15px + 15 * (100vw / 1920)) ;
    line-height: 37px;
    width: 10%;
    color: #FFFFFF;
    padding-right: 5%;

  }
}
router-link{
  color: blue;
}

.active-link{
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  letter-spacing: 1px;

  /* green */

  color: #C2E900;
  text-align: center;
}


</style>