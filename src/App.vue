<template>
  <div id="app">
    <keep-alive exclude="Search">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
