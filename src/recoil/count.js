import {atom, selector} from 'recoil';

export const countState = atom({
    key: 'countState',
    default: 0
});

export const inputState = atom({
    key: 'inputState',
    default: ''
});

export const countInputState = selector( {
    key: 'countTitleState',
    get: ({get}) => {
        return `Current Count ${get(countState)} And Input Value is ${get(inputState)}`;
    },
    set: ({set}, newValue) => {
        set(countState, Number(newValue));
        set(inputState, newValue + '');
    } ,
})

// Asynchronize processing selector
export const recoilStarSelector = selector({
    key: 'asyncState',
    get: async () => {
        const response = await fetch('https://api.github.com/repos/facebookexperimental/Recoil');
        const recoilProjectInfo = await response.json();

        return recoilProjectInfo['stargazers_count'];
    }
});

// delay util
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const delayCountState = atom({
    key: 'delayCountState',
    default: 0,
});

export const delay1SecSelector = selector( {
    key: 'delay1SecSelector',
    get: async ({get}) => {
        const result = `delayCountState is ${get(delayCountState)}`;
        await delay(1000);
        return result;
    }
})