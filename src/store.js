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
    },
    mutations: {
        setBoardFieldToPlayer(state, board_field){
            alert(board_field.horizontal)
            state.board_fields[board_field.horizontal][board_field.perpendicularly] = board_field.state;
        }
    },
    actions: {
        checkForWin(){
            // let players_fields_one = this.state.board_fields_player_one;
            let player_one_counter = 0;
            // let players_fields_two = this.state.board_fields_player_two;
            let player_two_counter = 0;
            this.state.board_fields_player_one.forEach(function (field){
                alert(field.perpendicularly)
            })
            this.state.board_fields_player_two.forEach(function (field){
                alert(field.perpendicularly)
            })
            if (player_one_counter>=5){
                alert('Player one wins!!!')
            }
            if (player_two_counter>=5){
                alert('Player two wins!!!')
            }
        }
    }
})
