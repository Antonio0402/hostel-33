
import { useSelect } from '@wordpress/data';
const useFrontPage = () => {
  const is_front_page = useSelect((select) => select('core/block-editor').getBlockRootClientId(select('core/block-editor').getSelectedBlockClientId()) === select('core/block-editor').getBlockRootClientId(select('core/block-editor').getSelectedBlockClientId()));

  return is_front_page;
}

export default useFrontPage;