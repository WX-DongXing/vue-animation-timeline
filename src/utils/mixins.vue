/**
 * @desc 混入
 * @date: 2020/12/7
 * @time: 17:00
 */

<script>
import { defineComponent } from 'vue-demi';
import { mapState, mapMutations } from 'vuex';
import { Mutations } from '@/store';

export default defineComponent({
  computed: {
    ...mapState([
      'time', 'startTime', 'endTime', 'maxTime',
    ]),
  },
  methods: {
    ...mapMutations({
      setMaxTime: Mutations.SET_MAXTIME,
      setState: Mutations.SET_STATE,
    }),
  },
});
</script>
