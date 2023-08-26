<template>
  <div>
    <p>{{ item.value }}</p>
  </div>
</template>

<script>
export default {
    props: ['item'],
    // setup() {
    //     let content = this.props.item;
    //     return { content };
    // },
}
</script>

<style>

</style>