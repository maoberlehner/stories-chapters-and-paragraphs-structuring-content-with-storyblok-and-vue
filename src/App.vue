<template>
  <div
    id="app"
    class="App"
  >
    <header class="App__header o-container">
      <RouterLink
        class="App__logo"
        to="/"
      >
        Fancy Company
      </RouterLink>

      <nav class="App__nav">
        <RouterLink
          class="App__navLink"
          to="/"
        >
          Home
        </RouterLink> |
        <RouterLink
          class="App__navLink"
          to="/about"
        >
          About
        </RouterLink>
      </nav>
    </header>

    <RouterView class="App__main"/>

    <footer class="App__footer o-container">
      &copy; Fancy Company
    </footer>
  </div>
</template>

<script>
export default {
  name: `App`,
};
</script>

<style lang="scss">
@import './assets/scss/settings/colors';
@import './assets/scss/settings/spacings';
@import './assets/scss/generic/base';
@import '{
  .o-container,
  .o-container--s,
  .o-container--l
} from ~@avalanche/object-container';
@import './assets/scss/objects/content';
@import './assets/scss/utilities/spacing';

.App__header {
  display: flex;
  padding-top: setting-spacing(m);
  padding-bottom: setting-spacing(m);
  justify-content: space-between;
  border-bottom: 1px solid setting-color(b, gray);
}

.App__logo,
.App__navLink {
  color: setting-color(text);
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
}

.App__main {
  padding-top: setting-spacing(xxl);
  padding-bottom: setting-spacing(xxl);
}

.App__footer {
  padding-top: setting-spacing(m);
  padding-bottom: setting-spacing(m);
  border-top: 1px solid setting-color(b, gray);
}
</style>
