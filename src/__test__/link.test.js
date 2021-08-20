import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../test_components/Link';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="http://www.facebook.com">Facebook</Link>,
    );

    let tree = component.toJSON();
    // console.log("Tree", tree);
    expect(tree).toMatchSnapshot();

});

test('Instagram Link changes the class when hovered', () => {
    const component = renderer
    .create(<Link page="http://www.instagram.com">Instagram</Link>);

    let tree = component.toJSON();
    // console.log("Tree", tree);
    expect(tree).toMatchSnapshot();

});

