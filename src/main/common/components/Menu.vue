<template>
<div id="menu">
  <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
            aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Eva Cloud</a>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">首页 <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" @click="test">解决方案</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">关于</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">开发文档</a>
            </li>
        </ul>
        <button class="btn btn-outline-success" style="margin: 0.1rem;" type="button" onclick="window.location='./signin.html'">登录</button>

        <button class="btn btn-outline-info" style="margin: 0.1rem" type="button" onclick="window.location='./signup.html'">立即注册</button>
    </div>
</nav>
</div>
</template>

<script type="text/javascript">
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: mapActions([
    'test',
  ]),
}
</script>

<style>
</style>