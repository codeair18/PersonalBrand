<script setup lang="ts">
// const toggle = document.querySelector('.toggle-input');
// const initialState = localStorage.getItem('toggleState') == 'true';
// toggle.checked = initialState;
//
// toggle.addEventListener('change', function() {
//   localStorage.setItem('toggleState', toggle.checked);
// });

const colorMode = useColorMode()

const changeColorMode = () => {
  console.log('change color0')
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const isNight = computed(() => {
  return colorMode.value === 'dark'
})
console.log(colorMode.value)
</script>
<template>
  <div class="wrapper">
    <div class="shadow"></div>
    <div class="toggle" @click="changeColorMode">
      <input v-model="isNight" class="toggle-input" type="checkbox" />
      <div class="toggle-bg"></div>
      <div class="toggle-switch">
        <div class="toggle-switch-figure"></div>
        <div class="toggle-switch-figureAlt"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/*
F5EB42 - sun inner
E4C74D - sun outer
FFFFFF - cloud inner
D4D4D2 - cloud outer
81C0D5 - parent outer
C0E6F6 - parent inner
FFFDF2 - moon inner
DEE1C5 - moon outer
FCFCFC - stars
*/

$backgroundDay: var(--sun-color);
$backgroundNight: var(--moon-color);

.wrapper {
  text-align: center;
  right: 10px;
  top: 10px;
  position: fixed;
  z-index: 100;
  cursor: pointer;
}

@media only screen and (min-width: 600px) {

  .wrapper {
    right: 25px;
    top: 25px;
  }
}

/////////////////////////////////////////////////
// Mixins
/////////////////////////////////////////////////
@mixin crater($top, $left, $size) {
  content: '';
  position: absolute;
  top: $top;
  left: $left;
  width: $size;
  height: $size;
  background-color: #EFEEDA;
  border-radius: 100%;
  border: 4px solid #DEE1C5;
}

@mixin cloudBubble($top, $right, $width, $height, $deg) {
  content: '';
  display: block;
  position: relative;
  top: $top;
  right: $right;
  width: $width;
  height: $height;
  border: 8px solid #D4D4D2;
  border-radius: 100%;
  border-right-color: transparent;
  border-bottom-color: transparent;
  transform: rotateZ($deg);
  background-color: #fff;
}

/////////////////////////////////////////////////
// Day State
/////////////////////////////////////////////////
.toggle {
  position: relative;
  display: inline-block;
  width: 100px;
  padding: 4px;
  border-radius: 50%;
}

.toggle:before,
.toggle:after {
  content: '';
  display: table;
}

.toggle:after {
  clear: both;
}

.dark .shadow {
  background-color: #484848;
  border-color: #202020;
  box-shadow: 2px 2px 200px 200px $backgroundNight;
}
.shadow {
  width: 1px;
  height: 1px;
  right: 75px;
  position: absolute;
  border-radius: 50%;
  box-shadow: 2px 2px 200px 200px $backgroundDay;
  z-index: -100;
}

.toggle-bg {
  position: absolute;
  top: -4px;
  left: -4px;
  background-color: $backgroundDay;
  //border-radius: 50%;
  //box-shadow: 2px 2px 200px 200px $backgroundDay;
  //transition: all .1s cubic-bezier(0.250, 0.460, 0.450, 0.940);
  cursor: pointer;
}

.toggle-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  border-radius: 50%;
  opacity: 0;
}

.toggle-switch {
  position: relative;
  width: 40px;
  height: 40px;
  margin-left: 50px;
  background-color: #F5EB42;
  border: 4px solid #E4C74D;
  border-radius: 50%;
  transition: all .1s cubic-bezier(0.250, 0.460, 0.450, 0.940);
}

.toggle-switch-figure {
  position: absolute;
  bottom: -14px;
  left: -50px;
  display: block;
  width: 80px;
  height: 30px;
  border: 8px solid #D4D4D2;
  border-radius: 20px;
  background-color: #fff;
  transform: scale(0.4);
  transition: all .12s cubic-bezier(0.250, 0.460, 0.450, 0.940);
  &:after {
    @include cloudBubble(-65px, -42px, 15px, 15px, 70deg);
  }
  &:before {
    @include cloudBubble(-25px, -10px, 30px, 30px, 30deg);
  }
}

.toggle-switch-figureAlt {
  @include crater(5px, 2px, 2px);

  box-shadow:
    42px -7px 0 -3px #FCFCFC,
    75px -10px 0 -3px #FCFCFC,
    54px 4px 0 -4px #FCFCFC,
    83px 7px 0 -2px #FCFCFC,
    63px 18px 0 -4px #FCFCFC,
    44px 28px 0 -2px #FCFCFC,
    78px 23px 0 -3px #FCFCFC;

  transition: all .12s cubic-bezier(0.250, 0.460, 0.450, 0.940);
  transform: scale(0);
}

.toggle-switch-figureAlt:before {
  @include crater(-6px, 18px, 7px);
}

.toggle-switch-figureAlt:after {
  @include crater(19px, 15px, 2px);
}

/////////////////////////////////////////////////
// Night State
/////////////////////////////////////////////////
.toggle-input:checked ~ .toggle-switch {
  margin-left: 0;
  border-color: #DEE1C5;
  background-color: #FFFDF2;
}

//.toggle-input:checked ~ .toggle-bg {
//  background-color: #484848;
//  border-color: #202020;
//  box-shadow: 2px 2px 200px 200px $backgroundNight;
//}

.toggle-input:checked ~ .toggle-switch .toggle-switch-figure {
  margin-left: 40px;
  opacity: 0;
  transform: scale(0.1);
}

.toggle-input:checked ~ .toggle-switch .toggle-switch-figureAlt {
  transform: scale(1);
}
</style>