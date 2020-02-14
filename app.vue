<template>
  <div>
      <article>
        <h2>Transformers</h2>
        <ul id="transformers">
            <li v-for="transformer in transformers" :key="transformer.name"> 
                <span v-on:click="printName(transformer.name)">{{ transformer.name }} - </span>
                <span v-on:click="moveTransformer(transformer)"> {{ transformer.evil }} </span>

                <ul>
                    <li v-for="transformer in transformers" :key="transformer.name" v-on:click="printEvil(transformer.evil)">
                        {{ transformer.evil }}
                    </li>
                </ul>
            </li>
        </ul>

        <h2>Good transfomers</h2>
        <ul>
            <li v-for="notEvilTransformer in notEvilTransformers" :key="notEvilTransformer.name">
                {{ notEvilTransformer.name }}
            </li>
        </ul>
    </article>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            transformers: [
                { name: 'Megatron', evil: true },
                { name: 'Shockwave', evil: true },
                { name: 'Thunderwing', evil: true },
                { name: 'Starscream', evil: true },
                { name: 'Galvatron', evil: true },
                { name: 'Optimus Prime', evil: false },
                { name: 'Bumblebee', evil: false },
                { name: 'Jazz', evil: false },
                { name: 'Ironhide', evil: false },
                { name: 'Mirage', evil: false }
            ],
            notEvilTransformers: []
        }
    },
    methods: {
        printName:function(name) {
            console.log('Name: ', name);
        },
        printEvil:function(evil) {
            console.log('Evil: ', evil);
        },
        moveTransformer:function(transformer) {
            if (!transformer.evil) {
                this.notEvilTransformers.push(transformer);
            }
        }
    }
}

</script>

<style>
    li {
        cursor: pointer;
    }
</style>