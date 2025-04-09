import { useBlockProps } from '@wordpress/block-editor';

function EditComponent() {
  const blockProps = useBlockProps({
    id: "primary",
    className: "site-main",
    style: {
      marginTop: '130px',
      marginInline: 'auto',
    }
  });
  return (
    <main {...blockProps}>
      <div className="section-placeholder">Contact Page Placeholder</div>
    </main>
  )
}

export default EditComponent;