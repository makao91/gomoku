import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        board_fields: [
            [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        ],
        gameIsOver: false,
    },
    mutations: {
        setBoardFieldToPlayer(state, board_field){
            state.board_fields[board_field.horizontal][board_field.perpendicularly] = board_field.state;
        },
        gameIsOver(state){
            state.gameIsOver = true;
        },
        gameIsNotOver(state){
            state.gameIsOver = false;
        },
        clearBoard(state){
          state.board_fields = [
              [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
              [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
          ];
        }
    },
    actions: {
    }
})
