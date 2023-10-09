<template>
    <div class="container">
        <section>
            <h2>Are consecutive the numbers from selected array?</h2>
            <select v-model="selected" @change="() => result = f1(selected)">
                <option v-for="item in options"
                :value="item"
                :key="item">
                {{ item }}
                </option>
            </select>
            <hr/>
            <div>Result: {{ result.toString() || 'please select a option' }}</div>
        </section>
        <section>
            <h2>Return a new array witch one will contains only unique values</h2>
            <select v-model="selected2" @change="() => result2 = f2(selected2)">
                <option v-for="item in options2"
                :value="item"
                :key="item">
                {{ item }}
                </option>
            </select>
            <hr/>
            <div>Result: {{ result2.toString() || 'please select a option' }}</div>
        </section>
        <section>
            <h2>Return a new array, where we are counting how many times a numbers appears in array.</h2>
            <label name="array">Input array:</label>
            <input type="text" name="array" v-model="inputValue"/>
            <button @click="() => result3 = f3(inputValue) ">Show</button>
            <hr/>
            <div>Result: {{ result3 || 'please input array' }}</div>
        </section>
        
    </div>
</template>

<script setup>
import { ref } from 'vue'
 let selected = ref(null)
 let selected2 = ref(null)
 let result = ref('')
 let result2 = ref('')
 let result3 = ref('')

 let inputValue = ref('1, 3, 2, 2, 4, 3, 5, 6, 5')

const options= [
    [5, 2, 3, 1, 4], 
    [34, 23, 52, 12, 3],
    [7, 6, 5, 5, 3, 4] 
]
const options2= [
    [1, 3, 2, 2, 4, 3, 5, 6, 5], 
    [9, 9, 9, 9, 9],
    [1, 2, 3, 4, 5] 
]
    
   const f1 = (arr = []) => {
    arr.sort((a,b)=> a - b)
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] + 1 !== arr[i + 1] ) {
            return false
        }
    }

    return true
    }

    const f2 = (arr = []) => {
       return Array.from(new Set(arr))
    }

    const f3 = (arr = []) => {
    const resultOjb = {}

    let inputArr = arr.split(",").map(Number)
    
     inputArr.forEach(item => {
       if(Object.hasOwn(resultOjb, item)) {
        resultOjb[item]++
     } else {
        resultOjb[item] = 1
    }
})

    const result = Object.keys(resultOjb).map(key => {
        const newObj = {}

        newObj[key] = resultOjb[key]
        return newObj
    } )
    
    return result
}
</script>