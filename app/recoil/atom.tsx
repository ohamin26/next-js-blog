import { atom } from 'recoil'

export const scrollPositionState = atom<number | null>({
    key: 'scrollPositionState',
    default: 0,
})
