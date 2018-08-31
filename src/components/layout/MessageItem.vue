<template>
  <li>
    <a href="javascript:;">
      <h4>
        <span>{{message.title}}</span>
        <small>
          <i class="fa fa-clock-o"></i>
          <span>{{message.createdAt}}</span>
        </small>
      </h4>
      <p>{{message.body}}</p>
    </a>
  </li>
</template>

<script>
export default {
  name: 'MessageItem',
  props: ['message']
}
</script>

<style scoped>
.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a > h4,
.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a > p {
  margin-left: 0;
}
</style>
