import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

function EditComponent({ attributes, setAttributes }) {

  const blockProps = useBlockProps({
    id: "colophon",
    className: "site-footer expanded-container",
    style: {
      marginInline: "auto",
      marginTop: '130px'
    }
  });


  return (
    <footer {...blockProps}>
      <div className="section-placeholder">Footer Section Placeholder</div>
    </footer>
  )
}

export default EditComponent;