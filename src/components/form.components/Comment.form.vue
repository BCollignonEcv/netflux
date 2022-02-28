<script>

import { useShowStore } from '@/stores/show.store'

export default {
  components: {
    
  },
  props: {
    show: Object,
  },
  data() {
    return {
      username: '',
      content: ''
    }
  },
  setup() {
    const showStore = useShowStore();
    return { showStore }
  },
  computed: {
    
  },
  methods: {
    newComment(){
      const showId = parseInt(document.getElementById('show-id').value);

      if (showId !== undefined && showId !== null &&
          this.username !== '' &&
          this.content !== '') {

          let newComment  = {
              showId: showId,
              username: this.username,
              content: this.content
          };

          this.showStore.showAddComment(newComment);

      }

    }
  }
}
</script>

<template>
  <div class="show__add-comment">

    <h3 class="show__add-comment-title">Add Comment</h3>

    <form action="" @submit.prevent="newComment()" class="show__add-comment-form">
      <input id="show-id" type="hidden" :value="show.id">
      <input id="comment-username" name="comment-username" class="show__add-comment-username" type="text" placeholder="Username" v-model="username">
      <textarea id="comment-content" name="comment-content" class="show__add-comment-content" rows="5" cols="33" placeholder="Content" v-model="content"></textarea>
      <button type="submit" class="show__add-comment-submit">Send</button>
    </form>
    
  </div>
</template>

<style lang="scss" scoped>

  .show__add-comment {
    position: relative;
    width: 900px;
    max-width: 90%;
    margin: 0 auto 60px auto;
    padding: 32px;
    background-color: #1a1a1a;
    border-radius: 6px;
  }

  .show__add-comment-title {
    font-size: 20px;
    line-height: 26px;
  }

  .show__add-comment-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-top: 16px;
  }

  .show__add-comment-username,
  .show__add-comment-content {
    font-family: 'Inter';
    font-size: 16px;
    line-height: 22px;
    color: var(--c-neutral);
  }

  .show__add-comment-username {
    width: 200px;
    padding: 8px 16px;
    border: 1px solid var(--c-neutral);
  }

  .show__add-comment-content {
    width: 100%;
    max-width: 400px;
    padding: 8px 16px;
    border: none;
    border: 1px solid var(--c-neutral);
    background-color: transparent;
    color: var(--c-neutral);
  }

  .show__add-comment-submit {
    display: inline-block;
    padding: 16px 32px;
    border-radius: 6px;
    background-color: var(--c-neutral);
    font-weight: 600;
    color: var(--c-tertiary);
    cursor: pointer;
  }

</style>