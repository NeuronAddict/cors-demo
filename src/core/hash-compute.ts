import {ref, onMounted, onUnmounted, type Ref} from 'vue'

export function trackHash(name: string) {

    let hashValue: Ref<string|null> = ref("");

    onMounted(() => window.addEventListener('hashchange', onHashChange));

    onUnmounted(() => window.removeEventListener('hashChange', onHashChange));

    function onHashChange() {
        console.log('change hash');
        hashValue.value = window.location.hash.length < 2 ? null
            : new URLSearchParams(
                window.location.hash.substring(1)
            ).get(name);
        console.log(hashValue);
    }

    return { hashValue };
}
