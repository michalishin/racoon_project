<template>
    <LayoutCentered>
      <v-card>
         <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
         </v-toolbar>
        <v-card-text>
            <v-form>
                <v-text-field prepend-icon="person" name="login" label="Email" type="email" v-model="email"></v-text-field>
                <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login">
                Login
            </v-btn>
        </v-card-actions>
      </v-card>
    </LayoutCentered>
</template>

<script>
import LayoutCentered from '@/components/LayoutCentered'
import firebase from 'firebase/app'
export default {
  components: {
    LayoutCentered
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
