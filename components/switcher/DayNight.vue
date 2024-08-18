<template>
    <div class="wrapper">
        <div class="toggle">
            <input v-model="inputValue" class="toggle-input" type="checkbox" @change="switchColorMode"/>
            <div class="toggle-bg"></div>
            <div class="toggle-switch">
                <div class="toggle-switch-figure"></div>
                <div class="toggle-switch-figureAlt"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const inputValue = computed(() =>{
    return colorMode.value === 'dark'
})

const switchColorMode = () => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>


<style lang="scss" scoped>
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

.wrapper {
    text-align: center;
    div, input {
        cursor: pointer;
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
    border-radius: 40px;
}

.toggle:before,
.toggle:after {
    content: '';
    display: table;
}

.toggle:after {
    clear: both;
}

.toggle-bg {
    position: absolute;
    top: -4px;
    left: -4px;
    width: 100%;
    height: 100%;
    background-color: #C0E6F6;
    border-radius: 40px;
    //UNCOMMENT IF U WANT BORDER TODO MOVE TO PROPERTY
    //border: 4px solid #81C0D5;
    transition: all .1s cubic-bezier(0.250, 0.460, 0.450, 0.940);
}

.toggle-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid red;
    border-radius: 40px;
    z-index: 2;
    opacity: 0;
}

.toggle-switch {
    position: relative;
    width: 40px;
    height: 40px;
    margin-left: 50px;
    bottom: 4px; //FIX BC some confilct in css
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
        65px -5px 0 -3px #FCFCFC,
        54px 4px 0 -4px #FCFCFC,
        63px 7px 0 -2px #FCFCFC,
        53px 18px 0 -4px #FCFCFC,
        44px 15px 0 -2px #FCFCFC,
        68px 18px 0 -3px #FCFCFC;

    transition: all .12s cubic-bezier(0.250, 0.460, 0.450, 0.940);
    transform: scale(0);
}

.toggle-switch-figureAlt:before {
    @include crater(-4px, 13px, 7px);
}

.toggle-switch-figureAlt:after {
    @include crater(10px, 10px, 2px);
}

/////////////////////////////////////////////////
// Night State
/////////////////////////////////////////////////
.toggle-input:checked ~ .toggle-switch {
    margin-left: 0;
    border-color: #DEE1C5;
    background-color: #FFFDF2;
}

.toggle-input:checked ~ .toggle-bg {
    background-color: #484848;
    border-color: #202020;
}

.toggle-input:checked ~ .toggle-switch .toggle-switch-figure {
    margin-left: 40px;
    opacity: 0;
    transform: scale(0.1);
}

.toggle-input:checked ~ .toggle-switch .toggle-switch-figureAlt {
    transform: scale(1);
}

</style>
