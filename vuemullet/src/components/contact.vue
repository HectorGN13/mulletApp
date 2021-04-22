<template>
  <v-card id="contact_form" class="rounded-lg mx-auto mt-16" justify="center" elevation="24" max-width="600px">
    <div class="contact_title">* CONTACT US *</div>
    <form>
      <div class="ma-12">
        <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="32"
            label="Name *"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
            background-color="#F4F4F4"
        ></v-text-field>
        <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail *"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            background-color="#F4F4F4"
        ></v-text-field>
        <v-textarea
            v-model="content"
            :error-messages="contentErrors"
            :counter="4000"
            label="Content *"
            required
            @change="$v.content.$touch()"
            @blur="$v.content.$touch()"
            background-color="#F4F4F4"
        ></v-textarea>
        <v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            label="Do you agree?"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
        ></v-checkbox>
          <v-btn
              class="mr-4 mb-10 special--text contact_form_button"
              color="#332D2E"
              backgroundColor="#FAF6E6"
              medium
              @click="submit"
              style="font-size: 2rem;"
          >
            SEND
          </v-btn>
          <v-btn
              class="mb-10 special--text contact_form_button"
              @click="clear"
              color="#332D2E"
              backgroundColor="#FAF6E6"
              medium
              style="font-size: 2rem;"
          >
            CLEAR
          </v-btn>
      </div>
    </form>
  </v-card>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(32) },
    email: { required, email },
    content: { required, maxLength: maxLength(4000) },
    checkbox: {
      checked (val) {
        return val
      },
    },
  },

  data: () => ({
    name: '',
    email: '',
    content:'',
    checkbox: false,
  }),

  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 32 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    contentErrors () {
      const errors = []
      if (!this.$v.content.$dirty) return errors
          !this.$v.content.maxLength && errors.push('Content must be at most 4000 characters long')
          !this.$v.content.required && errors.push('Content is required.')
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
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.content = ''
      this.checkbox = false
    },
  },
}
</script>