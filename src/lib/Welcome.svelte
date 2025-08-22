
<script lang="ts">
    import { fly } from "svelte/transition";

    export let handleOpenFaq: ()=>void;
    export let handleOpenChat: ()=>void;
</script>

<style>
    @import './welcome.css';
</style>

<div class="welcome-box" transition:fly="{{ y: 20, duration: 300 }}">
<div class="welcome">
<h1>Welcome to our website!</h1>
<p>Nice to meet you! If you have any question about our services, feel free to contact us.</p>
</div>
<div class="welcome-2">
<div class="faq" onclick={handleOpenFaq} onkeydown={e=>e.key==="Enter" && handleOpenFaq} aria-details="faq option" role="button" tabindex="0">FAQ</div>
<div class="talk" onclick={handleOpenChat} onkeydown={e=>e.key==="Enter" && handleOpenChat} aria-details="chat option" role="button" tabindex="0">Let's Talk</div>
</div>
</div>