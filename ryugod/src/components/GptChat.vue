<template>
    <v-container style="max-width:600px">
        <v-row justify="space-around d-flex flex-column">
            <v-card v-for="message in messages" :key="message.time" flat>              
            <v-list-item
                :key="message.time"
                v-if="message.from != 'me'"
            >
                <v-list-item-avatar class="align-self-start mr-2">                     
                <v-avatar size="40">
                    <v-img src="http://www.ryugod.com/contents/images/ryugod.png"></v-img>
                </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content class="received-message">
                <v-card color="success" class="flex-none">                        
                    <v-card-text class="white--text pa-2 d-flex flex-column">
                    <span class="align-self-start text-subtitle-1">{{message.message}}</span>
                    </v-card-text>
                </v-card>                   
                </v-list-item-content>
            </v-list-item>
            <v-list-item v-else>
                <v-list-item-content class="sent-message justify-end">
                <v-card color="primary" class="flex-none">
                    <v-card-text class="white--text pa-2 d-flex flex-column">                               
                    <span class="text-subtitle-1 chat-message">{{ message.message }}</span>
                    </v-card-text>
                </v-card>
                </v-list-item-content>
            </v-list-item> 
            </v-card>
        </v-row>
    </v-container>
</template>

<style scoped>
.chat-message {
  display: unset !important;
  white-space: break-spaces;
}
.chat-screen {
  max-height: 320px;
  overflow-y: auto;
}
.flex-none {
  flex: unset;
}
.received-message::after {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  left: 54px;  
  right: auto;
  top: 12px;
  bottom: auto;
  border: 12px solid;
  border-color: #4caf50 transparent transparent transparent;
}
.sent-message::after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: auto;    
    right: 54px;
    top: 12px;
    bottom: auto;
    border: 12px solid;
    border-color: #1976d2 transparent transparent transparent;
}
</style>

<script>
export default {
    name: 'Terminal',
    data: () => ({
        messages: [
        {
            from: 'me',
            message: `Sure, I'll see you later.`,
            time: '10:42am',
        },
        {
            from: 'John Doe',
            message: 'Yeah, sure. Does 1:00pm work?',
            time: '10:37am',
        },
        {
            from: 'me',
            message: 'Did you still want to grab lunch today?',
            time: '9:47am',
        },
        {
            from: 'me',
            message: 'Did you still want to grab lunch today?',
            time: '9:472am',
        },
        {
            from: 'You',
            message: 'Did you still want to grab lunch today?',
            time: '9:473am',
        },
        {
            from: 'You',
            message: 'Did you still want to grab lunch today?',
            time: '9:473am',
        },
        {
            from: 'You',
            message: 'Did you still want to grab lunch today?',
            time: '9:474am',
        },
        {
            from: 'You',
            message: 'Did you still want to grab lunch today?',
            time: '9:475am',
        },
        {
            from: 'You',
            message: 'Did you still want to grab lunch today?',
            time: '9:476am',
        },
        ],
    }),
}
</script>