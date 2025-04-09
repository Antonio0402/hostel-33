import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { PlainText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
const MapContainer = ({ mapEmbedKey, onEdit, onChange }) => {
  return (
    <div className="map-container">
      {mapEmbedKey ? (
        <>
          <ToolbarGroup>
            <ToolbarButton
              icon="edit"
              label={__('Edit Map Embed Key', 'hostel-33')}
              onClick={onEdit}
            />
          </ToolbarGroup>
          <iframe
            src={`https://www.google.com/maps/embed?${mapEmbedKey}`}
            width="640"
            height="480"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </>
      ) : (
        <p className="text-500 color-black">
          {__('Map Embed Key: ', 'hostel-33')}
          <PlainText
            value={mapEmbedKey}
            onChange={onChange}
            placeholder={__('Enter your map embed key', 'hostel-33')}
            tagName="span"
          />
        </p>
      )}
    </div>
  );
}

export default MapContainer