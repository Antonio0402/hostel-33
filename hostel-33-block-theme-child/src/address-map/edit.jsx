import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { POST_META_BRANCH } from './constant';
import { useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import AddressItem from './AddressItem';
import MapContainer from './MapContainer';

function EditComponent({ attributes, setAttributes }) {
  const blockProps = useBlockProps({
    className: "address-container",
  });

  const { branchId, addressDetail, phone, email, mapEmbedKey } = attributes;
  // Retrieve branchId from cookies
  // Retrieve branchId from cookies and update the block's attributes
  useEffect(() => {
    const cookieBranchId = document.cookie
      .split('; ')
      .find(row => row.startsWith('hostel33_branch='))
      ?.split('=')[1];

    if (cookieBranchId && cookieBranchId !== branchId) {
      setAttributes({ branchId: cookieBranchId });
    }
  }, [branchId]);

  // Fetch post meta data
  useEffect(() => {
    if (!branchId) return;
    if (branchId) {
      // Fetch post meta using the REST API
      apiFetch({ path: `/wp/v2/branch/${branchId}` })
        .then((post) => {
          // Assuming 'your_meta_key' is the meta key registered in PHP
          const meta = post.acf || {};
          const postMetaValues = Object.values(POST_META_BRANCH);
          const postMetaKeys = Object.keys(POST_META_BRANCH);
          const updatedAttributes = [addressDetail, phone, email, mapEmbedKey].reduce((acc, curr, index) => {
            if (!curr) {
              acc[postMetaKeys[index]] = meta[postMetaValues[index]] || '';
            }
            return acc;
          }, {});
          setAttributes(updatedAttributes);
        })
        .catch((error) => {
          console.error('Error fetching post meta:', error);
        });
    }
  }, [branchId])

  // Update post meta data
  useEffect(() => {
    if (!branchId) return;
    // Update post meta using the REST API
    const postMetaKeys = Object.values(POST_META_BRANCH);
    const updatedMeta = [addressDetail, phone, email, mapEmbedKey].reduce((acc, curr, index) => {
      if (curr) {
        acc[postMetaKeys[index]] = curr;
      }
      return acc;
    }, {});
    if (!Object.keys(updatedMeta).length) return;
    apiFetch({
      path: `/wp/v2/branch/${branchId}`,
      method: 'POST',
      data: {
        meta: updatedMeta,
      },
    })
      .then((response) => {
        console.log('Post meta updated successfully:', response);
      })
      .catch((error) => {
        console.error('Error updating post meta:', error);
      });

  }, [addressDetail, phone, email, mapEmbedKey]);

  return (
    <div {...blockProps}>
      <div className="address">
        <AddressItem
          title={__('Address', 'hostel-33')}
          iconClass="fa-map-marker-alt"
          value={addressDetail}
          onChange={(value) => setAttributes({ addressDetail: value })}
          placeholder={__('Enter address', 'hostel-33')}
        />
        <AddressItem
          title={__('Contact Details', 'hostel-33')}
          iconClass="fa-phone"
          value={phone}
          onChange={(value) => setAttributes({ phone: value })}
          placeholder={__('Enter phone number', 'hostel-33')}
          prefix={__('Phone: ', 'hostel-33')}
        />
        <AddressItem
          iconClass="fa-envelope"
          value={email}
          onChange={(value) => setAttributes({ email: value })}
          placeholder={__('Enter email address', 'hostel-33')}
          prefix={__('Email: ', 'hostel-33')}
        />
      </div>
      <MapContainer
        mapEmbedKey={mapEmbedKey}
        onEdit={() => setAttributes({ mapEmbedKey: '' })}
        onChange={(value) => setAttributes({ mapEmbedKey: value })}
      />
    </div>
  )
}

export default EditComponent;