import { computed, defineComponent } from 'vue'
import './editor-block.scss'
import { cloneDeep } from 'lodash-es'
import { basicComponents } from '../../utils/editor-config'
export default defineComponent({
  props: {
    block: {
      type: Object
    }
  },
  setup(props: any) {
    const blockStyles = computed({
      get() {
        return {
          top: props?.block.top + 'px',
          left: props?.block.left + 'px',
          zIndex: props?.block.zIndex,
          value: props?.block.value
        }
      },
      set() {}
    })
    const blockRef = ref(null)

    onMounted(() => {
      const { offsetWidth, offsetHeight } = blockRef.value
      if (props?.block?.alignCenter) {
        props.block.left = props?.block.left - offsetWidth / 2
        props.block.top = props?.block.top - offsetHeight / 2
        props.block.alignCenter = false
      }
      props.block.width = offsetWidth
      props.block.height = offsetHeight
    })
    return () => {
      const component = cloneDeep(basicComponents.find((item) => item.key === props?.block.key))
      const RenderComponent = component.render(props?.block?.attributes)
      return (
        <div ref={blockRef} class="editor-block" style={blockStyles.value}>
          {RenderComponent}
        </div>
      )
    }
  }
})
