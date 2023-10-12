import { ref } from "vue";

const header = ref(null);

const Header = {
  set(newHeader) {
    header.value = newHeader;
  },
  get() {
    return header.value;
  },
};

export default Header;
