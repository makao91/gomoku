<template>
  <table>
    <tr v-for="(board_number,board_number_index) in board_numbers" :key="board_number" >
      <th>{{ board_number }}</th>
      <td v-for="(letter, letter_index) in alphabet" :key="letter_index">
        <BoardField :horizontally_index=board_number_index :perpendicularly_index=letter_index :name=getId(board_number,letter)  :state="0" :player=1>
        </BoardField>
      </td>
    </tr>
    <td v-for="letter_in_header in headers_alphabet" :key="letter_in_header">
      <th>{{ letter_in_header }}</th>
    </td>
  </table>
</template>

<script>
import BoardField from "@/components/BoardField";

export default {
  name: "Board",
  data(){
    return {
      board_numbers:[15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
      alphabet:['A','B','C','D','F','G','H','I','J','K','L','M','N','O'],
      headers_alphabet:[null,'A','B','C','D','F','G','H','I','J','K','L','M','N','O'],
    }
  },
  methods: {
    getId(index,letter){
      return index + letter;
    },
  },

  components: {
    BoardField
  }
}
</script>

<style scoped>

</style>
