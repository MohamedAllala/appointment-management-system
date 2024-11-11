<template>
    <div class="login-page">
        <div class="login-page__container">
            <div class="login-page__left">
            </div>
            <div class="login-page__right">
                <register></register>
            </div>
        </div>
      
    </div>
  </template> 
  
  <script setup lang="ts">
  import Register from '../components/users/Register.vue';    
  </script>    
  
  <style lang="scss">
  .login-page {
    display: flex;
    padding: 20px;
    height: 90vh;
    $self: &;
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 100%;
      padding-left: 35px;
      padding-right: 35px;
      #{$self}__left {
        width: 25%;
        background-color: #fff;
        position: relative;
        margin-right: 2px;
        height: 70vh;
        background-color: rgba(79,183,131,1);
        padding: 5px;
      }
      #{$self}__right  {
        width: 75%;
        background-color: #fff;
        position: relative;
        height: 70vh;
        padding: 5px;
      }
    }
   
  }
  </style>