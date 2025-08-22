<script lang="ts">
    export let handleOpenAgent:()=>void;

  let faqs:Faqs = ["How do I apply?", "What courses do you offer?", "When do applications close?", "Where is the campus located?", "Talk to someone?"];
</script>

<style>
    @import './faqs.css';
</style>

<div class="faq-box">
        <div class="faq-options">
            <ul class="faq-options-li">
                {#each faqs as faq:string}
                  <li>{faq}</li>
                {/each}
                <div id="talk-btn" onclick={handleOpenAgent} onkeydown={e=>e.key==="Enter" && handleOpenAgent} aria-details="chat option" role="button" tabindex="0">Can I talk to someone?</div>
            </ul>
        </div>
 </div>