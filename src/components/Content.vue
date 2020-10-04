<template>
  <div :class="classNameContent">
    <div class="section flex-row">

      <div class="flex-row margin-right-max"> 
        <div :class="className"> {{ data.type }} </div>
        <div> {{ data.name }} </div> 
      </div>

      <div class="target background-rgba">
        {{ data.link }}
      </div>

    </div>

    <div class="section">
      <div class="text">
        {{ data.description }}
      </div>
    </div>

    <div class="section">
      <div class="medium-title padding-bottom-10">Headers</div>
      <div class="padding-10 background-rgba border-radius-5 scroll-x scroll-style">
        <TargetTable 
          v-bind:data="data.headers"
        />
      </div>
    </div>

    <div class="section">
      <div class="medium-title padding-bottom-10">Body</div>
      <div class="padding-10 background-rgba border-radius-5">
        <TargetTable 
          v-bind:data="data.body"
        />
      </div>
    </div>

    <div class="section">
      <div class="medium-title padding-bottom-10">Response</div>
      <TargetJSON 
        v-bind:json="json"
      />
    </div>
  </div>
</template>

<script>
  import TargetTable from '../implements/TargetTable.vue'
  import TargetJSON from '../implements/TargetJSON.vue'
  export default {
    name: 'Content',
    props: {
      data: {
        type: Object,
        default: {}
      },
      dataJson: {
        type: Object,
        default: null
      }
    },
    components: {
      TargetTable,
      TargetJSON
    },
    data () {
      return {
        headers: null,
        body: null  
      }
    },
    computed: {
      className: function () {
        return `${this.data.className} text-size-15 margin-right`
      },
      json: function () {
        return this.data.json(this.dataJson.json)
      },
      classNameContent: function () {
        return `${this.data.classNameBackground} content scroll-y scroll-style`
      }
    },
    created () {
      
      this.dataJson.body.forEach( body => {
        this.data.setBody(body[0], body[1])
      })

      this.dataJson.headers.forEach( header => {
        this.data.setHeader(header[0], header[1])
      })

      this.headers = this.data.headers;
      this.body = this.data.body;
    }
  }
</script>