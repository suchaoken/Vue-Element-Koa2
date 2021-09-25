<template>
  <div>{{this.list}}</div>
</template>
<script>
import axios from "axios";
export default {
  data(){
      return{
          list:''
      }
  },
  created(){
      this.require()
  },  
  methods: {
    async require() {
      const data = await axios.get("/user");
      this.list=data.data
    },
  },
};
</script>