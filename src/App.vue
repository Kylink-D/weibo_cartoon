<template>
  <div id="app">
    <keep-alive exclude="Search,Login,Register,More,detailspage">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
