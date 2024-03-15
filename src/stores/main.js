import { mapStores } from 'pinia'

import _useBaseStore from './base/main'
export const useBaseStore = _useBaseStore

export default {
    computed: {
        ...mapStores(useBaseStore),
    },
}
