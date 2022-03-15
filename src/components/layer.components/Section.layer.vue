<template>
  <section :class="classObject">
      <template v-if="type === 'splited'">
          <div class="half left-section">
            <slot name="left" ></slot>
          </div>
        <div class="half right-section">
            <slot name="right" ></slot>
          </div>
      </template>
      <template v-if="type === 'Default'">
          <div class="content">
                <slot></slot>
          </div>
      </template>
  </section>
</template>

<script>
export default {
    name: 'section-layer',
    props: {
        type: {
            type: String,
            default: 'Default'
        },
        backgroundColor: {
            type: String,
            default: 'Default'
        },
        height: {
            type: [String, Number],
            default: 'Default'
        },
        padding: {
            type: [Boolean],
            default: false,
        },
        overlay: {
            type: [Boolean],
            default: false,
        }
    },
    data () {
        return {
            allowedClass: {
                backgroundColor: ['Default', 'primary', 'secondary'],
                type: ['Default', 'splited'],
                height: ['Default', 'fullHeight', 'landing'],
            }
        }
    },
    computed: {
        classObject() {
            let customClassObject = [];
            for(const [key, value] of Object.entries(this.$props)) {
                if(value != "Default"){
                    if(this.allowedClass[key] && this.allowedClass[key].includes(value)){
                        customClassObject.push(value);
                    }
                }
            }
            this.padding ? customClassObject.push('p1') : null
            this.overlay ? customClassObject.push('overlay') : null
            return customClassObject;
        }
    },
    mounted () {
    }
}
</script>

<style lang="scss">

section {
    height: auto;
    position: relative;

    &.fullHeight{
        height: 100vh;
    }

    &.landing{
        min-height: calc(100vh - var(--header-size));
    }

    &.p1{
        padding: var(--m-4) var(--m-2);
    }

    &.overlay{
        margin-top: -10%;
        z-index: 2;
    }

    &.primary{
        @include customColor($color: 'primary')
    }

    &.splited {
        display: flex;

        .half{
            width: 50vw;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            a .btn-large {
                align-self: flex-end;
            }
        }

        .left-section{
            z-index: 10;
            .content{
                margin-top: var(--header-size);
                padding: var(--m-1);
            }
        }
    }
}

</style>