<template>
  <div class="modal show fade" id="registerModel" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          
          <h4 class="modal-title" >
            注册
          </h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            &times;
          </button>
        </div>
        <div class="modal-body">
          <form class="form-signin">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
            <label for="inputPassword1" class="sr-only">Password</label>
            <input type="password" id="inputPassword1" class="form-control" placeholder="Password" required="">
            
            <button type="button" class="btn btn-link">已有账号</button>
            <button class="btn btn-block btn-primary" type="submit">注册</button>
          </form>
        </div>
        <div class="modal-footer">

        </div>
        

      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    
  }
</script>
