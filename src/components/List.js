import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Item = styled('li')``;

export const List = ({
  className,
  emptyTemplate: Empty,
  items,
  options,
  template: Template,
  getKey,
}) => (
  <ul className={className}>
    {items.map((item, index) => (
      <Item key={getKey(item)}>
        <Template
          {...options}
          index={index}
          item={item}
          {...typeof item === 'object' && item}
        />
      </Item>
    ))}
    {items.length === 0 && <Empty {...options} />}
  </ul>
);

List.defaultProps = {
  className: '',
  emptyTemplate() {
    return null;
  },
  items: [],
  options: {},
  template({ item }) {
    return item;
  },
  getKey: ({ id }) => id,
};

List.propTypes = {
  className: PropTypes.string,
  emptyTemplate: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.any),
  options: PropTypes.objectOf(PropTypes.any),
  template: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  getKey: PropTypes.func,
};

export default styled(List)``;
