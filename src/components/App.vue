<template>
  <div class="container">
    <header>
      <nav class="background-black">
        <div class="logo bold-200"> API Documentation / TaskLab </div> 
      </nav>

      <div class="info">
        <Header />
      </div>
    </header>
    <div class="main grid-column">
      <div class="options column-3 flex-column scroll-y scroll-style">
        <div 
          class="flex-row padding-10 space-between"
          v-for="request in requestsData"
          :key="request.name"
        >
          <div :class="request.className"> {{ request.type }} </div>
          <button class="text-size-12 link" @click="setReq(request)"> {{ request.name }} </button>
        </div>
      </div>

      <div class="column-7 padding-20">
        <Content 
          v-bind:data="requestData"
          v-bind:dataJson="getReqJson(requestData)"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Content from './Content.vue'
  import Header from './Header.vue'

  import Post from '../js/components/Post.js'
  import Get from '../js/components/Get.js'
  import Put from '../js/components/Put.js'
  import Delete from '../js/components/Delete'

  export default {
    name: 'App',
    components: {
      Content,
      Header
    },
    data () {
      return {
        requests: [
          {
            name: 'Admin login',
            link: '/api/v1/login/admin',
            description: 'Autenticar administrador'
          }
        ],
        jsonData: require('../data/data.json'),
        requestsData: [],
        requestData: null
      }
    },
    methods: {
      setReq: function (req) {
        this.requestData = req
        return this.requestsData
      },
      getReqJson: function (req) {
        return this.jsonData.filter( data => data.name === req.name )[0]
      },
      createReq: function ( Req, type ) {
        let getJson = this.jsonData.filter( data => data.type === type )

        getJson.forEach(data => {
          let req = new Req( data.name, data.link, data.description )
          data.headers.forEach( header => req.setHeader(header[0], header[1]) )
          data.body.forEach( body => req.setBody(body[0], body[1]) )
          this.requestsData.push(req)
        })
      }
    },
    created () {
      this.requestData = new Post(this.jsonData[0].name, this.jsonData[0].link, this.jsonData[0].description)

      this.createReq(Post, 'POST')
      this.createReq(Get, 'GET')
      this.createReq(Put, 'PUT')
      this.createReq(Delete, 'DELETE')


    }
  }
</script>