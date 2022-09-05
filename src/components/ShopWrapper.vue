<template>
  <div class="container">
    <nav class="container__navig">
      <a @click="toggleClassm" :class="isActive.men ? 'container__navig_item_active' : 'container__navig_item'" href="#men">Men</a>
      <a @click="toggleClassw" :class="isActive.women ? 'container__navig_item_active' : 'container__navig_item'" href="#women">Women</a>
      <a @click="toggleClassb" :class="isActive.theBox ? 'container__navig_item_active' : 'container__navig_item'" href="#theBox">The Box</a>
    </nav>
    <div class="container__catalog">
    <items-wrapper id="men" :title="titles.men" :items="filteredMen"/>
    <items-wrapper id="women" :title="titles.women" :items="filteredWomen"/>
    <items-wrapper id="theBox" :title="titles.theBox" :items="filteredBox"/>
    </div>
    </div>

</template>

<script>
import ItemsWrapper from "@/components/ItemsWrapper";

export default {
  name: "Shop-wrapper",
  components: {
    ItemsWrapper,
  },

  data(){
    return{
      isActive: {
        men: true,
        women: false,
        theBox: false,
      },
      titles: {
        men: 'Men',
        women: 'Women',
        theBox:'The Box',
      },

      asssortment:[
            {
              id: Date.now().toString(),
              title: 'men',
              images: {
                imageDef: require('@/assets/img1.png'),
                withMen: require('@/assets/img1.png'),
                withoutMen: require('@/assets/img2.png'),
                front: '',
                side: '',
                back: '',
                full: '',
              },
              name: 'DA T-shirt',
              description: 'Fabric: Fine-staple 100% cotton with a tight weave of 180 g/m², which makes the surface of the fabric more even and smooth.',
              characteristics: [],
              size: 'L',
              price: '0,1 ETH',
              inbox: true,
              care: [],
              sizeChart:[
                {
                  sizeTable: {
                  }
                }
                ]},
              {
                  id: Date.now().toString(),
                  title: 'men',
                  images: {
                    imageDef: require('@/assets/img2.png'),
                    withMen: require('@/assets/img2.png'),
                    withoutMen: require('@/assets/img2.png'),
                    front: '',
                    side: '',
                    back: '',
                    full: '',
                  },
                  name: 'DA T-shirt',
                  description: 'Fabric: Fine-staple 100% cotton with a tight weave of 180 g/m², which makes the surface of the fabric more even and smooth.',
                  characteristics: [],
                  size: 'L',
                  price: '0,1 ETH',
                  care: [],
                  inbox: false,
                  sizeChart:[
                    {
                      sizeTable: {
                      }
                    }
                    ]
              },
                    {
                      id: Date.now().toString(),
                      title: "women",
                      images: {
                        imageDef: require('@/assets/w2.png'),
                        withMen: require('@/assets/w2.png'),
                        withoutMen: require('@/assets/img2.png'),
                        front: '',
                        side: '',
                        back: '',
                        full: '',
                      },
                      name: 'DA T-shirt',
                      description: 'Fabric: Fine-staple 100% cotton with a tight weave of 180 g/m², which makes the surface of the fabric more even and smooth.',
                      characteristics: [],
                      size: 'L',
                      price: '0,1 ETH',
                      care: [],
                      inbox: true,
                      sizeChart:[
                        {
                          sizeTable: {
                          }
                        },
              ],

            },
        {
          id: Date.now().toString(),
          title: 'women',
          images: {
            imageDef: require('@/assets/w3.png'),
            withMen: require('@/assets/w3.png'),
            withoutMen: '',
            front: '',
            side: '',
            back: '',
            full: '',
          },
          name: 'DA T-shirt',
          description: 'Fabric: Fine-staple 100% cotton with a tight weave of 180 g/m², which makes the surface of the fabric more even and smooth.',
          characteristics: [],
          size: 'L',
          price: '0,1 ETH',
          care: [],
          inbox: true,
          sizeChart: [
            {
              sizeTable: {}
            }

          ],
        },
        {
              id: Date.now().toString(),
              title: 'women',
              images: {
                imageDef: require('@/assets/w3.png'),
                withMen:require('@/assets/w4.png'),
                withoutMen: '',
                front: '',
                side: '',
                back: '',
                full: '',
              },
              name: 'DA T-shirt',
              description: 'Fabric: Fine-staple 100% cotton with a tight weave of 180 g/m², which makes the surface of the fabric more even and smooth.',
              characteristics: [],
              size: 'L',
              price: '0,1 ETH',
              care: [],
              inbox: false,
              sizeChart:[
                {
                  sizeTable: {
                  }
                }

              ],

            },
        {
          id: Date.now().toString(),
          title: 'The box',
          images: {
            withMen:require('@/assets/b1.png'),
            imageDef: require('@/assets/w3.png'),
            withoutMen: '',
            front: '',
            side: '',
            back: '',
            full: '',
          },
          name: 'DA T-shirt',
          description: 'Fabric: Fine-staple 100% cotton with a tight weave of 180 g/m², which makes the surface of the fabric more even and smooth.',
          characteristics: [],
          size: 'L',
          price: '0,1 ETH',
          care: [],
          inbox: true,
          sizeChart:[
            {
              sizeTable: {
              }
            }

          ],

        },
          ],
        }
  },
  methods:{
    toggleClassm(){
      this.isActive.men = true;
      this.isActive.women = false;
      this.isActive.theBox = false;
    },

    toggleClassw(){
      this.isActive.men = false;
      this.isActive.women = true;
      this.isActive.theBox = false;
    },

    toggleClassb(){
      this.isActive.men = false;
      this.isActive.women = false;
      this.isActive.theBox = true;
    },
  },
  computed:{
    filteredMen(){
      return this.asssortment.filter(prof => prof.title === 'men');
    },
    filteredWomen(){
      return this.asssortment.filter(prof => prof.title === 'women');
    },
    filteredBox(){
      return this.asssortment.filter(prof => prof.inbox === true);
    }

  }

}


</script>

<style lang="scss" scoped>
  .container{
    width: 100%;
    padding: 0 7%;

    &__navig{
      padding-top: 5em;
      width: 15%;
      display: flex;
      flex-direction: column;
      gap: 40px;
      position: fixed;
      @media (max-width: 767px) {
        width: 100vw;
        position: sticky;
        top:50px;
        flex-direction: row;
        padding-top: 0;

        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(50px);
        z-index: 2;
      }


      &_item{
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        font-size: calc(12px + 13 * (100vw / 1920));

        color: #888888;

        @media (max-width: 767px) {

          position: sticky;
          top:0;
        }

        &_active{
          color: white;
          text-decoration: underline;
          text-decoration-color: #C2E900;
          font-family: 'Helvetica Neue';
          font-style: normal;
          font-weight: 400;
          font-size: calc(12px + 13 * (100vw / 1920));
          line-height: 30px;

          @media (max-width: 767px) {
            position: sticky;
            top: 0;
          }
        }
      }

     }

    &__catalog{
        padding-left: 15em;

      @media (max-width: 767px) {
        position: sticky;
        top: 0;
        padding-left: 0;
        padding-top: 1em;
      }
    }
  }
</style>