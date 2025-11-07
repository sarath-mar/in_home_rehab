// assets/mixins/myMixin.js
export const myMixin = {
  methods: {
    checkLoginStatus(isFromLogin) {
      const user = localStorage.getItem(this.$CONSTANTS.USER_KEY);
      const loginTime = localStorage.getItem(this.$CONSTANTS.LOGIN_TIME_KEY);
      if (!user || !loginTime) {
        console.log(1)
        this.$router.push("/login");
        return;
      }
      const currentTime = new Date();
      const loginDate = new Date(loginTime);
      const diffInMs = currentTime - loginDate;
      const twoDaysInMs = this.$CONSTANTS.LOGIN_EXPIRY_TIME;

      if (diffInMs > twoDaysInMs) {
        localStorage.removeItem(this.$CONSTANTS.USER_KEY);
        localStorage.removeItem(this.$CONSTANTS.LOGIN_TIME_KEY);
        this.$router.push("/login");
      }
      if (isFromLogin) {
        console.log(3)
        this.$router.push("/admin")
      }
    },
    generateUniqueId() {
      return 'id-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    },
    formatDate (firebaseTimestamp) {
      if(!firebaseTimestamp){
        return '';
      }
        // Extract seconds from Firebase timestamp and convert it to milliseconds
        const date = new Date(firebaseTimestamp.seconds * 1000);
        
        // Define formatting options
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        
        // Return the formatted date
        return date.toLocaleDateString('en-US', options);
    }
  }
}
