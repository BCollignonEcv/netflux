<template>
  <button class="btn" :class="classObject">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'button-form',
    props: {
        type: {
            type: String,
            default: 'Default'
        },
        typeColor: {
            type: String,
            default: 'Default'
        },
    },
    data () {
        return {
            allowedClass: {
                typeColor: ['Default', 'primary', 'secondary', 'correct', 'incorrect'],
                type: ['Default', 'large', 'circle', 'round'],
            }
        }
    },
    computed: {
        classObject() {
            let customClassObject = [];
            for(const [key, value] of Object.entries(this.$props)) {
                if(value != "Default"){
                    if(this.allowedClass[key] && this.allowedClass[key].includes(value)){
                        customClassObject.push(`btn-${value}`);
                    }
                }
            }
            return customClassObject;
        }
    },
    mounted () {
    }
}
</script>


<style lang="scss" scoped>

button.btn{
    @include customColor($color: 'secondary');
    font-weight: bold;
    transition: all .25s ease-in-out;
    cursor: pointer;
    padding: var(--m-5) var(--m-1);
    border-radius: 5px;
    margin-right: var(--m-4);


    &.btn-large{
        width: 100%;
        padding: 36px;
    }


    &.btn-secondary{
        @include customColor($color: 'tertiary');
    }


    &:hover, &:focus{
        transition: all .25s ease-in-out;
        @include customColor($color: 'active');
    }
}
</style>