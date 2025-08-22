<script lang="ts">
    // import {openAgent, openFaq, showBot, openChat} from './store';
    import { fly } from 'svelte/transition';
    import Header from './Header.svelte';

    let faqs = ["How do I apply?", "What courses do you offer?", "When do applications close?", "Where is the campus located?", "Talk to someone?"]  
</script>

<style>
    @import './chat.css';
</style>



<div class="chat-dialog" transition:fly="{{ x: 20, duration: 300 }}">
      <Header />

      <div class="chat-body">
        <div class="messages">
          <p class="bot-msg">Hi! How Can I help You?</p>
        <div class="chat-options">
            <ul id="chat-options">
                {#each faqs as faq}
                  <li>{faq}</li>
                {/each}
            </ul>
        </div>
        </div>
        
         <div class="input">
          <input type="text" placeholder="Let's share something" onkeydown={(e) => e.key === "Enter" && console.log("recorded") } />
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <button class="send" tabindex="0" onclick={() => console.log("recorded")}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.176834 0.118496C0.329527 -0.0108545 0.544637 -0.0367025 0.723627 0.0527924L13.7236 6.55279C13.893 6.63748 14 6.81061 14 7C14 7.18939 13.893 7.36252 13.7236 7.44721L0.723627 13.9472C0.544637 14.0367 0.329527 14.0109 0.176834 13.8815C0.0241407 13.7522 -0.0367196 13.5442 0.0221319 13.353L1.97688 7L0.0221319 0.647048C-0.0367196 0.455781 0.0241407 0.247847 0.176834 0.118496ZM2.8693 7.5L1.32155 12.5302L12.382 7L1.32155 1.46979L2.8693 6.5H8.50001C8.77615 6.5 9.00001 6.72386 9.00001 7C9.00001 7.27614 8.77615 7.5 8.50001 7.5H2.8693Z" fill="white"/>
            </svg>
          </button>
         </div>
      </div>
</div>