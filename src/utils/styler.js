import styled from 'styled-components';

// Recursively maps nested objects to correct styled-components format.
const mapAttributes = (attributeList) => {
    const mappedAttributes = {};

    Object.keys(attributeList).forEach((attributeName) => {
        const {
            [attributeName]: attributeValue
        } = attributeList;

        if (typeof attributeValue === 'object') {
            const isNestedSelector = (/[a-zA-Z]/).test(attributeName.trim()[0]);
            const correctedAttributeName = isNestedSelector ? `& ${attributeName}` : attributeName;

            mappedAttributes[correctedAttributeName] = mapAttributes(attributeValue);
        } else {
            mappedAttributes[attributeName] = attributeValue;
        }
    });

    return mappedAttributes;
};

const styler = (type, renderAttributes) => styled(type)([], (props) => {
    const renderedAttributes = renderAttributes(props);

    const mappedAttributes = mapAttributes(renderedAttributes);

    console.log({
        mappedAttributes
    });

    return mappedAttributes;
});
export default styler;
