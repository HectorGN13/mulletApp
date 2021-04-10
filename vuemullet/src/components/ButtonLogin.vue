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
                  v-model="name"
                  :error-messages="nameErrors"
                  :counter="10"
                  label="Name"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
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
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'button_login',
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
  },

  data () {
    return {
      visibility: false,
      name: '',
      email: '',
    };
  },

  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
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