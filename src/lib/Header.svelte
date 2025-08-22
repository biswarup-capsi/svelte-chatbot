<script lang="ts">
    import { openAgent, openChat, openFaq, showBot } from './store';
    $: isChatOpen = $openChat; // reactive variable from store
</script>

<style>
    @import './header.css';
</style>

<div class="chat-header">
    <div>
        <h1>ChatFlow</h1>
        <p>A live chat interface that allows for seamless, natural communication and connection.</p>
    </div>
    <div class="cross" role="button" tabindex="0"
        on:click={() => {
            if (isChatOpen) {
                openChat.set(false);
            } else {
                openAgent.set(false);
                openFaq.set(false);
            }
            showBot.set(true);
        }}
        on:keydown={(e) => e.key === 'Enter' && openAgent.update(v => !v)}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x">
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
        </svg>
    </div>
</div>
