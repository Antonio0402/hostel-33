import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from "@wordpress/block-editor";
import EditComponent from './edit';
import metadata from './block.json';
import { __ } from '@wordpress/i18n';
registerBlockType(metadata.name, {
  attributes: {
    addressDetail: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    mapEmbedKey: {
      type: 'string',
    },
    branchId: {
      type: 'number',
    }
  },
  edit: EditComponent,
  save: SaveComponent,
});

function SaveComponent({ attributes }) {
  const blockProps = useBlockProps.save({
    className: "address-container",
  });
  const { addressDetail, phone, email, mapEmbedKey } = attributes;

  return (
    <div {...blockProps}>
      <div class="address">
        <div class="address-item">
          <h4 class="title">{__('Address', 'hostel-33')}</h4>
          <div class="content">
            <i class="fa-solid fa-map-marker-alt fa-lg color-primary"></i>
            <p class="text-500 color-black">{__(addressDetail, 'hostel-33')}</p>
          </div>
        </div>
        <div class="address-item">
          <h4 class="title">{__('Contact Details', 'hostel-33')}</h4>
          <div class="content">
            <i class="fa-solid fa-phone fa-lg color-primary"></i>
            <p class="text-500 color-black">{__(`Phone: ${phone}`, 'hostel-33')}</p>
          </div>
          {email && (
            <div class="content">
              <i class="fa-solid fa-envelope fa-lg color-primary"></i>
              <p class="text-500 color-black">{__(`Email: ${email}`, 'hostel-33')}</p>
            </div>
          )}
        </div>
      </div>
      <div class="map-container">
        <iframe src={`https://www.google.com/maps/embed?${mapEmbedKey} width=" 640" height="480" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`}></iframe>
      </div>
    </div >
  )
}