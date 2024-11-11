<template>
    <div class="login-page">
        <div class="login-page__container">
            <div class="login-page__left">
            </div>
            <div class="login-page__right">
                <register v-if="!showLogin"></register>
                <login v-else></login>
                <div v-if="!showLogin" class="login-page__signin">
                    <a href="#" @click.prevent="goToLogin"> Already have an account ? sign in here </a>
                </div>
            </div>
        </div>
      
    </div>
  </template> 
  
  <script setup lang="ts">
  import Register from '../components/users/Register.vue';
  import Login from '../components/users/Login.vue';
import { ref } from 'vue';

  const showLogin = ref(false);
  const goToLogin = () => {
    showLogin.value = true;
  }

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
      padding: 25px;
      border: 1px solid var(--bs-gray-200);
      border-radius: 15px;
      background-color:  var(--bs-gray-100);
      margin-top: 25px;
      #{$self}__left {
        width: 25%;
        background-color: #fff;
        position: relative;
        margin-right: 2px;
        height: 100%;
        background-color: rgba(79,183,131,1);
        padding: 5px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
      }
      #{$self}__right  {
        width: 75%;
        background-color: #fff;
        position: relative;
        height: 100%;
        padding: 5px;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
      }
    }
   
  }
  </style>