<template>
  <div class="text-center">
    <v-btn
        class="ma-2 special--text"
        :loading="visibility"
        :disabled="visibility"
        color="#332D2E"
        backgroundColor="#FAF6E6"
        @click="visibility = true"
        x-large
    >
      Login
    </v-btn>
    <!-- Dialog -->
    <v-dialog v-model="visibility" width="500px">
      <v-card id="login_form">
        <v-container>
          <v-row>
            <v-spacer></v-spacer>
            <v-img class="mb-6 mt-4" src="../assets/welcome2.png" max-height="150" max-width="150"></v-img>
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
        <v-card-text>
          <v-container class="px-10">
            <v-row>
              <v-text-field
                  name="email"
                  id="email"
                  v-model="email"
                  prepend-inner-icon="fas fa-envelope"
                  :error-messages="emailErrors"
                  label="E-mail"
                  type="email"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                  name="password"
                  id="password"
                  v-model="password"
                  prepend-inner-icon="fas fa-key"
                  :append-icon="value ? 'fas fa-eye' : 'fas fa-eye-slash'"
                  @click:append="() => (value = !value)"
                  :error-messages="passwordErrors"
                  label="Password"
                  :type="value ? 'password' : 'text'"
                  required
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
              ></v-text-field>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-container class="px-10 my-4">
            <v-btn
                color="#332D2E"
                backgroundColor="#FAF6E6"
                class="loginButton special--text"
                large
                @click="submit"
            >
              submit
            </v-btn>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End Dialog -->
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'button_login',
  mixins: [validationMixin],

  validations: {
    password: { required,},
    email: { required, email },
  },

  data () {
    return {
      visibility: false,
      password: '',
      email: '',
      value: String,
    };
  },

  computed: {
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },

  methods: {
    submit () {
      this.$v.$touch()
    },
  },

}
</script>

<style lang="css" scoped>
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.v-btn.v-size--x-large {
  font-size: 3rem;
}

.v-btn.v-size--large {
  font-size: 2rem;
}
</style>