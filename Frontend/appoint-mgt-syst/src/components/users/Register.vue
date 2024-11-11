<template>
    <div class="register">
        <div class="register__header">
            <div class="register__title">Create Account</div>
            <div class="register__socials">
                <font-awesome-icon :icon="['fab', 'facebook']" class="socials-icon" />
                <font-awesome-icon :icon="['fab', 'google']" class="socials-icon" />
                <font-awesome-icon :icon="['fab', 'instagram']" class="socials-icon" />
                <font-awesome-icon :icon="['fab', 'linkedin']" class="socials-icon" />
                <font-awesome-icon :icon="['fab', 'twitter']" class="socials-icon" />
            </div>
            <div class="register__subtitle">
                Or use your email for registration
            </div>
        </div>
        <div class="register__body">
            <form class="row">
                <div class="col-12 mb-3">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter name">
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email">
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input type="number" class="form-control" id="email" placeholder="Enter Age">
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter password">
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="form-group">
                        <label for="confirm-password">Confirm Password</label>
                        <input type="password" class="form-control" id="confirm-password" placeholder="Enter password">
                    </div>
                </div>
                <div class="col-12 text-center mb-3">
                    <button type="submit" class="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter);
</script>
<style lang="scss">
.register {
    display: flex;
    flex-direction: column;
    align-items: center;
    $self: &;
    &__header {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;

        #{$self}__title {
            font-weight: 800;
            color: rgba(79,183,131,1);
            font-size: 1.5rem;
            margin-top: 25px;
        }

        #{$self}__socials {
            margin-top: 25px;
        }

        #{$self}__subtitle {
            font-weight: 800;
            color: gray;
            font-size: 0.8rem;
            margin-top: 25px;
        }
        
    }
}

.socials-icon {
    margin: 0 10px;
    color: rgb(224, 221, 221);
    font-size: 1.5rem;
}
</style>