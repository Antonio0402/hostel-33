import { RichText } from '@wordpress/block-editor';

const AddressItem = ({ title, iconClass, value, onChange, placeholder, prefix = '' }) => {
  return (
    <div className="address-item">
      {title && <h4 className="title">{title}</h4>}
      <div className="content">
        <i className={`fa-solid ${iconClass} fa-lg color-primary`}></i>
        <p className="text-500 color-black">
          {prefix}
          <RichText
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            tagName="span"
          />
        </p>
      </div>
    </div>
  );
}

export default AddressItem